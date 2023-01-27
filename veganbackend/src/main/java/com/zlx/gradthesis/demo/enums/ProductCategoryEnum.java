package com.zlx.gradthesis.demo.enums;

public enum ProductCategoryEnum {
    //素食产品枚举类
    VEGMEAT(0),VEGCAKE(1),VEGSEASONING(2),VEGCLOTHES(3);


    int code;

    ProductCategoryEnum(int code) {
        this.code = code;
    }
}
