/*
//$('h1').css('color', 'green');
/!*
$(document).ready(function () {
    $('h1').css('color', 'green');
});*!/
/!*$(function () {
    $('h1').css('color', 'green');
    $('h1').html('new text');
});*!/
$('#btn_start').click(function () {
    $('#message')
        .html('New message')
        .css('background-color', 'green')
        .parent()
        .css('background-color', 'fff4dd')
        .width(150)
        .height(80)
});
$('#btn_reset').click(function () {
    location.reload()
});
//$('#content').css('color', 'red')
//$('h1,h2').css('color', 'blue')
//$('article h2').css('color', 'red')
//$('article').find('h2').css('color', 'blue')
//$('h1 + p').css('color', 'blue')
//$('#content').prev().css('color', 'red')
//$('#content').next().css('color', 'red')
//$('*').css('color', 'red')
//$('article > h2').css('color', 'red')
//$('.content).find('a.button');
/!*$('.content a.button');
$('.content h3.title');

var $content = $(.'content')
$content.find('a.button');
$content.find('h3.title');*!/

/!*$('.content div input:disabled');

$('.content div').find('input:disabled');*!/

/!*$('.box').css({
    color: 'green',
    fontSize:'12px',
    marginLeft:'10px',
})*!/
/!*$('#content').css('height', function (i,value) {
    return parseFloat(value)*1.2;
});*!/

/!*
$('#content').addClass('name')


$('#content').removeClass('box')
*!/

//$('#content').toggle(4000)
/!*
attr(attrName)
attr((attrName,attr Value))
removeAttr(attrName)

var altText = $('img').attr('alt')
$('img').attr('src','/img/default.jpg')

$('a#my').attr({
    'href':
    'title':
})*!/
/!*
$('a').click(function (event) {
    alert('Hello')
    return false;
})
$('header').click(function (event) {
    alert('Hello2!!!')

})*!/

$('#quantity').keyup(function () {
    var Value = $(this).val();
    $('#msg').text(Value);
});

/!*$('.anim').click(function () {
    $(this).hide('800');
});*!/
/!*
$('.anim').hide('slow',function () {
    alert('Hello');
})*!/

$('.anim').slideDown(1000)

/!*$('#stick').click(function () {
    $('#hide').slideToggle('slow');
});*!/

function changeClass () {
    $(this).prev().toggleClass("active")
}
    $(function () {
        $('article h2').click(function () {
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        });
    });
//Подтянуть урок№5

/!*$('.anim').click(function () {
    $(this).fadeTo('slow', 0.4);
})*!/

/!*$('.anim').animate({
    'opacity':'show'
})*!/

$('.anim').animate({'height':'+=50px'})

     .animate({'width':'-=25px'},{queue:false}).stop();

jQuery.fx.off = true;*/
//var $myDiv = $('<div id="myDiv" class="page">Hello</div>').appendTo('#content');
//var $myDiv = $('<div>Hello</div>',{'id':'my', 'class':'page'}).appendTo('#content');
//var $myDiv = $('<div>Hello</div>').attr({'id':'my', 'class':'page'}).appendTo('#content');
/*var myDiv = document.createElement('div');
    myDiv.id = 'my';
    myDiv.className = 'page';*/
//$('p').after('<hr/>')
//$('<hr/>').insertAfter('p')
//$('<hr/>').insertBefore('p')
//$('<p>Hello</p>').appendTo('#content')
//$('<p>Hello</p>').prependTo('#content')

//$('.second').replaceWith('<h2>New text</h2>');
//$('<h2>New text</h2>').replaceAll('.inner');
//$('.inner').wrap('<div class="new">Text</div>');
//$('.inner').wrapInner('<div class="new">Text </div>');
//$('.first').clone().appendTo('.third');

/*var p;
$('button').click(function () {
    if(p){
        p.appendTo('header');
        p = null;
    }else {
        p = $('.hello').detach();
    }
})*/
//$('.third').remove();
/*var p = $('.first');
var offset = p.offset();
p.html('left:' + offset.left + ',top:' + offset.top);*/

//$('.third').offset({top:10,left:350});
/*
var p = $('.first');
var position = p.position();
p.html('left:' + position.left + ',top:' + position.top);*/
/*function showHeight(element,heihgt) {
    $('div').text('Height og the ' + element + 'is ' + heihgt);
}
$('#getp').click(function () {
    showHeight('Paragraph',$('p').height());
});
$('#getd').click(function () {
    showHeight('Document',$(document).height());
});
$('#getw').click(function () {
    showHeight('Window',$(window).height());
});*/

/*var p = $('p:first');
$('p:last').text('innerHeight: ' + p.innerHeight());*/
/*(function f($) {
    $(function () {
        $('.icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);*/
/*$('.mobile-tab').hide();
$('#burg').on('click', function () {
    $('.mobile-tab').slideToggle();
})*/
$('.mobile-tab').hide();
$('#burg').click(function () {
    $('.mobile-tab').slideToggle(1000);
});













