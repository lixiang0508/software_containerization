package com.zlx.gradthesis.demo.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@NoArgsConstructor
public class ProductComment {

    @Id
    private Integer id;
    private Integer customerId;//用户ID
    private String customerName;//用户名
    private Double score;//打分

    private Integer orderId; //订单id

    private Integer productId;//产品id

    private String comment;//评语
    private Date createTime;//评价时间
    private String productName;//产品名称
    private Integer commType;//好中差 123


    public ProductComment(Integer customerId, String customerName, Double score, Integer orderId, Integer productId, String comment, Date createTime, String productName, Integer commType) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.score = score;
        this.orderId = orderId;
        this.productId = productId;
        this.comment = comment;
        this.createTime = createTime;
        this.productName = productName;
        this.commType = commType;
    }
}
