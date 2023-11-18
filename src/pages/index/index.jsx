import { View } from '@tarojs/components'
import React, { Component } from 'react'
import { AtTabBar }  from 'taro-ui'
import './index.scss'

class Index extends Component {
  state = {
    msg: '车行',
    current:0,
  }
  modifyState(value){
    console.log(value)
    switch (value.dispaly) {
      case 'upcurrent':
          this.setState({
            current: value.state
          })
        break;
    }
  }
  handleClick (value) {
    this.modifyState({ dispaly:'upcurrent', state:value })
  }
  render () {
    const { msg, current } = this.state
    console.log('车')
    return(
      <View className='index'>
        <View>{msg}</View>
        {/* <AtTabBar
          fixed
          tabList={[
            { title: '车行', iconType: 'home' },
            { title: '订单', iconType: 'bullet-list' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={current}
        /> */}
      </View>
    )
  }
}
export default Index