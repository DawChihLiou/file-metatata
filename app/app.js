/*global $*/
$(function() {
    'use strict';
    
    var $form = $('form');
    var $output = $('.output');
    var $spinner = $('.spin');
    
    $form.on('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var formData = new FormData($(this)[0]);
        
        $output.addClass('hidden');
        $spinner.removeClass('hidden');
        
        $.ajax({
            url: '/api/upload/',
            method: 'post',
            data: formData,
            contentType: false,
            processData: false
        })
        .done(function(data) {
            $output.text('File Size: ' + data.size);
        })
        .fail(function(err) {
           console.error(err);
           $output.text(err.message)
        })
        .always(function() {
            $output.removeClass('hidden');
            $spinner.addClass('hidden');
        });
    });
});