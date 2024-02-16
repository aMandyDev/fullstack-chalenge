FROM node:20
COPY ./ /app
RUN cd /app \
    && npm install \
    && npm run build \
    && npm run dev
WORKDIR /app
