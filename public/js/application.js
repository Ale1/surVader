$(document).ready(function() {
  $('.left a.my_surveys').on('click', function(e){
    e.preventDefault();
    $('#results-container').html('');
    var url = this.href+"/results";
    console.log(url);
    $.ajax({
      type: "GET",
      url: url
    }).done(function(server_response){
      $('#results-container').append(server_response);
    }).fail(function(){console.log('wah wah');
    });
  });
});
