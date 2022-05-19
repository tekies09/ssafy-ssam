package com.ssafy.ssam.ssam_backend.api.repository;

import com.ssafy.ssam.ssam_backend.domain.entity.Notice;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeBoardRepository  extends JpaRepository<Notice, Long> {
    Page<Notice> findPageBynTitleLike(String title, Pageable pageable);
    Page<Notice> findPageByAuthor(User user, Pageable pageable);
}
