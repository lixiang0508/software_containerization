import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:1160px;
  margin: 0 auto;
  //background-color: #bfa;
  
  overflow: hidden;
  `
export const HomeLeft = styled.div`
  float:left;
  margin-left: 15px;
  padding-top: 15px;
  padding-left:15px;
  width:750px;
  
  height:100%;
  .banner-img{
    width:650px;
    height:270px;
    margin: 0 auto;
    padding-left:30px;
  }
  `
//blog页面整个右侧部分
export const HomeRight = styled.div`
  float:right;
  width:340px;
 // background-color: darkgrey;
  height:100%
  `
//topic部分
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  //background-color: orange;
  overflow:hidden;
  display: block;
  margin-left:-10px;
  border-bottom: 1px solid #dcdcdc;
;
  
`
//每一个topicitem
export const TopicItem =styled.div`
  background-color: aliceblue;
  line-height:32px;
  font-size:14px;
  float:left;
  border:1px solid #dcdcdc;
  border-radius: 4px;
  margin-left: 15px;
  color: green;
  display:block;
  margin-bottom: 5px;
`
//文章列表
export const ListItem= styled.div`
  overflow: hidden;
   padding: 20px 0;
   border-bottom:1px solid #dcdcdc;
  .list-pic{
    width:125px;
    height:100px;
    float:right;
    display: block;
    border-radius: 10px;
    
  }
`

export const ListInfo =styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    color:#999;
    line-height:24px;
    font-size:16px
    
  }
  
`

export const ListItemBottom = styled.div`
  width:100%;
  line-height:20px;
  //background-color: #bfa;
  float:left;
  span{
    margin-right:3px;
    color:darkseagreen;
  
  }
`

//推荐部分 推荐作者
export const WriterWrapper = styled.div`
  display: flex;
  width:278px;
  border:1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 300px;
  text-align:center;
  margin-left:30px;
  margin-bottom: 30px;
  flex-direction: column;
  background-color: darkseagreen;
  `
//每一个作者
export const WriterItem=styled.div`
  margin-left:5px;
  margin-right:5px;
  line-height:80px;
  //border:1px solid black;
  width:90%;
  margin-bottom: 2px;
  background-color: darkseagreen;
  span{
    font-size: 30px;
    font-weight: bolder;
    color:white;
  }
  
  
`
//推荐网站
export const WebsiteWrapper = styled.div`
  display: flex;
  width:278px;
  border:1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 100px;
  text-align:center;
  margin-left:30px;
  margin-bottom: 30px;
  margin-top: 20px;
  flex-direction: column;
  `
//每一个网站
export const WebsiteItem = styled.div`
 // background-color: greenyellow;
  margin-left:5px;
  margin-right:5px;
  line-height:80px;
  border:1px solid darkseagreen;
  width:90%;
  margin-bottom: 2px;
  .web-pic{
    float:left;
    margin-left:10px;
    margin-top:5px;
    height:60px;
    width: 30%;
    border: 1px solid white;
    border-radius: 5px;
  }
  .web-text{
    font-size:10px;
 
    color:darkseagreen;
    
  }
  
`