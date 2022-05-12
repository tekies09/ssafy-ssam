package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterDaysStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface HitterDaysStatusRepository extends JpaRepository<HitterDaysStatus,Long> {
    HitterDaysStatus findByPlayerAndDate(Player player, LocalDate date);
}
