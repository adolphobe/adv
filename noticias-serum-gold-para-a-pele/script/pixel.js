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

