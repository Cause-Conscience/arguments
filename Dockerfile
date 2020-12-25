FROM node:14.15.3



COPY . /.app_platform_workspace/

CMD [ "node", "index.mjs" ]
