package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.ScheduleResultResDto;
import com.ssafy.ssam.ssam_backend.api.repository.ScheduleRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.ScheduleAndScore;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    public List<ScheduleResultResDto> getWeeklyScheduleList(LocalDate today) {
        LocalDate plus7D = today.plusDays(7);

        List<ScheduleResultResDto> dtoList = new ArrayList<>();

        List<ScheduleAndScore> entityList = scheduleRepository.findAllByDateBetween(today,plus7D);

        for (ScheduleAndScore entity : entityList){
            ScheduleResultResDto dto = new ScheduleResultResDto(entity);
            dtoList.add(dto);
        }

        return dtoList;
    }

	@Override
	public List<ScheduleResultResDto> getTodayScheduleList(LocalDate today) {
		List<ScheduleResultResDto> dtoList = new ArrayList<>();
        List<ScheduleAndScore> entityList = scheduleRepository.findAllByDate(today);
        
        for(ScheduleAndScore entity : entityList) {
        	ScheduleResultResDto dto = new ScheduleResultResDto(entity);
        	dtoList.add(dto);
        }
        
        return dtoList;
	}
}
