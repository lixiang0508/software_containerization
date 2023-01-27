package com.zlx.gradthesis.demo.utils;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageHelper<T> {
    //总记录数
    private Integer count;

    private Integer pageCount;//总页面数

    private List<T> list;//分页数据
}
