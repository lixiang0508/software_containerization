import React,{PureComponent} from 'react';
import {WriterWrapper,WebsiteWrapper,WebsiteItem,WriterItem} from '../styled'
import pic1 from '../../../statics/pics/veg-web1.jpeg';
import pic2 from '../../../statics/pics/veg-web-2.jpeg'
import pic3 from '../../../statics/pics/veg-web-3.jpeg'
import pic4 from '../../../statics/pics/veg-web-4.png'
import {Link} from "react-router-dom";



export default class Recommend extends PureComponent {

    render(){
        return (
            <div>
                <WebsiteWrapper>
                    <WebsiteItem>
                    <img src={pic1} className="web-pic"/>
                        <a href="https://www.happyherbivore.com">
                   <span className ="web-text" >www.happyherbivore.com</span>
                        </a>
                    </WebsiteItem>
                    <WebsiteItem>
                        <img src={pic2} className="web-pic"/>
                        <a href="https://www.engine2diet.com">
                        <span className ="web-text" >www.engine2diet.com</span>
                        </a>
                    </WebsiteItem>
                    <WebsiteItem>
                        <img src={pic3} className="web-pic"/>
                        <a href="https://www.forksoverknives.com">
                        <span className ="web-text" >www.forksoverknives.com</span>
                        </a>
                    </WebsiteItem>
                    <WebsiteItem>
                        <img src={pic4} className="web-pic"/>
                        <a href="https://www.greencommon.com">
                        <span className ="web-text" >www.greencommon.com</span>
                        </a>
                    </WebsiteItem>

                    {/*包含若干个WebsiteItem*/}
                </WebsiteWrapper>
                <WriterWrapper>
                    {/*包含若干个WriterItem*/}

          <Link to="/writeBlog" >  <WriterItem><span>Post a blog</span> </WriterItem>
          </Link>

                </WriterWrapper>
            </div>
        )
    }
}