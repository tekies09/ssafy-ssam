package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.HitterYearsDetailResDto;

public interface PlayerService {
    HitterYearsDetailResDto getHitterYearsDetail(Long playerId, String years)throws Exception;
}
