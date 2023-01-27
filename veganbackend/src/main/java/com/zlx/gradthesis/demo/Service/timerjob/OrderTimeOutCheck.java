package com.zlx.gradthesis.demo.Service.timerjob;


import com.github.wxpay.sdk.WXPay;
import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.Mapper.OrderMapper;
import com.zlx.gradthesis.demo.Mapper.ProductMapper;
import com.zlx.gradthesis.demo.Service.OrderService;
import com.zlx.gradthesis.demo.bean.Order;
import com.zlx.gradthesis.demo.bean.OrderProduct;
import com.zlx.gradthesis.demo.config.MyPayConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class OrderTimeOutCheck {

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private OrderService orderService;



    private MyPayConfig myPayConfig = new MyPayConfig();
    private WXPay wxPay = new WXPay(myPayConfig);

    @Scheduled(cron="0/5 * * * * ?")
    public void checkAndCloseOrder() throws Exception {
        //查询超过30分钟  订单状态依然为待支付状态的订单
        Date time = new Date(System.currentTimeMillis()-30*1000*60);//当前事件往前追溯30min

        List<Order> orders = orderMapper.selectByOrderTimeAndStatus(time);


        //请求微信平台 请求订单最终的支付状态  如果确实没支付就取消订单

        for(int i=0;i< orders.size();i++){
            Order order = orders.get(i);
            HashMap<String,String> map = new HashMap<>();
            map.put("out_trade_no",order.getId()+"");
            Map<String, String> resp = wxPay.orderQuery(map);

            if("SUCCESS".equalsIgnoreCase(resp.get("trade_state"))){
                //如果已经支付 就修改订单状态为已发货
                orderMapper.updateStatus(order.getId(), 2);
            }else if("NOTPAY".equalsIgnoreCase(resp.get("trade_state"))){
                //确实没支付

                Map<String, String> cancelMap = wxPay.closeOrder(map); //0 向微信平台 发送link  要求关闭当前订单链接  支付失效
                System.out.println(cancelMap);



                //取消订单

               orderService.cancelOrder(order);




            }

        }

        //取消订单
        //0 向微信平台 发送link  要求关闭当前订单链接  支付失效
        /*
        for(Order order:orders){
            orderMapper.updateStatus(order.getId(),6); //6是已经关闭
        }
        */





    }
}
