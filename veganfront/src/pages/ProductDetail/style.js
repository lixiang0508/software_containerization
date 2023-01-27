import styled from 'styled-components'
export const Container = styled.div`
  margin: 20px auto;
  width: 1226px;
  `;
//轮播图部分
export const Banners = styled.div`
  width: 540px;
  height: 600px;
  margin-right: 30px;
  float:left;
  //background-color: orange;
  
  `;
export const Detail = styled.div`
  padding: 10px;
  float:right;
  width: 600px;
  border: 1px solid green;
  h1{
    
    font-size:27px;
    margin-bottom: 30px;
  }
  p{
    font-size:20px;
    color:lightseagreen;
    margin-bottom: 30px;
  }
  h2{
    color:green;
    font-size: 20px;
    border-bottom: 1px solid grey;
    height:50px;
    line-height: 50px;
    margin-bottom: 30px;
  }
  span{
    margin-left:150px;
    color:gray;
    font-size:16px;
    
  }
  input{
  margin-left:400px;
    margin-top:5px;
    width: 60px;
    
  }
  `;
export const ProductInfo = styled.div`
  p{
    font-size:20px;
    color:darkseagreen;
  }
  border-bottom: 1px solid grey;
  
  `;
export const AddToCart = styled.button`
  background-color: darkseagreen;
  float:right;
  width: 100px;
  height: 40px;
  color:white;
  border: 1px solid white;
  border-radius: 6px;
  input{
    width: 10px;
    margin-right: 30px;
  }
  `

  ;

export const  ProductCommentWrapper = styled.div`
  width: 1100px ;
  margin: 20px auto;
 
  
  
  `;
export const Title= styled.p`
  font-weight: bold;
  font-size:18px;
  color:darkseagreen;
  `;