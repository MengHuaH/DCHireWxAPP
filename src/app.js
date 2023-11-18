
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import 'taro-ui/dist/style/index.scss'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })
  console.log('aa')
  // children 是将要会渲染的页面
  return children
}

export default App
