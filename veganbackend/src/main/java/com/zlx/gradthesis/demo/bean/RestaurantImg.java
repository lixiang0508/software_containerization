package com.zlx.gradthesis.demo.bean;


import lombok.Data;

@Data
public class RestaurantImg {
    private Integer id;
    private Integer restaurantId;//商品id
    private Boolean isMain;//是否主图
    private String src;//图片路径
}
