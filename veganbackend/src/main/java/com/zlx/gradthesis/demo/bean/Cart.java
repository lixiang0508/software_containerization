package com.zlx.gradthesis.demo.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

    @Id
    private Integer id;

    private Integer productId;



    private Integer quantity;

    private Integer productSelected;

    private Integer customerId; //消费者id




}
