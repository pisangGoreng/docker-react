FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html


# docker build .
# docker run -p 8080:80 c1f5aae94ecb


# --from=builder => copy file system dari step builder (node:alpine)
# /app/build => path file yang akan di copy
# /usr/share/nginx/html => path lokasi copy file di dalam container nignx