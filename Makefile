.DEFAULT_GOAL := help
IMAGE_NAME := infra-101-best-ever

help:
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Build docker image for app
	docker build -t $(IMAGE_NAME) .

shell: ## Open interactive shell for docker container
	docker run --rm -it $(IMAGE_NAME) sh

start: ## Start app in docker container
	docker run -p 3000:3000 --rm $(IMAGE_NAME)

test: ## Test app in docker container
	docker run --rm -ti $(IMAGE_NAME) npm test
