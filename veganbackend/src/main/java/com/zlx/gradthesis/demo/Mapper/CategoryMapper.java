package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.bean.Category;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CategoryMapper {

    List<Category> getAllCategories();
    Category selectCatById(@Param("id")Integer id);
}
