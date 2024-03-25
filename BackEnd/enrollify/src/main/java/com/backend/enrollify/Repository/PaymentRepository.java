package com.backend.enrollify.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.enrollify.Entity.PaymentEntity;

public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
    List<PaymentEntity> findByName(String Name);
}
