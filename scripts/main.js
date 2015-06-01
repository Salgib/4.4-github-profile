(function(){
  'use strict';

  $(document).ready(function(){

  $.ajax({
    url: 'https://api.github.com/users/salgib',
  }).then(function(data){
    $('.user-info').prepend(JST['user-template'](data));
    console.log(data);
  })




  $(document).ready(function(){
    $.ajax({
      url: "https://api.github.com/user/repos",
      headers: {
        "Authorization": "token " + GITHUB_TOKEN
      }
    }).then(function(repo) {
      displayRepos(repo);
    });

      });

    function displayRepos(repo){
      console.log(repo);
      $('.repositories').prepend(JST['repo-template'](repo));

    }



});
})();









  // $(document).ready(function(e){
  //   var code = window.location.href.match(/\?code=(.*)/)[1];
  //   if(code) {
  //     $.getJSON('http://localhost:9999/authenticate/'+code, function(data) {
  //      console.log(data);
  //     });
  //   }
  // });
  //
  // $('button').on('click', function(e){
  //   window.location.replace('https://github.com/login/oauth/authorize?client_id=30b3ed64b34eadf42a0a');
  // });
