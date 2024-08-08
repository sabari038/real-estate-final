package com.example.spring.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.spring.entity.User;
import com.example.spring.repository.UserRepository;

/**
 * Custom implementation of the UserDetailsService interface.
 * Provides user details to Spring Security.
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Loads user details by email.
     * @param email The email of the user to retrieve.
     * @return UserDetails object containing user details.
     * @throws UsernameNotFoundException if no user is found with the provided email.
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Retrieve the user from the repository using the provided email.
        User user = userRepository.findByEmail(email);
        
        // If the user is not found, throw an exception.
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        // Return a UserDetails object containing the user's email, password, and an empty list of authorities.
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
    }
}
