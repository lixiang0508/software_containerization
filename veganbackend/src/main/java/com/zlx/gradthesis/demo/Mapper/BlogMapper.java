package com.zlx.gradthesis.demo.Mapper;


import com.zlx.gradthesis.demo.bean.Blog;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BlogMapper {

    public List<Blog> getAllBlogs();

    public   void  addBlog(@Param("blog") Blog blog);

    //根据id查找博客
    public Blog getBlogById(@Param("id") Integer id);

     //查找某个作者的博客
    public List<Blog> getBlogByAuthor(@Param("authorId")Integer authorId);

    //评论自增1
    public void updateComment(@Param("id") Integer id);

    public void deleteById(@Param("id") Integer id);

}
