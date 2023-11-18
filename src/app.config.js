export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/orderGoods/index',
    'pages/my/index'
  ],
  tabBar: {
    custom:true,
    list: 
    [
      {
        pagePath: 'pages/index/index',
        text: '车行'
      },
      {
        pagePath: 'pages/orderGoods/index',
        text: '订单'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
