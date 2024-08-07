package com.example.spring.dto;

public class SearchCriteria {
    // Fields representing the search criteria for properties
    private String location; // Location of the property
    private String bhk; // Number of bedrooms, halls, and kitchens (BHK)
    private String propertyType; // Type of the property (e.g., apartment, villa)
    private String sizeMin; // Minimum size of the property
    private String sizeMax; // Maximum size of the property
    private String budgetMin; // Minimum budget for the property
    private String budgetMax; // Maximum budget for the property
    private boolean rent; // Indicates if the property is for rent
    private boolean sale; // Indicates if the property is for sale

    // Getters and setters
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

    public String getSizeMin() {
        return sizeMin;
    }

    public void setSizeMin(String sizeMin) {
        this.sizeMin = sizeMin;
    }

    public String getSizeMax() {
        return sizeMax;
    }

    public void setSizeMax(String sizeMax) {
        this.sizeMax = sizeMax;
    }

    public String getBudgetMin() {
        return budgetMin;
    }

    public void setBudgetMin(String budgetMin) {
        this.budgetMin = budgetMin;
    }

    public String getBudgetMax() {
        return budgetMax;
    }

    public void setBudgetMax(String budgetMax) {
        this.budgetMax = budgetMax;
    }

    public boolean isRent() {
        return rent;
    }

    public void setRent(boolean rent) {
        this.rent = rent;
    }

    public boolean isSale() {
        return sale;
    }

    public void setSale(boolean sale) {
        this.sale = sale;
    }
}
