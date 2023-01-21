  //TIMER
  setTimeout(function(){
    $(".mostrar").css("display", "block");
  }, 450 * 1000); //segundos * 1k
  
  
  $('like').on('click', function () {
      var target = $(this).closest('[data-id]');
      var target = target.data('id');
  
      var qtd_likes = $('[data-id="'+target+'"]').find('likes').text();
      var likes = parseInt(qtd_likes);
  
      if($('[data-id="'+target+'"]').find('likes').hasClass('curtido')){
      //alterações se tiver curtido
      $('[data-id="'+target+'"]').find('like').css({"font-weight": "normal", "color": "#4267b2"});
      $('[data-id="'+target+'"]').find('likes').removeClass("curtido");
      $('[data-id="'+target+'"]').find('likes').html(likes-1);
      
      
      }else{
  
      //alterações se não tiver curtido
      $('[data-id="'+target+'"]').find('like').css({"font-weight": "bold", "color": "#90949c"});
      $('[data-id="'+target+'"]').find('likes').addClass("curtido");
      $('[data-id="'+target+'"]').find('likes').html(likes+1);
      }
  });
  
  function loadMore(){
      $("#more").css("display", "block");
      $(".fb-comments-loadmore").css("display", "none");
  }
  
  
  
  //SCROLL UP
  function subir(){
    $("html, body").animate({
          scrollTop: 0
      }, 0);  
  
  }
  
  //GEO
  $(window).on('load', function () {
  
  $.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function (location) {
      var data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear();
      
      data = dia + '/' + mes + '/' + ano;
      vendo_agora = Math.floor(Math.random() * (170 - 40 + 1)) + 40;
  
      //AQUI altera o texto ANTES do nome da cidade
      textoAntesCidade = '<img src="img/white-eye.png">  '+vendo_agora+' pessoas de <strong>';
      //AQUI altera o texto DEPOIS do nome da cidade
      textoDepoisCidade = '</strong> estão assistindo agora...';
  
      mostrarData = false; //SE não quiser que a data apareça é só mudar o valor 'true' para 'false' e vice-versa para mostrar novamente 
      
      if(location.city)
        $('.vendo_agora').html(textoAntesCidade + location.city + textoDepoisCidade + (mostrarData ? data : ''));
        $('.vendo_agora').css("display", "block");
    }
  });
  });
  
  //DESABILITA BOTAO DIREITO E SELEÇÃO
  $(document).bind("contextmenu",function(e){
    return false;
      });
  
      $(document).bind('selectstart dragstart', function(e) {
    e.preventDefault();
    return false;
  });
  