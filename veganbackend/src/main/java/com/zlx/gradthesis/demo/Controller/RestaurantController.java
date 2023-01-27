package com.zlx.gradthesis.demo.Controller;

import com.zlx.gradthesis.demo.Service.RestaurantService;
import com.zlx.gradthesis.demo.bean.Restaurant;
import com.zlx.gradthesis.demo.bean.RestaurantComment;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class RestaurantController {


    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/restaurant/all")
    public JsonData getAllRestaurant(){

        List<Restaurant> allCafes = restaurantService.getAllCafes();

        return JsonData.buildSuccess(allCafes);
    }

    @GetMapping("/restaurant/{id}")
    public JsonData getCafeById(@PathVariable("id") Integer id){
        return JsonData.buildSuccess(restaurantService.getCafeById(id));
    }

    @GetMapping("/restaurant/city")
    public JsonData getByRegion(@RequestParam("region") String region){
        return JsonData.buildSuccess(restaurantService.getCafeByRegion(region));
    }
    @GetMapping("/restaurant/search")
    public JsonData blurSearch (@RequestParam("kwd") String kwd){
        return JsonData.buildSuccess(restaurantService.blurSearch(kwd));
    }

    @PostMapping("/addCafeComment")
    public JsonData addComment(@RequestBody RestaurantComment comment, HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        String cusName = (String)request.getAttribute("userName");
       comment.setCustomerId(cusId);
        comment.setCustomerName(cusName);
       comment.setCreateTime(new Date());
       restaurantService.addComment(comment);


        return JsonData.buildSuccess("添加cafe comment成功");
    }
    @GetMapping("/restaurant/comment/{id}")
    public JsonData getComment(@PathVariable("id") Integer cafeId){
        return JsonData.buildSuccess(restaurantService.getCommentsById(cafeId));
    }
    @GetMapping("/restaurant/allComments")
    public JsonData getAllComments(){
        return JsonData.buildSuccess(restaurantService.getAllCafeComments());
    }
}
