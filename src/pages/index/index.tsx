import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput } from "taro-ui"
import 'taro-ui/dist/style/components/modal.scss'

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
  const [isOpend, setIsOpend] = useState(false)
  const target = Taro.getStorageSync('target')

  useEffect(() => {
    let interval
    if (run && second > 0) {
      interval = setTimeout(() => {
        setSecond(second - 1)
      }, 1000)
    } else {
      if (second <= 0) {
        setIsOpend(true)
      }
      clearInterval(interval)
    }
    return () => {
      clearTimeout(interval)
    }
  })

  return (
    <View className="home">
      <AtModal isOpened>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          <AtInput name="知乎" placeholder="您在这个番茄钟里做了什么" onChange={() => 3}></AtInput>
        </AtModalContent>
        <AtModalAction>
          <View>取消</View> <View>确定</View>
        </AtModalAction>
      </AtModal>
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
