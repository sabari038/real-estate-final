package com.example.spring.service.impl;

import com.example.spring.dto.AdminDto;
import com.example.spring.entity.Admin;
import com.example.spring.repository.AdminRepository;
import com.example.spring.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public List<AdminDto> getAllAdmins() {
        return adminRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public AdminDto getAdminById(Long id) {
        Optional<Admin> adminOptional = adminRepository.findById(id);
        return adminOptional.map(this::convertToDto).orElse(null);
    }

    @Override
    public AdminDto getAdminByEmail(String email) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin == null) {
            throw new RuntimeException("Admin with email " + email + " not found");
        }
        return convertToDto(admin);
    }

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        if (adminRepository.findByEmail(adminDto.getEmail()) != null) {
            throw new RuntimeException("Admin with this email already exists");
        }
        Admin admin = convertToEntity(adminDto);
        return convertToDto(adminRepository.save(admin));
    }

    @Override
    public AdminDto updateAdmin(Long id, AdminDto adminDto) {
        Optional<Admin> adminOptional = adminRepository.findById(id);
        if (!adminOptional.isPresent()) {
            throw new RuntimeException("Admin with ID " + id + " not found");
        }
        Admin admin = convertToEntity(adminDto);
        admin.setId(id);
        return convertToDto(adminRepository.save(admin));
    }

    @Override
    public void deleteAdmin(Long id) {
        if (!adminRepository.existsById(id)) {
            throw new RuntimeException("Admin with ID " + id + " not found");
        }
        adminRepository.deleteById(id);
    }

    @Override
    public AdminDto login(String email, String password) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin == null || !admin.getPassword().equals(password)) {
            throw new RuntimeException("Invalid email or password");
        }
        return convertToDto(admin);
    }

    @Override
    public void changePassword(String email, String oldPassword, String newPassword) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin == null || !admin.getPassword().equals(oldPassword)) {
            throw new RuntimeException("Invalid email or old password");
        }
        admin.setPassword(newPassword);
        adminRepository.save(admin);
    }

    private AdminDto convertToDto(Admin admin) {
        AdminDto adminDto = new AdminDto();
        adminDto.setId(admin.getId());
        adminDto.setFirstName(admin.getFirstName());
        adminDto.setLastName(admin.getLastName());
        adminDto.setEmail(admin.getEmail());
        adminDto.setPhone(admin.getPhone());
        adminDto.setAddress(admin.getAddress());
        adminDto.setRole(admin.getRole());
        adminDto.setPassword(admin.getPassword());
        return adminDto;
    }

    private Admin convertToEntity(AdminDto adminDto) {
        Admin admin = new Admin();
        admin.setFirstName(adminDto.getFirstName());
        admin.setLastName(adminDto.getLastName());
        admin.setEmail(adminDto.getEmail());
        admin.setPhone(adminDto.getPhone());
        admin.setAddress(adminDto.getAddress());
        admin.setRole(adminDto.getRole());
        admin.setPassword(adminDto.getPassword());
        return admin;
    }
}
