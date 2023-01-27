package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.DTO.CartDTO;
import com.zlx.gradthesis.demo.Service.CartService;
import com.zlx.gradthesis.demo.request.AddCartRequest;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.spring.web.json.Json;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {


    @Autowired
    CartService cartService;

    @GetMapping("/add")
    public JsonData addCart( @RequestParam("productId")Integer productId,@RequestParam("quantity") Integer quantity, HttpServletRequest request){
        Integer customer_Id = (Integer)request.getAttribute("customerId");
        //Integer customerId = Integer.parseInt(customer_Id);
        cartService.addCart(productId,quantity,customer_Id);
        return JsonData.buildSuccess("添加成功","添加成功");
    }

   @GetMapping("/changeCount")
    public JsonData changeCount(@RequestParam("cartId") Integer cartId, Integer quantity,HttpServletRequest request){
       Integer customer_Id = (Integer)request.getAttribute("customerId");
       //Integer customerId = Integer.parseInt(customer_Id);
        cartService.changeCount(customer_Id,cartId, quantity);

       return JsonData.buildSuccess("修改数量成功");
   }
   @GetMapping("/changeSelectStatus")
    public JsonData changeSelectStatus(@RequestParam("cartId")Integer cartId,HttpServletRequest request){

        cartService.changeStatus(cartId);
       return JsonData.buildSuccess1("修改状态成功");
   }

   @GetMapping("/chosen")
   public JsonData getChosenProducts(HttpServletRequest request){
       Integer cusId = (Integer) request.getAttribute("customerId");
       if(cusId==null) return JsonData.buildError("请登录");
       Integer chosenProducts = cartService.getChosenProducts(cusId);
       return JsonData.buildSuccess(chosenProducts,"查找选中商品数量成功");


   }

   @GetMapping("/totalPrice")
   public JsonData getTotalPrice(HttpServletRequest request){
       Integer cusId = (Integer) request.getAttribute("customerId");
       if(cusId==null) return JsonData.buildError("请登录");
       Double totalPrice = cartService.getTotalPrice(cusId);
       return JsonData.buildSuccess(totalPrice,"查找购物车总价格成功");


   }

   @GetMapping("/selectCart")
    public JsonData selectCart(HttpServletRequest request){
        Integer cusId = (Integer) request.getAttribute("customerId");
        if(cusId==null) return JsonData.buildError("请登录");
       System.out.println("customerId"+cusId);
       List<CartDTO> cartDTOS = cartService.selectCartByCusId(cusId);
       return JsonData.buildSuccess(cartDTOS,"查找购物车列表成功");

   }

   @DeleteMapping("/delete")
    public JsonData deleteCart(HttpServletRequest request,@RequestParam("productId") Integer productId){
       Integer cusId = (Integer) request.getAttribute("customerId");
       if(cusId==null) return JsonData.buildError("请登录");
       cartService.deleteCart(cusId,productId);
       return JsonData.buildSuccess(null,"删除购物车成功");


   }
    //根据cart id数组集合查找carts
   @GetMapping("/findByids")
    public JsonData selectShoppingCartsByIds(String ids){
        // ids 是"1，2，3"
       String[] cartIds = ids.split(",");
       List<Integer> idList = new ArrayList<>();
       for(String s:cartIds){
           idList.add(Integer.parseInt(s));
       }
       List<CartDTO> cartDTOS = cartService.selectShoppingCartsByIds(idList);
       return JsonData.buildSuccess(cartDTOS,"查找Carts成功");



       //根据cart id数组集合查找carts
   /* Service里是
   public List<CartDTO> selectShoppingCartsByIds(List<Integer> ids){
       return  cartMapper.selectShoppingCartsByIds(ids);

       */

   }

}
