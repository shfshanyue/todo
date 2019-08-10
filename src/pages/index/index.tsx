import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Clock from '../../components/clock'
import './index.less'

export default function Index () {
  const initSecond = 10
  const [second, setSecond] = useState(initSecond)
  const [run, setRun] = useState(false)

  // 当日完成个数
  const [count, setCount] = useState(2)

  // 是否在休息时间
  const [isRest, setIsRest] = useState(false)
  const target = Taro.getStorageSync('target')

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

  return (
    <View className="home">
      <Text className="home-todo">#赌书消得泼茶香</Text>
      <Clock init={!run} second={second} onClick={() => {
        setRun(!run)
        setSecond(initSecond)
      }} />
      <Text>今日成就</Text>
      <View className="home-block-container">
        {
          Array.from(Array(8)).map((x, i) => (
            <View key={i} className={`home-block ${i < count ? 'complete' : ''}`} />
          ))
        }
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
