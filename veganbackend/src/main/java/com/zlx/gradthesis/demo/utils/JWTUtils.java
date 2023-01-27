package com.zlx.gradthesis.demo.utils;


import com.zlx.gradthesis.demo.bean.Customer;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

/**
 * @author zlx
 * @create 2021-11-20 3:14 下午
 */
public class JWTUtils {

    //过期时间  1 week
    private static final long EXPIRE= 6000*60*24*7; //过期时间
    private static final String SECRET="woxingwosusuyuanyisheng" ;//秘钥
    //秘钥  是"我行我素素愿一生"的汉语拼音
    private static final String TOKEN_PREFIX="veganhope" ; //前缀
    private static final String SUBJECT="lixiangzhang" ;//主题 就是谁颁布的

    //根据staff 信息生成令牌
    public static String geneJsonWebToken(Customer customer) {
        String token = Jwts.builder().setSubject(SUBJECT).claim("userName", customer.getUserName()).claim("customerId", customer.getId())
                .setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + 24*60*60*1000)).
                        signWith(SignatureAlgorithm.HS256, SECRET).compact();
          token= TOKEN_PREFIX+token;

        return token ;
    }

    //校验token的方法
    public static Claims checkJWT(String token){
        try{
            final Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX,"")).getBody();
            return claims;
        }catch (Exception e){
            return null;
        }
    }
}
