FROM node:14
WORKDIR /opt/chinook
COPY . /opt/chinook
RUN npm install
RUN npm i -g rimraf
RUN npm i -D sqlite3
RUN rimraf node_modules
RUN npm install
CMD npm run start
EXPOSE 5000