package com.zlx.gradthesis.demo.Controller;

import com.github.wxpay.sdk.WXPayUtil;
import com.zlx.gradthesis.demo.Service.OrderService;
import com.zlx.gradthesis.demo.websocket.WebSocketServer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.websocket.Session;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/pay")
@Slf4j
@CrossOrigin
public class PayController {

    @Autowired
    OrderService orderService;


    //支付完成的通知url  回调接口
    //微信支付平台就会请求这个接口 将支付状态的数据传递过来
    //
    @RequestMapping("/success")
    public String  success(HttpServletRequest request) throws Exception {
        System.out.println("回调接口被访问  支付成功");
        ServletInputStream is = request.getInputStream();
        byte[] bs = new byte[1024];
        int len =-1;
        StringBuilder sb = new StringBuilder();
        while((len=is.read(bs))!=-1){
            sb.append(new String(bs,0,len));
        }
        String s =sb.toString();
        //xml 转map
        Map<String, String> map = WXPayUtil.xmlToMap(s);
        if(map!=null && "success".equalsIgnoreCase(map.get("result_code"))){
            //支付成功
            //修改订单状态 为已支付
            Integer orderId = Integer.parseInt(map.get("out_trade_no"));
            log.info("orderId:{}",orderId);

            orderService.updateStatus(orderId,2);
            //通过websocket链接向前端推送消息
        WebSocketServer.sendMsg(orderId,"pay success");


            //响应微信支付平台
            HashMap<String,String> resp = new HashMap<>();
            resp.put("return_code","success");
            resp.put("return_msg","ok");
            resp.put("appid",map.get("appid"));
            resp.put("result_code","success");
            String s1 =WXPayUtil.mapToXml(resp);
            return s1;

        }
        return null;


    }
}
