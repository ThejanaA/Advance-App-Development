package com.backend.enrollify.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.enrollify.Entity.CollegeEntity;

public interface CollegeRepository extends JpaRepository<CollegeEntity, Long> {
    List<CollegeEntity> findByCollegeName(String collegeName);
}
