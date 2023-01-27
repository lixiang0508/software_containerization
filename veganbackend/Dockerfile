FROM maven:3.8.4-jdk-8 AS build
WORKDIR /backendApp
COPY src /backendApp/src
COPY pom.xml /backendApp/
RUN mvn clean package -Dmaven.test.skip=true
RUN mkdir -p /app
RUN cp target/*.jar /app/app.jar

FROM openjdk:8-jdk-alpine
COPY --from=build /app /app/
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]