package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.ProductCommentMapper;
import com.zlx.gradthesis.demo.bean.ProductComment;
import com.zlx.gradthesis.demo.utils.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductCommentService {

    @Autowired
    ProductCommentMapper productCommentMapper;


    public List<ProductComment> getCommentsById(Integer id){
        return productCommentMapper.getCommentByProductId(id);
    }


    public void addComment(ProductComment productComment){
        productCommentMapper.addProductComment(productComment);
    }


    public PageHelper<ProductComment> getCommentByProduct(Integer productId,Integer pageNum){
        int count = productCommentMapper.getCommentByProductId(productId).size();//根据商品id 查找评论总数
        int limit=6;//假设每一页显示六条数据
        int pageCount= count%limit==0? count/limit:count/limit+1;//当前页数

        //查询当前页的数据

        int start=(pageNum-1)*limit;

        List<ProductComment> comments = productCommentMapper.getCommentByProductIdPage(productId, start, limit);

        return new PageHelper<ProductComment>(productId,pageCount,comments);
    }
}
