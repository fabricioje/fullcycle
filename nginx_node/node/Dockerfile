FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install express && npm install mysql --save

# RUN npm install
# RUN npm install express && npm install mysql --save

COPY . .

CMD [ "node", "index.js" ]
# CMD [ "bash"]