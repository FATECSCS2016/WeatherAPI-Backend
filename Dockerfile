FROM hypriot/rpi-node:latest

# make the src folder available in the docker image
ADD / /src
WORKDIR /src

# install the production dependencies from the package.json file
RUN npm install --only=production

# make port 80 available outside of the image
EXPOSE 3000

# start node with the index.js file of our hello-world application
CMD ["npm", "star"]