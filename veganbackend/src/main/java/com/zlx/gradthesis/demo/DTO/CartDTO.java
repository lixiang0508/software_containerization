package com.zlx.gradthesis.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {
    private Integer id;

    private Integer productId;

    private Integer quantity;

    private Integer productSelected;

    private Integer customerId; //消费者id


    private String productName;//商品名
    private String producer;//生产厂商
    private String productSrc;//商品图片

    private Integer stock;//商品库存
    private Double price;//商品价格




}
