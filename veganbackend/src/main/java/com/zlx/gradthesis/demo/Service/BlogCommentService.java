package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.BlogCommentMapper;
import com.zlx.gradthesis.demo.Mapper.BlogMapper;
import com.zlx.gradthesis.demo.bean.BlogComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BlogCommentService {

    @Autowired
    BlogCommentMapper blogCommentMapper;

    @Autowired
    BlogMapper blogMapper;


    //根据blogId 获取对应的全部评论
    public List<BlogComment>  getCommentsByBlogId(Integer blogId){
        return blogCommentMapper.getCommentsByBlogId(blogId);
    }

    //添加一条评论
    public void addBlogComment(BlogComment blogComment){
        blogCommentMapper.addComment(blogComment);

        //这一条blog对应的评论数自增
        Integer blogId = blogComment.getBlogId();
        blogMapper.updateComment(blogId);

    }

    //获取所有评论
    public List<BlogComment> getAllComments(){
        return blogCommentMapper.getAllComments();
    }
}


