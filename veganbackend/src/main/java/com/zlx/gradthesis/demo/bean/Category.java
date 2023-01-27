package com.zlx.gradthesis.demo.bean;


import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Category {

    @Id
    private Integer id;

    private String name;//类别名称

    private Integer status;
}
