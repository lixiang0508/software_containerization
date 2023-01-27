package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.bean.ProductImg;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProductImgMapper {
    public List<ProductImg> selectProductImgByProductId(@Param("productId")int productId);
}
