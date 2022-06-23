$(function(){
    $(".chatlistbox li").mouseover(function(){
            $(this).find('i').addClass("fa-ellipsis-vertical fa-solid")
    }).mouseout(function(){
            $(this).find('i').removeClass("fa-ellipsis-vertical fa-solid")
    })
})

// $("this").addClass("fa-solid")
// $("this").addClass("fa-ellipsis-vertical")