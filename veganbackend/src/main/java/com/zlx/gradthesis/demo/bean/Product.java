package com.zlx.gradthesis.demo.bean;


import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class Product {
    private Integer id;

    private Integer categoryId; //产品类别

    // 1 素肉 2 零食 3 糕点 4 宠物用品 5 vegan dairy 6 nutrition 7 baby food 8 beverage 9 footware、clothes

    private String name;//名称

    private Integer soldNumber;//销量

    private String subtitle; //小标题



    private String detail; //细节描述

    private Double price;//单价

    private Integer stock;//库存

    private Integer status; //1 正常 -1删除  0下架

    private Date createTime;//创建时间

    private Date updateTime; //更新时间

    private String producer;//生产厂商

    private String tag;//标签
    private String alt;//备注
}
