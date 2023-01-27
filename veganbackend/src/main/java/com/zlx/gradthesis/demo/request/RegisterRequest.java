package com.zlx.gradthesis.demo.request;


//import com.sun.istack.internal.NotNull;
import lombok.Data;

import java.util.Date;

//注册请求类
@Data
public class RegisterRequest {

   // @NotNull
    private String userName;

   // @NotNull
    private String phoneNumber;

   // @NotNull
    private String email;

    //@NotNull
    private String pwd;

    private Integer  age;
    private Integer gender;
    private String icon;

    private Integer vegType;

    private Date createTime;

    private Date updateTime;



}
