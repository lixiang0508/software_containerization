package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.utils.PageHelper;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Test
    void getRecommendProducts() {
    }

    @Test
    void getRecommendProductsByCategory() {
    }

    @Test
    void getAllProductsByCategory() {
    }

    @Test
    void selectProductById() {
    }

    @Test
    void selectProductByName() {
        PageHelper<ProductDTO> ve = productService.selectProductByName("ve", 2, 2);
        System.out.println(ve);

    }
}