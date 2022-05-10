package com.ssafy.ssam.ssam_backend.api.controller;

import com.ssafy.ssam.ssam_backend.api.dto.response.*;
import com.ssafy.ssam.ssam_backend.api.service.PlayerService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/player")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @ApiOperation(value = "선수 연도별 스탯상세조회")
    @GetMapping("/yearsdetail")
    public ResponseEntity<PlayerDetailResDto> playerYearsDetail(@RequestParam Long playerId, @RequestParam String pOrh, @RequestParam String years)throws Exception{
        PlayerDetailResDto playerDetailResDto;
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
            try {
                PitcherYearsDetailResDto pitcherYearsDetailResDto = playerService.getPitcherYearsDetail(playerId, years);


                playerDetailResDto = new PlayerDetailResDto(200,"OK",pitcherYearsDetailResDto);

                status=HttpStatus.OK;

            }
            catch (Exception e){
                System.out.println(e);
                playerDetailResDto = new PlayerDetailResDto(500,"INTERNAL_SERVER_ERROR");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }

        }

        return new ResponseEntity<>(playerDetailResDto,status);
    }

    @ApiOperation(value = "선수 날짜별 스탯상세조회")
    @GetMapping("/daysdetail")
    public ResponseEntity<PlayerDetailResDto> playerDaysDetail(@RequestParam Long playerId, @RequestParam String pOrh, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate days)throws Exception{
        PlayerDetailResDto playerDetailResDto;
        HttpStatus status = null;
        if(pOrh.equals("Hitter")){
            try {
                HitterDaysDetailResDto hitterDaysDetailResDto = playerService.getHitterDaysDetail(playerId, days);


                playerDetailResDto = new PlayerDetailResDto(200,"OK",hitterDaysDetailResDto);

                status=HttpStatus.OK;

            }
            catch (Exception e){
                System.out.println(e);
                playerDetailResDto = new PlayerDetailResDto(500,"INTERNAL_SERVER_ERROR");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        else {
            try {
                PitcherDaysDetailResDto pitcherDaysDetailResDto = playerService.getPitcherDaysDetail(playerId, days);


                playerDetailResDto = new PlayerDetailResDto(200,"OK",pitcherDaysDetailResDto);

                status=HttpStatus.OK;

            }
            catch (Exception e){
                System.out.println(e);
                playerDetailResDto = new PlayerDetailResDto(500,"INTERNAL_SERVER_ERROR");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }

        }

        return new ResponseEntity<>(playerDetailResDto,status);
    }

    @ApiOperation(value = "선수 상황별 스탯조회")
    @GetMapping("/situation")
    public ResponseEntity<PlayerDetailResDto> playerSituation(@RequestParam Long playerId, @RequestParam String pOrh, @RequestParam String years)throws Exception{
        PlayerDetailResDto playerDetailResDto;
        HttpStatus status = null;
        if(pOrh.equals("Hitter")){
            try {
                HitterSituationResDto hitterSituationResDto = playerService.getHitterSituation(playerId, years);


                playerDetailResDto = new PlayerDetailResDto(200,"OK",hitterSituationResDto);

                status=HttpStatus.OK;

            }
            catch (Exception e){
                System.out.println(e);
                playerDetailResDto = new PlayerDetailResDto(500,"INTERNAL_SERVER_ERROR");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        else {
            try {
                PitcherSituationResDto pitcherSituationResDto = playerService.getPitcherSituation(playerId, years);


                playerDetailResDto = new PlayerDetailResDto(200,"OK",pitcherSituationResDto);

                status=HttpStatus.OK;

            }
            catch (Exception e){
                System.out.println(e);
                playerDetailResDto = new PlayerDetailResDto(500,"INTERNAL_SERVER_ERROR");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }

        }

        return new ResponseEntity<>(playerDetailResDto,status);
    }

}
