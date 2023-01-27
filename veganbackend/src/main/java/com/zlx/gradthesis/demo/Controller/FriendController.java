package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.Service.FriendService;
import com.zlx.gradthesis.demo.bean.Friend;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
public class FriendController {

    @Autowired
    FriendService friendService;


    @GetMapping("/friend/all")
    public JsonData getAllFriends(){
        return JsonData.buildSuccess(friendService.getAllFriends());

    }

    @GetMapping("/friend/{id}")
    public JsonData getFriendById(@PathVariable("id")Integer id){

        return JsonData.buildSuccess(friendService.getFriendById(id));
    }

    @PostMapping("/addFriend")
    public JsonData addFriend(Friend friend){
        friendService.addFriend(friend);
        return JsonData.buildSuccess("添加friend成功");
    }

    @DeleteMapping("/deleteFriend")
    public JsonData deleteFriend(Integer id){
        friendService.deleteById(id);
        return JsonData.buildSuccess("删除friend成功");

    }




}
