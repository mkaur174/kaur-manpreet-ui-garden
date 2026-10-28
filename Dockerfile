# 1: Build the React application
FROM node:18 AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package installation files
COPY package*.json ./
# Install all project dependencies
RUN npm install
# Copy the rest of  UI library source code into the container
COPY . .
#Build the production-ready static files
RUN npm run build

# : Serve using Nginx
FROM nginx:alpine
# Copy the built static files from line 1 into Nginx's public web folder
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 inside the container
EXPOSE 80
# Start Nginx in the foreground so the container stays running
CMD ["nginx", "-g", "daemon off;"]