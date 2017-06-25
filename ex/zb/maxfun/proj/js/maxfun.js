layui.use("layer", function() {
	/** 绑定点击二级导航按钮们************************************** */
	bindClickSecNavBtYg();
	bindClickSecNavBtnWt();
});

function bindClickSecNavBtYg() {
	var $ = layui.jquery;
	var layer = layui.layer;

	var btnId = "secNavBtYg";
	var elDom = $("#" + btnId);

	var startOpen = function() {
		var html = "";
		html += "<div id=\"secNavBtYgCon\">" + "\n";
		html += " <img src=\"images/maxfun_002.jpg\" /><br/>" + "\n";
		html += " <img src=\"images/maxfun_003.jpg\" /><br/>" + "\n";
		html += " <img src=\"images/maxfun_004.jpg\" />" + "\n";
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

// 绑定点击存在主要问题
function bindClickSecNavBtnWt() {
	var $ = layui.jquery;
	var layer = layui.layer;

	var btnId = "secNavBtnWt";
	var elDom = $("#" + btnId);

	var startOpen = function() {
		var content = "<div id=\"secNavBtnWtCon\" class=\"secNavBtnWtCon\">1:三大平台:美团外卖，百度外卖，饿了么的反爬虫应对的问题<p>2:抓取的Wap的H5数据保证和APP上数据一致的问题</p></div>"
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