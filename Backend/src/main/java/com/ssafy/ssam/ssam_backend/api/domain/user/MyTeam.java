package com.ssafy.ssam.ssam_backend.api.domain.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;

import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

/* 나만의 팀 도메인 */
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyTeam {
	
	@Id @GeneratedValue
	@Column(name = "id")
	private String id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private User user;
	
}
