import styled from "styled-components";
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position:relative;
  height:90px;
  z-index:1000;
  border-bottom: 1px solid #f0f0f0;
  
  `

//logo
export const Logo = styled.div`
  position:absolute;
  top:-20px;
   
  left:40px;
  width:125px;
  display:block;
  height:120%;
  
  background:url(${logoPic});
  background-size: contain;
 
  `
//鼠标在logo上悬浮 会出现具体的导航信息
export const SearchInfo=styled.div`
  //display:none;
  position:absolute;
  left:0;
  top:91px;
  width:1110px;
  padding:0 20px;
  height:150px;
  //background:greenyellow;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  &.logonotfocused{
    display:none;
  }
`
export const Nav =styled.div` 
  width:900px;
  margin:0 0 0 200px;
  height:100%;
 
  `
export const NavItem = styled.div`
  line-height:90px;
  padding: 0 15px;
  font-size: 17px;
  display:block;
  color: darkseagreen;
  text-decoration: none;
  &.left{
    float:left;
  }
  &.right{
    float:right;
  }
  &.active{
    color:limegreen;
  }
  `
export const NavSearch = styled.input.attrs(
    {placeholder:'Search'}
)` 
  width: 120px;
  height: 38px;
  border-radius:19px;
 background: #eee;
  margin-top: 22px;
  padding:0 30px;
  font-size: 16px;
  transition-duration: 1.5s;
  &::placeholder {
    color:darkseagreen;
  }
  &.focused{
    width:180px;
    background: lightcyan;
  }
  
`
export const Addition = styled.div`
  position:absolute;
  right:30px;
  top:0;
  line-height: 66px;
`
export const Button = styled. div`
  float:right ;
  line-height:38px;
  border-radius: 19px;
  margin-top:24px;
  border: 1px solid darkseagreen;
  margin-right:10px;
  padding:0 20px;
  color: darkseagreen;
`

