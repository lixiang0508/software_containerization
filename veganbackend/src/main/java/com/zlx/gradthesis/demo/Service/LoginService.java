package com.zlx.gradthesis.demo.Service;

import com.zlx.gradthesis.demo.Mapper.CustomerMapper;
import com.zlx.gradthesis.demo.bean.Customer;
import com.zlx.gradthesis.demo.exception.AuthException;
import com.zlx.gradthesis.demo.request.LoginRequest;
import com.zlx.gradthesis.demo.request.RegisterRequest;
import com.zlx.gradthesis.demo.utils.JWTUtils;
import com.zlx.gradthesis.demo.utils.JsonData;
import com.zlx.gradthesis.demo.utils.MD5Utils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
@Slf4j
public class LoginService {

    @Autowired
    CustomerMapper customerMapper;
    private boolean checkStr(String str) {
        if(str.length()==0 ||str.length()>20 )  return false;
        for(int i=0;i<str.length();i+=1){
            if(((int)str.charAt(i)>='a'&&(int)str.charAt(i)<='z') ||
                    ((int)str.charAt(i)>='A'&&(int)str.charAt(i)<='Z')||
                    ((int)str.charAt(i)>='0'&&(int)str.charAt(i)<='9')){
                continue;
            }  else{
                return false;
            }
        }

        return true;
    }
    public Customer login(LoginRequest loginRequest) throws AuthException {
        String username = loginRequest.getUserName();
        String phoneNumber = loginRequest.getPhoneNumber();
        Customer customer = customerMapper.findByPhoneNumber(phoneNumber);
        if(customer==null){
            customer=customerMapper.findByUserName(username);
        }
        String s = MD5Utils.md5(loginRequest.getPassword());
   //log.info(s);
        if(!s.equals(customer.getPwd())){
           throw new AuthException("用户名或者密码错误，请重新登录");
       }


        return customer;
    }

    public Customer register(RegisterRequest registerRequest) throws  AuthException{
        Customer newCus = new Customer();
        String userName = registerRequest.getUserName();
        String pwd = registerRequest.getPwd();
        String md5pwd = MD5Utils.md5(pwd);
        String email = registerRequest.getEmail();
        if(customerMapper.countUserName(userName)>0){
            throw new AuthException("用户名已经存在,请更换用户名");
        }

        if(customerMapper.countEmail(email)>0){
            throw new AuthException("邮箱已经存在,请更换邮箱");
        }
        if(!checkStr(userName) || !checkStr(pwd)){
            throw new AuthException("用户名和密码不符合规范");
        }

        BeanUtils.copyProperties(registerRequest,newCus);
        newCus.setCreateTime(new Date());
        newCus.setUpdateTime(new Date());
        newCus.setPwd(md5pwd);
        log.info("newly registered, vegan type  is{}",registerRequest.getVegType());
        customerMapper.addCustomer(newCus);



        return newCus;
    }

}
