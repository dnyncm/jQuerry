$('h1').css('color', 'red')
$('input').keydown(function(e){
    $('h1').text(e.key)
})
