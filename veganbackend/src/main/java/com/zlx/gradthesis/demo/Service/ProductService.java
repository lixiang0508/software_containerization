package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.Mapper.ProductImgMapper;
import com.zlx.gradthesis.demo.Mapper.ProductMapper;
import com.zlx.gradthesis.demo.bean.ProductImg;
import com.zlx.gradthesis.demo.utils.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    ProductMapper productMapper;

    @Autowired
    ProductImgMapper productImgMapper;

    //获取所有商品
    public List<ProductDTO> getAllProducts(){
        return productMapper.selectAllProducts();
    }


    //首页推荐商品
    public List<ProductDTO> getRecommendProducts(){
        return productMapper.selectRecommendProduct();
    }
    //分类别推荐商品
    public List<ProductDTO> getRecommendProductsByCategory(Integer categoryId){
        return productMapper.selectRecommendProductByCategory(categoryId);
    }
    //获取类别下所有商品
    public List<ProductDTO> getAllProductsByCategory(Integer categoryId){
        return productMapper.selectAllProductsByCategory(categoryId);
    }
    //根据商品id  查找商品详情
    public ProductDTO  selectProductById(Integer productId){
        return productMapper.selectProductById(productId);
    }

   //搜索 根据输入模糊查询商品
    //第几页 每页显示几个
    public PageHelper<ProductDTO> selectProductByName(String name,Integer pageNum,Integer limit){
        int start=(pageNum-1)*limit;
        List<ProductDTO> productDTOS = productMapper.searchProductByName(name, start, limit);
        int count= productMapper.searchAllProductByName(name).size();
        int pageCount= count%limit==0? count/limit:count/limit+1;//当前页数
        PageHelper<ProductDTO> productDTOPageHelper = new PageHelper<>(count, pageCount, productDTOS);
        return productDTOPageHelper;



    }

    public List<ProductImg> selectProductImgsById(Integer id){
        return productImgMapper.selectProductImgByProductId(id);
    }

}
