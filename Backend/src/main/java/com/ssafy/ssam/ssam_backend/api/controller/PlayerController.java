package com.ssafy.ssam.ssam_backend.api.controller;

import com.ssafy.ssam.ssam_backend.api.dto.response.*;
import com.ssafy.ssam.ssam_backend.api.service.PlayerService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/player")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @ApiOperation(value = "선수 연도별 스탯상세조회")
    @GetMapping("/yearsdetail")
    public ResponseEntity<PlayerDetailResDto> playerYearsDetail(@RequestParam @ApiParam(value="선수 id") Long statusId, @RequestParam @ApiParam(value="Pitcher or Hitter") String pOrh, @RequestParam String years)throws Exception{
        PlayerDetailResDto playerDetailResDto;
        HttpStatus status = null;
        if(pOrh.equals("Hitter")){
            try {
                HitterYearsDetailResDto  hitterYearsDetailResDto = playerService.getHitterYearsDetail(statusId, years);


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
                PitcherYearsDetailResDto pitcherYearsDetailResDto = playerService.getPitcherYearsDetail(statusId, years);


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
    public ResponseEntity<PlayerDetailResDto> playerDaysDetail(@RequestParam @ApiParam(value="선수 id") Long playerId, @RequestParam  @ApiParam(value="Pitcher or Hitter") String pOrh, @RequestParam @ApiParam(value="경기 날짜 yyyy-MM-dd") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate days)throws Exception{
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
    public ResponseEntity<PlayerDetailResDto> playerSituation(@RequestParam @ApiParam(value="선수 id") Long playerId, @RequestParam @ApiParam(value="Pitcher or Hitter") String pOrh, @RequestParam String years)throws Exception{
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


    @ApiOperation(value = "연도별 선수 이름 조회")
    @GetMapping("/yearNameList")
    public ResponseEntity<SearchListResDto> getNameList(@RequestParam @ApiParam(value="연도") String year){

        SearchListResDto searchListResDto;
        HttpStatus status = null;
        try{

            List<SearchResultResDto> list = playerService.getNameList(year);

            searchListResDto = new SearchListResDto(200,"OK",list);
            status = HttpStatus.OK;
        }
        catch ( Exception e ){

            System.out.println(e);
            searchListResDto=new SearchListResDto(500,"INTERNAL_SERVER_ERROR");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return  new ResponseEntity<>(searchListResDto,status);

    }

    @ApiOperation(value = "선수 기본정보 조회")
    @GetMapping("/{playerId}")
    public ResponseEntity<PlayerInfoResultResDto> getPlayerInfo(@PathVariable @ApiParam(value = "선수id") Long playerId) throws Exception{
        PlayerInfoResultResDto playerInfoResultResDto;
        HttpStatus status;
        try{
            PlayerInfoResDto playerInfoResDto = playerService.getPlayerInfo(playerId);

            playerInfoResultResDto=new PlayerInfoResultResDto(200,"OK",playerInfoResDto);
            status=HttpStatus.OK;
        }
        catch (Exception e){

            playerInfoResultResDto=new PlayerInfoResultResDto(500,"INTERNAL_SERVER_ERROR");
            status=HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(playerInfoResultResDto,status);
    }

    @ApiOperation(value = "타자 연간정보 + 이름 + 팀")
    @GetMapping("/hitterList")
    public ResponseEntity<HitterYearsListResDto> getHitterList(@RequestParam @ApiParam(value = "연도") String year , @RequestParam @ApiParam(value = "페이지") int page, @RequestParam @ApiParam(value = "페이지 당 몇개") int limit)throws  Exception{
        HitterYearsListResDto hitterYearsListResDto;
        HttpStatus status;

        try{
            List<HitterYearsDetailResDto> dtolist = playerService.getHitterList(page,limit,year);
            hitterYearsListResDto = new HitterYearsListResDto(200,"OK",dtolist);
            status=HttpStatus.OK;
        }
        catch (Exception e){
            hitterYearsListResDto = new HitterYearsListResDto(500,"INTERNAL_SERVER_ERROR");
            status=HttpStatus.INTERNAL_SERVER_ERROR;

        }



        return new ResponseEntity<>(hitterYearsListResDto,status);

    }

    @ApiOperation(value = "타자 연간정보 + 이름 + 팀")
    @GetMapping("/pitcherList")
    public ResponseEntity<PitcherYearsListResDto> getPitcherList(@RequestParam @ApiParam(value = "연도") String year , @RequestParam @ApiParam(value = "페이지") int page, @RequestParam @ApiParam(value = "페이지 당 몇개") int limit)throws  Exception{
        PitcherYearsListResDto pitcherYearsListResDto;
        HttpStatus status;

        try{
            List<PitcherYearsDetailResDto> dtolist = playerService.getPitcherList(page,limit,year);
            pitcherYearsListResDto = new PitcherYearsListResDto(200,"OK",dtolist);
            status=HttpStatus.OK;
        }
        catch (Exception e){
            pitcherYearsListResDto = new PitcherYearsListResDto(500,"INTERNAL_SERVER_ERROR");
            status=HttpStatus.INTERNAL_SERVER_ERROR;

        }



        return new ResponseEntity<>(pitcherYearsListResDto,status);

    }

}
