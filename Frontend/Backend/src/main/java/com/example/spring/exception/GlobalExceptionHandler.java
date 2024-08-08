package com.example.spring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice // Indicates that this class provides centralized exception handling across all @RequestMapping methods
public class GlobalExceptionHandler {

    // Handles UserNotFoundException
    @ExceptionHandler(UserNotFoundException.class) // Specifies the exception to handle
    public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND); // Returns a 404 Not Found response
    }

    // Handles all other exceptions
    @ExceptionHandler(Exception.class) // Specifies the exception to handle
    public ResponseEntity<?> handleGlobalException(Exception ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR); // Returns a 500 Internal Server Error response
    }
}
