import React from "react";
import  "./Profile.css";
import $ from "jquery";


const Bounce = (props) => {

    (function ($, window, undefined) {
        $.fn.marqueeify = function (options) {
            var settings = $.extend({
                horizontal: true,
                vertical: true,
                speed: 100, // In pixels per second
                container: $(this).parent(),
                bumpEdge: function () {}
            }, options);
            
            return this.each(function () {
                var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
                    $el = $(this);
    
                getSizes = function () {
                    containerWidth = settings.container.outerWidth();
                    containerHeight = settings.container.outerHeight();
                    elWidth = $el.outerWidth();
                    elHeight = $el.outerHeight();
                };
    
                move = {
                    right: function () {
                        $el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.left();
                        }});
                    },
                    left: function () {
                        $el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.right();
                        }});
                    },
                    down: function () {
                        $el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.up();
                        }});
                    },
                    up: function () {
                        $el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.down();
                        }});
                    }
                };
    
                getSizes();
    
                if (settings.horizontal) {
                    move.right();
                }
                if (settings.vertical) {
                    move.down();
                }
    
          // Make that shit responsive!
          $(window).resize( function() {
            getSizes();
          });
            });
        };
    })($, window);
    
    $(document).ready( function() {
    
        $('.marquee').marqueeify({
            speed: 300,
            bumpEdge: function () {
                var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
                $('.marquee .logo').css('fill', newColor);
            }
        });
    });


  return (
    <div class="marquee">
    <svg class = "box" width="153px" height="69px"><path class="logo" d="M66.303,22.207L52.197,1.686c-2.215-3.216-7.225-1.509-7.061,2.399
        c0.15,3.562,1.481,7.332,4.667,11.958c0.004,0.007,0.002,0.015-0.005,0.019c-0.004,0.002-0.009,0.002-0.013,0
        C48.481,15.091,28.833,0.336,5.477,8.192H5.45c-2.578,0.966-3.894,3.075-3.241,5.547c0.604,2.289,2.951,3.663,5.285,3.276
        c4.961-0.826,9.885-1.219,14.726-0.794c4.842,0.425,9.578,1.666,13.988,3.833s8.405,5.233,12.076,8.745
        c4.13,3.946,9.253,12.362,9.253,12.362c0.62,1.101,1.942,1.596,3.133,1.173c1.388-0.497,2.035-2.097,1.513-3.47
        c-1.088-2.87-2.421-5.641-3.982-8.283c-0.005-0.006-0.005-0.014,0.001-0.02c0.005-0.004,0.012-0.005,0.017-0.001
        c1.727,0.65,3.325,1.459,5.215,1.016c1.542-0.362,2.896-1.412,3.524-2.88C67.884,26.566,67.636,24.108,66.303,22.207z"/></svg>
    
        <svg class = "box" width="153px" height="69px"><path class="logo" d="M1.203,44.727l14.185,20.636c2.221,3.226,7.138,1.458,6.986-2.454
        c-0.139-3.579-1.467-7.364-4.668-12.014c-0.01-0.014,0-0.032,0.017-0.022c1.306,0.972,20.96,15.726,44.307,7.871
        c0.009,0.001,0.019,0.001,0.028,0c2.578-0.963,3.887-3.068,3.24-5.543c-0.602-2.288-2.95-3.662-5.282-3.273
        c-4.962,0.833-9.885,1.217-14.728,0.793s-9.578-1.666-13.987-3.831s-8.405-5.235-12.076-8.745
        c-4.128-3.946-9.253-12.362-9.253-12.362c-0.643-1.147-2.043-1.632-3.258-1.127c-1.321,0.555-1.886,2.117-1.38,3.455
        c1.087,2.86,2.416,5.622,3.973,8.256c0.004,0.007,0.002,0.017-0.005,0.021c-0.004,0.002-0.008,0.003-0.013,0.001
        c-1.727-0.65-3.331-1.459-5.215-1.016c-1.542,0.355-2.897,1.41-3.52,2.875C-0.371,40.373-0.125,42.827,1.203,44.727z"/></svg>
    </div>
  );
};

export default Bounce;