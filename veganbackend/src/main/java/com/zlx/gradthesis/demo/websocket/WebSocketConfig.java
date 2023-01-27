package com.zlx.gradthesis.demo.websocket;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

@Configuration
public class WebSocketConfig {

    @Bean
    public ServerEndpointExporter getServerEndPointExporter(){
        return new ServerEndpointExporter();
    }
}
