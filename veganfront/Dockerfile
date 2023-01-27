FROM node:14.1-alpine AS builder

WORKDIR /web
COPY package.json package-lock.json ./
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN npm run build

#运行阶段
FROM nginx
COPY --from=builder /web/build /usr/share/nginx/html
COPY /default.conf /etc/nginx/conf.d/default.conf