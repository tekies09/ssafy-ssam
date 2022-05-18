package com.ssafy.ssam.ssam_backend.api.controller;

import com.ssafy.ssam.ssam_backend.api.dto.response.ScheduleListResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.ScheduleResultResDto;
import com.ssafy.ssam.ssam_backend.api.service.ScheduleService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/schedule")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class ScheduleController {

    private final ScheduleService scheduleService;

    @ApiOperation(value="경기 일정 및 결과 조회")
    @GetMapping
    public ResponseEntity<ScheduleListResDto> getScheduleList() throws Exception{
        ScheduleListResDto scheduleListResDto;
        HttpStatus status;

        try{
            List<ScheduleResultResDto> dtolist = scheduleService.getScheduleList();

            scheduleListResDto = new ScheduleListResDto(200,"OK",dtolist);
            status=HttpStatus.OK;
        }
        catch (Exception e){
            System.out.println(e);

            scheduleListResDto = new ScheduleListResDto(500,"INTERNAL_SERVER_ERROR");
            status=HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return  new ResponseEntity<>(scheduleListResDto,status);

    }

    @ApiOperation(value="경기 일정 및 결과 조회")
    @GetMapping("/{today}")
    public ResponseEntity<ScheduleListResDto> getWeeklyScheduleList(@PathVariable @ApiParam(value="경기 날짜 시간 yyyy-MM-dd'T'HH:mm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm") LocalDateTime today) throws Exception{
        ScheduleListResDto scheduleListResDto;
        HttpStatus status;

        try{
            List<ScheduleResultResDto> dtolist = scheduleService.getWeeklyScheduleList(today);

            scheduleListResDto = new ScheduleListResDto(200,"OK",dtolist);
            status=HttpStatus.OK;
        }
        catch (Exception e){
            System.out.println(e);

            scheduleListResDto = new ScheduleListResDto(500,"INTERNAL_SERVER_ERROR");
            status=HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return  new ResponseEntity<>(scheduleListResDto,status);
    }
    
    @ApiOperation(value = "오늘의 경기 일정 및 결과 조회")
    @GetMapping("/today/{today}")
    public ResponseEntity<ScheduleListResDto> getTodayScheduleList(
    		@PathVariable @ApiParam(value="경기 날짜 시간 yyyy-MM-dd'T'HH:mm")
            @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm") LocalDateTime today) throws Exception {
    	ScheduleListResDto scheduleListResDto;
        HttpStatus status;
        
        try{
            List<ScheduleResultResDto> dtolist = scheduleService.getTodayScheduleList(today);
            scheduleListResDto = new ScheduleListResDto(200,"OK",dtolist);
            status = HttpStatus.OK;
        }
        catch (Exception e){
            System.out.println(e);
            scheduleListResDto = new ScheduleListResDto(500,"INTERNAL_SERVER_ERROR");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        
    	return new ResponseEntity<>(scheduleListResDto, status);
    }

}
