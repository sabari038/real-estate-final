package com.example.spring.entity;

import jakarta.persistence.*;

@Entity // Marks this class as a JPA entity
@Table(name = "users") // Specifies the table name in the database
public class User {
    
    @Id // Marks this field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Specifies the generation strategy for the primary key
    private Long id;

    @Column(nullable = false, unique = true) // Specifies the column attributes: non-nullable and unique
    private String email;

    @Column(nullable = false) // Specifies the column attribute: non-nullable
    private String password;

    @Column(nullable = false) // Specifies the column attribute: non-nullable
    private String name;

    // Default constructor
    public User() {}

    // Constructor with parameters
    public User(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
