import Taro, { useState, useEffect, setPageInfo } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtFab, AtList, AtListItem, AtCheckbox } from 'taro-ui'

import TodoItem from '../../components/todo'

import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/list.scss'
import 'taro-ui/dist/style/components/fab.scss'
import 'taro-ui/dist/style/components/checkbox.scss'

import './index.less'

export default function Todos () {
  const [ check, setCheck ] = useState(false)
  const [ pin ] = useState(true)

  return (
    <View>
      <AtList>
        <AtListItem title="跑步" arrow="right" hasBorder={false} />
      </AtList>
      <View className="todo-add">
        <AtFab>
          <View className="at-fab__icon at-icon at-icon-add"></View>
        </AtFab>
      </View>
      <AtCheckbox
        options={[{
          value: 'list1',
          label: 'iPhone X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
        }]}
        selectedList={[]}
        onChange={() => {}}
      />
      <TodoItem
        checked={check}
        pin={pin}
        title="学习 React"
        tomatoCount={1}
        onCheck={() => setCheck(!check)}
      />
    </View>
  )
}

Todos.config = {
  navigationBarTitleText: 'Todo'
}
