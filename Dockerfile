FROM node:latest as build
WORKDIR /app

# Copy the rest of your application source code to the container
COPY . .
# Install project dependencies
RUN npm install
# Build the Angular application
RUN npm run build

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Copy the built Angular application from the build container to the nginx container
COPY --from=build /app/dist/book-network-ui /usr/share/nginx/html

EXPOSE 4200

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]