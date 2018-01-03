$(function () {
    $.makaleAraForm = function () {

        $('#ajax').html(
        '<div class="modalBox transparanBg">' +
            '<div class="container makaleAraForm">' +
                '<div class="row">' +
                    '<div class="col-sm-24 col-md-16 col-md-offset-4 text-left">' +
                    '<div class="panel panel-default">' +
                    '<div class="panel-body">' +
                    '<h5 class="bs-callout bs-callout-primary"> &nbsp; Makalelerde Ara</h5><hr/>' +
                    '<div class="row">' +
                        '<div class="col-xs-24">' +
                            '<form role="form" class="col-xs-24">' +
                                '<fieldset>' +
                                    '<div class="form-group">' +
                                    '<input class="form-control" placeholder="Birşeyler Yazın" name="ara" type="text">' +
                                    '</div>' +
                                '</fieldset>' +
                            '</form>' +
                        '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="panel-footer text-right">' +
                    '<h5 class="btn btn-sm" onclick="$.modalKapat()">Kapat</h5>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'
        );
    }
    $.modalKapat = function () {
        $('#ajax').html('');
        return false;
    };
});