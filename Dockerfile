FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Create app directory
WORKDIR /app

EXPOSE 9000
# CMD [ "node", "server.js" ]
CMD [ "npm", "run", "prod" ]
# CMD ["npx sequelize-cli db:migrate && node server.js"]