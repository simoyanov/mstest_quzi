var social = {
  init:function(){
    $(document).on('click',".social-btn",function(e){
      e.preventDefault();
      var network = $(this).attr('data-network');
      var purl = $(this).attr('data-purl');
      var ptitle = $(this).attr('data-title');
      var pimg = $(this).attr('data-img');
      var text = $(this).attr('data-text');
      social.share(network,purl, ptitle, pimg, text)

    });
    console.log(redirect);
    if(redirect){
      window.setTimeout( function(){
         window.location = '/' + redirect;
      }, 2000 );
    }
  },
  popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
  },
  share:function(network,purl, ptitle, pimg, text){
   
    if ( network == "vk") {
      url  = 'http://vkontakte.ru/share.php?';
      url += 'url='          + encodeURIComponent(purl);
      url += '&title='       + encodeURIComponent(ptitle);
      url += '&description=' + encodeURIComponent(text);
      url += '&image='       + encodeURIComponent(pimg);
      url += '&noparse=true';
      social.popup(url);
    } 
    if ( network == "facebook" ) {
      url  = 'http://www.facebook.com/sharer.php?s=100';
      url += '&p[title]='     + encodeURIComponent(ptitle);
      url += '&p[summary]='   + encodeURIComponent(text);
      url += '&p[url]='       + encodeURIComponent(purl);
      url += '&p[images][0]=' + encodeURIComponent(pimg);
      social.popup(url);
    }
    if ( network == "twitter") {
      url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
      social.popup(url);
    }
    if ( network == "ok") {
     
      url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
      url += '&st.comments=' + encodeURIComponent(text);
      url += '&st._surl='    + encodeURIComponent(purl);

     /* url  = 'http://www.odnoklassniki.ru/dk?st.cmd=WidgetSharePreview&st.s=1';
      url += '&st.comments=' + encodeURIComponent(text);
      url += '&st.shareUrl='    + encodeURIComponent(purl);
    */
      social.popup(url);
    } 
    if ( network == "mailru" ) {
      url  = 'http://connect.mail.ru/share?';
      url += 'url='          + encodeURIComponent(purl);
      url += '&title='       + encodeURIComponent(ptitle);
      url += '&description=' + encodeURIComponent(text);
      url += '&imageurl='    + encodeURIComponent(pimg);
      social.popup(url)
    }
  }
};


