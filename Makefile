.PHONY: dev build up down logs clean deploy

# Start development environment
dev:
	npm run dev
	@echo "Jakarta Munch: http://localhost:5173"

# Production build
build:
	npm ci && npm run build
	@echo "Build complete"

# Docker operations
up:
	docker compose up -d --build
	@echo "Jakarta Munch running — http://localhost:3002"

down:
	docker compose down

# Utility
logs:
	docker compose logs -f

clean:
	docker compose down -v
	rm -rf dist

deploy:
	./update.sh