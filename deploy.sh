#!/usr/bin/env bash
# Auto-deploy script for mentengdutch
# Called by systemd timer every 2 minutes
# Checks for new git commits, rebuilds and deploys if changed

set -euo pipefail

REPO_DIR="/root/hermes/mentengdutch"
LOG_FILE="/root/hermes/mentengdutch/deploy.log"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

mkdir -p "$(dirname "$LOG_FILE")"

log() {
    echo "[$TIMESTAMP] $1" >> "$LOG_FILE"
}

cd "$REPO_DIR" || { log "ERROR: Cannot cd to $REPO_DIR"; exit 1; }

# Fetch latest from origin
git fetch origin main 2>/dev/null || { log "ERROR: git fetch failed"; exit 1; }

# Check if local is behind remote
LOCAL_COMMIT=$(git rev-parse HEAD)
REMOTE_COMMIT=$(git rev-parse origin/main)

if [ "$LOCAL_COMMIT" = "$REMOTE_COMMIT" ]; then
    # No new commits — silent exit
    exit 0
fi

log "New commits detected: ${LOCAL_COMMIT:0:8} → ${REMOTE_COMMIT:0:8}"

# Pull latest
git pull origin main 2>&1 || { log "ERROR: git pull failed"; exit 1; }
log "Git pull successful"

# Rebuild Docker containers
docker compose build --no-cache jakarta-munch 2>&1 || { log "ERROR: docker build failed"; exit 1; }
log "Docker build successful"

# Restart
docker compose up -d 2>&1 || { log "ERROR: docker compose up failed"; exit 1; }
log "Docker compose up -d successful"

# Verify
sleep 2
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3002 || echo "000")

if [ "$HTTP_CODE" = "200" ]; then
    log "✅ Deploy OK — HTTP $HTTP_CODE, commit ${REMOTE_COMMIT:0:8}"
else
    log "⚠️ Deploy completed but HTTP $HTTP_CODE"
fi

# Keep only last 100 log entries to avoid disk filling
tail -100 "$LOG_FILE" > "${LOG_FILE}.tmp" && mv "${LOG_FILE}.tmp" "$LOG_FILE"
