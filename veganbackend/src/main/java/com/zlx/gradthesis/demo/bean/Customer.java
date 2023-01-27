package com.zlx.gradthesis.demo.bean;


import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class Customer {
    private Integer id;
    private String userName;//用户名

    private String phoneNumber;//电话号码

    private String email ;//email address
    private String pwd;//密码

    private String icon;//头像

    private Integer age;//年龄
    private Integer gender;//性别

    private Integer vegType;//素食类型

    private Date createTime; //创建时间
    private Date  updateTime;//更新时间


    public Customer(String phoneNumber, String email, String pwd, String icon, Integer age, Integer gender, Integer veg_type) {
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.pwd = pwd;
        this.icon = icon;
        this.age = age;
        this.gender = gender;
        this.vegType = veg_type;
    }
}
