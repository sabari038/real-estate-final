package com.example.spring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import com.example.spring.service.impl.CustomUserDetailsService;

@Configuration // Marks this class as a configuration class
@EnableWebSecurity // Enables Spring Security’s web security support and provides the Spring MVC integration
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService customUserDetailsService; // Injects the custom user details service

    // Bean definition for AuthenticationManager
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        // Creates and configures an AuthenticationManager
        return http.getSharedObject(AuthenticationManagerBuilder.class)
            .userDetailsService(customUserDetailsService) // Sets the custom user details service
            .passwordEncoder(passwordEncoder()) // Sets the password encoder
            .and()
            .build(); // Builds the AuthenticationManager
    }

    // Bean definition for SecurityFilterChain
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable() // Disables CSRF protection
            .authorizeHttpRequests(authorize -> authorize
                .anyRequest().permitAll() // Permits all requests (not secured)
            )
            .httpBasic(); // Enables HTTP Basic authentication
        return http.build(); // Builds the SecurityFilterChain
    }

    // Bean definition for PasswordEncoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Uses BCrypt for password encoding
    }
}
