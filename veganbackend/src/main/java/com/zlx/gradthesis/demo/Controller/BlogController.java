package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.Service.BlogService;
import com.zlx.gradthesis.demo.bean.Blog;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin
public class BlogController {

    @Autowired
    BlogService blogService;

    //查看所有博客
    @GetMapping("/blog/all")
    public JsonData getAllBlogs(){
        return JsonData.buildSuccess(blogService.getAllBlogs(),"查找博客成功");
    }

    //添加博客
    @PostMapping("/blog/add")
    public JsonData addBlog(@RequestBody Blog blog, HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        String cusName = (String)request.getAttribute("userName");
        blog.setAuthorName(cusName);
        blog.setCustomerId(cusId);
        blogService.insertBlog(blog);
        return JsonData.buildSuccess1("添加博客成功");
    }
    //根据博客id 查找博客
    @GetMapping("/blog/get/{id}")
    public JsonData getBlogById(@PathVariable("id") Integer id){
        System.out.println("search blog by id");
        Blog blog = blogService.selectBlogById(id);
        return JsonData.buildSuccess(blog);

    }

    //TODO  修改请求路径 前端只能传过来token  这里需要用拦截器拦一下
    @GetMapping("/getBlogs")
    public JsonData getBlogByAuthor(HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");

        List<Blog> blogs = blogService.selectByAuthor(cusId);
        return JsonData.buildSuccess(blogs,"根据作者查找博客成功");

    }
    @DeleteMapping("/deleteBlog/{id}")
    public JsonData deleteBlogById(@PathVariable Integer id){
        blogService.deleteById(id);
        return JsonData.buildSuccess1("删除博客成功");
    }
}
