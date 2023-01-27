package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.bean.Restaurant;
import com.zlx.gradthesis.demo.bean.RestaurantComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RestaurantMapper {

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> getRestaurantByRegion(@Param("region") String region);

    public Restaurant getRestaurantById(@Param("id")Integer id);

    public List<Restaurant> blurSearch(@Param("kwd") String kwd);

    void addComment(@Param("comment") RestaurantComment restaurantComment);

    List<RestaurantComment> getCafeCommentsById(@Param("id") Integer id);

    List<RestaurantComment> getAllCafeComments();


}
