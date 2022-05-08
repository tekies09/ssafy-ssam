package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.response.HitterYearsDetailResDto;
import com.ssafy.ssam.ssam_backend.api.repository.HitterYearsStatusRepository;
import com.ssafy.ssam.ssam_backend.api.repository.PlayerRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.HitterYearsStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final HitterYearsStatusRepository hitterYearsStatusRepository;

    @Override
    public HitterYearsDetailResDto getHitterYearsDetail(Long playerId, String years) throws Exception{
        Player player = playerRepository.findById(playerId).get();

        HitterYearsStatus entity = hitterYearsStatusRepository.findByPlayerAndYears(player,years);

        HitterYearsDetailResDto dto = new HitterYearsDetailResDto(entity);
        System.out.println(dto.getName());
        return dto;

    }
}
