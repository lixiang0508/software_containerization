package com.zlx.gradthesis.demo.exception;

import lombok.Data;

@Data
public class AuthException extends BaseException{
    protected Integer code = 403;
    public AuthException(String msg, String data){

        this.msg = msg;
        this.data = data;
    }
    public AuthException(String msg){
        this.msg = msg;
    }

}
