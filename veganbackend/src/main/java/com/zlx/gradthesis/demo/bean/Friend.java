package com.zlx.gradthesis.demo.bean;

import io.swagger.models.auth.In;
import lombok.Data;

@Data
public class Friend {
    //素食交友、征婚类
    private Integer id;

    private String name;
    private Integer age;

    private Integer customer_id;//对应消费者id

    private Boolean religon;//是否信仰宗教

    private String religionName;//信仰什么宗教

    private Integer height;//身高

    private String  intro;//自我介绍

    private Integer vegAge;//素龄

    private String  expectation;//期待

    private String pic;//照片
    private String  contact;//联系方式

}
