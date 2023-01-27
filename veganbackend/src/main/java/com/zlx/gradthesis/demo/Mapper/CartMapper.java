package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.DTO.CartDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CartMapper {
    //删除购物车中商品
    void deleteCartByCusIdAndProId(@Param("cusId") Integer cusId, @Param("proId") Integer proId);

    //根据cart_id 调整购买数量
    void changeCount(@Param("cartId")Integer cartId,@Param("quantity")Integer quantity,@Param("customerId") Integer customerId );

    Double countTotalPrice(@Param("customerId")Integer customerId); //购物车总价格

    //切换选中状态 0是没选中 1是选中 0没选中 1 选中
    void changeSelectStatus(@Param("cartId")Integer cartId);

    void addCart(@Param("productId")Integer productId, @Param("quantity") Integer quantity,@Param("customerId")Integer customerId);//添加商品到购物车

    List<CartDTO> selectCartByCusId(@Param("cusId") Integer cusId);

    List<CartDTO> selectShoppingCartsByIds(List<Integer > ids);

    Integer selectCartByCusIdAndProductId(@Param("cusId") Integer cusId,@Param("productId") Integer productId);

    //增加商品数量
    void updateCart(@Param("customerId")Integer customerId,@Param("quantity")Integer quantity, @Param("productId")Integer productId);
    void deleteCartById(@Param("cartId") Integer cartId);

    Integer getChosenProducts(@Param("customerId")Integer customerId);//被选中的商品数量

}
