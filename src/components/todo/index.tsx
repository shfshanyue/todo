import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtFab, AtList, AtListItem, AtCheckbox } from 'taro-ui'

import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/list.scss'
import 'taro-ui/dist/style/components/fab.scss'
import 'taro-ui/dist/style/components/checkbox.scss'
import './index.less'

import classNames from 'classnames';

type Prop = {
  checked: boolean;
  title: string;
  tomatoCount: number;
  level?: number;
  desc?: string;
  pin?: boolean;
}

function Todo ({
  checked,
  title,
  desc,
  pin = false,
  level = 1,
}: Prop) {

  return (
    <View className="todo">
      <View className="todo-icon-wraper">
        <View className={classNames('todo-icon', { checked })}>
          <Text className="at-icon at-icon-check"></Text>
        </View>
      </View>
      <View className="todo-option">
        <View className="todo-title">
          {title}
        </View>
        {desc && <View className="todo-detail">{desc}</View>}
      </View>
    </View>
  )
}

export default Todo
