package com.zlx.gradthesis.demo.Mapper;

import com.zlx.gradthesis.demo.bean.Customer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CustomerMapper {
    //根据id 找到customer
    Customer findById(@Param("id")Integer id);
    Customer findByUserName(@Param("userName") String userName);
    Customer findByPhoneNumber(@Param("phoneNumber") String phoneNumber);
    int countUserName(@Param("userName")String userName); //指定用户名有多少数据
    void addCustomer(Customer customer);

    Integer countEmail(@Param("email")String email);
    void updateCustomer(@Param("customer")Customer customer);

    void deleteCustomer(@Param("cusId")Integer cusId);

    List<Customer> getAllCus();
}
