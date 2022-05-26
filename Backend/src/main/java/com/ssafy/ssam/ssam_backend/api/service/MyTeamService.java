package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamResDto;

import java.util.List;


public interface MyTeamService {
    void createMyTeam(MyTeamReqDto myTeamReqDto) throws Exception;

    void deleteMyTeam(Long teamId)throws Exception;

    void modifyMyTeam(MyTeamReqDto myTeamReqDto)throws Exception;

    List<MyTeamResDto> getMyTeamList(Long userId)throws Exception;

    MyTeamResDto getMyTeamPlayerList(Long myTeamId)throws Exception;
}
