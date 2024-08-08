package com.example.spring;

import org.springframework.boot.SpringApplication;

public class TestRealEstateApplication {

	public static void main(String[] args) {
		SpringApplication.from(RealEstateApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
