(function() {
    var flag =false;
    var chars=['😀','😁','😂','😃','😄','😅','😆','😇','😈','😉','😊','😋','😌','😍','😎','😏','😐','😑','😒','😓','😔','😕','😖','😗','😘','😙','😚','😛','😜','😝','😞','😟','😠','😡','😢','😣','😤','😥','😦','😧','😨','😩','😪','😫','😬','😭','😮','😯','😰','😱','😲','😳','😴','😵','😶','😷'];
    jQuery(document).ready(function($) {
  $("html").mousemove(function(e) {
      if(flag){
          var color = "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
          var id=Math.ceil(Math.random()*62);
          var xr=Math.ceil(Math.random()*400)-200;
          var yr=Math.ceil(Math.random()*400)-200;
          var $i;
          $i = $("<b></b>").text(chars[id]);
          var n = Math.round(Math.random() * 10 + 16);
          var x = e.pageX,
              y = e.pageY;
          $i.css({
              "z-index": 9999,
              "color":color,
              "top": y,
              "left": x,
              "position": "absolute",
              "font-size": n,
              "-moz-user-select": "none",
              "-webkit-user-select": "none",
              "-ms-user-select": "none"
          });
          $("body").append($i);
          $i.animate({
              "top": y + yr,
              "left": x + xr,
              "opacity": 0,
          }, 1000, function() {
              $i.remove();
          });
      }
    });
  
  $("html").click(function(e) {
      if(!flag){
          var color = "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
          var id=Math.ceil(Math.random()*62);
          var xr=Math.ceil(Math.random()*400)-200;
          var yr=Math.ceil(Math.random()*400)-200;
          var $i;
          $i = $("<b></b>").text(chars[id]);
          var n = Math.round(Math.random() * 10 + 26);
          var x = e.pageX,
              y = e.pageY;
          $i.css({
              "z-index": 9999,
              "color":color,
              "top": y,
              "left": x,
              "position": "absolute",
              "font-size": n,
              "-moz-user-select": "none",
              "-webkit-user-select": "none",
              "-ms-user-select": "none"
          });
          $("body").append($i);
          $i.animate({
              "top": y + yr,
              "left": x + xr,
              "opacity": 0,
          }, 1000, function() {
              $i.remove();
          });}
    });
    });
    })();