import styled from 'styled-components';

export const BlogWriteWrapper = styled.div`
  background-color:#eee ;
  position: absolute;
  top:100px;
  z-index:0;
  bottom:0;
  left:0;
  right:0;
  margin-bottom: -200px;
  
  `
export const BlogWrapper = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  width: 900px;
  height: 600px;
  background-color: white;
  margin: 50px auto;
  p{
    font-size: 18px;
    margin: 10px 15px;
    font-weight: bold;
    color:darkseagreen
  }
  span{
    font-size: 18px;
    margin: 10px 15px;
    font-weight: bold;
    color:darkseagreen
    
  }
  
  `
export const Button = styled.button`
  background-color: darkseagreen;
  color:white;
  width: 100px;
  height: 60px;
  border-radius: 10px;
  float:right;
  margin-top: 100px;
  margin-right:400px;
  border: 1px solid rgba(0,0,0,0.2);
  
    `