package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.ScheduleResultResDto;

import java.time.LocalDateTime;
import java.util.List;

public interface ScheduleService {
    List<ScheduleResultResDto> getScheduleList();
    List<ScheduleResultResDto> getWeeklyScheduleList(LocalDateTime today);
    List<ScheduleResultResDto> getTodayScheduleList(LocalDateTime today);
}
