package com.zlx.gradthesis.demo.Controller;

import com.zlx.gradthesis.demo.DTO.ProductDTO;
import com.zlx.gradthesis.demo.Service.ProductService;
import com.zlx.gradthesis.demo.bean.ProductImg;
import com.zlx.gradthesis.demo.utils.JsonData;
import com.zlx.gradthesis.demo.utils.PageHelper;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    @Autowired
    ProductService productService;

    //获取商品所有的对应图片
     @GetMapping("/imgs/{productId}")
     public JsonData getImages(@PathVariable("productId") Integer productId){
         List<ProductImg> productImgs = productService.selectProductImgsById(productId);
         return JsonData.buildSuccess(productImgs);
     }

    //获取全部商品
    @GetMapping("/all")
    public JsonData getAllProducts(){
        List<ProductDTO> allProducts = productService.getAllProducts();
        return JsonData.buildSuccess(allProducts);
    }


    @GetMapping("/recommend_list")
    public JsonData getRecommend(){
        List<ProductDTO> recommendProducts = productService.getRecommendProducts();
        return  JsonData.buildSuccess(recommendProducts,"查找推荐商品成功");

    }
    //获取分类商品 推荐商品
    @GetMapping("/recommend_list/{id}")
    public JsonData getRecommendBycategory(@PathVariable Integer id){
        List<ProductDTO> recommendProductsByCategory = productService.getRecommendProductsByCategory(id);
        return JsonData.buildSuccess(recommendProductsByCategory,"查找分类推荐商品成功");

    }

    @GetMapping("/allProducts")
    public JsonData getAllProductsById(@RequestParam("categoryId")Integer categoryId){
        List<ProductDTO> allProductsByCategory = productService.getAllProductsByCategory(categoryId);

        return JsonData.buildSuccess(allProductsByCategory,"查找类别下所有商品成功");
    }
    @GetMapping("/{id}")
    public JsonData selectProductById(@PathVariable("id")Integer id){
        ProductDTO productDTO = productService.selectProductById(id);
        return JsonData.buildSuccess(productDTO);

    }

    //根据商品名称模糊查找
    @GetMapping("/listByKw/{name}")
    public JsonData selectByProName(@PathVariable("name")String name ,Integer pageNum,Integer limit){

        PageHelper<ProductDTO> productDTOPageHelper = productService.selectProductByName(name, pageNum, limit);

        return JsonData.buildSuccess(productDTOPageHelper,"模糊查找成功");

    }

}
