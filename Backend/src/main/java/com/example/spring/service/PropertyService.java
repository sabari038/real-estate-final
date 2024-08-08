package com.example.spring.service;

import java.util.List;
import com.example.spring.dto.PropertyDTO;
import com.example.spring.dto.SearchCriteria;

public interface PropertyService {
    
    /**
     * Retrieves a list of all properties.
     */
    List<PropertyDTO> getAllProperties();
    
    /**
     * Retrieves a specific property by its ID.
     * @param id The ID of the property to retrieve.
     */
    PropertyDTO getPropertyById(Long id);
    
    /**
     * Creates a new property.
     * @param propertyDTO The PropertyDTO object containing the property details to be created.
     */
    PropertyDTO createProperty(PropertyDTO propertyDTO);
    
    /**
     * Updates an existing property.
     * @param id The ID of the property to update.
     * @param propertyDTO The PropertyDTO object containing the updated property details.
     */
    PropertyDTO updateProperty(Long id, PropertyDTO propertyDTO);
    
    /**
     * Deletes a property by its ID.
     * @param id The ID of the property to delete.
     */
    void deleteProperty(Long id);
    
    /**
     * Searches for properties based on various criteria.
     * @param searchCriteria The SearchCriteria object containing the search parameters.
     */
    List<PropertyDTO> searchProperties(SearchCriteria searchCriteria);
    
    /**
     * Retrieves a list of properties filtered by the number of bedrooms (BHK).
     * @param bhk The BHK value to filter properties by.
     */
    List<PropertyDTO> getPropertiesByBhk(String bhk);
    
    /**
     * Retrieves a list of properties filtered by the type of property.
     * @param propertyType The type of property to filter by.
     */
    List<PropertyDTO> getPropertiesByPropertyType(String propertyType);
}
