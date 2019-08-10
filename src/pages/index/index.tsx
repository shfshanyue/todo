import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Clock from '../../components/clock'
import './index.less'

export default function Index () {
  return (
    <View className='index'>
      <Clock init={false} second={160} />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
