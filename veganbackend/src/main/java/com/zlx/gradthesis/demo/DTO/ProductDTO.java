package com.zlx.gradthesis.demo.DTO;

import com.zlx.gradthesis.demo.bean.ProductImg;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ProductDTO {
    private Integer id;

    private Integer categoryId; //产品类别

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

    private List<ProductImg> imgList;//图片列表


}
