package com.ssafy.ssam.ssam_backend.domain.entity;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String email;

    @Enumerated(EnumType.STRING)
    private RoleType is_admin;

    @Column
    private LocalDateTime joined_date;

    @Column
    private String nickname;


}
