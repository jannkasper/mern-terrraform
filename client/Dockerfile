FROM node:14-slim


RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

COPY . .
RUN #yarn install
RUN npm install -g serve
RUN npm install
RUN npm run build

COPY . .

EXPOSE 8080

#CMD [ "yarn", "start" ]
CMD ["serve", "-s", "-l", "8080", "./build"]
