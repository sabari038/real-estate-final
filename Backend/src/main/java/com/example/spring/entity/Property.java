package com.example.spring.entity;

import jakarta.persistence.*;

@Entity // Marks this class as a JPA entity
@Table(name = "properties") // Specifies the table name in the database
public class Property {

    @Id // Marks this field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Specifies the generation strategy for the primary key
    private Long id;

    private String location; // Location of the property
    private String bhk; // Number of bedrooms, halls, and kitchens (BHK)
    private String propertyType; // Type of the property (e.g., apartment, villa)
    private String size; // Size of the property
    private String price; // Price of the property
    private boolean sale; // Indicates if the property is for sale
    private boolean rent; // Indicates if the property is for rent
    private String details; // Additional details about the property
    private String agentName; // Name of the agent handling the property
    private String agentContact; // Contact information of the agent

    // Default constructor
    public Property() {
    }

    // Parameterized constructor
    public Property(Long id, String location, String bhk, String propertyType, String size, String price, boolean sale, boolean rent, String details, String agentName, String agentContact) {
        this.id = id;
        this.location = location;
        this.bhk = bhk;
        this.propertyType = propertyType;
        this.size = size;
        this.price = price;
        this.sale = sale;
        this.rent = rent;
        this.details = details;
        this.agentName = agentName;
        this.agentContact = agentContact;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBhk() {
        return bhk;
    }

    public void setBhk(String bhk) {
        this.bhk = bhk;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public boolean isSale() {
        return sale;
    }

    public void setSale(boolean sale) {
        this.sale = sale;
    }

    public boolean isRent() {
        return rent;
    }

    public void setRent(boolean rent) {
        this.rent = rent;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getAgentName() {
        return agentName;
    }

    public void setAgentName(String agentName) {
        this.agentName = agentName;
    }

    public String getAgentContact() {
        return agentContact;
    }

    public void setAgentContact(String agentContact) {
        this.agentContact = agentContact;
    }
}
