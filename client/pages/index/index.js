Page({
  data: {
    userInfo: null
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    basement.function.invoke('getUserInfo').then((res) => {
      if (res.success) {
        this.setData({ userInfo: res.result });
      }
    })
      .catch(console.error);
  },
  routerPage(event) {
    const url = event.target.dataset.url;
    my.navigateTo({url});
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
