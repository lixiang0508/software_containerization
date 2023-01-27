import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {Container,Banners,Detail,ProductInfo,AddToCart,ProductCommentWrapper,Title} from "./style";
import SwipePlayer from "./SwipePlayer";
import axios from "axios";
import qs from "qs";
import {
    CommentBody,
    CommentContent,
    Commenter,
    CommentFooter,
    CommentItem, CommentList,
    CommentTitle,
    CommentWrapper
} from "../BlogDetail/style";
import {PATH} from "../../redux/constant";
class ProductDetail extends PureComponent{
state={images:{},product:{},comments:[]}

    componentDidMount() {
        const productId=this.props.match.params.id;
        //找到对应的产品 图片
        this.getData(productId)
    }
    getData(id){
    //查找商品
    axios.get(PATH+`product/`+id).then(
        res=>{
            //console.log('product数据是',res.data)
            if(res.data.err!==0){
                console.log('请求商品详情失败')
            }else{
               let product= res.data.data;
               this.setState({product:product})

            }
        }
    )
        axios.get(PATH+`productcomment/`+id).then(
            res=>{
                if(res.data.err!==0){
                    console.log('请求商品详情评论失败')
                }else{
                    let comments= res.data.data;
                    this.setState({comments:comments})

                }

            }
        )
  //查找全部图片
  axios.get(PATH+`product/imgs/`+id).then(
      res=>{
         // console.log('imgs数据是',res.data.data)
          if(res.data.err!==0){
              console.log('请求商品imgs详情失败')
          }else{
              let images= res.data.data;
              this.setState({images:images})

          }
      }

  )

    }

    //发表评论
    publishComment=(id,text)=>{

    axios.post(`http://localhost:8085/addproductComment`, {
            headers: {
                'token': localStorage.getItem('user_token')
            }, productId: id, comment: text
        }).then(
            res => {
                if (res.data.err !== 0) {
                    alert('Add comment failed')
                } else {
                    alert('Add comment success')
                }
             }
        )

    }
    //加入购物车
    addToCart =(id,amount)=>{
    /*
        let para = {
            productId:id,
            quantity:amount
        };
        let pa = qs.stringify(para);

     */
        axios.get(`http://localhost:8085/cart/add?productId=`+id+`&quantity=`+amount,{
        headers:{
            'token':localStorage.getItem('user_token')
        },
            productId:id,
            quantity:amount



    }).then(
        res=>{
            console.log('productId= ',id,'quantity= ',amount)
            console.log('加入购物车返回数据',res)
            if(res.data.err!==0){
                alert(`Fail to add to cart`)
            }else{
                alert('Successfully add to cart!')
            }
        }
    )
    }

    render(){

    const {product,images,comments} =this.state
        //console.log('images: ',images)
        let imagArr =[];
    for(var i=0;i< images.length;i++){
        console.log(images[i])
        imagArr.push(`../../../images/products/`+images[i].src)
    }
    //console.log('imagArr:',imagArr)
 const proId= product.id;

        return(
            <div>
            <Container>
                <Banners>
                    <SwipePlayer images={imagArr}></SwipePlayer>
                </Banners>

                <Detail>
                    <h1>{product.name}</h1>
                    <p>{product.subtitle}</p>
                    <h2>Price:${product.price} <span>Sold:{product.soldNumber}</span></h2>

                    <ProductInfo>
                        <p>{product.detail}</p>

                    </ProductInfo>

                    <input type="number" defaultValue="1" ref={input => {this.purchaseAmount=input}}/>
                    <AddToCart onClick={()=>this.addToCart(proId,this.purchaseAmount.value)}>
                     Add to cart
                    </AddToCart>

                </Detail>
            </Container>
               <ProductCommentWrapper>

                   <CommentBody>
                       <textarea cols="50" rows="10" placeholder="Leave your comment!" ref={input => {this.commentText=input}}></textarea>
                       <button onClick={()=>this.publishComment(this.props.match.params.id,this.commentText.value)}>Publish comment</button>
                   </CommentBody>


               </ProductCommentWrapper>
                <CommentList>
                    <p>Comments</p>
                    {
                        comments.map( (item)=>{
                                return (
                                    <CommentItem key={item.id}>
                                        <Commenter>
                                            {item.customerName} &nbsp;<span>{item.createTime.substr(0,10)}</span>
                                        </Commenter>
                                        <CommentContent>
                                            {item.comment}
                                        </CommentContent>

                                    </CommentItem>

                                )
                            }

                        )
                    }







                </CommentList>

            </div>



        )
    }
}

export default ProductDetail;