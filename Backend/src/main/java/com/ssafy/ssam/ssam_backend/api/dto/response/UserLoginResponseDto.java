package com.ssafy.ssam.ssam_backend.api.dto.response;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
public class UserLoginResponseDto {

    private long userId;
    private String username;
    private String password;
    private String email;
    private List<String> roles;
    private LocalDateTime joined_date;
    private String nickcname;


        public UserLoginResponseDto(User entity) {
          this.userId= entity.getUserId();
          this.username= entity.getUsername();
          this.password= entity.getPassword();
          this.email= entity.getEmail();
          this.roles= entity.getRoles();
          this.joined_date= entity.getJoined_date();
          this.nickcname= entity.getNickname();
    }
}
