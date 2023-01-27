package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.bean.Shipping;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ShippingMapper {
    //根据userId 查找收货地址列表
    List<Shipping> findAddrsByCusId(@Param("userId") Integer userId);

    //根据收货地址id  获取收货地址信息

    Shipping  findShippingById(@Param("shippingId")Integer shippingId);


    //添加收货地址
    void addShipping(@Param("shipping")Shipping shipping);

    //删除收货地址
    void deleteShipping(@Param("id")Integer id);


    void changeShipping(@Param("shipping")Shipping shipping);

}
