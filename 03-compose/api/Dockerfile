FROM node:6.3.0

# Create a directory for our code and set it as the working directory
RUN mkdir -p /app
WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Set a default command for docker run
CMD nodemon index.js
