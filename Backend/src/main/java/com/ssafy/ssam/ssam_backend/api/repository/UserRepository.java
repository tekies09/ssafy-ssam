package com.ssafy.ssam.ssam_backend.api.repository;


import java.util.Optional;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsername(String username);

    User findUserByNickname(String nickname);

    User findUserByEmail(String email);

    User findUserByEmailAndUsername(String email, String username);

    public Optional<User> findByUserId(String userId);
}

