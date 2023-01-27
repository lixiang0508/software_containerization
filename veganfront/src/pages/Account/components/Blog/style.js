import styled from 'styled-components';

export const BlogManageWrapper = styled.div`
    width: 1000px;
   margin: 0 auto;
  
    `
export const BlogList= styled.div`
  margin-top:20px;
  border:1px solid transparent;
  display: flex;
  flex-direction: column;
  `

export const BlogItem = styled.div`
   line-height: 50px;
  border: 1px solid lightcyan;
  //display:flex;
  //flex-direction: row;
  span{
    color:darkseagreen;
    
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .blogTitle{
    width: 100px;
  }
  .blogDesc{
    width: 600px;
  }
  button{
    height:30px;
    margin-top:10px;
  }
  
    `;