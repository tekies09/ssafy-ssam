package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByUsername(String username);
}
