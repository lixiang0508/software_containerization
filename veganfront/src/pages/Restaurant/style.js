import styled from "styled-components";

export const RestaurantWrapper = styled.div`
  margin: 20px auto;
  width: 1300px;
`
export const NavWrapper = styled. div`
    width:100%;
  height: 60px;
  line-height: 60px;
  background-color: lightseagreen;
  border: 1px solid lightseagreen;
  border-radius: 5px 5px 0 0;
  display:flex;
  padding-right:50px;
  span{
    font-size: 20px;
    text-align: center;
    color:white;
    margin-left:18px;
  }
  input{
    height: 22px;
    width: 80px;
    margin:15px auto;
    
  }
  button{
    line-height:30px;
    height:30px;
    margin-top: 12px;
   
    color:lightseagreen;
    border: 1px solid lightseagreen;
    margin-left:-300px;
    display:block;
    background-color: white;
    border-radius: 6px;
  
   
  }`;
  export const CafesWrapper = styled.div
    `
      width: 100%;
      margin-top:30px;
      padding-left:20px;
      
    `
  ;
  export const Cafe = styled.div`
    float:left;
    width:310px;
    //height: 400px;
    img{
      width:300px;
      height:270px;
    }
    margin: 20px;
    margin-left:50px;
  `;
  export const CafeName = styled.div`
    font-size:25px;
  font-weight:bolder;
    margin:10px 0;
    color:darkseagreen;
  `
  export const CafeInfo= styled.div`
    margin-top: 10px;
    
    `;
export const CafeCity= styled.div`
  float:left;
  font-size:22px;
  color:darkseagreen;
  
  `;

export const CafeScore= styled.div`
  float:right;
  font-size:20px;
  color:darkseagreen;
  
  `;

export const CafeAddress = styled.div`
 
  margin-top:50px;
  font-size:18px;
  color:darkseagreen;
  margin-bottom: 10px;
  font-weight: 200;
  height:32px;
  
  `;

export const CafePrice = styled.div`
  color:darkseagreen;
  
  `;