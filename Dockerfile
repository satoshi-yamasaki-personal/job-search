FROM node:16
RUN yarn global add @nestjs/cli

WORKDIR /api-server
COPY pakage*.json /api-server/
COPY yarn.lock /api-server/

RUN yarn install

CMD ["yarn", "prisma", "migrate"]
CMD ["yarn", "prisma", "generate"]
CMD ["yarn", "start:dev"]
