layui.use("layer", function() {
	/** 绑定点击二级导航按钮们************************************** */
	bindClickSecNavBtYg();
	bindClickSecNavBtnWt();
});

function bindClickSecNavBtYg(width, height) {
	var $ = layui.jquery;
	var layer = layui.layer;

	var btnId = "secNavBtYg";
	var elDom = $("#" + btnId);

	var startOpen = function() {
		var html = "";
		html += "<div id=\"secNavBtYgCon\">" + "\n";
		html += " <img style=\"width:400px;height:711px;\" src=\"images/gindang_002.jpg\" />" + "\n";
		html += "</div>" + "\n";

		layer.open({
			type : 1,
			area : [ width, height ],
			shade : false,
			title : $("#" + btnId).text(),
			content : html,
			success : function(layero, index) {
			},
			end : function() {
			}
		});
	};

	elDom.on("click", startOpen);
}

function bindClickSecNavBtnWt() {
	var $ = layui.jquery;
	var layer = layui.layer;

	var btnId = "secNavBtnWt";
	var elDom = $("#" + btnId);

	var startOpen = function() {
		var content = "<div id=\"secNavBtnWtCon\" class=\"secNavBtnWtCon\">需求页面中有一页是在线客户功能，我参考张瑞云给郑总的回复是：现在的大部分客服聊天基本都是接第三方，如小能客服，网易七鱼。如果要实现客服对话功能，得连接第三方客服相关接口，可以实现在线聊天功能，如果要自己开发这个客服聊天功能，基本是要写一个聊天系统，这个工作量很大。</div>"
		layer.open({
			type : 1,
			shade : false,
			title : $("#" + btnId).text(),
			content : content,
			success : function(layero, index) {
			},
			end : function() {
			}
		});
	};

	elDom.on("click", startOpen);
}