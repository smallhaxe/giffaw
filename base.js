$(document).ready(function(){
  // code in here!
  console.log("here's your data:", mockData)
	var data = mockData.data;
	var $fHurls = [];

	function loadGallery(data) {
	    data.forEach(function(val, ind, arr) {
	        $fHurls.push(val.images.fixed_height.url)
	    }); return $fHurls;
	//     $fHurls.each(function(ind, ele) {
	//         $('body').append('<img src="' + ele + '">');
	//     });
	}

	function render(imgArr) {
	    for (var i = 0; i < imgArr.length; i++) {
	        $('body').append('<img src="' + imgArr[i] + '">');
	    }
	}

	loadGallery(data);
	render($fHurls)
})
