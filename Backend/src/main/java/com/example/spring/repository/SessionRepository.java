package com.example.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spring.entity.Session;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {
    Session findByToken(String token);
}
