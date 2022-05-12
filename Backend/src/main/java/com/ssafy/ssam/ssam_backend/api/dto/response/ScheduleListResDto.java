package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ScheduleListResDto extends BaseResponseBody{

    private List<ScheduleResultResDto> scheduleList;

    public ScheduleListResDto(Integer statusCode, String message ){
        super(statusCode, message);
    }
    public ScheduleListResDto(Integer statusCode, String message ,List<ScheduleResultResDto> scheduleList){
        super(statusCode, message);
        this.scheduleList=scheduleList;
    }




}
