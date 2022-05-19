package com.ssafy.ssam.ssam_backend.api.controller;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamListResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamPlayerListResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamResDto;
import com.ssafy.ssam.ssam_backend.api.service.MyTeamService;
import com.sun.org.apache.regexp.internal.RE;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/myteam")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @ApiOperation(value = "나만의 팀 삭제")
    @DeleteMapping("/{teamId}")
    public ResponseEntity<BaseResponseBody> deleteMyTeam(@PathVariable Long teamId)throws Exception{
        BaseResponseBody resBody;
        HttpStatus status = null;
        try {

            myTeamService.deleteMyTeam(teamId);

            resBody = new BaseResponseBody(200,"OK");
            status = HttpStatus.OK;

        }
        catch(Exception e){
            resBody = new BaseResponseBody(500,"INTERNAL_SERVER_ERROR");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<BaseResponseBody>(resBody,status);

    }

    @ApiOperation(value = "나만의 팀 수정")
    @PutMapping("/modifyMyTeam")
    public ResponseEntity<BaseResponseBody> modifyMyTeam(@RequestBody MyTeamReqDto myTeamReqDto)throws Exception{
        BaseResponseBody resBody;
        HttpStatus status = null;
        try {

            myTeamService.modifyMyTeam(myTeamReqDto);

            resBody = new BaseResponseBody(200,"OK");
            status = HttpStatus.OK;

        }
        catch(Exception e){
            resBody = new BaseResponseBody(500,"INTERNAL_SERVER_ERROR");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<BaseResponseBody>(resBody,status);
    }

    @ApiOperation(value = "유저의 나만의 팀 리스트", notes="팀에 속한 선수정보는 없고 유저가 가진 팀 리스트만 반환")
    @GetMapping("/userTeamList/{userId}")
    public ResponseEntity<MyTeamListResDto> getMyTeamList(@PathVariable Long userId)throws Exception{
        MyTeamListResDto myTeamList;
        HttpStatus status = null;
        try {

            List<MyTeamResDto> teamList = myTeamService.getMyTeamList(userId);

            myTeamList = new MyTeamListResDto(200,"OK",teamList);
            status = HttpStatus.OK;

        }
        catch(Exception e){
            myTeamList = new MyTeamListResDto(500,"INTERNAL_SERVER_ERROR");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<MyTeamListResDto>(myTeamList,status);
    }

    @ApiOperation(value = "나만의 팀 선수 리스트", notes ="해당 나만의 팀에 속한 선수들 정보 반환")
    @GetMapping("/teamPlayerList/{myTeamId}")
    public ResponseEntity<MyTeamPlayerListResDto> getMyTeamPlayerList(@PathVariable Long myTeamId)throws Exception{
        MyTeamPlayerListResDto myTeamPlayerListResDto;
        HttpStatus status = null;
        try{
            MyTeamResDto myTeamResDto = myTeamService.getMyTeamPlayerList(myTeamId);
            myTeamPlayerListResDto = new MyTeamPlayerListResDto(200,"OK",myTeamResDto);
            status=HttpStatus.OK;
        }
        catch (Exception e){
            myTeamPlayerListResDto = new MyTeamPlayerListResDto(500,"INTERNAL_SERVER_ERROR");
            status=HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(myTeamPlayerListResDto,status);
    }

}
