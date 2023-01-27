package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.Service.ProductCommentService;
import com.zlx.gradthesis.demo.bean.ProductComment;
import com.zlx.gradthesis.demo.utils.JsonData;
import com.zlx.gradthesis.demo.utils.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.spring.web.json.Json;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class ProductCommentController {

    @Autowired
    ProductCommentService productCommentService;

    //分页查找评论
    @GetMapping("/getPage")
    public JsonData getProductComment(@RequestParam("productId") Integer productId,@RequestParam("pageNum")Integer pageNum){
        PageHelper<ProductComment> productComments = productCommentService.getCommentByProduct(productId, pageNum);
        return JsonData.buildSuccess(productComments,"查找评论成功");

    }
    @PostMapping("/addproductComment")
    public JsonData addProductComment( ProductComment productComment, HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        String cusName = (String)request.getAttribute("userName");
        productComment.setCustomerId(cusId);
        productComment.setCustomerName(cusName);
        productComment.setCreateTime(new Date());
        productCommentService.addComment(productComment);
        return JsonData.buildSuccess1("添加评论成功");
    }

    //获取一个商品的全部评论
    @GetMapping("/productcomment/{id}")
    public JsonData getProductCommentById(@PathVariable("id") Integer id){
        return JsonData.buildSuccess(productCommentService.getCommentsById(id));

    }

}
