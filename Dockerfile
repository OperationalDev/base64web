FROM nginxinc/nginx-unprivileged:latest

COPY . /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]