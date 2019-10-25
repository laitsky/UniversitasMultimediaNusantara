$(document).ready(function () {
    let orderNumber = 1;

    $('.btnDetails').on('click', function () {
        let productModal = $('#productModal');

        let productPicture = $(this).closest('div.photo').find('#image').attr('src');
        let productName = $(this).closest('div.info').find('#name').text();
        let productPrice = $(this).closest('div.info').find('#price').text();
        let productRating = $(this).closest('div.info').find('#rating').html();

        $('div.modal-body #image').attr('src', productPicture);
        $('div.modal-body #name').text(productName);
        $('div.modal-body #price').text(productPrice);
        $('div.modal-body #rating').html(productRating);
        productModal.modal('show');
    });

    $('.btnAdd').on('click', function () {
        $("html, body").animate({
            scrollTop: $(document).height() - $(window).height()
        });

        $('#noOrderText').remove();

        let productName = $(this).closest('div.info').find('#name').text();
        let productPrice = $(this).closest('div.info').find('#price').text();
        let productRating = $(this).closest('div.info').find('#rating').html();
        let newRow = '<tr><td scope="col">' + orderNumber + '</td>' +
            '<td>' + productName + '</td>' +
            '<td>' + productPrice + '</td>' +
            '<td>' + productRating + '</td></tr>';

        $('#orderTable').children('tbody').append(newRow);
        orderNumber++;
        return false;
    });

    $('.btnTop').on('click', function () {
        $("html, body").animate({
            scrollTop: $(window).height() - $(document).height()
        });
    })
});