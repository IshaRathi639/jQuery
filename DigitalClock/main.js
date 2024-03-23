$(document).ready(function(){
    // make wo function to add and remove the class in the span 
    function add(){
        $('.copied').addClass('bounce-effect');
    }
    function remove(){
        $('.copied').removeClass('bounce-effect');
    }

    //call the function and copy the text on button click
    $('.copy-btn').click(function(){
        $('.text-field').select();
        document.execCommand('copy');
        add();
        setTimeout(remove,800)
    });
});