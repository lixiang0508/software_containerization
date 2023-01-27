package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.RestaurantMapper;
import com.zlx.gradthesis.demo.bean.Restaurant;
import com.zlx.gradthesis.demo.bean.RestaurantComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RestaurantService {

    @Autowired
    RestaurantMapper restaurantMapper;


    public List<Restaurant> getAllCafes(){
        return restaurantMapper.getAllRestaurant();
    }

    public List<Restaurant> getCafeByRegion(String region){
        return restaurantMapper.getRestaurantByRegion(region);
    }

    public Restaurant getCafeById(Integer id){
        return restaurantMapper.getRestaurantById(id);
    }

    public List<Restaurant> blurSearch(String kwd){
        return restaurantMapper.blurSearch(kwd);
    }

    public void addComment(RestaurantComment restaurantComment){
        restaurantMapper.addComment(restaurantComment);
    }

    public List<RestaurantComment> getCommentsById(Integer id){
        return restaurantMapper.getCafeCommentsById(id);
    }

    public List<RestaurantComment> getAllCafeComments(){
        return restaurantMapper.getAllCafeComments();
    }

}
