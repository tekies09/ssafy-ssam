package com.ssafy.ssam.ssam_backend.api.domain.user;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToMany;
import javax.persistence.Id;

import com.ssafy.ssam.ssam_backend.api.domain.base.BaseTimeEntity;
import com.ssafy.ssam.ssam_backend.api.domain.board.BattleBoard;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseTimeEntity {
	
	@Id @GeneratedValue
	@Column(name = "id")
	private String id;
    private String username;
    private String email;
    private String password;
    String nickname;
    
    @Enumerated(EnumType.STRING)
    UserRoleStatus is_admin;
	
	@Builder
	public User(String id, String username, String password, String email, UserRoleStatus is_admin, String nickname) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.is_admin = is_admin;
		this.nickname = nickname;
	}
	
//	/* 사용자의 배틀 커뮤니티 게시글 */
//	@OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
//	List<BattleBoard> battleList = new ArrayList<>();
//	
//	/* 사용자의 나만의 팀! */
//	@OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
//	List<MyTeam> myTeamList = new ArrayList<>();
	
	public void changePassword(String password) {
		this.password = password;
	}
	
	public void changeNickname(String nickname) {
		this.nickname = nickname;
	}
}
