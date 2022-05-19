package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.api.repository.mapping.PitcherIdMapping;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherYearsStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PitcherYearsStatusRepository  extends JpaRepository<PitcherYearsStatus, Long> {
    PitcherYearsStatus findByPlayerAndYears(Player player, String years);

    List<PitcherIdMapping> findAllIdByPlayerAndYears(Player player, String year);

    List<PitcherYearsStatus> findAllIdByYears(String year);
}
