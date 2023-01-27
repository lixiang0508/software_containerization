import React,{PureComponent} from 'react';

import {connect} from "react-redux";

import SwipePlayer from './SwipePlayer'

import url1 from '../../statics/pics/veg-web-4.png'
import url2 from '../../statics/pics/veg-web1.jpeg'
import url3 from '../../statics/pics/veg-web-2.jpeg'
import {AboutUS,Title,Content,CollectionWrapper,CollectionTitle,CollectionItem,StuffDesc,Price} from './style'
class FirstPage extends PureComponent{

      state={images: [`../../../images/banner1.jpeg`,`../../../images/banner2.jpeg`,`../../../images/banner3.jpeg`
          ,`../../../images/banner4.jpeg`]}


    componentDidMount() {

    }

    render(){
        return(
            <div>

                {/* 轮播图*/}
                <SwipePlayer images={this.state.images}></SwipePlayer>
                <AboutUS>
                    <Title><span>About Us</span></Title>
                    <Content>
                        <p> &nbsp; &nbsp;This is Vegan Hope, and I am Lixiang Zhang. I have been a vegetarian
                            since I was 12. Fairly, the 12-year</p>
                            <br/> <p>vegan experience changes me  LOT. I am not an activist or
                            scholar in related fields, but I do want to do
                        </p> <br/> <p> something to  support vegans. You can buy products, read blogs, and make friends here</p>



                    </Content>


                </AboutUS>
                <CollectionWrapper>
                    <CollectionTitle><span>Hot sales</span></CollectionTitle>
                    <CollectionItem>
                        <img src={`../../../images/products/prod1.jpeg`}/>
                        <StuffDesc>Ocean sea shoes</StuffDesc>
                        <br/>
                        <Price>50% OFF with renewable matrials</Price>


                    </CollectionItem>
                    <CollectionItem>
                        <img src={`../../../images/products/prod2.jpeg`}/>
                        <StuffDesc>Ocean sea shoes</StuffDesc>
                        <br/>
                        <Price>50% OFF with renewable matrials</Price>

                    </CollectionItem>
                    <CollectionItem>
                        <img src={`../../../images/products/prod3.jpeg`}/>
                        <StuffDesc>Ocean sea shoes</StuffDesc>
                        <br/>
                        <Price>50% OFF with renewable matrials</Price>

                    </CollectionItem>

                </CollectionWrapper>

            </div>
        )
    }

}


export default FirstPage