import React,{PureComponent} from 'react';
import {BlogManageWrapper,BlogList,BlogItem} from "./style"
import {Title} from "../Address/style";
import axios from "axios";
import {PATH} from "../../../../redux/constant";
class BlogManage extends PureComponent{

    state={blogList:[]}
    componentDidMount() {
        axios.get(PATH+`getBlogs`,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res=>{
                if(res.data.err!==0){
                    console.log(res.data)
                    console.log('获取blogList失败')
                }else{
                   // console.log('地址列表是',res.data.data)
                    this.setState({blogList:res.data.data})
                }
            }
        )

    }

    render(){
        return(
            <BlogManageWrapper>
                <Title>
                    Blog Management
                </Title>

                <BlogList>


                    {
                        this.state.blogList.map(
                            (item)=>{
                                return (
                                    <BlogItem key={item.id}>
                                        <span className="blogTitle">Title:&nbsp;{item.title}</span>
                                        <span className="blogDesc">Desc:&nbsp;{item.describe}</span>
                                        <button>Delete</button>


                                    </BlogItem>

                                )
                            }
                        )
                    }
                    <BlogItem>
                        <span className="blogTitle">Title:&nbsp; My experience of going vegan</span>
                        <span className="blogDesc">Desc:&nbsp; How to change  from omnivorous to vegan</span>
                        <button>Delete</button>


                    </BlogItem>

                </BlogList>

            </BlogManageWrapper>

        )

    }
}

export default BlogManage