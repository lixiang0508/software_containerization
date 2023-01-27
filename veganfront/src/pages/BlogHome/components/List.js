import React,{PureComponent} from 'react';
import {ListItem,ListInfo,ListItemBottom} from '../styled'
import blogUrl from "../../../statics/pics/article3.jpeg"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHomeInfo} from "../../../redux/actions/BlogHome"
import axios from "axios";

//import 'antd/dist/antd.css';
import{ LikeOutlined,ReadOutlined,CommentOutlined } from '@ant-design/icons';
import {PATH} from "../../../redux/constant";
 export default class List extends PureComponent {
    state={blogList:[]}
    componentDidMount() {

        axios.get(PATH+`blog/all`).then(
            res => {
                console.log(res.data);
                const resp= res.data.data;
                this.setState({blogList:resp})

            },
            error=>{
                console.log(error);
            }
        );


    }

     render(){
        //const {articleList} = this.props;
         const {blogList} =this.state;
         const baseUrl= '../../../images/'
        return (
            <div>

                {
                   blogList.map( (item)=>{
                       return (
                           <Link key={item.id} to={'/blogDetail/' + item.id}>
                       <ListItem >
                           <img className="list-pic" src={`${baseUrl}${item.img}`} />
                           <ListInfo>
                               <h3 className="title">{item.title}</h3>
                               <br/>
                               <p className="desc">{item.describe}</p>
                           </ListInfo>
                           <ListItemBottom>
                               <span>Author:&nbsp;{item.authorName}&nbsp;</span>
                               <LikeOutlined /> <span>{item.likes}&nbsp;</span>
                               <ReadOutlined/><span>{item.hits}&nbsp;</span>
                               <CommentOutlined /> <span>{item.comments}&nbsp;</span>
                           </ListItemBottom>

                       </ListItem>
                           </Link>)

                       }
                       )
                }







            </div>
        )
    }
}


/*
const mapState = (state)=>(
    {
        articleList:state.getIn(['blogHome','articleList'])
    }
)

const mapDispatch=(dispatch)=>({
    changeBlogHomeData(){
        dispatch(getHomeInfo);
    }
})

export default connect(mapState,mapDispatch)(List)

 */