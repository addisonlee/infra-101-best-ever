FROM node:12.4.0-alpine

EXPOSE 3000
WORKDIR /app

COPY ./package* ./
RUN npm install

COPY . .

CMD ["npm","start"]
