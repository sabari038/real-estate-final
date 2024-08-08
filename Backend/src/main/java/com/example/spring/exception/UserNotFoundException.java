package com.example.spring.exception;

// Custom exception class for handling cases where a user is not found
public class UserNotFoundException extends RuntimeException {

    // Constructor that accepts a message and passes it to the superclass (RuntimeException)
    public UserNotFoundException(String message) {
        super(message); // Calls the constructor of RuntimeException with the provided message
    }
}
