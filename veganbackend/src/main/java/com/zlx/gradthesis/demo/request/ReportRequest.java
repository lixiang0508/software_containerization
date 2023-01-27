package com.zlx.gradthesis.demo.request;

import lombok.Data;

@Data
public class ReportRequest {

    private Integer customerId;//顾客id

    private Integer gender;//性别

    private Integer age;//年龄

    private Integer veganType;//素食类型

    private String selfIntro ;//自我介绍

    private String  pics;//图片url

    private String expectation;//对对方的期待

    private Integer type;// 1 征婚 2 交友
}
