package com.zlx.gradthesis.demo.bean;


import lombok.Data;

@Data
public class ProductImg {
    private Integer id;
    private Integer productId;//商品id
    private Boolean isMain;//是否主图
    private String src;//图片路径
}
