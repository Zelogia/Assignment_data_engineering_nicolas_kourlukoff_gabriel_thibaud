FROM node:14-alpine

RUN mkdir -p /app_react_node

WORKDIR /app_react_node

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3001

CMD [ "node", "index.js" ]