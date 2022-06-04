/* jquery.scrollex v0.2.1 | (c) @ajlkn | github.com/ajlkn/jquery.scrollex | MIT licensed */ !function(t1) {
    function e1(t, e, n) {
        return "string" == typeof t && ("%" == t.slice(-1) ? t = parseInt(t.substring(0, t.length - 1)) / 100 * e : "vh" == t.slice(-2) ? t = parseInt(t.substring(0, t.length - 2)) / 100 * n : "px" == t.slice(-2) && (t = parseInt(t.substring(0, t.length - 2)))), t;
    }
    var n1 = t1(window), i1 = 1, o1 = {};
    n1.on("scroll", function() {
        var e = n1.scrollTop();
        t1.map(o1, function(t) {
            window.clearTimeout(t.timeoutId), t.timeoutId = window.setTimeout(function() {
                t.handler(e);
            }, t.options.delay);
        });
    }).on("load", function() {
        n1.trigger("scroll");
    }), jQuery.fn.scrollex = function(l1) {
        var s1 = t1(this);
        if (0 == this.length) return s1;
        if (this.length > 1) {
            for(var r = 0; r < this.length; r++)t1(this[r]).scrollex(l1);
            return s1;
        }
        if (s1.data("_scrollexId")) return s1;
        var a1, u1, h1, c1, p;
        switch(a1 = i1++, u1 = jQuery.extend({
            top: 0,
            bottom: 0,
            delay: 0,
            mode: "default",
            enter: null,
            leave: null,
            initialize: null,
            terminate: null,
            scroll: null
        }, l1), u1.mode){
            case "top":
                h1 = function(t, e, n, i, o) {
                    return t >= i && o >= t;
                };
                break;
            case "bottom":
                h1 = function(t, e, n, i, o) {
                    return n >= i && o >= n;
                };
                break;
            case "middle":
                h1 = function(t, e, n, i, o) {
                    return e >= i && o >= e;
                };
                break;
            case "top-only":
                h1 = function(t, e, n, i, o) {
                    return i >= t && n >= i;
                };
                break;
            case "bottom-only":
                h1 = function(t, e, n, i, o) {
                    return n >= o && o >= t;
                };
                break;
            default:
            case "default":
                h1 = function(t, e, n, i, o) {
                    return n >= i && o >= t;
                };
        }
        return c1 = function(t) {
            var i, o, l, s, r, a, u = this.state, h = !1, c = this.$element.offset();
            i = n1.height(), o = t + i / 2, l = t + i, s = this.$element.outerHeight(), r = c.top + e1(this.options.top, s, i), a = c.top + s - e1(this.options.bottom, s, i), h = this.test(t, o, l, r, a), h != u && (this.state = h, h ? this.options.enter && this.options.enter.apply(this.element) : this.options.leave && this.options.leave.apply(this.element)), this.options.scroll && this.options.scroll.apply(this.element, [
                (o - r) / (a - r)
            ]);
        }, p = {
            id: a1,
            options: u1,
            test: h1,
            handler: c1,
            state: null,
            element: this,
            $element: s1,
            timeoutId: null
        }, o1[a1] = p, s1.data("_scrollexId", p.id), p.options.initialize && p.options.initialize.apply(this), s1;
    }, jQuery.fn.unscrollex = function() {
        var e = t1(this);
        if (0 == this.length) return e;
        if (this.length > 1) {
            for(var n = 0; n < this.length; n++)t1(this[n]).unscrollex();
            return e;
        }
        var i, l;
        return (i = e.data("_scrollexId")) ? (l = o1[i], window.clearTimeout(l.timeoutId), delete o1[i], e.removeData("_scrollexId"), l.options.terminate && l.options.terminate.apply(this), e) : e;
    };
}(jQuery);

//# sourceMappingURL=index.ebd3c2cb.js.map
