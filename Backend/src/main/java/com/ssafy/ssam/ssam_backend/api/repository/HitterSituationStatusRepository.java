package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterSituationStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HitterSituationStatusRepository extends JpaRepository<HitterSituationStatus,Long> {
    HitterSituationStatus findByPlayerAndYears(Player player, String year);
}
