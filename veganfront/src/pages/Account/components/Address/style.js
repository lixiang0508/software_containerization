import styled from 'styled-components';


export const AddressWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  `;

export const Title = styled.div`
  margin: 30px auto;
  
  color:darkseagreen;
  font-size: 24px;
  font-weight: bold;
  
  `;
export const DefaultAddr = styled.div`
  p{
    font-size:20px;
    color:darkseagreen;
    margin-top: 30px;
    
  }
  span{
    font-size:20px;
    color:darkseagreen;
    margin-top: 30px;
    
  }
  margin-bottom: 30px;
    `;

export const AddNewAddr = styled.div`
  span{
    font-size:20px;
    color:darkseagreen;
    margin-top: 30px;

  }
  input{
    width: 80px;
    margin:0 10px;
  }
  p{
    font-size:20px;
    color:darkseagreen;
    margin-top: 30px;
    margin-bottom: 20px;
    
  }
  
  `
export const AddrList= styled.div`
  margin-top:20px;
  border:1px solid transparent;
  display: flex;
  flex-direction: column;
    
    `;
export const AddrItem = styled.div`
  height: 50px;
  line-height: 50px;
  margin-bottom: 15px;
  span{
    color:darkseagreen;
    font-weight: lighter;
    font-size: 16px;
  }
  border: 1px solid lightcyan;
  input{
    width: 80px;
  }
  `