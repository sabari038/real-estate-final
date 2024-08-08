package com.example.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.spring.dto.UserDto;
import com.example.spring.entity.User;
import com.example.spring.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Endpoint for user registration
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
        try {
            // Create a new User entity from the provided UserDto
            User user = new User();
            user.setEmail(userDto.getEmail());
            user.setName(userDto.getName());
            user.setPassword(userDto.getPassword()); // Password will be encoded in the service layer
            
            // Register the user and return the registered user entity
            return ResponseEntity.ok(userService.registerUser(user));
        } catch (Exception e) {
            // Return an internal server error response if any exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    // Endpoint for user login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDto userDto) {
        try {
            // Find the user by email
            User foundUser = userService.findByEmail(userDto.getEmail());
            
            // Check if the user exists and the password matches
            if (foundUser != null && passwordEncoder.matches(userDto.getPassword(), foundUser.getPassword())) {
                // Return the found user entity if authentication is successful
                return ResponseEntity.ok(foundUser);
            }
            // Return an unauthorized response if authentication fails
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        } catch (Exception e) {
            // Return an internal server error response if any exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    // Endpoint to get all users
    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        try {
            // Retrieve all users
            List<User> users = userService.findAllUsers();
            // Return the list of users
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            // Return an internal server error response if any exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
