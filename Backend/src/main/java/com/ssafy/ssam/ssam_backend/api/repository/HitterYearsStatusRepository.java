package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterYearsStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface HitterYearsStatusRepository extends JpaRepository<HitterYearsStatus,Long> {

    HitterYearsStatus findByPlayerAndYears(Player player , String years);
}
