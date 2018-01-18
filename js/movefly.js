
function Movefly() {
	 this.ele=$("#box2");
	 this.start(); 
}


Movefly.prototype.start = function() {
	
	var self = this   // 先保存当前 拖拽对象！
	
	 $(document).keydown(function(e){
	
	
	 	switch(e.keyCode)
	 	{
	 		case 38:self.ele.css({top: parseInt(self.ele.css("top"))-10});break;
	 		case 37:self.ele.css({left: parseInt(self.ele.css("left"))-10});break;
	 		case 40:self.ele.css({top: parseInt(self.ele.css("top"))+10});break;
	 		case 39:self.ele.css({left: parseInt(self.ele.css("left"))+10});break;
	 	}
	 })
	}


