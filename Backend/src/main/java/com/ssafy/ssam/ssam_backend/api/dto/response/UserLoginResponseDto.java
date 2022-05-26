package com.ssafy.ssam.ssam_backend.api.dto.response;
import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserLoginResponseDto {

    private long userId;
    private String username;
    private String email;
    private RoleType role;
    private LocalDateTime joined_date;
    private String nickname;


        public UserLoginResponseDto(User entity) {
          this.userId= entity.getUserId();
          this.username= entity.getUsername();
          this.email= entity.getEmail();
          this.role= entity.getRole();
          this.joined_date= entity.getJoined_date();
          this.nickname= entity.getNickname();
    }
}
