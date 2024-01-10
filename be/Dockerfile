FROM node:16

WORKDIR /app

COPY package*.json .

RUN apt-get update && apt-get install -y curl

RUN apt-get update && apt-get install -y nodejs

RUN yarn install

COPY . .


CMD ["yarn","dev"]