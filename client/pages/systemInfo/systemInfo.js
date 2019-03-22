const systemInfoMap = {
  model: '手机型号',
  pixelRatio: '设备像素比',
  windowWidth: '窗口宽度',
  windowHeight: '窗口高度',
  language: '语言',
  version: '支付宝版本号',
  storage: '设备磁盘容量',
  currentBattery: '当前电量百分比',
  system: '系统版本',
  platform: '系统名称',
  screenWidth: '屏幕宽度',
  screenHeight: '屏幕高度',
  brand: '手机品牌',
  fontSizeSetting: '字体大小',
  app:'客户端名称',
  titleBarHeight: '标题栏高度',
  statusBarHeight: '状态栏高度'
}
Page({
  data: {
    systemInfo: null,
    systemInfoMap:systemInfoMap
  },
  onLoad() {
    my.getSystemInfo({
      success: res => {
        console.log(res);
        this.setData({
          systemInfo: res
        })
      },
      fail: error => console.log(error)
    })
  },
});
