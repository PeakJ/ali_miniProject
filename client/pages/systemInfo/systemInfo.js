Page({
  data: {
    systemInfo: null,
  },
  onLoad() {
    my.getSystemInfo({
      success: res => {
        let infoObj = res
        delete infoObj.safeArea;
        delete infoObj.screen
        this.setData({
          systemInfo: infoObj
        })
      },
      fail: error => console.log(error)
    })
  },
});
