var url = '';
$.ajax({
        type: 'GET',
        url: url,
        // data: {
        // 	q:search
        // },
        dataType: 'json',
        success: function (data) {
        console.log(data);
        
        
        $('#contenu').html(data);
        
        },// fin success
        error: function () {
        alert('An error occurred while loading content.');
        }// fin error
});// fin ajax