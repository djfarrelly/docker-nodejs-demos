## Nodemon

Our image only has Node.js and npm installed. To restart our app on file changes, wouldn't
it be great if we had nodemon installed in the image too?

Let's create a new image with the added layer of nodemon.

We take the base image and add a couple steps:

    FROM node:6.8.0

    RUN mkdir -p /app
    WORKDIR /app

    ENV NODE_ENV development

    RUN npm install -g nodemon

    CMD nodemon index.js

Now we build it:

    docker build -t nodemon:6.8.0 .

Now we run the new image:

    docker run -v `pwd`:/app -p 8080:8080 nodemon:6.8.0
