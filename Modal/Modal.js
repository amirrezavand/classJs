(function ($) {
    $.fn.Modal = function (userOptions) {
        var options = $.extend({
            wrapperBgColor: "#000", // color of modal bg
            wrapperOpacity: 0.8,    // opacity of modal bg
            width: 500,             // width of modal in pixel
            entrance: "top",        // fade,top,bottom,right,left,topleft
            speed: 500,              // in ms
            top: 100,               // distance from top
            showEvent: "click",     // all jquery valid events
            showCloseButton: false, // Tamrin
            CloseButtonText: "X",   // Tamrin
            onStart:  "",           // set custom call before popin is inited..
            onFinish: ""            // ..and after it was closed
        }, userOptions);
        var enterCloseBtn=function(modal,wrapper){
            var span=$("<span>").append(options.CloseButtonText).css({
                backgroundColor:"red",
                color:"white",
                padding:"0 6px 2px",
                borderRadius:"3px",
                position:"absolute",
                top:"5px",
                right:"5px",
                cursor:"pointer",
                fontWeight:"700"
            });
            modal.append(span);
            span.click(function(){
                wrapper.fadeOut(options.speed)
                modal.fadeOut(options.speed,function () {
                    if(typeof options.onFinish === 'function')
                        options.onFinish();
                })
            });           
        }
        var enterModal = function(modal,enterMode){
            var wh = $(window).height();
            var ww = $(window).width();
            var topPosition = options.top + "px";
            var leftPosition = (ww - modal.width()) / 2 + "px";

            switch (enterMode) {
                case "fade" :
                    modal.css({top:topPosition,left:leftPosition})
                    modal.fadeIn(options.speed)
                    break;
                case "bottom":
                    modal.css({top:2 * wh ,left:leftPosition,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "left":
                    modal.css({top:topPosition ,left:-1 * ww ,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "right":
                    modal.css({top:topPosition ,left:2 * ww ,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "topleft":
                    modal.css({top:-1 * wh ,left:-1 * ww ,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "topright":
                    modal.css({top:-1 * wh ,left:2 * ww ,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "bottomleft":
                    modal.css({top:2 * wh ,left:-1 * ww ,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "bottomright":
                    modal.css({top:2 * wh ,left:2 * ww ,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
                case "top":
                default :
                    modal.css({top:-1 * wh ,left:leftPosition,display:"block"})
                    modal.animate({top:topPosition,left:leftPosition},options.speed)
                    break;
            }
        }

        $(document).ready(function () {
            var modalButtons = $("a[data-modal],button[data-modal]");
            var wrapper = $("<div>").addClass("ModalWrapper").css({
                backgroundColor: options.wrapperBgColor,
                opacity: options.wrapperOpacity
            });
            modalButtons.each(function(){
                var mBtn = $(this);
                var mBox = $("#"+mBtn.attr("data-modal")).css({width:options.width + "px"});
                
                mBtn.on(options.showEvent,function (ev) {
                    ev.preventDefault();
                    mBox.before(wrapper);

                    mBox.append()
                    if(typeof options.onStart === 'function')
                        options.onStart();

                    wrapper.fadeIn(options.speed);
                    var enterMode = mBox.is("[data-entrance]") ? mBox.attr("data-entrance") : options.entrance;
                    if(options.showCloseButton){
                        enterCloseBtn(mBox,wrapper);
                    }    
                    enterModal(mBox,enterMode);



                    wrapper.click(function () {
                        wrapper.fadeOut(options.speed)
                        mBox.fadeOut(options.speed,function () {
                            if(typeof options.onFinish === 'function')
                                options.onFinish();
                        })
                    })
                })
            })

        })

    }
})(jQuery);