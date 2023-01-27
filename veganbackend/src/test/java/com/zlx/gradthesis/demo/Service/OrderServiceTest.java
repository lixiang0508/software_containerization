package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.bean.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;



@SpringBootTest
class OrderServiceTest {

    @Autowired
   private  OrderService orderService;

    @Test
    void addOrders() throws Exception {
        Order order = orderService.addOrders(1, "1,2", "张三丰", "18688888888", "中关村", 30.0);
        System.out.println(order);
    }
}