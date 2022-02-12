FROM node:14-alpine 

RUN mkdir -p /app_data_engineering

WORKDIR /app_data_engineering

COPY package.json /app_data_engineering

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]