package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.DTO.OrderDTO;
import com.zlx.gradthesis.demo.bean.Order;
import com.zlx.gradthesis.demo.bean.OrderProduct;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

@Mapper
public interface OrderMapper {

    void saveOrder(@Param("order") Order order);

    void saveOrderProduct(@Param("orderProduct")OrderProduct orderProduct);

    void updateStatus(@Param("orderId")Integer orderId, @Param("status") Integer status);

    Order getOrderById(@Param("orderId")Integer orderId);

    List<Order> selectByOrderTimeAndStatus(@Param("order_date") Date orderDate);

    List<OrderProduct> selectOrderProductsByOrderId(@Param("orderId")Integer orderId);

    //根据orderId和status查找 orderDTO

    List<OrderDTO> selectOrdersByCusIdAndStatus(@Param("cusId")Integer cusId,@Param("status")Integer status,@Param("start")Integer start,
                                                @Param("limit") Integer limit);

    List<Order> findById(@Param("id")Integer id);

    void deleteOrder(@Param("orderId")Integer id);



}
