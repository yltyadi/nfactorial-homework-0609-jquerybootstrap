$(document).ready(function() {
    $('button').on('click', function(e) {
        const imgWidth = $(this).prev().prev().prev().val();
        const imgHeight = $(this).prev().prev().val();
        const imgColor = $(this).prev().val();
        const result = (imgWidth * imgHeight * imgColor) / 1024;
        $('#calculation-output').text('Size: ' + result + ' KB');
        e.preventDefault();
    });
});