package com.zlx.gradthesis.demo.bean;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class RestaurantComment {

    @Id
    private Integer id;
    private Integer customerId;//用户ID
    private String customerName;//用户名
    private Double score;//打分

    private Integer restaurantId; //餐馆id
    private String comment;//评语
    private Date createTime;//评价时间

}
