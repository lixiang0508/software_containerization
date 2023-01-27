package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.bean.Shipping;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class ShippingServiceTest {

    @Autowired
    ShippingService shippingService;

    @Test
    void getAddrsByUserId() {
        List<Shipping> addrsByUserId = shippingService.getAddrsByUserId(1);
        for(Shipping sp:addrsByUserId){
            System.out.println(sp);
        }

    }
}