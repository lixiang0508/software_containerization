#FROM node:14.1-alpine AS builder

#WORKDIR /web
#COPY package.json package-lock.json ./
#RUN npm install
#ENV PATH="./node_modules/.bin:$PATH"
#COPY . ./
#RUN npm run build

#运行阶段
FROM nginx:1.21.5
RUN mkdir -p /usr/local/nginx/html
COPY dist/ /usr/local/nginx/html/dist
#COPY /default.conf /etc/nginx/conf.d/default.conf
