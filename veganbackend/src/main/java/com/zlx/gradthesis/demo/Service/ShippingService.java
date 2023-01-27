package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.ShippingMapper;
import com.zlx.gradthesis.demo.bean.Shipping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShippingService {

    @Autowired
    ShippingMapper shippingMapper;

    //根据用户id查找收货地址列表
    public List<Shipping>  getAddrsByUserId(Integer cusId){
        return shippingMapper.findAddrsByCusId(cusId);
    }


    //添加收货地址
    public void addShipping(Shipping shipping){
        shippingMapper.addShipping(shipping);
    }

    //删除收货地址
    public void deleteShipping(Integer id){
        shippingMapper.deleteShipping(id);
    }

    //修改收货地址
    public void updateShipping(Shipping shipping){
        shippingMapper.changeShipping(shipping);
    }


}
