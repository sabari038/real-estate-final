package com.example.spring.controller;

import com.example.spring.dto.AdminDto;
import com.example.spring.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<AdminDto> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public AdminDto getAdminById(@PathVariable Long id) {
        return adminService.getAdminById(id);
    }

    @GetMapping("/email")
    public AdminDto getAdminByEmail(@RequestParam String email) {
        return adminService.getAdminByEmail(email);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createAdmin(@RequestBody AdminDto adminDto) {
        try {
            return ResponseEntity.ok(adminService.createAdmin(adminDto));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public AdminDto updateAdmin(@PathVariable Long id, @RequestBody AdminDto adminDto) {
        return adminService.updateAdmin(id, adminDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminDto adminDto) {
        try {
            AdminDto loggedInAdmin = adminService.login(adminDto.getEmail(), adminDto.getPassword());
            return ResponseEntity.ok(loggedInAdmin);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody AdminDto adminDto) {
        try {
            adminService.changePassword(adminDto.getEmail(), adminDto.getOldPassword(), adminDto.getNewPassword());
            return ResponseEntity.ok("Password changed successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
