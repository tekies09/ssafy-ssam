package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.ScheduleAndScore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<ScheduleAndScore , Long> {
    List<ScheduleAndScore> findAllByDateBetween(LocalDateTime start , LocalDateTime end);
}
