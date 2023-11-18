import { View } from '@tarojs/components'
import React, { Component } from 'react'

class Index extends Component {
  state = {
    msg: '订单',
  }
  render () {
    const { msg } = this.state
    console.log('订单')
    return(
      <View className='index'>
        <View>{msg}</View>
      </View>
    )
  }
}
export default Index