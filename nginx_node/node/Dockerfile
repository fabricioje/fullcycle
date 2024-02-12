FROM node:15

WORKDIR /usr/src/app

RUN npm install
RUN npm install express && npm install mysql --save

COPY . .

# EXPOSE 3000

CMD [ "node", "index.js" ]