FROM mhart/alpine-node:12.4.0

WORKDIR /app

COPY ./package* ./
RUN npm install

COPY . .

ENTRYPOINT ["npm"]
CMD ["start"]
