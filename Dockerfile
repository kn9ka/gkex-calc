FROM node:21.6.1-alpine as node-package

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]