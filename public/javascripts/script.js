$(function() {

  $('body').on('click', '.button', function() {
    $.ajax({
      url: '/views/index.jade'
    })
            .done(function(data) {

              $('.pictures').html(data);
            });


  });
});
