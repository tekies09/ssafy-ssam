package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamReqDto;
import org.springframework.stereotype.Service;


public interface MyTeamService {
    void createMyTeam(MyTeamReqDto myTeamReqDto) throws Exception;
}
