spring.config.import=file:env.properties
spring.application.name=backend
server.port=8081

spring.datasource.url=jdbc:postgresql://localhost:5432/backend
spring.datasource.username=postgres
spring.datasource.password=ciao1998
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update

cloudinary.cloud_name=${cloud_name}
cloudinary.api_key=${api_key}
cloudinary.api_secret=${api_secret}

##gmail
#spring.mail.host=smtp.gmail.com
#spring.mail.port=587
#spring.mail.username=${gmail.email}
#spring.mail.password=${gmail.password}
#spring.mail.protocol=smtp
#spring.mail.properties.mail.smtp.auth=true
#spring.mail.properties.mail.smtp.starttls.enable=true
#spring.mail.properties.mail.smtp.starttls.required=true
#spring.mail.properties.mail.smtp.ssl.enable=false
#spring.mail.debug=true
