# Infra 101: The Best Ever

# Docker Basics 

### Build image

    docker build -t infra-101-best-ever .

### Run tests

    docker run --rm infra-101-best-ever npm test

### Start app

    docker run -p 3000:3000 --rm infra-101-best-ever   
    
### Open interactive shell

    docker run --rm -it infra-101-best-ever sh
    
## Docker Development Cycle

Rebuilding the docker image to reflect code changes is time consuming. You can bypass this by mounting the local file system to the docker container using the *-v flag*: 

    docker run --rm -v $(pwd):/app infra-101-best-ever npm install

Running tests:

    docker run --rm -v $(pwd):/app infra-101-best-ever npm test

## Using Make

A makefile can simplify invoking the above commands.

* `make build`: Build docker image for app
* `make shell`: Open interactive shell for docker container
* `make test`: Run tests in docker container
* `make start`: Start app in docker container
