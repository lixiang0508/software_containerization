import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './styled'
import blogUrl from "../../statics/pics/vegan-blog-pic.webp"
import List from './components/List'
import Recommend from "./components/Recommend";
import Topic from "./components/Topic"
import axios from "axios";
import {connect} from "react-redux";

export default class BlogHome extends PureComponent {

     componentDidMount() {
         //向后端请求blogs数据 作者数据

     }

    render(){
        return (
            <div>
                <HomeWrapper>
                   <HomeLeft>
                       {/*    <img className="banner-img" src="../../statics/pics/article3.jpeg"/> */}
                       <img className="banner-img" src={blogUrl}/>
                       <Topic/>
                       <List/>
                   </HomeLeft>

                    <HomeRight>
                        <Recommend/>
                    </HomeRight>
                </HomeWrapper>
            </div>
        )
    }
}