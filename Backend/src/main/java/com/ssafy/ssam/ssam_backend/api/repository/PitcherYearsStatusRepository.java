package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherYearsStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PitcherYearsStatusRepository  extends JpaRepository<PitcherYearsStatus, Long> {
    PitcherYearsStatus findByPlayerAndYears(Player player, String years);
}
