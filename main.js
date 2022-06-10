$(document).ready(function() {
    $('button').on('click', function(e) {
        const name = $(this).prev().prev().prev().prev().val();
        const character = $(this).prev().prev().prev().val();
        const adverb = $(this).prev().prev().val();
        const adjective = $(this).prev().val();
        $('#output-box').text(name + ' wanted to meat ' + character + ' ' + adverb + ', but he turned out to be very ' + adjective);
        e.preventDefault();
    });
});