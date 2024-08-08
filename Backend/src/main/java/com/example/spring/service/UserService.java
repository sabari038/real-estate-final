package com.example.spring.service;

import java.util.List;
import com.example.spring.entity.User;

public interface UserService {
    
    /**
     * Registers a new user.
     * @param user The User object containing user details.
     * @throws Exception If an error occurs during registration.
     */
    User registerUser(User user) throws Exception;
    
    /**
     * Retrieves a user by email.
     * @param email The email of the user to retrieve.
     */
    User findByEmail(String email);
    
    /**
     * Retrieves a list of all users.
     */
    List<User> findAllUsers(); 
}
