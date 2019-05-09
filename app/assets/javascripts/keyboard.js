// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function()
		{
			console.log($(this).text());

			var letter = ""
			var textfield = $(this).text()

			if (textfield=="Bksp"){
				letter = $('#onscreenkeys').text().slice(0,-1) ;
			}
			else {
				letter =  $('#onscreenkeys').text() + textfield;
			}
	    $('#onscreenkeys').text(letter) ;

})
});
