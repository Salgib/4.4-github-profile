(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST['application']());
  });

  $(document).ready(function(){
   $.ajax({
     url: "https://api.github.com/user",
     headers: {
       "Authorization": "token " + GITHUB_TOKEN
     }
   }).then(function(user) {
     console.log(user);
   });

})();
