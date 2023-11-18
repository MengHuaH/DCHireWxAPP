import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { AtTabBar }  from 'taro-ui'
import './index.scss'

class Index extends Component {
  static options = {
    addGlobalClass: true,
  }
  state = {
    current:0,
    pathlist: 
    [
      {
        pagePath: 'pages/index/index',
        text: '车行'
      },
      {
        pagePath: 'pages/orderGoods/index',
        text: '订单'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      },
    ]
  }
  modifyState(value){
    switch (value.dispaly) {
      case 'upcurrent':
          this.setState({
            current: value.state
          })
        break;
    }
  }
  handleClick (value) {
    const url = '/'+ this.state.pathlist[value].pagePath
    Taro.switchTab({ url })
  }


  render () {
    const { current } = this.state
    console.log(1)
    return(
      <View className="bar-container">
        <AtTabBar
          fixed
          tabList={[
            { title: '车行', iconType: 'home' },
            { title: '订单', iconType: 'bullet-list' },
            { title: '我的', iconType: 'user' }
          ]}
          current={current}
          onClick={this.handleClick.bind(this)}
        />
      </View>
    )
  }
}
export default Index