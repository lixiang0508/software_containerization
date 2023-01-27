package com.zlx.gradthesis.demo.config;

import com.zlx.gradthesis.demo.Interceptor.AdminInterceptor;
import com.zlx.gradthesis.demo.Interceptor.MyInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyConfig implements WebMvcConfigurer {

    @Bean
    MyInterceptor myInterceptor(){
        return new MyInterceptor();
    }

    @Bean
    AdminInterceptor adminInterceptor(){
        return new AdminInterceptor();
    }



    @Override         //添加 拦截器 登录判断
    public void addInterceptors(InterceptorRegistry registry) {


        registry.addInterceptor(myInterceptor()).addPathPatterns("/**")
                .excludePathPatterns("/auth/login","/auth/register","/product/**","/blog/all","/blog/author/*","/blogComment/check/**"
                        ,"/blog/get/*","/restaurant/**","/friend/**","/customer/all","/blogComment/all","/productcomment/**"
                );

        registry.addInterceptor(adminInterceptor()).addPathPatterns("/admin/**");



    }
}
