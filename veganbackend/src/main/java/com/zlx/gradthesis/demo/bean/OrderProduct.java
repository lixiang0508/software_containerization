package com.zlx.gradthesis.demo.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct {

    @Id
    private Integer id;

    private Integer orderNo;//属于哪个order
    private Integer productId;//商品id
    private String productName;//当前商品名称
    private String productImage;//产品图像
    private Integer count;//当前商品数量
    private Double unitPrice; //单价
    private  Double totalPrice;//当前商品总价
    @JsonFormat(pattern="yyyy-MM-dd hh:mm:ss",locale="zh",timezone="GMT+8")
    private Date createTime;       //下单时间
    @JsonFormat(pattern="yyyy-MM-dd hh:mm:ss",locale="zh",timezone="GMT+8")
    private Date  finishDate;//更新时间



}
