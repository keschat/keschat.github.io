/* jquery.scrolly v1.0.0-dev | (c) @ajlkn | MIT licensed */ (function(e1) {
    function u1(s, o) {
        var u, a, f;
        if ((u = e1(s))[t1] == 0) return n;
        a = u[i1]()[r];
        switch(o.anchor){
            case "middle":
                f = a - (e1(window).height() - u.outerHeight()) / 2;
                break;
            default:
            case r:
                f = Math.max(a, 0);
        }
        return typeof o[i1] == "function" ? f -= o[i1]() : f -= o[i1], f;
    }
    var t1 = "length", n = null, r = "top", i1 = "offset", s1 = "click.scrolly", o1 = e1(window);
    e1.fn.scrolly = function(i) {
        var o, a, f, l, c = e1(this);
        if (this[t1] == 0) return c;
        if (this[t1] > 1) {
            for(o = 0; o < this[t1]; o++)e1(this[o]).scrolly(i);
            return c;
        }
        l = n, f = c.attr("href");
        if (f.charAt(0) != "#" || f[t1] < 2) return c;
        a = jQuery.extend({
            anchor: r,
            easing: "swing",
            offset: 0,
            parent: e1("body,html"),
            pollOnce: !1,
            speed: 1e3
        }, i), a.pollOnce && (l = u1(f, a)), c.off(s1).on(s1, function(e) {
            var t = l !== n ? l : u1(f, a);
            t !== n && (e.preventDefault(), a.parent.stop().animate({
                scrollTop: t
            }, a.speed, a.easing));
        });
    };
})(jQuery);

//# sourceMappingURL=index.bd0996c1.js.map
