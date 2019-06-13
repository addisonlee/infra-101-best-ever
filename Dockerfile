FROM node:12.4.0-alpine

WORKDIR /app

COPY ./package* ./
RUN npm install

COPY . .

ENTRYPOINT ["npm"]
CMD ["start"]
