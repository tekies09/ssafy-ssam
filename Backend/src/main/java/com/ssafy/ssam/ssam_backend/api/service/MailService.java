package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.domain.entity.User;

public interface MailService {
    public void sendMail(User entity, String type);
}
