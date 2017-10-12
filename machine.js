//ATTENTION: Allow-Control-Allow-Origin chrome extension required!
$(document).ready(function() {

var quoteText;
var authorText;

  function getNewQuote() {
    $.ajax({
      url: 'http://quotes.stormconsultancy.co.uk/random.json',
      dataType: 'json',

      success: function(response) {

        quoteText = response.quote;
        authorText = response.author;
        $('#quote').text(quoteText);
        $('#author').text('said by ' + authorText);
      }
    });
  }

  getNewQuote();

  $('.get-quote').on('click', function(event) {
    event.preventDefault;
    getNewQuote();
  });
  $('.share-quote').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText + '--- author'));
  });
});
