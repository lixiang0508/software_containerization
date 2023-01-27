package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.BlogMapper;
import com.zlx.gradthesis.demo.bean.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    BlogMapper blogMapper;

    //获取所有博客
    public List<Blog> getAllBlogs() {
        return blogMapper.getAllBlogs();

    }

    public void deleteById(Integer id){
        blogMapper.deleteById(id);
    }

    //添加一条博客
    public void insertBlog(Blog blog) {
        blogMapper.addBlog(blog);
    }

    //根据博客id查找blog
    public Blog selectBlogById(Integer id) {
        return blogMapper.getBlogById(id);
    }

    //查找一个作者的全部blog
    public List<Blog> selectByAuthor(Integer id){
        return blogMapper.getBlogByAuthor(id);
    }
}
