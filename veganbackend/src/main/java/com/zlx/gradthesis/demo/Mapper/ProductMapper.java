package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.bean.Product;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProductMapper {

    List<ProductDTO> selectAllProducts();//查找所有的商品详情

    List<ProductDTO> selectRecommendProduct();//根据销量查找前十名商品

    List<ProductDTO>  selectRecommendProductByCategory(@Param("categoryId") Integer categoryId);//分类查找销量领先的商品

    List<ProductDTO> selectAllProductsByCategory(@Param("categoryId") Integer categoryId);

    ProductDTO selectProductById(@Param("productId")Integer productId);//根据id 查找商品详情

    void changeStock(@Param("id")Integer id, @Param("stock")Integer stock);// 根据id 修改库存

    void setSoldNumber(@Param("id")Integer id,@Param("soldNumber")Integer soldNumber);


    List<ProductDTO> searchProductByName(@Param("name") String name,@Param("start")Integer start,@Param("limit")Integer limit);

    List<ProductDTO> searchAllProductByName(@Param("name") String name);



}
