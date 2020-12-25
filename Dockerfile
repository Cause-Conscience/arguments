FROM node:14.15.3

COPY . .

CMD [ "node", "index.mjs" ]
