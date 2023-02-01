# FROM maven:3.8.4-jdk-8 AS build
# WORKDIR /backendApp
# COPY src /backendApp/src
# COPY pom.xml /backendApp/
# RUN mvn clean package -Dmaven.test.skip=true
# RUN mkdir -p /app
# RUN cp target/*.jar /app/app.jar

FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD application.properties application.properties
ADD gradthesis.demo-0.0.1-SNAPSHOT.jar /app/
EXPOSE 8085
ENTRYPOINT ["java","-jar","/app/gradthesis.demo-0.0.1-SNAPSHOT.jar"]
