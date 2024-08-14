SERVICE_NAME=zenetics-docs

# Run server
.PHONY: run build build-local

run:
	pnpm run dev 

build:
	pnpm run build 

# Build Dockerfile
docker-build-local: 
	docker build -t $(SERVICE_NAME):local-latest .

