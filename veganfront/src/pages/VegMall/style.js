import styled from 'styled-components'

export const LeftWrapper= styled.div`
  float:left ;
  width:150px;
 // height:1000px;
  margin-left:30px;
  margin-top:50px;
  background-color: #bfa;
  border:1px solid rgba(0.5,0.2,0.8,0.2);
  border-radius: 10px;
  `

export const NavWrapper = styled.ul`
  width: 100% ;
  list-style: none;
  margin: 10px auto;
  display:flex;
  flex-direction: column;
  
`

export const NavNode = styled.li`
  text-align: center;
  flex-grow: 1;
  font-size:20px;
  text-align:center;
  color: grey;
  margin-top: 15px;
  padding-bottom: 8px;
  padding-top: 8px;
  border-top: 2px solid white;
;`

//中间部分
export const MiddleWrapper = styled.div`
    margin-top:50px;
  margin-right:50px;
  width:1000px;
  padding-left:50px;
 
  float:left;
  `
export const ProductWrapper = styled.div`
   width: 100%;
   height:100%;
  
  `;

export const Product= styled.div`
  float:left;
  width: 198px;
  margin-right: 48px;
  margin-bottom: 28px;
  border: 1px solid greenyellow;
  height: 300px;
  `;

export const ImgBox= styled.div`
  margin-bottom:8px;
  position:relative;
  img{
    width:200px;
    height:200px;
  }
  span{
    position:absolute;
    top:10px;
    left:10px;
    padding:0 4px;
    font-size:10px;
    height:20px;
    color: #a7936e;
    border: 1px solid #a7936e;
    line-height: 20px;
    background-color: #f4f0ea;
    border-radius:6px;
    
  }
    `;
export const ProductInfo = styled.div`
 
  text-align:center;
    &.attrs{
      height: 20px;
      margin-bottom: 3px;
      text-align:center;
    }
 
  h3{
    margin-bottom: 4px;
    padding:0 10px;
    line-height:20px;
    font-weight:700;
    text-align:center;
    
    
  }
    `
;
export const Tags = styled.span`
  display:inline-block;
  height:20px;
  margin:0 4px ;
  line-height:20px;
  color:white;
  background-color: darkseagreen;
  border: 1px solid darkseagreen;
  border-radius:4px;
    
   `;

export const PriceVal =styled.span`
    color:green;
  ` ;

export const Producer = styled.span`
    border-left:1px solid #999;
  color: #999;
  padding-left: 10px;
  margin-left: 7px;
  `;