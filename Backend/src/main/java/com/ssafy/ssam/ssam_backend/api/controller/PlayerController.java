package com.ssafy.ssam.ssam_backend.api.controller;

import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.HitterYearsDetailResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.PlayerDetailResDto;
import com.ssafy.ssam.ssam_backend.api.service.PlayerService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/player")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @ApiOperation(value = "선수 스탯상세조회")
    @GetMapping("/detail")
    public ResponseEntity<PlayerDetailResDto> playerYearsDetail(@RequestParam Long playerId, @RequestParam String pOrh, @RequestParam String years)throws Exception{
        PlayerDetailResDto playerDetailResDto=null;
        HttpStatus status = null;
        if(pOrh.equals("Hitter")){
            try {
                HitterYearsDetailResDto  hitterYearsDetailResDto = playerService.getHitterYearsDetail(playerId, years);


                playerDetailResDto = new PlayerDetailResDto(200,"OK",hitterYearsDetailResDto);

                status=HttpStatus.OK;

            }
            catch (Exception e){
                System.out.println(e);
                playerDetailResDto = new PlayerDetailResDto(500,"INTERNAL_SERVER_ERROR");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        else {

        }

        return new ResponseEntity<>(playerDetailResDto,status);
    }

}
