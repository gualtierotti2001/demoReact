# Fetching the latest node image on alpine linux
FROM node:alpine

# Declaring env
ENV REACT_APP_MY_BE http://localhost:8080

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app

COPY ./package-lock.json /react-app

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start