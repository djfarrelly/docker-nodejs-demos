# Docker Compose

We can use [Docker Compose](https://docs.docker.com/compose/) to help us more easily run
several containers at the same time. Instead of passing arguments to `docker run` we
declare these options in a `docker-compose.yml` file
([see docs](https://docs.docker.com/compose/compose-file/)):

    version: "2"
    services:

      # Our node services
      web:
        image: nodemon:6.8.0
        volumes:
         - ./web:/app
        ports:
         - "8080:8080"
        # These links will add DNS entries to make it easier to connect containers
        links:
         - redis
         - api

      api:
        # We can use "build" instead of "image" to tell Docker Compose to build a new image
        # from our Dockerfile then run that image in one step:
        build:
          context: ./api
        volumes:
         - ./api:/app
        ports:
         - "8081:80"

      # Other dependencies. These will be pulled from Docker hub automatically
      redis:
        image: redis:3.0

Now we can run all these containers with a single command from the directory with your yml file:

    docker-compose up

If you want to run these in the background run it detached:

    docker-compose up -d

Check running containers using ps:

    docker-compose ps

In detached mode, you can tail your logs by passing the name of the container from your yml file:

    docker-compose logs -f web

Now we can stop everything:

    docker-compose stop
