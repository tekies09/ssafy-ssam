package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FreeBoardReplyRepository extends JpaRepository<Reply, Long> {
    List<Reply> findAllByFreeBoard(Optional<FreeBoard> freeBoard);
}
