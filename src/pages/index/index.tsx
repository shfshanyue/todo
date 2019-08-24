import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtModal, AtModalContent, AtModalAction, AtInput, AtIcon } from "taro-ui"
import classnames from 'classnames'
import Clock from '../../components/clock'

import 'taro-ui/dist/style/components/modal.scss'
import 'taro-ui/dist/style/components/icon.scss'
import './index.less'

export default function Index () {
  const initSecond = 10
  const shortBreak = 5
  const [second, setSecond] = useState(initSecond)
  const [run, setRun] = useState(false)

  // 当日完成个数
  const [count, setCount] = useState(2)

  // 是否在休息时间
  const [rest, setRest] = useState(false)
  const [isOpend, setIsOpend] = useState(false)
  const [detail, setDetail] = useState('')

  const target = Taro.getStorageSync('target')

  const action = (confirm: boolean) => {
    setIsOpend(false)
    if (confirm) {
      // 该休息了
      setCount(count + 1)
      setRest(true)
      setSecond(shortBreak)
      setDetail('')
    } else {
      setRun(false)
      setSecond(initSecond)
    }
  }

  useEffect(() => {
    let timeout
    if (run && second > 0) {
      timeout = setTimeout(() => {
        setSecond(second - 1)
      }, 1000)
    } else {
      if (second <= 0) {
        if (rest) {
          setSecond(initSecond)
          setRest(false)
        } else {
          setIsOpend(true)
        }
      }
      clearTimeout(timeout)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [run, second])

  return (
    <View
      className="home"
    >
      <View className='at-icon at-icon-settings'></View>
      <View className='at-icon at-icon-analytics'></View>
      <View className='at-icon at-icon-help'></View>
      <View className='at-icon at-icon-list'></View>
      <View className='at-icon at-icon-history'></View>
      <AtModal isOpened={isOpend}>
        <AtModalContent>
          <AtInput
            name="知乎"
            placeholder="您在这个番茄钟里做了什么"
            value={detail}
            onChange={e => setDetail(String(e))}
            autoFocus>
          </AtInput>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => action(false)}>废弃</Button>
          <Button onClick={() => action(true)}>确认</Button>
        </AtModalAction>
      </AtModal>
      <Text className={
        classnames({
          'home-todo': true,
          rest
        })
      }>
        #{
          rest ? '休息一下' : '读书消得泼茶香'
        }
      </Text>
      <Clock
        init={!run}
        rest={rest}
        second={second}
        onClick={() => {
          setRun(!run)
          setSecond(initSecond)
        }}
      />
      <Text className="home-focus-tip" style={{
        opacity: run ? 0 : .3
      }}>轻触时钟开始关注/放弃</Text>
      {/* <Text>今日成就</Text>
      <View className="home-block-container">
        {
          Array.from(Array(8)).map((x, i) => (
            <View key={i} className={`home-block ${i < count ? 'complete' : ''}`} />
          ))
        }
      </View> */}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
