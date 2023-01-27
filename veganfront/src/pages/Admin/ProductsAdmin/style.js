import styled from "styled-components";


export const Title = styled.div`
  margin: 30px auto;
  color: darkseagreen;
  font-size: 30px;
  // font-weight: bolder;
`
export const ProductsAdminMapper = styled.div`
    width: 1100px;
  margin: 0 auto;
  .subtitle{
    font-size: 26px;
    margin: 20px auto;
    color:darkseagreen;
     font-weight: bolder;
  }
  
    
`;

export const AddProduct = styled.div`
   border:1px solid greenyellow;
    width: 100%;
  margin: 20px auto;
   .cl{
      width: 160px;
   }
   .num{
      width: 25px;
   }
   span{
      text-align: center;
      color:darkseagreen;
      font-size: 24px;
      margin-left: 20px;
      margin-right: 20px;
   }

   input{
      margin-top:10px;

      height: 30px;
      width: 60px;

   }
   p{
    margin-top:20px;
      color:darkseagreen;
      font-size: 24px;
      margin-bottom:10px;
      //font-weight: bolder;
      
      
   }
   textarea{
      margin-bottom: 10px;
   }
   button{
      //float:right;
      width: 80px;
      height: 30px;
     margin-left: 50px;
      margin-bottom: 10px;
      
      
   }
  
   `
export const ProductList = styled.div`
    margin-top:30px;
  width:100%;
  border: 1px solid greenyellow;
  
`

export const ProductItem= styled.div`
  margin-bottom: 10px;
  height:50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  span{
    text-align: center;
    color:darkseagreen;
    font-size: 24px;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  input{
    margin-top:10px;
    
    height: 30px;
    width: 60px;
   
  }
  .nameInput{
    width: 150px;
  }
  .categoryInput{
    width:20px;
  }
  button{
    margin-right: 10px;
    margin-left: 10px;
    height: 30px;
    //width: 40px;
    margin-top: 10px;
  }
  
   
`
