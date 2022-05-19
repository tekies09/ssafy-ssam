package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.*;

import java.time.LocalDate;
import java.util.List;

public interface PlayerService {
    HitterYearsDetailResDto getHitterYearsDetail(Long statusId, String years)throws Exception;

    PitcherYearsDetailResDto getPitcherYearsDetail(Long statusId, String years)throws Exception;

    HitterDaysDetailResDto getHitterDaysDetail(Long playerId, LocalDate days)throws Exception;

    PitcherDaysDetailResDto getPitcherDaysDetail(Long playerId, LocalDate days)throws Exception;

    HitterSituationResDto getHitterSituation(Long playerId, String years)throws Exception;

    PitcherSituationResDto getPitcherSituation(Long playerId, String years) throws Exception;

    List<SearchResultResDto> getNameList(String year)throws Exception;

    PlayerInfoResDto getPlayerInfo(Long playerId)throws Exception;

    List<HitterYearsDetailResDto> getHitterList(int page, int limit, String year)throws Exception;

    List<PitcherYearsDetailResDto> getPitcherList(int page, int limit, String year)throws Exception;

    Long getHitterYearCount(String year)throws Exception;

    Long getPitcherYearCount(String year)throws Exception;
}
