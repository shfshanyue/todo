import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Clock from '../../components/clock'
import './index.less'

export default function Index () {
  const initSecond = 1500
  const [second, setSecond] = useState(initSecond)
  const [run, setRun] = useState(false)

  useEffect(() => {
    let interval
    if (run && second > 0) {
      interval = setTimeout(() => {
        setSecond(second - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearTimeout(interval)
    }
  })

  const resetSecond = () => setSecond(initSecond)

  return (
    <View className='index' onClick={() => setRun(!run)}>
      <Clock init={!run} second={second} />
      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
