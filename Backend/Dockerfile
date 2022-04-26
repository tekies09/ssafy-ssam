FROM java:8

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJar

EXPOSE 8081
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar/
ENTRYPOINT ["java", "-jar", "/app.jar"]
