package com.zlx.gradthesis.demo.websocket;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

import javax.websocket.OnClose;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;

@Component
@ServerEndpoint("/webSocket/{orderId}")
public class WebSocketServer {

    private static ConcurrentHashMap<Integer,Session> sessionMap = new ConcurrentHashMap<>();

    //前端发送请求建立websocket链接 就会执行这个方法
    @OnOpen
    public void open(@PathParam("orderId") String orderId, Session session){

       sessionMap.put(Integer.parseInt(orderId), session);
    }

    //前端关闭页面或者主动关闭websocket链接 都会执行onclose

    @OnClose
    public void close(@PathParam("orderId") String orderId){
        sessionMap.remove(Integer.parseInt(orderId));
    }

    public static void sendMsg(Integer orderId,String msg){
        Session session = sessionMap.get(orderId);
        try {
            session.getBasicRemote().sendText(msg);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
