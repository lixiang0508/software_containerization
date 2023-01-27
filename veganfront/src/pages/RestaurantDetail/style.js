import styled from "styled-components";
export const UpperWrapper= styled.div`
  width: 850px;
  margin: 10px auto;
  border:none;
  height: 420px;
  `
export const ContentWrapper = styled.div`
    width: 850px;
  margin: 10px auto;
  border:none;
  `

export const ImgWrapper= styled.div`
  float:left ;
  margin-right: 40px;
  img{
    width: 400px;
    height:400px;
  }
  border: 1px solid rgb(0,0,0,0.2)
  
  `

export const InfoWrapper = styled.div`
  float:right;
  width: 400px;
  height:420px;
  
  
    `
export const CafeName = styled.div`
    font-size:25px;
  font-weight:bolder;
    margin:10px 0;
    color:darkseagreen;
  float:left;
  `
export const CafeAddress = styled.div`
 
  margin-top:50px;
  font-size:20px;
  color:darkseagreen;
  margin-bottom: 20px;
  font-weight: 200;
  height:32px;
  
  `;

export const CafeScore= styled.div`
  margin-top:10px;
  float:right;
  font-size:20px;
  color:darkseagreen;
  
  `;

export const SmallBox = styled.div`
  margin-top:10px;
  width: 200px;
height:30px;
text-align: center;
background-color: darkseagreen;
  color:white;
  font-size: 20px;
  border:1px solid darkseagreen;
  border-radius: 4px;

`

export const CafeDesc = styled.div`
   font-size: 20px;
  line-height:26px;
  width:100%;
  margin-top:20px;
  color:darkseagreen;
  text-align: left;
  border-top: 1px solid darkgrey;
  padding-top: 5px;
  
  `
//评论部分
    //评论区
export const CommentWrapper = styled.div`
  //background-color:lightcyan;
  
  
  min-height: 150px;
  padding:10px 20px 10px 20px;
  border: 2px solid darkseagreen;
`
//评论标题
export const CommentTitle =styled.div`
  //background-color:#bfa;
  margin-bottom:10px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  
  
  span{
    color:darkseagreen;
    margin-top: 20px;
  }
`

//评论body
export const CommentBody = styled.div`
 // background-color: blue;
  width:calc(100%- 40px);
  position: relative;
  padding: 20px;
  border-radius: 5px;
  textarea{
    width:100%;
    height:100%;
    background-color: transparent;

    border-bottom: 1px solid darkseagreen;
    resize:none;
   
  }
  button{
    
    position: absolute;
    width:100px;
    height:40px;
    border-radius: 10px;
    background-color: darkseagreen;
    color:white;
    cursor:pointer;
  bottom: 30px;
    right:30px;
    border:none;
    
  }
`
export const CommentFooter = styled.div`
  //background-color: aliceblue;
  font-size: 14px;
  margin-top:10px;
  padding-left: 10px;
  span{
    color:darkseagreen;
  }
  p{
    color:darkseagreen;
  }
  `

export const Score =styled. div`
  margin-bottom: 20px ;
  span{
    color:darkseagreen;
    font-size:18px;
  }
  input{
    width: 60px;
  }
  `