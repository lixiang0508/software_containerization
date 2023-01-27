package com.zlx.gradthesis.demo.Mapper;

import com.zlx.gradthesis.demo.DTO.CartDTO;
import com.zlx.gradthesis.demo.DTO.OrderDTO;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CartMapperTest {

    @Autowired
    CartMapper cartMapper;

    @Autowired
    OrderMapper orderMapper;

    @Test
    void selectCartByCusId() {
        List<CartDTO> cartDTOS = cartMapper.selectCartByCusId(1);
        for(CartDTO cartDTO:cartDTOS){
            System.out.println(cartDTO);
        }


    }

    @Test
    void  testOrderMapper(){
        List<OrderDTO> orderDTOS = orderMapper.selectOrdersByCusIdAndStatus(10, 1, 1, 3);
        for(OrderDTO orderDTO:orderDTOS){
            System.out.println(orderDTO);
        }

    }
}