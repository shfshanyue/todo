import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default function Index {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
