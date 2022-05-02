package com.ssafy.ssam.ssam_backend.api.dto.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@ApiModel("BattleCommunityBoardListResponse")
public class BattleCommunityRes extends BaseResponseBody {
	
	public BattleCommunityRes(Integer statusCode, String message) {
		super(statusCode, message);
	}

	public BattleCommunityRes(Integer statusCode) {
		super(statusCode);
	}

	public BattleCommunityRes() {
		super();
	}

	@ApiModelProperty(name = "배틀 커뮤니티 글 리스트")
	List<BattleBoard> battleCommunityList = new ArrayList<>();
	
	public static BattleCommunityRes of(Integer statusCode, String message, List<BattleBoard> battleCommunityList) {
		BattleCommunityRes res = new BattleCommunityRes();
		res.setMessage(message);
		res.setStatusCode(statusCode);
		for(BattleBoard battleBoard : battleCommunityList) {
			res.battleCommunityList.add(battleBoard);
		}
		
		return res;
	}
}
