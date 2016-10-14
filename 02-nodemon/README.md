## Nodemon

Our image only has Node.js and npm installed. To restart our app on file changes, wouldn't
it be great if we had nodemon installed in the image too?

Let's create a new image with the added layer of nodemon.

We take the base image and add a couple steps:

    FROM node:6.8.0

    # Create a directory for our code and set it as the working directory
    RUN mkdir -p /app
    WORKDIR /app

    # Install nodemon globally
    RUN npm install -g nodemon

    # Set a default command for docker run
    CMD nodemon index.js

Now we build it and tag it with a new name (`nodemon`) and version (`6.8.0`):

    docker build -t nodemon:6.8.0 .

Now we run a container with our new image. We can skip the command argument since we set
a default command (`CMD`) above:

    docker run -v `pwd`:/app -p 8080:8080 nodemon:6.8.0
