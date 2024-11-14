//change css
$('h1').css('color', 'red');
// add class = $('h1').addClass('') or remove = .removeClass
// .hasClass('') check if the selected have that class$('h1').css('color', 'red')
$('h1').text('New text!');
 //.html to chage html
 //Set attribute $('a').attr('href', 'https:www.google.com')
//Add event listener
$('h1').click(function(){
   $('h1').css('color', 'purple');
});

//any button clicked. Don't need to make for loop
$('button').click(function(){
    $('h1').html('Clicked');
});

$('input').keydown(function(e){
    $('h1').text(e.key)
});
// on then add any event
$('h1').on('mouseover', function(){
    $('h1').text('Mouse over');
});
// .before .after .prepend .append ('enter the adding html')
// .hide() .toggle() .fadeIn() .fadeOut() .slideUp() .slideDown() .slideToggle() can be add to functions
$('button').on('click', function(){
    $('h1').slideUp().slideDown().animate({opacity: 0.5});
});
