package com.ssafy.ssam.ssam_backend.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

public interface BattleBoardRepository extends JpaRepository<BattleBoard, Long>, BattleBoardCustomRepository {
}
