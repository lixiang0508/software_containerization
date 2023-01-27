package com.zlx.gradthesis.demo.Mapper;

import com.zlx.gradthesis.demo.bean.ProductComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProductCommentMapper {


    //添加评价
    void addProductComment(@Param("productComment") ProductComment productComment);

    public List<ProductComment> getCommentByProductId(Integer productId);

    public List<ProductComment>  getCommentByProductIdPage(@Param("productId") Integer productId,@Param("start") Integer start, @Param("limit")Integer limit);

}
