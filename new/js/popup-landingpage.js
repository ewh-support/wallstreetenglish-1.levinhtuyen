$(document).ready(function () {
    var date  = new Date();
    console.log(date.getFullYear());
    if (date.getFullYear() >= 2019) {
        if ($.cookie('popup') != 'seen') {
            $.cookie('popup', 'seen', {expires: 1, path: '/'}); //set time
            setTimeout(function () {
                $('#popupTet').modal('show');
                $('.hidden-xs').css({
                    'opacity':'0.2',
                })
            }, 2);
        };
        $("#popupTet").on("hidden.bs.modal", function () {
            $('.hidden-xs').css({
                'opacity':'1',
            })
        });

        $('#popupTet .img-bg-landing').click(function () {
            window.location.replace("/vi/uu-dai-hang-thang.html?src=popup-tet");
        });
        $('#popupTet .modal-content').click(function () {
            window.location.replace("/vi/uu-dai-hang-thang.html?src=popup-tet");
        });

    }
    else {
        if ($.cookie('popup') != 'seen') {
            $.cookie('popup', 'seen', {expires: 1, path: '/'}); //set time
            setTimeout(function () {
                $('#exampleModalLong').modal('show');
                $('.hidden-xs').css({
                    'opacity':'0.2',
                })
            }, 2);
        };
        $("#exampleModalLong").on("hidden.bs.modal", function () {
            $('.hidden-xs').css({
                'opacity':'1',
            })
        });

        $('.img-bg-landing').click(function () {
            window.location.replace("/vi/uu-dai-hang-thang.html?src=popup-iphonexs");
        });
    }

});