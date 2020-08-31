(function ($) {
    $.fn.tooltip = function (userOptions) {
        var options = $.extend({
            width: 200      // pixel
        }, userOptions);
        this.each(function () {
            var elm = $(this);
            var ttWidth = options.width;
            if(elm.is("[data-ttw]")){
                ttWidth = elm.attr("data-ttw")
            }
            var ttBox = $("<div>").attr("class", "tooltipBox").css({width: ttWidth + "px"});

            if(elm.is("[data-ttbg]")){
                ttBox.css({backgroundColor:elm.attr("data-ttbg")})
            }

            elm.hover(function(){   // hoverIn function
                if($(this).is("[title]")){
                    ttBox.html($(this).attr("title"))
                    $(document.body).append(ttBox)

                    $(this).data("titleData",$(this).attr("title"));
                    $(this).removeAttr('title')

                    var elmOffset = $(this).offset();
                    var ttBottom = $(window).height() - elmOffset.top + 10;
                    var ttLeft = elmOffset.left - ttWidth/2;
                    ttBox.css({bottom:ttBottom,left:ttLeft})
                    ttBox.fadeIn();
                }
            },function(){           // hoverOut function
                $(this).attr("title",$(this).data("titleData"))
                ttBox.fadeOut(300,function(){
                    ttBox.remove();
                });
            })
        })
    }
})(jQuery)