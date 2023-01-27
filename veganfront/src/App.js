import React,{Component} from 'react'
import {GlobalStyle} from "./style";
import Header from "./common/header";
import BlogHome from "./pages/BlogHome"
import BlogDetail from "./pages/BlogDetail/loadable"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import BlogWrite from "./pages/BlogWrite";
import VegMall from "./pages/VegMall";
import FirstPage from "./pages/FirstPage"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import Restaurant from "./pages/Restaurant"
import RestaurantDetail from "./pages/RestaurantDetail";
import CheckOut from "./pages/CheckOut"
import Friends from "./pages/Friends";
import FriendsDetail from "./pages/FriendsDetail"
import FriendWrite from "./pages/FriendWrite";
import Account from "./pages/Account"
import Admin from "./pages/Admin";
class App extends Component {
    render(){
  return (
      <div>
          <GlobalStyle  />
              <Header/>
          <br/>






          <Switch>
              <Route path="/" exact component={(props) => <FirstPage {...props} />}></Route>
          <Route path="/blog" exact component={(props) => <BlogHome {...props} />}></Route>
          <Route path="/blogDetail/:id" exact component={(props) => <BlogDetail {...props} />}></Route>
              <Route path="/login" exact component={(props) => <Login {...props} />}></Route>
              <Route path="/register" exact component={(props) => <Register {...props} />}></Route>
              <Route path="/writeBlog" exact component={(props) => <BlogWrite {...props} />}></Route>
              <Route path="/mall" exact component={(props) => <VegMall {...props} />}></Route>
              <Route path="/cart" exact component={(props) => <Cart {...props} />}></Route>
              <Route path="/product/:id" exact component={(props) => <ProductDetail {...props} />}></Route>
              <Route path="/restaurant" exact component={(props) => <Restaurant {...props} />}></Route>
              <Route path="/restaurant/:id" exact component={(props) => <RestaurantDetail {...props} />}></Route>
              <Route path="/checkout" exact component={(props) => <CheckOut {...props} />}></Route>
              <Route path="/friend" exact component={(props) => <Friends {...props} />}></Route>
              <Route path="/friend/:id" exact component={(props) => <FriendsDetail {...props} />}></Route>
              <Route path="/writeFriend" exact component={(props) => <FriendWrite {...props} />}></Route>
              <Route path="/account" exact component={(props) => <Account {...props} />}></Route>
              <Route path="/admin" exact component={(props) => <Admin {...props} />}></Route>

          </Switch>









      </div>

  )}
}

export default App;
