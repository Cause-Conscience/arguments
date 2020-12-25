FROM node:14.15.3

WORKDIR /app

COPY . .

CMD [ "node", "index.mjs" ]
