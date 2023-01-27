import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow:hidden;
  width: 820px;
 
  margin:0 auto;
  padding-botttom: 100px;
 
  `
export const Header =styled.div`
  margin: 50px auto;
  padding-left:60px;
  line-height: 44px;
  font-size: 34px;
  color:forestgreen;
  font-weight:bold;
`;

export const Content = styled.div`
  color: darkseagreen;
  
  img{
    display:block;
    width:80%;
    margin: 0 auto;
    height:350px;
  }
  p{
    margin:25px 0;
    font-size: 16px;
    line-height:30px;
  }
  b{
    font-weight:bold;
  }
   
  `
export const Text = styled.div`
  p{
    margin:25px 0;
    font-size: 16px;
    line-height:30px;
  }
  b{
    font-weight:bold;
  }
  `
//评论区
export const CommentWrapper = styled.div`
  //background-color:lightcyan;
  margin-top: 20px;
  min-height: 150px;
  padding:20px 20px 10px 20px;
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

//评论列表
export const CommentList = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  border: 2px solid darkseagreen;
  p{
    font-size: 22px;
    color:darkseagreen;
    margin: 10px 10px;
  }
  span{
    font-size: 14px;
    
  }
 `

//评论项目
export const CommentItem = styled.div`
  height: 120px;
  width: 100%;
  background-color: aliceblue;
  margin:10px auto;
  `
//评论人
export const Commenter = styled.div`
  line-height: 30px;
  border-bottom: 2px solid white;
  width:100%;
  margin:5px 10px;
  color:darkseagreen;
  
  
  `
export const CommentContent = styled.div`
  width:100%;
  color:darkseagreen;
  margin:15px 20px;
  
   `;

