package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.bean.ProductComment;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductCommentServiceTest {

    @Autowired
    ProductCommentService productCommentService;

    @Test
    void addComment() {
        ProductComment comment= new ProductComment(1,"zhangs",5.0,11,3,"good",new Date(),"nice www",1);
        productCommentService.addComment(comment);
    }
}