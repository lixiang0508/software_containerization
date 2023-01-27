import React,{PureComponent} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchInfo} from "./style";
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {searchFocusAction,searchBlurAction,logoFocusAction,logoBlurAction} from "../../redux/actions/header";
import {logOutAction} from "../../pages/Login/store/actionCreators";

class Header extends PureComponent{




    render(){
        return (
            <HeaderWrapper >
                <Link to="/">
                <Logo  onMouseOver={this.props.handleLogoFocus} />
                </Link>
                <SearchInfo onMouseOut={this.props.handleLogoBlur} className={this.props.header.get('logofocused')===false?'logonotfocused':''}>
                    {/*鼠标悬停到veganHope图标之上 展示相关其他大幅导航 */}
                </SearchInfo>

                <Nav>
                    <NavItem className="left active" >Home</NavItem>
                    <Link to="/mall"><NavItem className="left" >Veg Mall</NavItem></Link>
                    <Link to="/blog"><NavItem className="right" >Blogs</NavItem></Link>
                    <Link to="/friend">   <NavItem className="right" >Friends</NavItem> </Link>
                 <Link to="/restaurant"><NavItem  className="right" >Restaurant</NavItem></Link>
                    {
                        this.props.login? <Link to="/cart"> <NavItem className="right" >Cart</NavItem></Link>:''
                    }

                    {
                        this.props.login?  <NavItem className="right" onClick={this.props.handleLogOut}>Logout</NavItem>: <Link to='/login'>
                            <NavItem className="right" >Login</NavItem>
                        </Link>
                    }


                    {/*<CSSTransition in={this.state.focused} timeout={200} classNames="slide"/> */}
                    <CSSTransition in={this.props.header.get('focused')} timeout={1500} classNames="slide">
                        <NavSearch className={this.props.header.get('focused')?'focused':''} onFocus={this.props.handleInputFocus}
                                   onBlur={this.props.handleInputBlur}>


                        </NavSearch>
                        </CSSTransition>



                    <Addition>

                        <Link to="/account"><Button >Account</Button></Link>
                        {
                            this.props.login?'':<Link to='/register'><Button >Register</Button> </Link>
                        }

                    </Addition>

                </Nav>

            </HeaderWrapper>
        )
        }
    }


    export default connect(
        state=>({header:state.get('header'),
        login:state.getIn(['login','login'])}),
        {handleInputBlur:searchBlurAction,
            handleInputFocus:searchFocusAction,
             handleLogoBlur:logoBlurAction,
        handleLogoFocus:logoFocusAction,
        handleLogOut:logOutAction}
    )(Header)
