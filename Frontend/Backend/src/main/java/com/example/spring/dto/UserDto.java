package com.example.spring.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {
    // Fields representing the data transfer object for User

    @Email // Ensures that the email field contains a valid email address
    @NotBlank // Ensures that the email field is not null or empty
    private String email; // User's email address

    @NotBlank // Ensures that the name field is not null or empty
    private String name; // User's name

    private String password; // User's password (optional in DTO)

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
