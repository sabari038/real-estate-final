package com.example.spring.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.spring.entity.User;
import com.example.spring.repository.UserRepository;
import com.example.spring.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Registers a new user by encoding their password and saving them to the repository.
     * @param user The User entity to be registered.
     * @return The registered User entity.
     * @throws Exception If there is an issue during registration.
     */
    @Override
    public User registerUser(User user) throws Exception {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encode the user's password
        return userRepository.save(user); // Save and return the registered user
    }

    /**
     * Finds a user by their email address.
     * @param email The email of the user to find.
     * @return The User entity with the given email, or null if not found.
     */
    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email); // Retrieve the user by email
    }

    /**
     * Retrieves all users from the repository.
     * @return List of all User entities.
     */
    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll(); // Retrieve and return all users
    }
}
