FROM node:14-alpine
RUN mkdir /application
WORKDIR /application

COPY package.json /application/
RUN npm install --only=production

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
