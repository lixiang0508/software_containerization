package com.zlx.gradthesis.demo.Mapper;

import com.zlx.gradthesis.demo.bean.BlogComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BlogCommentMapper {


    public List<BlogComment> getCommentsByBlogId(@Param("blogId")Integer blogId);

    public void addComment(@Param("blogComment") BlogComment blogComment);

    public List<BlogComment> getAllComments();
}
