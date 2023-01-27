package com.zlx.gradthesis.demo.enums;

import lombok.Getter;

@Getter
public enum VeganTypeEnum {
    NOT(0),EGG_MILK(1),EGG(2),MILK(3),FRUIT(4),VEGAN(5);
    //素食类型枚举
    private int code;

   VeganTypeEnum(int code) {
        this.code = code;
    }
}
