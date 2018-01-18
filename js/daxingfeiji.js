function Daxingfeiji(n){
	this.ele=$("<div></div>");
	this.ele.css({"background":"img/plain3_die"+n+".png"});
	this.ele.addClass("diji3");
	this.ele.appendTo("body");
	this.move(n)
}
Daxingfeiji.prototype.move=function(n){
	var self=this;
	
	this.ele.animate({top:1000},9000,function(){
		this.remove();
	})
	this.panduan(n);
}
Daxingfeiji.prototype.panduan=function(n){
	var diji=this.ele;
	var zidan=$(".point");
	console.log(diji)

	var timer=setInterval(function(){
			for(var k=0;k<diji.length;k++)
		{
			for(var j=0;j<zidan.length;j++)
			{
				if(isTouch($(".point:eq("+j+")"),diji.eq(k)))
				{
					 diji.eq(k).css({"background":"img/plain1_die"+n+".png"});
					 diji.eq(k).remove();
					 $("#panbian").text(parseInt($("#panbian").html())+10);
				}
				if(isTouch($("#box2"),diji.eq(k)))
				{
					 alert("游戏结束");
				}
				
			}
		}
	
	},5000)
}