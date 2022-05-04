package com.ssafy.ssam.ssam_backend.api.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.ssam.ssam_backend.domain.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public Optional<User> findByUserId(String userId);

}
