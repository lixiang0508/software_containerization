package com.zlx.gradthesis.demo.bean;


import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Report {
    //征婚启事对象

    @Id
    private Integer id;

    private Integer customerId;//顾客id

    private Integer gender;//性别

    private Integer age;//年龄

    private Integer veganType;//素食类型

    private String selfIntro ;//自我介绍

    private String  pics;//图片url

    private String expectation;//对对方的期待

    private Integer type;// 1 征婚 2 交友
}
