FROM nginx:1.15.0-alpine

# #remove a configuração default do nginx
RUN rm /etc/nginx/conf.d/default.conf

#copia o arquivo nginx.conf que foi editado
COPY nginx.conf /etc/nginx/conf.d

#criando um arquivo index.php para evitar que de erro 404
RUN mkdir /var/www/html -p && touch /var/www/html/index.php

EXPOSE 80

# ENTRYPOINT ["/docker-entrypoint.sh"]
# CMD ["nginx"]
