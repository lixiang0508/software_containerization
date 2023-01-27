package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.Service.ShippingService;
import com.zlx.gradthesis.demo.bean.Shipping;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/shipping")
@CrossOrigin
public class ShippingController {

    @Autowired
    ShippingService shippingService;

    @GetMapping("/findAddrs")
    public JsonData findAddrs(HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        //int i = Integer.parseInt(cusId);
        List<Shipping> addrs = shippingService.getAddrsByUserId(cusId);
        return JsonData.buildSuccess(addrs,"查找收货地址成功");


    }

    //删除地址
    @DeleteMapping("/delete/{id}")
    public JsonData deleteById(HttpServletRequest request,@PathVariable("id") Integer id){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        shippingService.deleteShipping(id);
        return JsonData.buildSuccess1("删除地址成功");

    }
    @PostMapping("/add")
    public JsonData addShipping(@RequestBody Shipping shipping,HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        shipping.setUserId(cusId);
        shippingService.addShipping(shipping);
        return JsonData.buildSuccess1("添加地址成功");


    }

    @PostMapping("/change")
    public JsonData  changeShipping(@RequestBody Shipping shipping,HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        shipping.setUserId(cusId);
        shippingService.updateShipping(shipping);
        return JsonData.buildSuccess1("修改地址成功");

    }
}
