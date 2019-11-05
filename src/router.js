import React from 'react'
import {Switch,HashRouter,Route,Redirect} from 'react-router-dom'
import Home from '../src/pages/home/home'
import Admin from '../src/pages/admin/admin'
import Login from '../src/pages/login/login'
import User from '../src/pages/user/user'
class RootRoute extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
           <Redirect exact from='/' to='/login'></Redirect>
           <Route path='/login' component={Login}></Route>
           <Route path='/admin' component={()=>{
             return(
               <Admin>
                  <Route path='/admin/home' component={Home}></Route>
                  <Route path='/admin/user' component={User}></Route>
                </Admin>
             )
           }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default RootRoute