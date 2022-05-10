package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.*;

import java.time.LocalDate;

public interface PlayerService {
    HitterYearsDetailResDto getHitterYearsDetail(Long playerId, String years)throws Exception;

    PitcherYearsDetailResDto getPitcherYearsDetail(Long playerId, String years)throws Exception;

    HitterDaysDetailResDto getHitterDaysDetail(Long playerId, LocalDate days)throws Exception;

    PitcherDaysDetailResDto getPitcherDaysDetail(Long playerId, LocalDate days)throws Exception;

    HitterSituationResDto getHitterSituation(Long playerId, String years)throws Exception;

    PitcherSituationResDto getPitcherSituation(Long playerId, String years) throws Exception;
}
