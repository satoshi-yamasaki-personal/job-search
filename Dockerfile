FROM node:16

RUN npm i -g @nestjs/cli

WORKDIR /api-server
COPY package*.json /api-server/

RUN npm i
CMD ["npm", "run", "start:dev"]
