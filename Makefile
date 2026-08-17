.PHONY: dev build up down logs clean

# Start development environment
dev:
	cd frontend && npm run dev
	@echo "Frontend: http://localhost:5173"

# Production build (local)
build:
	npm run build
	@echo "Build complete"

# Docker operations
up:
	docker compose up -d --build
	@echo "App running at http://localhost:3002"

down:
	docker compose down

# Deploy (push to GitHub first, then run this)
deploy:
	bash /root/hermes/scripts/update.sh mentengdutch

# Utility
logs:
	docker compose logs -f

clean:
	docker compose down -v
	rm -rf dist
