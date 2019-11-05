import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
const { SubMenu } = Menu;
const root =[
  {
      name:'首页',
      path:'/admin/home',
      key:'/admin/home'
  },
  {
      name:'客户管理',
      path:'/admin/user',
      key:'/admin/user',
      children:[
          {
              name:'个人客户',
              path:'/admin/user/root',
              key:'/admin/user/root'
          },
          {
              name:'企业客户',
              path:'/admin/user/info',
              key:'/admin/user/info',
              children:[
                {
                  name:'订单管理',
                  path:'/admin/user/root1',
                  key:'/admin/user/root1'
                },
                {
                  name:'客户信息',
                  path:'/admin/user/root2',
                  key:'/admin/user/root2'
                }           
          ]
          }           
      ]
  },
  {
      name:'设置',
      path:'/admin/setting',
      key:'/admin/setting'
  }
]

class CustomSlider extends React.Component{
  jump = (path) => {
    this.props.history.push(path);
  }
  renderItem=(data)=>{
    return(
      data.map((item,index)=>{
        if(item.children){
          //渲染次级
          return(
            <SubMenu key={item.key} title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
          )
        }else{
          //渲染一级
          return(
            <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
        )
}
      })
    )
  }

  render(){
    return(
      <Menu style={{ width: 256 }} mode="vertical" theme='dark'>
        {this.renderItem(root)}
      </Menu>
    )
  }
}
export default withRouter(CustomSlider)