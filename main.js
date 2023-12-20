// Some code thanks to @chrisgannon
if(Cookies.get('theme') == undefined) {
  Cookies.set('theme', 1);
}
tog = cookie = Cookies.get('theme');
console.log(cookie);
if(cookie == 1) {
  $('#fordark').css('background-color', '#292929')
  $('.bold').css('color', '#dcdcdc')
  $('.profile').css('background', '#292929')
  $('.profile').css('color', '#dcdcdc')
  $('.profile h1').css('color', '#dcdcdc')
  $('.profile .list-titles').css('color', '#dcdcdc')
} else {
  $('#fordark').css('background-color', '#fff')
  $('.bold').css('color', '#4a4e51')
  $('.profile').css('background', '#fff')
  $('.profile').css('color', '#4a4e51')
  $('.profile h1').css('color', '#4a4e51')
  $('.profile .list-titles').css('color', '#4a4e51')
  $('#checkbox').prop('checked', true)
}
function change_theme() {
  if(tog == 0) {
    $('#fordark').css('background-color', '#292929')
    $('.bold').css('color', '#dcdcdc')
    $('.profile').css('background', '#292929')
    $('.profile').css('color', '#dcdcdc')
    $('.profile h1').css('color', '#dcdcdc')
    $('.profile .list-titles').css('color', '#dcdcdc')
    tog = 1;
  } else {
    $('#fordark').css('background-color', '#fff')
    $('.bold').css('color', '#4a4e51')
    $('.profile').css('background', '#fff')
    $('.profile').css('color', '#4a4e51')
    $('.profile h1').css('color', '#4a4e51')
    $('.profile .list-titles').css('color', '#4a4e51')
    tog = 0;
  }
  Cookies.set('theme', tog);

}

var select = function(s) {
    return document.querySelector(s);
  }
  
  function randomBetween(min,max)
  {
      var number = Math.floor(Math.random()*(max-min+1)+min);
    
      if ( number !== 0 ){
        return number;
      }else {
        return 0.5;
      }
  }
  
  var tl = new TimelineMax();
  
  for(var i = 0; i < 20; i++){
  
    var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
      x: randomBetween(12, 15) * (randomBetween(-1, 1)),
      y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
      repeat:-1,
      repeatDelay:randomBetween(0.2, 0.5),
      yoyo:true,
      ease:Elastic.easeOut.config(1, 0.5)
    })
  
    tl.add(t, (i+1)/0.6)
  }
  
  tl.seek(50);