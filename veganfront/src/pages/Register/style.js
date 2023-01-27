import styled from 'styled-components'

export const RegisterWrapper = styled.div`
  background-color:#eee ;
  position: absolute;
  top:100px;
  z-index:0;
  bottom:0;
  left:0;
  right:0;
  
  `

export const RegisterBox = styled.div`
  width: 400px;
  
  margin: 40px auto;
  background-color: #fff;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  padding-top: 10px;
  display:flex;
  overflow: hidden;
  flex-direction: column;
  
`
export const Pic = styled.div`

  background: url(${`../../../images/login-pic.png`});
  //background-color: orange;
  width:100%;
  height:150px;
  display:block;
  margin:0 82px;
  
`


export const Input = styled.input`
  color:#777 ;
  display:block;
  width:200px;
  
  line-height:22px;
  padding:0 15px;
  margin:8px 15px;
  
  `
export const InputWrapper= styled.div` 
  text-align:center;
  overflow:hidden;
  span{
    float:left;
    color:darkseagreen;
    
    margin-left:15px;
    margin-top:21px;
    font-size: 14px;
    margin-right:5px;
    
  }
  input{
    float:left;
    margin-top:15px;
  }
  .radiospan{
    float:left;
    margin-top:15px;
  }
  select{
    float:left;
    margin-top:10px;
    margin-left: 10px;
    color:darkseagreen;
  }
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

