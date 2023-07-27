cnf ?= .env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


# DOCKER TASKS

build: ## Build the container
	docker build --tag ${DOCKER_USERNAME} .

build-no-cache: ## Build the container with no cache
	docker build --no-cache --tag ${DOCKER_USERNAME} .

run-p: ## Run container on port configured in `.env` with comand -p=${PORT}:${PORT} 
	docker run -d --expose=${PORT} -p=${PORT}:${PORT} --name="${APP_NAME}" ${DOCKER_USERNAME} 

run: ## Run container on port configured in `.env` with comand --network=host
	docker run -d --expose=${PORT} --network=host --name="${APP_NAME}" ${DOCKER_USERNAME} 

remove: ## Stop and remove a running container
	docker stop ${APP_NAME}; docker rm ${APP_NAME}

stop: ## Stop a running container
	docker stop ${APP_NAME}

start: ## Start a container
	docker start ${APP_NAME}

restart: ## Restart a container
	docker restart ${APP_NAME}

logs: ## Show logs of container
	docker logs ${APP_NAME}