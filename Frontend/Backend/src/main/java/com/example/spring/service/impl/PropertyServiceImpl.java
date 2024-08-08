package com.example.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.dto.PropertyDTO;
import com.example.spring.dto.SearchCriteria;
import com.example.spring.entity.Property;
import com.example.spring.repository.PropertyRepository;
import com.example.spring.service.PropertyService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PropertyServiceImpl implements PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public List<PropertyDTO> getAllProperties() {
        // Fetches all properties from the repository and converts them to DTOs
        return propertyRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    @Override
    public PropertyDTO getPropertyById(Long id) {
        // Fetches a property by ID, converts it to a DTO, or returns null if not found
        return propertyRepository.findById(id)
            .map(this::convertToDTO)
            .orElse(null);
    }

    @Override
    public PropertyDTO createProperty(PropertyDTO propertyDTO) {
        // Converts the provided DTO to an entity, saves it, and returns the saved entity as a DTO
        Property property = convertToEntity(propertyDTO);
        return convertToDTO(propertyRepository.save(property));
    }

    @Override
    public PropertyDTO updateProperty(Long id, PropertyDTO propertyDTO) {
        // Fetches the existing property, updates its fields, saves it, and returns the updated entity as a DTO
        Property existingProperty = propertyRepository.findById(id).orElse(null);
        if (existingProperty != null) {
            existingProperty.setLocation(propertyDTO.getLocation());
            existingProperty.setBhk(propertyDTO.getBhk());
            existingProperty.setPropertyType(propertyDTO.getPropertyType());
            existingProperty.setSize(propertyDTO.getSize());
            existingProperty.setPrice(propertyDTO.getPrice());
            existingProperty.setSale(propertyDTO.isSale());
            existingProperty.setRent(propertyDTO.isRent());
            existingProperty.setDetails(propertyDTO.getDetails());
            existingProperty.setAgentName(propertyDTO.getAgentName());
            existingProperty.setAgentContact(propertyDTO.getAgentContact());
            return convertToDTO(propertyRepository.save(existingProperty));
        }
        return null; // Return null if property to update is not found
    }

    @Override
    public void deleteProperty(Long id) {
        // Deletes a property by ID
        propertyRepository.deleteById(id);
    }

    @Override
    public List<PropertyDTO> getPropertiesByBhk(String bhk) {
        // Fetches properties by BHK, converts them to DTOs, and returns the list
        return propertyRepository.findByBhk(bhk).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    @Override
    public List<PropertyDTO> getPropertiesByPropertyType(String propertyType) {
        // Fetches properties by type, converts them to DTOs, and returns the list
        return propertyRepository.findByPropertyType(propertyType).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    @Override
    public List<PropertyDTO> searchProperties(SearchCriteria searchCriteria) {
        // Searches properties based on the criteria, converts them to DTOs, and returns the list
        List<Property> properties = propertyRepository.findAll().stream()
            .filter(property -> (searchCriteria.getLocation() == null || property.getLocation().contains(searchCriteria.getLocation())) &&
                                (searchCriteria.getBhk() == null || property.getBhk().equals(searchCriteria.getBhk())) &&
                                (searchCriteria.getPropertyType() == null || property.getPropertyType().equals(searchCriteria.getPropertyType())) &&
                                (searchCriteria.getSizeMin() == null || getNumericSize(property.getSize()) >= Double.parseDouble(searchCriteria.getSizeMin())) &&
                                (searchCriteria.getSizeMax() == null || getNumericSize(property.getSize()) <= Double.parseDouble(searchCriteria.getSizeMax())) &&
                                (searchCriteria.getBudgetMin() == null || Double.parseDouble(property.getPrice()) >= Double.parseDouble(searchCriteria.getBudgetMin())) &&
                                (searchCriteria.getBudgetMax() == null || Double.parseDouble(property.getPrice()) <= Double.parseDouble(searchCriteria.getBudgetMax())) &&
                                (searchCriteria.isSale() == property.isSale()) &&
                                (searchCriteria.isRent() == property.isRent()))
            .collect(Collectors.toList());

        return properties.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private double getNumericSize(String size) {
        // Converts a size string (e.g., "3000 sqft") to a numeric value
        try {
            return Double.parseDouble(size.replaceAll("[^0-9.]", ""));
        } catch (NumberFormatException e) {
            return 0; // Return 0 if parsing fails
        }
    }

    private PropertyDTO convertToDTO(Property property) {
        // Converts a Property entity to a PropertyDTO
        PropertyDTO dto = new PropertyDTO();
        dto.setId(property.getId());
        dto.setLocation(property.getLocation());
        dto.setBhk(property.getBhk());
        dto.setPropertyType(property.getPropertyType());
        dto.setSize(property.getSize());
        dto.setPrice(property.getPrice());
        dto.setSale(property.isSale());
        dto.setRent(property.isRent());
        dto.setDetails(property.getDetails());
        dto.setAgentName(property.getAgentName());
        dto.setAgentContact(property.getAgentContact());
        return dto;
    }

    private Property convertToEntity(PropertyDTO dto) {
        // Converts a PropertyDTO to a Property entity
        Property property = new Property();
        property.setLocation(dto.getLocation());
        property.setBhk(dto.getBhk());
        property.setPropertyType(dto.getPropertyType());
        property.setSize(dto.getSize());
        property.setPrice(dto.getPrice());
        property.setSale(dto.isSale());
        property.setRent(dto.isRent());
        property.setDetails(dto.getDetails());
        property.setAgentName(dto.getAgentName());
        property.setAgentContact(dto.getAgentContact());
        return property;
    }
}
