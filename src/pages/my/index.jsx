import { View } from '@tarojs/components'
import React, { Component } from 'react'

class Index extends Component {
  state = {
    msg: '我的',
  }
  render () {
    const { msg } = this.state
    console.log('my')
    return(
      <View className='index'>
        <View>{msg}</View>
      </View>
    )
  }
}
export default Index