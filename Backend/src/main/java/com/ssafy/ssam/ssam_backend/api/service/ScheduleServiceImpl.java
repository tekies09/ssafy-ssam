package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.ScheduleResultResDto;
import com.ssafy.ssam.ssam_backend.api.repository.ScheduleRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.ScheduleAndScore;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService{
    private final ScheduleRepository scheduleRepository;

    @Override
    public List<ScheduleResultResDto> getScheduleList() {
        List<ScheduleResultResDto> dtoList = new ArrayList<>();

        List<ScheduleAndScore> entityList = scheduleRepository.findAll();

        for (ScheduleAndScore entity : entityList){
            ScheduleResultResDto dto = new ScheduleResultResDto(entity);
            dtoList.add(dto);
        }

        return dtoList;
    }

    @Override
    public List<ScheduleResultResDto> getWeeklyScheduleList(LocalDateTime today) {
        LocalDateTime plus7D = today.plusDays(7);

        List<ScheduleResultResDto> dtoList = new ArrayList<>();

        List<ScheduleAndScore> entityList = scheduleRepository.findAllByDateBetween(today.MIN,plus7D.MIN);

        for (ScheduleAndScore entity : entityList){
            ScheduleResultResDto dto = new ScheduleResultResDto(entity);
            dtoList.add(dto);
        }

        return dtoList;
    }

	@Override
	public List<ScheduleResultResDto> getTodayScheduleList(LocalDateTime today) {
		LocalDateTime todayStart = today.MIN;
		LocalDateTime todayEnd = today.plusDays(1).MIN;
		
		List<ScheduleResultResDto> dtoList = new ArrayList<>();
        List<ScheduleAndScore> entityList = scheduleRepository.findAllByDateBetween(todayStart, todayEnd);
        
        for(ScheduleAndScore entity : entityList) {
        	ScheduleResultResDto dto = new ScheduleResultResDto(entity);
        	dtoList.add(dto);
        }
        
        return dtoList;
	}
}
