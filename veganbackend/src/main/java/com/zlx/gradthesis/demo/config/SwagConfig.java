package com.zlx.gradthesis.demo.config;


import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@ConditionalOnExpression("${swagger.enable}") //开启访问接口文档的权限
public class SwagConfig {
    //Swagger 会帮助我们生成接口文档
    //1 配置生成的文档信息
    //2 配置生成规则

    //Swagger 封装文档接口信息

    @Bean
    public Docket getDocket(){

        //标题 版本 作者
        ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder();
        ApiInfoBuilder description = apiInfoBuilder.title("Back-end interface description of my grad design").
                description("This chart describes back-end interfaces of my vegan project").version("1.0.0").contact(new Contact("Lixiang Zhang","www.veganhope.club","zlx980508@sina.com"));
        ApiInfo apiInfo =apiInfoBuilder.build();


        Docket docket = new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo).select().apis(RequestHandlerSelectors.basePackage("com.zlx.gradthesis.demo.Controller")).paths(PathSelectors.any()).build();
                //文档风格
        return docket;
    }

}
