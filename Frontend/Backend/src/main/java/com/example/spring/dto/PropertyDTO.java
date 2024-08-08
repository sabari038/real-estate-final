package com.example.spring.dto;

public class PropertyDTO {
    // Fields representing the properties of a real estate listing
    private Long id; // Unique identifier for the property
    private String location; // Location of the property
    private String bhk; // Number of bedrooms, halls, and kitchens (BHK)
    private String propertyType; // Type of the property (e.g., apartment, villa)
    private String size; // Size of the property
    private String price; // Price of the property
    private boolean sale; // Indicates if the property is for sale
    private boolean rent; // Indicates if the property is for rent
    private String details; // Additional details about the property
    private String agentName; // Name of the agent responsible for the property
    private String agentContact; // Contact information of the agent

    // Getters and Setters
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
