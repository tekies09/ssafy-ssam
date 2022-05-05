package com.ssafy.ssam.ssam_backend.api.controller.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserCreateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserUpdateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.UserLoginResponseDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.UserResponseDto;
import com.ssafy.ssam.ssam_backend.api.jwt.JwtTokenProvider;
import com.ssafy.ssam.ssam_backend.api.service.UserService;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = {"유저관리 API"})
@RequestMapping("/user")
public class UserController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    @PostMapping("/login")
    @JsonProperty("requestDto")
    @ApiOperation(value = "로그인")
    public ResponseEntity<String>  login(@RequestBody UserLoginRequestDto requestDto, HttpServletResponse response ){
        User user= userService.LoginUser(requestDto);
        if(user==null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        String token = jwtTokenProvider.createToken(user.getUsername(), user.getRole().toString());
       /* response.setHeader("X-AUTH-TOKEN", token);

        Cookie cookie = new Cookie("X-AUTH-TOKEN", token);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);
        */
        return ResponseEntity.status(200).body(token);
    }

    @PostMapping("/logout")
    @ApiOperation(value = "로그아웃")
    public void logout(HttpServletResponse response){
        // 로그아웃파트는 Redis랑 연동해서 했을때 처리해야되는부분 그래서 사실상 유효기간이 지날때까지 써야되고 그냥 쿠키 초기화
        // 하지만 프론트에서 Header 말고 Body로 달라고해서 Body로 전송하기때문에 따로 처리할필요가없는부분

        /*
        Cookie cookie = new Cookie("X-AUTH-TOKEN", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
        */
    }

    @PutMapping("/modify")
    @ApiOperation(value = "토큰을 이용한 회원 정보 수정")
    public ResponseEntity<Boolean> update(HttpServletRequest request, @RequestBody UserUpdateRequestDto requestDto){

        Object details = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(details != null && !(details instanceof  String)) {
            User user = (User) details;
            return ResponseEntity.status(200).body(userService.UpdateUser(user.getUsername(), requestDto));
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }


    @GetMapping("/info")
    @ApiOperation(value = "마이페이지토큰이용")
    public ResponseEntity<UserResponseDto> getInfo(HttpServletRequest request){

        Object details = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(details != null && !(details instanceof  String)) {
            UserResponseDto userResponseDto = new UserResponseDto((User) details);
            return ResponseEntity.status(200).body(userResponseDto);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/join")
    @ApiOperation(value = "회원가입")
    public ResponseEntity<Boolean> save(@RequestBody UserCreateRequestDto requestDto){
        return ResponseEntity.status(200).body(userService.CreateUser(requestDto));
    }

    @GetMapping("/iddupcheck/{username}")
    @ApiOperation(value = "유저 아이디 중복체크")
    public ResponseEntity<Boolean> duplicateCheckUsername(@PathVariable String username){

        return ResponseEntity.status(200).body(userService.DuplicateUsernameCheck(username));
    }

    @GetMapping("/nickdupcheck/{nickname}")
    @ApiOperation(value = "유저 닉네임 중복체크")
    public ResponseEntity<Boolean> duplicateCheckNickname(@PathVariable String nickname){

        return ResponseEntity.status(200).body(userService.DuplicateNicknameCheck(nickname));
    }

    @GetMapping("/emaildupcheck/{email}")
    @ApiOperation(value = "이메일 중복체크")
    public ResponseEntity<Boolean> duplicateCheckEmail(@PathVariable String email){

        return ResponseEntity.status(200).body(userService.DuplicateEmailCheck(email));
    }

    @DeleteMapping("/resign")
    @ApiOperation(value = "토큰이용 회원탈퇴")
    public ResponseEntity<Boolean> delete(HttpServletRequest request){

        Object details = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(details != null && !(details instanceof  String)) {
            User user = (User) details;
            return ResponseEntity.status(200).body(userService.DeleteUser(user.getUsername()));
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/findid/{email}")
    @ApiOperation(value = "이메일을 이용해서 id 찾기 ")
    public ResponseEntity<Boolean> findidByEmail(@PathVariable String email){
        return ResponseEntity.status(200).body(userService.FindUsernameByEmail(email));
    }

    @GetMapping("/findpw/{email}/{username}")
    @ApiOperation(value = "이메일을 과 id 이용해서 비밀번호 찾기 ")
    public ResponseEntity<Boolean> findidByEmail(@PathVariable String email,@PathVariable String username){
        return ResponseEntity.status(200).body(userService.FindUserPasswordByEmailAndUsername(email,username));
    }

}
