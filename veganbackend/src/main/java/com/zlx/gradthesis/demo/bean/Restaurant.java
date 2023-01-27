package com.zlx.gradthesis.demo.bean;


import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
//素食餐厅类
public class Restaurant {

    @Id
    private Integer id;

    private String region;//省区

    private String address;//地址

    private String info;//具体介绍

    private String img;//图片

    private Float score;//评分

    private String name;//餐厅名称

    private Integer price;//人均价格

    private Integer type;//类型 1 全素不含五辛 2 全素含五辛 3 蛋素 4 蛋奶素 5 有部分非素食菜品

}
