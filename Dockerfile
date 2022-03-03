# syntax=docker/dockerfile:1

# FROM node:16

# WORKDIR /app
# COPY ./package.json ./
# COPY ./yarn.lock ./
# RUN yarn install
# COPY . ./

# EXPOSE 8080

# RUN chmod +x ./start.sh
# CMD ["./start.sh"]


FROM node:16
# RUN npm i -g @nestjs/cli
RUN yarn add @nestjs/cli

WORKDIR /api-server
COPY pakage*.json /api-server/
COPY yarn.lock /api-server/

# RUN npm i
RUN yarn install
# CMD ["npm",  "run", "start:dev"]

# COPY . ./
# EXPOSE 8080
# RUN chmod +x ./start.sh
# CMD ["./start.sh"]
CMD ["yarn", "prisma", "migrate"]
CMD ["yarn", "prisma", "generate"]
CMD ["yarn", "start"]
