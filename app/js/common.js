$(function() {
    // console.log("Hasta la vista, baby");
    $('.tab__control-link').on('click', function(e){
        e.preventDefault();

        var item = $(this).closest('.tab__controls-item'),
            contentItem = $('.tab__item'),
            itemPosition = item.data('class');

        contentItem.filter('.tab__item_' + itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});