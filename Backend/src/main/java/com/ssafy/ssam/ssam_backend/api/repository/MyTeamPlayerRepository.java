package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.MyTeamPlayer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyTeamPlayerRepository extends JpaRepository<MyTeamPlayer,Long> {
}
