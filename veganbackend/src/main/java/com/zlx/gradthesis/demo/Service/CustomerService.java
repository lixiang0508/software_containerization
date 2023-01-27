package com.zlx.gradthesis.demo.Service;


import com.zlx.gradthesis.demo.Mapper.CustomerMapper;
import com.zlx.gradthesis.demo.bean.Customer;
import com.zlx.gradthesis.demo.exception.AuthException;
import com.zlx.gradthesis.demo.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerService {

    @Autowired
    CustomerMapper customerMapper;

    public Customer findById(Integer id){
        return customerMapper.findById(id);
    }

    public void updateCustomer(Customer customer){
        customerMapper.updateCustomer(customer);
    }

    public void deleteCustomer(Integer cusId){
        customerMapper.deleteCustomer(cusId);
    }

    public List<Customer> getAllCus(){

        return customerMapper.getAllCus();

    }

}
