package com.zlx.gradthesis.demo.bean;



import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class Blog {
    //博客类
    private Integer id;

    private Integer customerId;//作者id

    private String authorName;//作者名

    private String title;//标题

    private String describe;//概述

    private String text;//正文

    private String img;//图片
    private Integer likes;//点赞数
    private Integer hits;//阅读数

    private Integer comments;//评论数

    private String tag;//标签

    public Blog(Integer customerId, String authorName, String title, String desc, String text, String img, Integer like, Integer hits, Integer comments, String tag) {
        this.customerId = customerId;
        this.authorName = authorName;
        this.title = title;
        this.describe = desc;
        this.text = text;
        this.img = img;
        this.likes = like;
        this.hits = hits;
        this.comments = comments;
        this.tag = tag;
    }
}
