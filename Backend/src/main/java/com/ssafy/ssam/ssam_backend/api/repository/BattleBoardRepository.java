package com.ssafy.ssam.ssam_backend.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.ssam.ssam_backend.api.domain.board.BattleBoard;

public interface BattleBoardRepository extends JpaRepository<BattleBoard, Long>, BattleBoardCustomRepository {
}
