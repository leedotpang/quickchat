FROM node:16-slim

WORKDIR /srv/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]