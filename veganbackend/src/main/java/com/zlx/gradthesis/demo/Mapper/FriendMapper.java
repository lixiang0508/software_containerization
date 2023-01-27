package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.bean.Friend;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface FriendMapper {


    public void deleteById(@Param("id")Integer id);

    public List<Friend> getAllFriends();

    public void addFriend(@Param("friend")Friend friend);

    public Friend getFriendById(@Param("id")Integer id);

}
