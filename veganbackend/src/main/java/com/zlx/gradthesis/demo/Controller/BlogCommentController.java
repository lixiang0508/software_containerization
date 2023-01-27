package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.Service.BlogCommentService;
import com.zlx.gradthesis.demo.Service.BlogService;
import com.zlx.gradthesis.demo.bean.BlogComment;
import com.zlx.gradthesis.demo.bean.ProductComment;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/blogComment")
@CrossOrigin
public class BlogCommentController {

    @Autowired
    BlogCommentService blogCommentService;

    @GetMapping("/check/{blogId}")
    public JsonData getBlogCommentsById(@PathVariable("blogId") Integer blogId){
        return JsonData.buildSuccess(blogCommentService.getCommentsByBlogId(blogId));
    }

    @GetMapping("/all")
    public JsonData getAllBlogComments(){
        return JsonData.buildSuccess(blogCommentService.getAllComments());
    }
    @PostMapping("/add")
    public JsonData addBlogComment(@RequestBody BlogComment blogComment, HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        String cusName = (String)request.getAttribute("userName");
        blogComment.setCustomerId(cusId);
        blogComment.setCustomerName(cusName);
        blogComment.setCreateTime(new Date());
        blogCommentService.addBlogComment(blogComment);
        return JsonData.buildSuccess1("添加博客评论成功");
    }
}
