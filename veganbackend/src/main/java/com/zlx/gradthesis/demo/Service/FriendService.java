package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.FriendMapper;
import com.zlx.gradthesis.demo.bean.Friend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class FriendService {


    @Autowired
    FriendMapper friendMapper;

    public void addFriend(Friend friend){

        friendMapper.addFriend(friend);
    }

    public List<Friend> getAllFriends(){
        return friendMapper.getAllFriends();
    }


    public Friend getFriendById(Integer id){
        return friendMapper.getFriendById(id);
    }

    public void deleteById(Integer id){

        friendMapper.deleteById(id);

    }

}
