FROM node:latest as build
WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Copy the built Angular application from the build container to the nginx container
COPY --from=build /app/dist/book-network-ui /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]






