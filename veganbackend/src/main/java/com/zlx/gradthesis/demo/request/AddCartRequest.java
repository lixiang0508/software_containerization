package com.zlx.gradthesis.demo.request;

import lombok.Data;

@Data
public class AddCartRequest {

    //产品id
    private Integer productId;

    //产品数量
    private Integer quantity;

}
