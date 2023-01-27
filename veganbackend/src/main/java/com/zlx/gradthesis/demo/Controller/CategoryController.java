package com.zlx.gradthesis.demo.Controller;


import com.zlx.gradthesis.demo.Service.CategoryService;
import com.zlx.gradthesis.demo.bean.Category;
import com.zlx.gradthesis.demo.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService  categoryService;


    //查找给定id 的category
    @GetMapping("/get")
    public JsonData getCategory(Integer id){
        Category category = categoryService.selectById(id);
        return JsonData.buildSuccess(category,"查找成功");

    }

}
