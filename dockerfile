FROM node:16.16.0

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
RUN npm ci --omit=dev

COPY .env ./
ADD templates ./templates
ADD dist ./dist
# ADD node_modules ./node_modules

EXPOSE 5645

CMD [ "npm", "start" ]