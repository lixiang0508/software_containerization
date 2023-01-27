package com.zlx.gradthesis.demo;

import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.Mapper.OrderMapper;
import com.zlx.gradthesis.demo.Mapper.ProductMapper;
import com.zlx.gradthesis.demo.bean.Order;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DemoApplicationTests {

	@Autowired
	ProductMapper productMapper;

	@Autowired
	OrderMapper orderMapper;

	@Test
	void contextLoads() {


	}


	@Test
	void testrecommedproduct(){
		List<ProductDTO> productDTOS = productMapper.selectRecommendProduct();
		System.out.println(productDTOS);


	}

	@Test
	void testOutTime(){
		Date time = new Date(System.currentTimeMillis()-1*1000*60);//当前事件往前追溯30min

		List<Order> orders = orderMapper.selectByOrderTimeAndStatus(time);
		for(Order order:orders){
			System.out.println(order);
		}
	}

}
