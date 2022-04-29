package com.ssafy.ssam.ssam_backend.api.domain.board;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;

import javax.persistence.Id;

import com.ssafy.ssam.ssam_backend.api.domain.base.BaseTimeEntity;
import com.ssafy.ssam.ssam_backend.api.domain.user.MyTeam;
import com.ssafy.ssam.ssam_backend.api.domain.user.User;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorColumn
public class BattleBoard extends BaseTimeEntity {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;
	private String title;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private MyTeam myteam;
	
	@Builder
	public BattleBoard(String title, User user, MyTeam myteam) {
		this.title = title;
		this.user = user;
		this.myteam = myteam;
	}
	
	/* 기능 */
	public void changeBoard(String title, MyTeam myteam) {
		this.title = title;
		this.myteam = myteam;
	}
	
	/*
	 * 혹시 나중에 추가할 수 있는 기능 미리 만들어뒀어요 ㅎㅎ
	 public void addComment(Comment comment){
        comments.add(comment);
        comment.changeBoard(this);
    }

    public void deleteComment(Comment comment){
        comments.remove(comment);
    }

    public void addCount(){
        this.count++;
    }

    public void changeFileInfo(List<FileInfo> fileInfos) {
       this.fileInfos = fileInfos;
    }
	*/
}
