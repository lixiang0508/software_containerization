import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
  margin:0 auto;
  color: grey;
    `;

//商家项
export const CartItem = styled.div`
    margin-bottom: 20px;
  margin-top : 25px;
    `;
export const Header = styled.div`
    margin: 8px;
  `;

//商品项外部
export const ProductItems = styled.div`
    border: 1px solid #1b9b6f;
  `;

//商品项
export const ProductItem = styled.div`
  font-size: large;
  
  margin: 8px;
    display:flex;
  justify-content: space-between;
  img{
    width: 120px;
    height: 120px;
   margin-left: -30px;
  }
`;

//购物车中商品标题项
export const ProductTitle = styled.div`
   // margin-left:15px ;
  //margin:auto;
  margin-top: 20px;
  `;
//商品价格
export const Price = styled.div`
 // margin-left:15px ;
  margin-top: 20px;
  `;
export const Amount = styled.div`
  //margin-left:15px ;
  margin-top: 20px;
    input{
      width: 40px;
    }
  `;
export const ItemTotalPrice = styled.div`
  //margin-left:15px ;
  margin-top: 20px;
    `;

//删除项
export const Delete = styled.div`
  margin-left:15px ;
  margin-top: 20px;
  `;

//结算栏
export const CheckOut = styled.div`
    margin-top: 20px;
  display:flex;
  justify-content: space-between;
  `;

//已选商品 多少件
export const Chosen = styled.div`
  `;

//总价格
export const TotalPrice = styled.div`
    `;

//结算按钮
export const CheckOutButton = styled.div`
  `;




