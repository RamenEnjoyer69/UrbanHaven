FROM node:20.18-alpine3.20

WORKDIR /main

COPY * /main

COPY . .

RUN npm i

EXPOSE 3000

CMD npm run dev
