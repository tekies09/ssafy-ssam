package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterSituationStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherSituationStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PitcherSituationStatusRepository extends JpaRepository<PitcherSituationStatus,Long> {
    PitcherSituationStatus findByPlayerAndYears(Player player, String year);
}
