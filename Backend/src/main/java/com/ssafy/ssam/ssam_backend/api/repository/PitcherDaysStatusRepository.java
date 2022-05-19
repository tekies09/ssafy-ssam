package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherDaysStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface PitcherDaysStatusRepository extends JpaRepository<PitcherDaysStatus,Long> {
    PitcherDaysStatus findByPlayerAndDate(Player player, LocalDate date);
}
