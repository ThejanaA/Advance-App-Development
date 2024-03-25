package com.backend.enrollify.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.enrollify.Entity.UserEntity;
import com.backend.enrollify.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserEntity> getAllSignups() {
        return userRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<UserEntity> getSignUpbyId(Long id) {
        return userRepository.findById(id);
    }

    public UserEntity createSignup(UserEntity signup) {
        signup.setPassword(passwordEncoder.encode(signup.getPassword()));
        return userRepository.save(signup);
    }

    @SuppressWarnings("null")
    public void deleteSignup(Long id) {
        userRepository.deleteById(id);
    }

    public List<UserEntity> getByName(String name) {
        return userRepository.findAllByName(name);
    }

    @SuppressWarnings("null")
    public UserEntity updateUser(Long id, UserEntity updatedUserEntity) {
        Optional<UserEntity> userEntity = userRepository.findById(id);
        if (userEntity.isPresent()) {
            UserEntity existingUser = userEntity.get();
            existingUser.setEmail(updatedUserEntity.getEmail());
            existingUser.setName(updatedUserEntity.getName());
            existingUser.setPassword(updatedUserEntity.getPassword());
            return userRepository.save(existingUser);
        }
        return null;
    }
}
