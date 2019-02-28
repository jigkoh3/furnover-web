FROM node:8.9 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env-prod
RUN npm run build -- --prod

FROM nginx
RUN rm /etcnginx/conf.d/*
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /app/dist/angular6-material /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]