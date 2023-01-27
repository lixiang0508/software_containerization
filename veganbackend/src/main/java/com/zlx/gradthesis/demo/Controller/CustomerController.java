package com.zlx.gradthesis.demo.Controller;

import com.zlx.gradthesis.demo.Service.CustomerService;
import com.zlx.gradthesis.demo.bean.Customer;
import com.zlx.gradthesis.demo.utils.JsonData;
import com.zlx.gradthesis.demo.utils.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;



    //注销

    //查看用户信息
    @GetMapping("")
    public JsonData getByCusId(HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        Customer customer = customerService.findById(cusId);

        return JsonData.buildSuccess(customer,"查找cus成功");

    }

    @GetMapping("/all")
    public JsonData getAllCus(){

        return JsonData.buildSuccess(customerService.getAllCus());
    }

    @PostMapping("/update")
    public JsonData updateCustomer(@RequestBody   Customer customer,HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
        customer.setId(cusId);
        String pwd = customer.getPwd();
        String pwdSec = MD5Utils.md5(pwd);

        customer.setPwd(pwdSec);
        customerService.updateCustomer(customer);


        return JsonData.buildSuccess1("修改个人信息成功");
    }

}
