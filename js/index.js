/* 
* @Author: Jouhe
* @Date:   2018-08-13 14:38:25
* @Last Modified time: 2018-08-21 10:35:35
*/

$(document).ready(function(){
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
        var aurl = $(this).attr("date-src");
        $("#myiframe").attr("src",aurl);
    });
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
            $typeGroup.find('.active').removeClass('active');
            $( this ).addClass('active');
        });
    });
});