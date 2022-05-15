package com.ssafy.ssam.ssam_backend.api.controller.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserCreateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserUpdateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.UserLoginResponseDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.UserResponseDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.UserUpdateDto;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserLoginRequestDto requestDto, HttpServletResponse response ){
        Map<String, Object> map = userService.LoginUser(requestDto);
        User user = null;
        int statusCode = 404;
        if(map.get("result").equals("Success")) {
            user = (User) map.get("user");
            String token = jwtTokenProvider.createToken(user.getUsername(), user.getRole().toString(),user.getEmail(),user.getNickname());
            UserLoginResponseDto userLoginResponseDto = new UserLoginResponseDto(user);
            map.put("user",userLoginResponseDto);
            map.put("token", token);
            statusCode = 200;
        }
        return ResponseEntity.status(statusCode).body(map);
       /* response.setHeader("X-AUTH-TOKEN", token);
        Cookie cookie = new Cookie("X-AUTH-TOKEN", token);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);
        */
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
    public ResponseEntity<Map<String, Object>> update(HttpServletRequest request, @RequestBody UserUpdateRequestDto requestDto){
        Map<String, Object> map = new HashMap<>();
        String result = "Fail";
        int statusCode = 404;
        Object details = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(details != null && !(details instanceof String)) {
            User user = (User) details;
            if((userService.UpdateUser(user.getUsername(), requestDto))){
                result = "Success";
                UserUpdateDto userUpdateDto = new UserUpdateDto(userService.loadUserByUsername(user.getUsername()));
                statusCode = 200;
                map.put("user",userUpdateDto);
            }
        }
        map.put("result",result);
        return ResponseEntity.status(statusCode).body(map);
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
    public ResponseEntity<BaseResponseBody> save(@RequestBody UserCreateRequestDto requestDto){
        String result = "Fail";
        int statuscode = 404;
        if(userService.CreateUser(requestDto)){
            result = "Success";
            statuscode = 200;
        }
        return ResponseEntity.status(statuscode).body(new BaseResponseBody(statuscode, result));
    }
    @DeleteMapping("/resign")
    @ApiOperation(value = "토큰이용 회원탈퇴")
    public ResponseEntity<BaseResponseBody> delete(HttpServletRequest request){
        String result = "Fail";
        int statuscode = 404;
        Object details = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(details != null && !(details instanceof  String)) {
            User user = (User) details;
            if(userService.DeleteUser(user.getUsername())){
                result = "Success";
                statuscode = 200;
            }
        }
        return ResponseEntity.status(statuscode).body(new BaseResponseBody(statuscode, result));
    }

    @GetMapping("/iddupcheck/{username}")
    @ApiOperation(value = "유저 아이디 중복체크")
    public ResponseEntity<BaseResponseBody> duplicateCheckUsername(@PathVariable String username){
        String result = "Fail";
        int statuscode = 404;

        if(userService.DuplicateUsernameCheck(username)){
            statuscode=200;
            result="Success";
        }
        return ResponseEntity.status(statuscode).body(new BaseResponseBody(statuscode, result));
    }

    @GetMapping("/nickdupcheck/{nickname}")
    @ApiOperation(value = "유저 닉네임 중복체크")
    public ResponseEntity<BaseResponseBody> duplicateCheckNickname(@PathVariable String nickname){
        String result = "Fail";
        int statuscode = 404;

        if(userService.DuplicateNicknameCheck(nickname)){
            statuscode=200;
            result="Success";
        }
        return ResponseEntity.status(statuscode).body(new BaseResponseBody(statuscode, result));
    }

    @GetMapping("/emaildupcheck/{email}")
    @ApiOperation(value = "이메일 중복체크")
    public ResponseEntity<BaseResponseBody> duplicateCheckEmail(@PathVariable String email){
        String result = "Fail";
        int statuscode = 404;

        if(userService.DuplicateEmailCheck(email)){
            statuscode=200;
            result="Success";
        }
        return ResponseEntity.status(statuscode).body(new BaseResponseBody(statuscode, result));
    }



    @GetMapping("/findid/{email}")
    @ApiOperation(value = "이메일을 이용해서 id 찾기 ")
    public ResponseEntity<Boolean> findidByEmail(@PathVariable String email) throws Exception{
        return ResponseEntity.status(200).body(userService.FindUsernameByEmail(email));
    }

    @GetMapping("/findpw/{email}/{username}")
    @ApiOperation(value = "이메일을 과 id 이용해서 비밀번호 찾기 ")
    public ResponseEntity<Boolean> findidByEmail(@PathVariable String email,@PathVariable String username) throws Exception {
        return ResponseEntity.status(200).body(userService.FindUserPasswordByEmailAndUsername(email,username));
    }

}
