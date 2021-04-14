(function(u,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){var u={duration:1E3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},r="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),y,f={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<
Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||f.svg(a)},num:function(a){return!isNaN(parseInt(a))},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},nul:function(a){return"null"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},
col:function(a){return f.hex(a)||f.rgb(a)||f.hsl(a)}},D=function(){var a={},b={Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a,b){if(0===a||1===a)return a;var d=1-Math.min(b,998)/1E3,g=a/1-1;return-(Math.pow(2,10*g)*Math.sin(2*(g-d/(2*Math.PI)*Math.asin(1))*Math.PI/d))},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,d=4;a<((b=Math.pow(2,--d))-1)/11;);return 1/Math.pow(4,3-d)-7.5625*Math.pow((3*b-2)/22-a,2)}};["Quad",
"Cubic","Quart","Quint","Expo"].forEach(function(a,e){b[a]=function(a){return Math.pow(a,e+2)}});Object.keys(b).forEach(function(c){var e=b[c];a["easeIn"+c]=e;a["easeOut"+c]=function(a,b){return 1-e(1-a,b)};a["easeInOut"+c]=function(a,b){return.5>a?e(2*a,b)/2:1-e(-2*a+2,b)/2};a["easeOutIn"+c]=function(a,b){return.5>a?(1-e(1-2*a,b))/2:(e(2*a-1,b)+1)/2}});a.linear=function(a){return a};return a}(),z=function(a){return f.str(a)?a:a+""},E=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},
F=function(a){if(f.col(a))return!1;try{return document.querySelectorAll(a)}catch(b){return!1}},A=function(a){return a.reduce(function(a,c){return a.concat(f.arr(c)?A(c):c)},[])},t=function(a){if(f.arr(a))return a;f.str(a)&&(a=F(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]},G=function(a,b){return a.some(function(a){return a===b})},R=function(a,b){var c={};a.forEach(function(a){var d=JSON.stringify(b.map(function(b){return a[b]}));c[d]=c[d]||[];c[d].push(a)});
return Object.keys(c).map(function(a){return c[a]})},H=function(a){return a.filter(function(a,c,e){return e.indexOf(a)===c})},B=function(a){var b={},c;for(c in a)b[c]=a[c];return b},v=function(a,b){for(var c in b)a[c]=f.und(a[c])?b[c]:a[c];return a},S=function(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,m){return b+b+c+c+m+m});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"},
T=function(a){a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);var b=parseInt(a[1])/360,c=parseInt(a[2])/100,e=parseInt(a[3])/100;a=function(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};if(0==c)c=e=b=e;else var d=.5>e?e*(1+c):e+c-e*c,g=2*e-d,c=a(g,d,b+1/3),e=a(g,d,b),b=a(g,d,b-1/3);return"rgb("+255*c+","+255*e+","+255*b+")"},p=function(a){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]},I=function(a,b,c){return p(b)?
b:-1<a.indexOf("translate")?p(c)?b+p(c):b+"px":-1<a.indexOf("rotate")||-1<a.indexOf("skew")?b+"deg":b},w=function(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(E(b))||"0"},U=function(a,b){var c=-1<b.indexOf("scale")?1:0,e=a.style.transform;if(!e)return c;for(var d=/(\w+)\((.+?)\)/g,g=[],m=[],f=[];g=d.exec(e);)m.push(g[1]),f.push(g[2]);e=f.filter(function(a,c){return m[c]===b});return e.length?e[0]:c},J=function(a,b){if(f.dom(a)&&G(r,b))return"transform";if(f.dom(a)&&(a.getAttribute(b)||
f.svg(a)&&a[b]))return"attribute";if(f.dom(a)&&"transform"!==b&&w(a,b))return"css";if(!f.nul(a[b])&&!f.und(a[b]))return"object"},K=function(a,b){switch(J(a,b)){case "transform":return U(a,b);case "css":return w(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0},L=function(a,b,c){if(f.col(b))return b=f.rgb(b)?b:f.hex(b)?S(b):f.hsl(b)?T(b):void 0,b;if(p(b))return b;a=p(a.to)?p(a.to):p(a.from);!a&&c&&(a=p(c));return a?b+a:b},M=function(a){var b=/-?\d*\.?\d+/g;return{original:a,numbers:z(a).match(b)?
z(a).match(b).map(Number):[0],strings:z(a).split(b)}},V=function(a,b,c){return b.reduce(function(b,d,g){d=d?d:c[g-1];return b+a[g-1]+d})},W=function(a){a=a?A(f.arr(a)?a.map(t):t(a)):[];return a.map(function(a,c){return{target:a,id:c}})},N=function(a,b,c,e){"transform"===c?(c=a+"("+I(a,b.from,b.to)+")",b=a+"("+I(a,b.to)+")"):(a="css"===c?w(e,a):void 0,c=L(b,b.from,a),b=L(b,b.to,a));return{from:M(c),to:M(b)}},X=function(a,b){var c=[];a.forEach(function(e,d){var g=e.target;return b.forEach(function(b){var l=
J(g,b.name);if(l){var q;q=b.name;var h=b.value,h=t(f.fnc(h)?h(g,d):h);q={from:1<h.length?h[0]:K(g,q),to:1<h.length?h[1]:h[0]};h=B(b);h.animatables=e;h.type=l;h.from=N(b.name,q,h.type,g).from;h.to=N(b.name,q,h.type,g).to;h.round=f.col(q.from)||h.round?1:0;h.delay=(f.fnc(h.delay)?h.delay(g,d,a.length):h.delay)/k.speed;h.duration=(f.fnc(h.duration)?h.duration(g,d,a.length):h.duration)/k.speed;c.push(h)}})});return c},Y=function(a,b){var c=X(a,b);return R(c,["name","from","to","delay","duration"]).map(function(a){var b=
B(a[0]);b.animatables=a.map(function(a){return a.animatables});b.totalDuration=b.delay+b.duration;return b})},C=function(a,b){a.tweens.forEach(function(c){var e=c.from,d=a.duration-(c.delay+c.duration);c.from=c.to;c.to=e;b&&(c.delay=d)});a.reversed=a.reversed?!1:!0},Z=function(a){if(a.length)return Math.max.apply(Math,a.map(function(a){return a.totalDuration}))},O=function(a){var b=[],c=[];a.tweens.forEach(function(a){if("css"===a.type||"transform"===a.type)b.push("css"===a.type?E(a.name):"transform"),
a.animatables.forEach(function(a){c.push(a.target)})});return{properties:H(b).join(", "),elements:H(c)}},aa=function(a){var b=O(a);b.elements.forEach(function(a){a.style.willChange=b.properties})},ba=function(a){O(a).elements.forEach(function(a){a.style.removeProperty("will-change")})},ca=function(a,b){var c=a.path,e=a.value*b,d=function(d){d=d||0;return c.getPointAtLength(1<b?a.value+d:e+d)},g=d(),f=d(-1),d=d(1);switch(a.name){case "translateX":return g.x;case "translateY":return g.y;case "rotate":return 180*
Math.atan2(d.y-f.y,d.x-f.x)/Math.PI}},da=function(a,b){var c=Math.min(Math.max(b-a.delay,0),a.duration)/a.duration,e=a.to.numbers.map(function(b,e){var f=a.from.numbers[e],l=D[a.easing](c,a.elasticity),f=a.path?ca(a,l):f+l*(b-f);return f=a.round?Math.round(f*a.round)/a.round:f});return V(e,a.to.strings,a.from.strings)},P=function(a,b){var c;a.currentTime=b;a.progress=b/a.duration*100;for(var e=0;e<a.tweens.length;e++){var d=a.tweens[e];d.currentValue=da(d,b);for(var f=d.currentValue,m=0;m<d.animatables.length;m++){var l=
d.animatables[m],k=l.id,l=l.target,h=d.name;switch(d.type){case "css":l.style[h]=f;break;case "attribute":l.setAttribute(h,f);break;case "object":l[h]=f;break;case "transform":c||(c={}),c[k]||(c[k]=[]),c[k].push(f)}}}if(c)for(e in y||(y=(w(document.body,"transform")?"":"-webkit-")+"transform"),c)a.animatables[e].target.style[y]=c[e].join(" ");a.settings.update&&a.settings.update(a)},Q=function(a){var b={};b.animatables=W(a.targets);b.settings=v(a,u);var c=b.settings,e=[],d;for(d in a)if(!u.hasOwnProperty(d)&&
"targets"!==d){var g=f.obj(a[d])?B(a[d]):{value:a[d]};g.name=d;e.push(v(g,c))}b.properties=e;b.tweens=Y(b.animatables,b.properties);b.duration=Z(b.tweens)||a.duration;b.currentTime=0;b.progress=0;b.ended=!1;return b},n=[],x=0,ea=function(){var a=function(){x=requestAnimationFrame(b)},b=function(b){if(n.length){for(var e=0;e<n.length;e++)n[e].tick(b);a()}else cancelAnimationFrame(x),x=0};return a}(),k=function(a){var b=Q(a),c={};b.tick=function(a){b.ended=!1;c.start||(c.start=a);c.current=Math.min(Math.max(c.last+
a-c.start,0),b.duration);P(b,c.current);var d=b.settings;d.begin&&c.current>=d.delay&&(d.begin(b),d.begin=void 0);c.current>=b.duration&&(d.loop?(c.start=a,"alternate"===d.direction&&C(b,!0),f.num(d.loop)&&d.loop--):(b.ended=!0,b.pause(),d.complete&&d.complete(b)),c.last=0)};b.seek=function(a){P(b,a/100*b.duration)};b.pause=function(){ba(b);var a=n.indexOf(b);-1<a&&n.splice(a,1)};b.play=function(a){b.pause();a&&(b=v(Q(v(a,b.settings)),b));c.start=0;c.last=b.ended?0:b.currentTime;a=b.settings;"reverse"===
a.direction&&C(b);"alternate"!==a.direction||a.loop||(a.loop=1);aa(b);n.push(b);x||ea()};b.restart=function(){b.reversed&&C(b);b.pause();b.seek(0);b.play()};b.settings.autoplay&&b.play();return b};k.version="1.1.1";k.speed=1;k.list=n;k.remove=function(a){a=A(f.arr(a)?a.map(t):t(a));for(var b=n.length-1;0<=b;b--)for(var c=n[b],e=c.tweens,d=e.length-1;0<=d;d--)for(var g=e[d].animatables,k=g.length-1;0<=k;k--)G(a,g[k].target)&&(g.splice(k,1),g.length||e.splice(d,1),e.length||c.pause())};k.easings=D;
k.getValue=K;k.path=function(a){a=f.str(a)?F(a)[0]:a;return{path:a,value:a.getTotalLength()}};k.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return k});



//identify the toggle switch HTML element
var toggleSwitch = document.querySelector('#check');
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        // localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        // box.setAttribute('style','background-color:white;')
        ball.setAttribute('style','transform:translatex(100%);')
        toggleSwitch.checked = true;
    } else {
        // localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        // box.setAttribute('style','background-color:black;')
        ball.setAttribute('style','transform:translatex(0%);')
        toggleSwitch.checked = false;
    }
}

//listener for changing themes
toggleSwitch.addEventListener('change', switchTheme, false);



function setColorScheme() {
  var isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  var isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
  var isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
  var hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
  window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())

  if(isDarkMode) activateDarkMode()
  if(isLightMode) activateLightMode()
  if(isNotSpecified || hasNoSupport) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
    now = new Date();
    hour = now.getHours();
    if (hour < 4 || hour >= 16) {
      activateDarkMode();
    }
  }
}
setColorScheme();
window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e => e.matches && activateDarkMode()
);
window.matchMedia("(prefers-color-scheme: light)").addListener(
    e => e.matches && activateLightMode()
);
function activateDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
    ball.setAttribute('style','transform:translatex(100%);')
}
function activateLightMode() {
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
    ball.setAttribute('style','transform:translatex(0%);')
}


if($('body').hasClass('home')) {
    (function ($) {
      "use strict"; // Start of use strict
          $(document).ready(function () {
            setTimeout(init, 1000);
            function init() {
                document.body.classList.remove('loading');

                var intro1 = new RevealFx(document.querySelector('#intro-one'), {
                    revealSettings : {
                        bgcolor: '#FFDE43',
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
                intro1.reveal();
                var intro2 = new RevealFx(document.querySelector('#intro-two'), {
                    revealSettings : {
                        bgcolor: '#FFDE43',
                        delay: 250,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
                intro2.reveal();
                var intro3 = new RevealFx(document.querySelector('#intro-three'), {
                    revealSettings : {
                        bgcolor: '#FFDE43',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
                intro3.reveal();

                var scrollElemToWatch_1 = document.getElementById('image-one');
                var scrollElemToWatch_2 = document.getElementById('title-one');
                var scrollElemToWatch_3 = document.getElementById('text-one');
                var watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300);
                var backgroundColor = "#FFDE43";
                var rev1 = new RevealFx(scrollElemToWatch_1, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });
                var rev2 = new RevealFx(scrollElemToWatch_2, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            delay: 500,
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });
                var rev3 = new RevealFx(scrollElemToWatch_3, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            delay: 500,
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });

                watcher_1.enterViewport(function() {
                    rev1.reveal();
                    rev2.reveal();
                    rev3.reveal();
                    watcher_1.destroy();
                });

                var scrollElemToWatch_4 = document.getElementById('image-two');
                var scrollElemToWatch_5 = document.getElementById('title-two');
                var scrollElemToWatch_6 = document.getElementById('text-two');
                var watcher_2 = scrollMonitor.create(scrollElemToWatch_4, -300);
                var rev4 = new RevealFx(scrollElemToWatch_4, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });
                var rev5 = new RevealFx(scrollElemToWatch_5, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            delay: 500,
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });
                var rev6 = new RevealFx(scrollElemToWatch_6, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            delay: 500,
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });

                watcher_2.enterViewport(function() {
                    rev4.reveal();
                    rev5.reveal();
                    rev6.reveal();
                    watcher_2.destroy();
                });

                var scrollElemToWatch_7 = document.getElementById('image-three');
                var scrollElemToWatch_8 = document.getElementById('title-three');
                var scrollElemToWatch_9 = document.getElementById('text-three');
                var watcher_3 = scrollMonitor.create(scrollElemToWatch_7, -300);
                var rev7 = new RevealFx(scrollElemToWatch_7, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });
                var rev8 = new RevealFx(scrollElemToWatch_8, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            delay: 500,
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });
                var rev9 = new RevealFx(scrollElemToWatch_9, {
                        revealSettings : {
                            bgcolor: backgroundColor,
                            direction: 'lr',
                            delay: 500,
                            onCover: function(contentEl, revealerEl) {
                                contentEl.style.opacity = 1;
                            }
                        }
                    });

                watcher_3.enterViewport(function() {
                    rev7.reveal();
                    rev8.reveal();
                    rev9.reveal();
                    watcher_3.destroy();
                });
            }

          });
    })(jQuery); // End of use strict
}


if($('body').hasClass('home')) {
    // main js for swipe style transitions
    ;(function(window) {

        'use strict';

        // Helper vars and functions.
        function extend(a, b) {
            for(var key in b) {
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        function createDOMEl(type, className, content) {
            var el = document.createElement(type);
            el.className = className || '';
            el.innerHTML = content || '';
            return el;
        }

        /**
         * RevealFx obj.
         */
        function RevealFx(el, options) {
            this.el = el;
            this.options = extend({}, this.options);
            extend(this.options, options);
            this._init();
        }

        /**
         * RevealFx options.
         */
        RevealFx.prototype.options = {
            // If true, then the content will be hidden until it´s "revealed".
            isContentHidden: true,
            // The animation/reveal settings. This can be set initially or passed when calling the reveal method.
            revealSettings: {
                // Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
                direction: 'lr',
                // Revealer´s background color.
                bgcolor: '#f0f0f0',
                // Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
                duration: 500,
                // Animation easing. This is the easing to "cover" and also "uncover" the element.
                easing: 'easeInOutQuint',
                // percentage-based value representing how much of the area should be left covered.
                coverArea: 0,
                // Callback for when the revealer is covering the element (halfway through of the whole animation).
                onCover: function(contentEl, revealerEl) { return false; },
                // Callback for when the animation starts (animation start).
                onStart: function(contentEl, revealerEl) { return false; },
                // Callback for when the revealer has completed uncovering (animation end).
                onComplete: function(contentEl, revealerEl) { return false; }
            }
        };

        /**
         * Init.
         */
        RevealFx.prototype._init = function() {
            this._layout();
        };

        /**
         * Build the necessary structure.
         */
        RevealFx.prototype._layout = function() {
            var position = getComputedStyle(this.el).position;
            if( position !== 'fixed' && position !== 'absolute' && position !== 'relative' ) {
                this.el.style.position = 'relative';
            }
            // Content element.
            this.content = createDOMEl('div', 'block-revealer__content', this.el.innerHTML);
            if( this.options.isContentHidden) {
                this.content.style.opacity = 0;
            }
            // Revealer element (the one that animates)
            this.revealer = createDOMEl('div', 'block-revealer__element');
            this.el.classList.add('block-revealer');
            this.el.innerHTML = '';
            this.el.appendChild(this.content);
            this.el.appendChild(this.revealer);
        };

        /**
         * Gets the revealer element´s transform and transform origin.
         */
        RevealFx.prototype._getTransformSettings = function(direction) {
            var val, origin, origin_2;

            switch (direction) {
                case 'lr' :
                    val = 'scale3d(0,1,1)';
                    origin = '0 50%';
                    origin_2 = '100% 50%';
                    break;
                case 'rl' :
                    val = 'scale3d(0,1,1)';
                    origin = '100% 50%';
                    origin_2 = '0 50%';
                    break;
                case 'tb' :
                    val = 'scale3d(1,0,1)';
                    origin = '50% 0';
                    origin_2 = '50% 100%';
                    break;
                case 'bt' :
                    val = 'scale3d(1,0,1)';
                    origin = '50% 100%';
                    origin_2 = '50% 0';
                    break;
                default :
                    val = 'scale3d(0,1,1)';
                    origin = '0 50%';
                    origin_2 = '100% 50%';
                    break;
            };

            return {
                // transform value.
                val: val,
                // initial and halfway/final transform origin.
                origin: {initial: origin, halfway: origin_2},
            };
        };

        /**
         * Reveal animation. If revealSettings is passed, then it will overwrite the options.revealSettings.
         */
        RevealFx.prototype.reveal = function(revealSettings) {
            // Do nothing if currently animating.
            if( this.isAnimating ) {
                return false;
            }
            this.isAnimating = true;

            // Set the revealer element´s transform and transform origin.
            var defaults = { // In case revealSettings is incomplete, its properties deafault to:
                    duration: 500,
                    easing: 'easeInOutQuint',
                    delay: 0,
                    bgcolor: '#f0f0f0',
                    direction: 'lr',
                    coverArea: 0
                },
                revealSettings = revealSettings || this.options.revealSettings,
                direction = revealSettings.direction || defaults.direction,
                transformSettings = this._getTransformSettings(direction);

            this.revealer.style.WebkitTransform = this.revealer.style.transform =  transformSettings.val;
            this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin =  transformSettings.origin.initial;

            // Set the Revealer´s background color.
            this.revealer.style.backgroundColor = revealSettings.bgcolor || defaults.bgcolor;

            // Show it. By default the revealer element has opacity = 0 (CSS).
            this.revealer.style.opacity = 1;

            // Animate it.
            var self = this,
                // Second animation step.
                animationSettings_2 = {
                    complete: function() {
                        self.isAnimating = false;
                        if( typeof revealSettings.onComplete === 'function' ) {
                            revealSettings.onComplete(self.content, self.revealer);
                        }
                    }
                },
                // First animation step.
                animationSettings = {
                    delay: revealSettings.delay || defaults.delay,
                    complete: function() {
                        self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = transformSettings.origin.halfway;
                        if( typeof revealSettings.onCover === 'function' ) {
                            revealSettings.onCover(self.content, self.revealer);
                        }
                        anime(animationSettings_2);
                    }
                };

            animationSettings.targets = animationSettings_2.targets = this.revealer;
            animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
            animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;

            var coverArea = revealSettings.coverArea || defaults.coverArea;
            if( direction === 'lr' || direction === 'rl' ) {
                animationSettings.scaleX = [0,1];
                animationSettings_2.scaleX = [1,coverArea/100];
            }
            else {
                animationSettings.scaleY = [0,1];
                animationSettings_2.scaleY = [1,coverArea/100];
            }

            if( typeof revealSettings.onStart === 'function' ) {
                revealSettings.onStart(self.content, self.revealer);
            }
            anime(animationSettings);
        };

        window.RevealFx = RevealFx;

    })(window);
}



//scrollMonitor.js
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),u=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(u=a.watchers.length;u--;)a.watchers[u].recalculateLocation();p=a.documentHeight}}function c(){for(w=a.watchers.length;w--;)a.watchers[w].update();for(w=a.watchers.length;w--;)a.watchers[w].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,u,w;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener):this.item.addEventListener("scroll",this.DOMListener),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t),this.updateAndTriggerWatchers(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=u},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)T=t[E],T.callback.call(s,e,s),T.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||w.top,bottom:i.bottom||w.bottom}:this.offsets=w,this.callbacks={};for(var d=0,f=u.length;d<f;d++)s.callbacks[u[d]]=[];this.locked=!1;var m,v,b,I,E,T;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=u.length;i<o;i++)e.callbacks[u[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
//# sourceMappingURL=scrollMonitor.js.map

(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["Swup"]=n();else t["Swup"]=n()})(window,function(){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.Link=t.markSwupElements=t.getCurrentUrl=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=undefined;var r=n(8);var i=w(r);var a=n(9);var o=w(a);var s=n(10);var u=w(s);var l=n(11);var c=w(l);var f=n(12);var d=w(f);var h=n(13);var p=w(h);var v=n(14);var g=w(v);var m=n(15);var y=w(m);function w(e){return e&&e.__esModule?e:{default:e}}var b=t.classify=i.default;var E=t.createHistoryRecord=o.default;var P=t.getDataFromHtml=u.default;var _=t.fetch=c.default;var k=t.transitionEnd=d.default;var S=t.getCurrentUrl=p.default;var O=t.markSwupElements=g.default;var j=t.Link=y.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=t.query=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof t!=="string"){return t}return n.querySelector(t)};var i=t.queryAll=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof t!=="string"){return t}return Array.prototype.slice.call(n.querySelectorAll(t))}},function(e,t,n){"use strict";var r=n(3);var i=a(r);function a(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var a=n(4);var o=M(a);var s=n(6);var u=M(s);var l=n(7);var c=M(l);var f=n(16);var d=M(f);var h=n(17);var p=M(h);var v=n(18);var g=M(v);var m=n(19);var y=M(m);var w=n(20);var b=M(w);var E=n(21);var P=M(E);var _=n(22);var k=M(_);var S=n(23);var O=n(1);var j=n(0);function M(e){return e&&e.__esModule?e:{default:e}}function H(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var L=function(){function e(t){H(this,e);var n={animateHistoryBrowsing:false,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:true,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function e(t){return!(t.state&&t.state.source==="swup")}};var i=r({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]};this.scrollToElement=null;this.preloadPromise=null;this.options=i;this.plugins=[];this.transition={};this.delegatedListeners={};this.boundPopStateHandler=this.popStateHandler.bind(this);this.cache=new u.default;this.cache.swup=this;this.loadPage=c.default;this.renderPage=d.default;this.triggerEvent=p.default;this.on=g.default;this.off=y.default;this.updateTransition=b.default;this.getAnimationPromises=P.default;this.getPageData=k.default;this.log=function(){};this.use=S.use;this.unuse=S.unuse;this.findPlugin=S.findPlugin;this.enable()}i(e,[{key:"enable",value:function e(){var t=this;if(typeof Promise==="undefined"){console.warn("Promise is not supported");return}this.delegatedListeners.click=(0,o.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this));window.addEventListener("popstate",this.boundPopStateHandler);var n=(0,j.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers);n.url=n.responseURL=(0,j.getCurrentUrl)();if(this.options.cache){this.cache.cacheUrl(n)}(0,j.markSwupElements)(document.documentElement,this.options.containers);this.options.plugins.forEach(function(e){t.use(e)});window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href);this.triggerEvent("enabled");document.documentElement.classList.add("swup-enabled");this.triggerEvent("pageView")}},{key:"destroy",value:function e(){var t=this;this.delegatedListeners.click.destroy();window.removeEventListener("popstate",this.boundPopStateHandler);this.cache.empty();this.options.plugins.forEach(function(e){t.unuse(e)});(0,O.queryAll)("[data-swup]").forEach(function(e){e.removeAttribute("data-swup")});this.off();this.triggerEvent("disabled");document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function e(t){if(!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.altKey){if(t.button===0){this.triggerEvent("clickLink",t);t.preventDefault();var n=new j.Link(t.delegateTarget);if(n.getAddress()==(0,j.getCurrentUrl)()||n.getAddress()==""){if(n.getHash()!=""){this.triggerEvent("samePageWithHash",t);var r=document.querySelector(n.getHash());if(r!=null){history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else{console.warn("Element for offset not found ("+n.getHash()+")")}}else{this.triggerEvent("samePage",t)}}else{if(n.getHash()!=""){this.scrollToElement=n.getHash()}var i=t.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:n.getAddress(),customTransition:i},false)}}}else{this.triggerEvent("openPageInNewTab",t)}}},{key:"popStateHandler",value:function e(t){if(this.options.skipPopStateHandling(t))return;var n=new j.Link(t.state?t.state.url:window.location.pathname);if(n.getHash()!==""){this.scrollToElement=n.getHash()}else{t.preventDefault()}this.triggerEvent("popState",t);this.loadPage({url:n.getAddress()},t)}}]);return e}();t.default=L},function(e,t,n){var r=n(5);function i(e,t,n,r,i){var o=a.apply(this,arguments);e.addEventListener(n,o,i);return{destroy:function(){e.removeEventListener(n,o,i)}}}function a(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t);if(n.delegateTarget){i.call(e,n)}}}e.exports=i},function(e,t){var n=9;if(typeof Element!=="undefined"&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if(typeof e.matches==="function"&&e.matches(t)){return e}e=e.parentNode}}e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var a=t.Cache=function(){function e(){i(this,e);this.pages={};this.last=null}r(e,[{key:"cacheUrl",value:function e(t){if(t.url in this.pages===false){this.pages[t.url]=t}this.last=this.pages[t.url];this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function e(t){return this.pages[t]}},{key:"getCurrentPage",value:function e(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function e(t){return t in this.pages}},{key:"empty",value:function e(){this.pages={};this.last=null;this.swup.log("Cache cleared")}},{key:"remove",value:function e(t){delete this.pages[t]}}]);return e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=n(0);var a=function e(t,n){var a=this;var o=[],s=void 0;var u=function e(){a.triggerEvent("animationOutStart");document.documentElement.classList.add("is-changing");document.documentElement.classList.add("is-leaving");document.documentElement.classList.add("is-animating");if(n){document.documentElement.classList.add("is-popstate")}document.documentElement.classList.add("to-"+(0,i.classify)(t.url));o=a.getAnimationPromises("out");Promise.all(o).then(function(){a.triggerEvent("animationOutDone")});if(!n){var r=void 0;if(a.scrollToElement!=null){r=t.url+a.scrollToElement}else{r=t.url}(0,i.createHistoryRecord)(r)}};this.triggerEvent("transitionStart",n);if(t.customTransition!=null){this.updateTransition(window.location.pathname,t.url,t.customTransition);document.documentElement.classList.add("to-"+(0,i.classify)(t.customTransition))}else{this.updateTransition(window.location.pathname,t.url)}if(!n||this.options.animateHistoryBrowsing){u()}else{this.triggerEvent("animationSkipped")}if(this.cache.exists(t.url)){s=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else{if(!this.preloadPromise||this.preloadPromise.route!=t.url){s=new Promise(function(e,n){(0,i.fetch)(r({},t,{headers:a.options.requestHeaders}),function(r){if(r.status===500){a.triggerEvent("serverError");n(t.url);return}else{var i=a.getPageData(r);if(i!=null){i.url=t.url}else{n(t.url);return}a.cache.cacheUrl(i);a.triggerEvent("pageLoaded")}e()})})}else{s=this.preloadPromise}}Promise.all(o.concat([s])).then(function(){a.renderPage(a.cache.getPage(t.url),n);a.preloadPromise=null}).catch(function(e){a.options.skipPopStateHandling=function(){window.location=e;return true};window.history.go(-1)})};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t){var n=t.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");if(n[0]==="/")n=n.splice(1);if(n==="")n="homepage";return n};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t){window.history.pushState({url:t||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,t||window.location.href.split(window.location.hostname)[1])};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var i=n(1);var a=function e(t,n){var a=document.createElement("html");a.innerHTML=t;var o=[];var s=function e(t){if(a.querySelector(n[t])==null){return{v:null}}else{(0,i.queryAll)(n[t]).forEach(function(e,r){(0,i.queryAll)(n[t],a)[r].setAttribute("data-swup",o.length);o.push((0,i.queryAll)(n[t],a)[r].outerHTML)})}};for(var u=0;u<n.length;u++){var l=s(u);if((typeof l==="undefined"?"undefined":r(l))==="object")return l.v}var c={title:a.querySelector("title").innerText,pageClass:a.querySelector("body").className,originalContent:t,blocks:o};a.innerHTML="";a=null;return c};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var i={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}};var a=r({},i,t);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===4){if(o.status!==500){n(o)}else{n(o)}}};o.open(a.method,a.url,true);Object.keys(a.headers).forEach(function(e){o.setRequestHeader(e,a.headers[e])});o.send(a.data);return o};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(){var t=document.createElement("div");var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var r in n){if(t.style[r]!==undefined){return n[r]}}return false};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(){return window.location.pathname+window.location.search};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(1);var i=function e(t,n){var i=0;var a=function e(a){if(t.querySelector(n[a])==null){console.warn("Element "+n[a]+" is not in current page.")}else{(0,r.queryAll)(n[a]).forEach(function(e,o){(0,r.queryAll)(n[a],t)[o].setAttribute("data-swup",i);i++})}};for(var o=0;o<n.length;o++){a(o)}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var a=function(){function e(t){i(this,e);if(t instanceof Element||t instanceof SVGElement){this.link=t}else{this.link=document.createElement("a");this.link.href=t}}r(e,[{key:"getPath",value:function e(){var t=this.link.pathname;if(t[0]!=="/"){t="/"+t}return t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;if(this.link.getAttribute("xlink:href")){t=this.link.getAttribute("xlink:href")}if(t[0]!=="/"){t="/"+t}return t}},{key:"getHash",value:function e(){return this.link.hash}}]);return e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=n(1);var a=n(0);var o=function e(t,n){var i=this;document.documentElement.classList.remove("is-leaving");var o=new a.Link(t.responseURL);if(window.location.pathname!==o.getPath()){window.history.replaceState({url:o.getPath(),random:Math.random(),source:"swup"},document.title,o.getPath());this.cache.cacheUrl(r({},t,{url:o.getPath()}))}if(!n||this.options.animateHistoryBrowsing){document.documentElement.classList.add("is-rendering")}this.triggerEvent("willReplaceContent",n);for(var s=0;s<t.blocks.length;s++){document.body.querySelector('[data-swup="'+s+'"]').outerHTML=t.blocks[s]}document.title=t.title;this.triggerEvent("contentReplaced",n);this.triggerEvent("pageView",n);if(!this.options.cache){this.cache.empty()}setTimeout(function(){if(!n||i.options.animateHistoryBrowsing){i.triggerEvent("animationInStart");document.documentElement.classList.remove("is-animating")}},10);if(!n||this.options.animateHistoryBrowsing){var u=this.getAnimationPromises("in");Promise.all(u).then(function(){i.triggerEvent("animationInDone");i.triggerEvent("transitionEnd",n);document.documentElement.className.split(" ").forEach(function(e){if(new RegExp("^to-").test(e)||e==="is-changing"||e==="is-rendering"||e==="is-popstate"){document.documentElement.classList.remove(e)}})})}else{this.triggerEvent("transitionEnd",n)}this.scrollToElement=null};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t,n){this._handlers[t].forEach(function(e){try{e(n)}catch(e){console.error(e)}});var r=new CustomEvent("swup:"+t,{detail:t});document.dispatchEvent(r)};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t,n){if(this._handlers[t]){this._handlers[t].push(n)}else{console.warn("Unsupported event "+t+".")}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t,n){var r=this;if(t!=null){if(n!=null){if(this._handlers[t]&&this._handlers[t].filter(function(e){return e===n}).length){var i=this._handlers[t].filter(function(e){return e===n})[0];var a=this._handlers[t].indexOf(i);if(a>-1){this._handlers[t].splice(a,1)}}else{console.warn("Handler for event '"+t+"' no found.")}}else{this._handlers[t]=[]}}else{Object.keys(this._handlers).forEach(function(e){r._handlers[e]=[]})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function e(t,n,r){this.transition={from:t,to:n,custom:r}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(1);var i=n(0);var a=function e(){var t=[];var n=(0,r.queryAll)(this.options.animationSelector);n.forEach(function(e){var n=new Promise(function(t){e.addEventListener((0,i.transitionEnd)(),function(n){if(e==n.target){t()}})});t.push(n)});return t};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(0);var i=function e(t){var n=t.responseText;var i=(0,r.getDataFromHtml)(n,this.options.containers);if(i){i.responseURL=t.responseURL?t.responseURL:window.location.href}else{console.warn("Received page is invalid.");return null}return i};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=t.use=function e(t){if(!t.isSwupPlugin){console.warn("Not swup plugin instance "+t+".");return}this.plugins.push(t);t.swup=this;if(typeof t._beforeMount==="function"){t._beforeMount()}t.mount();return this.plugins};var i=t.unuse=function e(t){var n=void 0;if(typeof t==="string"){n=this.plugins.find(function(e){return t===e.name})}else{n=t}if(!n){console.warn("No such plugin.");return}n.unmount();if(typeof n._afterUnmount==="function"){n._afterUnmount()}var r=this.plugins.indexOf(n);this.plugins.splice(r,1);return this.plugins};var a=t.findPlugin=function e(t){return this.plugins.find(function(e){return t===e.name})}}])});
