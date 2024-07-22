# Use an OpenJDK 17 image as the base
FROM openjdk:17-jdk-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the application JAR file to the working directory
COPY ./target/ooredoo-login-0.0.1-SNAPSHOT.jar ooredoo-login-0.0.1.jar

# Expose the port your application will run on
EXPOSE 8082

# Entry point to start the application
ENTRYPOINT ["java", "-jar", "ooredoo-login-0.0.1.jar"]