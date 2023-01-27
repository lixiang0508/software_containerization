import styled from 'styled-components'


export const LoginWrapper = styled.div`
  background-color:#eee ;
  position: absolute;
  top:100px;
  z-index:0;
  bottom:0;
  left:0;
  right:0;
  
  `
export const InputWrapper= styled.div` 
  text-align:center;
  overflow:hidden;
  span{
    float:left;
    color:darkseagreen;
    
    margin-left:15px;
    margin-top:21px;
    font-size: 20px;
    margin-right:5px;
    
  }
`
export const LoginBox = styled.div`
  width: 400px;
  height: 500px;
  margin: 40px auto;
  background-color: #fff;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  padding-top: 10px;
  &.govegan{
    width:90%;
    height:90px;
    display:block;
    //margin:0 auto;
    margin-left:auto;
    
  }
  
  
  `



export const Input = styled.input`
  color:#777 ;
  display:block;
  width:200px;
  height:30px;
  line-height:30px;
  padding:0 15px;
  margin:20px 15px;
  
  `
export const Button =styled.button`
  width: 220px;
  height:30px;
  line-height:30px;
  color:#fff;
  background-color: darkseagreen;
  border-radius:15px;
  border:1px solid darkseagreen;
  margin:10px 80px;
  text-align: center;
  `