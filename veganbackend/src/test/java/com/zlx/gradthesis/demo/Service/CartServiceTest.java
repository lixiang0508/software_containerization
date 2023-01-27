package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.DTO.CartDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CartServiceTest {


    @Autowired
    CartService cartService;




    @Test
    void selectShoppingCartsByIds() {
        List<Integer> arr = new ArrayList<>();
        arr.add(1);
        arr.add(2);
        List<CartDTO> cartDTOS = cartService.selectShoppingCartsByIds(arr);
        for(CartDTO cartDTO:cartDTOS){
            System.out.println(cartDTO);
        }

    }
}