import { View, Text } from '@tarojs/components'
import './index.css'

// second 必须要小于 3600
function toTime (second: number): string {
  const s = second % 60
  const m = Math.ceil(second / 60)
  return `${m}:${s < 10 ? 0 : ''}${s}`
}

type Prop = {
  second: number;
  init: boolean;
}

export default function Clock ({
  second = 1500,
  init = true
}: Prop) {
  return (
    <View className={`clock ${init ? 'init' : ''}`}>
      <Text>
        { toTime(second) }
      </Text>
    </View>
  )
}
