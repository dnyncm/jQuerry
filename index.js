//change css
$('h1').css('color', 'red');
// add class = $('h1').addClass('') or remove = .removeClass
// .hasClass('') check if the selected have that class$('h1').css('color', 'red')
$('input').keydown(function(e){
    $('h1').text(e.key)
})
