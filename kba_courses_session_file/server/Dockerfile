FROM node:20.15.1
WORKDIR /Usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node","app.js"]