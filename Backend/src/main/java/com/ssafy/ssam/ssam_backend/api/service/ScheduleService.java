package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.ScheduleResultResDto;

import java.time.LocalDate;
import java.util.List;

public interface ScheduleService {
    List<ScheduleResultResDto> getScheduleList();

    List<ScheduleResultResDto> getWeeklyScheduleList(LocalDate today);
}
