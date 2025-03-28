SERVICE_NAME=zenetics-docs

# Run server
.PHONY: setup run build build-local

setup:
	pnpm install

run:
	PORT=3002 pnpm run dev 

build:
	pnpm run build 

# Build Dockerfile
docker-build-local: 
	docker build -t $(SERVICE_NAME):local-latest .

