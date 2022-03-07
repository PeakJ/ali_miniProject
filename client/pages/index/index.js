Page({
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
