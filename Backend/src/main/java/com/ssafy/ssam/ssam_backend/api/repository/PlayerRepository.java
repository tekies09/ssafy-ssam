package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.api.dto.response.SearchResultResDto;
import com.ssafy.ssam.ssam_backend.api.repository.mapping.PlayerMapping;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player,Long> {
    List<PlayerMapping> findByPlayerNameLike(@Param(value = "playerName") String word);
}
