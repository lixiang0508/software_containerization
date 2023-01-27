import styled from "styled-components";


export const AddCafe = styled.div`
  width: 100%;
  margin: 20px auto;
  border: 1px solid darkgrey;
  
  
  `;
export const Subtitle = styled.div`
  color:darkseagreen;
  font-size:22px;
  font-weight: bold;
  margin-top: 25px;
`
export const AddItem = styled.li`
text-decoration: none;
  list-style:none;
  margin: 10px 10px;
  width: 45px;
  span{
    line-height:45px;
    font-size: 23px;
    color:darkseagreen;
    //float:left;
  }
  input{
    width: 120px;
    height:24px;
  }
`;
export const AddIntro = styled.div`
  width: 80%;
  float: right;
  height: 200px;
  //background-color: orange;
  margin-top:-300px;
  //border: 1px solid darkgrey;
  p{
    line-height:45px;
    font-size: 23px;
    color:darkseagreen;
    margin-left: 30px;
    //float:left;
  }
  textarea{
    margin-left: 20px;
  }
  button{
    margin-left: 20px;
  }
  `