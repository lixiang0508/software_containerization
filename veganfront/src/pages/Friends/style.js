import styled from 'styled-components';

export const FriendWrapper = styled.div
    `
      margin: 20px auto;
      width: 1300px;
        `;
export const PostMessage =styled.div`
        float:right;
        width: 120px;
        height: 150px;
        line-height:150px;
        border: 1px solid darkseagreen;
        background-color: darkseagreen;
        border-radius: 20px;
        color:white;
        //font-size:20px;
        text-align: center;
`
export const FriendMessages = styled.div`

        width: 100%;
        margin-top:30px;
        padding-left:20px;
        `;
export const FriendItem = styled.div`
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
export const PersonName = styled.div`
        font-size:25px;
        font-weight:bolder;
        margin:10px 0;
        color:darkseagreen;
        `;

export const PersonInfo = styled.div`
        margin-top: 10px;
        `;

export const PersonAge = styled.div`
        float:left;
        font-size:22px;
        color:darkseagreen;
`;
export const PersonVegAge= styled.div`
        float:right;
        font-size:20px;
        color:darkseagreen;
        `;

export const PersonReligion = styled.div`
        margin-top:50px;
        font-size:18px;
        color:darkseagreen;
        margin-bottom: 10px;
        font-weight: 200;
        height:32px;
        `;