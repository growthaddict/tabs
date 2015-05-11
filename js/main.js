
//Add Tab Heading To Preview Box
$(document).ready(function() {
		//Add Tab Design To Preview Box
	$("#tabs").change(function(){
		var tabdesign = $(this).val();
		/*$(".previewBox").addClass(tabdesign);
		$(".previewBox2").addClass(tabdesign);*/
	$(".previewBox").removeClass("boxcorner roundedcorner");
	$(".previewBox").addClass(tabdesign);
	console.log(tabdesign);
	});	

	//Add Tab Heading To Preview Box
		$("#tabs").change(function(){
		var word = "Tab1";
		var dummytab = "Tab2"; 
		$("#previewBox").html(word);
		$("#previewBox2").html(dummytab);
		$(".previewBox").css('text-align','center');
	});

	//Add Tab Font Sizes To Preview Box
	$("#selectedFont").change(function(){
		var fontSize = $(this).val();
		$(".previewBox").css("font-size",fontSize);
	});
	//Add Tab Fonts To Preview Box
	$("#fontType").change(function(){
		var fonttype = $(this).val();
		$(".previewBox").css("font-family",fonttype);

	});

	//Add Tab Background Color To Active Tab Preview Box
	$("#background-color").change(function(){
		var backgroundcolor = $(this).val();
		$("#previewBox").css("background-color",backgroundcolor);

	});	

	//Add Tab Background Color To Inactive Tab
	$("#background-color-inactive").change(function(){
		var backgroundcolorinactive =$(this).val();
		$("#previewBox2").css("background-color",backgroundcolorinactive)
	});

	//Add Tab Border Color To Preview Box
	$("#border-color").change(function(){
		var bordercolor = $(this).val();
		$("#previewBox").css("border-color",bordercolor);

	});	

	//Add Tab Background Color To Inactive Tab
	$("#border-color-inactive").change(function(){
		var bordercolorinactive = $(this).val();
		$("#previewBox2").css("border-color",bordercolorinactive);

	});	

	//Add Tab Text Color To Active Preview Box
	$("#text-color").change(function(){
		var textcolor = $(this).val();
		$("#previewBox").css("color",textcolor);

	});	

	//Add Tab Text Color To InactivePreview Box
	$("#text-color-inactive").change(function(){
		var textcolorinactive = $(this).val();
		$("#previewBox2").css("color",textcolorinactive);

	});	

	//Add Tab Border Radius To Preview Box
	$("#borderRadius").change(function(){
		var borderRad = $(this).val();
		$(".previewBox").css("border-width",borderRad);
		console.log(borderRad);
	});	


	//Add Tab Order To Preview Box


});















