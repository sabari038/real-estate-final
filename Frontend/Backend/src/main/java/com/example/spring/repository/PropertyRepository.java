package com.example.spring.repository;

import com.example.spring.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// Repository interface for managing Property entities
@Repository // Indicates that this interface is a Spring Data JPA repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    // Method to find properties by the number of bedrooms (BHK)
    List<Property> findByBhk(String bhk);

    // Method to find properties by property type
    List<Property> findByPropertyType(String propertyType);
}
