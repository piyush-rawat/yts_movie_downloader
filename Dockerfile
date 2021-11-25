FROM node:12.18.0
WORKDIR /app
COPY . .
RUN cd FRONTEND \
&& npm install --silent \
&& npm run build \
&& rm -r node_modules \
&& mv build ../BACKEND \
&& npm install --prefix ../BACKEND
WORKDIR /app/BACKEND
CMD ["node","server.js"]