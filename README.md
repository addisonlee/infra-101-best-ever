# infra-101-best-ever
Infra 101, The Best Ever


# Docker container app deployment
Following the nexts steps you could build and run the app using Docker container 

### Building the image
For build the image you have to run the next command:

    docker build -t infra-101-best-ever .

### Run tests
For run tests of the application you have to run the next command:

    docker run --rm infra-101-best-ever npm test
        
### Run app
For run the node application you have to run the next command:

    docker run -p 3000:3000 --rm infra-101-best-ever   
    
### Inside the container

You can enter the container with the next command:

    docker run --rm -ti infra-101-best-ever sh
    
## Bonus info
You can install, run and test your local node application using the image compiled before with **-v flag** (volume), in this way you can show inmedeatly your local changes.
    
    docker run --rm -v $(pwd):/app infra-101-best-ever npm install
For run my local tests:

    docker run --rm -v $(pwd):/app infra-101-best-ever npm test
    
## Using Make
In this project you can see a script **Makefile**, this script have embebed the instructions that we show before, these instructions are:

* **make build** : Build docker image for app (Building the imag)
* **make shell** : Open interactive shell for docker container (inside the container)
* **make test** : Run tests app in docker container (Run tests)
* **make start** : Start app in docker container (Run app)

