package com.ssafy.ssam.ssam_backend.api.controller.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.UserLoginResponseDto;
import com.ssafy.ssam.ssam_backend.api.jwt.JwtTokenProvider;
import com.ssafy.ssam.ssam_backend.api.service.UserService;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = {"유저관리 API"})
public class UserController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    @PostMapping("/user/login")
    @JsonProperty("requestDto")
    @ApiOperation(value = "로그인")
    public ResponseEntity<UserLoginResponseDto>  login(@RequestBody UserLoginRequestDto requestDto, HttpServletResponse response ){
        User user= userService.LoginUser(requestDto);
        if(user==null){
            throw new IllegalArgumentException("잘못된 계정정보입니다.");
        }
        String token = jwtTokenProvider.createToken(user.getUsername(), user.getRoles());
        response.setHeader("X-AUTH-TOKEN", token);

        Cookie cookie = new Cookie("X-AUTH-TOKEN", token);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);

        UserLoginResponseDto userLoginResponseDto = new UserLoginResponseDto(user);
        return ResponseEntity.status(200).body(userLoginResponseDto);
    }
}
