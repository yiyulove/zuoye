var gameEngine = {
	
	ele: $("#box"),		// 属性： 找到背景
	
	start: function() {	// 方法1： 启动游戏
		// 定时移动背景图片: 改变定位
		var self = this
		this.ele.animate({"background-position-y": "-230%"}, 10000, "linear", function() {
			// 先让图片回到 100% 的位置
			self.ele.css({"background-position-y": "0%"})
			// 继续滚动
			self.start()
		})
	}
}
