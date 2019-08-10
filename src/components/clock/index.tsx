import { View } from '@tarojs/components'
import './index.css'

// second 必须要小于 3600
function toTime (second: number): string {
  const s = second % 60
  const m = Math.floor(second / 60)
  return `${m < 10 ? 0 : ''}${m}:${s < 10 ? 0 : ''}${s}`
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
      {toTime(second).split('').map((x, i) => <View key={i} className="char">{x}</View>)}
    </View>
  )
}
