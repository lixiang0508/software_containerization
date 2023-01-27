package com.zlx.gradthesis.demo.Controller;

import com.zlx.gradthesis.demo.Service.AdminService;
import com.zlx.gradthesis.demo.Service.BlogService;
import com.zlx.gradthesis.demo.Service.CustomerService;
import com.zlx.gradthesis.demo.Service.FriendService;
import com.zlx.gradthesis.demo.bean.Blog;
import com.zlx.gradthesis.demo.bean.Customer;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    BlogService blogService;

    @Autowired
    CustomerService customerService;


    @Autowired
    FriendService friendService;

    @DeleteMapping("/deleteCustomer/{id}")
    public JsonData deleteCusId(@PathVariable Integer id){
        customerService.deleteCustomer(id);
        return JsonData.buildSuccess1("删除customer成功");
    }


    @DeleteMapping("/deleteFriend/{id}")
    public JsonData deleteFriendById(@PathVariable Integer id){
        friendService.deleteById(id);

        return JsonData.buildSuccess1("删除friend成功");

    }
    @PostMapping("/changeCustomer")
    public JsonData changeCustomer(@RequestBody Customer customer, HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        customerService.updateCustomer(customer);

        return JsonData.buildSuccess1("修改customer成功");


    }


    @GetMapping("/blogs")
    public JsonData getAllBlogs(){
        return JsonData.buildSuccess(blogService.getAllBlogs());

    }


    //删除一条博客
    @DeleteMapping("/deleteBlog/{id}")
    public JsonData deleteBlogById(@PathVariable Integer id){
        blogService.deleteById(id);
        return JsonData.buildSuccess1("删除博客成功");
    }


}
