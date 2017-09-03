!(function(e, t) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document')
            return t(e)
          })
    : t(e)
})('undefined' != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = 'length' in e && e.length,
      n = Q.type(e)
    return (
      'function' !== n &&
      !Q.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        ('array' === n ||
          0 === t ||
          ('number' == typeof t && t > 0 && t - 1 in e)))
    )
  }
  function r(e, t, n) {
    if (Q.isFunction(t))
      return Q.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n
      })
    if (t.nodeType)
      return Q.grep(e, function(e) {
        return e === t !== n
      })
    if ('string' == typeof t) {
      if (se.test(t)) return Q.filter(t, e, n)
      t = Q.filter(t, e)
    }
    return Q.grep(e, function(e) {
      return G.call(t, e) >= 0 !== n
    })
  }
  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e
  }
  function o(e) {
    var t = (fe[e] = {})
    return Q.each(e.match(de) || [], function(e, n) {
      t[n] = !0
    }), t
  }
  function s() {
    J.removeEventListener(
      'DOMContentLoaded',
      s,
      !1
    ), e.removeEventListener('load', s, !1), Q.ready()
  }
  function a() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function() {
        return {}
      }
    }), (this.expando = Q.expando + a.uid++)
  }
  function u(e, t, n) {
    var r
    if (void 0 === n && 1 === e.nodeType)
      if (
        (
          (r = 'data-' + t.replace(ve, '-$1').toLowerCase()),
          'string' == typeof (n = e.getAttribute(r))
        )
      ) {
        try {
          n =
            'true' === n ||
            ('false' !== n &&
              ('null' === n
                ? null
                : +n + '' === n ? +n : ye.test(n) ? Q.parseJSON(n) : n))
        } catch (e) {}
        ge.set(e, t, n)
      } else n = void 0
    return n
  }
  function l() {
    return !0
  }
  function c() {
    return !1
  }
  function d() {
    try {
      return J.activeElement
    } catch (e) {}
  }
  function f(e, t) {
    return Q.nodeName(e, 'table') &&
    Q.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] ||
        e.appendChild(e.ownerDocument.createElement('tbody'))
      : e
  }
  function h(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
  }
  function p(e) {
    var t = je.exec(e.type)
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e
  }
  function m(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      me.set(e[n], 'globalEval', !t || me.get(t[n], 'globalEval'))
  }
  function g(e, t) {
    var n, r, i, o, s, a, u, l
    if (1 === t.nodeType) {
      if (
        me.hasData(e) &&
        ((o = me.access(e)), (s = me.set(t, o)), (l = o.events))
      ) {
        delete s.handle, (s.events = {})
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) Q.event.add(t, i, l[i][n])
      }
      ge.hasData(e) && ((a = ge.access(e)), (u = Q.extend({}, a)), ge.set(t, u))
    }
  }
  function y(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || '*')
      : e.querySelectorAll ? e.querySelectorAll(t || '*') : []
    return void 0 === t || (t && Q.nodeName(e, t)) ? Q.merge([e], n) : n
  }
  function v(e, t) {
    var n = t.nodeName.toLowerCase()
    'input' === n && be.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue)
  }
  function w(t, n) {
    var r,
      i = Q(n.createElement(t)).appendTo(n.body),
      o =
        e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
          ? r.display
          : Q.css(i[0], 'display')
    return i.detach(), o
  }
  function x(e) {
    var t = J,
      n = He[e]
    return n ||
      (
        (n = w(e, t)),
        ('none' !== n && n) ||
          (
            (Ae = (Ae || Q("<iframe frameborder='0' width='0' height='0'/>"))
              .appendTo(t.documentElement)),
            (t = Ae[0].contentDocument),
            t.write(),
            t.close(),
            (n = w(e, t)),
            Ae.detach()
          ),
        (He[e] = n)
      ), n
  }
  function _(e, t, n) {
    var r,
      i,
      o,
      s,
      a = e.style
    return (n =
      n ||
      Re(
        e
      )), n && (s = n.getPropertyValue(t) || n[t]), n && ('' !== s || Q.contains(e.ownerDocument, e) || (s = Q.style(e, t)), Fe.test(s) && We.test(t) && ((r = a.width), (i = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = i), (a.maxWidth = o))), void 0 !== s ? s + '' : s
  }
  function b(e, t) {
    return {
      get: function() {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments)
      }
    }
  }
  function k(e, t) {
    if (t in e) return t
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--; )
      if ((t = Ge[i] + n) in e) return t
    return r
  }
  function S(e, t, n) {
    var r = Ie.exec(t)
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t
  }
  function T(e, t, n, r, i) {
    for (
      var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
        s = 0;
      o < 4;
      o += 2
    )
      'margin' === n && (s += Q.css(e, n + xe[o], !0, i)), r
        ? (
            'content' === n && (s -= Q.css(e, 'padding' + xe[o], !0, i)),
            'margin' !== n && (s -= Q.css(e, 'border' + xe[o] + 'Width', !0, i))
          )
        : (
            (s += Q.css(e, 'padding' + xe[o], !0, i)),
            'padding' !== n &&
              (s += Q.css(e, 'border' + xe[o] + 'Width', !0, i))
          )
    return s
  }
  function D(e, t, n) {
    var r = !0,
      i = 'width' === t ? e.offsetWidth : e.offsetHeight,
      o = Re(e),
      s = 'border-box' === Q.css(e, 'boxSizing', !1, o)
    if (i <= 0 || null == i) {
      if (
        ((i = _(e, t, o)), (i < 0 || null == i) && (i = e.style[t]), Fe.test(i))
      )
        return i
      ;(r = s && (X.boxSizingReliable() || i === e.style[t])), (i =
        parseFloat(i) || 0)
    }
    return i + T(e, t, n || (s ? 'border' : 'content'), r, o) + 'px'
  }
  function M(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
      (r = e[s]), r.style &&
        (
          (o[s] = me.get(r, 'olddisplay')),
          (n = r.style.display),
          t
            ? (
                o[s] || 'none' !== n || (r.style.display = ''),
                '' === r.style.display &&
                  _e(r) &&
                  (o[s] = me.access(r, 'olddisplay', x(r.nodeName)))
              )
            : (
                (i = _e(r)),
                ('none' === n && i) ||
                  me.set(r, 'olddisplay', i ? n : Q.css(r, 'display'))
              )
        )
    for (s = 0; s < a; s++)
      (r = e[s]), r.style &&
        ((t && 'none' !== r.style.display && '' !== r.style.display) ||
          (r.style.display = t ? o[s] || '' : 'none'))
    return e
  }
  function C(e, t, n, r, i) {
    return new C.prototype.init(e, t, n, r, i)
  }
  function E() {
    return setTimeout(function() {
      ze = void 0
    }), (ze = Q.now())
  }
  function N(e, t) {
    var n,
      r = 0,
      i = { height: e }
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      (n = xe[r]), (i['margin' + n] = i['padding' + n] = e)
    return t && (i.opacity = i.width = e), i
  }
  function O(e, t, n) {
    for (
      var r, i = (Ke[t] || []).concat(Ke['*']), o = 0, s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r
  }
  function Y(e, t, n) {
    var r,
      i,
      o,
      s,
      a,
      u,
      l,
      c = this,
      d = {},
      f = e.style,
      h = e.nodeType && _e(e),
      p = me.get(e, 'fxshow')
    n.queue ||
      (
        (a = Q._queueHooks(e, 'fx')),
        null == a.unqueued &&
          (
            (a.unqueued = 0),
            (u = a.empty.fire),
            (a.empty.fire = function() {
              a.unqueued || u()
            })
          ),
        a.unqueued++,
        c.always(function() {
          c.always(function() {
            a.unqueued--, Q.queue(e, 'fx').length || a.empty.fire()
          })
        })
      ), 1 === e.nodeType &&
      ('height' in t || 'width' in t) &&
      (
        (n.overflow = [f.overflow, f.overflowX, f.overflowY]),
        (l = Q.css(e, 'display')),
        'inline' ===
          ('none' === l ? me.get(e, 'olddisplay') || x(e.nodeName) : l) &&
          'none' === Q.css(e, 'float') &&
          (f.display = 'inline-block')
      ), n.overflow &&
      (
        (f.overflow = 'hidden'),
        c.always(function() {
          ;(f.overflow =
            n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2])
        })
      )
    for (r in t)
      if (((i = t[r]), Ze.exec(i))) {
        if (
          (delete t[r], (o = o || 'toggle' === i), i === (h ? 'hide' : 'show'))
        ) {
          if ('show' !== i || !p || void 0 === p[r]) continue
          h = !0
        }
        d[r] = (p && p[r]) || Q.style(e, r)
      } else l = void 0
    if (Q.isEmptyObject(d))
      'inline' === ('none' === l ? x(e.nodeName) : l) && (f.display = l)
    else {
      p
        ? 'hidden' in p && (h = p.hidden)
        : (p = me.access(e, 'fxshow', {})), o && (p.hidden = !h), h
        ? Q(e).show()
        : c.done(function() {
            Q(e).hide()
          }), c.done(function() {
        var t
        me.remove(e, 'fxshow')
        for (t in d) Q.style(e, t, d[t])
      })
      for (r in d)
        (s = O(h ? p[r] : 0, r, c)), r in p ||
          (
            (p[r] = s.start),
            h &&
              (
                (s.end = s.start),
                (s.start = 'width' === r || 'height' === r ? 1 : 0)
              )
          )
    }
  }
  function j(e, t) {
    var n, r, i, o, s
    for (n in e)
      if (
        (
          (r = Q.camelCase(n)),
          (i = t[r]),
          (o = e[n]),
          Q.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (s = Q.cssHooks[r]) && 'expand' in s
        )
      ) {
        ;(o = s.expand(o)), delete e[r]
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i))
      } else t[r] = i
  }
  function P(e, t, n) {
    var r,
      i,
      o = 0,
      s = Qe.length,
      a = Q.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1
        for (
          var t = ze || E(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            s = 0,
            u = l.tweens.length;
          s < u;
          s++
        )
          l.tweens[s].run(o)
        return a.notifyWith(e, [l, o, n]), o < 1 && u
          ? n
          : (a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: Q.extend({}, t),
        opts: Q.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ze || E(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = Q.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          )
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0
          if (i) return this
          for (i = !0; n < r; n++) l.tweens[n].run(1)
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props
    for (j(c, l.opts.specialEasing); o < s; o++)
      if ((r = Qe[o].call(l, e, c, l.opts))) return r
    return Q.map(
      c,
      O,
      l
    ), Q.isFunction(l.opts.start) && l.opts.start.call(e, l), Q.fx.timer(Q.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }
  function L(e) {
    return function(t, n) {
      'string' != typeof t && ((n = t), (t = '*'))
      var r,
        i = 0,
        o = t.toLowerCase().match(de) || []
      if (Q.isFunction(n))
        for (; (r = o[i++]); )
          '+' === r[0]
            ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n)
    }
  }
  function A(e, t, n, r) {
    function i(a) {
      var u
      return (o[a] = !0), Q.each(e[a] || [], function(e, a) {
        var l = a(t, n, r)
        return 'string' != typeof l || s || o[l]
          ? s ? !(u = l) : void 0
          : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }
    var o = {},
      s = e === mt
    return i(t.dataTypes[0]) || (!o['*'] && i('*'))
  }
  function H(e, t) {
    var n,
      r,
      i = Q.ajaxSettings.flatOptions || {}
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
    return r && Q.extend(!0, e, r), e
  }
  function W(e, t, n) {
    for (var r, i, o, s, a = e.contents, u = e.dataTypes; '*' === u[0]; )
      u.shift(), void 0 === r &&
        (r = e.mimeType || t.getResponseHeader('Content-Type'))
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i)
          break
        }
    if (u[0] in n) o = u[0]
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i
          break
        }
        s || (s = i)
      }
      o = o || s
    }
    if (o) return o !== u[0] && u.unshift(o), n[o]
  }
  function F(e, t, n, r) {
    var i,
      o,
      s,
      a,
      u,
      l = {},
      c = e.dataTypes.slice()
    if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s]
    for (o = c.shift(); o; )
      if (
        (
          e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (u = o),
          (o = c.shift())
        )
      )
        if ('*' === o) o = u
        else if ('*' !== u && u !== o) {
          if (!(s = l[u + ' ' + o] || l['* ' + o]))
            for (i in l)
              if (
                (
                  (a = i.split(' ')),
                  a[1] === o && (s = l[u + ' ' + a[0]] || l['* ' + a[0]])
                )
              ) {
                !0 === s
                  ? (s = l[i])
                  : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]))
                break
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t)
            else
              try {
                t = s(t)
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: s ? e : 'No conversion from ' + u + ' to ' + o
                }
              }
        }
    return { state: 'success', data: t }
  }
  function R(e, t, n, r) {
    var i
    if (Q.isArray(t))
      Q.each(t, function(t, i) {
        n || xt.test(e)
          ? r(e, i)
          : R(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r)
      })
    else if (n || 'object' !== Q.type(t)) r(e, t)
    else for (i in t) R(e + '[' + i + ']', t[i], n, r)
  }
  function q(e) {
    return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var I = [],
    U = I.slice,
    V = I.concat,
    $ = I.push,
    G = I.indexOf,
    z = {},
    B = z.toString,
    Z = z.hasOwnProperty,
    X = {},
    J = e.document,
    Q = function(e, t) {
      return new Q.fn.init(e, t)
    },
    K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ee = /^-ms-/,
    te = /-([\da-z])/gi,
    ne = function(e, t) {
      return t.toUpperCase()
    }
  ;(Q.fn = Q.prototype = {
    jquery: '2.1.4',
    constructor: Q,
    selector: '',
    length: 0,
    toArray: function() {
      return U.call(this)
    },
    get: function(e) {
      return null != e
        ? e < 0 ? this[e + this.length] : this[e]
        : U.call(this)
    },
    pushStack: function(e) {
      var t = Q.merge(this.constructor(), e)
      return (t.prevObject = this), (t.context = this.context), t
    },
    each: function(e, t) {
      return Q.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(
        Q.map(this, function(t, n) {
          return e.call(t, n, t)
        })
      )
    },
    slice: function() {
      return this.pushStack(U.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0)
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: $,
    sort: I.sort,
    splice: I.splice
  }), (Q.extend = Q.fn.extend = function() {
    var e,
      t,
      n,
      r,
      i,
      o,
      s = arguments[0] || {},
      a = 1,
      u = arguments.length,
      l = !1
    for (
      'boolean' == typeof s &&
        ((l = s), (s = arguments[a] || {}), a++), 'object' == typeof s ||
        Q.isFunction(s) ||
        (s = {}), a === u && ((s = this), a--);
      a < u;
      a++
    )
      if (null != (e = arguments[a]))
        for (t in e)
          (n = s[t]), (r = e[t]), s !== r &&
            (l && r && (Q.isPlainObject(r) || (i = Q.isArray(r)))
              ? (
                  i
                    ? ((i = !1), (o = n && Q.isArray(n) ? n : []))
                    : (o = n && Q.isPlainObject(n) ? n : {}),
                  (s[t] = Q.extend(l, o, r))
                )
              : void 0 !== r && (s[t] = r))
    return s
  }), Q.extend({
    expando: 'jQuery' + ('2.1.4' + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return 'function' === Q.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
    },
    isPlainObject: function(e) {
      return (
        'object' === Q.type(e) &&
        !e.nodeType &&
        !Q.isWindow(e) &&
        !(e.constructor && !Z.call(e.constructor.prototype, 'isPrototypeOf'))
      )
    },
    isEmptyObject: function(e) {
      var t
      for (t in e) return !1
      return !0
    },
    type: function(e) {
      return null == e
        ? e + ''
        : 'object' == typeof e || 'function' == typeof e
          ? z[B.call(e)] || 'object'
          : typeof e
    },
    globalEval: function(e) {
      var t,
        n = eval
      ;(e = Q.trim(e)) &&
        (1 === e.indexOf('use strict')
          ? (
              (t = J.createElement('script')),
              (t.text = e),
              J.head.appendChild(t).parentNode.removeChild(t)
            )
          : n(e))
    },
    camelCase: function(e) {
      return e.replace(ee, 'ms-').replace(te, ne)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, r) {
      var i = 0,
        o = e.length,
        s = n(e)
      if (r) {
        if (s) for (; i < o && !1 !== t.apply(e[i], r); i++);
        else for (i in e) if (!1 === t.apply(e[i], r)) break
      } else if (s) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
      else for (i in e) if (!1 === t.call(e[i], i, e[i])) break
      return e
    },
    trim: function(e) {
      return null == e ? '' : (e + '').replace(K, '')
    },
    makeArray: function(e, t) {
      var r = t || []
      return null != e &&
        (n(Object(e))
          ? Q.merge(r, 'string' == typeof e ? [e] : e)
          : $.call(r, e)), r
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : G.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]
      return (e.length = i), e
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
        !t(e[i], i) !== s && r.push(e[i])
      return r
    },
    map: function(e, t, r) {
      var i,
        o = 0,
        s = e.length,
        a = n(e),
        u = []
      if (a) for (; o < s; o++) null != (i = t(e[o], o, r)) && u.push(i)
      else for (o in e) null != (i = t(e[o], o, r)) && u.push(i)
      return V.apply([], u)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i
      if (
        (
          'string' == typeof t && ((n = e[t]), (t = e), (e = n)),
          Q.isFunction(e)
        )
      )
        return (r = U.call(arguments, 2)), (i = function() {
          return e.apply(t || this, r.concat(U.call(arguments)))
        }), (i.guid = e.guid = e.guid || Q.guid++), i
    },
    now: Date.now,
    support: X
  }), Q.each(
    'Boolean Number String Function Array Date RegExp Object Error'.split(' '),
    function(e, t) {
      z['[object ' + t + ']'] = t.toLowerCase()
    }
  )
  var re = (function(e) {
    function t(e, t, n, r) {
      var i, o, s, a, l, d, f, h, p, m
      if (
        (
          (t ? t.ownerDocument || t : W) !== N && E(t),
          (t = t || N),
          (n = n || []),
          (a = t.nodeType),
          'string' != typeof e || !e || (1 !== a && 9 !== a && 11 !== a)
        )
      )
        return n
      if (!r && Y) {
        if (11 !== a && (i = ge.exec(e)))
          if ((s = i[1])) {
            if (9 === a) {
              if (!(o = t.getElementById(s)) || !o.parentNode) return n
              if (o.id === s) return n.push(o), n
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(s)) &&
              A(t, o) &&
              o.id === s
            )
              return n.push(o), n
          } else {
            if (i[2]) return X.apply(n, t.getElementsByTagName(e)), n
            if ((s = i[3]) && w.getElementsByClassName)
              return X.apply(n, t.getElementsByClassName(s)), n
          }
        if (w.qsa && (!j || !j.test(e))) {
          if (
            (
              (h = f = H),
              (p = t),
              (m = 1 !== a && e),
              1 === a && 'object' !== t.nodeName.toLowerCase()
            )
          ) {
            for (
              d = k(e), (f = t.getAttribute('id'))
                ? (h = f.replace(ve, '\\$&'))
                : t.setAttribute('id', h), h = "[id='" + h + "'] ", l =
                d.length;
              l--;

            )
              d[l] = h + c(d[l])
            ;(p = (ye.test(e) && u(t.parentNode)) || t), (m = d.join(','))
          }
          if (m)
            try {
              return X.apply(n, p.querySelectorAll(m)), n
            } catch (e) {
            } finally {
              f || t.removeAttribute('id')
            }
        }
      }
      return T(e.replace(se, '$1'), t, n, r)
    }
    function n() {
      function e(n, r) {
        return t.push(n + ' ') > x.cacheLength && delete e[t.shift()], (e[
          n + ' '
        ] = r)
      }
      var t = []
      return e
    }
    function r(e) {
      return (e[H] = !0), e
    }
    function i(e) {
      var t = N.createElement('div')
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = e.length; r--; ) x.attrHandle[n[r]] = t
    }
    function s(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || $) - (~e.sourceIndex || $)
      if (r) return r
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
      return e ? 1 : -1
    }
    function a(e) {
      return r(function(t) {
        return (t = +t), r(function(n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--; )
            n[(i = o[s])] && (n[i] = !(r[i] = n[i]))
        })
      })
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    function l() {}
    function c(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
      return r
    }
    function d(e, t, n) {
      var r = t.dir,
        i = n && 'parentNode' === r,
        o = R++
      return t.first
        ? function(t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o)
          }
        : function(t, n, s) {
            var a,
              u,
              l = [F, o]
            if (s) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, s)) return !0
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    (
                      (u = t[H] || (t[H] = {})),
                      (a = u[r]) && a[0] === F && a[1] === o
                    )
                  )
                    return (l[2] = a[2])
                  if (((u[r] = l), (l[2] = e(t, n, s)))) return !0
                }
          }
    }
    function f(e) {
      return e.length > 1
        ? function(t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1
            return !0
          }
        : e[0]
    }
    function h(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r)
      return r
    }
    function p(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)))
      return s
    }
    function m(e, t, n, i, o, s) {
      return i && !i[H] && (i = m(i)), o && !o[H] && (o = m(o, s)), r(function(
        r,
        s,
        a,
        u
      ) {
        var l,
          c,
          d,
          f = [],
          m = [],
          g = s.length,
          y = r || h(t || '*', a.nodeType ? [a] : a, []),
          v = !e || (!r && t) ? y : p(y, f, e, a, u),
          w = n ? (o || (r ? e : g || i) ? [] : s) : v
        if ((n && n(v, w, a, u), i))
          for (l = p(w, m), i(l, [], a, u), c = l.length; c--; )
            (d = l[c]) && (w[m[c]] = !(v[m[c]] = d))
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = w.length; c--; ) (d = w[c]) && l.push((v[c] = d))
              o(null, (w = []), l, u)
            }
            for (c = w.length; c--; )
              (d = w[c]) &&
                (l = o ? Q(r, d) : f[c]) > -1 &&
                (r[l] = !(s[l] = d))
          }
        } else
          (w = p(w === s ? w.splice(g, w.length) : w)), o
            ? o(null, s, w, u)
            : X.apply(s, w)
      })
    }
    function g(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = x.relative[e[0].type],
          s = o || x.relative[' '],
          a = o ? 1 : 0,
          u = d(
            function(e) {
              return e === t
            },
            s,
            !0
          ),
          l = d(
            function(e) {
              return Q(t, e) > -1
            },
            s,
            !0
          ),
          h = [
            function(e, n, r) {
              var i =
                (!o && (r || n !== D)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
              return (t = null), i
            }
          ];
        a < i;
        a++
      )
        if ((n = x.relative[e[a].type])) h = [d(f(h), n)]
        else {
          if (((n = x.filter[e[a].type].apply(null, e[a].matches)), n[H])) {
            for (r = ++a; r < i && !x.relative[e[r].type]; r++);
            return m(
              a > 1 && f(h),
              a > 1 &&
                c(
                  e
                    .slice(0, a - 1)
                    .concat({ value: ' ' === e[a - 2].type ? '*' : '' })
                ).replace(se, '$1'),
              n,
              a < r && g(e.slice(a, r)),
              r < i && g((e = e.slice(r))),
              r < i && c(e)
            )
          }
          h.push(n)
        }
      return f(h)
    }
    function y(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        s = function(r, s, a, u, l) {
          var c,
            d,
            f,
            h = 0,
            m = '0',
            g = r && [],
            y = [],
            v = D,
            w = r || (o && x.find.TAG('*', l)),
            _ = (F += null == v ? 1 : Math.random() || 0.1),
            b = w.length
          for (l && (D = s !== N && s); m !== b && null != (c = w[m]); m++) {
            if (o && c) {
              for (d = 0; (f = e[d++]); )
                if (f(c, s, a)) {
                  u.push(c)
                  break
                }
              l && (F = _)
            }
            i && ((c = !f && c) && h--, r && g.push(c))
          }
          if (((h += m), i && m !== h)) {
            for (d = 0; (f = n[d++]); ) f(g, y, s, a)
            if (r) {
              if (h > 0) for (; m--; ) g[m] || y[m] || (y[m] = B.call(u))
              y = p(y)
            }
            X.apply(u, y), l &&
              !r &&
              y.length > 0 &&
              h + n.length > 1 &&
              t.uniqueSort(u)
          }
          return l && ((F = _), (D = v)), g
        }
      return i ? r(s) : s
    }
    var v,
      w,
      x,
      _,
      b,
      k,
      S,
      T,
      D,
      M,
      C,
      E,
      N,
      O,
      Y,
      j,
      P,
      L,
      A,
      H = 'sizzle' + 1 * new Date(),
      W = e.document,
      F = 0,
      R = 0,
      q = n(),
      I = n(),
      U = n(),
      V = function(e, t) {
        return e === t && (C = !0), 0
      },
      $ = 1 << 31,
      G = {}.hasOwnProperty,
      z = [],
      B = z.pop,
      Z = z.push,
      X = z.push,
      J = z.slice,
      Q = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
        return -1
      },
      K =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      ee = '[\\x20\\t\\r\\n\\f]',
      te = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      ne = te.replace('w', 'w#'),
      re =
        '\\[' +
        ee +
        '*(' +
        te +
        ')(?:' +
        ee +
        '*([*^$|!~]?=)' +
        ee +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        ne +
        '))|)' +
        ee +
        '*\\]',
      ie =
        ':(' +
        te +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        re +
        ')*)|.*)\\)|)',
      oe = new RegExp(ee + '+', 'g'),
      se = new RegExp(
        '^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$',
        'g'
      ),
      ae = new RegExp('^' + ee + '*,' + ee + '*'),
      ue = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'),
      le = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'),
      ce = new RegExp(ie),
      de = new RegExp('^' + ne + '$'),
      fe = {
        ID: new RegExp('^#(' + te + ')'),
        CLASS: new RegExp('^\\.(' + te + ')'),
        TAG: new RegExp('^(' + te.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + re),
        PSEUDO: new RegExp('^' + ie),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            ee +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            ee +
            '*(?:([+-]|)' +
            ee +
            '*(\\d+)|))' +
            ee +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + K + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            ee +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            ee +
            '*((?:-\\d)?\\d*)' +
            ee +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      he = /^(?:input|select|textarea|button)$/i,
      pe = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      ve = /'|\\/g,
      we = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'),
      xe = function(e, t, n) {
        var r = '0x' + t - 65536
        return r !== r || n
          ? t
          : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
      },
      _e = function() {
        E()
      }
    try {
      X.apply((z = J.call(W.childNodes)), W.childNodes), z[W.childNodes.length]
        .nodeType
    } catch (e) {
      X = {
        apply: z.length
          ? function(e, t) {
              Z.apply(e, J.call(t))
            }
          : function(e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1
            }
      }
    }
    ;(w = t.support = {}), (b = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement
      return !!t && 'HTML' !== t.nodeName
    }), (E = t.setDocument = function(e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : W
      return r !== N && 9 === r.nodeType && r.documentElement
        ? (
            (N = r),
            (O = r.documentElement),
            (n = r.defaultView),
            n &&
              n !== n.top &&
              (n.addEventListener
                ? n.addEventListener('unload', _e, !1)
                : n.attachEvent && n.attachEvent('onunload', _e)),
            (Y = !b(r)),
            (w.attributes = i(function(e) {
              return (e.className = 'i'), !e.getAttribute('className')
            })),
            (w.getElementsByTagName = i(function(e) {
              return e.appendChild(
                r.createComment('')
              ), !e.getElementsByTagName('*').length
            })),
            (w.getElementsByClassName = me.test(r.getElementsByClassName)),
            (w.getById = i(function(e) {
              return (O.appendChild(
                e
              ).id = H), !r.getElementsByName || !r.getElementsByName(H).length
            })),
            w.getById
              ? (
                  (x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && Y) {
                      var n = t.getElementById(e)
                      return n && n.parentNode ? [n] : []
                    }
                  }),
                  (x.filter.ID = function(e) {
                    var t = e.replace(we, xe)
                    return function(e) {
                      return e.getAttribute('id') === t
                    }
                  })
                )
              : (
                  delete x.find.ID,
                  (x.filter.ID = function(e) {
                    var t = e.replace(we, xe)
                    return function(e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode('id')
                      return n && n.value === t
                    }
                  })
                ),
            (x.find.TAG = w.getElementsByTagName
              ? function(e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : w.qsa ? t.querySelectorAll(e) : void 0
                }
              : function(e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e)
                  if ('*' === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n)
                    return r
                  }
                  return o
                }),
            (x.find.CLASS =
              w.getElementsByClassName &&
              function(e, t) {
                if (Y) return t.getElementsByClassName(e)
              }),
            (P = []),
            (j = []),
            (w.qsa = me.test(r.querySelectorAll)) &&
              (
                i(function(e) {
                  ;(O.appendChild(e).innerHTML =
                    "<a id='" +
                    H +
                    "'></a><select id='" +
                    H +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"), e.querySelectorAll("[msallowcapture^='']").length && j.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || j.push('\\[' + ee + '*(?:value|' + K + ')'), e.querySelectorAll('[id~=' + H + '-]').length || j.push('~='), e.querySelectorAll(':checked').length || j.push(':checked'), e.querySelectorAll('a#' + H + '+*').length || j.push('.#.+[+~]')
                }),
                i(function(e) {
                  var t = r.createElement('input')
                  t.setAttribute(
                    'type',
                    'hidden'
                  ), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && j.push('name' + ee + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || j.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), j.push(',.*:')
                })
              ),
            (w.matchesSelector = me.test(
              (L =
                O.matches ||
                O.webkitMatchesSelector ||
                O.mozMatchesSelector ||
                O.oMatchesSelector ||
                O.msMatchesSelector)
            )) &&
              i(function(e) {
                ;(w.disconnectedMatch = L.call(
                  e,
                  'div'
                )), L.call(e, "[s!='']:x"), P.push('!=', ie)
              }),
            (j = j.length && new RegExp(j.join('|'))),
            (P = P.length && new RegExp(P.join('|'))),
            (t = me.test(O.compareDocumentPosition)),
            (A =
              t || me.test(O.contains)
                ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    )
                  }
                : function(e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0
                    return !1
                  }),
            (V = t
              ? function(e, t) {
                  if (e === t) return (C = !0), 0
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition
                  return (
                    n ||
                    (
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1),
                      1 & n ||
                      (!w.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === r || (e.ownerDocument === W && A(W, e))
                          ? -1
                          : t === r || (t.ownerDocument === W && A(W, t))
                            ? 1
                            : M ? Q(M, e) - Q(M, t) : 0
                        : 4 & n ? -1 : 1
                    )
                  )
                }
              : function(e, t) {
                  if (e === t) return (C = !0), 0
                  var n,
                    i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t]
                  if (!o || !a)
                    return e === r
                      ? -1
                      : t === r ? 1 : o ? -1 : a ? 1 : M ? Q(M, e) - Q(M, t) : 0
                  if (o === a) return s(e, t)
                  for (n = e; (n = n.parentNode); ) u.unshift(n)
                  for (n = t; (n = n.parentNode); ) l.unshift(n)
                  for (; u[i] === l[i]; ) i++
                  return i
                    ? s(u[i], l[i])
                    : u[i] === W ? -1 : l[i] === W ? 1 : 0
                }),
            r
          )
        : N
    }), (t.matches = function(e, n) {
      return t(e, null, null, n)
    }), (t.matchesSelector = function(e, n) {
      if (
        (
          (e.ownerDocument || e) !== N && E(e),
          (n = n.replace(le, "='$1']")),
          w.matchesSelector && Y && (!P || !P.test(n)) && (!j || !j.test(n))
        )
      )
        try {
          var r = L.call(e, n)
          if (
            r ||
            w.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r
        } catch (e) {}
      return t(n, N, null, [e]).length > 0
    }), (t.contains = function(e, t) {
      return (e.ownerDocument || e) !== N && E(e), A(e, t)
    }), (t.attr = function(e, t) {
      ;(e.ownerDocument || e) !== N && E(e)
      var n = x.attrHandle[t.toLowerCase()],
        r = n && G.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !Y) : void 0
      return void 0 !== r
        ? r
        : w.attributes || !Y
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), (t.error = function(e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }), (t.uniqueSort = function(e) {
      var t,
        n = [],
        r = 0,
        i = 0
      if (
        (
          (C = !w.detectDuplicates),
          (M = !w.sortStable && e.slice(0)),
          e.sort(V),
          C
        )
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i))
        for (; r--; ) e.splice(n[r], 1)
      }
      return (M = null), e
    }), (_ = t.getText = function(e) {
      var t,
        n = '',
        r = 0,
        i = e.nodeType
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent
          for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else for (; (t = e[r++]); ) n += _(t)
      return n
    }), (x = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: fe,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function(e) {
          return (e[1] = e[1].replace(we, xe)), (e[3] = (e[3] ||
            e[4] ||
            e[5] ||
            '')
            .replace(we, xe)), '~=' === e[2] &&
            (e[3] = ' ' + e[3] + ' '), e.slice(0, 4)
        },
        CHILD: function(e) {
          return (e[1] = e[1].toLowerCase()), 'nth' === e[1].slice(0, 3)
            ? (
                e[3] || t.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3]))
              )
            : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2]
          return fe.CHILD.test(e[0])
            ? null
            : (
                e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    ce.test(n) &&
                    (t = k(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3)
              )
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(we, xe).toLowerCase()
          return '*' === e
            ? function() {
                return !0
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
        },
        CLASS: function(e) {
          var t = q[e + ' ']
          return (
            t ||
            ((t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) &&
              q(e, function(e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                )
              }))
          )
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e)
            return null == o
              ? '!=' === n
              : !n ||
                (
                  (o += ''),
                  '=' === n
                    ? o === r
                    : '!=' === n
                      ? o !== r
                      : '^=' === n
                        ? r && 0 === o.indexOf(r)
                        : '*=' === n
                          ? r && o.indexOf(r) > -1
                          : '$=' === n
                            ? r && o.slice(-r.length) === r
                            : '~=' === n
                              ? (' ' + o.replace(oe, ' ') + ' ').indexOf(r) > -1
                              : '|=' === n &&
                                (o === r ||
                                  o.slice(0, r.length + 1) === r + '-')
                )
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3),
            s = 'last' !== e.slice(-4),
            a = 'of-type' === t
          return 1 === r && 0 === i
            ? function(e) {
                return !!e.parentNode
              }
            : function(t, n, u) {
                var l,
                  c,
                  d,
                  f,
                  h,
                  p,
                  m = o !== s ? 'nextSibling' : 'previousSibling',
                  g = t.parentNode,
                  y = a && t.nodeName.toLowerCase(),
                  v = !u && !a
                if (g) {
                  if (o) {
                    for (; m; ) {
                      for (d = t; (d = d[m]); )
                        if (
                          a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType
                        )
                          return !1
                      p = m = 'only' === e && !p && 'nextSibling'
                    }
                    return !0
                  }
                  if (((p = [s ? g.firstChild : g.lastChild]), s && v)) {
                    for (
                      c = g[H] || (g[H] = {}), l = c[e] || [], h =
                        l[0] === F && l[1], f = l[0] === F && l[2], d =
                        h && g.childNodes[h];
                      (d = (++h && d && d[m]) || (f = h = 0) || p.pop());

                    )
                      if (1 === d.nodeType && ++f && d === t) {
                        c[e] = [F, h, f]
                        break
                      }
                  } else if (v && (l = (t[H] || (t[H] = {}))[e]) && l[0] === F)
                    f = l[1]
                  else
                    for (
                      ;
                      (d = (++h && d && d[m]) || (f = h = 0) || p.pop()) &&
                      ((a
                        ? d.nodeName.toLowerCase() !== y
                        : 1 !== d.nodeType) ||
                        !++f ||
                        (v && ((d[H] || (d[H] = {}))[e] = [F, f]), d !== t));

                    );
                  return (f -= i) === r || (f % r == 0 && f / r >= 0)
                }
              }
        },
        PSEUDO: function(e, n) {
          var i,
            o =
              x.pseudos[e] ||
              x.setFilters[e.toLowerCase()] ||
              t.error('unsupported pseudo: ' + e)
          return o[H]
            ? o(n)
            : o.length > 1
              ? (
                  (i = [e, e, '', n]),
                  x.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                          (r = Q(e, i[s])), (e[r] = !(t[r] = i[s]))
                      })
                    : function(e) {
                        return o(e, 0, i)
                      }
                )
              : o
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [],
            n = [],
            i = S(e.replace(se, '$1'))
          return i[H]
            ? r(function(e, t, n, r) {
                for (var o, s = i(e, null, r, []), a = e.length; a--; )
                  (o = s[a]) && (e[a] = !(t[a] = o))
              })
            : function(e, r, o) {
                return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
              }
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function(e) {
          return (e = e.replace(we, xe)), function(t) {
            return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
          }
        }),
        lang: r(function(e) {
          return de.test(e || '') ||
            t.error(
              'unsupported lang: ' + e
            ), (e = e.replace(we, xe).toLowerCase()), function(t) {
            var n
            do {
              if (
                (n = Y
                  ? t.lang
                  : t.getAttribute('xml:lang') || t.getAttribute('lang'))
              )
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
            } while ((t = t.parentNode) && 1 === t.nodeType)
            return !1
          }
        }),
        target: function(t) {
          var n = e.location && e.location.hash
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === O
        },
        focus: function(e) {
          return (
            e === N.activeElement &&
            (!N.hasFocus || N.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          )
        },
        enabled: function(e) {
          return !1 === e.disabled
        },
        disabled: function(e) {
          return !0 === e.disabled
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase()
          return (
            ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
          )
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1
          return !0
        },
        parent: function(e) {
          return !x.pseudos.empty(e)
        },
        header: function(e) {
          return pe.test(e.nodeName)
        },
        input: function(e) {
          return he.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase()
          return ('input' === t && 'button' === e.type) || 'button' === t
        },
        text: function(e) {
          var t
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          )
        },
        first: a(function() {
          return [0]
        }),
        last: a(function(e, t) {
          return [t - 1]
        }),
        eq: a(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: a(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n)
          return e
        }),
        odd: a(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n)
          return e
        }),
        lt: a(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r)
          return e
        }),
        gt: a(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
          return e
        })
      }
    }), (x.pseudos.nth = x.pseudos.eq)
    for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      x.pseudos[v] = (function(e) {
        return function(t) {
          return 'input' === t.nodeName.toLowerCase() && t.type === e
        }
      })(v)
    for (v in { submit: !0, reset: !0 })
      x.pseudos[v] = (function(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase()
          return ('input' === n || 'button' === n) && t.type === e
        }
      })(v)
    return (l.prototype = x.filters =
      x.pseudos), (x.setFilters = new l()), (k = t.tokenize = function(e, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = I[e + ' ']
      if (c) return n ? 0 : c.slice(0)
      for (a = e, u = [], l = x.preFilter; a; ) {
        ;(r && !(i = ae.exec(a))) ||
          (
            i && (a = a.slice(i[0].length) || a),
            u.push((o = []))
          ), (r = !1), (i = ue.exec(a)) &&
          (
            (r = i.shift()),
            o.push({ value: r, type: i[0].replace(se, ' ') }),
            (a = a.slice(r.length))
          )
        for (s in x.filter)
          !(i = fe[s].exec(a)) ||
            (l[s] && !(i = l[s](i))) ||
            (
              (r = i.shift()),
              o.push({ value: r, type: s, matches: i }),
              (a = a.slice(r.length))
            )
        if (!r) break
      }
      return n ? a.length : a ? t.error(e) : I(e, u).slice(0)
    }), (S = t.compile = function(e, t) {
      var n,
        r = [],
        i = [],
        o = U[e + ' ']
      if (!o) {
        for (t || (t = k(e)), n = t.length; n--; )
          (o = g(t[n])), o[H] ? r.push(o) : i.push(o)
        ;(o = U(e, y(i, r))), (o.selector = e)
      }
      return o
    }), (T = t.select = function(e, t, n, r) {
      var i,
        o,
        s,
        a,
        l,
        d = 'function' == typeof e && e,
        f = !r && k((e = d.selector || e))
      if (((n = n || []), 1 === f.length)) {
        if (
          (
            (o = f[0] = f[0].slice(0)),
            o.length > 2 &&
              'ID' === (s = o[0]).type &&
              w.getById &&
              9 === t.nodeType &&
              Y &&
              x.relative[o[1].type]
          )
        ) {
          if (!(t = (x.find.ID(s.matches[0].replace(we, xe), t) || [])[0]))
            return n
          d && (t = t.parentNode), (e = e.slice(o.shift().value.length))
        }
        for (
          i = fe.needsContext.test(e) ? 0 : o.length;
          i-- && ((s = o[i]), !x.relative[(a = s.type)]);

        )
          if (
            (l = x.find[a]) &&
            (r = l(
              s.matches[0].replace(we, xe),
              (ye.test(o[0].type) && u(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && c(o))))
              return X.apply(n, r), n
            break
          }
      }
      return (d || S(e, f))(
        r,
        t,
        !Y,
        n,
        (ye.test(e) && u(t.parentNode)) || t
      ), n
    }), (w.sortStable =
      H.split('').sort(V).join('') ===
      H), (w.detectDuplicates = !!C), E(), (w.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(N.createElement('div'))
    })), i(function(e) {
      return (e.innerHTML =
        "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href')
    }) ||
      o('type|href|height|width', function(e, t, n) {
        if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
      }), (w.attributes &&
      i(function(e) {
        return (e.innerHTML =
          '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value')
      })) ||
      o('value', function(e, t, n) {
        if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
      }), i(function(e) {
      return null == e.getAttribute('disabled')
    }) ||
      o(K, function(e, t, n) {
        var r
        if (!n)
          return !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), t
  })(e)
  ;(Q.find = re), (Q.expr = re.selectors), (Q.expr[':'] = Q.expr.pseudos), (Q.unique = re.uniqueSort), (Q.text = re.getText), (Q.isXMLDoc = re.isXML), (Q.contains = re.contains)
  var ie = Q.expr.match.needsContext,
    oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    se = /^.[^:#\[\.,]*$/
  ;(Q.filter = function(e, t, n) {
    var r = t[0]
    return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType
      ? Q.find.matchesSelector(r, e) ? [r] : []
      : Q.find.matches(
          e,
          Q.grep(t, function(e) {
            return 1 === e.nodeType
          })
        )
  }), Q.fn.extend({
    find: function(e) {
      var t,
        n = this.length,
        r = [],
        i = this
      if ('string' != typeof e)
        return this.pushStack(
          Q(e).filter(function() {
            for (t = 0; t < n; t++) if (Q.contains(i[t], this)) return !0
          })
        )
      for (t = 0; t < n; t++) Q.find(e, i[t], r)
      return (r = this.pushStack(n > 1 ? Q.unique(r) : r)), (r.selector = this
        .selector
        ? this.selector + ' ' + e
        : e), r
    },
    filter: function(e) {
      return this.pushStack(r(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(r(this, e || [], !0))
    },
    is: function(e) {
      return !!r(this, 'string' == typeof e && ie.test(e) ? Q(e) : e || [], !1)
        .length
    }
  })
  var ae,
    ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
  ;((Q.fn.init = function(e, t) {
    var n, r
    if (!e) return this
    if ('string' == typeof e) {
      if (
        !(n =
          '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : ue.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || ae).find(e) : this.constructor(t).find(e)
      if (n[1]) {
        if (
          (
            (t = t instanceof Q ? t[0] : t),
            Q.merge(
              this,
              Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)
            ),
            oe.test(n[1]) && Q.isPlainObject(t)
          )
        )
          for (n in t)
            Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n])
        return this
      }
      return (r = J.getElementById(n[2])), r &&
        r.parentNode &&
        (
          (this.length = 1),
          (this[0] = r)
        ), (this.context = J), (this.selector = e), this
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : Q.isFunction(e)
        ? void 0 !== ae.ready ? ae.ready(e) : e(Q)
        : (
            void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            Q.makeArray(e, this)
          )
  }).prototype =
    Q.fn), (ae = Q(J))
  var le = /^(?:parents|prev(?:Until|All))/,
    ce = { children: !0, contents: !0, next: !0, prev: !0 }
  Q.extend({
    dir: function(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && Q(e).is(n)) break
          r.push(e)
        }
      return r
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e)
      return n
    }
  }), Q.fn.extend({
    has: function(e) {
      var t = Q(e, this),
        n = t.length
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (Q.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          s = ie.test(e) || 'string' != typeof e ? Q(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (s
              ? s.index(n) > -1
              : 1 === n.nodeType && Q.find.matchesSelector(n, e))
          ) {
            o.push(n)
            break
          }
      return this.pushStack(o.length > 1 ? Q.unique(o) : o)
    },
    index: function(e) {
      return e
        ? 'string' == typeof e
          ? G.call(Q(e), this[0])
          : G.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), Q.each(
    {
      parent: function(e) {
        var t = e.parentNode
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return Q.dir(e, 'parentNode')
      },
      parentsUntil: function(e, t, n) {
        return Q.dir(e, 'parentNode', n)
      },
      next: function(e) {
        return i(e, 'nextSibling')
      },
      prev: function(e) {
        return i(e, 'previousSibling')
      },
      nextAll: function(e) {
        return Q.dir(e, 'nextSibling')
      },
      prevAll: function(e) {
        return Q.dir(e, 'previousSibling')
      },
      nextUntil: function(e, t, n) {
        return Q.dir(e, 'nextSibling', n)
      },
      prevUntil: function(e, t, n) {
        return Q.dir(e, 'previousSibling', n)
      },
      siblings: function(e) {
        return Q.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return Q.sibling(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || Q.merge([], e.childNodes)
      }
    },
    function(e, t) {
      Q.fn[e] = function(n, r) {
        var i = Q.map(this, t, n)
        return 'Until' !== e.slice(-5) && (r = n), r &&
          'string' == typeof r &&
          (i = Q.filter(r, i)), this.length > 1 &&
          (ce[e] || Q.unique(i), le.test(e) && i.reverse()), this.pushStack(i)
      }
    }
  )
  var de = /\S+/g,
    fe = {}
  ;(Q.Callbacks = function(e) {
    e = 'string' == typeof e ? fe[e] || o(e) : Q.extend({}, e)
    var t,
      n,
      r,
      i,
      s,
      a,
      u = [],
      l = !e.once && [],
      c = function(o) {
        for (
          t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0;
          u && a < s;
          a++
        )
          if (!1 === u[a].apply(o[0], o[1]) && e.stopOnFalse) {
            t = !1
            break
          }
        ;(r = !1), u &&
          (l ? l.length && c(l.shift()) : t ? (u = []) : d.disable())
      },
      d = {
        add: function() {
          if (u) {
            var n = u.length
            !(function t(n) {
              Q.each(n, function(n, r) {
                var i = Q.type(r)
                'function' === i
                  ? (e.unique && d.has(r)) || u.push(r)
                  : r && r.length && 'string' !== i && t(r)
              })
            })(arguments), r ? (s = u.length) : t && ((i = n), c(t))
          }
          return this
        },
        remove: function() {
          return u &&
            Q.each(arguments, function(e, t) {
              for (var n; (n = Q.inArray(t, u, n)) > -1; )
                u.splice(n, 1), r && (n <= s && s--, n <= a && a--)
            }), this
        },
        has: function(e) {
          return e ? Q.inArray(e, u) > -1 : !(!u || !u.length)
        },
        empty: function() {
          return (u = []), (s = 0), this
        },
        disable: function() {
          return (u = l = t = void 0), this
        },
        disabled: function() {
          return !u
        },
        lock: function() {
          return (l = void 0), t || d.disable(), this
        },
        locked: function() {
          return !l
        },
        fireWith: function(e, t) {
          return !u ||
            (n && !l) ||
            (
              (t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              r ? l.push(t) : c(t)
            ), this
        },
        fire: function() {
          return d.fireWith(this, arguments), this
        },
        fired: function() {
          return !!n
        }
      }
    return d
  }), Q.extend({
    Deferred: function(e) {
      var t = [
          ['resolve', 'done', Q.Callbacks('once memory'), 'resolved'],
          ['reject', 'fail', Q.Callbacks('once memory'), 'rejected'],
          ['notify', 'progress', Q.Callbacks('memory')]
        ],
        n = 'pending',
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments
            return Q.Deferred(function(n) {
              Q.each(t, function(t, o) {
                var s = Q.isFunction(e[t]) && e[t]
                i[o[1]](function() {
                  var e = s && s.apply(this, arguments)
                  e && Q.isFunction(e.promise)
                    ? e
                        .promise()
                        .done(n.resolve)
                        .fail(n.reject)
                        .progress(n.notify)
                    : n[o[0] + 'With'](
                        this === r ? n.promise() : this,
                        s ? [e] : arguments
                      )
                })
              }), (e = null)
            }).promise()
          },
          promise: function(e) {
            return null != e ? Q.extend(e, r) : r
          }
        },
        i = {}
      return (r.pipe = r.then), Q.each(t, function(e, o) {
        var s = o[2],
          a = o[3]
        ;(r[o[1]] = s.add), a &&
          s.add(
            function() {
              n = a
            },
            t[1 ^ e][2].disable,
            t[2][2].lock
          ), (i[o[0]] = function() {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this
        }), (i[o[0] + 'With'] = s.fireWith)
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t,
        n,
        r,
        i = 0,
        o = U.call(arguments),
        s = o.length,
        a = 1 !== s || (e && Q.isFunction(e.promise)) ? s : 0,
        u = 1 === a ? e : Q.Deferred(),
        l = function(e, n, r) {
          return function(i) {
            ;(n[e] = this), (r[e] =
              arguments.length > 1 ? U.call(arguments) : i), r === t
              ? u.notifyWith(n, r)
              : --a || u.resolveWith(n, r)
          }
        }
      if (s > 1)
        for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++)
          o[i] && Q.isFunction(o[i].promise)
            ? o[i]
                .promise()
                .done(l(i, r, o))
                .fail(u.reject)
                .progress(l(i, n, t))
            : --a
      return a || u.resolveWith(r, o), u.promise()
    }
  })
  var he
  ;(Q.fn.ready = function(e) {
    return Q.ready.promise().done(e), this
  }), Q.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? Q.readyWait++ : Q.ready(!0)
    },
    ready: function(e) {
      ;(!0 === e ? --Q.readyWait : Q.isReady) ||
        (
          (Q.isReady = !0),
          (!0 !== e && --Q.readyWait > 0) ||
            (
              he.resolveWith(J, [Q]),
              Q.fn.triggerHandler &&
                (Q(J).triggerHandler('ready'), Q(J).off('ready'))
            )
        )
    }
  }), (Q.ready.promise = function(t) {
    return he ||
      (
        (he = Q.Deferred()),
        'complete' === J.readyState
          ? setTimeout(Q.ready)
          : (
              J.addEventListener('DOMContentLoaded', s, !1),
              e.addEventListener('load', s, !1)
            )
      ), he.promise(t)
  }), Q.ready.promise()
  var pe = (Q.access = function(e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n
    if ('object' === Q.type(n)) {
      i = !0
      for (a in n) Q.access(e, t, a, n[a], !0, o, s)
    } else if (
      void 0 !== r &&
      (
        (i = !0),
        Q.isFunction(r) || (s = !0),
        l &&
          (s
            ? (t.call(e, r), (t = null))
            : (
                (l = t),
                (t = function(e, t, n) {
                  return l.call(Q(e), n)
                })
              )),
        t
      )
    )
      for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)))
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  })
  ;(Q.acceptData = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }), (a.uid = 1), (a.accepts = Q.acceptData), (a.prototype = {
    key: function(e) {
      if (!a.accepts(e)) return 0
      var t = {},
        n = e[this.expando]
      if (!n) {
        n = a.uid++
        try {
          ;(t[this.expando] = { value: n }), Object.defineProperties(e, t)
        } catch (r) {
          ;(t[this.expando] = n), Q.extend(e, t)
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n
    },
    set: function(e, t, n) {
      var r,
        i = this.key(e),
        o = this.cache[i]
      if ('string' == typeof t) o[t] = n
      else if (Q.isEmptyObject(o)) Q.extend(this.cache[i], t)
      else for (r in t) o[r] = t[r]
      return o
    },
    get: function(e, t) {
      var n = this.cache[this.key(e)]
      return void 0 === t ? n : n[t]
    },
    access: function(e, t, n) {
      var r
      return void 0 === t || (t && 'string' == typeof t && void 0 === n)
        ? ((r = this.get(e, t)), void 0 !== r ? r : this.get(e, Q.camelCase(t)))
        : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n,
        r,
        i,
        o = this.key(e),
        s = this.cache[o]
      if (void 0 === t) this.cache[o] = {}
      else {
        Q.isArray(t)
          ? (r = t.concat(t.map(Q.camelCase)))
          : (
              (i = Q.camelCase(t)),
              t in s
                ? (r = [t, i])
                : ((r = i), (r = r in s ? [r] : r.match(de) || []))
            ), (n = r.length)
        for (; n--; ) delete s[r[n]]
      }
    },
    hasData: function(e) {
      return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
    },
    discard: function(e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  })
  var me = new a(),
    ge = new a(),
    ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ve = /([A-Z])/g
  Q.extend({
    hasData: function(e) {
      return ge.hasData(e) || me.hasData(e)
    },
    data: function(e, t, n) {
      return ge.access(e, t, n)
    },
    removeData: function(e, t) {
      ge.remove(e, t)
    },
    _data: function(e, t, n) {
      return me.access(e, t, n)
    },
    _removeData: function(e, t) {
      me.remove(e, t)
    }
  }), Q.fn.extend({
    data: function(e, t) {
      var n,
        r,
        i,
        o = this[0],
        s = o && o.attributes
      if (void 0 === e) {
        if (
          this.length &&
          ((i = ge.get(o)), 1 === o.nodeType && !me.get(o, 'hasDataAttrs'))
        ) {
          for (n = s.length; n--; )
            s[n] &&
              (
                (r = s[n].name),
                0 === r.indexOf('data-') &&
                  ((r = Q.camelCase(r.slice(5))), u(o, r, i[r]))
              )
          me.set(o, 'hasDataAttrs', !0)
        }
        return i
      }
      return 'object' == typeof e
        ? this.each(function() {
            ge.set(this, e)
          })
        : pe(
            this,
            function(t) {
              var n,
                r = Q.camelCase(e)
              if (o && void 0 === t) {
                if (void 0 !== (n = ge.get(o, e))) return n
                if (void 0 !== (n = ge.get(o, r))) return n
                if (void 0 !== (n = u(o, r, void 0))) return n
              } else
                this.each(function() {
                  var n = ge.get(this, r)
                  ge.set(
                    this,
                    r,
                    t
                  ), -1 !== e.indexOf('-') && void 0 !== n && ge.set(this, e, t)
                })
            },
            null,
            t,
            arguments.length > 1,
            null,
            !0
          )
    },
    removeData: function(e) {
      return this.each(function() {
        ge.remove(this, e)
      })
    }
  }), Q.extend({
    queue: function(e, t, n) {
      var r
      if (e)
        return (t = (t || 'fx') + 'queue'), (r = me.get(e, t)), n &&
          (!r || Q.isArray(n)
            ? (r = me.access(e, t, Q.makeArray(n)))
            : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || 'fx'
      var n = Q.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = Q._queueHooks(e, t),
        s = function() {
          Q.dequeue(e, t)
        }
      'inprogress' === i && ((i = n.shift()), r--), i &&
        (
          'fx' === t && n.unshift('inprogress'),
          delete o.stop,
          i.call(e, s, o)
        ), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + 'queueHooks'
      return (
        me.get(e, n) ||
        me.access(e, n, {
          empty: Q.Callbacks('once memory').add(function() {
            me.remove(e, [t + 'queue', n])
          })
        })
      )
    }
  }), Q.fn.extend({
    queue: function(e, t) {
      var n = 2
      return 'string' != typeof e &&
        ((t = e), (e = 'fx'), n--), arguments.length < n
        ? Q.queue(this[0], e)
        : void 0 === t
          ? this
          : this.each(function() {
              var n = Q.queue(this, e, t)
              Q._queueHooks(
                this,
                e
              ), 'fx' === e && 'inprogress' !== n[0] && Q.dequeue(this, e)
            })
    },
    dequeue: function(e) {
      return this.each(function() {
        Q.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || 'fx', [])
    },
    promise: function(e, t) {
      var n,
        r = 1,
        i = Q.Deferred(),
        o = this,
        s = this.length,
        a = function() {
          --r || i.resolveWith(o, [o])
        }
      for (
        'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
        s--;

      )
        (n = me.get(o[s], e + 'queueHooks')) && n.empty && (r++, n.empty.add(a))
      return a(), i.promise(t)
    }
  })
  var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    xe = ['Top', 'Right', 'Bottom', 'Left'],
    _e = function(e, t) {
      return (e = t || e), 'none' === Q.css(e, 'display') ||
        !Q.contains(e.ownerDocument, e)
    },
    be = /^(?:checkbox|radio)$/i
  !(function() {
    var e = J.createDocumentFragment(),
      t = e.appendChild(J.createElement('div')),
      n = J.createElement('input')
    n.setAttribute(
      'type',
      'radio'
    ), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), t.appendChild(n), (X.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked), (t.innerHTML = '<textarea>x</textarea>'), (X.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue)
  })()
  X.focusinBubbles = 'onfocusin' in e
  var ke = /^key/,
    Se = /^(?:mouse|pointer|contextmenu)|click/,
    Te = /^(?:focusinfocus|focusoutblur)$/,
    De = /^([^.]*)(?:\.(.+)|)$/
  ;(Q.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        d,
        f,
        h,
        p,
        m,
        g = me.get(e)
      if (g)
        for (
          n.handler && ((o = n), (n = o.handler), (i = o.selector)), n.guid ||
            (n.guid = Q.guid++), (u = g.events) || (u = g.events = {}), (s =
            g.handle) ||
            (s = g.handle = function(t) {
              return void 0 !== Q && Q.event.triggered !== t.type
                ? Q.event.dispatch.apply(e, arguments)
                : void 0
            }), t = (t || '').match(de) || [''], l = t.length;
          l--;

        )
          (a = De.exec(t[l]) || []), (h = m = a[1]), (p = (a[2] || '')
            .split('.')
            .sort()), h &&
            (
              (d = Q.event.special[h] || {}),
              (h = (i ? d.delegateType : d.bindType) || h),
              (d = Q.event.special[h] || {}),
              (c = Q.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && Q.expr.match.needsContext.test(i),
                  namespace: p.join('.')
                },
                o
              )),
              (f = u[h]) ||
                (
                  (f = u[h] = []),
                  (f.delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(e, r, p, s)) ||
                    (e.addEventListener && e.addEventListener(h, s, !1))
                ),
              d.add &&
                (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
              (Q.event.global[h] = !0)
            )
    },
    remove: function(e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        d,
        f,
        h,
        p,
        m,
        g = me.hasData(e) && me.get(e)
      if (g && (u = g.events)) {
        for (t = (t || '').match(de) || [''], l = t.length; l--; )
          if (
            (
              (a = De.exec(t[l]) || []),
              (h = m = a[1]),
              (p = (a[2] || '').split('.').sort()),
              h
            )
          ) {
            for (
              d = Q.event.special[h] || {}, h =
                (r ? d.delegateType : d.bindType) || h, f = u[h] || [], a =
                a[2] &&
                new RegExp(
                  '(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'
                ), s = o = f.length;
              o--;

            )
              (c = f[o]), (!i && m !== c.origType) ||
                (n && n.guid !== c.guid) ||
                (a && !a.test(c.namespace)) ||
                (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                (
                  f.splice(o, 1),
                  c.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, c)
                )
            s &&
              !f.length &&
              (
                (d.teardown && !1 !== d.teardown.call(e, p, g.handle)) ||
                  Q.removeEvent(e, h, g.handle),
                delete u[h]
              )
          } else for (h in u) Q.event.remove(e, h + t[l], n, r, !0)
        Q.isEmptyObject(u) && (delete g.handle, me.remove(e, 'events'))
      }
    },
    trigger: function(t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        d,
        f = [r || J],
        h = Z.call(t, 'type') ? t.type : t,
        p = Z.call(t, 'namespace') ? t.namespace.split('.') : []
      if (
        (
          (s = a = r = r || J),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !Te.test(h + Q.event.triggered) &&
            (
              h.indexOf('.') >= 0 &&
                ((p = h.split('.')), (h = p.shift()), p.sort()),
              (l = h.indexOf(':') < 0 && 'on' + h),
              (t = t[Q.expando]
                ? t
                : new Q.Event(h, 'object' == typeof t && t)),
              (t.isTrigger = i ? 2 : 3),
              (t.namespace = p.join('.')),
              (t.namespace_re = t.namespace
                ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (t.result = void 0),
              t.target || (t.target = r),
              (n = null == n ? [t] : Q.makeArray(n, [t])),
              (d = Q.event.special[h] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, n)
            )
        )
      ) {
        if (!i && !d.noBubble && !Q.isWindow(r)) {
          for (
            u = d.delegateType || h, Te.test(u + h) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (a = s)
          a === (r.ownerDocument || J) &&
            f.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0; (s = f[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : d.bindType || h), (c =
            (me.get(s, 'events') || {})[t.type] && me.get(s, 'handle')), c &&
            c.apply(s, n), (c = l && s[l]) &&
            c.apply &&
            Q.acceptData(s) &&
            ((t.result = c.apply(s, n)), !1 === t.result && t.preventDefault())
        return (t.type = h), i ||
          t.isDefaultPrevented() ||
          (d._default && !1 !== d._default.apply(f.pop(), n)) ||
          !Q.acceptData(r) ||
          (l &&
            Q.isFunction(r[h]) &&
            !Q.isWindow(r) &&
            (
              (a = r[l]),
              a && (r[l] = null),
              (Q.event.triggered = h),
              r[h](),
              (Q.event.triggered = void 0),
              a && (r[l] = a)
            )), t.result
      }
    },
    dispatch: function(e) {
      e = Q.event.fix(e)
      var t,
        n,
        r,
        i,
        o,
        s = [],
        a = U.call(arguments),
        u = (me.get(this, 'events') || {})[e.type] || [],
        l = Q.event.special[e.type] || {}
      if (
        (
          (a[0] = e),
          (e.delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, e)
        )
      ) {
        for (
          s = Q.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.namespace_re && !e.namespace_re.test(o.namespace)) ||
              (
                (e.handleObj = o),
                (e.data = o.data),
                void 0 !==
                  (r = ((Q.event.special[o.origType] || {}).handle || o.handler)
                    .apply(i.elem, a)) &&
                  !1 === (e.result = r) &&
                  (e.preventDefault(), e.stopPropagation())
              )
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        u = e.target
      if (a && u.nodeType && (!e.button || 'click' !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (!0 !== u.disabled || 'click' !== e.type) {
            for (r = [], n = 0; n < a; n++)
              (o = t[n]), (i = o.selector + ' '), void 0 === r[i] &&
                (r[i] = o.needsContext
                  ? Q(i, this).index(u) >= 0
                  : Q.find(i, this, null, [u]).length), r[i] && r.push(o)
            r.length && s.push({ elem: u, handlers: r })
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '
    ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function(e, t) {
        return null == e.which &&
          (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '
      ),
      filter: function(e, t) {
        var n,
          r,
          i,
          o = t.button
        return null == e.pageX &&
          null != t.clientX &&
          (
            (n = e.target.ownerDocument || J),
            (r = n.documentElement),
            (i = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
              ((r && r.clientTop) || (i && i.clientTop) || 0))
          ), e.which ||
          void 0 === o ||
          (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[Q.expando]) return e
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i]
      for (
        s ||
          (this.fixHooks[i] = s = Se.test(i)
            ? this.mouseHooks
            : ke.test(i) ? this.keyHooks : {}), r = s.props
          ? this.props.concat(s.props)
          : this.props, e = new Q.Event(o), t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n])
      return e.target || (e.target = J), 3 === e.target.nodeType &&
        (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== d() && this.focus) return this.focus(), !1
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          if (this === d() && this.blur) return this.blur(), !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          if (
            'checkbox' === this.type &&
            this.click &&
            Q.nodeName(this, 'input')
          )
            return this.click(), !1
        },
        _default: function(e) {
          return Q.nodeName(e.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = Q.extend(new Q.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      })
      r
        ? Q.event.trigger(i, null, t)
        : Q.event.dispatch.call(t, i), i.isDefaultPrevented() &&
        n.preventDefault()
    }
  }), (Q.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }), (Q.Event = function(e, t) {
    if (!(this instanceof Q.Event)) return new Q.Event(e, t)
    e && e.type
      ? (
          (this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? l
              : c)
        )
      : (this.type = e), t && Q.extend(this, t), (this.timeStamp =
      (e && e.timeStamp) || Q.now()), (this[Q.expando] = !0)
  }), (Q.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function() {
      var e = this.originalEvent
      ;(this.isDefaultPrevented = l), e &&
        e.preventDefault &&
        e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent
      ;(this.isPropagationStopped = l), e &&
        e.stopPropagation &&
        e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent
      ;(this.isImmediatePropagationStopped = l), e &&
        e.stopImmediatePropagation &&
        e.stopImmediatePropagation(), this.stopPropagation()
    }
  }), Q.each(
    {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      pointerenter: 'pointerover',
      pointerleave: 'pointerout'
    },
    function(e, t) {
      Q.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj
          return (i && (i === r || Q.contains(r, i))) ||
            (
              (e.type = o.origType),
              (n = o.handler.apply(this, arguments)),
              (e.type = t)
            ), n
        }
      }
    }
  ), X.focusinBubbles ||
    Q.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
      var n = function(e) {
        Q.event.simulate(t, e.target, Q.event.fix(e), !0)
      }
      Q.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            i = me.access(r, t)
          i || r.addEventListener(e, n, !0), me.access(r, t, (i || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            i = me.access(r, t) - 1
          i
            ? me.access(r, t, i)
            : (r.removeEventListener(e, n, !0), me.remove(r, t))
        }
      }
    }), Q.fn.extend({
    on: function(e, t, n, r, i) {
      var o, s
      if ('object' == typeof e) {
        'string' != typeof t && ((n = n || t), (t = void 0))
        for (s in e) this.on(s, t, n, e[s], i)
        return this
      }
      if (
        (
          null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ('string' == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          !1 === r
        )
      )
        r = c
      else if (!r) return this
      return 1 === i &&
        (
          (o = r),
          (r = function(e) {
            return Q().off(e), o.apply(this, arguments)
          }),
          (r.guid = o.guid || (o.guid = Q.guid++))
        ), this.each(function() {
        Q.event.add(this, e, r, n, t)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i
      if (e && e.preventDefault && e.handleObj)
        return (r = e.handleObj), Q(e.delegateTarget).off(
          r.namespace ? r.origType + '.' + r.namespace : r.origType,
          r.selector,
          r.handler
        ), this
      if ('object' == typeof e) {
        for (i in e) this.off(i, t, e[i])
        return this
      }
      return (!1 !== t && 'function' != typeof t) ||
        ((n = t), (t = void 0)), !1 === n && (n = c), this.each(function() {
        Q.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        Q.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0]
      if (n) return Q.event.trigger(e, t, n, !0)
    }
  })
  var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ce = /<([\w:]+)/,
    Ee = /<|&#?\w+;/,
    Ne = /<(?:script|style|link)/i,
    Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ye = /^$|\/(?:java|ecma)script/i,
    je = /^true\/(.*)/,
    Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Le = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    }
  ;(Le.optgroup =
    Le.option), (Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead), (Le.th = Le.td), Q.extend(
    {
      clone: function(e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.cloneNode(!0),
          u = Q.contains(e.ownerDocument, e)
        if (
          !(
            X.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            Q.isXMLDoc(e)
          )
        )
          for (s = y(a), o = y(e), r = 0, i = o.length; r < i; r++)
            v(o[r], s[r])
        if (t)
          if (n)
            for (o = o || y(e), s = s || y(a), r = 0, i = o.length; r < i; r++)
              g(o[r], s[r])
          else g(e, a)
        return (s = y(a, 'script')), s.length > 0 &&
          m(s, !u && y(e, 'script')), a
      },
      buildFragment: function(e, t, n, r) {
        for (
          var i,
            o,
            s,
            a,
            u,
            l,
            c = t.createDocumentFragment(),
            d = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((i = e[f]) || 0 === i)
            if ('object' === Q.type(i)) Q.merge(d, i.nodeType ? [i] : i)
            else if (Ee.test(i)) {
              for (
                o = o || c.appendChild(t.createElement('div')), s = (Ce.exec(
                  i
                ) || ['', ''])[1]
                  .toLowerCase(), a = Le[s] || Le._default, o.innerHTML =
                  a[1] + i.replace(Me, '<$1></$2>') + a[2], l = a[0];
                l--;

              )
                o = o.lastChild
              Q.merge(d, o.childNodes), (o = c.firstChild), (o.textContent = '')
            } else d.push(t.createTextNode(i))
        for (c.textContent = '', f = 0; (i = d[f++]); )
          if (
            (!r || -1 === Q.inArray(i, r)) &&
            (
              (u = Q.contains(i.ownerDocument, i)),
              (o = y(c.appendChild(i), 'script')),
              u && m(o),
              n
            )
          )
            for (l = 0; (i = o[l++]); ) Ye.test(i.type || '') && n.push(i)
        return c
      },
      cleanData: function(e) {
        for (
          var t, n, r, i, o = Q.event.special, s = 0;
          void 0 !== (n = e[s]);
          s++
        ) {
          if (Q.acceptData(n) && (i = n[me.expando]) && (t = me.cache[i])) {
            if (t.events)
              for (r in t.events)
                o[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle)
            me.cache[i] && delete me.cache[i]
          }
          delete ge.cache[n[ge.expando]]
        }
      }
    }
  ), Q.fn.extend({
    text: function(e) {
      return pe(
        this,
        function(e) {
          return void 0 === e
            ? Q.text(this)
            : this.empty().each(function() {
                ;(1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = e)
              })
        },
        null,
        e,
        arguments.length
      )
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          f(this, e).appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          var t = f(this, e)
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (
        var n, r = e ? Q.filter(e, this) : this, i = 0;
        null != (n = r[i]);
        i++
      )
        t || 1 !== n.nodeType || Q.cleanData(y(n)), n.parentNode &&
          (
            t && Q.contains(n.ownerDocument, n) && m(y(n, 'script')),
            n.parentNode.removeChild(n)
          )
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++)
        1 === e.nodeType && (Q.cleanData(y(e, !1)), (e.textContent = ''))
      return this
    },
    clone: function(e, t) {
      return (e = null != e && e), (t =
        null == t ? e : t), this.map(function() {
        return Q.clone(this, e, t)
      })
    },
    html: function(e) {
      return pe(
        this,
        function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML
          if (
            'string' == typeof e &&
            !Ne.test(e) &&
            !Le[(Ce.exec(e) || ['', ''])[1].toLowerCase()]
          ) {
            e = e.replace(Me, '<$1></$2>')
            try {
              for (; n < r; n++)
                (t = this[n] || {}), 1 === t.nodeType &&
                  (Q.cleanData(y(t, !1)), (t.innerHTML = e))
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        },
        null,
        e,
        arguments.length
      )
    },
    replaceWith: function() {
      var e = arguments[0]
      return this.domManip(arguments, function(t) {
        ;(e = this
          .parentNode), Q.cleanData(y(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = V.apply([], e)
      var n,
        r,
        i,
        o,
        s,
        a,
        u = 0,
        l = this.length,
        c = this,
        d = l - 1,
        f = e[0],
        m = Q.isFunction(f)
      if (m || (l > 1 && 'string' == typeof f && !X.checkClone && Oe.test(f)))
        return this.each(function(n) {
          var r = c.eq(n)
          m && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
        })
      if (
        l &&
        (
          (n = Q.buildFragment(e, this[0].ownerDocument, !1, this)),
          (r = n.firstChild),
          1 === n.childNodes.length && (n = r),
          r
        )
      ) {
        for (i = Q.map(y(n, 'script'), h), o = i.length; u < l; u++)
          (s = n), u !== d &&
            ((s = Q.clone(s, !0, !0)), o && Q.merge(i, y(s, 'script'))), t.call(
            this[u],
            s,
            u
          )
        if (o)
          for (
            a = i[i.length - 1].ownerDocument, Q.map(i, p), u = 0;
            u < o;
            u++
          )
            (s = i[u]), Ye.test(s.type || '') &&
              !me.access(s, 'globalEval') &&
              Q.contains(a, s) &&
              (s.src
                ? Q._evalUrl && Q._evalUrl(s.src)
                : Q.globalEval(s.textContent.replace(Pe, '')))
      }
      return this
    }
  }), Q.each(
    {
      appendTo: 'append',
      prependTo: 'prepend',
      insertBefore: 'before',
      insertAfter: 'after',
      replaceAll: 'replaceWith'
    },
    function(e, t) {
      Q.fn[e] = function(e) {
        for (var n, r = [], i = Q(e), o = i.length - 1, s = 0; s <= o; s++)
          (n = s === o ? this : this.clone(!0)), Q(i[s])[t](n), $.apply(
            r,
            n.get()
          )
        return this.pushStack(r)
      }
    }
  )
  var Ae,
    He = {},
    We = /^margin/,
    Fe = new RegExp('^(' + we + ')(?!px)[a-z%]+$', 'i'),
    Re = function(t) {
      return t.ownerDocument.defaultView.opener
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : e.getComputedStyle(t, null)
    }
  !(function() {
    function t() {
      ;(s.style.cssText =
        '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'), (s.innerHTML = ''), i.appendChild(o)
      var t = e.getComputedStyle(s, null)
      ;(n = '1%' !== t.top), (r = '4px' === t.width), i.removeChild(o)
    }
    var n,
      r,
      i = J.documentElement,
      o = J.createElement('div'),
      s = J.createElement('div')
    s.style &&
      (
        (s.style.backgroundClip = 'content-box'),
        (s.cloneNode(!0).style.backgroundClip = ''),
        (X.clearCloneStyle = 'content-box' === s.style.backgroundClip),
        (o.style.cssText =
          'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
        o.appendChild(s),
        e.getComputedStyle &&
          Q.extend(X, {
            pixelPosition: function() {
              return t(), n
            },
            boxSizingReliable: function() {
              return null == r && t(), r
            },
            reliableMarginRight: function() {
              var t,
                n = s.appendChild(J.createElement('div'))
              return (n.style.cssText = s.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'), (n.style.marginRight = n.style.width =
                '0'), (s.style.width = '1px'), i.appendChild(
                o
              ), (t = !parseFloat(
                e.getComputedStyle(n, null).marginRight
              )), i.removeChild(o), s.removeChild(n), t
            }
          })
      )
  })(), (Q.swap = function(e, t, n, r) {
    var i,
      o,
      s = {}
    for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o])
    i = n.apply(e, r || [])
    for (o in t) e.style[o] = s[o]
    return i
  })
  var qe = /^(none|table(?!-c[ea]).+)/,
    Ie = new RegExp('^(' + we + ')(.*)$', 'i'),
    Ue = new RegExp('^([+-])=(' + we + ')', 'i'),
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    $e = { letterSpacing: '0', fontWeight: '400' },
    Ge = ['Webkit', 'O', 'Moz', 'ms']
  Q.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = _(e, 'opacity')
            return '' === n ? '1' : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = Q.camelCase(t),
          u = e.style
        if (
          (
            (t = Q.cssProps[a] || (Q.cssProps[a] = k(u, a))),
            (s = Q.cssHooks[t] || Q.cssHooks[a]),
            void 0 === n
          )
        )
          return s && 'get' in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t]
        ;(o = typeof n), 'string' === o &&
          (i = Ue.exec(n)) &&
          (
            (n = (i[1] + 1) * i[2] + parseFloat(Q.css(e, t))),
            (o = 'number')
          ), null != n &&
          n === n &&
          (
            'number' !== o || Q.cssNumber[a] || (n += 'px'),
            X.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, r))) || (u[t] = n)
          )
      }
    },
    css: function(e, t, n, r) {
      var i,
        o,
        s,
        a = Q.camelCase(t)
      return (t = Q.cssProps[a] || (Q.cssProps[a] = k(e.style, a))), (s =
        Q.cssHooks[t] || Q.cssHooks[a]), s &&
        'get' in s &&
        (i = s.get(e, !0, n)), void 0 === i && (i = _(e, t, r)), 'normal' ===
        i &&
        t in $e &&
        (i = $e[t]), '' === n || n
        ? ((o = parseFloat(i)), !0 === n || Q.isNumeric(o) ? o || 0 : i)
        : i
    }
  }), Q.each(['height', 'width'], function(e, t) {
    Q.cssHooks[t] = {
      get: function(e, n, r) {
        if (n)
          return qe.test(Q.css(e, 'display')) && 0 === e.offsetWidth
            ? Q.swap(e, Ve, function() {
                return D(e, t, r)
              })
            : D(e, t, r)
      },
      set: function(e, n, r) {
        var i = r && Re(e)
        return S(
          e,
          n,
          r ? T(e, t, r, 'border-box' === Q.css(e, 'boxSizing', !1, i), i) : 0
        )
      }
    }
  }), (Q.cssHooks.marginRight = b(X.reliableMarginRight, function(e, t) {
    if (t) return Q.swap(e, { display: 'inline-block' }, _, [e, 'marginRight'])
  })), Q.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
    ;(Q.cssHooks[e + t] = {
      expand: function(n) {
        for (
          var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
          r < 4;
          r++
        )
          i[e + xe[r] + t] = o[r] || o[r - 2] || o[0]
        return i
      }
    }), We.test(e) || (Q.cssHooks[e + t].set = S)
  }), Q.fn.extend({
    css: function(e, t) {
      return pe(
        this,
        function(e, t, n) {
          var r,
            i,
            o = {},
            s = 0
          if (Q.isArray(t)) {
            for (r = Re(e), i = t.length; s < i; s++)
              o[t[s]] = Q.css(e, t[s], !1, r)
            return o
          }
          return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
        },
        e,
        t,
        arguments.length > 1
      )
    },
    show: function() {
      return M(this, !0)
    },
    hide: function() {
      return M(this)
    },
    toggle: function(e) {
      return 'boolean' == typeof e
        ? e ? this.show() : this.hide()
        : this.each(function() {
            _e(this) ? Q(this).show() : Q(this).hide()
          })
    }
  }), (Q.Tween = C), (C.prototype = {
    constructor: C,
    init: function(e, t, n, r, i, o) {
      ;(this.elem = e), (this.prop = n), (this.easing =
        i ||
        'swing'), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit =
        o || (Q.cssNumber[n] ? '' : 'px'))
    },
    cur: function() {
      var e = C.propHooks[this.prop]
      return e && e.get ? e.get(this) : C.propHooks._default.get(this)
    },
    run: function(e) {
      var t,
        n = C.propHooks[this.prop]
      return this.options.duration
        ? (this.pos = t = Q.easing[this.easing](
            e,
            this.options.duration * e,
            0,
            1,
            this.options.duration
          ))
        : (this.pos = t = e), (this.now =
        (this.end - this.start) * t + this.start), this.options.step &&
        this.options.step.call(this.elem, this.now, this), n && n.set
        ? n.set(this)
        : C.propHooks._default.set(this), this
    }
  }), (C.prototype.init.prototype = C.prototype), (C.propHooks = {
    _default: {
      get: function(e) {
        var t
        return null == e.elem[e.prop] ||
        (e.elem.style && null != e.elem.style[e.prop])
          ? ((t = Q.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0)
          : e.elem[e.prop]
      },
      set: function(e) {
        Q.fx.step[e.prop]
          ? Q.fx.step[e.prop](e)
          : e.elem.style &&
            (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop])
            ? Q.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now)
      }
    }
  }), (C.propHooks.scrollTop = C.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }), (Q.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    }
  }), (Q.fx = C.prototype.init), (Q.fx.step = {})
  var ze,
    Be,
    Ze = /^(?:toggle|show|hide)$/,
    Xe = new RegExp('^(?:([+-])=|)(' + we + ')([a-z%]*)$', 'i'),
    Je = /queueHooks$/,
    Qe = [Y],
    Ke = {
      '*': [
        function(e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = Xe.exec(t),
            o = (i && i[3]) || (Q.cssNumber[e] ? '' : 'px'),
            s =
              (Q.cssNumber[e] || ('px' !== o && +r)) &&
              Xe.exec(Q.css(n.elem, e)),
            a = 1,
            u = 20
          if (s && s[3] !== o) {
            ;(o = o || s[3]), (i = i || []), (s = +r || 1)
            do {
              ;(a = a || '.5'), (s /= a), Q.style(n.elem, e, s + o)
            } while (a !== (a = n.cur() / r) && 1 !== a && --u)
          }
          return i &&
            (
              (s = n.start = +s || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])
            ), n
        }
      ]
    }
  ;(Q.Animation = Q.extend(P, {
    tweener: function(e, t) {
      Q.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '))
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (Ke[n] = Ke[n] || []), Ke[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? Qe.unshift(e) : Qe.push(e)
    }
  })), (Q.speed = function(e, t, n) {
    var r =
      e && 'object' == typeof e
        ? Q.extend({}, e)
        : {
            complete: n || (!n && t) || (Q.isFunction(e) && e),
            duration: e,
            easing: (n && t) || (t && !Q.isFunction(t) && t)
          }
    return (r.duration = Q.fx.off
      ? 0
      : 'number' == typeof r.duration
        ? r.duration
        : r.duration in Q.fx.speeds
          ? Q.fx.speeds[r.duration]
          : Q.fx.speeds._default), (null != r.queue && !0 !== r.queue) ||
      (r.queue = 'fx'), (r.old = r.complete), (r.complete = function() {
      Q.isFunction(r.old) && r.old.call(this), r.queue &&
        Q.dequeue(this, r.queue)
    }), r
  }), Q.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(_e)
        .css('opacity', 0)
        .show()
        .end()
        .animate({ opacity: t }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = Q.isEmptyObject(e),
        o = Q.speed(t, n, r),
        s = function() {
          var t = P(this, Q.extend({}, e), o)
          ;(i || me.get(this, 'finish')) && t.stop(!0)
        }
      return (s.finish = s), i || !1 === o.queue
        ? this.each(s)
        : this.queue(o.queue, s)
    },
    stop: function(e, t, n) {
      var r = function(e) {
        var t = e.stop
        delete e.stop, t(n)
      }
      return 'string' != typeof e && ((n = t), (t = e), (e = void 0)), t &&
        !1 !== e &&
        this.queue(e || 'fx', []), this.each(function() {
        var t = !0,
          i = null != e && e + 'queueHooks',
          o = Q.timers,
          s = me.get(this)
        if (i) s[i] && s[i].stop && r(s[i])
        else for (i in s) s[i] && s[i].stop && Je.test(i) && r(s[i])
        for (i = o.length; i--; )
          o[i].elem !== this ||
            (null != e && o[i].queue !== e) ||
            (o[i].anim.stop(n), (t = !1), o.splice(i, 1))
        ;(!t && n) || Q.dequeue(this, e)
      })
    },
    finish: function(e) {
      return !1 !== e && (e = e || 'fx'), this.each(function() {
        var t,
          n = me.get(this),
          r = n[e + 'queue'],
          i = n[e + 'queueHooks'],
          o = Q.timers,
          s = r ? r.length : 0
        for (
          n.finish = !0, Q.queue(this, e, []), i &&
            i.stop &&
            i.stop.call(this, !0), t = o.length;
          t--;

        )
          o[t].elem === this &&
            o[t].queue === e &&
            (o[t].anim.stop(!0), o.splice(t, 1))
        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this)
        delete n.finish
      })
    }
  }), Q.each(['toggle', 'show', 'hide'], function(e, t) {
    var n = Q.fn[t]
    Q.fn[t] = function(e, r, i) {
      return null == e || 'boolean' == typeof e
        ? n.apply(this, arguments)
        : this.animate(N(t, !0), e, r, i)
    }
  }), Q.each(
    {
      slideDown: N('show'),
      slideUp: N('hide'),
      slideToggle: N('toggle'),
      fadeIn: { opacity: 'show' },
      fadeOut: { opacity: 'hide' },
      fadeToggle: { opacity: 'toggle' }
    },
    function(e, t) {
      Q.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }
  ), (Q.timers = []), (Q.fx.tick = function() {
    var e,
      t = 0,
      n = Q.timers
    for (ze = Q.now(); t < n.length; t++)
      (e = n[t])() || n[t] !== e || n.splice(t--, 1)
    n.length || Q.fx.stop(), (ze = void 0)
  }), (Q.fx.timer = function(e) {
    Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
  }), (Q.fx.interval = 13), (Q.fx.start = function() {
    Be || (Be = setInterval(Q.fx.tick, Q.fx.interval))
  }), (Q.fx.stop = function() {
    clearInterval(Be), (Be = null)
  }), (Q.fx.speeds = { slow: 600, fast: 200, _default: 400 }), (Q.fn.delay = function(
    e,
    t
  ) {
    return (e = Q.fx ? Q.fx.speeds[e] || e : e), (t =
      t || 'fx'), this.queue(t, function(t, n) {
      var r = setTimeout(t, e)
      n.stop = function() {
        clearTimeout(r)
      }
    })
  }), (function() {
    var e = J.createElement('input'),
      t = J.createElement('select'),
      n = t.appendChild(J.createElement('option'))
    ;(e.type =
      'checkbox'), (X.checkOn = '' !== e.value), (X.optSelected = n.selected), (t.disabled = !0), (X.optDisabled = !n.disabled), (e = J.createElement('input')), (e.value = 't'), (e.type = 'radio'), (X.radioValue = 't' === e.value)
  })()
  var et,
    tt = Q.expr.attrHandle
  Q.fn.extend({
    attr: function(e, t) {
      return pe(this, Q.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        Q.removeAttr(this, e)
      })
    }
  }), Q.extend({
    attr: function(e, t, n) {
      var r,
        i,
        o = e.nodeType
      if (e && 3 !== o && 8 !== o && 2 !== o)
        return void 0 === e.getAttribute
          ? Q.prop(e, t, n)
          : (
              (1 === o && Q.isXMLDoc(e)) ||
                (
                  (t = t.toLowerCase()),
                  (r =
                    Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? et : void 0))
                ),
              void 0 === n
                ? r && 'get' in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = Q.find.attr(e, t)), null == i ? void 0 : i)
                : null !== n
                  ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ''), n)
                  : void Q.removeAttr(e, t)
            )
    },
    removeAttr: function(e, t) {
      var n,
        r,
        i = 0,
        o = t && t.match(de)
      if (o && 1 === e.nodeType)
        for (; (n = o[i++]); )
          (r = Q.propFix[n] || n), Q.expr.match.bool.test(n) &&
            (e[r] = !1), e.removeAttribute(n)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!X.radioValue && 'radio' === t && Q.nodeName(e, 'input')) {
            var n = e.value
            return e.setAttribute('type', t), n && (e.value = n), t
          }
        }
      }
    }
  }), (et = {
    set: function(e, t, n) {
      return !1 === t ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }), Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = tt[t] || Q.find.attr
    tt[t] = function(e, t, r) {
      var i, o
      return r ||
        (
          (o = tt[t]),
          (tt[t] = i),
          (i = null != n(e, t, r) ? t.toLowerCase() : null),
          (tt[t] = o)
        ), i
    }
  })
  var nt = /^(?:input|select|textarea|button)$/i
  Q.fn.extend({
    prop: function(e, t) {
      return pe(this, Q.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[Q.propFix[e] || e]
      })
    }
  }), Q.extend({
    propFix: { for: 'htmlFor', class: 'className' },
    prop: function(e, t, n) {
      var r,
        i,
        o,
        s = e.nodeType
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return (o = 1 !== s || !Q.isXMLDoc(e)), o &&
          ((t = Q.propFix[t] || t), (i = Q.propHooks[t])), void 0 !== n
          ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)
          : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          return e.hasAttribute('tabindex') || nt.test(e.nodeName) || e.href
            ? e.tabIndex
            : -1
        }
      }
    }
  }), X.optSelected ||
    (Q.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode
        return t && t.parentNode && t.parentNode.selectedIndex, null
      }
    }), Q.each(
    [
      'tabIndex',
      'readOnly',
      'maxLength',
      'cellSpacing',
      'cellPadding',
      'rowSpan',
      'colSpan',
      'useMap',
      'frameBorder',
      'contentEditable'
    ],
    function() {
      Q.propFix[this.toLowerCase()] = this
    }
  )
  var rt = /[\t\r\n\f]/g
  Q.fn.extend({
    addClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = 'string' == typeof e && e,
        u = 0,
        l = this.length
      if (Q.isFunction(e))
        return this.each(function(t) {
          Q(this).addClass(e.call(this, t, this.className))
        })
      if (a)
        for (t = (e || '').match(de) || []; u < l; u++)
          if (
            (
              (n = this[u]),
              (r =
                1 === n.nodeType &&
                (n.className
                  ? (' ' + n.className + ' ').replace(rt, ' ')
                  : ' '))
            )
          ) {
            for (o = 0; (i = t[o++]); )
              r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
            ;(s = Q.trim(r)), n.className !== s && (n.className = s)
          }
      return this
    },
    removeClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = 0 === arguments.length || ('string' == typeof e && e),
        u = 0,
        l = this.length
      if (Q.isFunction(e))
        return this.each(function(t) {
          Q(this).removeClass(e.call(this, t, this.className))
        })
      if (a)
        for (t = (e || '').match(de) || []; u < l; u++)
          if (
            (
              (n = this[u]),
              (r =
                1 === n.nodeType &&
                (n.className ? (' ' + n.className + ' ').replace(rt, ' ') : ''))
            )
          ) {
            for (o = 0; (i = t[o++]); )
              for (; r.indexOf(' ' + i + ' ') >= 0; )
                r = r.replace(' ' + i + ' ', ' ')
            ;(s = e ? Q.trim(r) : ''), n.className !== s && (n.className = s)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e
      return 'boolean' == typeof t && 'string' === n
        ? t ? this.addClass(e) : this.removeClass(e)
        : Q.isFunction(e)
          ? this.each(function(n) {
              Q(this).toggleClass(e.call(this, n, this.className, t), t)
            })
          : this.each(function() {
              if ('string' === n)
                for (
                  var t, r = 0, i = Q(this), o = e.match(de) || [];
                  (t = o[r++]);

                )
                  i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
              else
                ('undefined' !== n && 'boolean' !== n) ||
                  (
                    this.className &&
                      me.set(this, '__className__', this.className),
                    (this.className =
                      this.className || !1 === e
                        ? ''
                        : me.get(this, '__className__') || '')
                  )
            })
    },
    hasClass: function(e) {
      for (var t = ' ' + e + ' ', n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          (' ' + this[n].className + ' ').replace(rt, ' ').indexOf(t) >= 0
        )
          return !0
      return !1
    }
  })
  var it = /\r/g
  Q.fn.extend({
    val: function(e) {
      var t,
        n,
        r,
        i = this[0]
      {
        if (arguments.length)
          return (r = Q.isFunction(e)), this.each(function(n) {
            var i
            1 === this.nodeType &&
              (
                (i = r ? e.call(this, n, Q(this).val()) : e),
                null == i
                  ? (i = '')
                  : 'number' == typeof i
                    ? (i += '')
                    : Q.isArray(i) &&
                      (i = Q.map(i, function(e) {
                        return null == e ? '' : e + ''
                      })),
                ((t =
                  Q.valHooks[this.type] ||
                  Q.valHooks[this.nodeName.toLowerCase()]) &&
                  'set' in t &&
                  void 0 !== t.set(this, i, 'value')) ||
                  (this.value = i)
              )
          })
        if (i)
          return (t =
            Q.valHooks[i.type] || Q.valHooks[i.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(i, 'value'))
            ? n
            : (
                (n = i.value),
                'string' == typeof n ? n.replace(it, '') : null == n ? '' : n
              )
      }
    }
  }), Q.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = Q.find.attr(e, 'value')
          return null != t ? t : Q.trim(Q.text(e))
        }
      },
      select: {
        get: function(e) {
          for (
            var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = 'select-one' === e.type || i < 0,
              s = o ? null : [],
              a = o ? i + 1 : r.length,
              u = i < 0 ? a : o ? i : 0;
            u < a;
            u++
          )
            if (
              (
                (n = r[u]),
                (n.selected || u === i) &&
                  (X.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute('disabled')) &&
                  (!n.parentNode.disabled ||
                    !Q.nodeName(n.parentNode, 'optgroup'))
              )
            ) {
              if (((t = Q(n).val()), o)) return t
              s.push(t)
            }
          return s
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = Q.makeArray(t), s = i.length; s--; )
            (r = i[s]), (r.selected = Q.inArray(r.value, o) >= 0) && (n = !0)
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), Q.each(['radio', 'checkbox'], function() {
    ;(Q.valHooks[this] = {
      set: function(e, t) {
        if (Q.isArray(t)) return (e.checked = Q.inArray(Q(e).val(), t) >= 0)
      }
    }), X.checkOn ||
      (Q.valHooks[this].get = function(e) {
        return null === e.getAttribute('value') ? 'on' : e.value
      })
  }), Q.each(
    'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
      ' '
    ),
    function(e, t) {
      Q.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }
  ), Q.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length
        ? this.off(e, '**')
        : this.off(t, e || '**', n)
    }
  })
  var ot = Q.now(),
    st = /\?/
  ;(Q.parseJSON = function(e) {
    return JSON.parse(e + '')
  }), (Q.parseXML = function(e) {
    var t, n
    if (!e || 'string' != typeof e) return null
    try {
      ;(n = new DOMParser()), (t = n.parseFromString(e, 'text/xml'))
    } catch (e) {
      t = void 0
    }
    return (t && !t.getElementsByTagName('parsererror').length) ||
      Q.error('Invalid XML: ' + e), t
  })
  var at = /#.*$/,
    ut = /([?&])_=[^&]*/,
    lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    dt = /^(?:GET|HEAD)$/,
    ft = /^\/\//,
    ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    pt = {},
    mt = {},
    gt = '*/'.concat('*'),
    yt = e.location.href,
    vt = ht.exec(yt.toLowerCase()) || []
  Q.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yt,
      type: 'GET',
      isLocal: ct.test(vt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': gt,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': Q.parseJSON,
        'text xml': Q.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(e, t) {
      return t ? H(H(e, Q.ajaxSettings), t) : H(Q.ajaxSettings, e)
    },
    ajaxPrefilter: L(pt),
    ajaxTransport: L(mt),
    ajax: function(e, t) {
      function n(e, t, n, s) {
        var u,
          c,
          y,
          v,
          x,
          b = t
        2 !== w &&
          (
            (w = 2),
            a && clearTimeout(a),
            (r = void 0),
            (o = s || ''),
            (_.readyState = e > 0 ? 4 : 0),
            (u = (e >= 200 && e < 300) || 304 === e),
            n && (v = W(d, _, n)),
            (v = F(d, v, _, u)),
            u
              ? (
                  d.ifModified &&
                    (
                      (x = _.getResponseHeader('Last-Modified')),
                      x && (Q.lastModified[i] = x),
                      (x = _.getResponseHeader('etag')) && (Q.etag[i] = x)
                    ),
                  204 === e || 'HEAD' === d.type
                    ? (b = 'nocontent')
                    : 304 === e
                      ? (b = 'notmodified')
                      : ((b = v.state), (c = v.data), (y = v.error), (u = !y))
                )
              : ((y = b), (!e && b) || ((b = 'error'), e < 0 && (e = 0))),
            (_.status = e),
            (_.statusText = (t || b) + ''),
            u ? p.resolveWith(f, [c, b, _]) : p.rejectWith(f, [_, b, y]),
            _.statusCode(g),
            (g = void 0),
            l && h.trigger(u ? 'ajaxSuccess' : 'ajaxError', [_, d, u ? c : y]),
            m.fireWith(f, [_, b]),
            l &&
              (
                h.trigger('ajaxComplete', [_, d]),
                --Q.active || Q.event.trigger('ajaxStop')
              )
          )
      }
      'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        d = Q.ajaxSetup({}, t),
        f = d.context || d,
        h = d.context && (f.nodeType || f.jquery) ? Q(f) : Q.event,
        p = Q.Deferred(),
        m = Q.Callbacks('once memory'),
        g = d.statusCode || {},
        y = {},
        v = {},
        w = 0,
        x = 'canceled',
        _ = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t
            if (2 === w) {
              if (!s)
                for (s = {}; (t = lt.exec(o)); ) s[t[1].toLowerCase()] = t[2]
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === w ? o : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase()
            return w || ((e = v[n] = v[n] || e), (y[e] = t)), this
          },
          overrideMimeType: function(e) {
            return w || (d.mimeType = e), this
          },
          statusCode: function(e) {
            var t
            if (e)
              if (w < 2) for (t in e) g[t] = [g[t], e[t]]
              else _.always(e[_.status])
            return this
          },
          abort: function(e) {
            var t = e || x
            return r && r.abort(t), n(0, t), this
          }
        }
      if (
        (
          (p.promise(_).complete = m.add),
          (_.success = _.done),
          (_.error = _.fail),
          (d.url = ((e || d.url || yt) + '')
            .replace(at, '')
            .replace(ft, vt[1] + '//')),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = Q.trim(d.dataType || '*').toLowerCase().match(de) || [
            ''
          ]),
          null == d.crossDomain &&
            (
              (u = ht.exec(d.url.toLowerCase())),
              (d.crossDomain = !(
                !u ||
                (u[1] === vt[1] &&
                  u[2] === vt[2] &&
                  (u[3] || ('http:' === u[1] ? '80' : '443')) ===
                    (vt[3] || ('http:' === vt[1] ? '80' : '443')))
              ))
            ),
          d.data &&
            d.processData &&
            'string' != typeof d.data &&
            (d.data = Q.param(d.data, d.traditional)),
          A(pt, d, t, _),
          2 === w
        )
      )
        return _
      ;(l = Q.event && d.global), l &&
        0 == Q.active++ &&
        Q.event.trigger(
          'ajaxStart'
        ), (d.type = d.type.toUpperCase()), (d.hasContent = !dt.test(
        d.type
      )), (i = d.url), d.hasContent ||
        (
          d.data &&
            ((i = d.url += (st.test(i) ? '&' : '?') + d.data), delete d.data),
          !1 === d.cache &&
            (d.url = ut.test(i)
              ? i.replace(ut, '$1_=' + ot++)
              : i + (st.test(i) ? '&' : '?') + '_=' + ot++)
        ), d.ifModified &&
        (
          Q.lastModified[i] &&
            _.setRequestHeader('If-Modified-Since', Q.lastModified[i]),
          Q.etag[i] && _.setRequestHeader('If-None-Match', Q.etag[i])
        ), ((d.data && d.hasContent && !1 !== d.contentType) ||
        t.contentType) &&
        _.setRequestHeader('Content-Type', d.contentType), _.setRequestHeader(
        'Accept',
        d.dataTypes[0] && d.accepts[d.dataTypes[0]]
          ? d.accepts[d.dataTypes[0]] +
            ('*' !== d.dataTypes[0] ? ', ' + gt + '; q=0.01' : '')
          : d.accepts['*']
      )
      for (c in d.headers) _.setRequestHeader(c, d.headers[c])
      if (d.beforeSend && (!1 === d.beforeSend.call(f, _, d) || 2 === w))
        return _.abort()
      x = 'abort'
      for (c in { success: 1, error: 1, complete: 1 }) _[c](d[c])
      if ((r = A(mt, d, t, _))) {
        ;(_.readyState = 1), l && h.trigger('ajaxSend', [_, d]), d.async &&
          d.timeout > 0 &&
          (a = setTimeout(function() {
            _.abort('timeout')
          }, d.timeout))
        try {
          ;(w = 1), r.send(y, n)
        } catch (e) {
          if (!(w < 2)) throw e
          n(-1, e)
        }
      } else n(-1, 'No Transport')
      return _
    },
    getJSON: function(e, t, n) {
      return Q.get(e, t, n, 'json')
    },
    getScript: function(e, t) {
      return Q.get(e, void 0, t, 'script')
    }
  }), Q.each(['get', 'post'], function(e, t) {
    Q[t] = function(e, n, r, i) {
      return Q.isFunction(n) && ((i = i || r), (r = n), (n = void 0)), Q.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  }), (Q._evalUrl = function(e) {
    return Q.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      throws: !0
    })
  }), Q.fn.extend({
    wrapAll: function(e) {
      var t
      return Q.isFunction(e)
        ? this.each(function(t) {
            Q(this).wrapAll(e.call(this, t))
          })
        : (
            this[0] &&
              (
                (t = Q(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild
                    return e
                  })
                  .append(this)
              ),
            this
          )
    },
    wrapInner: function(e) {
      return Q.isFunction(e)
        ? this.each(function(t) {
            Q(this).wrapInner(e.call(this, t))
          })
        : this.each(function() {
            var t = Q(this),
              n = t.contents()
            n.length ? n.wrapAll(e) : t.append(e)
          })
    },
    wrap: function(e) {
      var t = Q.isFunction(e)
      return this.each(function(n) {
        Q(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent()
        .each(function() {
          Q.nodeName(this, 'body') || Q(this).replaceWith(this.childNodes)
        })
        .end()
    }
  }), (Q.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }), (Q.expr.filters.visible = function(e) {
    return !Q.expr.filters.hidden(e)
  })
  var wt = /%20/g,
    xt = /\[\]$/,
    _t = /\r?\n/g,
    bt = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i
  ;(Q.param = function(e, t) {
    var n,
      r = [],
      i = function(e, t) {
        ;(t = Q.isFunction(t) ? t() : null == t ? '' : t), (r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(t))
      }
    if (
      (
        void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional),
        Q.isArray(e) || (e.jquery && !Q.isPlainObject(e))
      )
    )
      Q.each(e, function() {
        i(this.name, this.value)
      })
    else for (n in e) R(n, e[n], t, i)
    return r.join('&').replace(wt, '+')
  }), Q.fn.extend({
    serialize: function() {
      return Q.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = Q.prop(this, 'elements')
        return e ? Q.makeArray(e) : this
      })
        .filter(function() {
          var e = this.type
          return (
            this.name &&
            !Q(this).is(':disabled') &&
            kt.test(this.nodeName) &&
            !bt.test(e) &&
            (this.checked || !be.test(e))
          )
        })
        .map(function(e, t) {
          var n = Q(this).val()
          return null == n
            ? null
            : Q.isArray(n)
              ? Q.map(n, function(e) {
                  return { name: t.name, value: e.replace(_t, '\r\n') }
                })
              : { name: t.name, value: n.replace(_t, '\r\n') }
        })
        .get()
    }
  }), (Q.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest()
    } catch (e) {}
  })
  var St = 0,
    Tt = {},
    Dt = { 0: 200, 1223: 204 },
    Mt = Q.ajaxSettings.xhr()
  e.attachEvent &&
    e.attachEvent('onunload', function() {
      for (var e in Tt) Tt[e]()
    }), (X.cors =
    !!Mt &&
    'withCredentials' in Mt), (X.ajax = Mt = !!Mt), Q.ajaxTransport(function(
    e
  ) {
    var t
    if (X.cors || (Mt && !e.crossDomain))
      return {
        send: function(n, r) {
          var i,
            o = e.xhr(),
            s = ++St
          if (
            (
              o.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields
            )
          )
            for (i in e.xhrFields) o[i] = e.xhrFields[i]
          e.mimeType &&
            o.overrideMimeType &&
            o.overrideMimeType(e.mimeType), e.crossDomain ||
            n['X-Requested-With'] ||
            (n['X-Requested-With'] = 'XMLHttpRequest')
          for (i in n) o.setRequestHeader(i, n[i])
          ;(t = function(e) {
            return function() {
              t &&
                (
                  delete Tt[s],
                  (t = o.onload = o.onerror = null),
                  'abort' === e
                    ? o.abort()
                    : 'error' === e
                      ? r(o.status, o.statusText)
                      : r(
                          Dt[o.status] || o.status,
                          o.statusText,
                          'string' == typeof o.responseText
                            ? { text: o.responseText }
                            : void 0,
                          o.getAllResponseHeaders()
                        )
                )
            }
          }), (o.onload = t()), (o.onerror = t('error')), (t = Tt[s] = t(
            'abort'
          ))
          try {
            o.send((e.hasContent && e.data) || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
  }), Q.ajaxSetup({
    accepts: {
      script:
        'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function(e) {
        return Q.globalEval(e), e
      }
    }
  }), Q.ajaxPrefilter('script', function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
  }), Q.ajaxTransport('script', function(e) {
    if (e.crossDomain) {
      var t, n
      return {
        send: function(r, i) {
          ;(t = Q('<script>')
            .prop({ async: !0, charset: e.scriptCharset, src: e.url })
            .on(
              'load error',
              (n = function(e) {
                t.remove(), (n = null), e &&
                  i('error' === e.type ? 404 : 200, e.type)
              })
            )), J.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }
  })
  var Ct = [],
    Et = /(=)\?(?=&|$)|\?\?/
  Q.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var e = Ct.pop() || Q.expando + '_' + ot++
      return (this[e] = !0), e
    }
  }), Q.ajaxPrefilter('json jsonp', function(t, n, r) {
    var i,
      o,
      s,
      a =
        !1 !== t.jsonp &&
        (Et.test(t.url)
          ? 'url'
          : 'string' == typeof t.data &&
            !(t.contentType || '')
              .indexOf('application/x-www-form-urlencoded') &&
            Et.test(t.data) &&
            'data')
    if (a || 'jsonp' === t.dataTypes[0])
      return (i = t.jsonpCallback = Q.isFunction(t.jsonpCallback)
        ? t.jsonpCallback()
        : t.jsonpCallback), a
        ? (t[a] = t[a].replace(Et, '$1' + i))
        : !1 !== t.jsonp &&
          (t.url +=
            (st.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), (t.converters[
        'script json'
      ] = function() {
        return s || Q.error(i + ' was not called'), s[0]
      }), (t.dataTypes[0] = 'json'), (o = e[i]), (e[i] = function() {
        s = arguments
      }), r.always(function() {
        ;(e[
          i
        ] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Ct.push(i)), s && Q.isFunction(o) && o(s[0]), (s = o = void 0)
      }), 'script'
  }), (Q.parseHTML = function(e, t, n) {
    if (!e || 'string' != typeof e) return null
    'boolean' == typeof t && ((n = t), (t = !1)), (t = t || J)
    var r = oe.exec(e),
      i = !n && []
    return r
      ? [t.createElement(r[1])]
      : (
          (r = Q.buildFragment([e], t, i)),
          i && i.length && Q(i).remove(),
          Q.merge([], r.childNodes)
        )
  })
  var Nt = Q.fn.load
  ;(Q.fn.load = function(e, t, n) {
    if ('string' != typeof e && Nt) return Nt.apply(this, arguments)
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(' ')
    return a >= 0 &&
      ((r = Q.trim(e.slice(a))), (e = e.slice(0, a))), Q.isFunction(t)
      ? ((n = t), (t = void 0))
      : t && 'object' == typeof t && (i = 'POST'), s.length > 0 &&
      Q.ajax({ url: e, type: i, dataType: 'html', data: t })
        .done(function(e) {
          ;(o = arguments), s.html(r ? Q('<div>').append(Q.parseHTML(e)).find(r) : e)
        })
        .complete(
          n &&
            function(e, t) {
              s.each(n, o || [e.responseText, t, e])
            }
        ), this
  }), Q.each(
    [
      'ajaxStart',
      'ajaxStop',
      'ajaxComplete',
      'ajaxError',
      'ajaxSuccess',
      'ajaxSend'
    ],
    function(e, t) {
      Q.fn[t] = function(e) {
        return this.on(t, e)
      }
    }
  ), (Q.expr.filters.animated = function(e) {
    return Q.grep(Q.timers, function(t) {
      return e === t.elem
    }).length
  })
  var Ot = e.document.documentElement
  ;(Q.offset = {
    setOffset: function(e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = Q.css(e, 'position'),
        d = Q(e),
        f = {}
      'static' === c &&
        (e.style.position = 'relative'), (a = d.offset()), (o = Q.css(
        e,
        'top'
      )), (u = Q.css(e, 'left')), (l =
        ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1), l
        ? ((r = d.position()), (s = r.top), (i = r.left))
        : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)), Q.isFunction(
        t
      ) && (t = t.call(e, n, a)), null != t.top &&
        (f.top = t.top - a.top + s), null != t.left &&
        (f.left = t.left - a.left + i), 'using' in t
        ? t.using.call(e, f)
        : d.css(f)
    }
  }), Q.fn.extend({
    offset: function(e) {
      if (arguments.length)
        return void 0 === e
          ? this
          : this.each(function(t) {
              Q.offset.setOffset(this, e, t)
            })
      var t,
        n,
        r = this[0],
        i = { top: 0, left: 0 },
        o = r && r.ownerDocument
      if (o)
        return (t = o.documentElement), Q.contains(t, r)
          ? (
              void 0 !== r.getBoundingClientRect &&
                (i = r.getBoundingClientRect()),
              (n = q(o)),
              {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
              }
            )
          : i
    },
    position: function() {
      if (this[0]) {
        var e,
          t,
          n = this[0],
          r = { top: 0, left: 0 }
        return 'fixed' === Q.css(n, 'position')
          ? (t = n.getBoundingClientRect())
          : (
              (e = this.offsetParent()),
              (t = this.offset()),
              Q.nodeName(e[0], 'html') || (r = e.offset()),
              (r.top += Q.css(e[0], 'borderTopWidth', !0)),
              (r.left += Q.css(e[0], 'borderLeftWidth', !0))
            ), {
          top: t.top - r.top - Q.css(n, 'marginTop', !0),
          left: t.left - r.left - Q.css(n, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (
          var e = this.offsetParent || Ot;
          e && !Q.nodeName(e, 'html') && 'static' === Q.css(e, 'position');

        )
          e = e.offsetParent
        return e || Ot
      })
    }
  }), Q.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(
    t,
    n
  ) {
    var r = 'pageYOffset' === n
    Q.fn[t] = function(i) {
      return pe(
        this,
        function(t, i, o) {
          var s = q(t)
          if (void 0 === o) return s ? s[n] : t[i]
          s
            ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset)
            : (t[i] = o)
        },
        t,
        i,
        arguments.length,
        null
      )
    }
  }), Q.each(['top', 'left'], function(e, t) {
    Q.cssHooks[t] = b(X.pixelPosition, function(e, n) {
      if (n) return (n = _(e, t)), Fe.test(n) ? Q(e).position()[t] + 'px' : n
    })
  }), Q.each({ Height: 'height', Width: 'width' }, function(e, t) {
    Q.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(
      n,
      r
    ) {
      Q.fn[r] = function(r, i) {
        var o = arguments.length && (n || 'boolean' != typeof r),
          s = n || (!0 === r || !0 === i ? 'margin' : 'border')
        return pe(
          this,
          function(t, n, r) {
            var i
            return Q.isWindow(t)
              ? t.document.documentElement['client' + e]
              : 9 === t.nodeType
                ? (
                    (i = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      i['scroll' + e],
                      t.body['offset' + e],
                      i['offset' + e],
                      i['client' + e]
                    )
                  )
                : void 0 === r ? Q.css(t, n, s) : Q.style(t, n, r, s)
          },
          t,
          o ? r : void 0,
          o,
          null
        )
      }
    })
  }), (Q.fn.size = function() {
    return this.length
  }), (Q.fn.andSelf = Q.fn.addBack), 'function' == typeof define &&
    define.amd &&
    define('jquery', [], function() {
      return Q
    })
  var Yt = e.jQuery,
    jt = e.$
  return (Q.noConflict = function(t) {
    return e.$ === Q && (e.$ = jt), t && e.jQuery === Q && (e.jQuery = Yt), Q
  }), void 0 === t && (e.jQuery = e.$ = Q), Q
}), (window.Modernizr = (function(e, t, n) {
  function r(e) {
    g.cssText = e
  }
  function i(e, t) {
    return r(x.join(e + ';') + (t || ''))
  }
  function o(e, t) {
    return typeof e === t
  }
  function s(e, t) {
    return !!~('' + e).indexOf(t)
  }
  function a(e, t) {
    for (var r in e) {
      var i = e[r]
      if (!s(i, '-') && g[i] !== n) return 'pfx' != t || i
    }
    return !1
  }
  function u(e, t, r) {
    for (var i in e) {
      var s = t[e[i]]
      if (s !== n)
        return !1 === r ? e[i] : o(s, 'function') ? s.bind(r || t) : s
    }
    return !1
  }
  function l(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1),
      i = (e + ' ' + b.join(r + ' ') + r).split(' ')
    return o(t, 'string') || o(t, 'undefined')
      ? a(i, t)
      : ((i = (e + ' ' + k.join(r + ' ') + r).split(' ')), u(i, t, n))
  }
  var c,
    d,
    f = {},
    h = t.documentElement,
    p = 'modernizr',
    m = t.createElement(p),
    g = m.style,
    y = t.createElement('input'),
    v = ':)',
    w = {}.toString,
    x = ' -webkit- -moz- -o- -ms- '.split(' '),
    _ = 'Webkit Moz O ms',
    b = _.split(' '),
    k = _.toLowerCase().split(' '),
    S = { svg: 'http://www.w3.org/2000/svg' },
    T = {},
    D = {},
    M = {},
    C = [],
    E = C.slice,
    N = function(e, n, r, i) {
      var o,
        s,
        a,
        u,
        l = t.createElement('div'),
        c = t.body,
        d = c || t.createElement('body')
      if (parseInt(r, 10))
        for (; r--; )
          (a = t.createElement('div')), (a.id = i
            ? i[r]
            : p + (r + 1)), l.appendChild(a)
      return (o = ['&#173;', '<style id="s', p, '">', e, '</style>'].join(
        ''
      )), (l.id = p), ((c ? l : d).innerHTML += o), d.appendChild(l), c ||
        (
          (d.style.background = ''),
          (d.style.overflow = 'hidden'),
          (u = h.style.overflow),
          (h.style.overflow = 'hidden'),
          h.appendChild(d)
        ), (s = n(l, e)), c
        ? l.parentNode.removeChild(l)
        : (d.parentNode.removeChild(d), (h.style.overflow = u)), !!s
    },
    O = function(t) {
      var n = e.matchMedia || e.msMatchMedia
      if (n) return (n(t) && n(t).matches) || !1
      var r
      return N(
        '@media ' + t + ' { #' + p + ' { position: absolute; } }',
        function(t) {
          r =
            'absolute' ==
            (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
              .position
        }
      ), r
    },
    Y = (function() {
      function e(e, i) {
        ;(i = i || t.createElement(r[e] || 'div')), (e = 'on' + e)
        var s = e in i
        return s ||
          (
            i.setAttribute || (i = t.createElement('div')),
            i.setAttribute &&
              i.removeAttribute &&
              (
                i.setAttribute(e, ''),
                (s = o(i[e], 'function')),
                o(i[e], 'undefined') || (i[e] = n),
                i.removeAttribute(e)
              )
          ), (i = null), s
      }
      var r = {
        select: 'input',
        change: 'input',
        submit: 'form',
        reset: 'form',
        error: 'img',
        load: 'img',
        abort: 'img'
      }
      return e
    })(),
    j = {}.hasOwnProperty
  ;(d =
    o(j, 'undefined') || o(j.call, 'undefined')
      ? function(e, t) {
          return t in e && o(e.constructor.prototype[t], 'undefined')
        }
      : function(e, t) {
          return j.call(e, t)
        }), Function.prototype.bind ||
    (Function.prototype.bind = function(e) {
      var t = this
      if ('function' != typeof t) throw new TypeError()
      var n = E.call(arguments, 1),
        r = function() {
          if (this instanceof r) {
            var i = function() {}
            i.prototype = t.prototype
            var o = new i(),
              s = t.apply(o, n.concat(E.call(arguments)))
            return Object(s) === s ? s : o
          }
          return t.apply(e, n.concat(E.call(arguments)))
        }
      return r
    }), (T.flexbox = function() {
    return l('flexWrap')
  }), (T.flexboxlegacy = function() {
    return l('boxDirection')
  }), (T.canvas = function() {
    var e = t.createElement('canvas')
    return !(!e.getContext || !e.getContext('2d'))
  }), (T.canvastext = function() {
    return !(
      !f.canvas ||
      !o(t.createElement('canvas').getContext('2d').fillText, 'function')
    )
  }), (T.webgl = function() {
    return !!e.WebGLRenderingContext
  }), (T.touch = function() {
    var n
    return 'ontouchstart' in e ||
    (e.DocumentTouch && t instanceof DocumentTouch)
      ? (n = !0)
      : N(
          [
            '@media (',
            x.join('touch-enabled),('),
            p,
            ')',
            '{#modernizr{top:9px;position:absolute}}'
          ].join(''),
          function(e) {
            n = 9 === e.offsetTop
          }
        ), n
  }), (T.geolocation = function() {
    return 'geolocation' in navigator
  }), (T.postmessage = function() {
    return !!e.postMessage
  }), (T.websqldatabase = function() {
    return !!e.openDatabase
  }), (T.indexedDB = function() {
    return !!l('indexedDB', e)
  }), (T.hashchange = function() {
    return Y('hashchange', e) && (t.documentMode === n || t.documentMode > 7)
  }), (T.history = function() {
    return !(!e.history || !history.pushState)
  }), (T.draganddrop = function() {
    var e = t.createElement('div')
    return 'draggable' in e || ('ondragstart' in e && 'ondrop' in e)
  }), (T.websockets = function() {
    return 'WebSocket' in e || 'MozWebSocket' in e
  }), (T.rgba = function() {
    return r('background-color:rgba(150,255,150,.5)'), s(
      g.backgroundColor,
      'rgba'
    )
  }), (T.hsla = function() {
    return r('background-color:hsla(120,40%,100%,.5)'), s(
      g.backgroundColor,
      'rgba'
    ) || s(g.backgroundColor, 'hsla')
  }), (T.multiplebgs = function() {
    return r(
      'background:url(https://),url(https://),red url(https://)'
    ), /(url\s*\(.*?){3}/.test(g.background)
  }), (T.backgroundsize = function() {
    return l('backgroundSize')
  }), (T.borderimage = function() {
    return l('borderImage')
  }), (T.borderradius = function() {
    return l('borderRadius')
  }), (T.boxshadow = function() {
    return l('boxShadow')
  }), (T.textshadow = function() {
    return '' === t.createElement('div').style.textShadow
  }), (T.opacity = function() {
    return i('opacity:.55'), /^0.55$/.test(g.opacity)
  }), (T.cssanimations = function() {
    return l('animationName')
  }), (T.csscolumns = function() {
    return l('columnCount')
  }), (T.cssgradients = function() {
    var e = 'background-image:'
    return r(
      (e +
        '-webkit- '
          .split(' ')
          .join(
            'gradient(linear,left top,right bottom,from(#9f9),to(white));' + e
          ) +
        x.join('linear-gradient(left top,#9f9, white);' + e)).slice(
        0,
        -e.length
      )
    ), s(g.backgroundImage, 'gradient')
  }), (T.cssreflections = function() {
    return l('boxReflect')
  }), (T.csstransforms = function() {
    return !!l('transform')
  }), (T.csstransforms3d = function() {
    var e = !!l('perspective')
    return e &&
      'webkitPerspective' in h.style &&
      N(
        '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',
        function(t, n) {
          e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }
      ), e
  }), (T.csstransitions = function() {
    return l('transition')
  }), (T.fontface = function() {
    var e
    return N('@font-face {font-family:"font";src:url("https://")}', function(
      n,
      r
    ) {
      var i = t.getElementById('smodernizr'),
        o = i.sheet || i.styleSheet,
        s = o
          ? o.cssRules && o.cssRules[0]
            ? o.cssRules[0].cssText
            : o.cssText || ''
          : ''
      e = /src/i.test(s) && 0 === s.indexOf(r.split(' ')[0])
    }), e
  }), (T.generatedcontent = function() {
    var e
    return N(
      [
        '#',
        p,
        '{font:0/0 a}#',
        p,
        ':after{content:"',
        v,
        '";visibility:hidden;font:3px/1 a}'
      ].join(''),
      function(t) {
        e = t.offsetHeight >= 3
      }
    ), e
  }), (T.video = function() {
    var e = t.createElement('video'),
      n = !1
    try {
      ;(n = !!e.canPlayType) &&
        (
          (n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, '')),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, '')),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, ''))
        )
    } catch (e) {}
    return n
  }), (T.audio = function() {
    var e = t.createElement('audio'),
      n = !1
    try {
      ;(n = !!e.canPlayType) &&
        (
          (n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, '')),
          (n.mp3 = e.canPlayType('audio/mpeg;').replace(/^no$/, '')),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
          (n.m4a = (e.canPlayType('audio/x-m4a;') ||
            e.canPlayType('audio/aac;'))
            .replace(/^no$/, ''))
        )
    } catch (e) {}
    return n
  }), (T.localstorage = function() {
    try {
      return localStorage.setItem(p, p), localStorage.removeItem(p), !0
    } catch (e) {
      return !1
    }
  }), (T.sessionstorage = function() {
    try {
      return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
    } catch (e) {
      return !1
    }
  }), (T.webworkers = function() {
    return !!e.Worker
  }), (T.applicationcache = function() {
    return !!e.applicationCache
  }), (T.svg = function() {
    return (
      !!t.createElementNS && !!t.createElementNS(S.svg, 'svg').createSVGRect
    )
  }), (T.inlinesvg = function() {
    var e = t.createElement('div')
    return (e.innerHTML = '<svg/>'), (e.firstChild &&
      e.firstChild.namespaceURI) == S.svg
  }), (T.smil = function() {
    return (
      !!t.createElementNS &&
      /SVGAnimate/.test(w.call(t.createElementNS(S.svg, 'animate')))
    )
  }), (T.svgclippaths = function() {
    return (
      !!t.createElementNS &&
      /SVGClipPath/.test(w.call(t.createElementNS(S.svg, 'clipPath')))
    )
  })
  for (var P in T)
    d(T, P) &&
      ((c = P.toLowerCase()), (f[c] = T[P]()), C.push((f[c] ? '' : 'no-') + c))
  return f.input ||
    (function() {
      ;(f.input = (function(n) {
        for (var r = 0, i = n.length; r < i; r++) M[n[r]] = !!(n[r] in y)
        return M.list &&
          (M.list = !(
            !t.createElement('datalist') || !e.HTMLDataListElement
          )), M
      })(
        'autocomplete autofocus list placeholder max min multiple pattern required step'.split(
          ' '
        )
      )), (f.inputtypes = (function(e) {
        for (var r, i, o, s = 0, a = e.length; s < a; s++)
          y.setAttribute('type', (i = e[s])), (r = 'text' !== y.type), r &&
            (
              (y.value = v),
              (y.style.cssText = 'position:absolute;visibility:hidden;'),
              /^range$/.test(i) && y.style.WebkitAppearance !== n
                ? (
                    h.appendChild(y),
                    (o = t.defaultView),
                    (r =
                      o.getComputedStyle &&
                      'textfield' !==
                        o.getComputedStyle(y, null).WebkitAppearance &&
                      0 !== y.offsetHeight),
                    h.removeChild(y)
                  )
                : /^(search|tel)$/.test(i) ||
                  (r = /^(url|email)$/.test(i)
                    ? y.checkValidity && !1 === y.checkValidity()
                    : y.value != v)
            ), (D[e[s]] = !!r)
        return D
      })(
        'search tel url email datetime date month week time datetime-local number range color'.split(
          ' '
        )
      ))
    })(), (f.addTest = function(e, t) {
    if ('object' == typeof e) for (var r in e) d(e, r) && f.addTest(r, e[r])
    else {
      if (((e = e.toLowerCase()), f[e] !== n)) return f
      ;(t = 'function' == typeof t ? t() : t), (h.className +=
        ' ' + (t ? '' : 'no-') + e), (f[e] = t)
    }
    return f
  }), r(''), (m = y = null), (function(e, t) {
    function n(e, t) {
      var n = e.createElement('p'),
        r = e.getElementsByTagName('head')[0] || e.documentElement
      return (n.innerHTML = 'x<style>' + t + '</style>'), r.insertBefore(
        n.lastChild,
        r.firstChild
      )
    }
    function r() {
      var e = y.elements
      return 'string' == typeof e ? e.split(' ') : e
    }
    function i(e) {
      var t = g[e[p]]
      return t || ((t = {}), m++, (e[p] = m), (g[m] = t)), t
    }
    function o(e, n, r) {
      if ((n || (n = t), c)) return n.createElement(e)
      r || (r = i(n))
      var o
      return (o = r.cache[e]
        ? r.cache[e].cloneNode()
        : h.test(e)
          ? (r.cache[e] = r.createElem(e)).cloneNode()
          : r.createElem(e)), !o.canHaveChildren || f.test(e) || o.tagUrn
        ? o
        : r.frag.appendChild(o)
    }
    function s(e, n) {
      if ((e || (e = t), c)) return e.createDocumentFragment()
      n = n || i(e)
      for (var o = n.frag.cloneNode(), s = 0, a = r(), u = a.length; s < u; s++)
        o.createElement(a[s])
      return o
    }
    function a(e, t) {
      t.cache ||
        (
          (t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())
        ), (e.createElement = function(n) {
        return y.shivMethods ? o(n, e, t) : t.createElem(n)
      }), (e.createDocumentFragment = Function(
        'h,f',
        'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
          r().join().replace(/[\w\-]+/g, function(e) {
            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
          }) +
          ');return n}'
      )(y, t.frag))
    }
    function u(e) {
      e || (e = t)
      var r = i(e)
      return !y.shivCSS ||
        l ||
        r.hasCSS ||
        (r.hasCSS = !!n(
          e,
          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
        )), c || a(e, r), e
    }
    var l,
      c,
      d = e.html5 || {},
      f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      p = '_html5shiv',
      m = 0,
      g = {}
    !(function() {
      try {
        var e = t.createElement('a')
        ;(e.innerHTML = '<xyz></xyz>'), (l = 'hidden' in e), (c =
          1 == e.childNodes.length ||
          (function() {
            t.createElement('a')
            var e = t.createDocumentFragment()
            return (
              void 0 === e.cloneNode ||
              void 0 === e.createDocumentFragment ||
              void 0 === e.createElement
            )
          })())
      } catch (e) {
        ;(l = !0), (c = !0)
      }
    })()
    var y = {
      elements:
        d.elements ||
        'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
      version: '3.7.0',
      shivCSS: !1 !== d.shivCSS,
      supportsUnknownElements: c,
      shivMethods: !1 !== d.shivMethods,
      type: 'default',
      shivDocument: u,
      createElement: o,
      createDocumentFragment: s
    }
    ;(e.html5 = y), u(t)
  })(this, t), (f._version =
    '2.8.3'), (f._prefixes = x), (f._domPrefixes = k), (f._cssomPrefixes = b), (f.mq = O), (f.hasEvent = Y), (f.testProp = function(
    e
  ) {
    return a([e])
  }), (f.testAllProps = l), (f.testStyles = N), (f.prefixed = function(
    e,
    t,
    n
  ) {
    return t ? l(e, t, n) : l(e, 'pfx')
  }), (h.className =
    h.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ' js ' + C.join(' ')), f
})(this, this.document)), (function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd ? define(t) : (e.moment = t())
})(this, function() {
  'use strict'
  function e() {
    return vr.apply(null, arguments)
  }
  function t(e) {
    return (
      e instanceof Array ||
      '[object Array]' === Object.prototype.toString.call(e)
    )
  }
  function n(e) {
    return null != e && '[object Object]' === Object.prototype.toString.call(e)
  }
  function r(e) {
    var t
    for (t in e) return !1
    return !0
  }
  function i(e) {
    return void 0 === e
  }
  function o(e) {
    return (
      'number' == typeof e ||
      '[object Number]' === Object.prototype.toString.call(e)
    )
  }
  function s(e) {
    return (
      e instanceof Date || '[object Date]' === Object.prototype.toString.call(e)
    )
  }
  function a(e, t) {
    var n,
      r = []
    for (n = 0; n < e.length; ++n) r.push(t(e[n], n))
    return r
  }
  function u(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  function l(e, t) {
    for (var n in t) u(t, n) && (e[n] = t[n])
    return u(t, 'toString') &&
      (e.toString = t.toString), u(t, 'valueOf') && (e.valueOf = t.valueOf), e
  }
  function c(e, t, n, r) {
    return yt(e, t, n, r, !0).utc()
  }
  function d() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }
  }
  function f(e) {
    return null == e._pf && (e._pf = d()), e._pf
  }
  function h(e) {
    if (null == e._isValid) {
      var t = f(e),
        n = xr.call(t.parsedDateParts, function(e) {
          return null != e
        }),
        r =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n))
      if (
        (
          e._strict &&
            (r =
              r &&
              0 === t.charsLeftOver &&
              0 === t.unusedTokens.length &&
              void 0 === t.bigHour),
          null != Object.isFrozen && Object.isFrozen(e)
        )
      )
        return r
      e._isValid = r
    }
    return e._isValid
  }
  function p(e) {
    var t = c(NaN)
    return null != e ? l(f(t), e) : (f(t).userInvalidated = !0), t
  }
  function m(e, t) {
    var n, r, o
    if (
      (
        i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        i(t._i) || (e._i = t._i),
        i(t._f) || (e._f = t._f),
        i(t._l) || (e._l = t._l),
        i(t._strict) || (e._strict = t._strict),
        i(t._tzm) || (e._tzm = t._tzm),
        i(t._isUTC) || (e._isUTC = t._isUTC),
        i(t._offset) || (e._offset = t._offset),
        i(t._pf) || (e._pf = f(t)),
        i(t._locale) || (e._locale = t._locale),
        _r.length > 0
      )
    )
      for (n = 0; n < _r.length; n++)
        (r = _r[n]), (o = t[r]), i(o) || (e[r] = o)
    return e
  }
  function g(t) {
    m(
      this,
      t
    ), (this._d = new Date(null != t._d ? t._d.getTime() : NaN)), this.isValid() || (this._d = new Date(NaN)), !1 === br && ((br = !0), e.updateOffset(this), (br = !1))
  }
  function y(e) {
    return e instanceof g || (null != e && null != e._isAMomentObject)
  }
  function v(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }
  function w(e) {
    var t = +e,
      n = 0
    return 0 !== t && isFinite(t) && (n = v(t)), n
  }
  function x(e, t, n) {
    var r,
      i = Math.min(e.length, t.length),
      o = Math.abs(e.length - t.length),
      s = 0
    for (r = 0; r < i; r++)
      ((n && e[r] !== t[r]) || (!n && w(e[r]) !== w(t[r]))) && s++
    return s + o
  }
  function _(t) {
    !1 === e.suppressDeprecationWarnings &&
      'undefined' != typeof console &&
      console.warn
  }
  function b(t, n) {
    var r = !0
    return l(function() {
      if ((null != e.deprecationHandler && e.deprecationHandler(null, t), r)) {
        for (var i, o = [], s = 0; s < arguments.length; s++) {
          if (((i = ''), 'object' == typeof arguments[s])) {
            i += '\n[' + s + '] '
            for (var a in arguments[0]) i += a + ': ' + arguments[0][a] + ', '
            i = i.slice(0, -2)
          } else i = arguments[s]
          o.push(i)
        }
        _(
          t +
            '\nArguments: ' +
            Array.prototype.slice.call(o).join('') +
            '\n' +
            new Error().stack
        ), (r = !1)
      }
      return n.apply(this, arguments)
    }, n)
  }
  function k(t, n) {
    null != e.deprecationHandler &&
      e.deprecationHandler(t, n), kr[t] || (_(n), (kr[t] = !0))
  }
  function S(e) {
    return (
      e instanceof Function ||
      '[object Function]' === Object.prototype.toString.call(e)
    )
  }
  function T(e) {
    var t, n
    for (n in e) (t = e[n]), S(t) ? (this[n] = t) : (this['_' + n] = t)
    ;(this._config = e), (this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source))
  }
  function D(e, t) {
    var r,
      i = l({}, e)
    for (r in t)
      u(t, r) &&
        (n(e[r]) && n(t[r])
          ? ((i[r] = {}), l(i[r], e[r]), l(i[r], t[r]))
          : null != t[r] ? (i[r] = t[r]) : delete i[r])
    for (r in e) u(e, r) && !u(t, r) && n(e[r]) && (i[r] = l({}, i[r]))
    return i
  }
  function M(e) {
    null != e && this.set(e)
  }
  function C(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse
    return S(r) ? r.call(t, n) : r
  }
  function E(e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()]
    return t || !n
      ? t
      : (
          (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
          })),
          this._longDateFormat[e]
        )
  }
  function N() {
    return this._invalidDate
  }
  function O(e) {
    return this._ordinal.replace('%d', e)
  }
  function Y(e, t, n, r) {
    var i = this._relativeTime[n]
    return S(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
  }
  function j(e, t) {
    var n = this._relativeTime[e > 0 ? 'future' : 'past']
    return S(n) ? n(t) : n.replace(/%s/i, t)
  }
  function P(e, t) {
    var n = e.toLowerCase()
    Or[n] = Or[n + 's'] = Or[t] = e
  }
  function L(e) {
    return 'string' == typeof e ? Or[e] || Or[e.toLowerCase()] : void 0
  }
  function A(e) {
    var t,
      n,
      r = {}
    for (n in e) u(e, n) && (t = L(n)) && (r[t] = e[n])
    return r
  }
  function H(e, t) {
    Yr[e] = t
  }
  function W(e) {
    var t = []
    for (var n in e) t.push({ unit: n, priority: Yr[n] })
    return t.sort(function(e, t) {
      return e.priority - t.priority
    }), t
  }
  function F(t, n) {
    return function(r) {
      return null != r
        ? (q(this, t, r), e.updateOffset(this, n), this)
        : R(this, t)
    }
  }
  function R(e, t) {
    return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN
  }
  function q(e, t, n) {
    e.isValid() && e._d['set' + (e._isUTC ? 'UTC' : '') + t](n)
  }
  function I(e) {
    return (e = L(e)), S(this[e]) ? this[e]() : this
  }
  function U(e, t) {
    if ('object' == typeof e) {
      e = A(e)
      for (var n = W(e), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit])
    } else if (((e = L(e)), S(this[e]))) return this[e](t)
    return this
  }
  function V(e, t, n) {
    var r = '' + Math.abs(e),
      i = t - r.length
    return (
      (e >= 0 ? (n ? '+' : '') : '-') +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      r
    )
  }
  function $(e, t, n, r) {
    var i = r
    'string' == typeof r &&
      (i = function() {
        return this[r]()
      }), e && (Ar[e] = i), t &&
      (Ar[t[0]] = function() {
        return V(i.apply(this, arguments), t[1], t[2])
      }), n &&
      (Ar[n] = function() {
        return this.localeData().ordinal(i.apply(this, arguments), e)
      })
  }
  function G(e) {
    return e.match(/\[[\s\S]/)
      ? e.replace(/^\[|\]$/g, '')
      : e.replace(/\\/g, '')
  }
  function z(e) {
    var t,
      n,
      r = e.match(jr)
    for (t = 0, n = r.length; t < n; t++)
      Ar[r[t]] ? (r[t] = Ar[r[t]]) : (r[t] = G(r[t]))
    return function(t) {
      var i,
        o = ''
      for (i = 0; i < n; i++) o += S(r[i]) ? r[i].call(t, e) : r[i]
      return o
    }
  }
  function B(e, t) {
    return e.isValid()
      ? ((t = Z(t, e.localeData())), (Lr[t] = Lr[t] || z(t)), Lr[t](e))
      : e.localeData().invalidDate()
  }
  function Z(e, t) {
    function n(e) {
      return t.longDateFormat(e) || e
    }
    var r = 5
    for (Pr.lastIndex = 0; r >= 0 && Pr.test(e); )
      (e = e.replace(Pr, n)), (Pr.lastIndex = 0), (r -= 1)
    return e
  }
  function X(e, t, n) {
    ei[e] = S(t)
      ? t
      : function(e, r) {
          return e && n ? n : t
        }
  }
  function J(e, t) {
    return u(ei, e) ? ei[e](t._strict, t._locale) : new RegExp(Q(e))
  }
  function Q(e) {
    return K(
      e
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
          e,
          t,
          n,
          r,
          i
        ) {
          return t || n || r || i
        })
    )
  }
  function K(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  function ee(e, t) {
    var n,
      r = t
    for (
      'string' == typeof e && (e = [e]), o(t) &&
        (r = function(e, n) {
          n[t] = w(e)
        }), n = 0;
      n < e.length;
      n++
    )
      ti[e[n]] = r
  }
  function te(e, t) {
    ee(e, function(e, n, r, i) {
      ;(r._w = r._w || {}), t(e, r._w, r, i)
    })
  }
  function ne(e, t, n) {
    null != t && u(ti, e) && ti[e](t, n._a, n, e)
  }
  function re(e, t) {
    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
  }
  function ie(e, n) {
    return e
      ? t(this._months)
        ? this._months[e.month()]
        : this._months[
            (this._months.isFormat || fi).test(n) ? 'format' : 'standalone'
          ][e.month()]
      : t(this._months) ? this._months : this._months.standalone
  }
  function oe(e, n) {
    return e
      ? t(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[fi.test(n) ? 'format' : 'standalone'][e.month()]
      : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }
  function se(e, t, n) {
    var r,
      i,
      o,
      s = e.toLocaleLowerCase()
    if (!this._monthsParse)
      for (
        this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0;
        r < 12;
        ++r
      )
        (o = c([2e3, r])), (this._shortMonthsParse[r] = this.monthsShort(
          o,
          ''
        ).toLocaleLowerCase()), (this._longMonthsParse[r] = this.months(
          o,
          ''
        ).toLocaleLowerCase())
    return n
      ? 'MMM' === t
        ? ((i = di.call(this._shortMonthsParse, s)), -1 !== i ? i : null)
        : ((i = di.call(this._longMonthsParse, s)), -1 !== i ? i : null)
      : 'MMM' === t
        ? -1 !== (i = di.call(this._shortMonthsParse, s))
          ? i
          : ((i = di.call(this._longMonthsParse, s)), -1 !== i ? i : null)
        : -1 !== (i = di.call(this._longMonthsParse, s))
          ? i
          : ((i = di.call(this._shortMonthsParse, s)), -1 !== i ? i : null)
  }
  function ae(e, t, n) {
    var r, i, o
    if (this._monthsParseExact) return se.call(this, e, t, n)
    for (
      this._monthsParse ||
        (
          (this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])
        ), r = 0;
      r < 12;
      r++
    ) {
      if (
        (
          (i = c([2e3, r])),
          n &&
            !this._longMonthsParse[r] &&
            (
              (this._longMonthsParse[r] = new RegExp(
                '^' + this.months(i, '').replace('.', '') + '$',
                'i'
              )),
              (this._shortMonthsParse[r] = new RegExp(
                '^' + this.monthsShort(i, '').replace('.', '') + '$',
                'i'
              ))
            ),
          n ||
            this._monthsParse[r] ||
            (
              (o = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
              (this._monthsParse[r] = new RegExp(o.replace('.', ''), 'i'))
            ),
          n && 'MMMM' === t && this._longMonthsParse[r].test(e)
        )
      )
        return r
      if (n && 'MMM' === t && this._shortMonthsParse[r].test(e)) return r
      if (!n && this._monthsParse[r].test(e)) return r
    }
  }
  function ue(e, t) {
    var n
    if (!e.isValid()) return e
    if ('string' == typeof t)
      if (/^\d+$/.test(t)) t = w(t)
      else if (((t = e.localeData().monthsParse(t)), !o(t))) return e
    return (n = Math.min(
      e.date(),
      re(e.year(), t)
    )), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n), e
  }
  function le(t) {
    return null != t
      ? (ue(this, t), e.updateOffset(this, !0), this)
      : R(this, 'Month')
  }
  function ce() {
    return re(this.year(), this.month())
  }
  function de(e) {
    return this._monthsParseExact
      ? (
          u(this, '_monthsRegex') || he.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex
        )
      : (
          u(this, '_monthsShortRegex') || (this._monthsShortRegex = mi),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex
        )
  }
  function fe(e) {
    return this._monthsParseExact
      ? (
          u(this, '_monthsRegex') || he.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex
        )
      : (
          u(this, '_monthsRegex') || (this._monthsRegex = gi),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex
        )
  }
  function he() {
    function e(e, t) {
      return t.length - e.length
    }
    var t,
      n,
      r = [],
      i = [],
      o = []
    for (t = 0; t < 12; t++)
      (n = c([2e3, t])), r.push(this.monthsShort(n, '')), i.push(
        this.months(n, '')
      ), o.push(this.months(n, '')), o.push(this.monthsShort(n, ''))
    for (r.sort(e), i.sort(e), o.sort(e), t = 0; t < 12; t++)
      (r[t] = K(r[t])), (i[t] = K(i[t]))
    for (t = 0; t < 24; t++) o[t] = K(o[t])
    ;(this._monthsRegex = new RegExp(
      '^(' + o.join('|') + ')',
      'i'
    )), (this._monthsShortRegex = this._monthsRegex), (this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')), (this._monthsShortStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i'))
  }
  function pe(e) {
    return me(e) ? 366 : 365
  }
  function me(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
  }
  function ge() {
    return me(this.year())
  }
  function ye(e, t, n, r, i, o, s) {
    var a = new Date(e, t, n, r, i, o, s)
    return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
  }
  function ve(e) {
    var t = new Date(Date.UTC.apply(null, arguments))
    return e < 100 &&
      e >= 0 &&
      isFinite(t.getUTCFullYear()) &&
      t.setUTCFullYear(e), t
  }
  function we(e, t, n) {
    var r = 7 + t - n
    return -(7 + ve(e, 0, r).getUTCDay() - t) % 7 + r - 1
  }
  function xe(e, t, n, r, i) {
    var o,
      s,
      a = (7 + n - r) % 7,
      u = we(e, r, i),
      l = 1 + 7 * (t - 1) + a + u
    return l <= 0
      ? ((o = e - 1), (s = pe(o) + l))
      : l > pe(e)
        ? ((o = e + 1), (s = l - pe(e)))
        : ((o = e), (s = l)), { year: o, dayOfYear: s }
  }
  function _e(e, t, n) {
    var r,
      i,
      o = we(e.year(), t, n),
      s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1
    return s < 1
      ? ((i = e.year() - 1), (r = s + be(i, t, n)))
      : s > be(e.year(), t, n)
        ? ((r = s - be(e.year(), t, n)), (i = e.year() + 1))
        : ((i = e.year()), (r = s)), { week: r, year: i }
  }
  function be(e, t, n) {
    var r = we(e, t, n),
      i = we(e + 1, t, n)
    return (pe(e) - r + i) / 7
  }
  function ke(e) {
    return _e(e, this._week.dow, this._week.doy).week
  }
  function Se() {
    return this._week.dow
  }
  function Te() {
    return this._week.doy
  }
  function De(e) {
    var t = this.localeData().week(this)
    return null == e ? t : this.add(7 * (e - t), 'd')
  }
  function Me(e) {
    var t = _e(this, 1, 4).week
    return null == e ? t : this.add(7 * (e - t), 'd')
  }
  function Ce(e, t) {
    return 'string' != typeof e
      ? e
      : isNaN(e)
        ? ((e = t.weekdaysParse(e)), 'number' == typeof e ? e : null)
        : parseInt(e, 10)
  }
  function Ee(e, t) {
    return 'string' == typeof e
      ? t.weekdaysParse(e) % 7 || 7
      : isNaN(e) ? null : e
  }
  function Ne(e, n) {
    return e
      ? t(this._weekdays)
        ? this._weekdays[e.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(n) ? 'format' : 'standalone'
          ][e.day()]
      : t(this._weekdays) ? this._weekdays : this._weekdays.standalone
  }
  function Oe(e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
  }
  function Ye(e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
  }
  function je(e, t, n) {
    var r,
      i,
      o,
      s = e.toLocaleLowerCase()
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0;
        r < 7;
        ++r
      )
        (o = c([2e3, 1]).day(r)), (this._minWeekdaysParse[r] = this.weekdaysMin(
          o,
          ''
        ).toLocaleLowerCase()), (this._shortWeekdaysParse[
          r
        ] = this.weekdaysShort(
          o,
          ''
        ).toLocaleLowerCase()), (this._weekdaysParse[r] = this.weekdays(
          o,
          ''
        ).toLocaleLowerCase())
    return n
      ? 'dddd' === t
        ? ((i = di.call(this._weekdaysParse, s)), -1 !== i ? i : null)
        : 'ddd' === t
          ? ((i = di.call(this._shortWeekdaysParse, s)), -1 !== i ? i : null)
          : ((i = di.call(this._minWeekdaysParse, s)), -1 !== i ? i : null)
      : 'dddd' === t
        ? -1 !== (i = di.call(this._weekdaysParse, s))
          ? i
          : -1 !== (i = di.call(this._shortWeekdaysParse, s))
            ? i
            : ((i = di.call(this._minWeekdaysParse, s)), -1 !== i ? i : null)
        : 'ddd' === t
          ? -1 !== (i = di.call(this._shortWeekdaysParse, s))
            ? i
            : -1 !== (i = di.call(this._weekdaysParse, s))
              ? i
              : ((i = di.call(this._minWeekdaysParse, s)), -1 !== i ? i : null)
          : -1 !== (i = di.call(this._minWeekdaysParse, s))
            ? i
            : -1 !== (i = di.call(this._weekdaysParse, s))
              ? i
              : (
                  (i = di.call(this._shortWeekdaysParse, s)),
                  -1 !== i ? i : null
                )
  }
  function Pe(e, t, n) {
    var r, i, o
    if (this._weekdaysParseExact) return je.call(this, e, t, n)
    for (
      this._weekdaysParse ||
        (
          (this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])
        ), r = 0;
      r < 7;
      r++
    ) {
      if (
        (
          (i = c([2e3, 1]).day(r)),
          n &&
            !this._fullWeekdaysParse[r] &&
            (
              (this._fullWeekdaysParse[r] = new RegExp(
                '^' + this.weekdays(i, '').replace('.', '.?') + '$',
                'i'
              )),
              (this._shortWeekdaysParse[r] = new RegExp(
                '^' + this.weekdaysShort(i, '').replace('.', '.?') + '$',
                'i'
              )),
              (this._minWeekdaysParse[r] = new RegExp(
                '^' + this.weekdaysMin(i, '').replace('.', '.?') + '$',
                'i'
              ))
            ),
          this._weekdaysParse[r] ||
            (
              (o =
                '^' +
                this.weekdays(i, '') +
                '|^' +
                this.weekdaysShort(i, '') +
                '|^' +
                this.weekdaysMin(i, '')),
              (this._weekdaysParse[r] = new RegExp(o.replace('.', ''), 'i'))
            ),
          n && 'dddd' === t && this._fullWeekdaysParse[r].test(e)
        )
      )
        return r
      if (n && 'ddd' === t && this._shortWeekdaysParse[r].test(e)) return r
      if (n && 'dd' === t && this._minWeekdaysParse[r].test(e)) return r
      if (!n && this._weekdaysParse[r].test(e)) return r
    }
  }
  function Le(e) {
    if (!this.isValid()) return null != e ? this : NaN
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
    return null != e
      ? ((e = Ce(e, this.localeData())), this.add(e - t, 'd'))
      : t
  }
  function Ae(e) {
    if (!this.isValid()) return null != e ? this : NaN
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7
    return null == e ? t : this.add(e - t, 'd')
  }
  function He(e) {
    if (!this.isValid()) return null != e ? this : NaN
    if (null != e) {
      var t = Ee(e, this.localeData())
      return this.day(this.day() % 7 ? t : t - 7)
    }
    return this.day() || 7
  }
  function We(e) {
    return this._weekdaysParseExact
      ? (
          u(this, '_weekdaysRegex') || qe.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex
        )
      : (
          u(this, '_weekdaysRegex') || (this._weekdaysRegex = bi),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex
        )
  }
  function Fe(e) {
    return this._weekdaysParseExact
      ? (
          u(this, '_weekdaysRegex') || qe.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
        )
      : (
          u(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = ki),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex
        )
  }
  function Re(e) {
    return this._weekdaysParseExact
      ? (
          u(this, '_weekdaysRegex') || qe.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
        )
      : (
          u(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Si),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex
        )
  }
  function qe() {
    function e(e, t) {
      return t.length - e.length
    }
    var t,
      n,
      r,
      i,
      o,
      s = [],
      a = [],
      u = [],
      l = []
    for (t = 0; t < 7; t++)
      (n = c([2e3, 1]).day(t)), (r = this.weekdaysMin(
        n,
        ''
      )), (i = this.weekdaysShort(n, '')), (o = this.weekdays(n, '')), s.push(
        r
      ), a.push(i), u.push(o), l.push(r), l.push(i), l.push(o)
    for (s.sort(e), a.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++)
      (a[t] = K(a[t])), (u[t] = K(u[t])), (l[t] = K(l[t]))
    ;(this._weekdaysRegex = new RegExp(
      '^(' + l.join('|') + ')',
      'i'
    )), (this._weekdaysShortRegex = this._weekdaysRegex), (this._weekdaysMinRegex = this._weekdaysRegex), (this._weekdaysStrictRegex = new RegExp('^(' + u.join('|') + ')', 'i')), (this._weekdaysShortStrictRegex = new RegExp('^(' + a.join('|') + ')', 'i')), (this._weekdaysMinStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i'))
  }
  function Ie() {
    return this.hours() % 12 || 12
  }
  function Ue() {
    return this.hours() || 24
  }
  function Ve(e, t) {
    $(e, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
  }
  function $e(e, t) {
    return t._meridiemParse
  }
  function Ge(e) {
    return 'p' === (e + '').toLowerCase().charAt(0)
  }
  function ze(e, t, n) {
    return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM'
  }
  function Be(e) {
    return e ? e.toLowerCase().replace('_', '-') : e
  }
  function Ze(e) {
    for (var t, n, r, i, o = 0; o < e.length; ) {
      for (
        i = Be(e[o]).split('-'), t = i.length, n = Be(e[o + 1]), n = n
          ? n.split('-')
          : null;
        t > 0;

      ) {
        if ((r = Xe(i.slice(0, t).join('-')))) return r
        if (n && n.length >= t && x(i, n, !0) >= t - 1) break
        t--
      }
      o++
    }
    return null
  }
  function Xe(e) {
    var t = null
    if (!Ei[e] && 'undefined' != typeof module && module && module.exports)
      try {
        ;(t = Ti._abbr), require('./locale/' + e), Je(t)
      } catch (e) {}
    return Ei[e]
  }
  function Je(e, t) {
    var n
    return e && (n = i(t) ? et(e) : Qe(e, t)) && (Ti = n), Ti._abbr
  }
  function Qe(e, t) {
    if (null !== t) {
      var n = Ci
      if (((t.abbr = e), null != Ei[e]))
        k(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
        ), (n = Ei[e]._config)
      else if (null != t.parentLocale) {
        if (null == Ei[t.parentLocale])
          return Ni[t.parentLocale] || (Ni[t.parentLocale] = []), Ni[
            t.parentLocale
          ].push({ name: e, config: t }), null
        n = Ei[t.parentLocale]._config
      }
      return (Ei[e] = new M(D(n, t))), Ni[e] &&
        Ni[e].forEach(function(e) {
          Qe(e.name, e.config)
        }), Je(e), Ei[e]
    }
    return delete Ei[e], null
  }
  function Ke(e, t) {
    if (null != t) {
      var n,
        r = Ci
      null != Ei[e] && (r = Ei[e]._config), (t = D(r, t)), (n = new M(
        t
      )), (n.parentLocale = Ei[e]), (Ei[e] = n), Je(e)
    } else null != Ei[e] && (null != Ei[e].parentLocale ? (Ei[e] = Ei[e].parentLocale) : null != Ei[e] && delete Ei[e])
    return Ei[e]
  }
  function et(e) {
    var n
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Ti
    if (!t(e)) {
      if ((n = Xe(e))) return n
      e = [e]
    }
    return Ze(e)
  }
  function tt() {
    return Dr(Ei)
  }
  function nt(e) {
    var t,
      n = e._a
    return n &&
      -2 === f(e).overflow &&
      (
        (t =
          n[ri] < 0 || n[ri] > 11
            ? ri
            : n[ii] < 1 || n[ii] > re(n[ni], n[ri])
              ? ii
              : n[oi] < 0 ||
                n[oi] > 24 ||
                (24 === n[oi] && (0 !== n[si] || 0 !== n[ai] || 0 !== n[ui]))
                ? oi
                : n[si] < 0 || n[si] > 59
                  ? si
                  : n[ai] < 0 || n[ai] > 59
                    ? ai
                    : n[ui] < 0 || n[ui] > 999 ? ui : -1),
        f(e)._overflowDayOfYear && (t < ni || t > ii) && (t = ii),
        f(e)._overflowWeeks && -1 === t && (t = li),
        f(e)._overflowWeekday && -1 === t && (t = ci),
        (f(e).overflow = t)
      ), e
  }
  function rt(e) {
    var t,
      n,
      r,
      i,
      o,
      s,
      a = e._i,
      u = Oi.exec(a) || Yi.exec(a)
    if (u) {
      for (f(e).iso = !0, t = 0, n = Pi.length; t < n; t++)
        if (Pi[t][1].exec(u[1])) {
          ;(i = Pi[t][0]), (r = !1 !== Pi[t][2])
          break
        }
      if (null == i) return void (e._isValid = !1)
      if (u[3]) {
        for (t = 0, n = Li.length; t < n; t++)
          if (Li[t][1].exec(u[3])) {
            o = (u[2] || ' ') + Li[t][0]
            break
          }
        if (null == o) return void (e._isValid = !1)
      }
      if (!r && null != o) return void (e._isValid = !1)
      if (u[4]) {
        if (!ji.exec(u[4])) return void (e._isValid = !1)
        s = 'Z'
      }
      ;(e._f = i + (o || '') + (s || '')), ct(e)
    } else e._isValid = !1
  }
  function it(e) {
    var t,
      n,
      r,
      i,
      o,
      s,
      a,
      u,
      l = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
      },
      c = 'YXWVUTSRQPONZABCDEFGHIKLM'
    if (
      (
        (t = e._i
          .replace(/\([^\)]*\)|[\n\t]/g, ' ')
          .replace(/(\s\s+)/g, ' ')
          .replace(/^\s|\s$/g, '')),
        (n = Hi.exec(t))
      )
    ) {
      if (
        (
          (r = n[1] ? 'ddd' + (5 === n[1].length ? ', ' : ' ') : ''),
          (i = 'D MMM ' + (n[2].length > 10 ? 'YYYY ' : 'YY ')),
          (o = 'HH:mm' + (n[4] ? ':ss' : '')),
          n[1]
        )
      ) {
        var d = new Date(n[2]),
          h = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()]
        if (n[1].substr(0, 3) !== h)
          return (f(e).weekdayMismatch = !0), void (e._isValid = !1)
      }
      switch (n[5].length) {
        case 2:
          0 === u
            ? (a = ' +0000')
            : (
                (u = c.indexOf(n[5][1].toUpperCase()) - 12),
                (a =
                  (u < 0 ? ' -' : ' +') +
                  ('' + u).replace(/^-?/, '0').match(/..$/)[0] +
                  '00')
              )
          break
        case 4:
          a = l[n[5]]
          break
        default:
          a = l[' GMT']
      }
      ;(n[5] = a), (e._i = n.splice(1).join('')), (s = ' ZZ'), (e._f =
        r + i + o + s), ct(e), (f(e).rfc2822 = !0)
    } else e._isValid = !1
  }
  function ot(t) {
    var n = Ai.exec(t._i)
    if (null !== n) return void (t._d = new Date(+n[1]))
    rt(
      t
    ), !1 === t._isValid && (delete t._isValid, it(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))
  }
  function st(e, t, n) {
    return null != e ? e : null != t ? t : n
  }
  function at(t) {
    var n = new Date(e.now())
    return t._useUTC
      ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
      : [n.getFullYear(), n.getMonth(), n.getDate()]
  }
  function ut(e) {
    var t,
      n,
      r,
      i,
      o = []
    if (!e._d) {
      for (
        r = at(e), e._w &&
          null == e._a[ii] &&
          null == e._a[ri] &&
          lt(e), null != e._dayOfYear &&
          (
            (i = st(e._a[ni], r[ni])),
            (e._dayOfYear > pe(i) || 0 === e._dayOfYear) &&
              (f(e)._overflowDayOfYear = !0),
            (n = ve(i, 0, e._dayOfYear)),
            (e._a[ri] = n.getUTCMonth()),
            (e._a[ii] = n.getUTCDate())
          ), t = 0;
        t < 3 && null == e._a[t];
        ++t
      )
        e._a[t] = o[t] = r[t]
      for (; t < 7; t++)
        e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t]
      24 === e._a[oi] &&
        0 === e._a[si] &&
        0 === e._a[ai] &&
        0 === e._a[ui] &&
        ((e._nextDay = !0), (e._a[oi] = 0)), (e._d = (e._useUTC
        ? ve
        : ye).apply(null, o)), null != e._tzm &&
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay &&
        (e._a[oi] = 24)
    }
  }
  function lt(e) {
    var t, n, r, i, o, s, a, u
    if (((t = e._w), null != t.GG || null != t.W || null != t.E))
      (o = 1), (s = 4), (n = st(t.GG, e._a[ni], _e(vt(), 1, 4).year)), (r = st(
        t.W,
        1
      )), ((i = st(t.E, 1)) < 1 || i > 7) && (u = !0)
    else {
      ;(o = e._locale._week.dow), (s = e._locale._week.doy)
      var l = _e(vt(), o, s)
      ;(n = st(t.gg, e._a[ni], l.year)), (r = st(t.w, l.week)), null != t.d
        ? ((i = t.d) < 0 || i > 6) && (u = !0)
        : null != t.e
          ? ((i = t.e + o), (t.e < 0 || t.e > 6) && (u = !0))
          : (i = o)
    }
    r < 1 || r > be(n, o, s)
      ? (f(e)._overflowWeeks = !0)
      : null != u
        ? (f(e)._overflowWeekday = !0)
        : (
            (a = xe(n, r, i, o, s)),
            (e._a[ni] = a.year),
            (e._dayOfYear = a.dayOfYear)
          )
  }
  function ct(t) {
    if (t._f === e.ISO_8601) return void rt(t)
    if (t._f === e.RFC_2822) return void it(t)
    ;(t._a = []), (f(t).empty = !0)
    var n,
      r,
      i,
      o,
      s,
      a = '' + t._i,
      u = a.length,
      l = 0
    for (i = Z(t._f, t._locale).match(jr) || [], n = 0; n < i.length; n++)
      (o = i[n]), (r = (a.match(J(o, t)) || [])[0]), r &&
        (
          (s = a.substr(0, a.indexOf(r))),
          s.length > 0 && f(t).unusedInput.push(s),
          (a = a.slice(a.indexOf(r) + r.length)),
          (l += r.length)
        ), Ar[o]
        ? (r ? (f(t).empty = !1) : f(t).unusedTokens.push(o), ne(o, r, t))
        : t._strict && !r && f(t).unusedTokens.push(o)
    ;(f(t).charsLeftOver =
      u -
      l), a.length > 0 && f(t).unusedInput.push(a), t._a[oi] <= 12 && !0 === f(t).bigHour && t._a[oi] > 0 && (f(t).bigHour = void 0), (f(t).parsedDateParts = t._a.slice(0)), (f(t).meridiem = t._meridiem), (t._a[oi] = dt(t._locale, t._a[oi], t._meridiem)), ut(t), nt(t)
  }
  function dt(e, t, n) {
    var r
    return null == n
      ? t
      : null != e.meridiemHour
        ? e.meridiemHour(t, n)
        : null != e.isPM
          ? (
              (r = e.isPM(n)),
              r && t < 12 && (t += 12),
              r || 12 !== t || (t = 0),
              t
            )
          : t
  }
  function ft(e) {
    var t, n, r, i, o
    if (0 === e._f.length)
      return (f(e).invalidFormat = !0), void (e._d = new Date(NaN))
    for (i = 0; i < e._f.length; i++)
      (o = 0), (t = m({}, e)), null != e._useUTC &&
        (t._useUTC = e._useUTC), (t._f = e._f[i]), ct(t), h(t) &&
        (
          (o += f(t).charsLeftOver),
          (o += 10 * f(t).unusedTokens.length),
          (f(t).score = o),
          (null == r || o < r) && ((r = o), (n = t))
        )
    l(e, n || t)
  }
  function ht(e) {
    if (!e._d) {
      var t = A(e._i)
      ;(e._a = a(
        [
          t.year,
          t.month,
          t.day || t.date,
          t.hour,
          t.minute,
          t.second,
          t.millisecond
        ],
        function(e) {
          return e && parseInt(e, 10)
        }
      )), ut(e)
    }
  }
  function pt(e) {
    var t = new g(nt(mt(e)))
    return t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0)), t
  }
  function mt(e) {
    var n = e._i,
      r = e._f
    return (e._locale =
      e._locale ||
      et(
        e._l
      )), null === n || (void 0 === r && '' === n) ? p({ nullInput: !0 }) : ('string' == typeof n && (e._i = n = e._locale.preparse(n)), y(n) ? new g(nt(n)) : (s(n) ? (e._d = n) : t(r) ? ft(e) : r ? ct(e) : gt(e), h(e) || (e._d = null), e))
  }
  function gt(r) {
    var u = r._i
    i(u)
      ? (r._d = new Date(e.now()))
      : s(u)
        ? (r._d = new Date(u.valueOf()))
        : 'string' == typeof u
          ? ot(r)
          : t(u)
            ? (
                (r._a = a(u.slice(0), function(e) {
                  return parseInt(e, 10)
                })),
                ut(r)
              )
            : n(u)
              ? ht(r)
              : o(u) ? (r._d = new Date(u)) : e.createFromInputFallback(r)
  }
  function yt(e, i, o, s, a) {
    var u = {}
    return (!0 !== o && !1 !== o) ||
      (
        (s = o),
        (o = void 0)
      ), ((n(e) && r(e)) || (t(e) && 0 === e.length)) && (e = void 0), (u._isAMomentObject = !0), (u._useUTC = u._isUTC = a), (u._l = o), (u._i = e), (u._f = i), (u._strict = s), pt(u)
  }
  function vt(e, t, n, r) {
    return yt(e, t, n, r, !1)
  }
  function wt(e, n) {
    var r, i
    if ((1 === n.length && t(n[0]) && (n = n[0]), !n.length)) return vt()
    for (r = n[0], i = 1; i < n.length; ++i)
      (n[i].isValid() && !n[i][e](r)) || (r = n[i])
    return r
  }
  function xt() {
    return wt('isBefore', [].slice.call(arguments, 0))
  }
  function _t() {
    return wt('isAfter', [].slice.call(arguments, 0))
  }
  function bt(e) {
    for (var t in e)
      if (-1 === qi.indexOf(t) || (null != e[t] && isNaN(e[t]))) return !1
    for (var n = !1, r = 0; r < qi.length; ++r)
      if (e[qi[r]]) {
        if (n) return !1
        parseFloat(e[qi[r]]) !== w(e[qi[r]]) && (n = !0)
      }
    return !0
  }
  function kt() {
    return this._isValid
  }
  function St() {
    return Ut(NaN)
  }
  function Tt(e) {
    var t = A(e),
      n = t.year || 0,
      r = t.quarter || 0,
      i = t.month || 0,
      o = t.week || 0,
      s = t.day || 0,
      a = t.hour || 0,
      u = t.minute || 0,
      l = t.second || 0,
      c = t.millisecond || 0
    ;(this._isValid = bt(
      t
    )), (this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60), (this._days = +s + 7 * o), (this._months = +i + 3 * r + 12 * n), (this._data = {}), (this._locale = et()), this._bubble()
  }
  function Dt(e) {
    return e instanceof Tt
  }
  function Mt(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
  }
  function Ct(e, t) {
    $(e, 0, 0, function() {
      var e = this.utcOffset(),
        n = '+'
      return e < 0 &&
        ((e = -e), (n = '-')), n + V(~~(e / 60), 2) + t + V(~~e % 60, 2)
    })
  }
  function Et(e, t) {
    var n = (t || '').match(e)
    if (null === n) return null
    var r = n[n.length - 1] || [],
      i = (r + '').match(Ii) || ['-', 0, 0],
      o = 60 * i[1] + w(i[2])
    return 0 === o ? 0 : '+' === i[0] ? o : -o
  }
  function Nt(t, n) {
    var r, i
    return n._isUTC
      ? (
          (r = n.clone()),
          (i = (y(t) || s(t) ? t.valueOf() : vt(t).valueOf()) - r.valueOf()),
          r._d.setTime(r._d.valueOf() + i),
          e.updateOffset(r, !1),
          r
        )
      : vt(t).local()
  }
  function Ot(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
  }
  function Yt(t, n, r) {
    var i,
      o = this._offset || 0
    if (!this.isValid()) return null != t ? this : NaN
    if (null != t) {
      if ('string' == typeof t) {
        if (null === (t = Et(Jr, t))) return this
      } else Math.abs(t) < 16 && !r && (t *= 60)
      return !this._isUTC &&
        n &&
        (i = Ot(this)), (this._offset = t), (this._isUTC = !0), null != i &&
        this.add(i, 'm'), o !== t &&
        (!n || this._changeInProgress
          ? Bt(this, Ut(t - o, 'm'), 1, !1)
          : this._changeInProgress ||
            (
              (this._changeInProgress = !0),
              e.updateOffset(this, !0),
              (this._changeInProgress = null)
            )), this
    }
    return this._isUTC ? o : Ot(this)
  }
  function jt(e, t) {
    return null != e
      ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset()
  }
  function Pt(e) {
    return this.utcOffset(0, e)
  }
  function Lt(e) {
    return this._isUTC &&
      (
        this.utcOffset(0, e),
        (this._isUTC = !1),
        e && this.subtract(Ot(this), 'm')
      ), this
  }
  function At() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0)
    else if ('string' == typeof this._i) {
      var e = Et(Xr, this._i)
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
  }
  function Ht(e) {
    return (
      !!this.isValid() &&
      ((e = e ? vt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
    )
  }
  function Wt() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    )
  }
  function Ft() {
    if (!i(this._isDSTShifted)) return this._isDSTShifted
    var e = {}
    if ((m(e, this), (e = mt(e)), e._a)) {
      var t = e._isUTC ? c(e._a) : vt(e._a)
      this._isDSTShifted = this.isValid() && x(e._a, t.toArray()) > 0
    } else this._isDSTShifted = !1
    return this._isDSTShifted
  }
  function Rt() {
    return !!this.isValid() && !this._isUTC
  }
  function qt() {
    return !!this.isValid() && this._isUTC
  }
  function It() {
    return !!this.isValid() && (this._isUTC && 0 === this._offset)
  }
  function Ut(e, t) {
    var n,
      r,
      i,
      s = e,
      a = null
    return Dt(e)
      ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
      : o(e)
        ? ((s = {}), t ? (s[t] = e) : (s.milliseconds = e))
        : (a = Ui.exec(e))
          ? (
              (n = '-' === a[1] ? -1 : 1),
              (s = {
                y: 0,
                d: w(a[ii]) * n,
                h: w(a[oi]) * n,
                m: w(a[si]) * n,
                s: w(a[ai]) * n,
                ms: w(Mt(1e3 * a[ui])) * n
              })
            )
          : (a = Vi.exec(e))
            ? (
                (n = '-' === a[1] ? -1 : 1),
                (s = {
                  y: Vt(a[2], n),
                  M: Vt(a[3], n),
                  w: Vt(a[4], n),
                  d: Vt(a[5], n),
                  h: Vt(a[6], n),
                  m: Vt(a[7], n),
                  s: Vt(a[8], n)
                })
              )
            : null == s
              ? (s = {})
              : 'object' == typeof s &&
                ('from' in s || 'to' in s) &&
                (
                  (i = Gt(vt(s.from), vt(s.to))),
                  (s = {}),
                  (s.ms = i.milliseconds),
                  (s.M = i.months)
                ), (r = new Tt(s)), Dt(e) && u(e, '_locale') && (r._locale = e._locale), r
  }
  function Vt(e, t) {
    var n = e && parseFloat(e.replace(',', '.'))
    return (isNaN(n) ? 0 : n) * t
  }
  function $t(e, t) {
    var n = { milliseconds: 0, months: 0 }
    return (n.months =
      t.month() -
      e.month() +
      12 *
        (t.year() -
          e.year())), e.clone().add(n.months, 'M').isAfter(t) && --n.months, (n.milliseconds = +t - +e.clone().add(n.months, 'M')), n
  }
  function Gt(e, t) {
    var n
    return e.isValid() && t.isValid()
      ? (
          (t = Nt(t, e)),
          e.isBefore(t)
            ? (n = $t(e, t))
            : (
                (n = $t(t, e)),
                (n.milliseconds = -n.milliseconds),
                (n.months = -n.months)
              ),
          n
        )
      : { milliseconds: 0, months: 0 }
  }
  function zt(e, t) {
    return function(n, r) {
      var i, o
      return null === r ||
        isNaN(+r) ||
        (
          k(
            t,
            'moment().' +
              t +
              '(period, number) is deprecated. Please use moment().' +
              t +
              '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
          ),
          (o = n),
          (n = r),
          (r = o)
        ), (n = 'string' == typeof n ? +n : n), (i = Ut(n, r)), Bt(this, i, e), this
    }
  }
  function Bt(t, n, r, i) {
    var o = n._milliseconds,
      s = Mt(n._days),
      a = Mt(n._months)
    t.isValid() &&
      (
        (i = null == i || i),
        o && t._d.setTime(t._d.valueOf() + o * r),
        s && q(t, 'Date', R(t, 'Date') + s * r),
        a && ue(t, R(t, 'Month') + a * r),
        i && e.updateOffset(t, s || a)
      )
  }
  function Zt(e, t) {
    var n = e.diff(t, 'days', !0)
    return n < -6
      ? 'sameElse'
      : n < -1
        ? 'lastWeek'
        : n < 0
          ? 'lastDay'
          : n < 1
            ? 'sameDay'
            : n < 2 ? 'nextDay' : n < 7 ? 'nextWeek' : 'sameElse'
  }
  function Xt(t, n) {
    var r = t || vt(),
      i = Nt(r, this).startOf('day'),
      o = e.calendarFormat(this, i) || 'sameElse',
      s = n && (S(n[o]) ? n[o].call(this, r) : n[o])
    return this.format(s || this.localeData().calendar(o, this, vt(r)))
  }
  function Jt() {
    return new g(this)
  }
  function Qt(e, t) {
    var n = y(e) ? e : vt(e)
    return (
      !(!this.isValid() || !n.isValid()) &&
      (
        (t = L(i(t) ? 'millisecond' : t)),
        'millisecond' === t
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf()
      )
    )
  }
  function Kt(e, t) {
    var n = y(e) ? e : vt(e)
    return (
      !(!this.isValid() || !n.isValid()) &&
      (
        (t = L(i(t) ? 'millisecond' : t)),
        'millisecond' === t
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf()
      )
    )
  }
  function en(e, t, n, r) {
    return (r =
      r ||
      '()'), ('(' === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (')' === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
  }
  function tn(e, t) {
    var n,
      r = y(e) ? e : vt(e)
    return (
      !(!this.isValid() || !r.isValid()) &&
      (
        (t = L(t || 'millisecond')),
        'millisecond' === t
          ? this.valueOf() === r.valueOf()
          : (
              (n = r.valueOf()),
              this.clone().startOf(t).valueOf() <= n &&
                n <= this.clone().endOf(t).valueOf()
            )
      )
    )
  }
  function nn(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }
  function rn(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }
  function on(e, t, n) {
    var r, i, o, s
    return this.isValid()
      ? (
          (r = Nt(e, this)),
          r.isValid()
            ? (
                (i = 6e4 * (r.utcOffset() - this.utcOffset())),
                (t = L(t)),
                'year' === t || 'month' === t || 'quarter' === t
                  ? (
                      (s = sn(this, r)),
                      'quarter' === t ? (s /= 3) : 'year' === t && (s /= 12)
                    )
                  : (
                      (o = this - r),
                      (s =
                        'second' === t
                          ? o / 1e3
                          : 'minute' === t
                            ? o / 6e4
                            : 'hour' === t
                              ? o / 36e5
                              : 'day' === t
                                ? (o - i) / 864e5
                                : 'week' === t ? (o - i) / 6048e5 : o)
                    ),
                n ? s : v(s)
              )
            : NaN
        )
      : NaN
  }
  function sn(e, t) {
    var n,
      r,
      i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      o = e.clone().add(i, 'months')
    return t - o < 0
      ? ((n = e.clone().add(i - 1, 'months')), (r = (t - o) / (o - n)))
      : (
          (n = e.clone().add(i + 1, 'months')),
          (r = (t - o) / (n - o))
        ), -(i + r) || 0
  }
  function an() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
  }
  function un() {
    if (!this.isValid()) return null
    var e = this.clone().utc()
    return e.year() < 0 || e.year() > 9999
      ? B(e, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
      : S(Date.prototype.toISOString)
        ? this.toDate().toISOString()
        : B(e, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
  }
  function ln() {
    if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
    var e = 'moment',
      t = ''
    this.isLocal() ||
      (
        (e = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
        (t = 'Z')
      )
    var n = '[' + e + '("]',
      r = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
      i = t + '[")]'
    return this.format(n + r + '-MM-DD[T]HH:mm:ss.SSS' + i)
  }
  function cn(t) {
    t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat)
    var n = B(this, t)
    return this.localeData().postformat(n)
  }
  function dn(e, t) {
    return this.isValid() && ((y(e) && e.isValid()) || vt(e).isValid())
      ? Ut({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate()
  }
  function fn(e) {
    return this.from(vt(), e)
  }
  function hn(e, t) {
    return this.isValid() && ((y(e) && e.isValid()) || vt(e).isValid())
      ? Ut({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate()
  }
  function pn(e) {
    return this.to(vt(), e)
  }
  function mn(e) {
    var t
    return void 0 === e
      ? this._locale._abbr
      : ((t = et(e)), null != t && (this._locale = t), this)
  }
  function gn() {
    return this._locale
  }
  function yn(e) {
    switch ((e = L(e))) {
      case 'year':
        this.month(0)
      case 'quarter':
      case 'month':
        this.date(1)
      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0)
      case 'hour':
        this.minutes(0)
      case 'minute':
        this.seconds(0)
      case 'second':
        this.milliseconds(0)
    }
    return 'week' === e &&
      this.weekday(
        0
      ), 'isoWeek' === e && this.isoWeekday(1), 'quarter' === e && this.month(3 * Math.floor(this.month() / 3)), this
  }
  function vn(e) {
    return void 0 === (e = L(e)) || 'millisecond' === e
      ? this
      : (
          'date' === e && (e = 'day'),
          this.startOf(e).add(1, 'isoWeek' === e ? 'week' : e).subtract(1, 'ms')
        )
  }
  function wn() {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
  }
  function xn() {
    return Math.floor(this.valueOf() / 1e3)
  }
  function _n() {
    return new Date(this.valueOf())
  }
  function bn() {
    var e = this
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond()
    ]
  }
  function kn() {
    var e = this
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    }
  }
  function Sn() {
    return this.isValid() ? this.toISOString() : null
  }
  function Tn() {
    return h(this)
  }
  function Dn() {
    return l({}, f(this))
  }
  function Mn() {
    return f(this).overflow
  }
  function Cn() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }
  function En(e, t) {
    $(0, [e, e.length], 0, t)
  }
  function Nn(e) {
    return Pn.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    )
  }
  function On(e) {
    return Pn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }
  function Yn() {
    return be(this.year(), 1, 4)
  }
  function jn() {
    var e = this.localeData()._week
    return be(this.year(), e.dow, e.doy)
  }
  function Pn(e, t, n, r, i) {
    var o
    return null == e
      ? _e(this, r, i).year
      : ((o = be(e, r, i)), t > o && (t = o), Ln.call(this, e, t, n, r, i))
  }
  function Ln(e, t, n, r, i) {
    var o = xe(e, t, n, r, i),
      s = ve(o.year, 0, o.dayOfYear)
    return this.year(
      s.getUTCFullYear()
    ), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
  }
  function An(e) {
    return null == e
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (e - 1) + this.month() % 3)
  }
  function Hn(e) {
    var t =
      Math.round(
        (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
      ) + 1
    return null == e ? t : this.add(e - t, 'd')
  }
  function Wn(e, t) {
    t[ui] = w(1e3 * ('0.' + e))
  }
  function Fn() {
    return this._isUTC ? 'UTC' : ''
  }
  function Rn() {
    return this._isUTC ? 'Coordinated Universal Time' : ''
  }
  function qn(e) {
    return vt(1e3 * e)
  }
  function In() {
    return vt.apply(null, arguments).parseZone()
  }
  function Un(e) {
    return e
  }
  function Vn(e, t, n, r) {
    var i = et(),
      o = c().set(r, t)
    return i[n](o, e)
  }
  function $n(e, t, n) {
    if ((o(e) && ((t = e), (e = void 0)), (e = e || ''), null != t))
      return Vn(e, t, n, 'month')
    var r,
      i = []
    for (r = 0; r < 12; r++) i[r] = Vn(e, r, n, 'month')
    return i
  }
  function Gn(e, t, n, r) {
    'boolean' == typeof e
      ? (o(t) && ((n = t), (t = void 0)), (t = t || ''))
      : (
          (t = e),
          (n = t),
          (e = !1),
          o(t) && ((n = t), (t = void 0)),
          (t = t || '')
        )
    var i = et(),
      s = e ? i._week.dow : 0
    if (null != n) return Vn(t, (n + s) % 7, r, 'day')
    var a,
      u = []
    for (a = 0; a < 7; a++) u[a] = Vn(t, (a + s) % 7, r, 'day')
    return u
  }
  function zn(e, t) {
    return $n(e, t, 'months')
  }
  function Bn(e, t) {
    return $n(e, t, 'monthsShort')
  }
  function Zn(e, t, n) {
    return Gn(e, t, n, 'weekdays')
  }
  function Xn(e, t, n) {
    return Gn(e, t, n, 'weekdaysShort')
  }
  function Jn(e, t, n) {
    return Gn(e, t, n, 'weekdaysMin')
  }
  function Qn() {
    var e = this._data
    return (this._milliseconds = to(
      this._milliseconds
    )), (this._days = to(this._days)), (this._months = to(this._months)), (e.milliseconds = to(e.milliseconds)), (e.seconds = to(e.seconds)), (e.minutes = to(e.minutes)), (e.hours = to(e.hours)), (e.months = to(e.months)), (e.years = to(e.years)), this
  }
  function Kn(e, t, n, r) {
    var i = Ut(t, n)
    return (e._milliseconds +=
      r *
      i._milliseconds), (e._days += r * i._days), (e._months += r * i._months), e._bubble()
  }
  function er(e, t) {
    return Kn(this, e, t, 1)
  }
  function tr(e, t) {
    return Kn(this, e, t, -1)
  }
  function nr(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }
  function rr() {
    var e,
      t,
      n,
      r,
      i,
      o = this._milliseconds,
      s = this._days,
      a = this._months,
      u = this._data
    return (o >= 0 && s >= 0 && a >= 0) ||
      (o <= 0 && s <= 0 && a <= 0) ||
      (
        (o += 864e5 * nr(or(a) + s)),
        (s = 0),
        (a = 0)
      ), (u.milliseconds = o % 1e3), (e = v(o / 1e3)), (u.seconds = e % 60), (t = v(e / 60)), (u.minutes = t % 60), (n = v(t / 60)), (u.hours = n % 24), (s += v(n / 24)), (i = v(ir(s))), (a += i), (s -= nr(or(i))), (r = v(a / 12)), (a %= 12), (u.days = s), (u.months = a), (u.years = r), this
  }
  function ir(e) {
    return 4800 * e / 146097
  }
  function or(e) {
    return 146097 * e / 4800
  }
  function sr(e) {
    if (!this.isValid()) return NaN
    var t,
      n,
      r = this._milliseconds
    if ('month' === (e = L(e)) || 'year' === e)
      return (t = this._days + r / 864e5), (n =
        this._months + ir(t)), 'month' === e ? n : n / 12
    switch (((t = this._days + Math.round(or(this._months))), e)) {
      case 'week':
        return t / 7 + r / 6048e5
      case 'day':
        return t + r / 864e5
      case 'hour':
        return 24 * t + r / 36e5
      case 'minute':
        return 1440 * t + r / 6e4
      case 'second':
        return 86400 * t + r / 1e3
      case 'millisecond':
        return Math.floor(864e5 * t) + r
      default:
        throw new Error('Unknown unit ' + e)
    }
  }
  function ar() {
    return this.isValid()
      ? this._milliseconds +
        864e5 * this._days +
        this._months % 12 * 2592e6 +
        31536e6 * w(this._months / 12)
      : NaN
  }
  function ur(e) {
    return function() {
      return this.as(e)
    }
  }
  function lr(e) {
    return (e = L(e)), this.isValid() ? this[e + 's']() : NaN
  }
  function cr(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  function dr() {
    return v(this.days() / 7)
  }
  function fr(e, t, n, r, i) {
    return i.relativeTime(t || 1, !!n, e, r)
  }
  function hr(e, t, n) {
    var r = Ut(e).abs(),
      i = vo(r.as('s')),
      o = vo(r.as('m')),
      s = vo(r.as('h')),
      a = vo(r.as('d')),
      u = vo(r.as('M')),
      l = vo(r.as('y')),
      c = (i <= wo.ss && ['s', i]) ||
      (i < wo.s && ['ss', i]) ||
      (o <= 1 && ['m']) ||
      (o < wo.m && ['mm', o]) ||
      (s <= 1 && ['h']) ||
      (s < wo.h && ['hh', s]) ||
      (a <= 1 && ['d']) ||
      (a < wo.d && ['dd', a]) ||
      (u <= 1 && ['M']) ||
      (u < wo.M && ['MM', u]) ||
      (l <= 1 && ['y']) || ['yy', l]
    return (c[2] = t), (c[3] = +e > 0), (c[4] = n), fr.apply(null, c)
  }
  function pr(e) {
    return void 0 === e ? vo : 'function' == typeof e && ((vo = e), !0)
  }
  function mr(e, t) {
    return (
      void 0 !== wo[e] &&
      (void 0 === t ? wo[e] : ((wo[e] = t), 's' === e && (wo.ss = t - 1), !0))
    )
  }
  function gr(e) {
    if (!this.isValid()) return this.localeData().invalidDate()
    var t = this.localeData(),
      n = hr(this, !e, t)
    return e && (n = t.pastFuture(+this, n)), t.postformat(n)
  }
  function yr() {
    if (!this.isValid()) return this.localeData().invalidDate()
    var e,
      t,
      n,
      r = xo(this._milliseconds) / 1e3,
      i = xo(this._days),
      o = xo(this._months)
    ;(e = v(
      r / 60
    )), (t = v(e / 60)), (r %= 60), (e %= 60), (n = v(o / 12)), (o %= 12)
    var s = n,
      a = o,
      u = i,
      l = t,
      c = e,
      d = r,
      f = this.asSeconds()
    return f
      ? (f < 0 ? '-' : '') +
        'P' +
        (s ? s + 'Y' : '') +
        (a ? a + 'M' : '') +
        (u ? u + 'D' : '') +
        (l || c || d ? 'T' : '') +
        (l ? l + 'H' : '') +
        (c ? c + 'M' : '') +
        (d ? d + 'S' : '')
      : 'P0D'
  }
  var vr, wr
  wr = Array.prototype.some
    ? Array.prototype.some
    : function(e) {
        for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
          if (r in t && e.call(this, t[r], r, t)) return !0
        return !1
      }
  var xr = wr,
    _r = (e.momentProperties = []),
    br = !1,
    kr = {}
  ;(e.suppressDeprecationWarnings = !1), (e.deprecationHandler = null)
  var Sr
  Sr = Object.keys
    ? Object.keys
    : function(e) {
        var t,
          n = []
        for (t in e) u(e, t) && n.push(t)
        return n
      }
  var Tr,
    Dr = Sr,
    Mr = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    Cr = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    },
    Er = /\d{1,2}/,
    Nr = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    Or = {},
    Yr = {},
    jr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Pr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Lr = {},
    Ar = {},
    Hr = /\d/,
    Wr = /\d\d/,
    Fr = /\d{3}/,
    Rr = /\d{4}/,
    qr = /[+-]?\d{6}/,
    Ir = /\d\d?/,
    Ur = /\d\d\d\d?/,
    Vr = /\d\d\d\d\d\d?/,
    $r = /\d{1,3}/,
    Gr = /\d{1,4}/,
    zr = /[+-]?\d{1,6}/,
    Br = /\d+/,
    Zr = /[+-]?\d+/,
    Xr = /Z|[+-]\d\d:?\d\d/gi,
    Jr = /Z|[+-]\d\d(?::?\d\d)?/gi,
    Qr = /[+-]?\d+(\.\d{1,3})?/,
    Kr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    ei = {},
    ti = {},
    ni = 0,
    ri = 1,
    ii = 2,
    oi = 3,
    si = 4,
    ai = 5,
    ui = 6,
    li = 7,
    ci = 8
  Tr = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function(e) {
        var t
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t
        return -1
      }
  var di = Tr
  $('M', ['MM', 2], 'Mo', function() {
    return this.month() + 1
  }), $('MMM', 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
  }), $('MMMM', 0, 0, function(e) {
    return this.localeData().months(this, e)
  }), P(
    'month',
    'M'
  ), H('month', 8), X('M', Ir), X('MM', Ir, Wr), X('MMM', function(e, t) {
    return t.monthsShortRegex(e)
  }), X('MMMM', function(e, t) {
    return t.monthsRegex(e)
  }), ee(['M', 'MM'], function(e, t) {
    t[ri] = w(e) - 1
  }), ee(['MMM', 'MMMM'], function(e, t, n, r) {
    var i = n._locale.monthsParse(e, r, n._strict)
    null != i ? (t[ri] = i) : (f(n).invalidMonth = e)
  })
  var fi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    hi = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
      '_'
    ),
    pi = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    mi = Kr,
    gi = Kr
  $('Y', 0, 0, function() {
    var e = this.year()
    return e <= 9999 ? '' + e : '+' + e
  }), $(0, ['YY', 2], 0, function() {
    return this.year() % 100
  }), $(
    0,
    ['YYYY', 4],
    0,
    'year'
  ), $(0, ['YYYYY', 5], 0, 'year'), $(0, ['YYYYYY', 6, !0], 0, 'year'), P('year', 'y'), H('year', 1), X('Y', Zr), X('YY', Ir, Wr), X('YYYY', Gr, Rr), X('YYYYY', zr, qr), X('YYYYYY', zr, qr), ee(['YYYYY', 'YYYYYY'], ni), ee('YYYY', function(t, n) {
    n[ni] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t)
  }), ee('YY', function(t, n) {
    n[ni] = e.parseTwoDigitYear(t)
  }), ee('Y', function(e, t) {
    t[ni] = parseInt(e, 10)
  }), (e.parseTwoDigitYear = function(e) {
    return w(e) + (w(e) > 68 ? 1900 : 2e3)
  })
  var yi = F('FullYear', !0)
  $(
    'w',
    ['ww', 2],
    'wo',
    'week'
  ), $('W', ['WW', 2], 'Wo', 'isoWeek'), P('week', 'w'), P('isoWeek', 'W'), H('week', 5), H('isoWeek', 5), X('w', Ir), X('ww', Ir, Wr), X('W', Ir), X('WW', Ir, Wr), te(['w', 'ww', 'W', 'WW'], function(e, t, n, r) {
    t[r.substr(0, 1)] = w(e)
  })
  var vi = { dow: 0, doy: 6 }
  $('d', 0, 'do', 'day'), $('dd', 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
  }), $('ddd', 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
  }), $('dddd', 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
  }), $(
    'e',
    0,
    0,
    'weekday'
  ), $('E', 0, 0, 'isoWeekday'), P('day', 'd'), P('weekday', 'e'), P('isoWeekday', 'E'), H('day', 11), H('weekday', 11), H('isoWeekday', 11), X('d', Ir), X('e', Ir), X('E', Ir), X('dd', function(e, t) {
    return t.weekdaysMinRegex(e)
  }), X('ddd', function(e, t) {
    return t.weekdaysShortRegex(e)
  }), X('dddd', function(e, t) {
    return t.weekdaysRegex(e)
  }), te(['dd', 'ddd', 'dddd'], function(e, t, n, r) {
    var i = n._locale.weekdaysParse(e, r, n._strict)
    null != i ? (t.d = i) : (f(n).invalidWeekday = e)
  }), te(['d', 'e', 'E'], function(e, t, n, r) {
    t[r] = w(e)
  })
  var wi = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_'
    ),
    xi = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    _i = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    bi = Kr,
    ki = Kr,
    Si = Kr
  $(
    'H',
    ['HH', 2],
    0,
    'hour'
  ), $('h', ['hh', 2], 0, Ie), $('k', ['kk', 2], 0, Ue), $('hmm', 0, 0, function() {
    return '' + Ie.apply(this) + V(this.minutes(), 2)
  }), $('hmmss', 0, 0, function() {
    return '' + Ie.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
  }), $('Hmm', 0, 0, function() {
    return '' + this.hours() + V(this.minutes(), 2)
  }), $('Hmmss', 0, 0, function() {
    return '' + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
  }), Ve(
    'a',
    !0
  ), Ve('A', !1), P('hour', 'h'), H('hour', 13), X('a', $e), X('A', $e), X('H', Ir), X('h', Ir), X('k', Ir), X('HH', Ir, Wr), X('hh', Ir, Wr), X('kk', Ir, Wr), X('hmm', Ur), X('hmmss', Vr), X('Hmm', Ur), X('Hmmss', Vr), ee(['H', 'HH'], oi), ee(['k', 'kk'], function(e, t, n) {
    var r = w(e)
    t[oi] = 24 === r ? 0 : r
  }), ee(['a', 'A'], function(e, t, n) {
    ;(n._isPm = n._locale.isPM(e)), (n._meridiem = e)
  }), ee(['h', 'hh'], function(e, t, n) {
    ;(t[oi] = w(e)), (f(n).bigHour = !0)
  }), ee('hmm', function(e, t, n) {
    var r = e.length - 2
    ;(t[oi] = w(e.substr(0, r))), (t[si] = w(e.substr(r))), (f(n).bigHour = !0)
  }), ee('hmmss', function(e, t, n) {
    var r = e.length - 4,
      i = e.length - 2
    ;(t[oi] = w(
      e.substr(0, r)
    )), (t[si] = w(e.substr(r, 2))), (t[ai] = w(e.substr(i))), (f(n).bigHour = !0)
  }), ee('Hmm', function(e, t, n) {
    var r = e.length - 2
    ;(t[oi] = w(e.substr(0, r))), (t[si] = w(e.substr(r)))
  }), ee('Hmmss', function(e, t, n) {
    var r = e.length - 4,
      i = e.length - 2
    ;(t[oi] = w(
      e.substr(0, r)
    )), (t[si] = w(e.substr(r, 2))), (t[ai] = w(e.substr(i)))
  })
  var Ti,
    Di = /[ap]\.?m?\.?/i,
    Mi = F('Hours', !0),
    Ci = {
      calendar: Mr,
      longDateFormat: Cr,
      invalidDate: 'Invalid date',
      ordinal: '%d',
      dayOfMonthOrdinalParse: Er,
      relativeTime: Nr,
      months: hi,
      monthsShort: pi,
      week: vi,
      weekdays: wi,
      weekdaysMin: _i,
      weekdaysShort: xi,
      meridiemParse: Di
    },
    Ei = {},
    Ni = {},
    Oi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Yi = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ji = /Z|[+-]\d\d(?::?\d\d)?/,
    Pi = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, !1],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
      ['YYYYDDD', /\d{7}/]
    ],
    Li = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/]
    ],
    Ai = /^\/?Date\((\-?\d+)/i,
    Hi = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/
  ;(e.createFromInputFallback = b(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function(e) {
      e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
    }
  )), (e.ISO_8601 = function() {}), (e.RFC_2822 = function() {})
  var Wi = b(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function() {
        var e = vt.apply(null, arguments)
        return this.isValid() && e.isValid() ? (e < this ? this : e) : p()
      }
    ),
    Fi = b(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function() {
        var e = vt.apply(null, arguments)
        return this.isValid() && e.isValid() ? (e > this ? this : e) : p()
      }
    ),
    Ri = function() {
      return Date.now ? Date.now() : +new Date()
    },
    qi = [
      'year',
      'quarter',
      'month',
      'week',
      'day',
      'hour',
      'minute',
      'second',
      'millisecond'
    ]
  Ct(
    'Z',
    ':'
  ), Ct('ZZ', ''), X('Z', Jr), X('ZZ', Jr), ee(['Z', 'ZZ'], function(e, t, n) {
    ;(n._useUTC = !0), (n._tzm = Et(Jr, e))
  })
  var Ii = /([\+\-]|\d\d)/gi
  e.updateOffset = function() {}
  var Ui = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Vi = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/
  ;(Ut.fn = Tt.prototype), (Ut.invalid = St)
  var $i = zt(1, 'add'),
    Gi = zt(-1, 'subtract')
  ;(e.defaultFormat =
    'YYYY-MM-DDTHH:mm:ssZ'), (e.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]')
  var zi = b(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function(e) {
      return void 0 === e ? this.localeData() : this.locale(e)
    }
  )
  $(0, ['gg', 2], 0, function() {
    return this.weekYear() % 100
  }), $(0, ['GG', 2], 0, function() {
    return this.isoWeekYear() % 100
  }), En(
    'gggg',
    'weekYear'
  ), En('ggggg', 'weekYear'), En('GGGG', 'isoWeekYear'), En('GGGGG', 'isoWeekYear'), P('weekYear', 'gg'), P('isoWeekYear', 'GG'), H('weekYear', 1), H('isoWeekYear', 1), X('G', Zr), X('g', Zr), X('GG', Ir, Wr), X('gg', Ir, Wr), X('GGGG', Gr, Rr), X('gggg', Gr, Rr), X('GGGGG', zr, qr), X('ggggg', zr, qr), te(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(e, t, n, r) {
    t[r.substr(0, 2)] = w(e)
  }), te(['gg', 'GG'], function(t, n, r, i) {
    n[i] = e.parseTwoDigitYear(t)
  }), $(
    'Q',
    0,
    'Qo',
    'quarter'
  ), P('quarter', 'Q'), H('quarter', 7), X('Q', Hr), ee('Q', function(e, t) {
    t[ri] = 3 * (w(e) - 1)
  }), $(
    'D',
    ['DD', 2],
    'Do',
    'date'
  ), P('date', 'D'), H('date', 9), X('D', Ir), X('DD', Ir, Wr), X('Do', function(e, t) {
    return e
      ? t._dayOfMonthOrdinalParse || t._ordinalParse
      : t._dayOfMonthOrdinalParseLenient
  }), ee(['D', 'DD'], ii), ee('Do', function(e, t) {
    t[ii] = w(e.match(Ir)[0], 10)
  })
  var Bi = F('Date', !0)
  $(
    'DDD',
    ['DDDD', 3],
    'DDDo',
    'dayOfYear'
  ), P('dayOfYear', 'DDD'), H('dayOfYear', 4), X('DDD', $r), X('DDDD', Fr), ee(['DDD', 'DDDD'], function(e, t, n) {
    n._dayOfYear = w(e)
  }), $(
    'm',
    ['mm', 2],
    0,
    'minute'
  ), P('minute', 'm'), H('minute', 14), X('m', Ir), X('mm', Ir, Wr), ee(['m', 'mm'], si)
  var Zi = F('Minutes', !1)
  $(
    's',
    ['ss', 2],
    0,
    'second'
  ), P('second', 's'), H('second', 15), X('s', Ir), X('ss', Ir, Wr), ee(['s', 'ss'], ai)
  var Xi = F('Seconds', !1)
  $('S', 0, 0, function() {
    return ~~(this.millisecond() / 100)
  }), $(0, ['SS', 2], 0, function() {
    return ~~(this.millisecond() / 10)
  }), $(0, ['SSS', 3], 0, 'millisecond'), $(0, ['SSSS', 4], 0, function() {
    return 10 * this.millisecond()
  }), $(0, ['SSSSS', 5], 0, function() {
    return 100 * this.millisecond()
  }), $(0, ['SSSSSS', 6], 0, function() {
    return 1e3 * this.millisecond()
  }), $(0, ['SSSSSSS', 7], 0, function() {
    return 1e4 * this.millisecond()
  }), $(0, ['SSSSSSSS', 8], 0, function() {
    return 1e5 * this.millisecond()
  }), $(0, ['SSSSSSSSS', 9], 0, function() {
    return 1e6 * this.millisecond()
  }), P(
    'millisecond',
    'ms'
  ), H('millisecond', 16), X('S', $r, Hr), X('SS', $r, Wr), X('SSS', $r, Fr)
  var Ji
  for (Ji = 'SSSS'; Ji.length <= 9; Ji += 'S') X(Ji, Br)
  for (Ji = 'S'; Ji.length <= 9; Ji += 'S') ee(Ji, Wn)
  var Qi = F('Milliseconds', !1)
  $('z', 0, 0, 'zoneAbbr'), $('zz', 0, 0, 'zoneName')
  var Ki = g.prototype
  ;(Ki.add = $i), (Ki.calendar = Xt), (Ki.clone = Jt), (Ki.diff = on), (Ki.endOf = vn), (Ki.format = cn), (Ki.from = dn), (Ki.fromNow = fn), (Ki.to = hn), (Ki.toNow = pn), (Ki.get = I), (Ki.invalidAt = Mn), (Ki.isAfter = Qt), (Ki.isBefore = Kt), (Ki.isBetween = en), (Ki.isSame = tn), (Ki.isSameOrAfter = nn), (Ki.isSameOrBefore = rn), (Ki.isValid = Tn), (Ki.lang = zi), (Ki.locale = mn), (Ki.localeData = gn), (Ki.max = Fi), (Ki.min = Wi), (Ki.parsingFlags = Dn), (Ki.set = U), (Ki.startOf = yn), (Ki.subtract = Gi), (Ki.toArray = bn), (Ki.toObject = kn), (Ki.toDate = _n), (Ki.toISOString = un), (Ki.inspect = ln), (Ki.toJSON = Sn), (Ki.toString = an), (Ki.unix = xn), (Ki.valueOf = wn), (Ki.creationData = Cn), (Ki.year = yi), (Ki.isLeapYear = ge), (Ki.weekYear = Nn), (Ki.isoWeekYear = On), (Ki.quarter = Ki.quarters = An), (Ki.month = le), (Ki.daysInMonth = ce), (Ki.week = Ki.weeks = De), (Ki.isoWeek = Ki.isoWeeks = Me), (Ki.weeksInYear = jn), (Ki.isoWeeksInYear = Yn), (Ki.date = Bi), (Ki.day = Ki.days = Le), (Ki.weekday = Ae), (Ki.isoWeekday = He), (Ki.dayOfYear = Hn), (Ki.hour = Ki.hours = Mi), (Ki.minute = Ki.minutes = Zi), (Ki.second = Ki.seconds = Xi), (Ki.millisecond = Ki.milliseconds = Qi), (Ki.utcOffset = Yt), (Ki.utc = Pt), (Ki.local = Lt), (Ki.parseZone = At), (Ki.hasAlignedHourOffset = Ht), (Ki.isDST = Wt), (Ki.isLocal = Rt), (Ki.isUtcOffset = qt), (Ki.isUtc = It), (Ki.isUTC = It), (Ki.zoneAbbr = Fn), (Ki.zoneName = Rn), (Ki.dates = b('dates accessor is deprecated. Use date instead.', Bi)), (Ki.months = b('months accessor is deprecated. Use month instead', le)), (Ki.years = b('years accessor is deprecated. Use year instead', yi)), (Ki.zone = b('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', jt)), (Ki.isDSTShifted = b('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', Ft))
  var eo = M.prototype
  ;(eo.calendar = C), (eo.longDateFormat = E), (eo.invalidDate = N), (eo.ordinal = O), (eo.preparse = Un), (eo.postformat = Un), (eo.relativeTime = Y), (eo.pastFuture = j), (eo.set = T), (eo.months = ie), (eo.monthsShort = oe), (eo.monthsParse = ae), (eo.monthsRegex = fe), (eo.monthsShortRegex = de), (eo.week = ke), (eo.firstDayOfYear = Te), (eo.firstDayOfWeek = Se), (eo.weekdays = Ne), (eo.weekdaysMin = Ye), (eo.weekdaysShort = Oe), (eo.weekdaysParse = Pe), (eo.weekdaysRegex = We), (eo.weekdaysShortRegex = Fe), (eo.weekdaysMinRegex = Re), (eo.isPM = Ge), (eo.meridiem = ze), Je('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
      var t = e % 10
      return (
        e +
        (1 === w(e % 100 / 10)
          ? 'th'
          : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th')
      )
    }
  }), (e.lang = b('moment.lang is deprecated. Use moment.locale instead.', Je)), (e.langData = b('moment.langData is deprecated. Use moment.localeData instead.', et))
  var to = Math.abs,
    no = ur('ms'),
    ro = ur('s'),
    io = ur('m'),
    oo = ur('h'),
    so = ur('d'),
    ao = ur('w'),
    uo = ur('M'),
    lo = ur('y'),
    co = cr('milliseconds'),
    fo = cr('seconds'),
    ho = cr('minutes'),
    po = cr('hours'),
    mo = cr('days'),
    go = cr('months'),
    yo = cr('years'),
    vo = Math.round,
    wo = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
    xo = Math.abs,
    _o = Tt.prototype
  return (_o.isValid = kt), (_o.abs = Qn), (_o.add = er), (_o.subtract = tr), (_o.as = sr), (_o.asMilliseconds = no), (_o.asSeconds = ro), (_o.asMinutes = io), (_o.asHours = oo), (_o.asDays = so), (_o.asWeeks = ao), (_o.asMonths = uo), (_o.asYears = lo), (_o.valueOf = ar), (_o._bubble = rr), (_o.get = lr), (_o.milliseconds = co), (_o.seconds = fo), (_o.minutes = ho), (_o.hours = po), (_o.days = mo), (_o.weeks = dr), (_o.months = go), (_o.years = yo), (_o.humanize = gr), (_o.toISOString = yr), (_o.toString = yr), (_o.toJSON = yr), (_o.locale = mn), (_o.localeData = gn), (_o.toIsoString = b('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', yr)), (_o.lang = zi), $('X', 0, 0, 'unix'), $('x', 0, 0, 'valueOf'), X('x', Zr), X('X', Qr), ee('X', function(e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10))
  }), ee('x', function(e, t, n) {
    n._d = new Date(w(e))
  }), (e.version = '2.18.1'), (function(e) {
    vr = e
  })(
    vt
  ), (e.fn = Ki), (e.min = xt), (e.max = _t), (e.now = Ri), (e.utc = c), (e.unix = qn), (e.months = zn), (e.isDate = s), (e.locale = Je), (e.invalid = p), (e.duration = Ut), (e.isMoment = y), (e.weekdays = Zn), (e.parseZone = In), (e.localeData = et), (e.isDuration = Dt), (e.monthsShort = Bn), (e.weekdaysMin = Jn), (e.defineLocale = Qe), (e.updateLocale = Ke), (e.locales = tt), (e.weekdaysShort = Xn), (e.normalizeUnits = L), (e.relativeTimeRounding = pr), (e.relativeTimeThreshold = mr), (e.calendarFormat = Zt), (e.prototype = Ki), e
})