package com.zlx.gradthesis.demo.Controller;


import com.github.wxpay.sdk.WXPay;
import com.zlx.gradthesis.demo.DTO.OrderDTO;
import com.zlx.gradthesis.demo.Service.OrderService;
import com.zlx.gradthesis.demo.bean.Order;
import com.zlx.gradthesis.demo.config.MyPayConfig;
import com.zlx.gradthesis.demo.utils.JsonData;
import com.zlx.gradthesis.demo.utils.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/status/{orderId}")
    public JsonData getStatus(@PathVariable("orderId") Integer orderId){
        return JsonData.buildSuccess(orderService.getOrderById(orderId),"查找订单成功");
    }

    //添加订单
    @PostMapping("/add")
    public JsonData addOrder(HttpServletRequest request, String cids, String receiverName, String receiverMobile, String address, Double totalPrice) throws Exception {

        Integer cusId = (Integer) request.getAttribute("customerId");
        if (cusId == null) return JsonData.buildError("请登录");
        Order order = orderService.addOrders(cusId, cids, receiverName, receiverMobile, address, totalPrice);
        if(order.getId()==null){
            return JsonData.buildError("订单提交失败");
        }
        /*
        HashMap<String,Object> info = new HashMap<>();
        info.put("order",order);
        //微信支付：申请支付链接
        WXPay wxPay = new WXPay(new MyPayConfig());
        HashMap<String, String> data = new HashMap<>();
        data.put("body", "go vegan");//商品描述
        data.put("out_trade_no", "" + order.getId());//当前用户订单的编号作为交易号
        data.put("fee_type", "CNY");//币种
        data.put("total_fee", "1");//以分为单位 支付总金额
        data.put("trade_type", "NATIVE");//交易类型
        data.put("notify_url","http://lixiang.free.idcfengye.com/pay/success");//设置支付完成时的回调方法的接口

        //发送请求获取响应
        try {
            Map<String, String> resp = wxPay.unifiedOrder(data);
            System.out.println(resp);
            info.put("pay_url",resp.get("code_url"));
        } catch (Exception e) {
            e.printStackTrace();
            return JsonData.buildError("支付失败");
        }
       // info.put("pay_url")

         */

        return JsonData.buildSuccess1("添加order成功");


    }
    //根据顾客id 和 status 查找订单
    @GetMapping("/listOrders")
    public JsonData listOrders(HttpServletRequest request,Integer status,Integer pageNum,Integer limit){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if (cusId == null) return JsonData.buildError("请登录");

        PageHelper<OrderDTO> orderDTOPageHelper = orderService.listOrders(cusId, status, pageNum, limit);

        return JsonData.buildSuccess(orderDTOPageHelper,"查找订单成功");
    }

    @GetMapping("/all")
    public JsonData getAllOrders(HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if (cusId == null) return JsonData.buildError("请登录");
        List<Order> orders = orderService.findOrdersById(cusId);

        return JsonData.buildSuccess(orders);

    }

    @DeleteMapping("/delete/{id}")
    public JsonData deleteOrder(HttpServletRequest request,Integer id){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if (cusId == null) return JsonData.buildError("请登录");
        orderService.cancelOrder(orderService.getOrderById(id));
        return JsonData.buildSuccess1("删除订单成功");
    }
}