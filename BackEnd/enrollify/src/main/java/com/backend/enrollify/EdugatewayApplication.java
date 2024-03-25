package com.backend.enrollify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EdugatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdugatewayApplication.class, args);
	}

}