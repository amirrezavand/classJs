(function($){
    $.fn.closable=function(userOptions){
        var options=$.extend({
            animation:"fadeOut",//hide,fadeOut,slideUp
            closeIconUrl:""
        },userOptions);
        $(this).each(function(){
            var ele=$(this);
            var pos=ele.css('position');
            if(!pos||pos=="static"){
                ele.css({position:"relative"});
            }
            var closeBtn=$("<span>").attr("class","closeBtn");
            closeBtn.click(function(){
                switch(options.animation){
                    case "hide":
                        $(this).parent().hide();
                        break;
                    case "slideUp":
                        $(this).parent().slideUp();
                        break;
                    case "fadeOut":
                    default:
                        $(this).parent().fadeOut();
                }
                
            });
            if(options.closeIconUrl){
                closeBtn.css("background-image","url("+options.closeIconUrl+")");

            }
            ele.append(closeBtn);
        })
    }
})(jQuery)