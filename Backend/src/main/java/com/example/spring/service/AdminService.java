package com.example.spring.service;

import com.example.spring.dto.AdminDto;

import java.util.List;

public interface AdminService {
    List<AdminDto> getAllAdmins();
    AdminDto getAdminById(Long id);
    AdminDto getAdminByEmail(String email);
    AdminDto createAdmin(AdminDto adminDto);
    AdminDto updateAdmin(Long id, AdminDto adminDto);
    void deleteAdmin(Long id);
    AdminDto login(String email, String password);  // Add this method
    void changePassword(String email, String oldPassword, String newPassword);
}
