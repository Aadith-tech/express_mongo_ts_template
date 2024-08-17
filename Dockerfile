ARG NODE_VERSION=21.6.1

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]

EXPOSE 3000
