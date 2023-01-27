package com.zlx.gradthesis.demo.handler;


import com.zlx.gradthesis.demo.exception.AuthException;
import com.zlx.gradthesis.demo.utils.JsonData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@ResponseBody
@ControllerAdvice
public class MyHandler {

    @ExceptionHandler(value=Exception.class)
    public JsonData handlerException(Exception e, HttpServletRequest request){
        log.info(e.getMessage());
        return JsonData.buildError("不好！出异常了"+e.getMessage(),-2) ;

    }

    @ExceptionHandler(value= AuthException.class)
    public JsonData handlerException1(AuthException e, HttpServletRequest request){

        return JsonData.buildError(e.getMessage() ,-2) ;

    }

}
