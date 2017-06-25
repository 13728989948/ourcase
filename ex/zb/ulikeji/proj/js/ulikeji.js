layui.use("layer", function() {
	/** 绑定点击二级导航按钮们************************************** */
	bindClickSecNavBtYg();
	bindClickSecNavBtnNd();
});

function bindClickSecNavBtYg() {
	var $ = layui.jquery;
	var layer = layui.layer;

	var btnId = "secNavBtYg";
	var elDom = $("#" + btnId);

	var startOpen = function() {
		var html = "";
		html += "<div id=\"secNavBtYgCon\">" + "\n";
		html += " <img src=\"images/ulikeji_002.jpg\" /><br/>" + "\n";
		html += " <img src=\"images/ulikeji_003.jpg\" /><br/>" + "\n";
		html += " <img src=\"images/ulikeji_004.jpg\" />" + "\n";
		html += "</div>" + "\n";

		layer.open({
			type : 1,
			shade : false,
			title : $("#" + btnId).text(),
			content : html,
			maxWidth: 1050,
			success : function(layero, index) {
			},
			end : function() {
			}
		});
	};

	elDom.on("click", startOpen);
}

// 绑定点击主要开发难点
function bindClickSecNavBtnNd() {
	var $ = layui.jquery;
	var layer = layui.layer;

	var btnId = "secNavBtnNd";
	var elDom = $("#" + btnId);

	var startOpen = function() {
		var content = "<div id=\"secNavBtnWtCon\" class=\"secNavBtnWtCon\">主要难点在于需要熟悉cas(单点登录系统，以及比较熟悉开源项目jspcms)</div>"
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