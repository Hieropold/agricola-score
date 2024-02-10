FROM nginx:stable-alpine
COPY /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY docker-env.sh /docker-entrypoint.d/docker-env.sh
RUN chmod +x /docker-entrypoint.d/docker-env.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]