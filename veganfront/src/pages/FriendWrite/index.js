import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {BlogWrapper, BlogWriteWrapper, Button} from "../BlogWrite/style";

class FriendWrite extends PureComponent{


    render(){
        return(
            <BlogWriteWrapper>

                {/* 内容区*/}
                <BlogWrapper>
                    <span>How many years have you been vegan</span> <input type="number"/>
                    <br/>
                    <br/>
                    <p>Your religious belief <input type="text"/></p>
                    <br/>
                    <p>Your nickname <input type="text"/></p>
                    <br/>
                    <p>Your height <input type="text"/></p>
                    <br/>
                    <p>Where are you from <input type="text"/></p>
                    <br/>

                    <br/>
                    <p>Briefly Introduce yourself</p>
                    <textarea cols="70" rows="5" placeholder="Introduce yourself!" ref={input => {this.desc=input}}></textarea>


                    <p>Please describe your expectation</p>
                    <br/>
                    <textarea cols="70" rows="5" placeholder="My expectation is" ref={input => {this.content=input}}></textarea>


                    <Button >Post </Button>

                </BlogWrapper>

            </BlogWriteWrapper>
        )
    }
}

export default FriendWrite