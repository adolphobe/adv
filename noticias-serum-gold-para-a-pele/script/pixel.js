//FACEBOOK
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '543185694227266');
fbq('init', '1116506585624643');


//TABOOLA
var taboola_pixel = 1493255;

window._tfa = window._tfa || [];
!function (t, f, a, x) {
       if (!document.getElementById(x)) {
          t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
       }
}(document.createElement('script'),
document.getElementsByTagName('script')[0],
'//cdn.taboola.com/libtrc/unip/'+taboola_pixel+'/tfa.js',
'tb_tfa_script');


  //Verifica se sessão está visivel na tela
  var executeWhenReachedPagePercentage = function(percentage, callback) {
   if (typeof percentage !== 'number') {
     console.error(
       'First parameter must be a number, got',
       typeof percentage,
       'instead',
     );
   }
 
   if (typeof callback !== 'function') {
     console.error(
       'Second parameter must be a function, got',
       typeof callback,
       'instead',
     );
   }
 
   function getDocumentLength() {
     var D = document;
     return Math.max(
         D.body.scrollHeight, D.documentElement.scrollHeight,
         D.body.offsetHeight, D.documentElement.offsetHeight,
         D.body.clientHeight, D.documentElement.clientHeight
     )
   }
 
   function getWindowLength() {
     return window.innerHeight || 
       (document.documentElement || document.body).clientHeight;
   }
 
   function getScrollableLength() {
     if (getDocumentLength() > getWindowLength()) {
       return getDocumentLength() - getWindowLength();
     } else {
       return 0;
     }
   }
 
   var scrollableLength = getScrollableLength();
 
   window.addEventListener("resize", function(){
     scrollableLength = getScrollableLength();
   }, false)
 
   function getCurrentScrolledLengthPosition() {
    return window.pageYOffset || 
      (document.documentElement || document.body.parentNode || document.body).scrollTop;
   }
 
   function getPercentageScrolled() {
     if (scrollableLength == 0) {
       return 100;
     } else {
       return getCurrentScrolledLengthPosition() / scrollableLength * 100;
     }
   }
 
   var executeCallback = (function() {
     var wasExecuted = false;
     return function() {
       if (!wasExecuted && getPercentageScrolled() > percentage) {
         wasExecuted = true;
         callback();
       }
     };
   })();
 
   if (getDocumentLength() == 0 ||
     (getWindowLength()/getDocumentLength() * 100 >= percentage)) {
     callback();
   } else {
     window.addEventListener('scroll', executeCallback, false);
   }
 };