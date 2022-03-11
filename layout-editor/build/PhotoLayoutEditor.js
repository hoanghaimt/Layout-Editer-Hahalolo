/*! For license information please see PhotoLayoutEditor.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(
        require("React"),
        require("ReactDOM"),
        require("jQuery")
      ))
    : "function" == typeof define && define.amd
    ? define(["React", "ReactDOM", "jQuery"], t)
    : "object" == typeof exports
    ? (exports.PhotoLayoutEditor = t(
        require("React"),
        require("ReactDOM"),
        require("jQuery")
      ))
    : (e.PhotoLayoutEditor = t(e.React, e.ReactDOM, e.jQuery));
})(self, function (e, t, n) {
  return (() => {
    var r = {
        4184: (e, t) => {
          var n;
          !(function () {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                  var i = typeof n;
                  if ("string" === i || "number" === i) e.push(n);
                  else if (Array.isArray(n)) {
                    if (n.length) {
                      var a = o.apply(null, n);
                      a && e.push(a);
                    }
                  } else if ("object" === i)
                    if (n.toString === Object.prototype.toString)
                      for (var u in n) r.call(n, u) && n[u] && e.push(u);
                    else e.push(n.toString());
                }
              }
              return e.join(" ");
            }
            e.exports
              ? ((o.default = o), (e.exports = o))
              : void 0 ===
                  (n = function () {
                    return o;
                  }.apply(t, [])) || (e.exports = n);
          })();
        },
        8679: (e, t, n) => {
          "use strict";
          var r = n(9864),
            o = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            u = {};
          function c(e) {
            return r.isMemo(e) ? a : u[e.$$typeof] || o;
          }
          (u[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
            (u[r.Memo] = a);
          var s = Object.defineProperty,
            l = Object.getOwnPropertyNames,
            f = Object.getOwnPropertySymbols,
            p = Object.getOwnPropertyDescriptor,
            d = Object.getPrototypeOf,
            h = Object.prototype;
          e.exports = function e(t, n, r) {
            if ("string" != typeof n) {
              if (h) {
                var o = d(n);
                o && o !== h && e(t, o, r);
              }
              var a = l(n);
              f && (a = a.concat(f(n)));
              for (var u = c(t), y = c(n), g = 0; g < a.length; ++g) {
                var m = a[g];
                if (!(i[m] || (r && r[m]) || (y && y[m]) || (u && u[m]))) {
                  var b = p(n, m);
                  try {
                    s(t, m, b);
                  } catch (e) {}
                }
              }
            }
            return t;
          };
        },
        2307: (e, t, n) => {
          e = n.nmd(e);
          var r = "__lodash_hash_undefined__",
            o = 9007199254740991,
            i = "[object Arguments]",
            a = "[object Array]",
            u = "[object Boolean]",
            c = "[object Date]",
            s = "[object Error]",
            l = "[object Function]",
            f = "[object Map]",
            p = "[object Number]",
            d = "[object Object]",
            h = "[object Promise]",
            y = "[object RegExp]",
            g = "[object Set]",
            m = "[object String]",
            b = "[object Symbol]",
            v = "[object WeakMap]",
            w = "[object ArrayBuffer]",
            O = "[object DataView]",
            S = /^\[object .+?Constructor\]$/,
            _ = /^(?:0|[1-9]\d*)$/,
            P = {};
          (P["[object Float32Array]"] =
            P["[object Float64Array]"] =
            P["[object Int8Array]"] =
            P["[object Int16Array]"] =
            P["[object Int32Array]"] =
            P["[object Uint8Array]"] =
            P["[object Uint8ClampedArray]"] =
            P["[object Uint16Array]"] =
            P["[object Uint32Array]"] =
              !0),
            (P[i] =
              P[a] =
              P[w] =
              P[u] =
              P[O] =
              P[c] =
              P[s] =
              P[l] =
              P[f] =
              P[p] =
              P[d] =
              P[y] =
              P[g] =
              P[m] =
              P[v] =
                !1);
          var j = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            k =
              "object" == typeof self && self && self.Object === Object && self,
            E = j || k || Function("return this")(),
            x = t && !t.nodeType && t,
            C = x && e && !e.nodeType && e,
            D = C && C.exports === x,
            R = D && j.process,
            T = (function () {
              try {
                return R && R.binding && R.binding("util");
              } catch (e) {}
            })(),
            z = T && T.isTypedArray;
          function M(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
              if (t(e[n], n, e)) return !0;
            return !1;
          }
          function N(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e, r) {
                n[++t] = [r, e];
              }),
              n
            );
          }
          function I(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e) {
                n[++t] = e;
              }),
              n
            );
          }
          var B,
            H,
            L,
            A = Array.prototype,
            W = Function.prototype,
            U = Object.prototype,
            F = E["__core-js_shared__"],
            $ = W.toString,
            q = U.hasOwnProperty,
            X = (B = /[^.]+$/.exec((F && F.keys && F.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + B
              : "",
            G = U.toString,
            Y = RegExp(
              "^" +
                $.call(q)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            V = D ? E.Buffer : void 0,
            K = E.Symbol,
            Z = E.Uint8Array,
            Q = U.propertyIsEnumerable,
            J = A.splice,
            ee = K ? K.toStringTag : void 0,
            te = Object.getOwnPropertySymbols,
            ne = V ? V.isBuffer : void 0,
            re =
              ((H = Object.keys),
              (L = Object),
              function (e) {
                return H(L(e));
              }),
            oe = Te(E, "DataView"),
            ie = Te(E, "Map"),
            ae = Te(E, "Promise"),
            ue = Te(E, "Set"),
            ce = Te(E, "WeakMap"),
            se = Te(Object, "create"),
            le = Ie(oe),
            fe = Ie(ie),
            pe = Ie(ae),
            de = Ie(ue),
            he = Ie(ce),
            ye = K ? K.prototype : void 0,
            ge = ye ? ye.valueOf : void 0;
          function me(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function be(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function ve(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function we(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.__data__ = new ve(); ++t < n; ) this.add(e[t]);
          }
          function Oe(e) {
            var t = (this.__data__ = new be(e));
            this.size = t.size;
          }
          function Se(e, t) {
            var n = Le(e),
              r = !n && He(e),
              o = !n && !r && Ae(e),
              i = !n && !r && !o && qe(e),
              a = n || r || o || i,
              u = a
                ? (function (e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                  })(e.length, String)
                : [],
              c = u.length;
            for (var s in e)
              (!t && !q.call(e, s)) ||
                (a &&
                  ("length" == s ||
                    (o && ("offset" == s || "parent" == s)) ||
                    (i &&
                      ("buffer" == s ||
                        "byteLength" == s ||
                        "byteOffset" == s)) ||
                    Ne(s, c))) ||
                u.push(s);
            return u;
          }
          function _e(e, t) {
            for (var n = e.length; n--; ) if (Be(e[n][0], t)) return n;
            return -1;
          }
          function Pe(e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : ee && ee in Object(e)
              ? (function (e) {
                  var t = q.call(e, ee),
                    n = e[ee];
                  try {
                    e[ee] = void 0;
                    var r = !0;
                  } catch (e) {}
                  var o = G.call(e);
                  r && (t ? (e[ee] = n) : delete e[ee]);
                  return o;
                })(e)
              : (function (e) {
                  return G.call(e);
                })(e);
          }
          function je(e) {
            return $e(e) && Pe(e) == i;
          }
          function ke(e, t, n, r, o) {
            return (
              e === t ||
              (null == e || null == t || (!$e(e) && !$e(t))
                ? e != e && t != t
                : (function (e, t, n, r, o, l) {
                    var h = Le(e),
                      v = Le(t),
                      S = h ? a : Me(e),
                      _ = v ? a : Me(t),
                      P = (S = S == i ? d : S) == d,
                      j = (_ = _ == i ? d : _) == d,
                      k = S == _;
                    if (k && Ae(e)) {
                      if (!Ae(t)) return !1;
                      (h = !0), (P = !1);
                    }
                    if (k && !P)
                      return (
                        l || (l = new Oe()),
                        h || qe(e)
                          ? Ce(e, t, n, r, o, l)
                          : (function (e, t, n, r, o, i, a) {
                              switch (n) {
                                case O:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    e.byteOffset != t.byteOffset
                                  )
                                    return !1;
                                  (e = e.buffer), (t = t.buffer);
                                case w:
                                  return !(
                                    e.byteLength != t.byteLength ||
                                    !i(new Z(e), new Z(t))
                                  );
                                case u:
                                case c:
                                case p:
                                  return Be(+e, +t);
                                case s:
                                  return (
                                    e.name == t.name && e.message == t.message
                                  );
                                case y:
                                case m:
                                  return e == t + "";
                                case f:
                                  var l = N;
                                case g:
                                  var d = 1 & r;
                                  if ((l || (l = I), e.size != t.size && !d))
                                    return !1;
                                  var h = a.get(e);
                                  if (h) return h == t;
                                  (r |= 2), a.set(e, t);
                                  var v = Ce(l(e), l(t), r, o, i, a);
                                  return a.delete(e), v;
                                case b:
                                  if (ge) return ge.call(e) == ge.call(t);
                              }
                              return !1;
                            })(e, t, S, n, r, o, l)
                      );
                    if (!(1 & n)) {
                      var E = P && q.call(e, "__wrapped__"),
                        x = j && q.call(t, "__wrapped__");
                      if (E || x) {
                        var C = E ? e.value() : e,
                          D = x ? t.value() : t;
                        return l || (l = new Oe()), o(C, D, n, r, l);
                      }
                    }
                    if (!k) return !1;
                    return (
                      l || (l = new Oe()),
                      (function (e, t, n, r, o, i) {
                        var a = 1 & n,
                          u = De(e),
                          c = u.length,
                          s = De(t).length;
                        if (c != s && !a) return !1;
                        var l = c;
                        for (; l--; ) {
                          var f = u[l];
                          if (!(a ? f in t : q.call(t, f))) return !1;
                        }
                        var p = i.get(e);
                        if (p && i.get(t)) return p == t;
                        var d = !0;
                        i.set(e, t), i.set(t, e);
                        var h = a;
                        for (; ++l < c; ) {
                          var y = e[(f = u[l])],
                            g = t[f];
                          if (r)
                            var m = a
                              ? r(g, y, f, t, e, i)
                              : r(y, g, f, e, t, i);
                          if (
                            !(void 0 === m ? y === g || o(y, g, n, r, i) : m)
                          ) {
                            d = !1;
                            break;
                          }
                          h || (h = "constructor" == f);
                        }
                        if (d && !h) {
                          var b = e.constructor,
                            v = t.constructor;
                          b == v ||
                            !("constructor" in e) ||
                            !("constructor" in t) ||
                            ("function" == typeof b &&
                              b instanceof b &&
                              "function" == typeof v &&
                              v instanceof v) ||
                            (d = !1);
                        }
                        return i.delete(e), i.delete(t), d;
                      })(e, t, n, r, o, l)
                    );
                  })(e, t, n, r, ke, o))
            );
          }
          function Ee(e) {
            return (
              !(
                !Fe(e) ||
                (function (e) {
                  return !!X && X in e;
                })(e)
              ) && (We(e) ? Y : S).test(Ie(e))
            );
          }
          function xe(e) {
            if (
              ((n = (t = e) && t.constructor),
              (r = ("function" == typeof n && n.prototype) || U),
              t !== r)
            )
              return re(e);
            var t,
              n,
              r,
              o = [];
            for (var i in Object(e))
              q.call(e, i) && "constructor" != i && o.push(i);
            return o;
          }
          function Ce(e, t, n, r, o, i) {
            var a = 1 & n,
              u = e.length,
              c = t.length;
            if (u != c && !(a && c > u)) return !1;
            var s = i.get(e);
            if (s && i.get(t)) return s == t;
            var l = -1,
              f = !0,
              p = 2 & n ? new we() : void 0;
            for (i.set(e, t), i.set(t, e); ++l < u; ) {
              var d = e[l],
                h = t[l];
              if (r) var y = a ? r(h, d, l, t, e, i) : r(d, h, l, e, t, i);
              if (void 0 !== y) {
                if (y) continue;
                f = !1;
                break;
              }
              if (p) {
                if (
                  !M(t, function (e, t) {
                    if (((a = t), !p.has(a) && (d === e || o(d, e, n, r, i))))
                      return p.push(t);
                    var a;
                  })
                ) {
                  f = !1;
                  break;
                }
              } else if (d !== h && !o(d, h, n, r, i)) {
                f = !1;
                break;
              }
            }
            return i.delete(e), i.delete(t), f;
          }
          function De(e) {
            return (function (e, t, n) {
              var r = t(e);
              return Le(e)
                ? r
                : (function (e, t) {
                    for (var n = -1, r = t.length, o = e.length; ++n < r; )
                      e[o + n] = t[n];
                    return e;
                  })(r, n(e));
            })(e, Xe, ze);
          }
          function Re(e, t) {
            var n,
              r,
              o = e.__data__;
            return (
              "string" == (r = typeof (n = t)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? o["string" == typeof t ? "string" : "hash"]
              : o.map;
          }
          function Te(e, t) {
            var n = (function (e, t) {
              return null == e ? void 0 : e[t];
            })(e, t);
            return Ee(n) ? n : void 0;
          }
          (me.prototype.clear = function () {
            (this.__data__ = se ? se(null) : {}), (this.size = 0);
          }),
            (me.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            (me.prototype.get = function (e) {
              var t = this.__data__;
              if (se) {
                var n = t[e];
                return n === r ? void 0 : n;
              }
              return q.call(t, e) ? t[e] : void 0;
            }),
            (me.prototype.has = function (e) {
              var t = this.__data__;
              return se ? void 0 !== t[e] : q.call(t, e);
            }),
            (me.prototype.set = function (e, t) {
              var n = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (n[e] = se && void 0 === t ? r : t),
                this
              );
            }),
            (be.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (be.prototype.delete = function (e) {
              var t = this.__data__,
                n = _e(t, e);
              return (
                !(n < 0) &&
                (n == t.length - 1 ? t.pop() : J.call(t, n, 1), --this.size, !0)
              );
            }),
            (be.prototype.get = function (e) {
              var t = this.__data__,
                n = _e(t, e);
              return n < 0 ? void 0 : t[n][1];
            }),
            (be.prototype.has = function (e) {
              return _e(this.__data__, e) > -1;
            }),
            (be.prototype.set = function (e, t) {
              var n = this.__data__,
                r = _e(n, e);
              return (
                r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
              );
            }),
            (ve.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new me(),
                  map: new (ie || be)(),
                  string: new me(),
                });
            }),
            (ve.prototype.delete = function (e) {
              var t = Re(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            (ve.prototype.get = function (e) {
              return Re(this, e).get(e);
            }),
            (ve.prototype.has = function (e) {
              return Re(this, e).has(e);
            }),
            (ve.prototype.set = function (e, t) {
              var n = Re(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            }),
            (we.prototype.add = we.prototype.push =
              function (e) {
                return this.__data__.set(e, r), this;
              }),
            (we.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Oe.prototype.clear = function () {
              (this.__data__ = new be()), (this.size = 0);
            }),
            (Oe.prototype.delete = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            }),
            (Oe.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (Oe.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Oe.prototype.set = function (e, t) {
              var n = this.__data__;
              if (n instanceof be) {
                var r = n.__data__;
                if (!ie || r.length < 199)
                  return r.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new ve(r);
              }
              return n.set(e, t), (this.size = n.size), this;
            });
          var ze = te
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = Object(e)),
                      (function (e, t) {
                        for (
                          var n = -1,
                            r = null == e ? 0 : e.length,
                            o = 0,
                            i = [];
                          ++n < r;

                        ) {
                          var a = e[n];
                          t(a, n, e) && (i[o++] = a);
                        }
                        return i;
                      })(te(e), function (t) {
                        return Q.call(e, t);
                      }));
                }
              : function () {
                  return [];
                },
            Me = Pe;
          function Ne(e, t) {
            return (
              !!(t = null == t ? o : t) &&
              ("number" == typeof e || _.test(e)) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function Ie(e) {
            if (null != e) {
              try {
                return $.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }
          function Be(e, t) {
            return e === t || (e != e && t != t);
          }
          ((oe && Me(new oe(new ArrayBuffer(1))) != O) ||
            (ie && Me(new ie()) != f) ||
            (ae && Me(ae.resolve()) != h) ||
            (ue && Me(new ue()) != g) ||
            (ce && Me(new ce()) != v)) &&
            (Me = function (e) {
              var t = Pe(e),
                n = t == d ? e.constructor : void 0,
                r = n ? Ie(n) : "";
              if (r)
                switch (r) {
                  case le:
                    return O;
                  case fe:
                    return f;
                  case pe:
                    return h;
                  case de:
                    return g;
                  case he:
                    return v;
                }
              return t;
            });
          var He = je(
              (function () {
                return arguments;
              })()
            )
              ? je
              : function (e) {
                  return $e(e) && q.call(e, "callee") && !Q.call(e, "callee");
                },
            Le = Array.isArray;
          var Ae =
            ne ||
            function () {
              return !1;
            };
          function We(e) {
            if (!Fe(e)) return !1;
            var t = Pe(e);
            return (
              t == l ||
              "[object GeneratorFunction]" == t ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          }
          function Ue(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
          }
          function Fe(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function $e(e) {
            return null != e && "object" == typeof e;
          }
          var qe = z
            ? (function (e) {
                return function (t) {
                  return e(t);
                };
              })(z)
            : function (e) {
                return $e(e) && Ue(e.length) && !!P[Pe(e)];
              };
          function Xe(e) {
            return null != (t = e) && Ue(t.length) && !We(t) ? Se(e) : xe(e);
            var t;
          }
          e.exports = function (e, t) {
            return ke(e, t);
          };
        },
        2703: (e, t, n) => {
          "use strict";
          var r = n(414);
          function o() {}
          function i() {}
          (i.resetWarningCache = o),
            (e.exports = function () {
              function e(e, t, n, o, i, a) {
                if (a !== r) {
                  var u = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((u.name = "Invariant Violation"), u);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o,
              };
              return (n.PropTypes = n), n;
            });
        },
        5697: (e, t, n) => {
          e.exports = n(2703)();
        },
        414: (e) => {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        6501: (e) => {
          e.exports = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a = e[0] / 360,
              u = e[1] / 100,
              c = e[2] / 100;
            if (0 == u) return [(i = 255 * c), i, i];
            (t = 2 * c - (n = c < 0.5 ? c * (1 + u) : c + u - c * u)),
              (o = [0, 0, 0]);
            for (var s = 0; s < 3; s++)
              (r = a + (1 / 3) * -(s - 1)) < 0 && r++,
                r > 1 && r--,
                (i =
                  6 * r < 1
                    ? t + 6 * (n - t) * r
                    : 2 * r < 1
                    ? n
                    : 3 * r < 2
                    ? t + (n - t) * (2 / 3 - r) * 6
                    : t),
                (o[s] = 255 * i);
            return o;
          };
        },
        1366: (e) => {
          e.exports = function (e) {
            var t = e[0] / 60,
              n = e[1] / 100,
              r = e[2] / 100,
              o = Math.floor(t) % 6,
              i = t - Math.floor(t),
              a = 255 * r * (1 - n),
              u = 255 * r * (1 - n * i),
              c = 255 * r * (1 - n * (1 - i));
            switch (((r *= 255), o)) {
              case 0:
                return [r, c, a];
              case 1:
                return [u, r, a];
              case 2:
                return [a, r, c];
              case 3:
                return [a, u, r];
              case 4:
                return [c, a, r];
              case 5:
                return [r, a, u];
            }
          };
        },
        6586: (e) => {
          e.exports = function (e) {
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3;
          };
        },
        8210: (e) => {
          e.exports = function (e) {
            var t,
              n,
              r = e[0],
              o = e[1],
              i = e[2],
              a = Math.min(r, o, i),
              u = Math.max(r, o, i),
              c = u - a;
            return (
              (n = 0 == u ? 0 : ((c / u) * 1e3) / 10),
              u == a
                ? (t = 0)
                : r == u
                ? (t = (o - i) / c)
                : o == u
                ? (t = 2 + (i - r) / c)
                : i == u && (t = 4 + (r - o) / c),
              (t = Math.min(60 * t, 360)) < 0 && (t += 360),
              [t, n, ((u / 255) * 1e3) / 10]
            );
          };
        },
        735: (e) => {
          e.exports = function (e) {
            var t = "rgb";
            return (
              4 === e.length && (t += "a"),
              (e[0] = Math.round(e[0])),
              (e[1] = Math.round(e[1])),
              (e[2] = Math.round(e[2])),
              t + "(" + e.join(",") + ")"
            );
          };
        },
        3356: (e) => {
          var t = /-?\d+(\.\d+)?%?/g;
          e.exports = function (e) {
            return e.match(t);
          };
        },
        2379: (e) => {
          e.exports = function (e) {
            (4 !== e.length && 5 !== e.length) ||
              (e = (function (e) {
                for (var t = "#", n = 1; n < e.length; n++) {
                  var r = e.charAt(n);
                  t += r + r;
                }
                return t;
              })(e));
            var t = [
              parseInt(e.substring(1, 3), 16),
              parseInt(e.substring(3, 5), 16),
              parseInt(e.substring(5, 7), 16),
            ];
            if (9 === e.length) {
              var n = parseFloat(
                (parseInt(e.substring(7, 9), 16) / 255).toFixed(2)
              );
              t.push(n);
            }
            return t;
          };
        },
        9143: (e, t, n) => {
          var r = n(3356),
            o = n(2912);
          function i(e, t) {
            switch (((e = parseFloat(e)), t)) {
              case 0:
                return o(e, 0, 360);
              case 1:
              case 2:
                return o(e, 0, 100);
              case 3:
                return o(e, 0, 1);
            }
          }
          e.exports = function (e) {
            return r(e).map(i);
          };
        },
        4586: (e, t, n) => {
          var r = n(9143),
            o = n(2379),
            i = n(4835),
            a = n(6501);
          var u = {
            "#": o,
            hsl: function (e) {
              var t = r(e),
                n = a(t);
              return 4 === t.length && n.push(t[3]), n;
            },
            rgb: i,
          };
          function c(e) {
            for (var t in u) if (0 === e.indexOf(t)) return u[t](e);
          }
          (c.rgb = i), (c.hsl = r), (c.hex = o), (e.exports = c);
        },
        4835: (e, t, n) => {
          var r = n(3356),
            o = n(2912);
          function i(e, t) {
            return t < 3
              ? -1 != e.indexOf("%")
                ? Math.round((255 * o(parseInt(e, 10), 0, 100)) / 100)
                : o(parseInt(e, 10), 0, 255)
              : o(parseFloat(e), 0, 1);
          }
          e.exports = function (e) {
            return r(e).map(i);
          };
        },
        2912: (e) => {
          e.exports = function (e, t, n) {
            return Math.min(Math.max(e, t), n);
          };
        },
        5668: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "DraggableCore", {
              enumerable: !0,
              get: function () {
                return l.default;
              },
            }),
            (t.default = void 0);
          var r = (function (e) {
              if (e && e.__esModule) return e;
              if (null === e || ("object" !== h(e) && "function" != typeof e))
                return { default: e };
              var t = d();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                  i && (i.get || i.set)
                    ? Object.defineProperty(n, o, i)
                    : (n[o] = e[o]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(3804)),
            o = p(n(5697)),
            i = p(n(7196)),
            a = p(n(4184)),
            u = n(1825),
            c = n(2849),
            s = n(9280),
            l = p(n(783)),
            f = p(n(5904));
          function p(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (d = function () {
                return e;
              }),
              e
            );
          }
          function h(e) {
            return (h =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function y() {
            return (y =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function g(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  t.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (o[n] = e[n]));
            }
            return o;
          }
          function m(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" == typeof Symbol ||
                  !(Symbol.iterator in Object(e))
                )
                  return;
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, u = e[Symbol.iterator]();
                    !(r = (a = u.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(e, t) ||
              (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return b(e, t);
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function w(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? v(Object(n), !0).forEach(function (t) {
                    x(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : v(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function O(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function S(e, t, n) {
            return t && O(e.prototype, t), n && O(e, n), e;
          }
          function _(e, t) {
            return (_ =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function P(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = E(e);
              if (t) {
                var o = E(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return j(this, n);
            };
          }
          function j(e, t) {
            return !t || ("object" !== h(t) && "function" != typeof t)
              ? k(e)
              : t;
          }
          function k(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function E(e) {
            return (E = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function x(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var C = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && _(e, t);
            })(n, e);
            var t = P(n);
            function n(e) {
              var r;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n),
                x(k((r = t.call(this, e))), "onDragStart", function (e, t) {
                  if (
                    ((0, f.default)("Draggable: onDragStart: %j", t),
                    !1 ===
                      r.props.onStart(e, (0, c.createDraggableData)(k(r), t)))
                  )
                    return !1;
                  r.setState({ dragging: !0, dragged: !0 });
                }),
                x(k(r), "onDrag", function (e, t) {
                  if (!r.state.dragging) return !1;
                  (0, f.default)("Draggable: onDrag: %j", t);
                  var n = (0, c.createDraggableData)(k(r), t),
                    o = { x: n.x, y: n.y };
                  if (r.props.bounds) {
                    var i = o.x,
                      a = o.y;
                    (o.x += r.state.slackX), (o.y += r.state.slackY);
                    var u = m((0, c.getBoundPosition)(k(r), o.x, o.y), 2),
                      s = u[0],
                      l = u[1];
                    (o.x = s),
                      (o.y = l),
                      (o.slackX = r.state.slackX + (i - o.x)),
                      (o.slackY = r.state.slackY + (a - o.y)),
                      (n.x = o.x),
                      (n.y = o.y),
                      (n.deltaX = o.x - r.state.x),
                      (n.deltaY = o.y - r.state.y);
                  }
                  if (!1 === r.props.onDrag(e, n)) return !1;
                  r.setState(o);
                }),
                x(k(r), "onDragStop", function (e, t) {
                  if (!r.state.dragging) return !1;
                  if (
                    !1 ===
                    r.props.onStop(e, (0, c.createDraggableData)(k(r), t))
                  )
                    return !1;
                  (0, f.default)("Draggable: onDragStop: %j", t);
                  var n = { dragging: !1, slackX: 0, slackY: 0 };
                  if (Boolean(r.props.position)) {
                    var o = r.props.position,
                      i = o.x,
                      a = o.y;
                    (n.x = i), (n.y = a);
                  }
                  r.setState(n);
                }),
                (r.state = {
                  dragging: !1,
                  dragged: !1,
                  x: e.position ? e.position.x : e.defaultPosition.x,
                  y: e.position ? e.position.y : e.defaultPosition.y,
                  prevPropsPosition: w({}, e.position),
                  slackX: 0,
                  slackY: 0,
                  isElementSVG: !1,
                }),
                !e.position ||
                  e.onDrag ||
                  e.onStop ||
                  console.warn(
                    "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
                  ),
                r
              );
            }
            return (
              S(n, null, [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = e.position,
                      r = t.prevPropsPosition;
                    return !n || (r && n.x === r.x && n.y === r.y)
                      ? null
                      : ((0, f.default)(
                          "Draggable: getDerivedStateFromProps %j",
                          { position: n, prevPropsPosition: r }
                        ),
                        { x: n.x, y: n.y, prevPropsPosition: w({}, n) });
                  },
                },
              ]),
              S(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    void 0 !== window.SVGElement &&
                      this.findDOMNode() instanceof window.SVGElement &&
                      this.setState({ isElementSVG: !0 });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.setState({ dragging: !1 });
                  },
                },
                {
                  key: "findDOMNode",
                  value: function () {
                    return this.props.nodeRef
                      ? this.props.nodeRef.current
                      : i.default.findDOMNode(this);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this.props,
                      n = (t.axis, t.bounds, t.children),
                      o = t.defaultPosition,
                      i = t.defaultClassName,
                      s = t.defaultClassNameDragging,
                      f = t.defaultClassNameDragged,
                      p = t.position,
                      d = t.positionOffset,
                      h =
                        (t.scale,
                        g(t, [
                          "axis",
                          "bounds",
                          "children",
                          "defaultPosition",
                          "defaultClassName",
                          "defaultClassNameDragging",
                          "defaultClassNameDragged",
                          "position",
                          "positionOffset",
                          "scale",
                        ])),
                      m = {},
                      b = null,
                      v = !Boolean(p) || this.state.dragging,
                      O = p || o,
                      S = {
                        x: (0, c.canDragX)(this) && v ? this.state.x : O.x,
                        y: (0, c.canDragY)(this) && v ? this.state.y : O.y,
                      };
                    this.state.isElementSVG
                      ? (b = (0, u.createSVGTransform)(S, d))
                      : (m = (0, u.createCSSTransform)(S, d));
                    var _ = (0, a.default)(
                      n.props.className || "",
                      i,
                      (x((e = {}), s, this.state.dragging),
                      x(e, f, this.state.dragged),
                      e)
                    );
                    return r.createElement(
                      l.default,
                      y({}, h, {
                        onStart: this.onDragStart,
                        onDrag: this.onDrag,
                        onStop: this.onDragStop,
                      }),
                      r.cloneElement(r.Children.only(n), {
                        className: _,
                        style: w(w({}, n.props.style), m),
                        transform: b,
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(r.Component);
          (t.default = C),
            x(C, "displayName", "Draggable"),
            x(
              C,
              "propTypes",
              w(
                w({}, l.default.propTypes),
                {},
                {
                  axis: o.default.oneOf(["both", "x", "y", "none"]),
                  bounds: o.default.oneOfType([
                    o.default.shape({
                      left: o.default.number,
                      right: o.default.number,
                      top: o.default.number,
                      bottom: o.default.number,
                    }),
                    o.default.string,
                    o.default.oneOf([!1]),
                  ]),
                  defaultClassName: o.default.string,
                  defaultClassNameDragging: o.default.string,
                  defaultClassNameDragged: o.default.string,
                  defaultPosition: o.default.shape({
                    x: o.default.number,
                    y: o.default.number,
                  }),
                  positionOffset: o.default.shape({
                    x: o.default.oneOfType([
                      o.default.number,
                      o.default.string,
                    ]),
                    y: o.default.oneOfType([
                      o.default.number,
                      o.default.string,
                    ]),
                  }),
                  position: o.default.shape({
                    x: o.default.number,
                    y: o.default.number,
                  }),
                  className: s.dontSetMe,
                  style: s.dontSetMe,
                  transform: s.dontSetMe,
                }
              )
            ),
            x(
              C,
              "defaultProps",
              w(
                w({}, l.default.defaultProps),
                {},
                {
                  axis: "both",
                  bounds: !1,
                  defaultClassName: "react-draggable",
                  defaultClassNameDragging: "react-draggable-dragging",
                  defaultClassNameDragged: "react-draggable-dragged",
                  defaultPosition: { x: 0, y: 0 },
                  position: null,
                  scale: 1,
                }
              )
            );
        },
        783: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = (function (e) {
              if (e && e.__esModule) return e;
              if (null === e || ("object" !== p(e) && "function" != typeof e))
                return { default: e };
              var t = f();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                  i && (i.get || i.set)
                    ? Object.defineProperty(n, o, i)
                    : (n[o] = e[o]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(3804)),
            o = l(n(5697)),
            i = l(n(7196)),
            a = n(1825),
            u = n(2849),
            c = n(9280),
            s = l(n(5904));
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function f() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (f = function () {
                return e;
              }),
              e
            );
          }
          function p(e) {
            return (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function d(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" == typeof Symbol ||
                  !(Symbol.iterator in Object(e))
                )
                  return;
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, u = e[Symbol.iterator]();
                    !(r = (a = u.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(e, t) ||
              (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return h(e, t);
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function y(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function g(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function m(e, t) {
            return (m =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function b(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = O(e);
              if (t) {
                var o = O(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return v(this, n);
            };
          }
          function v(e, t) {
            return !t || ("object" !== p(t) && "function" != typeof t)
              ? w(e)
              : t;
          }
          function w(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function O(e) {
            return (O = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function S(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var _ = { start: "touchstart", move: "touchmove", stop: "touchend" },
            P = { start: "mousedown", move: "mousemove", stop: "mouseup" },
            j = P,
            k = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && m(e, t);
              })(l, e);
              var t,
                n,
                o,
                c = b(l);
              function l() {
                var e;
                y(this, l);
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return (
                  S(w((e = c.call.apply(c, [this].concat(n)))), "state", {
                    dragging: !1,
                    lastX: NaN,
                    lastY: NaN,
                    touchIdentifier: null,
                  }),
                  S(w(e), "mounted", !1),
                  S(w(e), "handleDragStart", function (t) {
                    if (
                      (e.props.onMouseDown(t),
                      !e.props.allowAnyClick &&
                        "number" == typeof t.button &&
                        0 !== t.button)
                    )
                      return !1;
                    var n = e.findDOMNode();
                    if (!n || !n.ownerDocument || !n.ownerDocument.body)
                      throw new Error(
                        "<DraggableCore> not mounted on DragStart!"
                      );
                    var r = n.ownerDocument;
                    if (
                      !(
                        e.props.disabled ||
                        !(t.target instanceof r.defaultView.Node) ||
                        (e.props.handle &&
                          !(0, a.matchesSelectorAndParentsTo)(
                            t.target,
                            e.props.handle,
                            n
                          )) ||
                        (e.props.cancel &&
                          (0, a.matchesSelectorAndParentsTo)(
                            t.target,
                            e.props.cancel,
                            n
                          ))
                      )
                    ) {
                      "touchstart" === t.type && t.preventDefault();
                      var o = (0, a.getTouchIdentifier)(t);
                      e.setState({ touchIdentifier: o });
                      var i = (0, u.getControlPosition)(t, o, w(e));
                      if (null != i) {
                        var c = i.x,
                          l = i.y,
                          f = (0, u.createCoreData)(w(e), c, l);
                        (0, s.default)("DraggableCore: handleDragStart: %j", f),
                          (0, s.default)("calling", e.props.onStart),
                          !1 !== e.props.onStart(t, f) &&
                            !1 !== e.mounted &&
                            (e.props.enableUserSelectHack &&
                              (0, a.addUserSelectStyles)(r),
                            e.setState({ dragging: !0, lastX: c, lastY: l }),
                            (0, a.addEvent)(r, j.move, e.handleDrag),
                            (0, a.addEvent)(r, j.stop, e.handleDragStop));
                      }
                    }
                  }),
                  S(w(e), "handleDrag", function (t) {
                    var n = (0, u.getControlPosition)(
                      t,
                      e.state.touchIdentifier,
                      w(e)
                    );
                    if (null != n) {
                      var r = n.x,
                        o = n.y;
                      if (Array.isArray(e.props.grid)) {
                        var i = r - e.state.lastX,
                          a = o - e.state.lastY,
                          c = d((0, u.snapToGrid)(e.props.grid, i, a), 2);
                        if (((i = c[0]), (a = c[1]), !i && !a)) return;
                        (r = e.state.lastX + i), (o = e.state.lastY + a);
                      }
                      var l = (0, u.createCoreData)(w(e), r, o);
                      if (
                        ((0, s.default)("DraggableCore: handleDrag: %j", l),
                        !1 !== e.props.onDrag(t, l) && !1 !== e.mounted)
                      )
                        e.setState({ lastX: r, lastY: o });
                      else
                        try {
                          e.handleDragStop(new MouseEvent("mouseup"));
                        } catch (t) {
                          var f = document.createEvent("MouseEvents");
                          f.initMouseEvent(
                            "mouseup",
                            !0,
                            !0,
                            window,
                            0,
                            0,
                            0,
                            0,
                            0,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            e.handleDragStop(f);
                        }
                    }
                  }),
                  S(w(e), "handleDragStop", function (t) {
                    if (e.state.dragging) {
                      var n = (0, u.getControlPosition)(
                        t,
                        e.state.touchIdentifier,
                        w(e)
                      );
                      if (null != n) {
                        var r = n.x,
                          o = n.y,
                          i = (0, u.createCoreData)(w(e), r, o);
                        if (!1 === e.props.onStop(t, i) || !1 === e.mounted)
                          return !1;
                        var c = e.findDOMNode();
                        c &&
                          e.props.enableUserSelectHack &&
                          (0, a.removeUserSelectStyles)(c.ownerDocument),
                          (0, s.default)(
                            "DraggableCore: handleDragStop: %j",
                            i
                          ),
                          e.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                          c &&
                            ((0, s.default)("DraggableCore: Removing handlers"),
                            (0, a.removeEvent)(
                              c.ownerDocument,
                              j.move,
                              e.handleDrag
                            ),
                            (0, a.removeEvent)(
                              c.ownerDocument,
                              j.stop,
                              e.handleDragStop
                            ));
                      }
                    }
                  }),
                  S(w(e), "onMouseDown", function (t) {
                    return (j = P), e.handleDragStart(t);
                  }),
                  S(w(e), "onMouseUp", function (t) {
                    return (j = P), e.handleDragStop(t);
                  }),
                  S(w(e), "onTouchStart", function (t) {
                    return (j = _), e.handleDragStart(t);
                  }),
                  S(w(e), "onTouchEnd", function (t) {
                    return (j = _), e.handleDragStop(t);
                  }),
                  e
                );
              }
              return (
                (t = l),
                (n = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.mounted = !0;
                      var e = this.findDOMNode();
                      e &&
                        (0, a.addEvent)(e, _.start, this.onTouchStart, {
                          passive: !1,
                        });
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.mounted = !1;
                      var e = this.findDOMNode();
                      if (e) {
                        var t = e.ownerDocument;
                        (0, a.removeEvent)(t, P.move, this.handleDrag),
                          (0, a.removeEvent)(t, _.move, this.handleDrag),
                          (0, a.removeEvent)(t, P.stop, this.handleDragStop),
                          (0, a.removeEvent)(t, _.stop, this.handleDragStop),
                          (0, a.removeEvent)(e, _.start, this.onTouchStart, {
                            passive: !1,
                          }),
                          this.props.enableUserSelectHack &&
                            (0, a.removeUserSelectStyles)(t);
                      }
                    },
                  },
                  {
                    key: "findDOMNode",
                    value: function () {
                      return this.props.nodeRef
                        ? this.props.nodeRef.current
                        : i.default.findDOMNode(this);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return r.cloneElement(
                        r.Children.only(this.props.children),
                        {
                          onMouseDown: this.onMouseDown,
                          onMouseUp: this.onMouseUp,
                          onTouchEnd: this.onTouchEnd,
                        }
                      );
                    },
                  },
                ]) && g(t.prototype, n),
                o && g(t, o),
                l
              );
            })(r.Component);
          (t.default = k),
            S(k, "displayName", "DraggableCore"),
            S(k, "propTypes", {
              allowAnyClick: o.default.bool,
              disabled: o.default.bool,
              enableUserSelectHack: o.default.bool,
              offsetParent: function (e, t) {
                if (e[t] && 1 !== e[t].nodeType)
                  throw new Error(
                    "Draggable's offsetParent must be a DOM Node."
                  );
              },
              grid: o.default.arrayOf(o.default.number),
              handle: o.default.string,
              cancel: o.default.string,
              nodeRef: o.default.object,
              onStart: o.default.func,
              onDrag: o.default.func,
              onStop: o.default.func,
              onMouseDown: o.default.func,
              scale: o.default.number,
              className: c.dontSetMe,
              style: c.dontSetMe,
              transform: c.dontSetMe,
            }),
            S(k, "defaultProps", {
              allowAnyClick: !1,
              cancel: null,
              disabled: !1,
              enableUserSelectHack: !0,
              offsetParent: null,
              handle: null,
              grid: null,
              transform: null,
              onStart: function () {},
              onDrag: function () {},
              onStop: function () {},
              onMouseDown: function () {},
              scale: 1,
            });
        },
        1193: (e, t, n) => {
          "use strict";
          var r = n(5668),
            o = r.default,
            i = r.DraggableCore;
          (e.exports = o),
            (e.exports.default = o),
            (e.exports.DraggableCore = i);
        },
        1825: (e, t, n) => {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.matchesSelector = f),
            (t.matchesSelectorAndParentsTo = function (e, t, n) {
              var r = e;
              do {
                if (f(r, t)) return !0;
                if (r === n) return !1;
                r = r.parentNode;
              } while (r);
              return !1;
            }),
            (t.addEvent = function (e, t, n, r) {
              if (!e) return;
              var o = c({ capture: !0 }, r);
              e.addEventListener
                ? e.addEventListener(t, n, o)
                : e.attachEvent
                ? e.attachEvent("on" + t, n)
                : (e["on" + t] = n);
            }),
            (t.removeEvent = function (e, t, n, r) {
              if (!e) return;
              var o = c({ capture: !0 }, r);
              e.removeEventListener
                ? e.removeEventListener(t, n, o)
                : e.detachEvent
                ? e.detachEvent("on" + t, n)
                : (e["on" + t] = null);
            }),
            (t.outerHeight = function (e) {
              var t = e.clientHeight,
                n = e.ownerDocument.defaultView.getComputedStyle(e);
              return (
                (t += (0, o.int)(n.borderTopWidth)),
                (t += (0, o.int)(n.borderBottomWidth))
              );
            }),
            (t.outerWidth = function (e) {
              var t = e.clientWidth,
                n = e.ownerDocument.defaultView.getComputedStyle(e);
              return (
                (t += (0, o.int)(n.borderLeftWidth)),
                (t += (0, o.int)(n.borderRightWidth))
              );
            }),
            (t.innerHeight = function (e) {
              var t = e.clientHeight,
                n = e.ownerDocument.defaultView.getComputedStyle(e);
              return (
                (t -= (0, o.int)(n.paddingTop)),
                (t -= (0, o.int)(n.paddingBottom))
              );
            }),
            (t.innerWidth = function (e) {
              var t = e.clientWidth,
                n = e.ownerDocument.defaultView.getComputedStyle(e);
              return (
                (t -= (0, o.int)(n.paddingLeft)),
                (t -= (0, o.int)(n.paddingRight))
              );
            }),
            (t.offsetXYFromParent = function (e, t, n) {
              var r =
                  t === t.ownerDocument.body
                    ? { left: 0, top: 0 }
                    : t.getBoundingClientRect(),
                o = (e.clientX + t.scrollLeft - r.left) / n,
                i = (e.clientY + t.scrollTop - r.top) / n;
              return { x: o, y: i };
            }),
            (t.createCSSTransform = function (e, t) {
              var n = p(e, t, "px");
              return s(
                {},
                (0, i.browserPrefixToKey)("transform", i.default),
                n
              );
            }),
            (t.createSVGTransform = function (e, t) {
              return p(e, t, "");
            }),
            (t.getTranslation = p),
            (t.getTouch = function (e, t) {
              return (
                (e.targetTouches &&
                  (0, o.findInArray)(e.targetTouches, function (e) {
                    return t === e.identifier;
                  })) ||
                (e.changedTouches &&
                  (0, o.findInArray)(e.changedTouches, function (e) {
                    return t === e.identifier;
                  }))
              );
            }),
            (t.getTouchIdentifier = function (e) {
              if (e.targetTouches && e.targetTouches[0])
                return e.targetTouches[0].identifier;
              if (e.changedTouches && e.changedTouches[0])
                return e.changedTouches[0].identifier;
            }),
            (t.addUserSelectStyles = function (e) {
              if (!e) return;
              var t = e.getElementById("react-draggable-style-el");
              t ||
                (((t = e.createElement("style")).type = "text/css"),
                (t.id = "react-draggable-style-el"),
                (t.innerHTML =
                  ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
                (t.innerHTML +=
                  ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
                e.getElementsByTagName("head")[0].appendChild(t));
              e.body && d(e.body, "react-draggable-transparent-selection");
            }),
            (t.removeUserSelectStyles = function (e) {
              if (!e) return;
              try {
                if (
                  (e.body && h(e.body, "react-draggable-transparent-selection"),
                  e.selection)
                )
                  e.selection.empty();
                else {
                  var t = (e.defaultView || window).getSelection();
                  t && "Caret" !== t.type && t.removeAllRanges();
                }
              } catch (e) {}
            }),
            (t.addClassName = d),
            (t.removeClassName = h);
          var o = n(9280),
            i = (function (e) {
              if (e && e.__esModule) return e;
              if (null === e || ("object" !== r(e) && "function" != typeof e))
                return { default: e };
              var t = a();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  u && (u.get || u.set)
                    ? Object.defineProperty(n, i, u)
                    : (n[i] = e[i]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(8650));
          function a() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (a = function () {
                return e;
              }),
              e
            );
          }
          function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function c(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(n), !0).forEach(function (t) {
                    s(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function s(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var l = "";
          function f(e, t) {
            return (
              l ||
                (l = (0, o.findInArray)(
                  [
                    "matches",
                    "webkitMatchesSelector",
                    "mozMatchesSelector",
                    "msMatchesSelector",
                    "oMatchesSelector",
                  ],
                  function (t) {
                    return (0, o.isFunction)(e[t]);
                  }
                )),
              !!(0, o.isFunction)(e[l]) && e[l](t)
            );
          }
          function p(e, t, n) {
            var r = e.x,
              o = e.y,
              i = "translate("
                .concat(r)
                .concat(n, ",")
                .concat(o)
                .concat(n, ")");
            if (t) {
              var a = "".concat("string" == typeof t.x ? t.x : t.x + n),
                u = "".concat("string" == typeof t.y ? t.y : t.y + n);
              i = "translate(".concat(a, ", ").concat(u, ")") + i;
            }
            return i;
          }
          function d(e, t) {
            e.classList
              ? e.classList.add(t)
              : e.className.match(
                  new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))
                ) || (e.className += " ".concat(t));
          }
          function h(e, t) {
            e.classList
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
                  ""
                ));
          }
        },
        8650: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getPrefix = r),
            (t.browserPrefixToKey = o),
            (t.browserPrefixToStyle = function (e, t) {
              return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
            }),
            (t.default = void 0);
          var n = ["Moz", "Webkit", "O", "ms"];
          function r() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "transform";
            if ("undefined" == typeof window || void 0 === window.document)
              return "";
            var t = window.document.documentElement.style;
            if (e in t) return "";
            for (var r = 0; r < n.length; r++) if (o(e, n[r]) in t) return n[r];
            return "";
          }
          function o(e, t) {
            return t
              ? "".concat(t).concat(
                  (function (e) {
                    for (var t = "", n = !0, r = 0; r < e.length; r++)
                      n
                        ? ((t += e[r].toUpperCase()), (n = !1))
                        : "-" === e[r]
                        ? (n = !0)
                        : (t += e[r]);
                    return t;
                  })(e)
                )
              : e;
          }
          var i = r();
          t.default = i;
        },
        5904: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function () {
              void 0;
            });
        },
        2849: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getBoundPosition = function (e, t, n) {
              if (!e.props.bounds) return [t, n];
              var a = e.props.bounds;
              a =
                "string" == typeof a
                  ? a
                  : (function (e) {
                      return {
                        left: e.left,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                      };
                    })(a);
              var u = i(e);
              if ("string" == typeof a) {
                var c,
                  s = u.ownerDocument,
                  l = s.defaultView;
                if (
                  !(
                    (c =
                      "parent" === a
                        ? u.parentNode
                        : s.querySelector(a)) instanceof l.HTMLElement
                  )
                )
                  throw new Error(
                    'Bounds selector "' + a + '" could not find an element.'
                  );
                var f = l.getComputedStyle(u),
                  p = l.getComputedStyle(c);
                a = {
                  left:
                    -u.offsetLeft +
                    (0, r.int)(p.paddingLeft) +
                    (0, r.int)(f.marginLeft),
                  top:
                    -u.offsetTop +
                    (0, r.int)(p.paddingTop) +
                    (0, r.int)(f.marginTop),
                  right:
                    (0, o.innerWidth)(c) -
                    (0, o.outerWidth)(u) -
                    u.offsetLeft +
                    (0, r.int)(p.paddingRight) -
                    (0, r.int)(f.marginRight),
                  bottom:
                    (0, o.innerHeight)(c) -
                    (0, o.outerHeight)(u) -
                    u.offsetTop +
                    (0, r.int)(p.paddingBottom) -
                    (0, r.int)(f.marginBottom),
                };
              }
              (0, r.isNum)(a.right) && (t = Math.min(t, a.right));
              (0, r.isNum)(a.bottom) && (n = Math.min(n, a.bottom));
              (0, r.isNum)(a.left) && (t = Math.max(t, a.left));
              (0, r.isNum)(a.top) && (n = Math.max(n, a.top));
              return [t, n];
            }),
            (t.snapToGrid = function (e, t, n) {
              var r = Math.round(t / e[0]) * e[0],
                o = Math.round(n / e[1]) * e[1];
              return [r, o];
            }),
            (t.canDragX = function (e) {
              return "both" === e.props.axis || "x" === e.props.axis;
            }),
            (t.canDragY = function (e) {
              return "both" === e.props.axis || "y" === e.props.axis;
            }),
            (t.getControlPosition = function (e, t, n) {
              var r = "number" == typeof t ? (0, o.getTouch)(e, t) : null;
              if ("number" == typeof t && !r) return null;
              var a = i(n),
                u =
                  n.props.offsetParent ||
                  a.offsetParent ||
                  a.ownerDocument.body;
              return (0, o.offsetXYFromParent)(r || e, u, n.props.scale);
            }),
            (t.createCoreData = function (e, t, n) {
              var o = e.state,
                a = !(0, r.isNum)(o.lastX),
                u = i(e);
              return a
                ? {
                    node: u,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: t,
                    lastY: n,
                    x: t,
                    y: n,
                  }
                : {
                    node: u,
                    deltaX: t - o.lastX,
                    deltaY: n - o.lastY,
                    lastX: o.lastX,
                    lastY: o.lastY,
                    x: t,
                    y: n,
                  };
            }),
            (t.createDraggableData = function (e, t) {
              var n = e.props.scale;
              return {
                node: t.node,
                x: e.state.x + t.deltaX / n,
                y: e.state.y + t.deltaY / n,
                deltaX: t.deltaX / n,
                deltaY: t.deltaY / n,
                lastX: e.state.x,
                lastY: e.state.y,
              };
            });
          var r = n(9280),
            o = n(1825);
          function i(e) {
            var t = e.findDOMNode();
            if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
            return t;
          }
        },
        9280: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.findInArray = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (t.apply(t, [e[n], n, e])) return e[n];
            }),
            (t.isFunction = function (e) {
              return (
                "function" == typeof e ||
                "[object Function]" === Object.prototype.toString.call(e)
              );
            }),
            (t.isNum = function (e) {
              return "number" == typeof e && !isNaN(e);
            }),
            (t.int = function (e) {
              return parseInt(e, 10);
            }),
            (t.dontSetMe = function (e, t, n) {
              if (e[t])
                return new Error(
                  "Invalid prop "
                    .concat(t, " passed to ")
                    .concat(n, " - do not set this, set it on the child.")
                );
            });
        },
        5966: (e, t, n) => {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var o = p(n(3804)),
            i = p(n(5697)),
            a = n(1193),
            u = n(1706),
            c = n(7493),
            s = n(7373),
            l = n(2886),
            f = p(n(4184));
          function p(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function h(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? d(Object(n), !0).forEach(function (t) {
                    S(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : d(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function y(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function g(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function m(e, t) {
            return (m =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function b(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = O(e);
              if (t) {
                var o = O(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return v(this, n);
            };
          }
          function v(e, t) {
            return !t || ("object" !== r(t) && "function" != typeof t)
              ? w(e)
              : t;
          }
          function w(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function O(e) {
            return (O = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function S(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var _ = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && m(e, t);
            })(l, e);
            var t,
              n,
              r,
              i = b(l);
            function l() {
              var e;
              y(this, l);
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (
                S(w((e = i.call.apply(i, [this].concat(n)))), "state", {
                  resizing: null,
                  dragging: null,
                  className: "",
                }),
                S(w(e), "elementRef", o.default.createRef()),
                S(w(e), "onDragStart", function (t, n) {
                  var r = n.node,
                    o = e.props,
                    i = o.onDragStart,
                    a = o.transformScale;
                  if (i) {
                    var u = { top: 0, left: 0 },
                      c = r.offsetParent;
                    if (c) {
                      var l = c.getBoundingClientRect(),
                        f = r.getBoundingClientRect(),
                        p = f.left / a,
                        d = l.left / a,
                        h = f.top / a,
                        y = l.top / a;
                      (u.left = p - d + c.scrollLeft),
                        (u.top = h - y + c.scrollTop),
                        e.setState({ dragging: u });
                      var g = (0, s.calcXY)(
                          e.getPositionParams(),
                          u.top,
                          u.left,
                          e.props.w,
                          e.props.h
                        ),
                        m = g.x,
                        b = g.y;
                      return i.call(w(e), e.props.i, m, b, {
                        e: t,
                        node: r,
                        newPosition: u,
                      });
                    }
                  }
                }),
                S(w(e), "onDrag", function (t, n) {
                  var r = n.node,
                    o = n.deltaX,
                    i = n.deltaY,
                    a = e.props.onDrag;
                  if (a) {
                    if (!e.state.dragging)
                      throw new Error("onDrag called before onDragStart.");
                    var u = e.state.dragging.top + i,
                      c = e.state.dragging.left + o,
                      l = e.props,
                      f = l.isBounded,
                      p = l.i,
                      d = l.w,
                      h = l.h,
                      y = l.containerWidth,
                      g = e.getPositionParams();
                    if (f) {
                      var m = r.offsetParent;
                      if (m) {
                        var b = e.props,
                          v = b.margin,
                          O = b.rowHeight,
                          S =
                            m.clientHeight -
                            (0, s.calcGridItemWHPx)(h, O, v[1]);
                        u = (0, s.clamp)(u, 0, S);
                        var _ = (0, s.calcGridColWidth)(g),
                          P = y - (0, s.calcGridItemWHPx)(d, _, v[0]);
                        c = (0, s.clamp)(c, 0, P);
                      }
                    }
                    var j = { top: u, left: c };
                    e.setState({ dragging: j });
                    var k = (0, s.calcXY)(g, u, c, d, h),
                      E = k.x,
                      x = k.y;
                    return a.call(w(e), p, E, x, {
                      e: t,
                      node: r,
                      newPosition: j,
                    });
                  }
                }),
                S(w(e), "onDragStop", function (t, n) {
                  var r = n.node,
                    o = e.props.onDragStop;
                  if (o) {
                    if (!e.state.dragging)
                      throw new Error("onDragEnd called before onDragStart.");
                    var i = e.props,
                      a = i.w,
                      u = i.h,
                      c = i.i,
                      l = e.state.dragging,
                      f = l.left,
                      p = l.top,
                      d = { top: p, left: f };
                    e.setState({ dragging: null });
                    var h = (0, s.calcXY)(e.getPositionParams(), p, f, a, u),
                      y = h.x,
                      g = h.y;
                    return o.call(w(e), c, y, g, {
                      e: t,
                      node: r,
                      newPosition: d,
                    });
                  }
                }),
                S(w(e), "onResizeStop", function (t, n) {
                  e.onResizeHandler(t, n, "onResizeStop");
                }),
                S(w(e), "onResizeStart", function (t, n) {
                  e.onResizeHandler(t, n, "onResizeStart");
                }),
                S(w(e), "onResize", function (t, n) {
                  e.onResizeHandler(t, n, "onResize");
                }),
                e
              );
            }
            return (
              (t = l),
              (n = [
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    if (this.props.children !== e.children) return !0;
                    if (this.props.droppingPosition !== e.droppingPosition)
                      return !0;
                    var n = (0, s.calcGridItemPosition)(
                        this.getPositionParams(this.props),
                        this.props.x,
                        this.props.y,
                        this.props.w,
                        this.props.h,
                        this.state
                      ),
                      r = (0, s.calcGridItemPosition)(
                        this.getPositionParams(e),
                        e.x,
                        e.y,
                        e.w,
                        e.h,
                        t
                      );
                    return (
                      !(0, c.fastPositionEqual)(n, r) ||
                      this.props.useCSSTransforms !== e.useCSSTransforms
                    );
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    this.moveDroppingItem({});
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.moveDroppingItem(e);
                  },
                },
                {
                  key: "moveDroppingItem",
                  value: function (e) {
                    var t = this.props.droppingPosition;
                    if (t) {
                      var n = this.elementRef.current;
                      if (n) {
                        var r = e.droppingPosition || { left: 0, top: 0 },
                          o = this.state.dragging,
                          i = (o && t.left !== r.left) || t.top !== r.top;
                        if (o) {
                          if (i) {
                            var a = t.left - o.left,
                              u = t.top - o.top;
                            this.onDrag(t.e, { node: n, deltaX: a, deltaY: u });
                          }
                        } else
                          this.onDragStart(t.e, {
                            node: n,
                            deltaX: t.left,
                            deltaY: t.top,
                          });
                      }
                    }
                  },
                },
                {
                  key: "getPositionParams",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.props;
                    return {
                      cols: e.cols,
                      containerPadding: e.containerPadding,
                      containerWidth: e.containerWidth,
                      margin: e.margin,
                      maxRows: e.maxRows,
                      rowHeight: e.rowHeight,
                    };
                  },
                },
                {
                  key: "createStyle",
                  value: function (e) {
                    var t,
                      n = this.props,
                      r = n.usePercentages,
                      o = n.containerWidth;
                    return (
                      n.useCSSTransforms
                        ? (t = (0, c.setTransform)(e))
                        : ((t = (0, c.setTopLeft)(e)),
                          r &&
                            ((t.left = (0, c.perc)(e.left / o)),
                            (t.width = (0, c.perc)(e.width / o)))),
                      t
                    );
                  },
                },
                {
                  key: "mixinDraggable",
                  value: function (e, t) {
                    return o.default.createElement(
                      a.DraggableCore,
                      {
                        disabled: !t,
                        onStart: this.onDragStart,
                        onDrag: this.onDrag,
                        onStop: this.onDragStop,
                        handle: this.props.handle,
                        cancel:
                          ".react-resizable-handle" +
                          (this.props.cancel ? "," + this.props.cancel : ""),
                        scale: this.props.transformScale,
                        nodeRef: this.elementRef,
                      },
                      e
                    );
                  },
                },
                {
                  key: "mixinResizable",
                  value: function (e, t, n) {
                    var r = this.props,
                      i = r.cols,
                      a = r.x,
                      c = r.minW,
                      l = r.minH,
                      f = r.maxW,
                      p = r.maxH,
                      d = r.transformScale,
                      h = r.resizeHandles,
                      y = r.resizeHandle,
                      g = this.getPositionParams(),
                      m = (0, s.calcGridItemPosition)(g, 0, 0, i - a, 0).width,
                      b = (0, s.calcGridItemPosition)(g, 0, 0, c, l),
                      v = (0, s.calcGridItemPosition)(g, 0, 0, f, p),
                      w = [b.width, b.height],
                      O = [Math.min(v.width, m), Math.min(v.height, 1 / 0)];
                    return o.default.createElement(
                      u.Resizable,
                      {
                        draggableOpts: {
                          disabled: !n,
                          nodeRef: this.elementRef,
                        },
                        className: n ? void 0 : "react-resizable-hide",
                        width: t.width,
                        height: t.height,
                        minConstraints: w,
                        maxConstraints: O,
                        onResizeStop: this.onResizeStop,
                        onResizeStart: this.onResizeStart,
                        onResize: this.onResize,
                        transformScale: d,
                        resizeHandles: h,
                        handle: y,
                      },
                      e
                    );
                  },
                },
                {
                  key: "onResizeHandler",
                  value: function (e, t, n) {
                    var r = t.node,
                      o = t.size,
                      i = this.props[n];
                    if (i) {
                      var a = this.props,
                        u = a.cols,
                        c = a.x,
                        l = a.y,
                        f = a.i,
                        p = a.maxH,
                        d = a.minH,
                        h = this.props,
                        y = h.minW,
                        g = h.maxW,
                        m = (0, s.calcWH)(
                          this.getPositionParams(),
                          o.width,
                          o.height,
                          c,
                          l
                        ),
                        b = m.w,
                        v = m.h;
                      (y = Math.max(y, 1)),
                        (g = Math.min(g, u - c)),
                        (b = (0, s.clamp)(b, y, g)),
                        (v = (0, s.clamp)(v, d, p)),
                        this.setState({
                          resizing: "onResizeStop" === n ? null : o,
                        }),
                        i.call(this, f, b, v, { e, node: r, size: o });
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.x,
                      n = e.y,
                      r = e.w,
                      i = e.h,
                      a = e.isDraggable,
                      u = e.isResizable,
                      c = e.droppingPosition,
                      l = e.useCSSTransforms,
                      p = (0, s.calcGridItemPosition)(
                        this.getPositionParams(),
                        t,
                        n,
                        r,
                        i,
                        this.state
                      ),
                      d = o.default.Children.only(this.props.children),
                      y = o.default.cloneElement(d, {
                        ref: this.elementRef,
                        className: (0, f.default)(
                          "react-grid-item",
                          d.props.className,
                          this.props.className,
                          {
                            static: this.props.static,
                            resizing: Boolean(this.state.resizing),
                            "react-draggable": a,
                            "react-draggable-dragging": Boolean(
                              this.state.dragging
                            ),
                            dropping: Boolean(c),
                            cssTransforms: l,
                          }
                        ),
                        style: h(
                          h(h({}, this.props.style), d.props.style),
                          this.createStyle(p)
                        ),
                      });
                    return (
                      (y = this.mixinResizable(y, p, u)),
                      (y = this.mixinDraggable(y, a))
                    );
                  },
                },
              ]) && g(t.prototype, n),
              r && g(t, r),
              l
            );
          })(o.default.Component);
          (t.default = _),
            S(_, "propTypes", {
              children: i.default.element,
              cols: i.default.number.isRequired,
              containerWidth: i.default.number.isRequired,
              rowHeight: i.default.number.isRequired,
              margin: i.default.array.isRequired,
              maxRows: i.default.number.isRequired,
              containerPadding: i.default.array.isRequired,
              x: i.default.number.isRequired,
              y: i.default.number.isRequired,
              w: i.default.number.isRequired,
              h: i.default.number.isRequired,
              minW: function (e, t) {
                var n = e[t];
                return "number" != typeof n
                  ? new Error("minWidth not Number")
                  : n > e.w || n > e.maxW
                  ? new Error("minWidth larger than item width/maxWidth")
                  : void 0;
              },
              maxW: function (e, t) {
                var n = e[t];
                return "number" != typeof n
                  ? new Error("maxWidth not Number")
                  : n < e.w || n < e.minW
                  ? new Error("maxWidth smaller than item width/minWidth")
                  : void 0;
              },
              minH: function (e, t) {
                var n = e[t];
                return "number" != typeof n
                  ? new Error("minHeight not Number")
                  : n > e.h || n > e.maxH
                  ? new Error("minHeight larger than item height/maxHeight")
                  : void 0;
              },
              maxH: function (e, t) {
                var n = e[t];
                return "number" != typeof n
                  ? new Error("maxHeight not Number")
                  : n < e.h || n < e.minH
                  ? new Error("maxHeight smaller than item height/minHeight")
                  : void 0;
              },
              i: i.default.string.isRequired,
              resizeHandles: l.resizeHandlesType,
              resizeHandle: l.resizeHandleType,
              onDragStop: i.default.func,
              onDragStart: i.default.func,
              onDrag: i.default.func,
              onResizeStop: i.default.func,
              onResizeStart: i.default.func,
              onResize: i.default.func,
              isDraggable: i.default.bool.isRequired,
              isResizable: i.default.bool.isRequired,
              isBounded: i.default.bool.isRequired,
              static: i.default.bool,
              useCSSTransforms: i.default.bool.isRequired,
              transformScale: i.default.number,
              className: i.default.string,
              handle: i.default.string,
              cancel: i.default.string,
              droppingPosition: i.default.shape({
                e: i.default.object.isRequired,
                left: i.default.number.isRequired,
                top: i.default.number.isRequired,
              }),
            }),
            S(_, "defaultProps", {
              className: "",
              cancel: "",
              handle: "",
              minH: 1,
              minW: 1,
              maxH: 1 / 0,
              maxW: 1 / 0,
              transformScale: 1,
            });
        },
        9580: (e, t, n) => {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var o = (function (e) {
              if (e && e.__esModule) return e;
              if (null === e || ("object" !== r(e) && "function" != typeof e))
                return { default: e };
              var t = p();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set)
                    ? Object.defineProperty(n, i, a)
                    : (n[i] = e[i]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(3804)),
            i = f(n(2307)),
            a = f(n(4184)),
            u = n(7493),
            c = n(7373),
            s = f(n(5966)),
            l = f(n(2886));
          function f(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function p() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (p = function () {
                return e;
              }),
              e
            );
          }
          function d(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" == typeof Symbol ||
                  !(Symbol.iterator in Object(e))
                )
                  return;
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, u = e[Symbol.iterator]();
                    !(r = (a = u.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(e, t) ||
              m(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function y(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? h(Object(n), !0).forEach(function (t) {
                    j(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : h(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function g(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return b(e);
              })(e) ||
              (function (e) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                )
                  return Array.from(e);
              })(e) ||
              m(e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function m(e, t) {
            if (e) {
              if ("string" == typeof e) return b(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? b(e, t)
                  : void 0
              );
            }
          }
          function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function v(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function w(e, t) {
            return (w =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function O(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = P(e);
              if (t) {
                var o = P(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return S(this, n);
            };
          }
          function S(e, t) {
            return !t || ("object" !== r(t) && "function" != typeof t)
              ? _(e)
              : t;
          }
          function _(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function P(e) {
            return (P = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function j(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var k = "react-grid-layout",
            E = !1;
          try {
            E = /firefox/i.test(navigator.userAgent);
          } catch (e) {}
          var x = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && w(e, t);
            })(f, e);
            var t,
              n,
              r,
              l = O(f);
            function f(e, t) {
              var n;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, f),
                j(_((n = l.call(this, e, t))), "state", {
                  activeDrag: null,
                  layout: (0, u.synchronizeLayoutWithChildren)(
                    n.props.layout,
                    n.props.children,
                    n.props.cols,
                    (0, u.compactType)(n.props)
                  ),
                  mounted: !1,
                  oldDragItem: null,
                  oldLayout: null,
                  oldResizeItem: null,
                  droppingDOMNode: null,
                  children: [],
                }),
                j(_(n), "dragEnterCounter", 0),
                j(_(n), "onDragOver", function (e) {
                  var t;
                  if (
                    E &&
                    (null === (t = e.nativeEvent.target) ||
                      void 0 === t ||
                      !t.classList.contains(k))
                  )
                    return e.preventDefault(), !1;
                  var r = n.props,
                    i = r.droppingItem,
                    a = r.margin,
                    u = r.cols,
                    s = r.rowHeight,
                    l = r.maxRows,
                    f = r.width,
                    p = r.containerPadding,
                    d = n.state.layout,
                    h = e.nativeEvent,
                    m = h.layerX,
                    b = h.layerY,
                    v = { left: m, top: b, e };
                  if (n.state.droppingDOMNode) {
                    if (n.state.droppingPosition) {
                      var w = n.state.droppingPosition,
                        O = w.left,
                        S = w.top;
                      (O != m || S != b) && n.setState({ droppingPosition: v });
                    }
                  } else {
                    var _ = {
                        cols: u,
                        margin: a,
                        maxRows: l,
                        rowHeight: s,
                        containerWidth: f,
                        containerPadding: p || a,
                      },
                      P = (0, c.calcXY)(_, b, m, i.w, i.h);
                    n.setState({
                      droppingDOMNode: o.createElement("div", { key: i.i }),
                      droppingPosition: v,
                      layout: [].concat(g(d), [
                        y(
                          y({}, i),
                          {},
                          { x: P.x, y: P.y, static: !1, isDraggable: !0 }
                        ),
                      ]),
                    });
                  }
                  e.stopPropagation(), e.preventDefault();
                }),
                j(_(n), "removeDroppingPlaceholder", function () {
                  var e = n.props,
                    t = e.droppingItem,
                    r = e.cols,
                    o = n.state.layout,
                    i = (0, u.compact)(
                      o.filter(function (e) {
                        return e.i !== t.i;
                      }),
                      (0, u.compactType)(n.props),
                      r
                    );
                  n.setState({
                    layout: i,
                    droppingDOMNode: null,
                    activeDrag: null,
                    droppingPosition: void 0,
                  });
                }),
                j(_(n), "onDragLeave", function () {
                  n.dragEnterCounter--,
                    0 === n.dragEnterCounter && n.removeDroppingPlaceholder();
                }),
                j(_(n), "onDragEnter", function () {
                  n.dragEnterCounter++;
                }),
                j(_(n), "onDrop", function (e) {
                  var t = n.props.droppingItem,
                    r = n.state.layout,
                    o = r.find(function (e) {
                      return e.i === t.i;
                    });
                  (n.dragEnterCounter = 0),
                    n.removeDroppingPlaceholder(),
                    n.props.onDrop(r, o, e);
                }),
                (0, u.autoBindHandlers)(_(n), [
                  "onDragStart",
                  "onDrag",
                  "onDragStop",
                  "onResizeStart",
                  "onResize",
                  "onResizeStop",
                ]),
                n
              );
            }
            return (
              (t = f),
              (r = [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n;
                    return t.activeDrag
                      ? null
                      : ((0, i.default)(e.layout, t.propsLayout) &&
                        e.compactType === t.compactType
                          ? (0, u.childrenEqual)(e.children, t.children) ||
                            (n = t.layout)
                          : (n = e.layout),
                        n
                          ? {
                              layout: (0, u.synchronizeLayoutWithChildren)(
                                n,
                                e.children,
                                e.cols,
                                (0, u.compactType)(e)
                              ),
                              compactType: e.compactType,
                              children: e.children,
                              propsLayout: e.layout,
                            }
                          : null);
                  },
                },
              ]),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.setState({ mounted: !0 }),
                      this.onLayoutMaybeChanged(
                        this.state.layout,
                        this.props.layout
                      );
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return (
                      this.props.children !== e.children ||
                      !(0, u.fastRGLPropsEqual)(this.props, e, i.default) ||
                      this.state.activeDrag !== t.activeDrag ||
                      this.state.mounted !== t.mounted ||
                      this.state.droppingPosition !== t.droppingPosition
                    );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t) {
                    if (!this.state.activeDrag) {
                      var n = this.state.layout,
                        r = t.layout;
                      this.onLayoutMaybeChanged(n, r);
                    }
                  },
                },
                {
                  key: "containerHeight",
                  value: function () {
                    if (this.props.autoSize) {
                      var e = (0, u.bottom)(this.state.layout),
                        t = this.props.containerPadding
                          ? this.props.containerPadding[1]
                          : this.props.margin[1];
                      return (
                        e * this.props.rowHeight +
                        (e - 1) * this.props.margin[1] +
                        2 * t +
                        "px"
                      );
                    }
                  },
                },
                {
                  key: "onDragStart",
                  value: function (e, t, n, r) {
                    var o = r.e,
                      i = r.node,
                      a = this.state.layout,
                      c = (0, u.getLayoutItem)(a, e);
                    if (c)
                      return (
                        this.setState({
                          oldDragItem: (0, u.cloneLayoutItem)(c),
                          oldLayout: this.state.layout,
                        }),
                        this.props.onDragStart(a, c, c, null, o, i)
                      );
                  },
                },
                {
                  key: "onDrag",
                  value: function (e, t, n, r) {
                    var o = r.e,
                      i = r.node,
                      a = this.state.oldDragItem,
                      c = this.state.layout,
                      s = this.props.cols,
                      l = (0, u.getLayoutItem)(c, e);
                    if (l) {
                      var f = {
                        w: l.w,
                        h: l.h,
                        x: l.x,
                        y: l.y,
                        placeholder: !0,
                        i: e,
                      };
                      (c = (0, u.moveElement)(
                        c,
                        l,
                        t,
                        n,
                        !0,
                        this.props.preventCollision,
                        (0, u.compactType)(this.props),
                        s
                      )),
                        this.props.onDrag(c, a, l, f, o, i),
                        this.setState({
                          layout: (0, u.compact)(
                            c,
                            (0, u.compactType)(this.props),
                            s
                          ),
                          activeDrag: f,
                        });
                    }
                  },
                },
                {
                  key: "onDragStop",
                  value: function (e, t, n, r) {
                    var o = r.e,
                      i = r.node;
                    if (this.state.activeDrag) {
                      var a = this.state.oldDragItem,
                        c = this.state.layout,
                        s = this.props,
                        l = s.cols,
                        f = s.preventCollision,
                        p = (0, u.getLayoutItem)(c, e);
                      if (p) {
                        (c = (0, u.moveElement)(
                          c,
                          p,
                          t,
                          n,
                          !0,
                          f,
                          (0, u.compactType)(this.props),
                          l
                        )),
                          this.props.onDragStop(c, a, p, null, o, i);
                        var d = (0, u.compact)(
                            c,
                            (0, u.compactType)(this.props),
                            l
                          ),
                          h = this.state.oldLayout;
                        this.setState({
                          activeDrag: null,
                          layout: d,
                          oldDragItem: null,
                          oldLayout: null,
                        }),
                          this.onLayoutMaybeChanged(d, h);
                      }
                    }
                  },
                },
                {
                  key: "onLayoutMaybeChanged",
                  value: function (e, t) {
                    t || (t = this.state.layout),
                      (0, i.default)(t, e) || this.props.onLayoutChange(e);
                  },
                },
                {
                  key: "onResizeStart",
                  value: function (e, t, n, r) {
                    var o = r.e,
                      i = r.node,
                      a = this.state.layout,
                      c = (0, u.getLayoutItem)(a, e);
                    c &&
                      (this.setState({
                        oldResizeItem: (0, u.cloneLayoutItem)(c),
                        oldLayout: this.state.layout,
                      }),
                      this.props.onResizeStart(a, c, c, null, o, i));
                  },
                },
                {
                  key: "onResize",
                  value: function (e, t, n, r) {
                    var o = r.e,
                      i = r.node,
                      a = this.state,
                      c = a.layout,
                      s = a.oldResizeItem,
                      l = this.props,
                      f = l.cols,
                      p = l.preventCollision,
                      h = d(
                        (0, u.withLayoutItem)(c, e, function (e) {
                          var r;
                          if (p) {
                            var o = (0, u.getAllCollisions)(
                              c,
                              y(y({}, e), {}, { w: t, h: n })
                            ).filter(function (t) {
                              return t.i !== e.i;
                            });
                            if ((r = o.length > 0)) {
                              var i = 1 / 0,
                                a = 1 / 0;
                              o.forEach(function (t) {
                                t.x > e.x && (i = Math.min(i, t.x)),
                                  t.y > e.y && (a = Math.min(a, t.y));
                              }),
                                Number.isFinite(i) && (e.w = i - e.x),
                                Number.isFinite(a) && (e.h = a - e.y);
                            }
                          }
                          return r || ((e.w = t), (e.h = n)), e;
                        }),
                        2
                      ),
                      g = h[0],
                      m = h[1];
                    if (m) {
                      var b = {
                        w: m.w,
                        h: m.h,
                        x: m.x,
                        y: m.y,
                        static: !0,
                        i: e,
                      };
                      this.props.onResize(g, s, m, b, o, i),
                        this.setState({
                          layout: (0, u.compact)(
                            g,
                            (0, u.compactType)(this.props),
                            f
                          ),
                          activeDrag: b,
                        });
                    }
                  },
                },
                {
                  key: "onResizeStop",
                  value: function (e, t, n, r) {
                    var o = r.e,
                      i = r.node,
                      a = this.state,
                      c = a.layout,
                      s = a.oldResizeItem,
                      l = this.props.cols,
                      f = (0, u.getLayoutItem)(c, e);
                    this.props.onResizeStop(c, s, f, null, o, i);
                    var p = (0, u.compact)(
                        c,
                        (0, u.compactType)(this.props),
                        l
                      ),
                      d = this.state.oldLayout;
                    this.setState({
                      activeDrag: null,
                      layout: p,
                      oldResizeItem: null,
                      oldLayout: null,
                    }),
                      this.onLayoutMaybeChanged(p, d);
                  },
                },
                {
                  key: "placeholder",
                  value: function () {
                    var e = this.state.activeDrag;
                    if (!e) return null;
                    var t = this.props,
                      n = t.width,
                      r = t.cols,
                      i = t.margin,
                      a = t.containerPadding,
                      u = t.rowHeight,
                      c = t.maxRows,
                      l = t.useCSSTransforms,
                      f = t.transformScale;
                    return o.createElement(
                      s.default,
                      {
                        w: e.w,
                        h: e.h,
                        x: e.x,
                        y: e.y,
                        i: e.i,
                        className: "react-grid-placeholder",
                        containerWidth: n,
                        cols: r,
                        margin: i,
                        containerPadding: a || i,
                        maxRows: c,
                        rowHeight: u,
                        isDraggable: !1,
                        isResizable: !1,
                        isBounded: !1,
                        useCSSTransforms: l,
                        transformScale: f,
                      },
                      o.createElement("div", null)
                    );
                  },
                },
                {
                  key: "processGridItem",
                  value: function (e, t) {
                    if (e && e.key) {
                      var n = (0, u.getLayoutItem)(
                        this.state.layout,
                        String(e.key)
                      );
                      if (!n) return null;
                      var r = this.props,
                        i = r.width,
                        a = r.cols,
                        c = r.margin,
                        l = r.containerPadding,
                        f = r.rowHeight,
                        p = r.maxRows,
                        d = r.isDraggable,
                        h = r.isResizable,
                        y = r.isBounded,
                        g = r.useCSSTransforms,
                        m = r.transformScale,
                        b = r.draggableCancel,
                        v = r.draggableHandle,
                        w = r.resizeHandles,
                        O = r.resizeHandle,
                        S = this.state,
                        _ = S.mounted,
                        P = S.droppingPosition,
                        j =
                          "boolean" == typeof n.isDraggable
                            ? n.isDraggable
                            : !n.static && d,
                        k =
                          "boolean" == typeof n.isResizable
                            ? n.isResizable
                            : !n.static && h,
                        E = n.resizeHandles || w,
                        x = j && y && !1 !== n.isBounded;
                      return o.createElement(
                        s.default,
                        {
                          containerWidth: i,
                          cols: a,
                          margin: c,
                          containerPadding: l || c,
                          maxRows: p,
                          rowHeight: f,
                          cancel: b,
                          handle: v,
                          onDragStop: this.onDragStop,
                          onDragStart: this.onDragStart,
                          onDrag: this.onDrag,
                          onResizeStart: this.onResizeStart,
                          onResize: this.onResize,
                          onResizeStop: this.onResizeStop,
                          isDraggable: j,
                          isResizable: k,
                          isBounded: x,
                          useCSSTransforms: g && _,
                          usePercentages: !_,
                          transformScale: m,
                          w: n.w,
                          h: n.h,
                          x: n.x,
                          y: n.y,
                          i: n.i,
                          minH: n.minH,
                          minW: n.minW,
                          maxH: n.maxH,
                          maxW: n.maxW,
                          static: n.static,
                          droppingPosition: t ? P : void 0,
                          resizeHandles: E,
                          resizeHandle: O,
                        },
                        e
                      );
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.className,
                      r = t.style,
                      i = t.isDroppable,
                      c = t.innerRef,
                      s = (0, a.default)(k, n),
                      l = y({ height: this.containerHeight() }, r);
                    return o.createElement(
                      "div",
                      {
                        ref: c,
                        className: s,
                        style: l,
                        onDrop: i ? this.onDrop : u.noop,
                        onDragLeave: i ? this.onDragLeave : u.noop,
                        onDragEnter: i ? this.onDragEnter : u.noop,
                        onDragOver: i ? this.onDragOver : u.noop,
                      },
                      o.Children.map(this.props.children, function (t) {
                        return e.processGridItem(t);
                      }),
                      i &&
                        this.state.droppingDOMNode &&
                        this.processGridItem(this.state.droppingDOMNode, !0),
                      this.placeholder()
                    );
                  },
                },
              ]) && v(t.prototype, n),
              r && v(t, r),
              f
            );
          })(o.Component);
          (t.default = x),
            j(x, "displayName", "ReactGridLayout"),
            j(x, "propTypes", l.default),
            j(x, "defaultProps", {
              autoSize: !0,
              cols: 12,
              className: "",
              style: {},
              draggableHandle: "",
              draggableCancel: "",
              containerPadding: null,
              rowHeight: 150,
              maxRows: 1 / 0,
              layout: [],
              margin: [10, 10],
              isBounded: !1,
              isDraggable: !0,
              isResizable: !0,
              isDroppable: !1,
              useCSSTransforms: !0,
              transformScale: 1,
              verticalCompact: !0,
              compactType: "vertical",
              preventCollision: !1,
              droppingItem: { i: "__dropping-elem__", h: 1, w: 1 },
              resizeHandles: ["se"],
              onLayoutChange: u.noop,
              onDragStart: u.noop,
              onDrag: u.noop,
              onDragStop: u.noop,
              onResizeStart: u.noop,
              onResize: u.noop,
              onResizeStop: u.noop,
              onDrop: u.noop,
            });
        },
        2886: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = t.resizeHandleType = t.resizeHandlesType = void 0);
          var r = i(n(5697)),
            o = i(n(3804));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var a = r.default.arrayOf(
            r.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])
          );
          t.resizeHandlesType = a;
          var u = r.default.oneOfType([r.default.node, r.default.func]);
          t.resizeHandleType = u;
          var c = {
            className: r.default.string,
            style: r.default.object,
            width: r.default.number,
            autoSize: r.default.bool,
            cols: r.default.number,
            draggableCancel: r.default.string,
            draggableHandle: r.default.string,
            verticalCompact: function (e) {
              e.verticalCompact, 0;
            },
            compactType: r.default.oneOf(["vertical", "horizontal"]),
            layout: function (e) {
              var t = e.layout;
              void 0 !== t && n(7493).validateLayout(t, "layout");
            },
            margin: r.default.arrayOf(r.default.number),
            containerPadding: r.default.arrayOf(r.default.number),
            rowHeight: r.default.number,
            maxRows: r.default.number,
            isBounded: r.default.bool,
            isDraggable: r.default.bool,
            isResizable: r.default.bool,
            preventCollision: r.default.bool,
            useCSSTransforms: r.default.bool,
            transformScale: r.default.number,
            isDroppable: r.default.bool,
            resizeHandles: a,
            resizeHandle: u,
            onLayoutChange: r.default.func,
            onDragStart: r.default.func,
            onDrag: r.default.func,
            onDragStop: r.default.func,
            onResizeStart: r.default.func,
            onResize: r.default.func,
            onResizeStop: r.default.func,
            onDrop: r.default.func,
            droppingItem: r.default.shape({
              i: r.default.string.isRequired,
              w: r.default.number.isRequired,
              h: r.default.number.isRequired,
            }),
            children: function (e, t) {
              var n = e[t],
                r = {};
              o.default.Children.forEach(n, function (e) {
                if (r[e.key])
                  throw new Error(
                    'Duplicate child key "' +
                      e.key +
                      '" found! This will cause problems in ReactGridLayout.'
                  );
                r[e.key] = !0;
              });
            },
            innerRef: r.default.any,
          };
          t.default = c;
        },
        3973: (e, t, n) => {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          t.default = void 0;
          var o = (function (e) {
              if (e && e.__esModule) return e;
              if (null === e || ("object" !== r(e) && "function" != typeof e))
                return { default: e };
              var t = f();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set)
                    ? Object.defineProperty(n, i, a)
                    : (n[i] = e[i]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(3804)),
            i = l(n(5697)),
            a = l(n(2307)),
            u = n(7493),
            c = n(5651),
            s = l(n(9580));
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function f() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (f = function () {
                return e;
              }),
              e
            );
          }
          function p() {
            return (p =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function d(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  t.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (o[n] = e[n]));
            }
            return o;
          }
          function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function y(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? h(Object(n), !0).forEach(function (t) {
                    _(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : h(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function g(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function m(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function b(e, t) {
            return (b =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function v(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = S(e);
              if (t) {
                var o = S(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return w(this, n);
            };
          }
          function w(e, t) {
            return !t || ("object" !== r(t) && "function" != typeof t)
              ? O(e)
              : t;
          }
          function O(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function S(e) {
            return (S = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function _(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var P = function (e) {
            return Object.prototype.toString.call(e);
          };
          function j(e, t) {
            return null == e ? null : Array.isArray(e) ? e : e[t];
          }
          var k = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && b(e, t);
            })(l, e);
            var t,
              n,
              r,
              i = v(l);
            function l() {
              var e;
              g(this, l);
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (
                _(
                  O((e = i.call.apply(i, [this].concat(n)))),
                  "state",
                  e.generateInitialState()
                ),
                _(O(e), "onLayoutChange", function (t) {
                  e.props.onLayoutChange(
                    t,
                    y(y({}, e.props.layouts), {}, _({}, e.state.breakpoint, t))
                  );
                }),
                e
              );
            }
            return (
              (t = l),
              (r = [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    if (!(0, a.default)(e.layouts, t.layouts)) {
                      var n = t.breakpoint,
                        r = t.cols;
                      return {
                        layout: (0, c.findOrGenerateResponsiveLayout)(
                          e.layouts,
                          e.breakpoints,
                          n,
                          n,
                          r,
                          e.compactType
                        ),
                        layouts: e.layouts,
                      };
                    }
                    return null;
                  },
                },
              ]),
              (n = [
                {
                  key: "generateInitialState",
                  value: function () {
                    var e = this.props,
                      t = e.width,
                      n = e.breakpoints,
                      r = e.layouts,
                      o = e.cols,
                      i = (0, c.getBreakpointFromWidth)(n, t),
                      a = (0, c.getColsFromBreakpoint)(i, o),
                      u =
                        !1 === this.props.verticalCompact
                          ? null
                          : this.props.compactType;
                    return {
                      layout: (0, c.findOrGenerateResponsiveLayout)(
                        r,
                        n,
                        i,
                        i,
                        a,
                        u
                      ),
                      breakpoint: i,
                      cols: a,
                    };
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    (this.props.width == e.width &&
                      this.props.breakpoint === e.breakpoint &&
                      (0, a.default)(this.props.breakpoints, e.breakpoints) &&
                      (0, a.default)(this.props.cols, e.cols)) ||
                      this.onWidthChange(e);
                  },
                },
                {
                  key: "onWidthChange",
                  value: function (e) {
                    var t = this.props,
                      n = t.breakpoints,
                      r = t.cols,
                      o = t.layouts,
                      i = t.compactType,
                      a =
                        this.props.breakpoint ||
                        (0, c.getBreakpointFromWidth)(
                          this.props.breakpoints,
                          this.props.width
                        ),
                      s = this.state.breakpoint,
                      l = (0, c.getColsFromBreakpoint)(a, r),
                      f = y({}, o);
                    if (s !== a || e.breakpoints !== n || e.cols !== r) {
                      s in f || (f[s] = (0, u.cloneLayout)(this.state.layout));
                      var p = (0, c.findOrGenerateResponsiveLayout)(
                        f,
                        n,
                        a,
                        s,
                        l,
                        i
                      );
                      (p = (0, u.synchronizeLayoutWithChildren)(
                        p,
                        this.props.children,
                        l,
                        i
                      )),
                        (f[a] = p),
                        this.props.onLayoutChange(p, f),
                        this.props.onBreakpointChange(a, l),
                        this.setState({ breakpoint: a, layout: p, cols: l });
                    }
                    var d = j(this.props.margin, a),
                      h = j(this.props.containerPadding, a);
                    this.props.onWidthChange(this.props.width, d, l, h);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t =
                        (e.breakpoint,
                        e.breakpoints,
                        e.cols,
                        e.layouts,
                        e.margin),
                      n = e.containerPadding,
                      r =
                        (e.onBreakpointChange,
                        e.onLayoutChange,
                        e.onWidthChange,
                        d(e, [
                          "breakpoint",
                          "breakpoints",
                          "cols",
                          "layouts",
                          "margin",
                          "containerPadding",
                          "onBreakpointChange",
                          "onLayoutChange",
                          "onWidthChange",
                        ]));
                    return o.createElement(
                      s.default,
                      p({}, r, {
                        margin: j(t, this.state.breakpoint),
                        containerPadding: j(n, this.state.breakpoint),
                        onLayoutChange: this.onLayoutChange,
                        layout: this.state.layout,
                        cols: this.state.cols,
                      })
                    );
                  },
                },
              ]) && m(t.prototype, n),
              r && m(t, r),
              l
            );
          })(o.Component);
          (t.default = k),
            _(k, "propTypes", {
              breakpoint: i.default.string,
              breakpoints: i.default.object,
              cols: i.default.object,
              margin: i.default.oneOfType([i.default.array, i.default.object]),
              containerPadding: i.default.oneOfType([
                i.default.array,
                i.default.object,
              ]),
              layouts: function (e, t) {
                if ("[object Object]" !== P(e[t]))
                  throw new Error(
                    "Layout property must be an object. Received: " + P(e[t])
                  );
                Object.keys(e[t]).forEach(function (t) {
                  if (!(t in e.breakpoints))
                    throw new Error(
                      "Each key in layouts must align with a key in breakpoints."
                    );
                  (0, u.validateLayout)(e.layouts[t], "layouts." + t);
                });
              },
              width: i.default.number.isRequired,
              onBreakpointChange: i.default.func,
              onLayoutChange: i.default.func,
              onWidthChange: i.default.func,
            }),
            _(k, "defaultProps", {
              breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
              cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
              containerPadding: {
                lg: null,
                md: null,
                sm: null,
                xs: null,
                xxs: null,
              },
              layouts: {},
              margin: [10, 10],
              onBreakpointChange: u.noop,
              onLayoutChange: u.noop,
              onWidthChange: u.noop,
            });
        },
        7373: (e, t) => {
          "use strict";
          function n(e) {
            var t = e.margin,
              n = e.containerPadding,
              r = e.containerWidth,
              o = e.cols;
            return (r - t[0] * (o - 1) - 2 * n[0]) / o;
          }
          function r(e, t, n) {
            return Number.isFinite(e)
              ? Math.round(t * e + Math.max(0, e - 1) * n)
              : e;
          }
          function o(e, t, n) {
            return Math.max(Math.min(e, n), t);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.calcGridColWidth = n),
            (t.calcGridItemWHPx = r),
            (t.calcGridItemPosition = function (e, t, o, i, a, u) {
              var c = e.margin,
                s = e.containerPadding,
                l = e.rowHeight,
                f = n(e),
                p = {};
              u && u.resizing
                ? ((p.width = Math.round(u.resizing.width)),
                  (p.height = Math.round(u.resizing.height)))
                : ((p.width = r(i, f, c[0])), (p.height = r(a, l, c[1])));
              u && u.dragging
                ? ((p.top = Math.round(u.dragging.top)),
                  (p.left = Math.round(u.dragging.left)))
                : ((p.top = Math.round((l + c[1]) * o + s[1])),
                  (p.left = Math.round((f + c[0]) * t + s[0])));
              return p;
            }),
            (t.calcXY = function (e, t, r, i, a) {
              var u = e.margin,
                c = e.cols,
                s = e.rowHeight,
                l = e.maxRows,
                f = n(e),
                p = Math.round((r - u[0]) / (f + u[0])),
                d = Math.round((t - u[1]) / (s + u[1]));
              return (p = o(p, 0, c - i)), (d = o(d, 0, l - a)), { x: p, y: d };
            }),
            (t.calcWH = function (e, t, r, i, a) {
              var u = e.margin,
                c = e.maxRows,
                s = e.cols,
                l = e.rowHeight,
                f = n(e),
                p = Math.round((t + u[0]) / (f + u[0])),
                d = Math.round((r + u[1]) / (l + u[1]));
              return (p = o(p, 0, s - i)), (d = o(d, 0, c - a)), { w: p, h: d };
            }),
            (t.clamp = o);
        },
        7135: (e, t, n) => {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          t.default = function (e) {
            var t, n;
            return (
              (n = t =
                (function (t) {
                  !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && p(e, t);
                  })(u, t);
                  var n,
                    r,
                    i =
                      ((n = u),
                      (r = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                          return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          t = y(n);
                        if (r) {
                          var o = y(this).constructor;
                          e = Reflect.construct(t, arguments, o);
                        } else e = t.apply(this, arguments);
                        return d(this, e);
                      });
                  function u() {
                    var e;
                    l(this, u);
                    for (
                      var t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    return (
                      g(h((e = i.call.apply(i, [this].concat(n)))), "state", {
                        width: 1280,
                      }),
                      g(h(e), "elementRef", o.createRef()),
                      g(h(e), "mounted", !1),
                      g(h(e), "onWindowResize", function () {
                        if (e.mounted) {
                          var t = e.elementRef.current;
                          t instanceof HTMLElement &&
                            t.offsetWidth &&
                            e.setState({ width: t.offsetWidth });
                        }
                      }),
                      e
                    );
                  }
                  return (
                    (function (e, t, n) {
                      t && f(e.prototype, t);
                      n && f(e, n);
                    })(u, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          (this.mounted = !0),
                            window.addEventListener(
                              "resize",
                              this.onWindowResize
                            ),
                            this.onWindowResize();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          (this.mounted = !1),
                            window.removeEventListener(
                              "resize",
                              this.onWindowResize
                            );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this.props,
                            n = t.measureBeforeMount,
                            r = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                r,
                                o = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                  for (r = 0; r < i.length; r++)
                                    (n = i[r]),
                                      t.indexOf(n) >= 0 || (o[n] = e[n]);
                                  return o;
                                })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++)
                                  (n = i[r]),
                                    t.indexOf(n) >= 0 ||
                                      (Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        n
                                      ) &&
                                        (o[n] = e[n]));
                              }
                              return o;
                            })(t, ["measureBeforeMount"]);
                          return n && !this.mounted
                            ? o.createElement("div", {
                                className: (0, a.default)(
                                  this.props.className,
                                  "react-grid-layout"
                                ),
                                style: this.props.style,
                                ref: this.elementRef,
                              })
                            : o.createElement(
                                e,
                                s({ innerRef: this.elementRef }, r, this.state)
                              );
                        },
                      },
                    ]),
                    u
                  );
                })(o.Component)),
              g(t, "defaultProps", { measureBeforeMount: !1 }),
              g(t, "propTypes", { measureBeforeMount: i.default.bool }),
              n
            );
          };
          var o = (function (e) {
              if (e && e.__esModule) return e;
              if (null === e || ("object" !== r(e) && "function" != typeof e))
                return { default: e };
              var t = c();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set)
                    ? Object.defineProperty(n, i, a)
                    : (n[i] = e[i]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(3804)),
            i = u(n(5697)),
            a = u(n(4184));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (c = function () {
                return e;
              }),
              e
            );
          }
          function s() {
            return (s =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function l(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function f(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function p(e, t) {
            return (p =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function d(e, t) {
            return !t || ("object" !== r(t) && "function" != typeof t)
              ? h(e)
              : t;
          }
          function h(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function y(e) {
            return (y = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function g(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
        },
        1362: (e) => {
          e.exports = function (e, t, n) {
            return (
              e === t ||
              (e.className === t.className &&
                n(e.style, t.style) &&
                e.width === t.width &&
                e.autoSize === t.autoSize &&
                e.cols === t.cols &&
                e.draggableCancel === t.draggableCancel &&
                e.draggableHandle === t.draggableHandle &&
                n(e.verticalCompact, t.verticalCompact) &&
                n(e.compactType, t.compactType) &&
                n(e.layout, t.layout) &&
                n(e.margin, t.margin) &&
                n(e.containerPadding, t.containerPadding) &&
                e.rowHeight === t.rowHeight &&
                e.maxRows === t.maxRows &&
                e.isBounded === t.isBounded &&
                e.isDraggable === t.isDraggable &&
                e.isResizable === t.isResizable &&
                e.preventCollision === t.preventCollision &&
                e.useCSSTransforms === t.useCSSTransforms &&
                e.transformScale === t.transformScale &&
                e.isDroppable === t.isDroppable &&
                n(e.resizeHandles, t.resizeHandles) &&
                n(e.resizeHandle, t.resizeHandle) &&
                e.onLayoutChange === t.onLayoutChange &&
                e.onDragStart === t.onDragStart &&
                e.onDrag === t.onDrag &&
                e.onDragStop === t.onDragStop &&
                e.onResizeStart === t.onResizeStart &&
                e.onResize === t.onResize &&
                e.onResizeStop === t.onResizeStop &&
                e.onDrop === t.onDrop &&
                n(e.droppingItem, t.droppingItem) &&
                n(e.innerRef, t.innerRef))
            );
          };
        },
        5651: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getBreakpointFromWidth = function (e, t) {
              for (var n = o(e), r = n[0], i = 1, a = n.length; i < a; i++) {
                var u = n[i];
                t > e[u] && (r = u);
              }
              return r;
            }),
            (t.getColsFromBreakpoint = function (e, t) {
              if (!t[e])
                throw new Error(
                  "ResponsiveReactGridLayout: `cols` entry for breakpoint " +
                    e +
                    " is missing!"
                );
              return t[e];
            }),
            (t.findOrGenerateResponsiveLayout = function (e, t, n, i, a, u) {
              if (e[n]) return (0, r.cloneLayout)(e[n]);
              for (
                var c = e[i],
                  s = o(t),
                  l = s.slice(s.indexOf(n)),
                  f = 0,
                  p = l.length;
                f < p;
                f++
              ) {
                var d = l[f];
                if (e[d]) {
                  c = e[d];
                  break;
                }
              }
              return (
                (c = (0, r.cloneLayout)(c || [])),
                (0, r.compact)((0, r.correctBounds)(c, { cols: a }), u, a)
              );
            }),
            (t.sortBreakpoints = o);
          var r = n(7493);
          function o(e) {
            return Object.keys(e).sort(function (t, n) {
              return e[t] - e[n];
            });
          }
        },
        7493: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.bottom = s),
            (t.cloneLayout = function (e) {
              for (var t = Array(e.length), n = 0, r = e.length; n < r; n++)
                t[n] = f(e[n]);
              return t;
            }),
            (t.modifyLayout = l),
            (t.withLayoutItem = function (e, t, n) {
              var r = v(e, t);
              return r ? ((r = n(f(r))), [(e = l(e, r)), r]) : [e, null];
            }),
            (t.cloneLayoutItem = f),
            (t.childrenEqual = function (e, t) {
              return (0, r.default)(
                o.default.Children.map(e, function (e) {
                  return e.key;
                }),
                o.default.Children.map(t, function (e) {
                  return e.key;
                })
              );
            }),
            (t.fastPositionEqual = function (e, t) {
              return (
                e.left === t.left &&
                e.top === t.top &&
                e.width === t.width &&
                e.height === t.height
              );
            }),
            (t.collides = d),
            (t.compact = h),
            (t.compactItem = m),
            (t.correctBounds = b),
            (t.getLayoutItem = v),
            (t.getFirstCollision = w),
            (t.getAllCollisions = O),
            (t.getStatics = S),
            (t.moveElement = _),
            (t.moveElementAwayFromCollision = P),
            (t.perc = function (e) {
              return 100 * e + "%";
            }),
            (t.setTransform = function (e) {
              var t = e.top,
                n = e.left,
                r = e.width,
                o = e.height,
                i = "translate(".concat(n, "px,").concat(t, "px)");
              return {
                transform: i,
                WebkitTransform: i,
                MozTransform: i,
                msTransform: i,
                OTransform: i,
                width: "".concat(r, "px"),
                height: "".concat(o, "px"),
                position: "absolute",
              };
            }),
            (t.setTopLeft = function (e) {
              var t = e.top,
                n = e.left,
                r = e.width,
                o = e.height;
              return {
                top: "".concat(t, "px"),
                left: "".concat(n, "px"),
                width: "".concat(r, "px"),
                height: "".concat(o, "px"),
                position: "absolute",
              };
            }),
            (t.sortLayoutItems = j),
            (t.sortLayoutItemsByRowCol = k),
            (t.sortLayoutItemsByColRow = E),
            (t.synchronizeLayoutWithChildren = function (e, t, n, r) {
              e = e || [];
              var i = [];
              return (
                o.default.Children.forEach(t, function (t, n) {
                  var r = v(e, String(t.key));
                  if (r) i[n] = f(r);
                  else {
                    0;
                    var o = t.props["data-grid"] || t.props._grid;
                    i[n] = f(
                      o
                        ? u(u({}, o), {}, { i: t.key })
                        : { w: 1, h: 1, x: 0, y: s(i), i: String(t.key) }
                    );
                  }
                }),
                h(b(i, { cols: n }), r, n)
              );
            }),
            (t.validateLayout = x),
            (t.compactType = function (e) {
              var t = e || {},
                n = t.verticalCompact,
                r = t.compactType;
              return !1 === n ? null : r;
            }),
            (t.autoBindHandlers = function (e, t) {
              t.forEach(function (t) {
                return (e[t] = e[t].bind(e));
              });
            }),
            (t.noop = t.fastRGLPropsEqual = void 0);
          var r = i(n(2307)),
            o = i(n(3804));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function u(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(n), !0).forEach(function (t) {
                    c(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function c(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function s(e) {
            for (var t, n = 0, r = 0, o = e.length; r < o; r++)
              (t = e[r].y + e[r].h) > n && (n = t);
            return n;
          }
          function l(e, t) {
            for (var n = Array(e.length), r = 0, o = e.length; r < o; r++)
              t.i === e[r].i ? (n[r] = t) : (n[r] = e[r]);
            return n;
          }
          function f(e) {
            return {
              w: e.w,
              h: e.h,
              x: e.x,
              y: e.y,
              i: e.i,
              minW: e.minW,
              maxW: e.maxW,
              minH: e.minH,
              maxH: e.maxH,
              moved: Boolean(e.moved),
              static: Boolean(e.static),
              isDraggable: e.isDraggable,
              isResizable: e.isResizable,
              resizeHandles: e.resizeHandles,
              isBounded: e.isBounded,
            };
          }
          var p = n(1362);
          function d(e, t) {
            return (
              e.i !== t.i &&
              !(e.x + e.w <= t.x) &&
              !(e.x >= t.x + t.w) &&
              !(e.y + e.h <= t.y) &&
              !(e.y >= t.y + t.h)
            );
          }
          function h(e, t, n) {
            for (
              var r = S(e),
                o = j(e, t),
                i = Array(e.length),
                a = 0,
                u = o.length;
              a < u;
              a++
            ) {
              var c = f(o[a]);
              c.static || ((c = m(r, c, t, n, o)), r.push(c)),
                (i[e.indexOf(o[a])] = c),
                (c.moved = !1);
            }
            return i;
          }
          t.fastRGLPropsEqual = p;
          var y = { x: "w", y: "h" };
          function g(e, t, n, r) {
            var o = y[r];
            t[r] += 1;
            for (
              var i =
                e
                  .map(function (e) {
                    return e.i;
                  })
                  .indexOf(t.i) + 1;
              i < e.length;
              i++
            ) {
              var a = e[i];
              if (!a.static) {
                if (a.y > t.y + t.h) break;
                d(t, a) && g(e, a, n + t[o], r);
              }
            }
            t[r] = n;
          }
          function m(e, t, n, r, o) {
            var i,
              a = "horizontal" === n;
            if ("vertical" === n)
              for (t.y = Math.min(s(e), t.y); t.y > 0 && !w(e, t); ) t.y--;
            else if (a) for (; t.x > 0 && !w(e, t); ) t.x--;
            for (; (i = w(e, t)); )
              a ? g(o, t, i.x + i.w, "x") : g(o, t, i.y + i.h, "y"),
                a && t.x + t.w > r && ((t.x = r - t.w), t.y++);
            return t;
          }
          function b(e, t) {
            for (var n = S(e), r = 0, o = e.length; r < o; r++) {
              var i = e[r];
              if (
                (i.x + i.w > t.cols && (i.x = t.cols - i.w),
                i.x < 0 && ((i.x = 0), (i.w = t.cols)),
                i.static)
              )
                for (; w(n, i); ) i.y++;
              else n.push(i);
            }
            return e;
          }
          function v(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (e[n].i === t) return e[n];
          }
          function w(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (d(e[n], t)) return e[n];
          }
          function O(e, t) {
            return e.filter(function (e) {
              return d(e, t);
            });
          }
          function S(e) {
            return e.filter(function (e) {
              return e.static;
            });
          }
          function _(e, t, n, r, o, i, a, u) {
            if (t.static && !0 !== t.isDraggable) return e;
            if (t.y === r && t.x === n) return e;
            C(
              "Moving element "
                .concat(t.i, " to [")
                .concat(String(n), ",")
                .concat(String(r), "] from [")
                .concat(t.x, ",")
                .concat(t.y, "]")
            );
            var c = t.x,
              s = t.y;
            "number" == typeof n && (t.x = n),
              "number" == typeof r && (t.y = r),
              (t.moved = !0);
            var l = j(e, a);
            ("vertical" === a && "number" == typeof r
              ? s >= r
              : "horizontal" === a && "number" == typeof n && c >= n) &&
              (l = l.reverse());
            var f = O(l, t);
            if (i && f.length)
              return (
                C("Collision prevented on ".concat(t.i, ", reverting.")),
                (t.x = c),
                (t.y = s),
                (t.moved = !1),
                e
              );
            for (var p = 0, d = f.length; p < d; p++) {
              var h = f[p];
              C(
                "Resolving collision between "
                  .concat(t.i, " at [")
                  .concat(t.x, ",")
                  .concat(t.y, "] and ")
                  .concat(h.i, " at [")
                  .concat(h.x, ",")
                  .concat(h.y, "]")
              ),
                h.moved ||
                  (e = h.static ? P(e, h, t, o, a, u) : P(e, t, h, o, a, u));
            }
            return e;
          }
          function P(e, t, n, r, o, i) {
            var a = "horizontal" === o,
              u = "horizontal" !== o,
              c = t.static;
            if (r) {
              r = !1;
              var s = {
                x: a ? Math.max(t.x - n.w, 0) : n.x,
                y: u ? Math.max(t.y - n.h, 0) : n.y,
                w: n.w,
                h: n.h,
                i: "-1",
              };
              if (!w(e, s))
                return (
                  C(
                    "Doing reverse collision on "
                      .concat(n.i, " up to [")
                      .concat(s.x, ",")
                      .concat(s.y, "].")
                  ),
                  _(e, n, a ? s.x : void 0, u ? s.y : void 0, r, c, o, i)
                );
            }
            return _(
              e,
              n,
              a ? n.x + 1 : void 0,
              u ? n.y + 1 : void 0,
              r,
              c,
              o,
              i
            );
          }
          function j(e, t) {
            return "horizontal" === t ? E(e) : k(e);
          }
          function k(e) {
            return e.slice(0).sort(function (e, t) {
              return e.y > t.y || (e.y === t.y && e.x > t.x)
                ? 1
                : e.y === t.y && e.x === t.x
                ? 0
                : -1;
            });
          }
          function E(e) {
            return e.slice(0).sort(function (e, t) {
              return e.x > t.x || (e.x === t.x && e.y > t.y) ? 1 : -1;
            });
          }
          function x(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "Layout",
              n = ["x", "y", "w", "h"];
            if (!Array.isArray(e)) throw new Error(t + " must be an array!");
            for (var r = 0, o = e.length; r < o; r++) {
              for (var i = e[r], a = 0; a < n.length; a++)
                if ("number" != typeof i[n[a]])
                  throw new Error(
                    "ReactGridLayout: " +
                      t +
                      "[" +
                      r +
                      "]." +
                      n[a] +
                      " must be a number!"
                  );
              if (i.i && "string" != typeof i.i)
                throw new Error(
                  "ReactGridLayout: " + t + "[" + r + "].i must be a string!"
                );
              if (void 0 !== i.static && "boolean" != typeof i.static)
                throw new Error(
                  "ReactGridLayout: " +
                    t +
                    "[" +
                    r +
                    "].static must be a boolean!"
                );
            }
          }
          function C() {}
          t.noop = function () {};
        },
        9968: (e, t, n) => {
          (e.exports = n(9580).default),
            (e.exports.utils = n(7493)),
            (e.exports.Responsive = n(3973).default),
            (e.exports.Responsive.utils = n(5651)),
            (e.exports.WidthProvider = n(7135).default);
        },
        9921: (e, t) => {
          "use strict";
          var n = "function" == typeof Symbol && Symbol.for,
            r = n ? Symbol.for("react.element") : 60103,
            o = n ? Symbol.for("react.portal") : 60106,
            i = n ? Symbol.for("react.fragment") : 60107,
            a = n ? Symbol.for("react.strict_mode") : 60108,
            u = n ? Symbol.for("react.profiler") : 60114,
            c = n ? Symbol.for("react.provider") : 60109,
            s = n ? Symbol.for("react.context") : 60110,
            l = n ? Symbol.for("react.async_mode") : 60111,
            f = n ? Symbol.for("react.concurrent_mode") : 60111,
            p = n ? Symbol.for("react.forward_ref") : 60112,
            d = n ? Symbol.for("react.suspense") : 60113,
            h = n ? Symbol.for("react.suspense_list") : 60120,
            y = n ? Symbol.for("react.memo") : 60115,
            g = n ? Symbol.for("react.lazy") : 60116,
            m = n ? Symbol.for("react.block") : 60121,
            b = n ? Symbol.for("react.fundamental") : 60117,
            v = n ? Symbol.for("react.responder") : 60118,
            w = n ? Symbol.for("react.scope") : 60119;
          function O(e) {
            if ("object" == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case r:
                  switch ((e = e.type)) {
                    case l:
                    case f:
                    case i:
                    case u:
                    case a:
                    case d:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case s:
                        case p:
                        case g:
                        case y:
                        case c:
                          return e;
                        default:
                          return t;
                      }
                  }
                case o:
                  return t;
              }
            }
          }
          function S(e) {
            return O(e) === f;
          }
          (t.AsyncMode = l),
            (t.ConcurrentMode = f),
            (t.ContextConsumer = s),
            (t.ContextProvider = c),
            (t.Element = r),
            (t.ForwardRef = p),
            (t.Fragment = i),
            (t.Lazy = g),
            (t.Memo = y),
            (t.Portal = o),
            (t.Profiler = u),
            (t.StrictMode = a),
            (t.Suspense = d),
            (t.isAsyncMode = function (e) {
              return S(e) || O(e) === l;
            }),
            (t.isConcurrentMode = S),
            (t.isContextConsumer = function (e) {
              return O(e) === s;
            }),
            (t.isContextProvider = function (e) {
              return O(e) === c;
            }),
            (t.isElement = function (e) {
              return "object" == typeof e && null !== e && e.$$typeof === r;
            }),
            (t.isForwardRef = function (e) {
              return O(e) === p;
            }),
            (t.isFragment = function (e) {
              return O(e) === i;
            }),
            (t.isLazy = function (e) {
              return O(e) === g;
            }),
            (t.isMemo = function (e) {
              return O(e) === y;
            }),
            (t.isPortal = function (e) {
              return O(e) === o;
            }),
            (t.isProfiler = function (e) {
              return O(e) === u;
            }),
            (t.isStrictMode = function (e) {
              return O(e) === a;
            }),
            (t.isSuspense = function (e) {
              return O(e) === d;
            }),
            (t.isValidElementType = function (e) {
              return (
                "string" == typeof e ||
                "function" == typeof e ||
                e === i ||
                e === f ||
                e === u ||
                e === a ||
                e === d ||
                e === h ||
                ("object" == typeof e &&
                  null !== e &&
                  (e.$$typeof === g ||
                    e.$$typeof === y ||
                    e.$$typeof === c ||
                    e.$$typeof === s ||
                    e.$$typeof === p ||
                    e.$$typeof === b ||
                    e.$$typeof === v ||
                    e.$$typeof === w ||
                    e.$$typeof === m))
              );
            }),
            (t.typeOf = O);
        },
        9864: (e, t, n) => {
          "use strict";
          e.exports = n(9921);
        },
        2827: (e, t, n) => {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var r,
            o = (r = n(3804)) && r.__esModule ? r : { default: r },
            i = n(1193),
            a = n(9069),
            u = n(448);
          function c() {
            return (c =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function l(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? s(Object(n), !0).forEach(function (t) {
                    p(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : s(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function f(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function p(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var d = (function (e) {
            var t, n;
            function r() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                p(
                  f((t = e.call.apply(e, [this].concat(r)) || this)),
                  "state",
                  void 0
                ),
                p(f(t), "lastHandleRect", null),
                p(f(t), "slack", null),
                t
              );
            }
            (n = e),
              ((t = r).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n);
            var u = r.prototype;
            return (
              (u.componentWillUnmount = function () {
                this.resetData();
              }),
              (u.lockAspectRatio = function (e, t, n) {
                return [(e = (t = e / n) * n), t];
              }),
              (u.resetData = function () {
                this.lastHandleRect = this.slack = null;
              }),
              (u.runConstraints = function (e, t) {
                var n = [this.props.minConstraints, this.props.maxConstraints],
                  r = n[0],
                  o = n[1];
                if (!r && !o) return [e, t];
                if (this.props.lockAspectRatio)
                  if (t === this.props.height) {
                    var i = this.props.width / this.props.height;
                    e = (t = e / i) * i;
                  } else {
                    var a = this.props.height / this.props.width;
                    t = (e = t / a) * a;
                  }
                var u = e,
                  c = t,
                  s = this.slack || [0, 0],
                  l = s[0],
                  f = s[1];
                return (
                  (e += l),
                  (t += f),
                  r && ((e = Math.max(r[0], e)), (t = Math.max(r[1], t))),
                  o && ((e = Math.min(o[0], e)), (t = Math.min(o[1], t))),
                  (this.slack = [l + (u - e), f + (c - t)]),
                  [e, t]
                );
              }),
              (u.resizeHandler = function (e, t) {
                var n = this;
                return function (r, o) {
                  var i = o.node,
                    a = o.deltaX,
                    u = o.deltaY;
                  "onResizeStart" === e && n.resetData();
                  var c =
                      ("both" === n.props.axis || "x" === n.props.axis) &&
                      "n" !== t &&
                      "s" !== t,
                    s =
                      ("both" === n.props.axis || "y" === n.props.axis) &&
                      "e" !== t &&
                      "w" !== t;
                  if (c || s) {
                    var l = t[0],
                      f = t[t.length - 1],
                      p = i.getBoundingClientRect();
                    if (null != n.lastHandleRect) {
                      if ("w" === f) a += p.left - n.lastHandleRect.left;
                      if ("n" === l) u += p.top - n.lastHandleRect.top;
                    }
                    (n.lastHandleRect = p),
                      "w" === f && (a = -a),
                      "n" === l && (u = -u);
                    var d =
                        n.props.width + (c ? a / n.props.transformScale : 0),
                      h = n.props.height + (s ? u / n.props.transformScale : 0),
                      y = n.runConstraints(d, h);
                    (d = y[0]), (h = y[1]);
                    var g = d !== n.props.width || h !== n.props.height,
                      m = "function" == typeof n.props[e] ? n.props[e] : null;
                    m &&
                      !("onResize" === e && !g) &&
                      ("function" == typeof r.persist && r.persist(),
                      m(r, {
                        node: i,
                        size: { width: d, height: h },
                        handle: t,
                      })),
                      "onResizeStop" === e && n.resetData();
                  }
                };
              }),
              (u.renderResizeHandle = function (e) {
                var t = this.props.handle;
                return t
                  ? "function" == typeof t
                    ? t(e)
                    : t
                  : o.default.createElement("span", {
                      className:
                        "react-resizable-handle react-resizable-handle-" + e,
                    });
              }),
              (u.render = function () {
                var e = this,
                  t = this.props,
                  n = t.children,
                  r = t.className,
                  u = t.draggableOpts,
                  s =
                    (t.width,
                    t.height,
                    t.handle,
                    t.handleSize,
                    t.lockAspectRatio,
                    t.axis,
                    t.minConstraints,
                    t.maxConstraints,
                    t.onResize,
                    t.onResizeStop,
                    t.onResizeStart,
                    t.resizeHandles),
                  f =
                    (t.transformScale,
                    (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o;
                    })(t, [
                      "children",
                      "className",
                      "draggableOpts",
                      "width",
                      "height",
                      "handle",
                      "handleSize",
                      "lockAspectRatio",
                      "axis",
                      "minConstraints",
                      "maxConstraints",
                      "onResize",
                      "onResizeStop",
                      "onResizeStart",
                      "resizeHandles",
                      "transformScale",
                    ]));
                return (0, a.cloneElement)(
                  n,
                  l(
                    l({}, f),
                    {},
                    {
                      className: (r ? r + " " : "") + "react-resizable",
                      children: [].concat(
                        n.props.children,
                        s.map(function (t) {
                          return o.default.createElement(
                            i.DraggableCore,
                            c({}, u, {
                              key: "resizableHandle-" + t,
                              onStop: e.resizeHandler("onResizeStop", t),
                              onStart: e.resizeHandler("onResizeStart", t),
                              onDrag: e.resizeHandler("onResize", t),
                            }),
                            e.renderResizeHandle(t)
                          );
                        })
                      ),
                    }
                  )
                );
              }),
              r
            );
          })(o.default.Component);
          (t.default = d),
            p(d, "propTypes", u.resizableProps),
            p(d, "defaultProps", {
              handleSize: [20, 20],
              lockAspectRatio: !1,
              axis: "both",
              minConstraints: [20, 20],
              maxConstraints: [1 / 0, 1 / 0],
              resizeHandles: ["se"],
              transformScale: 1,
            });
        },
        8735: (e, t, n) => {
          "use strict";
          t.default = void 0;
          var r = (function (e) {
              if (e && e.__esModule) return e;
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return { default: e };
              var t = c();
              if (t && t.has(e)) return t.get(e);
              var n = {},
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                  i && (i.get || i.set)
                    ? Object.defineProperty(n, o, i)
                    : (n[o] = e[o]);
                }
              (n.default = e), t && t.set(e, n);
              return n;
            })(n(3804)),
            o = u(n(5697)),
            i = u(n(2827)),
            a = n(448);
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (c = function () {
                return e;
              }),
              e
            );
          }
          function s() {
            return (s =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function f(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(n), !0).forEach(function (t) {
                    d(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function p(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function d(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var h = (function (e) {
            var t, n;
            function o() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                d(p((t = e.call.apply(e, [this].concat(r)) || this)), "state", {
                  width: t.props.width,
                  height: t.props.height,
                  propsWidth: t.props.width,
                  propsHeight: t.props.height,
                }),
                d(p(t), "onResize", function (e, n) {
                  var r = n.size;
                  t.props.onResize
                    ? (e.persist && e.persist(),
                      t.setState(r, function () {
                        return t.props.onResize && t.props.onResize(e, n);
                      }))
                    : t.setState(r);
                }),
                t
              );
            }
            return (
              (n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (o.getDerivedStateFromProps = function (e, t) {
                return t.propsWidth !== e.width || t.propsHeight !== e.height
                  ? {
                      width: e.width,
                      height: e.height,
                      propsWidth: e.width,
                      propsHeight: e.height,
                    }
                  : null;
              }),
              (o.prototype.render = function () {
                var e = this.props,
                  t = e.handle,
                  n = e.handleSize,
                  o = (e.onResize, e.onResizeStart),
                  a = e.onResizeStop,
                  u = e.draggableOpts,
                  c = e.minConstraints,
                  l = e.maxConstraints,
                  p = e.lockAspectRatio,
                  d = e.axis,
                  h = (e.width, e.height, e.resizeHandles),
                  y = e.style,
                  g = e.transformScale,
                  m = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = {},
                      i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                  })(e, [
                    "handle",
                    "handleSize",
                    "onResize",
                    "onResizeStart",
                    "onResizeStop",
                    "draggableOpts",
                    "minConstraints",
                    "maxConstraints",
                    "lockAspectRatio",
                    "axis",
                    "width",
                    "height",
                    "resizeHandles",
                    "style",
                    "transformScale",
                  ]);
                return r.createElement(
                  i.default,
                  {
                    axis: d,
                    draggableOpts: u,
                    handle: t,
                    handleSize: n,
                    height: this.state.height,
                    lockAspectRatio: p,
                    maxConstraints: l,
                    minConstraints: c,
                    onResizeStart: o,
                    onResize: this.onResize,
                    onResizeStop: a,
                    resizeHandles: h,
                    transformScale: g,
                    width: this.state.width,
                  },
                  r.createElement(
                    "div",
                    s({}, m, {
                      style: f(
                        f({}, y),
                        {},
                        {
                          width: this.state.width + "px",
                          height: this.state.height + "px",
                        }
                      ),
                    })
                  )
                );
              }),
              o
            );
          })(r.Component);
          (t.default = h),
            d(
              h,
              "propTypes",
              f(f({}, a.resizableProps), {}, { children: o.default.element })
            );
        },
        448: (e, t, n) => {
          "use strict";
          (t.__esModule = !0), (t.resizableProps = void 0);
          var r,
            o = (r = n(5697)) && r.__esModule ? r : { default: r };
          n(1193);
          var i = {
            axis: o.default.oneOf(["both", "x", "y", "none"]),
            className: o.default.string,
            children: o.default.element.isRequired,
            draggableOpts: o.default.shape({
              allowAnyClick: o.default.bool,
              cancel: o.default.string,
              children: o.default.node,
              disabled: o.default.bool,
              enableUserSelectHack: o.default.bool,
              offsetParent: o.default.node,
              grid: o.default.arrayOf(o.default.number),
              handle: o.default.string,
              nodeRef: o.default.object,
              onStart: o.default.func,
              onDrag: o.default.func,
              onStop: o.default.func,
              onMouseDown: o.default.func,
              scale: o.default.number,
            }),
            height: o.default.number.isRequired,
            handle: o.default.oneOfType([o.default.node, o.default.func]),
            handleSize: o.default.arrayOf(o.default.number),
            lockAspectRatio: o.default.bool,
            maxConstraints: o.default.arrayOf(o.default.number),
            minConstraints: o.default.arrayOf(o.default.number),
            onResizeStop: o.default.func,
            onResizeStart: o.default.func,
            onResize: o.default.func,
            resizeHandles: o.default.arrayOf(
              o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])
            ),
            transformScale: o.default.number,
            width: o.default.number.isRequired,
          };
          t.resizableProps = i;
        },
        9069: (e, t, n) => {
          "use strict";
          (t.__esModule = !0),
            (t.cloneElement = function (e, t) {
              t.style &&
                e.props.style &&
                (t.style = a(a({}, e.props.style), t.style));
              t.className &&
                e.props.className &&
                (t.className = e.props.className + " " + t.className);
              return o.default.cloneElement(e, t);
            });
          var r,
            o = (r = n(3804)) && r.__esModule ? r : { default: r };
          function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function a(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(n), !0).forEach(function (t) {
                    u(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function u(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
        },
        1706: (e, t, n) => {
          "use strict";
          (e.exports = function () {
            throw new Error(
              "Don't instantiate Resizable directly! Use require('react-resizable').Resizable"
            );
          }),
            (e.exports.Resizable = n(2827).default),
            (e.exports.ResizableBox = n(8735).default);
        },
        1191: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = c(n(3804)),
            o = c(n(7196)),
            i = c(n(5697)),
            a = c(n(4184)),
            u = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r =
                      Object.defineProperty && Object.getOwnPropertyDescriptor
                        ? Object.getOwnPropertyDescriptor(e, n)
                        : {};
                    r.get || r.set
                      ? Object.defineProperty(t, n, r)
                      : (t[n] = e[n]);
                  }
              return (t.default = e), t;
            })(n(6861));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function s(e) {
            return (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function l(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function f(e) {
            return (f = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function p(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function d(e, t) {
            return (d =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var h = (function (e) {
            function t(e) {
              var n;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                ((n = (function (e, t) {
                  return !t || ("object" !== s(t) && "function" != typeof t)
                    ? p(e)
                    : t;
                })(this, f(t).call(this, e))).state = { active: !1 }),
                (n._self = null),
                (n._rect = null),
                (n.onHandleUpdate = n._onUpdate.bind(p(n))),
                (n.onStopUpdates = n._onStopUpdates.bind(p(n))),
                n
              );
            }
            var n, i, c;
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && d(e, t);
              })(t, e),
              (n = t),
              (i = [
                {
                  key: "updatePosition",
                  value: function (e, t, n) {
                    var r = (t - e.left) / e.width,
                      o = (e.bottom - n) / e.height;
                    this.props.onChange(
                      this.getScaledValue(r),
                      this.getScaledValue(o)
                    );
                  },
                },
                {
                  key: "getScaledValue",
                  value: function (e) {
                    return u.util.clamp(e, 0, 1) * this.props.max;
                  },
                },
                {
                  key: "getPercentageValue",
                  value: function (e) {
                    return "".concat((e / this.props.max) * 100, "%");
                  },
                },
                {
                  key: "getPosition",
                  value: function (e) {
                    return (
                      e.touches && (e = e.touches[0]),
                      { x: e.clientX, y: e.clientY }
                    );
                  },
                },
                {
                  key: "getBoundingRect",
                  value: function () {
                    return o.default
                      .findDOMNode(this._self)
                      .getBoundingClientRect();
                  },
                },
                {
                  key: "_onStartUpdates",
                  value: function (e) {
                    e.preventDefault();
                    var t = this.getPosition(e),
                      n = t.x,
                      r = t.y;
                    (this._rect = this.getBoundingRect()),
                      document.addEventListener(
                        "mousemove",
                        this.onHandleUpdate
                      ),
                      document.addEventListener(
                        "touchmove",
                        this.onHandleUpdate
                      ),
                      document.addEventListener("mouseup", this.onStopUpdates),
                      document.addEventListener("touchend", this.onStopUpdates),
                      this.setState({ active: !0 }),
                      this.updatePosition(this._rect, n, r);
                  },
                },
                {
                  key: "_onStopUpdates",
                  value: function () {
                    document.removeEventListener(
                      "mousemove",
                      this.onHandleUpdate
                    ),
                      document.removeEventListener(
                        "touchmove",
                        this.onHandleUpdate
                      ),
                      document.removeEventListener(
                        "mouseup",
                        this.onStopUpdates
                      ),
                      document.removeEventListener(
                        "touchend",
                        this.onStopUpdates
                      ),
                      this.setState({ active: !1 });
                  },
                },
                {
                  key: "_onUpdate",
                  value: function (e) {
                    e.preventDefault();
                    var t = this.getPosition(e),
                      n = t.x,
                      r = t.y;
                    this.updatePosition(this._rect, n, r);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      n = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: function (t) {
                          e._self = t;
                        },
                        onMouseDown: this._onStartUpdates.bind(this),
                        onTouchStart: this._onStartUpdates.bind(this),
                        className: (0, a.default)("cpMap", n.className, {
                          "cpMap-active": t.active,
                        }),
                      },
                      r.default.createElement("div", {
                        className: "cpMap__background",
                        style: { backgroundColor: n.backgroundColor },
                      }),
                      r.default.createElement("div", {
                        className: "cpMap__pointer",
                        style: {
                          left: this.getPercentageValue(this.props.x),
                          bottom: this.getPercentageValue(this.props.y),
                        },
                      })
                    );
                  },
                },
              ]) && l(n.prototype, i),
              c && l(n, c),
              t
            );
          })(r.default.Component);
          (h.propTypes = {
            x: i.default.number.isRequired,
            y: i.default.number.isRequired,
            backgroundColor: i.default.string,
            className: i.default.string,
          }),
            (h.defaultProps = {
              x: 0,
              y: 0,
              backgroundColor: "transparent",
              className: null,
            });
          var y = h;
          t.default = y;
        },
        7219: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = i(n(3804)),
            o = i(n(4184));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function a(e) {
            return (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function u(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function s(e, t) {
            return !t || ("object" !== a(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function l(e) {
            return (l = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function f(e, t) {
            return (f =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var p = (function (e) {
            function t() {
              return u(this, t), s(this, l(t).apply(this, arguments));
            }
            var n, i, a;
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && f(e, t);
              })(t, e),
              (n = t),
              (i = [
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return !1;
                  },
                },
                {
                  key: "renderItem",
                  value: function (e, t) {
                    var n = this;
                    return r.default.createElement(
                      "li",
                      { key: t },
                      r.default.createElement(
                        "div",
                        null,
                        r.default.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: function (t) {
                              return n._onClickItem(e);
                            },
                            style: { backgroundColor: e },
                          },
                          e
                        )
                      )
                    );
                  },
                },
                {
                  key: "_onClickItem",
                  value: function (e) {
                    var t = this.props;
                    t.onSelectColor && t.onSelectColor(e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props;
                    return r.default.createElement(
                      "nav",
                      { className: (0, o.default)("cpPalette", e.className) },
                      r.default.createElement(
                        "ul",
                        null,
                        e.colors.map(this.renderItem.bind(this))
                      )
                    );
                  },
                },
              ]) && c(n.prototype, i),
              a && c(n, a),
              t
            );
          })(r.default.Component);
          p.defaultProps = {
            colors: [],
            onSelectColor: function (e) {},
            className: null,
          };
          var d = p;
          t.default = d;
        },
        2019: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = c(n(3804)),
            o = c(n(7196)),
            i = c(n(5697)),
            a = c(n(4184)),
            u = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r =
                      Object.defineProperty && Object.getOwnPropertyDescriptor
                        ? Object.getOwnPropertyDescriptor(e, n)
                        : {};
                    r.get || r.set
                      ? Object.defineProperty(t, n, r)
                      : (t[n] = e[n]);
                  }
              return (t.default = e), t;
            })(n(6861));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function s(e) {
            return (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function l(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function f(e) {
            return (f = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function p(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function d(e, t) {
            return (d =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var h = (function (e) {
            function t(e) {
              var n;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                ((n = (function (e, t) {
                  return !t || ("object" !== s(t) && "function" != typeof t)
                    ? p(e)
                    : t;
                })(this, f(t).call(this, e)))._self = null),
                (n.rect = null),
                (n.onHandleUpdate = n._onUpdate.bind(p(n))),
                (n.onStopUpdates = n._onStopUpdates.bind(p(n))),
                n
              );
            }
            var n, i, c;
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && d(e, t);
              })(t, e),
              (n = t),
              (i = [
                {
                  key: "getPosition",
                  value: function (e) {
                    return (
                      e.touches && (e = e.touches[0]),
                      { x: e.clientX, y: e.clientY }
                    );
                  },
                },
                {
                  key: "getPercentageValue",
                  value: function (e) {
                    return "".concat((e / this.props.max) * 100, "%");
                  },
                },
                {
                  key: "updatePosition",
                  value: function (e, t) {
                    this.props.onChange(
                      this.getScaledValue((t - e.left) / e.width)
                    );
                  },
                },
                {
                  key: "getScaledValue",
                  value: function (e) {
                    return u.util.clamp(e, 0, 1) * this.props.max;
                  },
                },
                {
                  key: "getBoundingRect",
                  value: function () {
                    return o.default
                      .findDOMNode(this._self)
                      .getBoundingClientRect();
                  },
                },
                {
                  key: "_onStartUpdates",
                  value: function (e) {
                    e.preventDefault();
                    var t = this.getPosition(e).x;
                    (this._rect = this.getBoundingRect()),
                      document.addEventListener(
                        "mousemove",
                        this.onHandleUpdate
                      ),
                      document.addEventListener(
                        "touchmove",
                        this.onHandleUpdate
                      ),
                      document.addEventListener("mouseup", this.onStopUpdates),
                      document.addEventListener("touchend", this.onStopUpdates),
                      this.setState({ active: !0 }),
                      this.updatePosition(this._rect, t);
                  },
                },
                {
                  key: "_onStopUpdates",
                  value: function () {
                    document.removeEventListener(
                      "mousemove",
                      this.onHandleUpdate
                    ),
                      document.removeEventListener(
                        "touchmove",
                        this.onHandleUpdate
                      ),
                      document.removeEventListener(
                        "mouseup",
                        this.onStopUpdates
                      ),
                      document.removeEventListener(
                        "touchend",
                        this.onStopUpdates
                      ),
                      this.setState({ active: !1 });
                  },
                },
                {
                  key: "_onUpdate",
                  value: function (e) {
                    e.preventDefault();
                    var t = this.getPosition(e).x;
                    this.updatePosition(this._rect, t);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: function (t) {
                          e._self = t;
                        },
                        className: (0, a.default)("cpSlider", t.className),
                        onMouseDown: this._onStartUpdates.bind(this),
                        onTouchStart: this._onStartUpdates.bind(this),
                      },
                      r.default.createElement(
                        "div",
                        { className: "cpSlider__track" },
                        r.default.createElement("span", {
                          style: { background: t.background },
                        })
                      ),
                      r.default.createElement("div", {
                        className: "cpSlider__pointer",
                        style: {
                          left: this.getPercentageValue(this.props.value),
                        },
                      })
                    );
                  },
                },
              ]) && l(n.prototype, i),
              c && l(n, c),
              t
            );
          })(r.default.Component);
          (h.propTypes = {
            value: i.default.number.isRequired,
            background: i.default.string,
          }),
            (h.defaultProps = { value: 0, background: "", className: null });
          var y = h;
          t.default = y;
        },
        6617: (e, t, n) => {
          "use strict";
          t.Z = void 0;
          var r = l(n(3804)),
            o = l(n(5697)),
            i = l(n(4184)),
            a = l(n(2019)),
            u = l(n(1191)),
            c = l(n(7219)),
            s = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r =
                      Object.defineProperty && Object.getOwnPropertyDescriptor
                        ? Object.getOwnPropertyDescriptor(e, n)
                        : {};
                    r.get || r.set
                      ? Object.defineProperty(t, n, r)
                      : (t[n] = e[n]);
                  }
              return (t.default = e), t;
            })(n(6861));
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function f(e) {
            return (f =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function p(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, u = e[Symbol.iterator]();
                    !(r = (a = u.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })()
            );
          }
          function d(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function h(e, t) {
            return !t || ("object" !== f(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function y(e) {
            return (y = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function g(e, t) {
            return (g =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var m = (function (e) {
            function t(e) {
              var n;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                ((n = h(this, y(t).call(this, e))).state = {
                  color: s.color.parseToHsv(e.color),
                }),
                n
              );
            }
            var n, o, l;
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && g(e, t);
              })(t, e),
              (n = t),
              (l = [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = s.color.parseToHsv(e.color);
                    return s.color.equals(t.color, n) ? null : { color: n };
                  },
                },
              ]),
              (o = [
                {
                  key: "getAlpha",
                  value: function () {
                    var e = this.state;
                    return void 0 === e.color[3] ? 1 : e.color[3];
                  },
                },
                {
                  key: "getBackgroundGradient",
                  value: function () {
                    var e = p(this.state.color, 3),
                      t = e[0],
                      n = e[1],
                      r = e[2],
                      o = s.color.toRgbString([t, n, r, 1]);
                    return "linear-gradient(to right, rgba(0,0,0,0) 0%, ".concat(
                      o,
                      " 100%)"
                    );
                  },
                },
                {
                  key: "getBackgroundHue",
                  value: function () {
                    return s.color.toRgbString([this.state.color[0], 100, 100]);
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    var t = this.props;
                    this.setState({ color: e }),
                      t.onChange(s.color.toRgbString(e));
                  },
                },
                {
                  key: "changeColor",
                  value: function (e) {
                    var t = s.color.parseToHsv(e);
                    s.color.equals(this.state.color, t) ||
                      this.setState({ color: t });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      n = this.props,
                      o = p(t.color, 3),
                      l = o[0],
                      f = o[1],
                      d = o[2];
                    return r.default.createElement(
                      "div",
                      { className: (0, i.default)("colorpicker", n.className) },
                      r.default.createElement(u.default, {
                        x: f,
                        y: d,
                        max: 100,
                        backgroundColor: this.getBackgroundHue(),
                        onChange: function (n, r) {
                          var o = p(t.color, 4),
                            i = o[0],
                            a = o[3];
                          e.update([i, n, r, a]);
                        },
                        className: (0, i.default)("colorpicker__map", {
                          "cpMap-dark": s.color.isDark(t.color),
                          "cpMap-light": !s.color.isDark(t.color),
                        }),
                      }),
                      r.default.createElement(
                        "div",
                        { className: "colorpicker__body" },
                        r.default.createElement(
                          "nav",
                          { className: "colorpicker__controller" },
                          r.default.createElement(a.default, {
                            value: l,
                            max: 360,
                            onChange: function (n) {
                              var r = p(t.color, 4),
                                o = r[1],
                                i = r[2],
                                a = r[3];
                              e.update([n, o, i, a]);
                            },
                            className: "colorpicker__slider cpSlider-hue",
                          }),
                          r.default.createElement(a.default, {
                            value: this.getAlpha(),
                            max: 1,
                            background: this.getBackgroundGradient(),
                            onChange: function (n) {
                              var r = p(t.color, 3),
                                o = r[0],
                                i = r[1],
                                a = r[2];
                              e.update([o, i, a, n]);
                            },
                            className: "colorpicker__slider cpSlider-opacity",
                          })
                        ),
                        r.default.createElement(
                          "figure",
                          { className: "cpPreview colorpicker__preview" },
                          r.default.createElement(
                            "span",
                            null,
                            r.default.createElement("i", {
                              style: {
                                backgroundColor: s.color.toRgbString(t.color),
                              },
                            })
                          )
                        )
                      ),
                      r.default.createElement(c.default, {
                        colors: n.paletteColors,
                        onSelectColor: function (t) {
                          var n = p(s.color.parseToHsv(t), 4),
                            r = n[0],
                            o = n[1],
                            i = n[2],
                            a = n[3];
                          e.update([r, o, i, a]);
                        },
                        className: "colorpicker__palette",
                      })
                    );
                  },
                },
              ]) && d(n.prototype, o),
              l && d(n, l),
              t
            );
          })(r.default.Component);
          (m.propTypes = {
            color: o.default.string.isRequired,
            onChange: o.default.func.isRequired,
          }),
            (m.defaultProps = {
              color: "rgba(0,0,0,1)",
              onChange: function (e) {},
              paletteColors: [
                "#D0011B",
                "#F6A623",
                "#F8E81C",
                "#8B572A",
                "#7ED321",
                "#417505",
                "#BD0FE1",
                "#9012FE",
                "#4990E2",
                "#50E3C2",
                "#B8E986",
                "#000000",
                "#4A4A4A",
                "#9B9B9B",
                "#FFFFFF",
                "#B31F37",
              ],
              className: null,
            });
          var b = m;
          t.Z = b;
        },
        6217: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.parseToHsv = function (e) {
              e = (0, r.default)(e);
              var t = (0, o.default)(e),
                n = 4 === e.length ? e[3] : 1;
              return t.push(n), t;
            }),
            (t.toRgbString = s),
            (t.equals = function (e, t) {
              return s(e) === s(t);
            }),
            (t.isDark = function (e) {
              return (0, u.default)((0, i.default)(e)) <= 128;
            });
          var r = c(n(4586)),
            o = c(n(8210)),
            i = c(n(1366)),
            a = c(n(735)),
            u = c(n(6586));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function s(e) {
            var t = (0, i.default)(e);
            return 4 === e.length && t.push(e[3]), (0, a.default)(t);
          }
        },
        6861: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.util = t.color = void 0);
          var r = i(n(6217));
          t.color = r;
          var o = i(n(336));
          function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                  var r =
                    Object.defineProperty && Object.getOwnPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(e, n)
                      : {};
                  r.get || r.set
                    ? Object.defineProperty(t, n, r)
                    : (t[n] = e[n]);
                }
            return (t.default = e), t;
          }
          t.util = o;
        },
        336: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.clamp = function (e, t, n) {
              return Math.min(Math.max(e, t), n);
            });
        },
        7121: (e, t, n) => {
          "use strict";
          n.d(t, { Z: () => r }), (e = n.hmd(e));
          const r = (function (e) {
            var t,
              n = e.Symbol;
            return (
              "function" == typeof n
                ? n.observable
                  ? (t = n.observable)
                  : ((t = n("observable")), (n.observable = t))
                : (t = "@@observable"),
              t
            );
          })(
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : e
          );
        },
        3804: (t) => {
          "use strict";
          t.exports = e;
        },
        7196: (e) => {
          "use strict";
          e.exports = t;
        },
        3609: (e) => {
          "use strict";
          e.exports = n;
        },
      },
      o = {};
    function i(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var n = (o[e] = { id: e, loaded: !1, exports: {} });
      return r[e](n, n.exports, i), (n.loaded = !0), n.exports;
    }
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
      (i.d = (e, t) => {
        for (var n in t)
          i.o(t, n) &&
            !i.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (i.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (i.hmd = (e) => (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      )),
      (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
    var a = {};
    return (
      (() => {
        "use strict";
        i.d(a, { default: () => Yr });
        var e = i(3804),
          t = i.n(e),
          n = i(7121),
          r = function () {
            return Math.random().toString(36).substring(7).split("").join(".");
          },
          o = {
            INIT: "@@redux/INIT" + r(),
            REPLACE: "@@redux/REPLACE" + r(),
            PROBE_UNKNOWN_ACTION: function () {
              return "@@redux/PROBE_UNKNOWN_ACTION" + r();
            },
          };
        function u(e) {
          if ("object" != typeof e || null === e) return !1;
          for (var t = e; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }
        function c(e, t, r) {
          var i;
          if (
            ("function" == typeof t && "function" == typeof r) ||
            ("function" == typeof r && "function" == typeof arguments[3])
          )
            throw new Error(
              "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
            );
          if (
            ("function" == typeof t && void 0 === r && ((r = t), (t = void 0)),
            void 0 !== r)
          ) {
            if ("function" != typeof r)
              throw new Error("Expected the enhancer to be a function.");
            return r(c)(e, t);
          }
          if ("function" != typeof e)
            throw new Error("Expected the reducer to be a function.");
          var a = e,
            s = t,
            l = [],
            f = l,
            p = !1;
          function d() {
            f === l && (f = l.slice());
          }
          function h() {
            if (p)
              throw new Error(
                "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
              );
            return s;
          }
          function y(e) {
            if ("function" != typeof e)
              throw new Error("Expected the listener to be a function.");
            if (p)
              throw new Error(
                "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
              );
            var t = !0;
            return (
              d(),
              f.push(e),
              function () {
                if (t) {
                  if (p)
                    throw new Error(
                      "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                    );
                  (t = !1), d();
                  var n = f.indexOf(e);
                  f.splice(n, 1), (l = null);
                }
              }
            );
          }
          function g(e) {
            if (!u(e))
              throw new Error(
                "Actions must be plain objects. Use custom middleware for async actions."
              );
            if (void 0 === e.type)
              throw new Error(
                'Actions may not have an undefined "type" property. Have you misspelled a constant?'
              );
            if (p) throw new Error("Reducers may not dispatch actions.");
            try {
              (p = !0), (s = a(s, e));
            } finally {
              p = !1;
            }
            for (var t = (l = f), n = 0; n < t.length; n++) {
              (0, t[n])();
            }
            return e;
          }
          function m(e) {
            if ("function" != typeof e)
              throw new Error("Expected the nextReducer to be a function.");
            (a = e), g({ type: o.REPLACE });
          }
          function b() {
            var e,
              t = y;
            return (
              ((e = {
                subscribe: function (e) {
                  if ("object" != typeof e || null === e)
                    throw new TypeError(
                      "Expected the observer to be an object."
                    );
                  function n() {
                    e.next && e.next(h());
                  }
                  return n(), { unsubscribe: t(n) };
                },
              })[n.Z] = function () {
                return this;
              }),
              e
            );
          }
          return (
            g({ type: o.INIT }),
            ((i = {
              dispatch: g,
              subscribe: y,
              getState: h,
              replaceReducer: m,
            })[n.Z] = b),
            i
          );
        }
        function s(e, t) {
          var n = t && t.type;
          return (
            "Given " +
            ((n && 'action "' + String(n) + '"') || "an action") +
            ', reducer "' +
            e +
            '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
          );
        }
        function l(e) {
          for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var i = t[r];
            0, "function" == typeof e[i] && (n[i] = e[i]);
          }
          var a,
            u = Object.keys(n);
          try {
            !(function (e) {
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                if (void 0 === n(void 0, { type: o.INIT }))
                  throw new Error(
                    'Reducer "' +
                      t +
                      "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                  );
                if (void 0 === n(void 0, { type: o.PROBE_UNKNOWN_ACTION() }))
                  throw new Error(
                    'Reducer "' +
                      t +
                      "\" returned undefined when probed with a random type. Don't try to handle " +
                      o.INIT +
                      ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                  );
              });
            })(n);
          } catch (e) {
            a = e;
          }
          return function (e, t) {
            if ((void 0 === e && (e = {}), a)) throw a;
            for (var r = !1, o = {}, i = 0; i < u.length; i++) {
              var c = u[i],
                l = n[c],
                f = e[c],
                p = l(f, t);
              if (void 0 === p) {
                var d = s(c, t);
                throw new Error(d);
              }
              (o[c] = p), (r = r || p !== f);
            }
            return (r = r || u.length !== Object.keys(e).length) ? o : e;
          };
        }
        function f(e, t) {
          return function () {
            return t(e.apply(this, arguments));
          };
        }
        i(5697);
        var p = t().createContext(null);
        var d = function (e) {
            e();
          },
          h = function () {
            return d;
          },
          y = { notify: function () {} };
        var g = (function () {
            function e(e, t) {
              (this.store = e),
                (this.parentSub = t),
                (this.unsubscribe = null),
                (this.listeners = y),
                (this.handleChangeWrapper =
                  this.handleChangeWrapper.bind(this));
            }
            var t = e.prototype;
            return (
              (t.addNestedSub = function (e) {
                return this.trySubscribe(), this.listeners.subscribe(e);
              }),
              (t.notifyNestedSubs = function () {
                this.listeners.notify();
              }),
              (t.handleChangeWrapper = function () {
                this.onStateChange && this.onStateChange();
              }),
              (t.isSubscribed = function () {
                return Boolean(this.unsubscribe);
              }),
              (t.trySubscribe = function () {
                this.unsubscribe ||
                  ((this.unsubscribe = this.parentSub
                    ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                    : this.store.subscribe(this.handleChangeWrapper)),
                  (this.listeners = (function () {
                    var e = h(),
                      t = null,
                      n = null;
                    return {
                      clear: function () {
                        (t = null), (n = null);
                      },
                      notify: function () {
                        e(function () {
                          for (var e = t; e; ) e.callback(), (e = e.next);
                        });
                      },
                      get: function () {
                        for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                        return e;
                      },
                      subscribe: function (e) {
                        var r = !0,
                          o = (n = { callback: e, next: null, prev: n });
                        return (
                          o.prev ? (o.prev.next = o) : (t = o),
                          function () {
                            r &&
                              null !== t &&
                              ((r = !1),
                              o.next ? (o.next.prev = o.prev) : (n = o.prev),
                              o.prev ? (o.prev.next = o.next) : (t = o.next));
                          }
                        );
                      },
                    };
                  })()));
              }),
              (t.tryUnsubscribe = function () {
                this.unsubscribe &&
                  (this.unsubscribe(),
                  (this.unsubscribe = null),
                  this.listeners.clear(),
                  (this.listeners = y));
              }),
              e
            );
          })(),
          m =
            "undefined" != typeof window &&
            void 0 !== window.document &&
            void 0 !== window.document.createElement
              ? e.useLayoutEffect
              : e.useEffect;
        const b = function (n) {
          var r = n.store,
            o = n.context,
            i = n.children,
            a = (0, e.useMemo)(
              function () {
                var e = new g(r);
                return (
                  (e.onStateChange = e.notifyNestedSubs),
                  { store: r, subscription: e }
                );
              },
              [r]
            ),
            u = (0, e.useMemo)(
              function () {
                return r.getState();
              },
              [r]
            );
          m(
            function () {
              var e = a.subscription;
              return (
                e.trySubscribe(),
                u !== r.getState() && e.notifyNestedSubs(),
                function () {
                  e.tryUnsubscribe(), (e.onStateChange = null);
                }
              );
            },
            [a, u]
          );
          var c = o || p;
          return t().createElement(c.Provider, { value: a }, i);
        };
        function v() {
          return (v =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function w(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        var O = i(8679),
          S = i.n(O),
          _ = i(9864),
          P = [],
          j = [null, null];
        function k(e, t) {
          var n = e[1];
          return [t.payload, n + 1];
        }
        function E(e, t, n) {
          m(function () {
            return e.apply(void 0, t);
          }, n);
        }
        function x(e, t, n, r, o, i, a) {
          (e.current = r),
            (t.current = o),
            (n.current = !1),
            i.current && ((i.current = null), a());
        }
        function C(e, t, n, r, o, i, a, u, c, s) {
          if (e) {
            var l = !1,
              f = null,
              p = function () {
                if (!l) {
                  var e,
                    n,
                    p = t.getState();
                  try {
                    e = r(p, o.current);
                  } catch (e) {
                    (n = e), (f = e);
                  }
                  n || (f = null),
                    e === i.current
                      ? a.current || c()
                      : ((i.current = e),
                        (u.current = e),
                        (a.current = !0),
                        s({ type: "STORE_UPDATED", payload: { error: n } }));
                }
              };
            (n.onStateChange = p), n.trySubscribe(), p();
            return function () {
              if (((l = !0), n.tryUnsubscribe(), (n.onStateChange = null), f))
                throw f;
            };
          }
        }
        var D = function () {
          return [null, 0];
        };
        function R(n, r) {
          void 0 === r && (r = {});
          var o = r,
            i = o.getDisplayName,
            a =
              void 0 === i
                ? function (e) {
                    return "ConnectAdvanced(" + e + ")";
                  }
                : i,
            u = o.methodName,
            c = void 0 === u ? "connectAdvanced" : u,
            s = o.renderCountProp,
            l = void 0 === s ? void 0 : s,
            f = o.shouldHandleStateChanges,
            d = void 0 === f || f,
            h = o.storeKey,
            y = void 0 === h ? "store" : h,
            m = (o.withRef, o.forwardRef),
            b = void 0 !== m && m,
            O = o.context,
            R = void 0 === O ? p : O,
            T = w(o, [
              "getDisplayName",
              "methodName",
              "renderCountProp",
              "shouldHandleStateChanges",
              "storeKey",
              "withRef",
              "forwardRef",
              "context",
            ]),
            z = R;
          return function (r) {
            var o = r.displayName || r.name || "Component",
              i = a(o),
              u = v({}, T, {
                getDisplayName: a,
                methodName: c,
                renderCountProp: l,
                shouldHandleStateChanges: d,
                storeKey: y,
                displayName: i,
                wrappedComponentName: o,
                WrappedComponent: r,
              }),
              s = T.pure;
            var f = s
              ? e.useMemo
              : function (e) {
                  return e();
                };
            function p(o) {
              var i = (0, e.useMemo)(
                  function () {
                    var e = o.reactReduxForwardedRef,
                      t = w(o, ["reactReduxForwardedRef"]);
                    return [o.context, e, t];
                  },
                  [o]
                ),
                a = i[0],
                c = i[1],
                s = i[2],
                l = (0, e.useMemo)(
                  function () {
                    return a &&
                      a.Consumer &&
                      (0, _.isContextConsumer)(
                        t().createElement(a.Consumer, null)
                      )
                      ? a
                      : z;
                  },
                  [a, z]
                ),
                p = (0, e.useContext)(l),
                h =
                  Boolean(o.store) &&
                  Boolean(o.store.getState) &&
                  Boolean(o.store.dispatch);
              Boolean(p) && Boolean(p.store);
              var y = h ? o.store : p.store,
                m = (0, e.useMemo)(
                  function () {
                    return (function (e) {
                      return n(e.dispatch, u);
                    })(y);
                  },
                  [y]
                ),
                b = (0, e.useMemo)(
                  function () {
                    if (!d) return j;
                    var e = new g(y, h ? null : p.subscription),
                      t = e.notifyNestedSubs.bind(e);
                    return [e, t];
                  },
                  [y, h, p]
                ),
                O = b[0],
                S = b[1],
                R = (0, e.useMemo)(
                  function () {
                    return h ? p : v({}, p, { subscription: O });
                  },
                  [h, p, O]
                ),
                T = (0, e.useReducer)(k, P, D),
                M = T[0][0],
                N = T[1];
              if (M && M.error) throw M.error;
              var I = (0, e.useRef)(),
                B = (0, e.useRef)(s),
                H = (0, e.useRef)(),
                L = (0, e.useRef)(!1),
                A = f(
                  function () {
                    return H.current && s === B.current
                      ? H.current
                      : m(y.getState(), s);
                  },
                  [y, M, s]
                );
              E(x, [B, I, L, s, A, H, S]),
                E(C, [d, y, O, m, B, I, L, H, S, N], [y, O, m]);
              var W = (0, e.useMemo)(
                function () {
                  return t().createElement(r, v({}, A, { ref: c }));
                },
                [c, r, A]
              );
              return (0, e.useMemo)(
                function () {
                  return d ? t().createElement(l.Provider, { value: R }, W) : W;
                },
                [l, W, R]
              );
            }
            var h = s ? t().memo(p) : p;
            if (((h.WrappedComponent = r), (h.displayName = i), b)) {
              var m = t().forwardRef(function (e, n) {
                return t().createElement(
                  h,
                  v({}, e, { reactReduxForwardedRef: n })
                );
              });
              return (m.displayName = i), (m.WrappedComponent = r), S()(m, r);
            }
            return S()(h, r);
          };
        }
        function T(e, t) {
          return e === t
            ? 0 !== e || 0 !== t || 1 / e == 1 / t
            : e != e && t != t;
        }
        function z(e, t) {
          if (T(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (var o = 0; o < n.length; o++)
            if (
              !Object.prototype.hasOwnProperty.call(t, n[o]) ||
              !T(e[n[o]], t[n[o]])
            )
              return !1;
          return !0;
        }
        function M(e) {
          return function (t, n) {
            var r = e(t, n);
            function o() {
              return r;
            }
            return (o.dependsOnOwnProps = !1), o;
          };
        }
        function N(e) {
          return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
            ? Boolean(e.dependsOnOwnProps)
            : 1 !== e.length;
        }
        function I(e, t) {
          return function (t, n) {
            n.displayName;
            var r = function (e, t) {
              return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
            };
            return (
              (r.dependsOnOwnProps = !0),
              (r.mapToProps = function (t, n) {
                (r.mapToProps = e), (r.dependsOnOwnProps = N(e));
                var o = r(t, n);
                return (
                  "function" == typeof o &&
                    ((r.mapToProps = o),
                    (r.dependsOnOwnProps = N(o)),
                    (o = r(t, n))),
                  o
                );
              }),
              r
            );
          };
        }
        const B = [
          function (e) {
            return "function" == typeof e ? I(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : M(function (e) {
                  return { dispatch: e };
                });
          },
          function (e) {
            return e && "object" == typeof e
              ? M(function (t) {
                  return (function (e, t) {
                    if ("function" == typeof e) return f(e, t);
                    if ("object" != typeof e || null === e)
                      throw new Error(
                        "bindActionCreators expected an object or a function, instead received " +
                          (null === e ? "null" : typeof e) +
                          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                      );
                    var n = {};
                    for (var r in e) {
                      var o = e[r];
                      "function" == typeof o && (n[r] = f(o, t));
                    }
                    return n;
                  })(e, t);
                })
              : void 0;
          },
        ];
        const H = [
          function (e) {
            return "function" == typeof e ? I(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : M(function () {
                  return {};
                });
          },
        ];
        function L(e, t, n) {
          return v({}, n, e, t);
        }
        const A = [
          function (e) {
            return "function" == typeof e
              ? (function (e) {
                  return function (t, n) {
                    n.displayName;
                    var r,
                      o = n.pure,
                      i = n.areMergedPropsEqual,
                      a = !1;
                    return function (t, n, u) {
                      var c = e(t, n, u);
                      return (
                        a ? (o && i(c, r)) || (r = c) : ((a = !0), (r = c)), r
                      );
                    };
                  };
                })(e)
              : void 0;
          },
          function (e) {
            return e
              ? void 0
              : function () {
                  return L;
                };
          },
        ];
        function W(e, t, n, r) {
          return function (o, i) {
            return n(e(o, i), t(r, i), i);
          };
        }
        function U(e, t, n, r, o) {
          var i,
            a,
            u,
            c,
            s,
            l = o.areStatesEqual,
            f = o.areOwnPropsEqual,
            p = o.areStatePropsEqual,
            d = !1;
          function h(o, d) {
            var h,
              y,
              g = !f(d, a),
              m = !l(o, i);
            return (
              (i = o),
              (a = d),
              g && m
                ? ((u = e(i, a)),
                  t.dependsOnOwnProps && (c = t(r, a)),
                  (s = n(u, c, a)))
                : g
                ? (e.dependsOnOwnProps && (u = e(i, a)),
                  t.dependsOnOwnProps && (c = t(r, a)),
                  (s = n(u, c, a)))
                : m
                ? ((h = e(i, a)),
                  (y = !p(h, u)),
                  (u = h),
                  y && (s = n(u, c, a)),
                  s)
                : s
            );
          }
          return function (o, l) {
            return d
              ? h(o, l)
              : ((u = e((i = o), (a = l))),
                (c = t(r, a)),
                (s = n(u, c, a)),
                (d = !0),
                s);
          };
        }
        function F(e, t) {
          var n = t.initMapStateToProps,
            r = t.initMapDispatchToProps,
            o = t.initMergeProps,
            i = w(t, [
              "initMapStateToProps",
              "initMapDispatchToProps",
              "initMergeProps",
            ]),
            a = n(e, i),
            u = r(e, i),
            c = o(e, i);
          return (i.pure ? U : W)(a, u, c, e, i);
        }
        function $(e, t, n) {
          for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r](e);
            if (o) return o;
          }
          return function (t, r) {
            throw new Error(
              "Invalid value of type " +
                typeof e +
                " for " +
                n +
                " argument when connecting component " +
                r.wrappedComponentName +
                "."
            );
          };
        }
        function q(e, t) {
          return e === t;
        }
        function X(e) {
          var t = void 0 === e ? {} : e,
            n = t.connectHOC,
            r = void 0 === n ? R : n,
            o = t.mapStateToPropsFactories,
            i = void 0 === o ? H : o,
            a = t.mapDispatchToPropsFactories,
            u = void 0 === a ? B : a,
            c = t.mergePropsFactories,
            s = void 0 === c ? A : c,
            l = t.selectorFactory,
            f = void 0 === l ? F : l;
          return function (e, t, n, o) {
            void 0 === o && (o = {});
            var a = o,
              c = a.pure,
              l = void 0 === c || c,
              p = a.areStatesEqual,
              d = void 0 === p ? q : p,
              h = a.areOwnPropsEqual,
              y = void 0 === h ? z : h,
              g = a.areStatePropsEqual,
              m = void 0 === g ? z : g,
              b = a.areMergedPropsEqual,
              O = void 0 === b ? z : b,
              S = w(a, [
                "pure",
                "areStatesEqual",
                "areOwnPropsEqual",
                "areStatePropsEqual",
                "areMergedPropsEqual",
              ]),
              _ = $(e, i, "mapStateToProps"),
              P = $(t, u, "mapDispatchToProps"),
              j = $(n, s, "mergeProps");
            return r(
              f,
              v(
                {
                  methodName: "connect",
                  getDisplayName: function (e) {
                    return "Connect(" + e + ")";
                  },
                  shouldHandleStateChanges: Boolean(e),
                  initMapStateToProps: _,
                  initMapDispatchToProps: P,
                  initMergeProps: j,
                  pure: l,
                  areStatesEqual: d,
                  areOwnPropsEqual: y,
                  areStatePropsEqual: m,
                  areMergedPropsEqual: O,
                },
                S
              )
            );
          };
        }
        const G = X();
        var Y,
          V = i(7196),
          K = i.n(V);
        (Y = V.unstable_batchedUpdates), (d = Y);
        var Z = i(4184),
          Q = i.n(Z),
          J = "INIT_PLE",
          ee = "SIDE_VISIBLE",
          te = "SIDE_ADD_FILES",
          ne = "SIDE_REMOVE_FILES",
          re = "SIDE_UPDATE_SELECTED",
          oe = "SIDE_TOGGLE",
          ie = "SIDE_UPDATE_PROGRESS",
          ae = "GRID_ATTACH_IMAGES",
          ue = "GRID_ATTACH_IMAGE",
          ce = "GRID_ADD_BLOCK",
          se = "GRID_REMOVE_BLOCK",
          le = "GRID_SHUFFLE_BLOCKS",
          fe = "GRID_DUPLICATE_BLOCK",
          pe = "GRID_UPDATE_BLOCKS",
          de = "GRID_ACTIVE_BLOCK",
          he = "GRID_SETTING_UPDATE",
          ye = "GRID_CHANGE_COLOR",
          ge = "CROPPER_OPEN",
          me = "CROPPER_CLOSE";
        var be = i(9968),
          ve = i.n(be),
          we = i(3609),
          Oe = i.n(we);
        function Se() {
          return (
            "ontouchstart" in window ||
            navigator.MaxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
          );
        }
        var _e, Pe;
        (_e = window.getComputedStyle(document.documentElement, "")),
          (Pe = (Array.prototype.slice
            .call(_e)
            .join("")
            .match(/-(moz|webkit|ms)-/) ||
            ("" === _e.OLink && ["", "o"]))[1]),
          "WebKit|Moz|MS|O".match(new RegExp("(" + Pe + ")", "i"))[1],
          "-".concat(Pe, "-"),
          Pe[0].toUpperCase(),
          Pe.substr(1);
        function je(e) {
          return new Promise(function (t) {
            if (e) {
              var n = new Image();
              (n.onload = function (e) {
                t(n);
              }),
                (n.onError = function (e) {
                  t(null);
                }),
                (n.crossOrigin = "Anonymous"),
                (n.src = e);
            } else t(null);
          });
        }
        function ke(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return n
            ? Math.random() * (t - e) + e
            : Math.floor(Math.random() * (t - e + 1)) + e;
        }
        function Ee(e, t) {
          return t > e ? e / t : t / e;
        }
        function xe() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return !(!e || !e.length);
        }
        function Ce(e) {
          return (Ce =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function De(e, t) {
          var n = Oe().Deferred(),
            r = e.length,
            o = 0;
          return (
            (function i() {
              o >= r
                ? n.resolve()
                : t
                ? (function (e, t) {
                    var n = Oe().Deferred(),
                      r = new XMLHttpRequest();
                    if (
                      "function" != typeof FormData &&
                      "object" !==
                        ("undefined" == typeof FormData
                          ? "undefined"
                          : Ce(FormData))
                    )
                      return n.reject("not support browser", t), null;
                    var o = new FormData();
                    return (
                      o.append("files[]", t),
                      r.open("post", e, !0),
                      r.addEventListener("load", function (e) {
                        try {
                          var t = JSON.parse(e.target.responseText);
                          if ("success" !== t.state) throw "server error";
                          n.resolve(t.data);
                        } catch (e) {
                          n.reject(e);
                        }
                      }),
                      r.upload.addEventListener("progress", function (e) {
                        var t = e.loaded,
                          r = e.total;
                        n.notify("progress", t, r);
                      }),
                      r.send(o),
                      n.notify("start"),
                      n.promise()
                    );
                  })(t, e[o])
                    .done(function (e) {
                      n.notify("done", { count: o, data: e }), o++, i();
                    })
                    .progress(function (e, t, r) {
                      n.notify(e, "progress" === e && { loaded: t, total: r });
                    })
                    .fail(function (e) {
                      n.reject(e);
                    })
                : (function (e) {
                    var t = Oe().Deferred(),
                      n = new FileReader();
                    return (
                      n.addEventListener("load", function (n) {
                        t.resolve({
                          name: e.name,
                          type: e.type,
                          size: e.size,
                          url: n.target.result,
                        });
                      }),
                      n.addEventListener("error", function (e) {
                        t.reject(e.target);
                      }),
                      n.readAsDataURL(e),
                      t.promise()
                    );
                  })(e[o])
                    .done(function (e) {
                      n.notify("done", { count: o, data: e }), o++, i();
                    })
                    .fail(function () {});
            })(),
            n.promise()
          );
        }
        function Re(e, t, n, r, o) {
          var i = { width: 0, height: 0 };
          switch (e) {
            case "cover":
              t > n
                ? ((i.width = t),
                  (i.height = o * (t / r)),
                  n > i.height && ((i.width = r * (n / o)), (i.height = n)))
                : ((i.width = r * (n / o)),
                  (i.height = n),
                  t > i.width && ((i.width = t), (i.height = o * (t / r))));
              break;
            case "width":
              (i.width = t), (i.height = o * (t / r));
              break;
            case "height":
              (i.width = r * (n / o)), (i.height = n);
              break;
            default:
              (i.width = t), (i.height = n);
          }
          return { width: Math.round(i.width), height: Math.round(i.height) };
        }
        function Te(e, t) {
          if (!e || !t) return null;
          var n = Oe()(e).children(),
            r = [];
          return (
            n.each(function (e, n) {
              var o = Oe()(n),
                i = t[o.data("key")],
                a = i.image;
              a &&
                (a = {
                  src: a.src,
                  position: a.position.split(" "),
                  size: "cover" === a.size ? null : a.size.split(" "),
                }),
                r.push({
                  x: o.position().left,
                  y: o.position().top,
                  width: o.width(),
                  height: o.height(),
                  image: a || null,
                  color: i.color || "rgba(255,255,255,1)",
                });
            }),
            r
          );
        }
        function ze() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return new Promise(function (n) {
            je(e.image ? e.image.src : null).then(function (r) {
              if (r) {
                var o = { width: r.naturalWidth, height: r.naturalHeight },
                  i = {},
                  a = {};
                e.image.size
                  ? ((i = Re(
                      "width",
                      parseInt(e.image.size[0]),
                      0,
                      o.width,
                      o.height
                    )),
                    (a.x = parseInt(e.image.position[0])),
                    (a.y = parseInt(e.image.position[1])))
                  : ((i = Re("cover", e.width, e.height, o.width, o.height)),
                    (a.x = 0.5 * e.width - 0.5 * i.width),
                    (a.y = 0.5 * e.height - 0.5 * i.height)),
                  Ae({
                    image: r,
                    reSampleCount: t.sampling,
                    width: e.width,
                    height: e.height,
                    cx: 0,
                    cy: 0,
                    cw: o.width,
                    ch: o.height,
                    dx: a.x,
                    dy: a.y,
                    dw: i.width,
                    dh: i.height,
                    bgColor: e.color,
                  }).then(function (t) {
                    n({
                      width: e.width,
                      height: e.height,
                      x: e.x,
                      y: e.y,
                      image: t,
                    });
                  });
              } else
                n({
                  width: e.width,
                  height: e.height,
                  x: e.x,
                  y: e.y,
                  color: e.color,
                  image: new He(e.width, e.height, e.color),
                });
            });
          });
        }
        function Me(e, t) {
          return new Promise(function (n) {
            e.ctx.drawImage(t.image.el, t.x, t.y, t.width, t.height),
              n(t.image.el);
          });
        }
        function Ne() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0.75;
          switch (t) {
            case "png":
              t = "image/png";
              break;
            case "jpg":
            default:
              t = "image/jpeg";
          }
          return e.toDataURL(t, "image/jpeg" === t ? n : void 0);
        }
        function Ie(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = Oe().Deferred(),
            o = Te(e, t.grid),
            i = 0,
            a = o.length,
            u = new He(e.offsetWidth, e.offsetHeight, t.setting.bgColor);
          function c(e) {
            return new Promise(function (t, r) {
              ze(e, n).then(function (e) {
                Me(u, e).then(t, r);
              }, r);
            });
          }
          function s(e) {
            o.splice(0, 1),
              r.notify(a, i++, e),
              o.length ? c(o[0]).then(s, l) : f();
          }
          function l(e) {
            r.reject(e);
          }
          function f() {
            switch (n.output) {
              case "base64":
                r.resolve(Ne(u.el, n.format, n.quality));
                break;
              case "canvas":
              default:
                r.resolve(u.el);
            }
          }
          return (
            r.notify(a, i++, null),
            o.length ? c(o[0]).then(s, l) : l("not found queue"),
            r.promise()
          );
        }
        function Be(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var He = function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 150,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 100,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "#ffffff";
            Be(this, e),
              (this.el = document.createElement("canvas")),
              (this.ctx = this.el.getContext("2d")),
              (this.el.width = t),
              (this.el.height = n),
              (this.ctx.fillStyle = r),
              this.ctx.fillRect(0, 0, t, n);
          },
          Le = {
            image: null,
            width: 100,
            height: 100,
            reSampleCount: 1,
            bgColor: "rgba(255,255,255,1)",
            cw: 0,
            ch: 0,
            cx: 0,
            cy: 0,
            dw: 0,
            dh: 0,
            dx: 0,
            dy: 0,
          };
        function Ae(e) {
          return (
            (e = Object.assign({}, Le, e)),
            new Promise(function (t, n) {
              e.image || n("not found image"),
                (e.reSampleCount = Math.min(4, e.reSampleCount)),
                (e.reSampleCount = Math.max(0, e.reSampleCount));
              var r = Math.pow(2, e.reSampleCount),
                o = new He(e.width * r, e.height * r, e.bgColor);
              o.ctx.drawImage(
                e.image,
                e.cx,
                e.cy,
                e.cw,
                e.ch,
                e.dx * r,
                e.dy * r,
                e.dw * r,
                e.dh * r
              ),
                e.reSampleCount > 0
                  ? (function (e, t, n) {
                      return new Promise(function (r) {
                        !(function t(n, o) {
                          var i = Math.pow(2, n),
                            a = new He(e.width * i, e.height * i, e.bgColor);
                          a.ctx.drawImage(
                            o.el,
                            0,
                            0,
                            0.5 * o.el.width,
                            0.5 * o.el.height
                          ),
                            n > 0 ? t(n - 1, a) : r(a);
                        })(t - 1, n);
                      });
                    })(e, e.reSampleCount, o).then(t)
                  : t(o);
            })
          );
        }
        function We(e) {
          return (We =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ue(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Fe(e, t) {
          return (Fe =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function $e(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Xe(e);
            if (t) {
              var o = Xe(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return qe(this, n);
          };
        }
        function qe(e, t) {
          return !t || ("object" !== We(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Xe(e) {
          return (Xe = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var Ge = {
            start: Se() ? "touchstart" : "mousedown",
            move: Se() ? "touchmove" : "mousemove",
            end: Se() ? "touchend" : "mouseup",
          },
          Ye = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Fe(e, t);
            })(a, e);
            var n,
              r,
              o,
              i = $e(a);
            function a(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, a),
                ((t = i.call(this, e)).state = {
                  position: e.position,
                  size: e.size,
                  isCover: "cover" === e.size,
                }),
                (t._self = null),
                (t.$self = null),
                (t.$img = null),
                (t.moveStartInfo = {}),
                (t.resizeStartInfo = {}),
                t
              );
            }
            return (
              (n = a),
              (o = [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = {};
                    return (
                      t.size !== e.size &&
                        (n = { size: e.size, isCover: "cover" === e.size }),
                      t.position !== e.position && (n.position = e.position),
                      n
                    );
                  },
                },
              ]),
              (r = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.$self = Oe()(K().findDOMNode(this._self));
                  },
                },
                {
                  key: "_moveStart",
                  value: function (e) {
                    var t = this;
                    e.stopPropagation();
                    var n = this.state;
                    (this.$img = this.$self.find("img")),
                      (this.moveStartInfo = {
                        containerX: parseInt(n.position.split(" ")[0]),
                        containerY: parseInt(n.position.split(" ")[1]),
                        mouseX:
                          (e.clientX ||
                            e.pageX ||
                            e.nativeEvent.touches[0].clientX) +
                          Oe()(window).scrollLeft(),
                        mouseY:
                          (e.clientY ||
                            e.pageY ||
                            e.nativeEvent.touches[0].clientY) +
                          Oe()(window).scrollTop(),
                      }),
                      Oe()(document)
                        .on("".concat(Ge.move, ".move"), function (e) {
                          return t._moveIng(e);
                        })
                        .on("".concat(Ge.end, ".move"), function (e) {
                          return t._moveEnd(e);
                        });
                  },
                },
                {
                  key: "_moveIng",
                  value: function (e) {
                    e.stopPropagation();
                    var t =
                        "touchmove" === e.type ? e.originalEvent.touches[0] : e,
                      n = {},
                      r = {};
                    (n.x = (t.clientX || t.pageX) + Oe()(window).scrollLeft()),
                      (n.y = (t.clientY || t.pageY) + Oe()(window).scrollTop()),
                      (r.x =
                        this.moveStartInfo.containerX +
                        (n.x - this.moveStartInfo.mouseX)),
                      (r.y =
                        this.moveStartInfo.containerY +
                        (n.y - this.moveStartInfo.mouseY)),
                      this._update({
                        position: ""
                          .concat(parseInt(r.x), "px ")
                          .concat(parseInt(r.y), "px"),
                      });
                  },
                },
                {
                  key: "_moveEnd",
                  value: function (e) {
                    e.preventDefault(),
                      (this.$img = null),
                      (this.moveStartInfo = null),
                      Oe()(document)
                        .off("".concat(Ge.move, ".move"))
                        .off("".concat(Ge.end, ".move"));
                  },
                },
                {
                  key: "_resizeStart",
                  value: function (e) {
                    var t = this;
                    e.stopPropagation();
                    var n = this.state;
                    (this.$img = this.$self.find("img")),
                      (this.resizeStartInfo = {
                        title: e.currentTarget.title,
                        width: this.$img.width(),
                        height: this.$img.height(),
                        mouseX:
                          (e.clientX ||
                            e.pageX ||
                            e.nativeEvent.touches[0].clientX) +
                          Oe()(window).scrollLeft(),
                        posX: parseInt(n.position.split(" ")[0]),
                        posY: parseInt(n.position.split(" ")[1]),
                      }),
                      Oe()(document)
                        .on("".concat(Ge.move, ".resize"), function (e) {
                          return t._resizeIng(e);
                        })
                        .on("".concat(Ge.end, ".resize"), function (e) {
                          return t._resizeEnd(e);
                        });
                  },
                },
                {
                  key: "_resizeIng",
                  value: function (e) {
                    e.stopPropagation();
                    var t = {},
                      n = {},
                      r = 1,
                      o = 0,
                      i =
                        "touchmove" === e.type ? e.originalEvent.touches[0] : e,
                      a =
                        (i.clientX || i.pageX) +
                        Oe()(window).scrollLeft() -
                        this.resizeStartInfo.mouseX;
                    switch (this.resizeStartInfo.title) {
                      case "resize-lt":
                        (n.x = this.resizeStartInfo.posX + a),
                          (t.width = this.resizeStartInfo.width - a),
                          (r = t.width / this.$img.get(0).naturalWidth),
                          (t.height =
                            parseInt(this.$img.get(0).naturalHeight) * r),
                          (o = this.resizeStartInfo.height - t.height),
                          (n.y = this.resizeStartInfo.posY + o);
                        break;
                      case "resize-rt":
                        (n.x = this.resizeStartInfo.posX),
                          (t.width = this.resizeStartInfo.width + a),
                          (r = t.width / this.$img.get(0).naturalWidth),
                          (t.height =
                            parseInt(this.$img.get(0).naturalHeight) * r),
                          (o = this.resizeStartInfo.height - t.height),
                          (n.y = this.resizeStartInfo.posY + o);
                        break;
                      case "resize-lb":
                        (n.x = this.resizeStartInfo.posX + a),
                          (n.y = this.resizeStartInfo.posY),
                          (t.width = this.resizeStartInfo.width - a),
                          (r = t.width / this.$img.get(0).naturalWidth),
                          (t.height =
                            parseInt(this.$img.get(0).naturalHeight) * r);
                        break;
                      case "resize-rb":
                        (n.x = this.resizeStartInfo.posX),
                          (n.y = this.resizeStartInfo.posY),
                          (t.width = this.resizeStartInfo.width + a),
                          (r = t.width / this.$img.get(0).naturalWidth),
                          (t.height =
                            parseInt(this.$img.get(0).naturalHeight) * r);
                        break;
                      default:
                        return;
                    }
                    this._update({
                      size: ""
                        .concat(parseInt(t.width), "px ")
                        .concat(parseInt(t.height), "px"),
                      position: ""
                        .concat(parseInt(n.x), "px ")
                        .concat(parseInt(n.y), "px"),
                    });
                  },
                },
                {
                  key: "_resizeEnd",
                  value: function (e) {
                    (this.$img = null),
                      (this.resizeStartInfo = null),
                      Oe()(document)
                        .off("".concat(Ge.move, ".resize"))
                        .off("".concat(Ge.end, ".resize"));
                  },
                },
                {
                  key: "_update",
                  value: function (e) {
                    this.props.onUpdateBlock(e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      n = this.state,
                      r = this.props,
                      o = "cover" !== n.size ? n.size.split(" ") : n.size,
                      i = n.position.split(" ");
                    return t().createElement(
                      "figure",
                      {
                        ref: function (t) {
                          e._self = t;
                        },
                        style: { backgroundColor: r.bgColor },
                        className: "ple-cropperBlock ple-cropper__block",
                      },
                      n.isCover
                        ? t().createElement("span", {
                            style: {
                              backgroundImage: "url('".concat(r.src, "')"),
                            },
                            className:
                              "ple-cropperBlock__image ple-cropperBlock__image-cover",
                          })
                        : t().createElement(
                            "span",
                            {
                              className: Q()("ple-cropperBlock__image", {
                                "ple-cropperBlock__image-resize":
                                  "cover" !== r.size,
                              }),
                            },
                            t().createElement("img", {
                              src: r.src,
                              style: Object.assign(
                                {},
                                "cover" !== n.size && {
                                  width: o[0],
                                  transform: "translate("
                                    .concat(i[0], ", ")
                                    .concat(i[1], ")"),
                                }
                              ),
                              alt: "image",
                            })
                          ),
                      t().createElement(
                        "div",
                        {
                          onMouseDown: function (t) {
                            return e._moveStart(t);
                          },
                          onTouchStart: function (t) {
                            return e._moveStart(t);
                          },
                          style: Object.assign(
                            {},
                            "cover" !== n.size && {
                              width: o[0],
                              height: o[1],
                              transform: "translate("
                                .concat(i[0], ", ")
                                .concat(i[1], ")"),
                            }
                          ),
                          className: Q()("ple-cropperBlock__control", {
                            "ple-cropperBlock__control-active":
                              "cover" !== r.size,
                          }),
                        },
                        t().createElement(
                          "button",
                          {
                            type: "button",
                            title: "resize-lt",
                            onMouseDown: function (t) {
                              return e._resizeStart(t);
                            },
                            onTouchStart: function (t) {
                              return e._resizeStart(t);
                            },
                            className:
                              "ple-cropperBlock__resize ple-cropperBlock__resize-lt",
                          },
                          t().createElement("i", {
                            className: "ple-sp-ico ple-abs ple-ico-clamp",
                          })
                        ),
                        t().createElement(
                          "button",
                          {
                            type: "button",
                            title: "resize-rt",
                            onMouseDown: function (t) {
                              return e._resizeStart(t);
                            },
                            onTouchStart: function (t) {
                              return e._resizeStart(t);
                            },
                            className:
                              "ple-cropperBlock__resize ple-cropperBlock__resize-rt",
                          },
                          t().createElement("i", {
                            className: "ple-sp-ico ple-abs ple-ico-clamp",
                          })
                        ),
                        t().createElement(
                          "button",
                          {
                            type: "button",
                            title: "resize-lb",
                            onMouseDown: function (t) {
                              return e._resizeStart(t);
                            },
                            onTouchStart: function (t) {
                              return e._resizeStart(t);
                            },
                            className:
                              "ple-cropperBlock__resize ple-cropperBlock__resize-lb",
                          },
                          t().createElement("i", {
                            className: "ple-sp-ico ple-abs ple-ico-clamp",
                          })
                        ),
                        t().createElement(
                          "button",
                          {
                            type: "button",
                            title: "resize-rb",
                            onMouseDown: function (t) {
                              return e._resizeStart(t);
                            },
                            onTouchStart: function (t) {
                              return e._resizeStart(t);
                            },
                            className:
                              "ple-cropperBlock__resize ple-cropperBlock__resize-rb",
                          },
                          t().createElement("i", {
                            className: "ple-sp-ico ple-abs ple-ico-clamp",
                          })
                        )
                      )
                    );
                  },
                },
              ]) && Ue(n.prototype, r),
              o && Ue(n, o),
              a
            );
          })(t().Component);
        (Ye.displayName = "Block"),
          (Ye.defaultProps = {
            src: "",
            position: "",
            size: "",
            bgColor: "#fff",
          });
        const Ve = Ye;
        function Ke(e) {
          return (Ke =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ze(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Qe(e, t) {
          return (Qe =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function Je(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = tt(e);
            if (t) {
              var o = tt(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return et(this, n);
          };
        }
        function et(e, t) {
          return !t || ("object" !== Ke(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function tt(e) {
          return (tt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var nt = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Qe(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = Je(a);
          function a(e) {
            var t;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
              (t = i.call(this, e));
            var n = e.tree.cropper;
            return (
              (t.imageMeta = null),
              (t._block = null),
              (t.$item = Oe()(e.element)
                .find(".react-grid-item")
                .filter("[data-key=".concat(n.key, "]"))),
              (t.state = {
                pending: !0,
                position: n.item.image.position,
                size: n.item.image.size || "cover",
                width: t.$item.width(),
                height: t.$item.height(),
                top: t.$item.position().top,
                left: t.$item.position().left,
              }),
              t
            );
          }
          return (
            (n = a),
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props.tree.cropper;
                  ((e = n.item.image.src),
                  new Promise(function (t, n) {
                    (e && "string" == typeof e) || n();
                    var r = document.createElement("img");
                    (r.onload = function () {
                      t({
                        width: r.naturalWidth,
                        height: r.naturalHeight,
                        ratio: r.naturalHeight / r.naturalWidth,
                      });
                    }),
                      (r.onerror = function () {
                        n();
                      }),
                      (r.src = e);
                  })).then(function (e) {
                    (t.imageMeta = e), t.setState({ pending: !1 });
                  });
                },
              },
              {
                key: "_onClose",
                value: function () {
                  var e = this.props;
                  e.api.cropper.close(
                    e.tree.cropper.key,
                    this._block.state.position,
                    this._block.state.size
                  );
                },
              },
              {
                key: "_toggleImageType",
                value: function () {
                  var e = this.state;
                  if ((this.props, "cover" === e.size)) {
                    var t = "",
                      n = 0;
                    e.height > e.width
                      ? ((n = Ee(e.height, this.imageMeta.height)),
                        (t = ""
                          .concat(parseInt(this.imageMeta.width * n), "px ")
                          .concat(e.height, "px")))
                      : ((n = Ee(e.width, this.imageMeta.width)),
                        (t = ""
                          .concat(e.width, "px ")
                          .concat(parseInt(this.imageMeta.height * n), "px"))),
                      this.setState({ position: "0 0", size: t });
                  } else this.setState({ position: "50% 50%", size: "cover" });
                },
              },
              {
                key: "onUpdateBlock",
                value: function (e) {
                  this.setState(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.state,
                    r = this.props;
                  return n.pending
                    ? null
                    : t().createElement(
                        "div",
                        { className: "ple-cropper" },
                        t().createElement("span", {
                          className: "ple-cropper__bg",
                        }),
                        t().createElement(
                          "div",
                          {
                            style: {
                              width: "".concat(n.width, "px"),
                              height: "".concat(n.height, "px"),
                              top: "".concat(n.top, "px"),
                              left: "".concat(n.left, "px"),
                            },
                            className: "ple-cropper__wrap",
                          },
                          t().createElement(Ve, {
                            ref: function (t) {
                              e._block = t;
                            },
                            src: r.tree.cropper.item.image.src,
                            position: n.position,
                            size: n.size,
                            bgColor:
                              r.tree.cropper.item.color ||
                              r.setting.body.blockColor,
                            onUpdateBlock: function (t) {
                              return e.onUpdateBlock(t);
                            },
                          }),
                          t().createElement(
                            "nav",
                            { className: "ple-cropper__nav" },
                            t().createElement(
                              "button",
                              {
                                type: "button",
                                onClick: function () {
                                  return e._onClose();
                                },
                              },
                              t().createElement(
                                "i",
                                {
                                  className: "ple-sp-ico ple-ico-close ple-abs",
                                },
                                "Close cropper"
                              )
                            ),
                            t().createElement(
                              "button",
                              {
                                type: "button",
                                onClick: function () {
                                  return e._toggleImageType();
                                },
                                className: Q()({
                                  "ple-cropper__nav-active": "cover" !== n.size,
                                }),
                              },
                              t().createElement(
                                "i",
                                {
                                  className:
                                    "ple-sp-ico ple-ico-resize ple-abs",
                                },
                                "Toggle background size type"
                              )
                            )
                          )
                        )
                      );
                },
              },
            ]) && Ze(n.prototype, r),
            o && Ze(n, o),
            a
          );
        })(t().Component);
        nt.displayName = "Cropper";
        const rt = G(function (e) {
          return Object.assign({}, e, {});
        })(nt);
        function ot(e) {
          return { type: ce, value: e };
        }
        function it(e) {
          return { type: se, keys: e };
        }
        function at(e) {
          return { type: le, value: e };
        }
        function ut(e) {
          return { type: fe, keys: e };
        }
        function ct(e) {
          return { type: pe, value: e };
        }
        function st(e) {
          return { type: de, value: e };
        }
        function lt(e) {
          return { type: he, value: e };
        }
        function ft(e, t, n) {
          return { type: ae, value: e, columns: t, activeBlocks: n };
        }
        function pt(e, t) {
          return { type: ue, keys: e, image: t };
        }
        function dt(e) {
          return (dt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function ht(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function yt(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ht(Object(n), !0).forEach(function (t) {
                  gt(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ht(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function gt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function mt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function bt(e, t) {
          return (bt =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function vt(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Ot(e);
            if (t) {
              var o = Ot(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return wt(this, n);
          };
        }
        function wt(e, t) {
          return !t || ("object" !== dt(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Ot(e) {
          return (Ot = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var St = [],
          _t = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && bt(e, t);
            })(a, e);
            var n,
              r,
              o,
              i = vt(a);
            function a(e) {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, a),
                i.call(this, e)
              );
            }
            return (
              (n = a),
              (r = [
                {
                  key: "_selectBlock",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t = this.props;
                    if (null !== e) {
                      switch (t.keyboard.keyName) {
                        case "CMD":
                        case "CTRL":
                        case "SHIFT":
                          if (xe(t.tree.body.activeBlock)) {
                            var n = Object.assign([], t.tree.body.activeBlock);
                            return (
                              n.indexOf(e) > -1
                                ? n.splice(n.indexOf(e), 1)
                                : n.push(e),
                              void t.api.grid.select(n)
                            );
                          }
                      }
                      t.api.grid.select([e]);
                    } else t.api.grid.select([]);
                  },
                },
                {
                  key: "_updateBlocks",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n = this.props;
                    function r() {
                      for (var e = {}, n = 0; n < t.length; n++)
                        e[t[n].i.split("__")[1]] = t[n];
                      return e;
                    }
                    switch (e) {
                      case "start":
                        St[0] = new Date().getTime();
                        break;
                      case "end":
                        if (
                          ((St[1] = new Date().getTime()), St[1] - St[0] > 400)
                        ) {
                          var o = r(),
                            i = {};
                          Object.keys(n.tree.body.grid).forEach(function (e) {
                            i[e] = yt(
                              yt({}, n.tree.body.grid[e]),
                              {},
                              {
                                layout: {
                                  x: o[e].x,
                                  y: o[e].y,
                                  w: o[e].w,
                                  h: o[e].h,
                                },
                              }
                            );
                          }),
                            n.dispatch(ct(i));
                        }
                        St = [];
                    }
                  },
                },
                {
                  key: "renderItem",
                  value: function (e) {
                    var n = this,
                      r = this.props,
                      o = r.tree.body,
                      i = o.activeBlock,
                      a = o.grid[e],
                      u = "".concat(a.indexPrefix, "__").concat(e),
                      c = !!(i && i.length && i.indexOf(e) > -1);
                    return t().createElement(
                      "div",
                      {
                        key: u,
                        "data-grid": a.layout,
                        "data-key": e,
                        onClick: function (t) {
                          t.stopPropagation(), n._selectBlock(e, !!a.image);
                        },
                        style: {
                          backgroundColor: a.color || r.setting.body.blockColor,
                        },
                        className: Q()({ "ple-grid__item-active": c }),
                      },
                      a.image &&
                        t().createElement("figure", {
                          style: {
                            backgroundImage: "url('".concat(a.image.src, "')"),
                            backgroundPosition: a.image.position,
                            backgroundSize: a.image.size,
                          },
                        })
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      n = this.props,
                      r = n.tree.body.setting,
                      o =
                        r.width * r.column +
                        r.innerMargin * (r.column - 1) +
                        2 * r.outerMargin;
                    return t().createElement(
                      "div",
                      {
                        className: "ple-grid__wrap",
                        onClick: function () {
                          return e._selectBlock();
                        },
                      },
                      t().createElement(
                        "div",
                        {
                          className: "ple-grid__body",
                          style: { width: "".concat(o, "px") },
                        },
                        t().createElement(
                          ve(),
                          {
                            autoSize: !0,
                            cols: r.column,
                            rowHeight: r.height,
                            width: o,
                            margin: [r.innerMargin, r.innerMargin],
                            containerPadding: [r.outerMargin, r.outerMargin],
                            onDragStart: function () {
                              return e._updateBlocks("start");
                            },
                            onDragStop: function (t, n, r, o, i, a) {
                              return e._updateBlocks("end", t, a);
                            },
                            onResizeStart: function () {
                              return e._updateBlocks("start");
                            },
                            onResizeStop: function (t, n, r, o, i, a) {
                              return e._updateBlocks("end", t, a);
                            },
                            style: {
                              width: "100%",
                              backgroundColor: r.bgColor,
                            },
                            className: "ple-grid",
                          },
                          Object.keys(n.tree.body.grid).map(function (t) {
                            return e.renderItem(t);
                          })
                        ),
                        n.tree.cropper.visible
                          ? t().createElement(rt, null)
                          : null
                      )
                    );
                  },
                },
              ]) && mt(n.prototype, r),
              o && mt(n, o),
              a
            );
          })(t().Component);
        (_t.displayName = "GridLayout"),
          (_t.defaultProps = { tree: null, dispatch: null });
        const Pt = G(function (e) {
          return Object.assign({}, e, {});
        })(_t);
        var jt = i(6617);
        const kt = function (e) {
          return t().createElement(
            "div",
            { className: Q()("ple-toolbar__block", e.className) },
            t().createElement(
              "button",
              { type: "button", title: e.title, onClick: e.onClick },
              t().createElement(
                "i",
                { className: Q()("ple-sp-ico", "ple-abs", e.iconClass) },
                e.title
              )
            ),
            !!e.children &&
              t().createElement(
                "div",
                { className: "ple-toolbar__pop" },
                e.children
              )
          );
        };
        function Et(e) {
          return (Et =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function xt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Ct(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? xt(Object(n), !0).forEach(function (t) {
                  Dt(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : xt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Dt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Rt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Tt(e, t) {
          return (Tt =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function zt(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Nt(e);
            if (t) {
              var o = Nt(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return Mt(this, n);
          };
        }
        function Mt(e, t) {
          return !t || ("object" !== Et(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Nt(e) {
          return (Nt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var It = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Tt(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = zt(a);
          function a(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((t = i.call(this, e)).state = Ct(
                Ct(Ct({}, e.defaultSetting), e.setting),
                {},
                { popup_bgColor: !1 }
              )),
              t
            );
          }
          return (
            (n = a),
            (r = [
              {
                key: "activeBgColorPopup",
                value: function (e, t) {
                  var n = this,
                    r = this.state,
                    o = t ? t.currentTarget : null;
                  (e = e || !r.popup_bgColor)
                    ? Oe()(document).on("click.pleEditBgColor", function (e) {
                        Oe()(e.target).closest(".ple-edit-bgColor__popup")
                          .length ||
                          (e.target !== o &&
                            e.target.parentNode !== o &&
                            n.activeBgColorPopup(!1));
                      })
                    : Oe()(document).off("click.pleEditBgColor"),
                    this.setState({ popup_bgColor: e });
                },
              },
              {
                key: "_submit",
                value: function (e) {
                  e.preventDefault(), this.props.submit(this.state);
                },
              },
              {
                key: "_reset",
                value: function () {
                  this.setState(Ct({}, this.props.defaultSetting));
                },
              },
              {
                key: "_change",
                value: function (e) {
                  var t = e.target.value || "";
                  switch (e.target.type) {
                    case "text":
                      this.setState(Dt({}, e.target.name, t));
                      break;
                    case "number":
                      (t = t || 0),
                        this.setState(Dt({}, e.target.name, parseInt(t)));
                  }
                },
              },
              {
                key: "_openBgColorPicker",
                value: function (e) {
                  e.persist(), this.activeBgColorPopup(null, e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.state;
                  return (
                    this.props,
                    t().createElement(
                      "form",
                      {
                        onSubmit: function (t) {
                          return e._submit(t);
                        },
                        className: "ple-edit-setting",
                      },
                      t().createElement(
                        "fieldset",
                        { className: "ple-edit-setting__form" },
                        t().createElement("legend", null, "Settings form"),
                        t().createElement(
                          "h1",
                          { className: "ple-edit-setting__title" },
                          "Settings"
                        ),
                        t().createElement(
                          "dl",
                          null,
                          t().createElement(
                            "dt",
                            null,
                            t().createElement(
                              "label",
                              { htmlFor: "frm_width" },
                              "Width"
                            )
                          ),
                          t().createElement(
                            "dd",
                            { className: "ple-type-input" },
                            t().createElement("input", {
                              type: "number",
                              name: "width",
                              id: "frm_width",
                              min: 1,
                              max: 999,
                              maxLength: 3,
                              value: n.width,
                              onChange: function (t) {
                                return e._change(t);
                              },
                              style: { width: "72px" },
                              required: !0,
                            }),
                            t().createElement("span", null, "px")
                          )
                        ),
                        t().createElement(
                          "dl",
                          null,
                          t().createElement(
                            "dt",
                            null,
                            t().createElement(
                              "label",
                              { htmlFor: "frm_height" },
                              "Height"
                            )
                          ),
                          t().createElement(
                            "dd",
                            { className: "ple-type-input" },
                            t().createElement("input", {
                              type: "number",
                              name: "height",
                              id: "frm_height",
                              min: 1,
                              max: 999,
                              value: n.height,
                              onChange: function (t) {
                                return e._change(t);
                              },
                              style: { width: "72px" },
                              required: !0,
                            }),
                            t().createElement("span", null, "px")
                          )
                        ),
                        t().createElement(
                          "dl",
                          null,
                          t().createElement(
                            "dt",
                            null,
                            t().createElement(
                              "label",
                              { htmlFor: "frm_column" },
                              "Column"
                            )
                          ),
                          t().createElement(
                            "dd",
                            { className: "ple-type-input" },
                            t().createElement("input", {
                              type: "number",
                              name: "column",
                              id: "frm_column",
                              min: 1,
                              max: 99,
                              value: n.column,
                              onChange: function (t) {
                                return e._change(t);
                              },
                              style: { width: "54px" },
                              required: !0,
                            }),
                            t().createElement("span", null, "ea")
                          )
                        ),
                        t().createElement(
                          "dl",
                          { className: "ple-type-input" },
                          t().createElement(
                            "dt",
                            null,
                            t().createElement(
                              "label",
                              { htmlFor: "frm_outerMargin" },
                              "Outer margin"
                            )
                          ),
                          t().createElement(
                            "dd",
                            null,
                            t().createElement("input", {
                              type: "number",
                              name: "outerMargin",
                              id: "frm_outerMargin",
                              min: 0,
                              max: 500,
                              value: n.outerMargin,
                              onChange: function (t) {
                                return e._change(t);
                              },
                              style: { width: "58px" },
                              required: !0,
                            }),
                            t().createElement("span", null, "px")
                          )
                        ),
                        t().createElement(
                          "dl",
                          { className: "ple-type-input" },
                          t().createElement(
                            "dt",
                            null,
                            t().createElement(
                              "label",
                              { htmlFor: "frm_innerMargin" },
                              "Inner margin"
                            )
                          ),
                          t().createElement(
                            "dd",
                            null,
                            t().createElement("input", {
                              type: "number",
                              name: "innerMargin",
                              id: "frm_innerMargin",
                              min: 0,
                              max: 500,
                              value: n.innerMargin,
                              onChange: function (t) {
                                return e._change(t);
                              },
                              style: { width: "58px" },
                              required: !0,
                            }),
                            t().createElement("span", null, "px")
                          )
                        ),
                        t().createElement(
                          "dl",
                          null,
                          t().createElement(
                            "dt",
                            null,
                            t().createElement(
                              "label",
                              { htmlFor: "frm_bgColor" },
                              "Bg color"
                            )
                          ),
                          t().createElement(
                            "dd",
                            null,
                            t().createElement(
                              "div",
                              { className: "ple-edit-bgColor" },
                              t().createElement(
                                "span",
                                {
                                  className: Q()("ple-edit-bgColor__inputBox", {
                                    "ple-edit-bgColor__inputBox-active":
                                      n.popup_bgColor,
                                  }),
                                },
                                t().createElement("input", {
                                  type: "text",
                                  name: "bgColor",
                                  id: "frm_bgColor",
                                  value: n.bgColor,
                                  onChange: function (t) {
                                    return e._change(t);
                                  },
                                  onClick: function (t) {
                                    return e._openBgColorPicker(t);
                                  },
                                  readOnly: !0,
                                  required: !0,
                                  className: "ple-edit-bgColor__input",
                                  style: { backgroundColor: n.bgColor },
                                })
                              ),
                              n.popup_bgColor &&
                                t().createElement(
                                  "div",
                                  { className: "ple-edit-bgColor__popup" },
                                  t().createElement(
                                    "div",
                                    { className: "ple-edit-bgColor__picker" },
                                    t().createElement(jt.Z, {
                                      onChange: function (t) {
                                        return e.setState({ bgColor: t });
                                      },
                                      color: n.bgColor,
                                    })
                                  )
                                )
                            )
                          )
                        )
                      ),
                      t().createElement(
                        "nav",
                        { className: "ple-edit-setting__buttons" },
                        t().createElement(
                          "span",
                          null,
                          t().createElement(
                            "button",
                            {
                              type: "button",
                              onClick: function () {
                                return e._reset();
                              },
                            },
                            "Reset"
                          )
                        ),
                        t().createElement(
                          "span",
                          null,
                          t().createElement(
                            "button",
                            { type: "submit", className: "ple-submit" },
                            "Apply"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]) && Rt(n.prototype, r),
            o && Rt(n, o),
            a
          );
        })(t().Component);
        (It.displayName = "EditLayoutSetting"),
          (It.defaultProps = {
            submit: function (e) {},
            setting: null,
            defaultSetting: {
              width: 100,
              height: 100,
              column: 5,
              outerMargin: 10,
              innerMargin: 10,
              bgColor: "rgba(255,255,255,1)",
            },
          });
        const Bt = It;
        function Ht(e) {
          return (Ht =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Lt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function At(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Lt(Object(n), !0).forEach(function (t) {
                  Wt(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Lt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Wt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Ut(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Ft(e, t) {
          return (Ft =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function $t(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Xt(e);
            if (t) {
              var o = Xt(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return qt(this, n);
          };
        }
        function qt(e, t) {
          return !t || ("object" !== Ht(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Xt(e) {
          return (Xt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var Gt = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Ft(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = $t(a);
          function a(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((t = i.call(this, e)).state = {
                active: { setting: !1, editBlockColor: !1 },
                visible: {
                  setting: !0,
                  shuffle: !0,
                  add: !0,
                  select: !0,
                  edit: !1,
                  removeImage: !1,
                  duplicate: !1,
                  removeBlock: !1,
                  editColor: !1,
                },
                activeBlockCount: 0,
              }),
              t
            );
          }
          return (
            (n = a),
            (o = [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  var n = Object.assign({}, t);
                  if (
                    ((n.activeBlockCount = e.tree.body.activeBlock.length),
                    t.activeBlockCount !== e.tree.body.activeBlock.length)
                  ) {
                    var r = !!e.tree.body.activeBlock.length;
                    n.visible = Object.assign({}, n.visible, {
                      edit: !1,
                      removeImage: !1,
                      duplicate: r,
                      removeBlock: r,
                      editColor: r,
                    });
                  }
                  if (e.tree.body.activeBlock[0]) {
                    var o = !1;
                    e.tree.body.activeBlock.some(function (t) {
                      if (e.tree.body.grid[t].image) return (o = !0), !0;
                    });
                    var i = e.tree.body.grid[e.tree.body.activeBlock[0]];
                    n.visible = Object.assign({}, n.visible, {
                      removeImage: o,
                      edit: !(!i || !i.image),
                    });
                  }
                  return At(At({}, t), n);
                },
              },
            ]),
            (r = [
              {
                key: "changeActive",
                value: function (e, t, n) {
                  var r = this,
                    o = this.state,
                    i = t || !o.active[e],
                    a = n ? n.currentTarget : null;
                  i
                    ? Oe()(document).on("click.pleToolbar", function (t) {
                        Oe()(t.target).closest(".ple-toolbar__pop").length ||
                          (t.target !== a &&
                            t.target.parentNode !== a &&
                            r.changeActive(e, !1));
                      })
                    : Oe()(document).off("click.pleToolbar"),
                    this.setState({
                      active: At(
                        At({}, o.active),
                        {},
                        Wt({ setting: !1, editColor: !1 }, e, i)
                      ),
                    });
                },
              },
              {
                key: "deactivate",
                value: function () {
                  var e = this;
                  return (
                    Oe()(document).off("click.pleToolbar"),
                    new Promise(function (t) {
                      e.setState({ active: { setting: !1, editColor: !1 } }, t);
                    })
                  );
                },
              },
              {
                key: "submitEditSetting",
                value: function (e) {
                  var t = this;
                  return (
                    this.props.dispatch(lt(e)),
                    (function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "pleTimer";
                      return new Promise(function (n) {
                        window[t] = setTimeout(n, e);
                      });
                    })(50).then(function () {
                      return t.changeActive("setting", !1);
                    }),
                    !1
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.state,
                    r = this.props,
                    o = "#fff";
                  if (
                    "object" === Ht(r.tree.body.grid) &&
                    xe(r.tree.body.activeBlock)
                  ) {
                    var i = r.tree.body.activeBlock[0];
                    o =
                      r.tree.body.grid[i] && r.tree.body.grid[i].color
                        ? r.tree.body.grid[i].color
                        : r.setting.body.blockColor;
                  }
                  return t().createElement(
                    "nav",
                    { className: "ple-toolbar" },
                    t().createElement(
                      "div",
                      { className: "ple-toolbar__wrap" },
                      n.visible.setting &&
                        t().createElement(
                          kt,
                          {
                            iconClass: "ple-ico-setting",
                            className: Q()("ple-edit-setting", {
                              "ple-toolbar__block-active": n.active.setting,
                            }),
                            onClick: function (t) {
                              t.stopPropagation(),
                                n.active.setting
                                  ? e.changeActive("setting", !1, t)
                                  : e.deactivate().then(function () {
                                      e.changeActive("setting", null, t);
                                    });
                            },
                            title: "Edit preference",
                          },
                          n.active.setting &&
                            t().createElement(Bt, {
                              submit: function (t) {
                                return e.submitEditSetting(t);
                              },
                              setting: r.tree.body.setting,
                              defaultSetting: r.setting.body.setting,
                            })
                        ),
                      n.visible.shuffle &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-arrow-random",
                          onClick: function () {
                            return r.api.grid.shuffle();
                          },
                          title: "Shuffle block",
                        }),
                      n.visible.add &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-plus",
                          onClick: function () {
                            return r.api.grid.add();
                          },
                          title: "Add block",
                        }),
                      n.visible.select &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-select",
                          onClick: function () {
                            return r.api.grid.toggleSelectAll();
                          },
                          title: "Toggle select block",
                        }),
                      n.visible.edit &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-pencil",
                          className: "ple-toolbar__block-key",
                          onClick: function () {
                            return r.api.cropper.open(
                              r.tree.body.activeBlock[0]
                            );
                          },
                          title: "Edit block",
                        }),
                      n.visible.removeImage &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-empty",
                          className: "ple-toolbar__block-key",
                          onClick: function () {
                            return r.api.grid.removeImages(
                              r.tree.body.activeBlock
                            );
                          },
                          title: "Remove image in block",
                        }),
                      n.visible.duplicate &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-duplicate",
                          className: "ple-toolbar__block-key",
                          onClick: function () {
                            null !== r.tree.body.activeBlock
                              ? r.dispatch(ut(r.tree.body.activeBlock))
                              : alert("Not found select block");
                          },
                          title: "Duplicate block",
                        }),
                      n.visible.removeBlock &&
                        t().createElement(kt, {
                          iconClass: "ple-ico-trash",
                          className: "ple-toolbar__block-key",
                          onClick: function () {
                            null !== r.tree.body.activeBlock
                              ? r.api.grid.remove(r.tree.body.activeBlock)
                              : alert("Not found select block");
                          },
                          title: "Remove block",
                        }),
                      n.visible.editColor &&
                        t().createElement(
                          kt,
                          {
                            iconClass: "ple-ico-palette",
                            className: Q()(
                              "ple-edit-color",
                              "ple-toolbar__block-key",
                              {
                                "ple-toolbar__block-active": n.active.editColor,
                              }
                            ),
                            onClick: function (t) {
                              t.stopPropagation(),
                                n.active.editColor
                                  ? e.changeActive("editColor", !1, t)
                                  : e.deactivate().then(function () {
                                      return e.changeActive(
                                        "editColor",
                                        null,
                                        t
                                      );
                                    });
                            },
                            title: "Change color",
                          },
                          t().createElement(
                            "div",
                            { className: "ple-colorPicker__wrap" },
                            t().createElement(jt.Z, {
                              onChange: function (e) {
                                e &&
                                  r.dispatch(
                                    (function (e, t) {
                                      return { type: ye, keys: e, color: t };
                                    })(r.tree.body.activeBlock, e)
                                  );
                              },
                              color: o,
                              className: "ple-colorPicker__body",
                            })
                          )
                        )
                    )
                  );
                },
              },
            ]) && Ut(n.prototype, r),
            o && Ut(n, o),
            a
          );
        })(t().Component);
        (Gt.displayName = "Toolbar"),
          (Gt.defaultProps = { dispatch: null, tree: null });
        const Yt = G(function (e) {
          return Object.assign({}, e, {});
        })(Gt);
        function Vt(e) {
          return (Vt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Kt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Zt(e, t) {
          return (Zt =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function Qt(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = en(e);
            if (t) {
              var o = en(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return Jt(this, n);
          };
        }
        function Jt(e, t) {
          return !t || ("object" !== Vt(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function en(e) {
          return (en = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var tn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Zt(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = Qt(a);
          function a(e) {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              i.call(this, e)
            );
          }
          return (
            (n = a),
            (r = [
              {
                key: "render",
                value: function () {
                  return t().createElement(
                    "div",
                    { className: "ple-container" },
                    t().createElement(
                      "div",
                      { className: "ple-body" },
                      t().createElement(Yt, null),
                      t().createElement(Pt, null)
                    )
                  );
                },
              },
            ]) && Kt(n.prototype, r),
            o && Kt(n, o),
            a
          );
        })(t().Component);
        tn.displayName = "Body";
        const nn = tn;
        function rn(e) {
          return (rn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function on(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function an(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function un(e, t) {
          return (un =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function cn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = ln(e);
            if (t) {
              var o = ln(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return sn(this, n);
          };
        }
        function sn(e, t) {
          return !t || ("object" !== rn(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function ln(e) {
          return (ln = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var fn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && un(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = cn(a);
          function a() {
            return on(this, a), i.apply(this, arguments);
          }
          return (
            (n = a),
            (r = [
              {
                key: "render",
                value: function () {
                  var e = this.props;
                  return t().createElement(
                    "button",
                    {
                      type: "button",
                      onClick: e.onClick,
                      className: "ple-side__toggle",
                    },
                    t().createElement(
                      "span",
                      null,
                      t().createElement(
                        "i",
                        {
                          className: Q()("ple-sp-ico", "ple-abs", {
                            "ple-ico-arrow-right": e.show,
                            "ple-ico-arrow-left": !e.show,
                          }),
                        },
                        "Toggle sidebar"
                      )
                    )
                  );
                },
              },
            ]) && an(n.prototype, r),
            o && an(n, o),
            a
          );
        })(e.Component);
        (fn.displayName = "ToggleSideButton"),
          (fn.defaultProps = { show: !1, onClick: function () {} });
        const pn = fn;
        function dn(e) {
          return (dn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function hn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function yn(e, t) {
          return (yn =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function gn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = bn(e);
            if (t) {
              var o = bn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return mn(this, n);
          };
        }
        function mn(e, t) {
          return !t || ("object" !== dn(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function bn(e) {
          return (bn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var vn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && yn(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = gn(a);
          function a(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((t = i.call(this, e)).comps = { inputFile: null }),
              (t.state = { timestamp: Date.now() }),
              t
            );
          }
          return (
            (n = a),
            (r = [
              {
                key: "upload",
                value: function (e) {
                  this.props.onUpload(e.target.files),
                    this.setState({ timestamp: Date.now() });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props,
                    r = this.state,
                    o = this.comps;
                  return t().createElement(
                    "nav",
                    { className: "ple-sideNavigation ple-side__navigation" },
                    t().createElement(
                      "div",
                      { className: "ple-sideNavigation__wrap" },
                      t().createElement(
                        "button",
                        {
                          type: "button",
                          title: "attach images",
                          onClick: n.onAttach,
                        },
                        t().createElement(
                          "i",
                          { className: "ple-sp-ico ple-ico-reply ple-abs" },
                          "Moving the image to grid block"
                        )
                      ),
                      t().createElement(
                        "button",
                        {
                          type: "button",
                          title: "toggle select",
                          onClick: n.onToggleSelect,
                        },
                        t().createElement(
                          "i",
                          { className: "ple-sp-ico ple-ico-select ple-abs" },
                          "Toggle all select"
                        )
                      ),
                      t().createElement(
                        "span",
                        { title: "upload images", key: r.timestamp },
                        t().createElement("input", {
                          ref: function (e) {
                            o.inputFile = e;
                          },
                          type: "file",
                          onChange: function (t) {
                            return e.upload(t);
                          },
                          multiple: !0,
                        }),
                        t().createElement(
                          "i",
                          { className: "ple-sp-ico ple-ico-upload ple-abs" },
                          "upload images"
                        )
                      ),
                      t().createElement(
                        "button",
                        {
                          type: "button",
                          title: "remove images",
                          onClick: n.onRemove,
                        },
                        t().createElement(
                          "i",
                          { className: "ple-sp-ico ple-ico-trash ple-abs" },
                          "remove images"
                        )
                      )
                    )
                  );
                },
              },
            ]) && hn(n.prototype, r),
            o && hn(n, o),
            a
          );
        })(t().Component);
        (vn.displayName = "Navigation"),
          (vn.defaultProps = {
            onRemove: function () {},
            onToggleSelect: function () {},
            onAttach: function () {},
            onUpload: function () {},
          });
        const wn = vn;
        function On(e) {
          return (On =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Sn() {
          return (Sn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function _n(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function Pn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function jn(e, t) {
          return (jn =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function kn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = xn(e);
            if (t) {
              var o = xn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return En(this, n);
          };
        }
        function En(e, t) {
          return !t || ("object" !== On(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function xn(e) {
          return (xn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var Cn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && jn(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = kn(a);
          function a() {
            return _n(this, a), i.apply(this, arguments);
          }
          return (
            (n = a),
            (r = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = Object.assign(
                      {},
                      Se()
                        ? {
                            onTouchStart: e.onTouchStart,
                            onTouchMove: e.onTouchMove,
                            onTouchEnd: e.onTouchEnd,
                          }
                        : { onDragStart: e.onDragStart, onDragEnd: e.onDragEnd }
                    );
                  return t().createElement(
                    "li",
                    null,
                    t().createElement(
                      "span",
                      Sn(
                        {
                          type: "button",
                          "data-id": e.id,
                          "data-image": e.image,
                          draggable: !0,
                          onClick: e.onClick,
                        },
                        n,
                        {
                          style: {
                            backgroundImage: "url('".concat(e.image, "')"),
                          },
                          className: Q()({
                            "ple-sideItems__item-active": e.active,
                          }),
                        }
                      )
                    )
                  );
                },
              },
            ]) && Pn(n.prototype, r),
            o && Pn(n, o),
            a
          );
        })(t().Component);
        (Cn.displayName = "Item"),
          (Cn.defaultProps = {
            image: null,
            id: null,
            active: null,
            onClick: null,
            onDragStart: null,
            onDragEnd: null,
            onTouchStart: null,
            onTouchMove: null,
            onTouchEnd: null,
          });
        const Dn = Cn;
        function Rn(e) {
          return (Rn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Tn(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function zn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Mn(e, t) {
          return (Mn =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function Nn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Bn(e);
            if (t) {
              var o = Bn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return In(this, n);
          };
        }
        function In(e, t) {
          return !t || ("object" !== Rn(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Bn(e) {
          return (Bn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var Hn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Mn(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = Nn(a);
          function a() {
            return Tn(this, a), i.apply(this, arguments);
          }
          return (
            (n = a),
            (r = [
              {
                key: "render",
                value: function () {
                  var e = this.props;
                  return t().createElement(
                    "div",
                    { className: "ple-sideItems" },
                    t().createElement(
                      "div",
                      { className: "ple-sideItems__wrap" },
                      t().createElement(
                        "ul",
                        null,
                        Object.keys(e.files).map(function (n) {
                          return t().createElement(Dn, {
                            key: n,
                            id: n,
                            image: e.files[n].image,
                            onDragStart: e.onDragStart,
                            onDragEnd: e.onDragEnd,
                            onTouchStart: e.onTouchStart,
                            onTouchMove: e.onTouchMove,
                            onTouchEnd: e.onTouchEnd,
                            onClick: function () {
                              return e.onSelect(parseInt(n));
                            },
                            active: e.files[n].active,
                          });
                        }),
                        null !== e.progress &&
                          t().createElement(
                            "li",
                            { className: "ple-sideItems__loading" },
                            t().createElement(
                              "div",
                              { className: "ple-sideItems__progress" },
                              t().createElement("span", {
                                className: "ple-sideItems__bar",
                                style: { height: "".concat(e.progress, "%") },
                              }),
                              t().createElement(
                                "span",
                                { className: "ple-sideItems__percent" },
                                "".concat(e.progress, "%")
                              )
                            )
                          )
                      )
                    )
                  );
                },
              },
            ]) && zn(n.prototype, r),
            o && zn(n, o),
            a
          );
        })(t().Component);
        (Hn.displayName = "Items"),
          (Hn.defaultProps = {
            files: [],
            onSelect: function (e) {},
            onDragStart: null,
            onDragEnd: null,
            onTouchStart: null,
            onTouchMove: null,
            onTouchEnd: null,
            progress: null,
          });
        const Ln = Hn;
        var An = null;
        const Wn = function (e, t) {
          var n = e.keyboard.keyName,
            r = e.tree.side.files,
            o = null,
            i = !1,
            a = {};
          if ("SHIFT" !== n) {
            var u = null;
            Object.keys(e.tree.side.files).forEach(function (n) {
              var r = e.tree.side.files[n];
              if (parseInt(n) === t) return (u = r), !1;
            }),
              (An = !0 === u.active ? null : t) ||
                !0 !== u.active ||
                (An = u.key);
          }
          switch (n) {
            case "CTRL":
            case "CMD":
              o = "add";
              break;
            case "SHIFT":
              o = "range";
          }
          return (
            Object.keys(r).forEach(function (e) {
              var n = (function (e, t, n, r, o) {
                switch (o) {
                  case "add":
                    return { key: e, active: e === r ? !t.active : t.active };
                  case "range":
                    return (n = n || 0) < r
                      ? { key: e, active: e >= n && e <= r }
                      : { key: e, active: e <= n && e >= r };
                }
                return e === r
                  ? { key: e, active: !t.active }
                  : { key: e, active: !1 };
              })(parseInt(e), r[e], An, t, o);
              n.active && (i = !0), (a[e] = n);
            }),
            i || (An = null),
            a
          );
        };
        function Un(e) {
          return (Un =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Fn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function $n(e, t) {
          return ($n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function qn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Gn(e);
            if (t) {
              var o = Gn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return Xn(this, n);
          };
        }
        function Xn(e, t) {
          return !t || ("object" !== Un(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Gn(e) {
          return (Gn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var Yn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && $n(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = qn(a);
          function a(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((t = i.call(this, e)).dragTarget = null),
              (t.dragPosition = []),
              (t.$gridItems = null),
              (t.$dragItem = null),
              (t.uploading = !1),
              t
            );
          }
          return (
            (n = a),
            (r = [
              {
                key: "getGridsterItem",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = null;
                  return (
                    (this.$gridItems = Oe()(t.element).find(".ple-grid > div")),
                    this.$gridItems.each(function (t, r) {
                      var o = Oe()(r),
                        i = o.offset();
                      if (
                        i.left < e.dragPosition[0] &&
                        i.left + o.width() > e.dragPosition[0] &&
                        i.top < e.dragPosition[1] &&
                        i.top + o.height() > e.dragPosition[1]
                      )
                        return (n = o.data("key")), !1;
                    }),
                    n
                  );
                },
              },
              {
                key: "_selectItem",
                value: function (e) {
                  var t = this.props,
                    n = Wn(t, e);
                  t.api.side.select(n);
                },
              },
              {
                key: "_removeItems",
                value: function () {
                  var e = this.props,
                    t = e.api.side.getKeys("selected");
                  if (t.length)
                    confirm("Do you really want to delete it?") &&
                      e.api.side.remove(t);
                  else {
                    if (!confirm("Delete all?")) return;
                    (t = e.api.side.getKeys("all")), e.api.side.remove(t);
                  }
                },
              },
              {
                key: "_upload",
                value: function (e) {
                  this.props.api.side.upload(e);
                },
              },
              {
                key: "_attach",
                value: function () {
                  try {
                    var e = this.props.api.side.getKeys("selected"),
                      t = this.props.api.side.attachToGrid(e);
                    if (t) throw t;
                  } catch (e) {
                    alert(e.message);
                  }
                },
              },
              {
                key: "_dragStartItem",
                value: function (e) {
                  var t = this,
                    n = this.props;
                  e.dataTransfer.setData("text/plain", null),
                    (this.$gridItems = Oe()(n.element).find(".ple-grid > div")),
                    this.$gridItems
                      .on("dragover", function (e) {
                        e.preventDefault(),
                          Oe()(e.currentTarget).hasClass(
                            "ple-grid__item-hover"
                          ) ||
                            Oe()(e.currentTarget).addClass(
                              "ple-grid__item-hover"
                            );
                      })
                      .on("dragleave", function (e) {
                        e.preventDefault(),
                          Oe()(e.currentTarget).removeClass(
                            "ple-grid__item-hover"
                          );
                      })
                      .on("drop", function (e) {
                        e.preventDefault(),
                          Oe()(e.currentTarget).removeClass(
                            "ple-grid__item-hover"
                          ),
                          (t.dragTarget = Oe()(e.currentTarget).data("key"));
                      });
                },
              },
              {
                key: "_dragEndItem",
                value: function (e) {
                  var t = this.props;
                  this.$gridItems.off(),
                    (this.$gridItems = null),
                    null !== this.dragTarget &&
                      (t.dispatch(
                        pt(this.dragTarget, Oe()(e.currentTarget).data("image"))
                      ),
                      (this.dragTarget = null));
                },
              },
              {
                key: "_touchStartItem",
                value: function (e) {
                  (this.$dragItem = Oe()(e.currentTarget)
                    .clone()
                    .removeAttr("draggable")
                    .addClass("ple-side__placeholder")
                    .width(Oe()(e.currentTarget).width())
                    .height(Oe()(e.currentTarget).height())),
                    Oe()("body").append(this.$dragItem);
                },
              },
              {
                key: "_touchMoveItem",
                value: function (e) {
                  (function (e, t) {
                    if (CSS && CSS.supports) return CSS.supports(e, t);
                  })("touch-action", "pan-y") || e.preventDefault();
                  var t = e.nativeEvent.touches[0];
                  (this.dragPosition = [t.pageX, t.pageY]),
                    this.$dragItem.css({
                      left: t.pageX - 0.5 * this.$dragItem.width(),
                      top: t.pageY - 0.5 * this.$dragItem.height(),
                    });
                },
              },
              {
                key: "_touchEndItem",
                value: function (e) {
                  var t = this.props;
                  if (
                    (this.$dragItem.remove(),
                    (this.$dragItem = null),
                    this.dragPosition.length > 0)
                  ) {
                    if (
                      ((this.dragTarget = this.getGridsterItem()),
                      null === this.dragTarget)
                    )
                      return;
                    t.dispatch(
                      pt(this.dragTarget, Oe()(e.currentTarget).data("image"))
                    ),
                      (this.dragPosition = []);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props;
                  return t().createElement(
                    "aside",
                    { className: "ple-side" },
                    t().createElement(
                      "div",
                      {
                        className: Q()("ple-side__wrap", {
                          "ple-side__wrap-show": n.tree.side.visible,
                        }),
                      },
                      t().createElement("span", {
                        onClick: function () {
                          return n.api.side.toggleSelectAll(!1);
                        },
                        className: "ple-side__background",
                      }),
                      t().createElement(pn, {
                        show: n.tree.side.visible,
                        onClick: function () {
                          return n.api.util.toggleSide(void 0);
                        },
                      }),
                      t().createElement(wn, {
                        onAttach: function () {
                          return e._attach();
                        },
                        onToggleSelect: function () {
                          return n.api.side.toggleSelectAll();
                        },
                        onUpload: function (t) {
                          return e._upload(t);
                        },
                        onRemove: function () {
                          return e._removeItems();
                        },
                      }),
                      t().createElement(Ln, {
                        files: n.tree.side.files,
                        onSelect: function (t) {
                          return e._selectItem(t);
                        },
                        onDragStart: function (t) {
                          return e._dragStartItem(t);
                        },
                        onDragEnd: function (t) {
                          return e._dragEndItem(t);
                        },
                        onTouchStart: function (t) {
                          return e._touchStartItem(t);
                        },
                        onTouchMove: function (t) {
                          return e._touchMoveItem(t);
                        },
                        onTouchEnd: function (t) {
                          return e._touchEndItem(t);
                        },
                        progress: n.tree.side.progressPercent,
                      })
                    )
                  );
                },
              },
            ]) && Fn(n.prototype, r),
            o && Fn(n, o),
            a
          );
        })(t().Component);
        (Yn.displayName = "Side"),
          (Yn.defaultProps = {
            tree: {},
            setting: {},
            api: {},
            dispatch: null,
          });
        const Vn = G(function (e) {
          return Object.assign({}, e);
        })(Yn);
        function Kn(e) {
          return (Kn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Zn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Qn(e, t) {
          return (Qn =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function Jn(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = tr(e);
            if (t) {
              var o = tr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return er(this, n);
          };
        }
        function er(e, t) {
          return !t || ("object" !== Kn(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function tr(e) {
          return (tr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var nr = !1,
          rr = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Qn(e, t);
            })(a, e);
            var n,
              r,
              o,
              i = Jn(a);
            function a(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, a),
                ((t = i.call(this, e)).el = null),
                t
              );
            }
            return (
              (n = a),
              (r = [
                {
                  key: "componentDidUpdate",
                  value: function (e, t, n) {
                    var r = this.props;
                    !r.setting.base.updateStoreFunc ||
                      "function" != typeof r.setting.base.updateStoreFunc ||
                      (e.tree.side.visible === r.tree.side.visible &&
                        e.tree.side.files === r.tree.side.files &&
                        e.tree.body.setting === r.tree.body.setting &&
                        e.tree.body.grid === r.tree.body.grid) ||
                      r.setting.base.updateStoreFunc(),
                      !nr &&
                        r.setting.base.callback.init &&
                        "function" == typeof r.setting.base.callback.init &&
                        (r.setting.base.callback.init(), (nr = !0));
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props;
                    e.dispatch(
                      (function (e, t, n) {
                        return { type: J, api: e, preference: t, element: n };
                      })(
                        e.parent.api,
                        e.parent.preference || { side: {}, body: {} },
                        this.el
                      )
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      n = this.props;
                    return t().createElement(
                      "div",
                      {
                        ref: function (t) {
                          e.el = t;
                        },
                        className: Q()("ple-editor", {
                          "ple-side-active": n.tree.side.visible,
                        }),
                      },
                      n.setting &&
                        t().createElement(
                          "div",
                          { className: "ple-wrap" },
                          t().createElement(nn, null),
                          t().createElement(Vn, null)
                        )
                    );
                  },
                },
              ]) && Zn(n.prototype, r),
              o && Zn(n, o),
              a
            );
          })(t().Component);
        (rr.displayName = "Container"),
          (rr.defaultProps = {
            parent: {},
            dispatch: null,
            tree: {},
            setting: null,
          });
        const or = G(function (e) {
          return Object.assign({}, e, {});
        })(rr);
        function ir(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        var ar = (function () {
            function e() {
              var t = this;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.eventName = "PLE_".concat(Math.round(+new Date() / 1e3))),
                (this.code = null),
                (this.keyName = null),
                (this.names = {
                  17: "CTRL",
                  18: "ALT",
                  91: "CMD",
                  93: "CMD",
                  16: "SHIFT",
                }),
                Oe()(window).on(
                  "keydown.".concat(this.eventName),
                  function (e) {
                    return t._keyDown(e);
                  }
                );
            }
            var t, n, r;
            return (
              (t = e),
              (n = [
                {
                  key: "apply",
                  value: function (e) {
                    (this.code = e),
                      (this.keyName = this.names[this.code] || null);
                  },
                },
                {
                  key: "_keyDown",
                  value: function (e) {
                    var t = this;
                    this.apply(e.keyCode),
                      Oe()(window)
                        .on("keyup.".concat(this.eventName), function () {
                          return t._keyUp();
                        })
                        .on("contextmenu.".concat(this.eventName), function () {
                          return t._keyUp();
                        })
                        .on("blur.".concat(this.eventName), function () {
                          return t._keyUp();
                        })
                        .off("keydown.".concat(this.eventName));
                  },
                },
                {
                  key: "_keyUp",
                  value: function () {
                    var e = this;
                    this.apply(null),
                      Oe()(window)
                        .on("keydown.".concat(this.eventName), function (t) {
                          return e._keyDown(t);
                        })
                        .off(
                          "contextmenu."
                            .concat(this.eventName, " keyup.")
                            .concat(this.eventName, " blur.")
                            .concat(this.eventName)
                        );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    Oe()(window).off(
                      "keydown."
                        .concat(this.eventName, " contextmenu.")
                        .concat(this.eventName, " keyup.")
                        .concat(this.eventName, " blur.")
                        .concat(this.eventName)
                    );
                  },
                },
              ]) && ir(t.prototype, n),
              r && ir(t, r),
              e
            );
          })(),
          ur = {
            base: {
              uploadScript: null,
              uploadParamsConvertFunc: null,
              updateStoreFunc: null,
              callback: {},
            },
            body: {
              setting: {
                width: 100,
                height: 100,
                column: 5,
                outerMargin: 10,
                innerMargin: 10,
                bgColor: "rgba(255,255,255,1)",
              },
              blockColor: "rgba(211,211,211,1)",
              grid: [],
            },
            side: { files: [], visible: !0 },
          },
          cr = { files: {}, visible: !0, progressPercent: null };
        function sr(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function lr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? sr(Object(n), !0).forEach(function (t) {
                  fr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : sr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function fr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function pr(e) {
          return (pr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function dr(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function hr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? dr(Object(n), !0).forEach(function (t) {
                  yr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : dr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function yr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var gr = 0,
          mr = 0;
        function br(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function vr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? br(Object(n), !0).forEach(function (t) {
                  wr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : br(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function wr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var Or = 0;
        const Sr = l({
          setting: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch ((Object.assign({}, e), t.type)) {
              case J:
                return Object.assign(
                  {},
                  {
                    base: lr(
                      lr({}, ur.base),
                      {},
                      {
                        uploadScript:
                          t.preference.uploadScript || ur.base.uploadScript,
                        uploadParamsConvertFunc:
                          t.preference.uploadParamsConvertFunc ||
                          ur.base.uploadParamsConvertFunc,
                        updateStoreFunc:
                          t.preference.updateStoreFunc ||
                          ur.base.updateStoreFunc,
                        callback: t.preference.callback || ur.base.callback,
                      }
                    ),
                    side: lr(lr({}, ur.side), t.preference.side),
                    body: lr(lr({}, ur.body), t.preference.body),
                  }
                );
              default:
                return e;
            }
          },
          api: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case J:
                return t.api;
              default:
                return e;
            }
          },
          keyboard: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case J:
                return new ar();
              default:
                return e;
            }
          },
          element: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case J:
                return t.element;
              default:
                return e;
            }
          },
          tree: l({
            side: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : cr,
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = Object.assign({}, e),
                r = {};
              switch (t.type) {
                case J:
                  try {
                    return (
                      t.preference.side.files.forEach(function (e) {
                        r[Or++] = { image: e, active: !1 };
                      }),
                      vr(
                        vr(vr({}, e), t.preference.side),
                        {},
                        { files: vr(vr({}, e.files), r) }
                      )
                    );
                  } catch (t) {
                    return e;
                  }
                case ee:
                  return vr(vr({}, e), {}, { visible: t.value });
                case oe:
                  return vr(vr({}, e), {}, { visible: !e.visible });
                case te:
                  return (
                    t.files.forEach(function (e) {
                      r[Or++] = { image: e, active: !1 };
                    }),
                    vr(vr({}, n), {}, { files: vr(vr({}, n.files), r) })
                  );
                case ne:
                  return t.keys.length
                    ? (t.keys.forEach(function (e) {
                        delete n.files[e];
                      }),
                      n)
                    : e;
                case re:
                  return t.value && Object.keys(t.value).length
                    ? (Object.keys(t.value).forEach(function (e) {
                        n.files[e] && (n.files[e].active = t.value[e].active);
                      }),
                      n)
                    : e;
                case ie:
                  return vr(vr({}, e), {}, { progressPercent: t.value });
                default:
                  return e;
              }
            },
            body: l({
              setting: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ur.body.setting,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case J:
                    try {
                      return hr(hr({}, e), t.preference.body.setting);
                    } catch (t) {
                      return e;
                    }
                  case he:
                    return hr(hr({}, e), t.value);
                }
                return e;
              },
              grid: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  n = Object.assign({}, e);
                switch (t.type) {
                  case J:
                    var r = {};
                    try {
                      if (t.preference.body.grid instanceof Array)
                        t.preference.body.grid.forEach(function (e, t) {
                          r[t] = e;
                        });
                      else {
                        if ("object" !== pr(t.preference.body.grid))
                          throw "error";
                        r = t.preference.body.grid;
                      }
                      Object.keys(r).forEach(function (e) {
                        n[gr++] = hr(
                          hr({ color: ur.body.blockColor }, r[e]),
                          {},
                          { indexPrefix: mr }
                        );
                      });
                    } catch (e) {
                      n = {};
                    }
                    return n;
                  case ce:
                    return (
                      (n[gr++] = hr(
                        hr(
                          {
                            color: ur.body.blockColor,
                            layout: { x: 1 / 0, y: 1 / 0, w: 1, h: 1 },
                          },
                          t.value
                        ),
                        {},
                        { indexPrefix: mr }
                      )),
                      n
                    );
                  case se:
                    return t.keys && t.keys.length
                      ? (t.keys.forEach(function (e) {
                          delete n[e];
                        }),
                        n)
                      : e;
                  case le:
                    return Object.keys(n).map(function (e) {
                      return hr(
                        hr({}, n[e]),
                        {},
                        {
                          layout: {
                            x: ke(0, t.value.x - 1),
                            y: ke(0, t.value.y - 1),
                            w: ke(1, t.value.w),
                            h: ke(1, t.value.h),
                          },
                          indexPrefix: mr++,
                        }
                      );
                    });
                  case fe:
                    return (
                      t.keys.forEach(function (e) {
                        n[e] && (n[gr++] = Object.assign({}, n[e]));
                      }),
                      n
                    );
                  case ye:
                    return (
                      t.keys.forEach(function (e) {
                        n[e] && (n[e].color = t.color);
                      }),
                      n
                    );
                  case ae:
                    return xe(t.value)
                      ? (t.activeBlocks && t.activeBlocks.length
                          ? Object.keys(n).forEach(function (e) {
                              t.value.length &&
                                -1 !== t.activeBlocks.indexOf(e) &&
                                (n[e].image = {
                                  src: t.value.splice(0, 1)[0],
                                  position: "50% 50%",
                                  size: "cover",
                                });
                            })
                          : (Object.keys(n).forEach(function (e) {
                              n[e].image ||
                                (t.value &&
                                  t.value.length &&
                                  (n[e].image = {
                                    src: t.value.splice(0, 1)[0],
                                    position: "50% 50%",
                                    size: "cover",
                                  }));
                            }),
                            t.value.length &&
                              t.value.forEach(function (r, o) {
                                n[gr++] = {
                                  color: ur.body.blockColor,
                                  layout: {
                                    x: (Object.keys(e).length + o) % t.columns,
                                    y: 1 / 0,
                                    w: 1,
                                    h: 1,
                                  },
                                  image: {
                                    src: r,
                                    position: "50% 50%",
                                    size: "cover",
                                  },
                                  indexPrefix: mr,
                                };
                              })),
                        n)
                      : e;
                  case ue:
                    return t.image && "string" == typeof t.image && n[t.keys]
                      ? ((n[t.keys].image = {
                          src: t.image,
                          position: "50% 50%",
                          size: "cover",
                        }),
                        n)
                      : e;
                  case pe:
                    return Object.assign({}, e, t.value);
                  case me:
                    return n[t.key]
                      ? (t.position && (n[t.key].image.position = t.position),
                        t.size && (n[t.key].image.size = t.size),
                        n)
                      : e;
                }
                return e;
              },
              activeBlock: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  n = Object.assign([], e);
                switch (t.type) {
                  case de:
                    return t.value;
                  case se:
                    return t.keys && t.keys.length
                      ? (t.keys.forEach(function (e) {
                          n.indexOf(e) < 0 || n.splice(n.indexOf(e), 1);
                        }),
                        n)
                      : [];
                }
                return e;
              },
            }),
            cropper: l({
              visible: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case ge:
                    return !0;
                  case me:
                    return !1;
                  default:
                    return e;
                }
              },
              item: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case ge:
                    return t.item;
                  case me:
                    return null;
                  default:
                    return e;
                }
              },
              key: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case ge:
                    return t.key;
                  case me:
                    return null;
                  default:
                    return e;
                }
              },
            }),
          }),
        });
        function _r(e) {
          return { type: ee, value: e };
        }
        function Pr() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return { type: te, files: e };
        }
        function jr() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return { type: ne, keys: e };
        }
        function kr(e) {
          return { type: re, value: e };
        }
        function Er(e) {
          return { type: ie, value: e };
        }
        function xr(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        const Cr = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.store = t),
              (this.uploading = !1);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "getKeys",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    n = this.store.getState(),
                    r = n.tree.side.files,
                    o = [];
                  switch (e) {
                    case "selected":
                      Object.keys(r).forEach(function (e) {
                        r[e].active && o.push(parseInt(e));
                      });
                      break;
                    case "value":
                      t.forEach(function (e) {
                        r[e] && o.push(parseInt(e));
                      });
                      break;
                    case "all":
                    default:
                      o = Object.keys(r).map(function (e) {
                        return parseInt(e);
                      });
                  }
                  return o;
                },
              },
              {
                key: "getItems",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = this.store.getState(),
                    n = t.tree.side;
                  e = this.getKeys("value", e);
                  var r = {};
                  return (
                    e.forEach(function (e) {
                      n.files[e] && (r[e] = n.files[e]);
                    }),
                    r
                  );
                },
              },
              {
                key: "getImages",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = this.getItems(e);
                  return Object.keys(t).map(function (e) {
                    return t[e].image;
                  });
                },
              },
              {
                key: "add",
                value: function (e) {
                  try {
                    if (!(e instanceof Array))
                      throw new Error("not found files");
                    this.store.dispatch(Pr(e));
                  } catch (e) {
                    return e;
                  }
                },
              },
              {
                key: "selection",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                  try {
                    var n = {},
                      r = this.getKeys("value", e);
                    if (r.length <= 0) throw new Error("not found select item");
                    r.forEach(function (e) {
                      n[e] = { key: e, active: t };
                    }),
                      this.store.dispatch(kr(n));
                  } catch (e) {
                    return e;
                  }
                },
              },
              {
                key: "select",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  this.store.dispatch(kr(e));
                },
              },
              {
                key: "toggleSelectAll",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  if ("boolean" == typeof e) {
                    var t = this.getKeys("all");
                    this.selection(t, e);
                  } else {
                    var n = this.getKeys("selected").length,
                      r = this.getKeys("all");
                    this.selection(r, !(n > 0));
                  }
                },
              },
              {
                key: "remove",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  try {
                    if (!e.length) throw new Error("Not found items.");
                    var t = this.store.getState(),
                      n = t.setting.base.callback,
                      r = e.map(function (e) {
                        return t.tree.side.files[e].image;
                      });
                    this.store.dispatch(jr(e)),
                      n.sideRemove &&
                        "function" == typeof n.sideRemove &&
                        n.sideRemove(r);
                  } catch (e) {
                    return e;
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  var e = this.getKeys("all"),
                    t = this.store.getState(),
                    n = t.setting.base.callback,
                    r = Object.keys(t.tree.side.files).map(function (e) {
                      return t.tree.side.files[e].image;
                    });
                  this.store.dispatch(jr(e)),
                    n.sideRemove &&
                      "function" == typeof n.sideRemove &&
                      n.sideRemove(r);
                },
              },
              {
                key: "upload",
                value: function (e) {
                  var t = this;
                  if (!this.uploading) {
                    var n = this.store.getState(),
                      r = n.setting.base.callback;
                    (this.uploading = !0),
                      r.sideUploadStart &&
                        "function" == typeof r.sideUploadStart &&
                        r.sideUploadStart(),
                      De(e, n.setting.base.uploadScript)
                        .progress(function (e, o) {
                          switch (e) {
                            case "start":
                              t.store.dispatch(Er(0));
                              break;
                            case "progress":
                              var i = parseInt((o.loaded / o.total) * 100);
                              t.store.dispatch(Er(i)),
                                r.sideUploadProgress &&
                                  "function" == typeof r.sideUploadProgress &&
                                  r.sideUploadProgress(o.loaded, o.total, i);
                              break;
                            case "done":
                              if ((t.store.dispatch(Er(null)), !o.data)) return;
                              if (n.setting.base.uploadParamsConvertFunc) {
                                var a = n.setting.base.uploadParamsConvertFunc(
                                  o.data
                                );
                                t.store.dispatch(Pr([a]));
                              } else t.store.dispatch(Pr([o.data.url]));
                              return void (
                                r.sideUploadComplete &&
                                "function" == typeof r.sideUploadComplete &&
                                r.sideUploadComplete(o.data)
                              );
                          }
                        })
                        .done(function () {
                          (t.uploading = !1),
                            r.sideUploadCompleteAll &&
                              "function" == typeof r.sideUploadCompleteAll &&
                              r.sideUploadCompleteAll();
                        })
                        .fail(function (e) {
                          (t.uploading = !1),
                            r.sideUploadFail &&
                              "function" == typeof r.sideUploadFail &&
                              r.sideUploadFail(e);
                        });
                  }
                },
              },
              {
                key: "attachToGrid",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = this.store.getState(),
                    n = t.tree.body;
                  try {
                    var r = this.getImages(e);
                    if (!r.length) throw new Error("not found item.");
                    this.store.dispatch(ft(r, n.setting.column, n.activeBlock));
                  } catch (e) {
                    return e;
                  }
                },
              },
            ]) && xr(t.prototype, n),
            r && xr(t, r),
            e
          );
        })();
        function Dr(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Rr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Dr(Object(n), !0).forEach(function (t) {
                  Tr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Dr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function Tr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function zr(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        const Mr = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.store = t);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "getKeys",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    n = this.store.getState(),
                    r = n.tree.body,
                    o = [];
                  switch (e) {
                    case "selected":
                      return r.activeBlock;
                    case "value":
                      return (
                        (o = []),
                        t.forEach(function (e) {
                          r.grid[e] && o.push(e);
                        }),
                        o
                      );
                    case "all":
                    default:
                      return Object.keys(r.grid).map(function (e) {
                        return e;
                      });
                  }
                },
              },
              {
                key: "getBlocks",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    n = this.store.getState(),
                    r = n.tree.body,
                    o = [],
                    i = {};
                  switch (e) {
                    case "selected":
                      o = this.getKeys("selected");
                      break;
                    case "value":
                      o = this.getKeys("value", t);
                      break;
                    case "all":
                    default:
                      return r.grid;
                  }
                  return (
                    o.forEach(function (e) {
                      r.grid[e] && (i[e] = r.grid[e]);
                    }),
                    i
                  );
                },
              },
              {
                key: "shuffle",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = this.store.getState(),
                    n = t.tree.body,
                    r = { x: n.setting.column, y: 2, w: 2, h: 2 };
                  (e = Object.assign({}, r, e)), this.store.dispatch(at(e));
                },
              },
              {
                key: "assignImages",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = this.store.getState(),
                    n = t.tree.body;
                  this.store.dispatch(ft(e, n.setting.column, n.activeBlock));
                },
              },
              {
                key: "assignImage",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  null !== e && null !== t && this.store.dispatch(pt(e, t));
                },
              },
              {
                key: "removeImages",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = this.store.getState(),
                    n = Object.assign({}, t.tree.body.grid);
                  e.forEach(function (e) {
                    n[e].image = null;
                  }),
                    this.update(n);
                },
              },
              {
                key: "add",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = this.store,
                    n = t.getState,
                    r = t.dispatch,
                    o = n(),
                    i = o.tree.body,
                    a = {
                      layout: {
                        x: Object.keys(i.grid).length % i.setting.column,
                        y: 1 / 0,
                        w: 1,
                        h: 1,
                      },
                      color: null,
                      image: null,
                    };
                  function u() {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    ((e = Object.assign({}, a, e)).layout = Object.assign(
                      {},
                      a.layout,
                      e.layout
                    )),
                      (e.image = e.image
                        ? Rr(
                            { src: null, position: "50% 50%", size: "cover" },
                            e.image
                          )
                        : null),
                      r(ot(e));
                  }
                  (e = e && e.length ? e : [null]).forEach(function (e) {
                    return u(e);
                  });
                },
              },
              {
                key: "update",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  this.store.dispatch(ct(e));
                },
              },
              {
                key: "remove",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  this.store.dispatch(it(e));
                },
              },
              {
                key: "select",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  (e = e.map(function (e) {
                    return e.toString();
                  })),
                    this.store.dispatch(st(e));
                },
              },
              {
                key: "unselect",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = this.store.getState(),
                    n = Object.assign([], t.tree.body.activeBlock);
                  e.forEach(function (e) {
                    (e = e.toString()),
                      -1 !== n.indexOf(e) && n.splice(n.indexOf(e), 1);
                  }),
                    this.store.dispatch(st(n));
                },
              },
              {
                key: "toggleSelectAll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = this.store.getState();
                  "boolean" != typeof e &&
                    (e = !t.tree.body.activeBlock.length),
                    e ? this.select(this.getKeys("all")) : this.select([]);
                },
              },
              {
                key: "duplicate",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  this.store.dispatch(ut(e));
                },
              },
              {
                key: "getPreference",
                value: function () {
                  return this.store.getState().tree.body.setting;
                },
              },
              {
                key: "setPreference",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = Object.assign({}, this.getPreference(), e);
                  this.store.dispatch(lt(t));
                },
              },
            ]) && zr(t.prototype, n),
            r && zr(t, r),
            e
          );
        })();
        function Nr(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        const Ir = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.store = t);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "open",
                value: function (e) {
                  var t = this.store.getState(),
                    n = null;
                  try {
                    if (!(n = t.tree.body.grid[e]).image)
                      throw "Not found image in item";
                  } catch (e) {
                    return void alert(e);
                  }
                  this.store.dispatch(
                    (function (e, t) {
                      return { type: ge, item: t, key: e };
                    })(e, n)
                  );
                },
              },
              {
                key: "close",
                value: function (e, t, n) {
                  this.store.dispatch(
                    (function (e, t, n) {
                      return { type: me, key: e, position: t, size: n };
                    })(e, t, n)
                  );
                },
              },
            ]) && Nr(t.prototype, n),
            r && Nr(t, r),
            e
          );
        })();
        function Br(e) {
          return (Br =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Hr(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        const Lr = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.store = t);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "toggleSide",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : void 0;
                  try {
                    var t = this.store.getState().tree.side.visible,
                      n = void 0 === e ? !t : e;
                    this.store.dispatch(_r(n));
                  } catch (e) {
                    console.warn("Error action", e);
                  }
                },
              },
              {
                key: "export",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                  if (!e) return null;
                  var n = this.store.getState();
                  function r() {
                    if (!t) return [];
                    var e = n.api.side.getKeys("all");
                    return n.api.side.getImages(e);
                  }
                  function o() {
                    var e = n.api.grid.getBlocks("all");
                    return Object.keys(e)
                      .sort()
                      .map(function (n) {
                        return (
                          delete e[n].indexPrefix,
                          !t && e[n] && e[n].image && delete e[n].image,
                          e[n]
                        );
                      });
                  }
                  function i() {
                    return n.api.grid.getPreference();
                  }
                  switch (e) {
                    case "side":
                      return r();
                    case "grid":
                      return o();
                    case "preference":
                      return n.api.grid.getPreference();
                    case "all":
                      return { side: r(), grid: o(), preference: i() };
                  }
                  return null;
                },
              },
              {
                key: "import",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (e) {
                    var n = this.store.getState();
                    e.side && xe(e.side) && r(e.side),
                      e.grid && xe(e.grid) && o(e.grid),
                      e.preference &&
                        "object" === Br(e.preference) &&
                        n.api.grid.setPreference(e.preference);
                  }
                  function r() {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    t && n.api.side.clear(), n.api.side.add(e);
                  }
                  function o() {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if (t) {
                      var r = n.api.grid.getKeys("all");
                      n.api.grid.remove(r);
                    }
                    n.api.grid.add(e);
                  }
                },
              },
              {
                key: "makeImage",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "jpg",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0.75,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 2,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                    o = Oe().Deferred(),
                    i = this.store.getState(),
                    a = i.tree.body,
                    u = a.setting,
                    c = a.grid;
                  return (
                    Ie(
                      i.element.querySelector(".ple-grid"),
                      { setting: u, grid: c },
                      { format: e, quality: t, sampling: n, output: r }
                    )
                      .done(function (e) {
                        o.resolve(e);
                      })
                      .progress(function (e, t, n) {
                        o.notify(e, t, n);
                      })
                      .fail(function (e) {
                        o.reject(e);
                      }),
                    o.promise()
                  );
                },
              },
            ]) && Hr(t.prototype, n),
            r && Hr(t, r),
            e
          );
        })();
        const Ar = function (e) {
          (this.side = new Cr(e)),
            (this.grid = new Mr(e)),
            (this.cropper = new Ir(e)),
            (this.util = new Lr(e));
        };
        function Wr(e) {
          return (Wr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ur(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Fr(e, t) {
          return (Fr =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function $r(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Xr(e);
            if (t) {
              var o = Xr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return qr(this, n);
          };
        }
        function qr(e, t) {
          return !t || ("object" !== Wr(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function Xr(e) {
          return (Xr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var Gr = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Fr(e, t);
          })(a, e);
          var n,
            r,
            o,
            i = $r(a);
          function a(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((t = i.call(this, e)).store = c(Sr)),
              (t.api = new Ar(t.store)),
              t
            );
          }
          return (
            (n = a),
            (r = [
              {
                key: "render",
                value: function () {
                  var e = this.props;
                  return t().createElement(
                    b,
                    { store: this.store },
                    t().createElement(or, {
                      parent: { preference: e, api: this.api },
                    })
                  );
                },
              },
            ]) && Ur(n.prototype, r),
            o && Ur(n, o),
            a
          );
        })(t().Component);
        (Gr.displayName = "PhotoLayoutEditor"),
          (Gr.defaultProps = {
            body: { setting: {}, blockColor: "#dddddd", grid: [] },
            side: { files: [], visible: !0 },
            uploadScript: null,
            uploadParamsConvertFunc: null,
          });
        const Yr = Gr;
      })(),
      (a = a.default)
    );
  })();
});
