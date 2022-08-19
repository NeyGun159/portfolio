$(function(){
    $('.css-selected').on('click', function(){
        $('.portfolio__nav-list-item, .portfolio__card-list').removeClass('active')
        $('.css-selected, .css-list').toggleClass('active')
    })
    $('.react-selected').on('click', function(){
        $('.portfolio__nav-list-item, .portfolio__card-list').removeClass('active')
        $('.react-selected, .react-list').toggleClass('active')
    })
    $('.api-selected').on('click', function(){
        $('.portfolio__nav-list-item, .portfolio__card-list').removeClass('active')
        $('.api-selected, .api-list').toggleClass('active')
    })
    $('.all-selected').on('click', function(){
        $('.portfolio__nav-list-item, .portfolio__card-list').removeClass('active')
        $('.all-selected, .all-list').toggleClass('active')
    })
})