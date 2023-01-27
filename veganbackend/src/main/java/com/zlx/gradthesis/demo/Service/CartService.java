package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.DTO.CartDTO;
import com.zlx.gradthesis.demo.Mapper.CartMapper;
import com.zlx.gradthesis.demo.request.AddCartRequest;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CartService {

    @Autowired
    CartMapper cartMapper;

    public void addCart(Integer productId,  Integer quantity,Integer customerId){


        //TODO 需要判断一下productId 和customerId 在购物车里是否存在  如果已经存在 要用update
        if(cartMapper.selectCartByCusIdAndProductId(customerId,productId)>0){
             cartMapper.updateCart(customerId,quantity,productId);
        }
        else{cartMapper.addCart(productId,quantity,customerId);}

    }

    public Double getTotalPrice(Integer customerId){
        //计算购物车中商品总价格
        Double totalPrice = cartMapper.countTotalPrice(customerId);
        return totalPrice;
    }

    public Integer getChosenProducts(Integer customerId){
     return    cartMapper.getChosenProducts(customerId);
    }

    public void changeStatus(Integer id){
        //改变选中状态
        cartMapper.changeSelectStatus(id);}

     public void changeCount(Integer customerId, Integer cartId, Integer quantity){
        //改变商品数量
        cartMapper.changeCount(cartId, quantity,customerId);
     }

     //根据用户id查找购物车列表
     public List<CartDTO> selectCartByCusId(Integer cusId){
        return cartMapper.selectCartByCusId(cusId);
     }

     public void deleteCart(Integer customerId, Integer productId){
        cartMapper.deleteCartByCusIdAndProId(customerId, productId);
      }

      //根据cart id数组集合查找carts
    public List<CartDTO> selectShoppingCartsByIds(List<Integer> ids){
        return  cartMapper.selectShoppingCartsByIds(ids);
    }
}
