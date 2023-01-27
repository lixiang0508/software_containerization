package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.DTO.CartDTO;
import com.zlx.gradthesis.demo.DTO.OrderDTO;
import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.Mapper.CartMapper;
import com.zlx.gradthesis.demo.Mapper.OrderMapper;
import com.zlx.gradthesis.demo.Mapper.ProductMapper;
import com.zlx.gradthesis.demo.bean.Order;
import com.zlx.gradthesis.demo.bean.OrderProduct;
import com.zlx.gradthesis.demo.utils.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class OrderService {

    //添加订单

    @Autowired
    private CartMapper cartMapper;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private ProductMapper productMapper;


    public void updateStatus(Integer orderId, Integer status ){
        orderMapper.updateStatus(orderId, status);
    }

    public Order getOrderById(Integer orderId){
        return orderMapper.getOrderById(orderId);
    }

 @Transactional(isolation= Isolation.SERIALIZABLE)
  public void cancelOrder(Order order){
      orderMapper.updateStatus(order.getId(),6); //6是已经关闭
      //2 还原库存 根据当前订单编号查找 orderProduct  修改product表

      //根据当前订单编号查找对应的所有订单项
      List<OrderProduct> orderProducts = orderMapper.selectOrderProductsByOrderId(order.getId());
      //还原库存
      for(OrderProduct orderProduct:orderProducts){

          //修改库存为原来的库存+本次购买的商品数量
          ProductDTO productDTO = productMapper.selectProductById(orderProduct.getProductId());
          productMapper.changeStock(productDTO.getId(), productDTO.getStock()+orderProduct.getCount());

      }
  }


   //cusId 是消费者id  cids 是"1，8" 购物车id列表  收货人姓名 收货人电话 收货人地址
    public Order addOrders(Integer cusId, String cids,String receiverName,String receiverMobile,String address,Double totalPrice) throws Exception {
        //根据cids查询当前订单中关联的购物车记录详情
        String[] arr = cids.split(",");
        List<Integer> cidList = new ArrayList<>();
        for(int i=0;i<arr.length;i++){
            cidList.add(Integer.parseInt(arr[i]));
        }
        List<CartDTO> cartDTOS = cartMapper.selectShoppingCartsByIds(cidList);


        //校验库存
        boolean flag= true;
        for(CartDTO cartDTO:cartDTOS){
            if(cartDTO.getQuantity()>cartDTO.getStock()){
                //购买数量大于库存
                flag=false;
                break;
            }
        }
        if(flag){
            //库存充足 保存订单
            Order order = new Order();
            order.setOrderDate(new Date());
            order.setCustomerId(cusId);
            order.setPrice(totalPrice);
            order.setReceiverName(receiverName);
            order.setReceiverPhone(receiverMobile);
            order.setStatus(1);//待支付
            order.setReceiverAddr(address);
            order.setOrderDate(new Date());
            String orderId= UUID.randomUUID().toString().replace("-","").substring(0,9);
            StringBuffer sb = new StringBuffer(orderId);
            for(int i=0;i<sb.length();i++){
                if(Character.isLetter(sb.charAt(i))){
                    sb.setCharAt(i, (char) ('0'+ new Random().nextInt(8)));
                }
            }

            order.setId(Integer.parseInt(sb.toString()));
            orderMapper.saveOrder(order);//保存订单
            //生成orderProduct
            int count =arr.length;//有多少个商品项
            for(int i=0;i<count;i++){
                CartDTO cartDTO = cartDTOS.get(i);
                OrderProduct orderProduct = new OrderProduct();
                orderProduct.setOrderNo(Integer.parseInt(sb.toString()));
                orderProduct.setUnitPrice(cartDTO.getPrice());

                orderProduct.setTotalPrice(cartDTO.getPrice()* cartDTO.getQuantity());
                orderProduct.setCount(cartDTO.getQuantity());
                orderProduct.setProductId(cartDTO.getProductId());//设置productId
                orderProduct.setCreateTime(new Date());

                ProductDTO productDTO = productMapper.selectProductById(cartDTO.getProductId());
               // orderProduct.setProductImage(productDTO.);
                orderProduct.setProductName(productDTO.getName());//产品名称
                orderMapper.saveOrderProduct(orderProduct);

                //扣减库存
                productMapper.changeStock(productDTO.getId(), productDTO.getStock()- cartDTO.getQuantity());







            }
            //删除购物车记录



            return order;


        }else{
            throw new Exception("库存不足，下单失败");
        }





    }


   //根据用户id和订单状态查找orderDTO
    public PageHelper<OrderDTO> listOrders(Integer cusId,Integer status,Integer pageNum,Integer limit){
        int start =(pageNum-1)*limit;
        List<OrderDTO> orderDTOS = orderMapper.selectOrdersByCusIdAndStatus(cusId, status, start, limit);
        int count =orderMapper.selectOrdersByCusIdAndStatus(cusId, status, 0, 10000).size();
        int pageCount = count%limit==0? count/limit:count/limit+1;

        return new PageHelper<OrderDTO>(count,pageCount,orderDTOS);



    }

    public List<Order> findOrdersById(Integer id){

        return orderMapper.findById(id);
    }

    public void deleteOrder(Integer id){

        orderMapper.deleteOrder(id);
    }


}
