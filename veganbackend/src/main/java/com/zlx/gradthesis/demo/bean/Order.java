package com.zlx.gradthesis.demo.bean;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    private Integer id; //订单ID
    private Integer customerId;
    private Double price;//总价
    private Integer status; //1 待付款 2 已支付待发货 3 待收货 4 待评价 5 已完成 6 已关闭


    @JsonFormat(pattern="yyyy-MM-dd hh:mm:ss",locale="zh",timezone="GMT+8")
    private Date orderDate;       //下单时间
    @JsonFormat(pattern="yyyy-MM-dd hh:mm:ss",locale="zh",timezone="GMT+8")
    private Date  finishDate;//完成时间

    private Integer shippingId;
    private String receiverName;//收件人姓名
    private String receiverPhone;//收件人电话
    private String receiverAddr;//收件地址


}
