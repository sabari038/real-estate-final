package com.example.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.spring.dto.PropertyDTO;
import com.example.spring.dto.SearchCriteria;
import com.example.spring.service.PropertyService;

import java.util.List;

@CrossOrigin("*") 
@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    // Endpoint to get all properties
    @GetMapping
    public List<PropertyDTO> getAllProperties() {
        return propertyService.getAllProperties();
    }    

    // Endpoint to get a property by its ID
    @GetMapping("/{id}")
    public ResponseEntity<PropertyDTO> getPropertyById(@PathVariable Long id) {
        PropertyDTO propertyDTO = propertyService.getPropertyById(id);
        return propertyDTO != null ? ResponseEntity.ok(propertyDTO) : ResponseEntity.notFound().build();
    }
    
    // Endpoint to get properties by the number of bedrooms, halls, and kitchens (BHK)
    @GetMapping("/bhk/{bhk}")
    public ResponseEntity<List<PropertyDTO>> getPropertiesByBhk(@PathVariable String bhk) {
        List<PropertyDTO> properties = propertyService.getPropertiesByBhk(bhk);
        return properties != null && !properties.isEmpty() ? ResponseEntity.ok(properties) : ResponseEntity.notFound().build();
    }

    // Endpoint to get properties by property type
    @GetMapping("/propertyType/{propertyType}")
    public ResponseEntity<List<PropertyDTO>> getPropertiesByPropertyType(@PathVariable String propertyType) {
        List<PropertyDTO> properties = propertyService.getPropertiesByPropertyType(propertyType);
        return properties != null && !properties.isEmpty() ? ResponseEntity.ok(properties) : ResponseEntity.notFound().build();
    }

    // Endpoint to add a new property
    @PostMapping("/add")
    public ResponseEntity<PropertyDTO> createProperty(@RequestBody PropertyDTO propertyDTO) {
        PropertyDTO createdProperty = propertyService.createProperty(propertyDTO);
        return ResponseEntity.status(201).body(createdProperty);
    }

    // Endpoint to update an existing property
    @PutMapping("/{id}")
    public ResponseEntity<PropertyDTO> updateProperty(@PathVariable Long id, @RequestBody PropertyDTO propertyDTO) {
        PropertyDTO updatedProperty = propertyService.updateProperty(id, propertyDTO);
        return updatedProperty != null ? ResponseEntity.ok(updatedProperty) : ResponseEntity.notFound().build();
    }

    // Endpoint to delete a property by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProperty(@PathVariable Long id) {
        try {
            propertyService.deleteProperty(id);
            return ResponseEntity.ok("Property deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete property: " + e.getMessage());
        }
    }

    // Endpoint to search for properties based on search criteria
    @PostMapping("/search")
    public ResponseEntity<List<PropertyDTO>> searchProperties(@RequestBody SearchCriteria searchCriteria) {
        List<PropertyDTO> properties = propertyService.searchProperties(searchCriteria);
        return properties != null && !properties.isEmpty() ? ResponseEntity.ok(properties) : ResponseEntity.notFound().build();
    }
}
