function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function load_game(path){
    $.ajax({
        url:  path +"/" +$('#order_game :selected').val(),
        dataType: "json",
        type: 'POST',
        success: function (data) {
            $('#control_order_clips').text(data.pricePerClip);
            $('#order_clips').attr('data-price', data.pricePerClip);

            $('#control_order_mt_opt1').text(data.price3dMt);
            $('#order_mt_opt1').attr('data-price', data.price3dMt);

            $('#control_order_mt_opt2').text(data.price2dMt);
            $('#order_mt_opt2').attr('data-price', data.price2dMt);

            $('#control_order_cine_opt1').text(data.priceCinematics);
            $('#order_cine_opt1').attr('data-price', data.priceCinematics);
        },

        error: function (e, e2, e3) {
            console.log(e, e2, e3);
        }
    });
}

function check_price(){
    setTimeout(function(){
        let total = parseInt($('#order_game :selected').attr('data-price'))
            + parseInt(($('#order_clips').attr('data-price') * $('#order_clips').val()))
            + parseInt($('#order_mt_opt1').is(':checked') ? $('#order_mt_opt1').attr('data-price') : 0)
            + parseInt($('#order_mt_opt2').is(':checked') ? $('#order_mt_opt2').attr('data-price') : 0)
            + parseInt($('#order_cine_opt1').is(':checked') ? $('#order_cine_opt1').attr('data-price') : 0)
            + parseInt($('#order_project_opt1').is(':checked') ? $('#order_project_opt1').attr('data-price') : 0);

        $('#total_price').text("Total price : "+total +"€");
    }, 250);
}

function check_clip_number(context){
    context.val() > 25 ? context.val("25") : context.val() < 1 ? context.val("1") : false;
}

function open_modal(id){
    $('#'+id).modal('show');
}

function force_gc(){
    setTimeout(function(){
        grecaptcha.render('capt', {
            'sitekey' : '6LcBk2QaAAAAAG4Zkd5BZn2ezunyTkOwI1YpFT8O'
        });
    }, 1500);

}