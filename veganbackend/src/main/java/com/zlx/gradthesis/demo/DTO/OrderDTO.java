package com.zlx.gradthesis.demo.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.zlx.gradthesis.demo.bean.OrderProduct;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Integer id; //订单ID
    private Integer customerId;
    private Integer price;//总价
    private Integer status; //0 未完成 1 已完成 2 已取消
    //private int payStatus;//支付状态 0 待支付 1 已经支付

    @JsonFormat(pattern="yyyy-MM-dd hh:mm:ss",locale="zh",timezone="GMT+8")
    private Date orderDate;       //下单时间
    @JsonFormat(pattern="yyyy-MM-dd hh:mm:ss",locale="zh",timezone="GMT+8")
    private Date  finishDate;//完成时间


    private Integer shippingId;
    private String receiverName;//收件人姓名
    private String receiverPhone;//收件人电话
    private String receiverAddr;//收件地址

    private List<OrderProduct> orderProductList;
}
