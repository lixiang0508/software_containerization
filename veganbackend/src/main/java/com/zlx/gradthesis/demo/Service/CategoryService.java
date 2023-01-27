package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.CategoryMapper;
import com.zlx.gradthesis.demo.bean.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryMapper categoryMapper;

    //列出所有的categories

    public List<Category> getAllCategories(){

        return categoryMapper.getAllCategories();

    }

    //根据id查找Category
    public Category selectById(Integer id){
        return categoryMapper.selectCatById(id);
    }
}
