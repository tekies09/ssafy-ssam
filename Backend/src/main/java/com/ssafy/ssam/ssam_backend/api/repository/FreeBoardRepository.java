package com.ssafy.ssam.ssam_backend.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;


public interface FreeBoardRepository extends JpaRepository<FreeBoard, Long> {
	Page<FreeBoard> findPageByFbTitleLike(String title, Pageable pageable);
	Page<FreeBoard> findPageByAuthor(User user, Pageable pageable);	
}
