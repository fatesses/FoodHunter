$(function() {
	var $sTabs = $(".shop-tabs"),
		$ac = $sTabs.find("a.active"),
		$sPanel = $(".shop-panel");
	$("." + $ac.data("id"), $sPanel).removeClass("hidden");
	$sTabs.on("tap", "a", function() {
		var $this = $(this);
		var $last = $sTabs.find("a.active");
		$last.removeClass("active");
		$("." + $last.data("id"), $sPanel).addClass("hidden");
		$this.addClass("active");
		$("." + $this.data("id"), $sPanel).removeClass("hidden");
	})
})
function recommendation() {
	alert("Thank you!");
	return true;
}