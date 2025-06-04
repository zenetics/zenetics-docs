SERVICE_NAME=zenetics-docs
SERVICE_PORT=3012

# Run server
.PHONY: setup run-dev start-dev build build-local

setup:
	pnpm install

run-dev:
	PORT=${SERVICE_PORT} pnpm run dev 

start-dev:
	PORT=${SERVICE_PORT} pnpm run start

build:
	pnpm run build 

# Build Dockerfile
docker-build-local: 
	docker build -t $(SERVICE_NAME):local-latest .

