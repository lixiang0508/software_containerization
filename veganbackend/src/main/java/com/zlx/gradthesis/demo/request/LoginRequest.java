package com.zlx.gradthesis.demo.request;

//import com.sun.istack.internal.NotNull;
import lombok.Data;

@Data
public class LoginRequest {


    private String userName;
    //@NotNull
    private String password;
    //@NotNull
    private String phoneNumber;

}
