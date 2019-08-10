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
  onClick: () => void;
}

export default function Clock ({
  second = 1500,
  init = true,
  onClick
}: Prop) {
  return (
    <View className={`clock ${init ? 'init' : ''}`} style={{
      backgroundColor: init ? '' : `rgba(255, 100, 0, ${0.5 - second / 1500 * 0.5})`
    }} onClick={onClick}>
      {toTime(second).split('').map((x, i) => <View key={i} className="char">{x}</View>)}
    </View>
  )
}
