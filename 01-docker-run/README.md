# Docker run example

Pull the image from [Dockerhub](https://hub.docker.com/_/node/) ([Dockerfile](https://github.com/nodejs/docker-node/blob/4029a8f71920e1e23efa79602167014f9c325ba0/6.7/Dockerfile)):

    docker pull node:6.8.0

Run the code in a container, exposing the port that the express.js app is running on:

    docker run -v `pwd`:/app -p 8080:8080 node:6.8.0 node /app/index.js

Now try out [http://localhost:8080](http://localhost:8080) in your browser.
