package com.ssafy.ssam.ssam_backend.api.controller;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamResDto;
import com.ssafy.ssam.ssam_backend.api.service.MyTeamService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/myteam")
@RequiredArgsConstructor
public class MyTeamController {

    private final MyTeamService myTeamService;



    @ApiOperation(value="나만의 팀 생성")
    @PostMapping("/createMyTeam")
    public ResponseEntity<BaseResponseBody> createMyTeam(@RequestBody MyTeamReqDto myTeamReqDto) throws Exception{
        BaseResponseBody resBody;
        HttpStatus status = null;
        try {

            myTeamService.createMyTeam(myTeamReqDto);
            resBody = new BaseResponseBody(200,"OK");
            status = HttpStatus.OK;

        }
        catch(Exception e){
            resBody = new BaseResponseBody(500,"INTERNAL_SERVER_ERROR");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<BaseResponseBody>(resBody,status);

    }

}
