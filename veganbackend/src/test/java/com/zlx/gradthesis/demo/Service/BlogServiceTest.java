package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.bean.Blog;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BlogServiceTest {

    @Autowired
    BlogService blogService;

    @Test
    public void getAllBlogs() {
        List<Blog> allBlogs = blogService.getAllBlogs();
        for(Blog b:allBlogs){
            System.out.println(b);
        }

    }

    @Test
    public void insertBlog() {
    }

    @Test
    public void selectBlogById() {
    }

    @Test
    public void selectByAuthor() {
    }
}