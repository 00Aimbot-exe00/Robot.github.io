"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [176],
  {
    3176: function (t, e, s) {
      function n() {
        return (n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      s.d(e, {
        N: function () {
          return Bn;
        },
      });
      var i = s(7294),
        o = s(2212),
        r = s(6447);
      let a = k();
      const c = (t) => _(t, a);
      let u = k();
      c.write = (t) => _(t, u);
      let l = k();
      c.onStart = (t) => _(t, l);
      let h = k();
      c.onFrame = (t) => _(t, h);
      let d = k();
      c.onFinish = (t) => _(t, d);
      let p = [];
      c.setTimeout = (t, e) => {
        let s = c.now() + e,
          n = () => {
            let t = p.findIndex((t) => t.cancel == n);
            ~t && p.splice(t, 1), (v -= ~t ? 1 : 0);
          },
          i = { time: s, handler: t, cancel: n };
        return p.splice(f(s), 0, i), (v += 1), b(), i;
      };
      let f = (t) => ~(~p.findIndex((e) => e.time > t) || ~p.length);
      (c.cancel = (t) => {
        l.delete(t), h.delete(t), a.delete(t), u.delete(t), d.delete(t);
      }),
        (c.sync = (t) => {
          (y = !0), c.batchedUpdates(t), (y = !1);
        }),
        (c.throttle = (t) => {
          let e;
          function s() {
            try {
              t(...e);
            } finally {
              e = null;
            }
          }
          function n(...t) {
            (e = t), c.onStart(s);
          }
          return (
            (n.handler = t),
            (n.cancel = () => {
              l.delete(s), (e = null);
            }),
            n
          );
        });
      let m =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (c.use = (t) => (m = t)),
        (c.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (c.batchedUpdates = (t) => t()),
        (c.catch = console.error),
        (c.frameLoop = "always"),
        (c.advance = () => {
          "demand" !== c.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : S();
        });
      let g = -1,
        v = 0,
        y = !1;
      function _(t, e) {
        y ? (e.delete(t), t(0)) : (e.add(t), b());
      }
      function b() {
        g < 0 && ((g = 0), "demand" !== c.frameLoop && m(w));
      }
      function w() {
        ~g && (m(w), c.batchedUpdates(S));
      }
      function S() {
        let t = g;
        g = c.now();
        let e = f(g);
        e && (M(p.splice(0, e), (t) => t.handler()), (v -= e)),
          l.flush(),
          a.flush(t ? Math.min(64, g - t) : 16.667),
          h.flush(),
          u.flush(),
          d.flush(),
          v || (g = -1);
      }
      function k() {
        let t = new Set(),
          e = t;
        return {
          add(s) {
            (v += e != t || t.has(s) ? 0 : 1), t.add(s);
          },
          delete: (s) => ((v -= e == t && t.has(s) ? 1 : 0), t.delete(s)),
          flush(s) {
            e.size &&
              ((t = new Set()),
              (v -= e.size),
              M(e, (e) => e(s) && t.add(e)),
              (v += t.size),
              (e = t));
          },
        };
      }
      function M(t, e) {
        t.forEach((t) => {
          try {
            e(t);
          } catch (s) {
            c.catch(s);
          }
        });
      }
      function P() {}
      const I = {
        arr: Array.isArray,
        obj: (t) => !!t && "Object" === t.constructor.name,
        fun: (t) => "function" === typeof t,
        str: (t) => "string" === typeof t,
        num: (t) => "number" === typeof t,
        und: (t) => void 0 === t,
      };
      function O(t, e) {
        if (I.arr(t)) {
          if (!I.arr(e) || t.length !== e.length) return !1;
          for (let s = 0; s < t.length; s++) if (t[s] !== e[s]) return !1;
          return !0;
        }
        return t === e;
      }
      const E = (t, e) => t.forEach(e);
      function x(t, e, s) {
        if (I.arr(t))
          for (let n = 0; n < t.length; n++) e.call(s, t[n], `${n}`);
        else for (const n in t) t.hasOwnProperty(n) && e.call(s, t[n], n);
      }
      const C = (t) => (I.und(t) ? [] : I.arr(t) ? t : [t]);
      function A(t, e) {
        if (t.size) {
          const s = Array.from(t);
          t.clear(), E(s, e);
        }
      }
      const T = (t, ...e) => A(t, (t) => t(...e)),
        V = () =>
          "undefined" === typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      let j,
        D,
        R = null,
        q = !1,
        z = P;
      var L = Object.freeze({
        __proto__: null,
        get createStringInterpolator() {
          return j;
        },
        get to() {
          return D;
        },
        get colors() {
          return R;
        },
        get skipAnimation() {
          return q;
        },
        get willAdvance() {
          return z;
        },
        assign: (t) => {
          t.to && (D = t.to),
            t.now && (c.now = t.now),
            void 0 !== t.colors && (R = t.colors),
            null != t.skipAnimation && (q = t.skipAnimation),
            t.createStringInterpolator && (j = t.createStringInterpolator),
            t.requestAnimationFrame && c.use(t.requestAnimationFrame),
            t.batchedUpdates && (c.batchedUpdates = t.batchedUpdates),
            t.willAdvance && (z = t.willAdvance),
            t.frameLoop && (c.frameLoop = t.frameLoop);
        },
      });
      const U = new Set();
      let B = [],
        K = [],
        F = 0;
      const Q = {
        get idle() {
          return !U.size && !B.length;
        },
        start(t) {
          F > t.priority ? (U.add(t), c.onStart($)) : (N(t), c(X));
        },
        advance: X,
        sort(t) {
          if (F) c.onFrame(() => Q.sort(t));
          else {
            const e = B.indexOf(t);
            ~e && (B.splice(e, 1), H(t));
          }
        },
        clear() {
          (B = []), U.clear();
        },
      };
      function $() {
        U.forEach(N), U.clear(), c(X);
      }
      function N(t) {
        B.includes(t) || H(t);
      }
      function H(t) {
        B.splice(
          (function (t, e) {
            const s = t.findIndex(e);
            return s < 0 ? t.length : s;
          })(B, (e) => e.priority > t.priority),
          0,
          t
        );
      }
      function X(t) {
        const e = K;
        for (let s = 0; s < B.length; s++) {
          const n = B[s];
          (F = n.priority), n.idle || (z(n), n.advance(t), n.idle || e.push(n));
        }
        return (F = 0), (K = B), (K.length = 0), (B = e), B.length > 0;
      }
      const Y = "[-+]?\\d*\\.?\\d+",
        W = Y + "%";
      function Z(...t) {
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      const G = new RegExp("rgb" + Z(Y, Y, Y)),
        J = new RegExp("rgba" + Z(Y, Y, Y, Y)),
        tt = new RegExp("hsl" + Z(Y, W, W)),
        et = new RegExp("hsla" + Z(Y, W, W, Y)),
        st = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        nt =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        it = /^#([0-9a-fA-F]{6})$/,
        ot = /^#([0-9a-fA-F]{8})$/;
      function rt(t, e, s) {
        return (
          s < 0 && (s += 1),
          s > 1 && (s -= 1),
          s < 1 / 6
            ? t + 6 * (e - t) * s
            : s < 0.5
            ? e
            : s < 2 / 3
            ? t + (e - t) * (2 / 3 - s) * 6
            : t
        );
      }
      function at(t, e, s) {
        const n = s < 0.5 ? s * (1 + e) : s + e - s * e,
          i = 2 * s - n,
          o = rt(i, n, t + 1 / 3),
          r = rt(i, n, t),
          a = rt(i, n, t - 1 / 3);
        return (
          (Math.round(255 * o) << 24) |
          (Math.round(255 * r) << 16) |
          (Math.round(255 * a) << 8)
        );
      }
      function ct(t) {
        const e = parseInt(t, 10);
        return e < 0 ? 0 : e > 255 ? 255 : e;
      }
      function ut(t) {
        return (((parseFloat(t) % 360) + 360) % 360) / 360;
      }
      function lt(t) {
        const e = parseFloat(t);
        return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e);
      }
      function ht(t) {
        const e = parseFloat(t);
        return e < 0 ? 0 : e > 100 ? 1 : e / 100;
      }
      function dt(t) {
        let e = (function (t) {
          let e;
          return "number" === typeof t
            ? t >>> 0 === t && t >= 0 && t <= 4294967295
              ? t
              : null
            : (e = it.exec(t))
            ? parseInt(e[1] + "ff", 16) >>> 0
            : R && void 0 !== R[t]
            ? R[t]
            : (e = G.exec(t))
            ? ((ct(e[1]) << 24) | (ct(e[2]) << 16) | (ct(e[3]) << 8) | 255) >>>
              0
            : (e = J.exec(t))
            ? ((ct(e[1]) << 24) |
                (ct(e[2]) << 16) |
                (ct(e[3]) << 8) |
                lt(e[4])) >>>
              0
            : (e = st.exec(t))
            ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0
            : (e = ot.exec(t))
            ? parseInt(e[1], 16) >>> 0
            : (e = nt.exec(t))
            ? parseInt(
                e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4],
                16
              ) >>> 0
            : (e = tt.exec(t))
            ? (255 | at(ut(e[1]), ht(e[2]), ht(e[3]))) >>> 0
            : (e = et.exec(t))
            ? (at(ut(e[1]), ht(e[2]), ht(e[3])) | lt(e[4])) >>> 0
            : null;
        })(t);
        return null === e
          ? t
          : ((e = e || 0),
            `rgba(${(4278190080 & e) >>> 24}, ${(16711680 & e) >>> 16}, ${
              (65280 & e) >>> 8
            }, ${(255 & e) / 255})`);
      }
      const pt = (t, e, s) => {
        if (I.fun(t)) return t;
        if (I.arr(t)) return pt({ range: t, output: e, extrapolate: s });
        if (I.str(t.output[0])) return j(t);
        const n = t,
          i = n.output,
          o = n.range || [0, 1],
          r = n.extrapolateLeft || n.extrapolate || "extend",
          a = n.extrapolateRight || n.extrapolate || "extend",
          c = n.easing || ((t) => t);
        return (t) => {
          const e = (function (t, e) {
            for (var s = 1; s < e.length - 1 && !(e[s] >= t); ++s);
            return s - 1;
          })(t, o);
          return (function (t, e, s, n, i, o, r, a, c) {
            let u = c ? c(t) : t;
            if (u < e) {
              if ("identity" === r) return u;
              "clamp" === r && (u = e);
            }
            if (u > s) {
              if ("identity" === a) return u;
              "clamp" === a && (u = s);
            }
            if (n === i) return n;
            if (e === s) return t <= e ? n : i;
            e === -1 / 0
              ? (u = -u)
              : s === 1 / 0
              ? (u -= e)
              : (u = (u - e) / (s - e));
            (u = o(u)),
              n === -1 / 0
                ? (u = -u)
                : i === 1 / 0
                ? (u += n)
                : (u = u * (i - n) + n);
            return u;
          })(t, o[e], o[e + 1], i[e], i[e + 1], c, r, a, n.map);
        };
      };
      function ft() {
        return (ft =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      const mt = Symbol.for("FluidValue.get"),
        gt = Symbol.for("FluidValue.observers"),
        vt = (t) => Boolean(t && t[mt]),
        yt = (t) => (t && t[mt] ? t[mt]() : t),
        _t = (t) => t[gt] || null;
      function bt(t, e) {
        let s = t[gt];
        s &&
          s.forEach((t) => {
            !(function (t, e) {
              t.eventObserved ? t.eventObserved(e) : t(e);
            })(t, e);
          });
      }
      const wt = (t, e) => Mt(t, mt, e);
      function St(t, e) {
        if (t[mt]) {
          let s = t[gt];
          s || Mt(t, gt, (s = new Set())),
            s.has(e) ||
              (s.add(e), t.observerAdded && t.observerAdded(s.size, e));
        }
        return e;
      }
      function kt(t, e) {
        let s = t[gt];
        if (s && s.has(e)) {
          const n = s.size - 1;
          n ? s.delete(e) : (t[gt] = null),
            t.observerRemoved && t.observerRemoved(n, e);
        }
      }
      const Mt = (t, e, s) =>
          Object.defineProperty(t, e, {
            value: s,
            writable: !0,
            configurable: !0,
          }),
        Pt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        It =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Ot = new RegExp(`(${Pt.source})(%|[a-z]+)`, "i"),
        Et = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        xt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ct = (t) => {
          const [e, s] = At(t);
          if (!e || V()) return t;
          const n = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(e);
          if (n) return n.trim();
          if (s && s.startsWith("--")) {
            const e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(s);
            return e || t;
          }
          return s && xt.test(s) ? Ct(s) : s || t;
        },
        At = (t) => {
          const e = xt.exec(t);
          if (!e) return [,];
          const [, s, n] = e;
          return [s, n];
        };
      let Tt;
      const Vt = (t, e, s, n, i) =>
          `rgba(${Math.round(e)}, ${Math.round(s)}, ${Math.round(n)}, ${i})`,
        jt = (t) => {
          Tt ||
            (Tt = R
              ? new RegExp(`(${Object.keys(R).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          const e = t.output.map((t) =>
              yt(t).replace(xt, Ct).replace(It, dt).replace(Tt, dt)
            ),
            s = e.map((t) => t.match(Pt).map(Number)),
            n = s[0]
              .map((t, e) =>
                s.map((t) => {
                  if (!(e in t))
                    throw Error(
                      'The arity of each "output" value must be equal'
                    );
                  return t[e];
                })
              )
              .map((e) => pt(ft({}, t, { output: e })));
          return (t) => {
            var s;
            const i =
              !Ot.test(e[0]) &&
              (null == (s = e.find((t) => Ot.test(t)))
                ? void 0
                : s.replace(Pt, ""));
            let o = 0;
            return e[0]
              .replace(Pt, () => `${n[o++](t)}${i || ""}`)
              .replace(Et, Vt);
          };
        },
        Dt = "react-spring: ",
        Rt = (t) => {
          const e = t;
          let s = !1;
          if ("function" != typeof e)
            throw new TypeError(`${Dt}once requires a function parameter`);
          return (...t) => {
            s || (e(...t), (s = !0));
          };
        },
        qt = Rt(console.warn);
      const zt = Rt(console.warn);
      function Lt(t) {
        return (
          I.str(t) &&
          ("#" == t[0] ||
            /\d/.test(t) ||
            (!V() && xt.test(t)) ||
            t in (R || {}))
        );
      }
      const Ut = (t) => (0, i.useEffect)(t, Bt),
        Bt = [];
      function Kt() {
        const t = (0, i.useState)()[1],
          e = (0, i.useState)(Ft)[0];
        return (
          Ut(e.unmount),
          () => {
            e.current && t({});
          }
        );
      }
      function Ft() {
        const t = {
          current: !0,
          unmount: () => () => {
            t.current = !1;
          },
        };
        return t;
      }
      function Qt(t) {
        const e = (0, i.useRef)();
        return (
          (0, i.useEffect)(() => {
            e.current = t;
          }),
          e.current
        );
      }
      const $t =
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
            ? i.useLayoutEffect
            : i.useEffect,
        Nt = Symbol.for("Animated:node"),
        Ht = (t) => t && t[Nt],
        Xt = (t, e) => {
          return (
            (s = t),
            (n = Nt),
            (i = e),
            Object.defineProperty(s, n, {
              value: i,
              writable: !0,
              configurable: !0,
            })
          );
          var s, n, i;
        },
        Yt = (t) => t && t[Nt] && t[Nt].getPayload();
      class Wt {
        constructor() {
          (this.payload = void 0), Xt(this, this);
        }
        getPayload() {
          return this.payload || [];
        }
      }
      class Zt extends Wt {
        constructor(t) {
          super(),
            (this.done = !0),
            (this.elapsedTime = void 0),
            (this.lastPosition = void 0),
            (this.lastVelocity = void 0),
            (this.v0 = void 0),
            (this.durationProgress = 0),
            (this._value = t),
            I.num(this._value) && (this.lastPosition = this._value);
        }
        static create(t) {
          return new Zt(t);
        }
        getPayload() {
          return [this];
        }
        getValue() {
          return this._value;
        }
        setValue(t, e) {
          return (
            I.num(t) &&
              ((this.lastPosition = t),
              e &&
                ((t = Math.round(t / e) * e),
                this.done && (this.lastPosition = t))),
            this._value !== t && ((this._value = t), !0)
          );
        }
        reset() {
          const { done: t } = this;
          (this.done = !1),
            I.num(this._value) &&
              ((this.elapsedTime = 0),
              (this.durationProgress = 0),
              (this.lastPosition = this._value),
              t && (this.lastVelocity = null),
              (this.v0 = null));
        }
      }
      class Gt extends Zt {
        constructor(t) {
          super(0),
            (this._string = null),
            (this._toString = void 0),
            (this._toString = pt({ output: [t, t] }));
        }
        static create(t) {
          return new Gt(t);
        }
        getValue() {
          let t = this._string;
          return null == t ? (this._string = this._toString(this._value)) : t;
        }
        setValue(t) {
          if (I.str(t)) {
            if (t == this._string) return !1;
            (this._string = t), (this._value = 1);
          } else {
            if (!super.setValue(t)) return !1;
            this._string = null;
          }
          return !0;
        }
        reset(t) {
          t && (this._toString = pt({ output: [this.getValue(), t] })),
            (this._value = 0),
            super.reset();
        }
      }
      const Jt = { dependencies: null };
      class te extends Wt {
        constructor(t) {
          super(), (this.source = t), this.setValue(t);
        }
        getValue(t) {
          const e = {};
          return (
            x(this.source, (s, n) => {
              var i;
              (i = s) && i[Nt] === i
                ? (e[n] = s.getValue(t))
                : vt(s)
                ? (e[n] = yt(s))
                : t || (e[n] = s);
            }),
            e
          );
        }
        setValue(t) {
          (this.source = t), (this.payload = this._makePayload(t));
        }
        reset() {
          this.payload && E(this.payload, (t) => t.reset());
        }
        _makePayload(t) {
          if (t) {
            const e = new Set();
            return x(t, this._addToPayload, e), Array.from(e);
          }
        }
        _addToPayload(t) {
          Jt.dependencies && vt(t) && Jt.dependencies.add(t);
          const e = Yt(t);
          e && E(e, (t) => this.add(t));
        }
      }
      class ee extends te {
        constructor(t) {
          super(t);
        }
        static create(t) {
          return new ee(t);
        }
        getValue() {
          return this.source.map((t) => t.getValue());
        }
        setValue(t) {
          const e = this.getPayload();
          return t.length == e.length
            ? e.map((e, s) => e.setValue(t[s])).some(Boolean)
            : (super.setValue(t.map(se)), !0);
        }
      }
      function se(t) {
        return (Lt(t) ? Gt : Zt).create(t);
      }
      function ne(t) {
        const e = Ht(t);
        return e ? e.constructor : I.arr(t) ? ee : Lt(t) ? Gt : Zt;
      }
      function ie() {
        return (ie =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      const oe = (t, e) => {
        const s = !I.fun(t) || (t.prototype && t.prototype.isReactComponent);
        return (0, i.forwardRef)((n, o) => {
          const r = (0, i.useRef)(null),
            a =
              s &&
              (0, i.useCallback)(
                (t) => {
                  r.current = (function (t, e) {
                    t && (I.fun(t) ? t(e) : (t.current = e));
                    return e;
                  })(o, t);
                },
                [o]
              ),
            [u, l] = (function (t, e) {
              const s = new Set();
              (Jt.dependencies = s),
                t.style &&
                  (t = ie({}, t, { style: e.createAnimatedStyle(t.style) }));
              return (t = new te(t)), (Jt.dependencies = null), [t, s];
            })(n, e),
            h = Kt(),
            d = () => {
              const t = r.current;
              if (s && !t) return;
              !1 === (!!t && e.applyAnimatedValues(t, u.getValue(!0))) && h();
            },
            p = new re(d, l),
            f = (0, i.useRef)();
          $t(() => {
            const t = f.current;
            (f.current = p),
              E(l, (t) => St(t, p)),
              t && (E(t.deps, (e) => kt(e, t)), c.cancel(t.update));
          }),
            (0, i.useEffect)(d, []),
            Ut(() => () => {
              const t = f.current;
              E(t.deps, (e) => kt(e, t));
            });
          const m = e.getComponentProps(u.getValue());
          return i.createElement(t, ie({}, m, { ref: a }));
        });
      };
      class re {
        constructor(t, e) {
          (this.update = t), (this.deps = e);
        }
        eventObserved(t) {
          "change" == t.type && c.write(this.update);
        }
      }
      const ae = Symbol.for("AnimatedComponent"),
        ce = (t) =>
          I.str(t)
            ? t
            : t && I.str(t.displayName)
            ? t.displayName
            : (I.fun(t) && t.name) || null;
      function ue() {
        return (ue =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function le(t, ...e) {
        return I.fun(t) ? t(...e) : t;
      }
      const he = (t, e) =>
          !0 === t || !!(e && t && (I.fun(t) ? t(e) : C(t).includes(e))),
        de = (t, e) => (I.obj(t) ? e && t[e] : t),
        pe = (t, e) =>
          !0 === t.default ? t[e] : t.default ? t.default[e] : void 0,
        fe = (t) => t,
        me = (t, e = fe) => {
          let s = ge;
          t.default &&
            !0 !== t.default &&
            ((t = t.default), (s = Object.keys(t)));
          const n = {};
          for (const i of s) {
            const s = e(t[i], i);
            I.und(s) || (n[i] = s);
          }
          return n;
        },
        ge = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        ve = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function ye(t) {
        const e = (function (t) {
          const e = {};
          let s = 0;
          if (
            (x(t, (t, n) => {
              ve[n] || ((e[n] = t), s++);
            }),
            s)
          )
            return e;
        })(t);
        if (e) {
          const s = { to: e };
          return x(t, (t, n) => n in e || (s[n] = t)), s;
        }
        return ue({}, t);
      }
      function _e(t) {
        return (
          (t = yt(t)),
          I.arr(t)
            ? t.map(_e)
            : Lt(t)
            ? L.createStringInterpolator({ range: [0, 1], output: [t, t] })(1)
            : t
        );
      }
      function be(t) {
        for (const e in t) return !0;
        return !1;
      }
      function we(t) {
        return I.fun(t) || (I.arr(t) && I.obj(t[0]));
      }
      function Se(t, e) {
        var s;
        null == (s = t.ref) || s.delete(t), null == e || e.delete(t);
      }
      function ke(t, e) {
        var s;
        e &&
          t.ref !== e &&
          (null == (s = t.ref) || s.delete(t), e.add(t), (t.ref = e));
      }
      const Me = 1.70158,
        Pe = 1.525 * Me,
        Ie = Me + 1,
        Oe = (2 * Math.PI) / 3,
        Ee = (2 * Math.PI) / 4.5,
        xe = (t) => {
          const e = 7.5625,
            s = 2.75;
          return t < 1 / s
            ? e * t * t
            : t < 2 / s
            ? e * (t -= 1.5 / s) * t + 0.75
            : t < 2.5 / s
            ? e * (t -= 2.25 / s) * t + 0.9375
            : e * (t -= 2.625 / s) * t + 0.984375;
        },
        Ce = ue(
          {},
          { tension: 170, friction: 26 },
          {
            mass: 1,
            damping: 1,
            easing: {
              linear: (t) => t,
              easeInQuad: (t) => t * t,
              easeOutQuad: (t) => 1 - (1 - t) * (1 - t),
              easeInOutQuad: (t) =>
                t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
              easeInCubic: (t) => t * t * t,
              easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
              easeInOutCubic: (t) =>
                t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
              easeInQuart: (t) => t * t * t * t,
              easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
              easeInOutQuart: (t) =>
                t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
              easeInQuint: (t) => t * t * t * t * t,
              easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
              easeInOutQuint: (t) =>
                t < 0.5
                  ? 16 * t * t * t * t * t
                  : 1 - Math.pow(-2 * t + 2, 5) / 2,
              easeInSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
              easeOutSine: (t) => Math.sin((t * Math.PI) / 2),
              easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
              easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * t - 10)),
              easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
              easeInOutExpo: (t) =>
                0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : t < 0.5
                  ? Math.pow(2, 20 * t - 10) / 2
                  : (2 - Math.pow(2, -20 * t + 10)) / 2,
              easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
              easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
              easeInOutCirc: (t) =>
                t < 0.5
                  ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
                  : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
              easeInBack: (t) => Ie * t * t * t - Me * t * t,
              easeOutBack: (t) =>
                1 + Ie * Math.pow(t - 1, 3) + Me * Math.pow(t - 1, 2),
              easeInOutBack: (t) =>
                t < 0.5
                  ? (Math.pow(2 * t, 2) * (7.189819 * t - Pe)) / 2
                  : (Math.pow(2 * t - 2, 2) * ((Pe + 1) * (2 * t - 2) + Pe) +
                      2) /
                    2,
              easeInElastic: (t) =>
                0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : -Math.pow(2, 10 * t - 10) * Math.sin((10 * t - 10.75) * Oe),
              easeOutElastic: (t) =>
                0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : Math.pow(2, -10 * t) * Math.sin((10 * t - 0.75) * Oe) + 1,
              easeInOutElastic: (t) =>
                0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : t < 0.5
                  ? (-Math.pow(2, 20 * t - 10) *
                      Math.sin((20 * t - 11.125) * Ee)) /
                    2
                  : (Math.pow(2, -20 * t + 10) *
                      Math.sin((20 * t - 11.125) * Ee)) /
                      2 +
                    1,
              easeInBounce: (t) => 1 - xe(1 - t),
              easeOutBounce: xe,
              easeInOutBounce: (t) =>
                t < 0.5 ? (1 - xe(1 - 2 * t)) / 2 : (1 + xe(2 * t - 1)) / 2,
            }.linear,
            clamp: !1,
          }
        );
      class Ae {
        constructor() {
          (this.tension = void 0),
            (this.friction = void 0),
            (this.frequency = void 0),
            (this.damping = void 0),
            (this.mass = void 0),
            (this.velocity = 0),
            (this.restVelocity = void 0),
            (this.precision = void 0),
            (this.progress = void 0),
            (this.duration = void 0),
            (this.easing = void 0),
            (this.clamp = void 0),
            (this.bounce = void 0),
            (this.decay = void 0),
            (this.round = void 0),
            Object.assign(this, Ce);
        }
      }
      function Te(t, e) {
        if (I.und(e.decay)) {
          const s = !I.und(e.tension) || !I.und(e.friction);
          (!s && I.und(e.frequency) && I.und(e.damping) && I.und(e.mass)) ||
            ((t.duration = void 0), (t.decay = void 0)),
            s && (t.frequency = void 0);
        } else t.duration = void 0;
      }
      const Ve = [];
      class je {
        constructor() {
          (this.changed = !1),
            (this.values = Ve),
            (this.toValues = null),
            (this.fromValues = Ve),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new Ae()),
            (this.immediate = !1);
        }
      }
      function De(
        t,
        { key: e, props: s, defaultProps: n, state: i, actions: o }
      ) {
        return new Promise((r, a) => {
          var u;
          let l,
            h,
            d = he(
              null != (u = s.cancel) ? u : null == n ? void 0 : n.cancel,
              e
            );
          if (d) m();
          else {
            I.und(s.pause) || (i.paused = he(s.pause, e));
            let t = null == n ? void 0 : n.pause;
            !0 !== t && (t = i.paused || he(t, e)),
              (l = le(s.delay || 0, e)),
              t ? (i.resumeQueue.add(f), o.pause()) : (o.resume(), f());
          }
          function p() {
            i.resumeQueue.add(f),
              i.timeouts.delete(h),
              h.cancel(),
              (l = h.time - c.now());
          }
          function f() {
            l > 0 && !L.skipAnimation
              ? ((i.delayed = !0),
                (h = c.setTimeout(m, l)),
                i.pauseQueue.add(p),
                i.timeouts.add(h))
              : m();
          }
          function m() {
            i.delayed && (i.delayed = !1),
              i.pauseQueue.delete(p),
              i.timeouts.delete(h),
              t <= (i.cancelId || 0) && (d = !0);
            try {
              o.start(ue({}, s, { callId: t, cancel: d }), r);
            } catch (e) {
              a(e);
            }
          }
        });
      }
      const Re = (t, e) =>
          1 == e.length
            ? e[0]
            : e.some((t) => t.cancelled)
            ? Le(t.get())
            : e.every((t) => t.noop)
            ? qe(t.get())
            : ze(
                t.get(),
                e.every((t) => t.finished)
              ),
        qe = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }),
        ze = (t, e, s = !1) => ({ value: t, finished: e, cancelled: s }),
        Le = (t) => ({ value: t, cancelled: !0, finished: !1 });
      function Ue(t, e, s, n) {
        const { callId: i, parentId: o, onRest: r } = e,
          { asyncTo: a, promise: u } = s;
        return o || t !== a || e.reset
          ? (s.promise = (async () => {
              (s.asyncId = i), (s.asyncTo = t);
              const l = me(e, (t, e) => ("onRest" === e ? void 0 : t));
              let h, d;
              const p = new Promise((t, e) => ((h = t), (d = e))),
                f = (t) => {
                  const e =
                    (i <= (s.cancelId || 0) && Le(n)) ||
                    (i !== s.asyncId && ze(n, !1));
                  if (e) throw ((t.result = e), d(t), t);
                },
                m = (t, e) => {
                  const o = new Ke(),
                    r = new Fe();
                  return (async () => {
                    if (L.skipAnimation)
                      throw (Be(s), (r.result = ze(n, !1)), d(r), r);
                    f(o);
                    const a = I.obj(t) ? ue({}, t) : ue({}, e, { to: t });
                    (a.parentId = i),
                      x(l, (t, e) => {
                        I.und(a[e]) && (a[e] = t);
                      });
                    const c = await n.start(a);
                    return (
                      f(o),
                      s.paused &&
                        (await new Promise((t) => {
                          s.resumeQueue.add(t);
                        })),
                      c
                    );
                  })();
                };
              let g;
              if (L.skipAnimation) return Be(s), ze(n, !1);
              try {
                let e;
                (e = I.arr(t)
                  ? (async (t) => {
                      for (const e of t) await m(e);
                    })(t)
                  : Promise.resolve(t(m, n.stop.bind(n)))),
                  await Promise.all([e.then(h), p]),
                  (g = ze(n.get(), !0, !1));
              } catch (v) {
                if (v instanceof Ke) g = v.result;
                else {
                  if (!(v instanceof Fe)) throw v;
                  g = v.result;
                }
              } finally {
                i == s.asyncId &&
                  ((s.asyncId = o),
                  (s.asyncTo = o ? a : void 0),
                  (s.promise = o ? u : void 0));
              }
              return (
                I.fun(r) &&
                  c.batchedUpdates(() => {
                    r(g, n, n.item);
                  }),
                g
              );
            })())
          : u;
      }
      function Be(t, e) {
        A(t.timeouts, (t) => t.cancel()),
          t.pauseQueue.clear(),
          t.resumeQueue.clear(),
          (t.asyncId = t.asyncTo = t.promise = void 0),
          e && (t.cancelId = e);
      }
      class Ke extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
          ),
            (this.result = void 0);
        }
      }
      class Fe extends Error {
        constructor() {
          super("SkipAnimationSignal"), (this.result = void 0);
        }
      }
      const Qe = (t) => t instanceof Ne;
      let $e = 1;
      class Ne extends class {
        constructor(t) {
          if (((this[mt] = void 0), (this[gt] = void 0), !t && !(t = this.get)))
            throw Error("Unknown getter");
          wt(this, t);
        }
      } {
        constructor(...t) {
          super(...t),
            (this.id = $e++),
            (this.key = void 0),
            (this._priority = 0);
        }
        get priority() {
          return this._priority;
        }
        set priority(t) {
          this._priority != t &&
            ((this._priority = t), this._onPriorityChange(t));
        }
        get() {
          const t = Ht(this);
          return t && t.getValue();
        }
        to(...t) {
          return L.to(this, t);
        }
        interpolate(...t) {
          return (
            qt(
              `${Dt}The "interpolate" function is deprecated in v9 (use "to" instead)`
            ),
            L.to(this, t)
          );
        }
        toJSON() {
          return this.get();
        }
        observerAdded(t) {
          1 == t && this._attach();
        }
        observerRemoved(t) {
          0 == t && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(t, e = !1) {
          bt(this, { type: "change", parent: this, value: t, idle: e });
        }
        _onPriorityChange(t) {
          this.idle || Q.sort(this),
            bt(this, { type: "priority", parent: this, priority: t });
        }
      }
      const He = Symbol.for("SpringPhase"),
        Xe = (t) => (1 & t[He]) > 0,
        Ye = (t) => (2 & t[He]) > 0,
        We = (t) => (4 & t[He]) > 0,
        Ze = (t, e) => (e ? (t[He] |= 3) : (t[He] &= -3)),
        Ge = (t, e) => (e ? (t[He] |= 4) : (t[He] &= -5));
      class Je extends Ne {
        constructor(t, e) {
          if (
            (super(),
            (this.key = void 0),
            (this.animation = new je()),
            (this.queue = void 0),
            (this.defaultProps = {}),
            (this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !I.und(t) || !I.und(e))
          ) {
            const s = I.obj(t) ? ue({}, t) : ue({}, e, { from: t });
            I.und(s.default) && (s.default = !0), this.start(s);
          }
        }
        get idle() {
          return !(Ye(this) || this._state.asyncTo) || We(this);
        }
        get goal() {
          return yt(this.animation.to);
        }
        get velocity() {
          const t = Ht(this);
          return t instanceof Zt
            ? t.lastVelocity || 0
            : t.getPayload().map((t) => t.lastVelocity || 0);
        }
        get hasAnimated() {
          return Xe(this);
        }
        get isAnimating() {
          return Ye(this);
        }
        get isPaused() {
          return We(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(t) {
          let e = !0,
            s = !1;
          const n = this.animation;
          let { config: i, toValues: o } = n;
          const r = Yt(n.to);
          !r && vt(n.to) && (o = C(yt(n.to))),
            n.values.forEach((a, c) => {
              if (a.done) return;
              const u = a.constructor == Gt ? 1 : r ? r[c].lastPosition : o[c];
              let l = n.immediate,
                h = u;
              if (!l) {
                if (((h = a.lastPosition), i.tension <= 0))
                  return void (a.done = !0);
                let e = (a.elapsedTime += t);
                const s = n.fromValues[c],
                  o =
                    null != a.v0
                      ? a.v0
                      : (a.v0 = I.arr(i.velocity) ? i.velocity[c] : i.velocity);
                let r;
                if (I.und(i.duration))
                  if (i.decay) {
                    const t = !0 === i.decay ? 0.998 : i.decay,
                      n = Math.exp(-(1 - t) * e);
                    (h = s + (o / (1 - t)) * (1 - n)),
                      (l = Math.abs(a.lastPosition - h) < 0.1),
                      (r = o * n);
                  } else {
                    r = null == a.lastVelocity ? o : a.lastVelocity;
                    const e =
                        i.precision ||
                        (s == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - s))),
                      n = i.restVelocity || e / 10,
                      c = i.clamp ? 0 : i.bounce,
                      d = !I.und(c),
                      p = s == u ? a.v0 > 0 : s < u;
                    let f,
                      m = !1;
                    const g = 1,
                      v = Math.ceil(t / g);
                    for (
                      let t = 0;
                      t < v &&
                      ((f = Math.abs(r) > n),
                      f || ((l = Math.abs(u - h) <= e), !l));
                      ++t
                    ) {
                      d &&
                        ((m = h == u || h > u == p),
                        m && ((r = -r * c), (h = u)));
                      (r +=
                        ((1e-6 * -i.tension * (h - u) +
                          0.001 * -i.friction * r) /
                          i.mass) *
                        g),
                        (h += r * g);
                    }
                  }
                else {
                  let n = 1;
                  i.duration > 0 &&
                    (this._memoizedDuration !== i.duration &&
                      ((this._memoizedDuration = i.duration),
                      a.durationProgress > 0 &&
                        ((a.elapsedTime = i.duration * a.durationProgress),
                        (e = a.elapsedTime += t))),
                    (n = (i.progress || 0) + e / this._memoizedDuration),
                    (n = n > 1 ? 1 : n < 0 ? 0 : n),
                    (a.durationProgress = n)),
                    (h = s + i.easing(n) * (u - s)),
                    (r = (h - a.lastPosition) / t),
                    (l = 1 == n);
                }
                (a.lastVelocity = r),
                  Number.isNaN(h) &&
                    (console.warn("Got NaN while animating:", this), (l = !0));
              }
              r && !r[c].done && (l = !1),
                l ? (a.done = !0) : (e = !1),
                a.setValue(h, i.round) && (s = !0);
            });
          const a = Ht(this),
            c = a.getValue();
          if (e) {
            const t = yt(n.to);
            (c === t && !s) || i.decay
              ? s && i.decay && this._onChange(c)
              : (a.setValue(t), this._onChange(t)),
              this._stop();
          } else s && this._onChange(c);
        }
        set(t) {
          return (
            c.batchedUpdates(() => {
              this._stop(), this._focus(t), this._set(t);
            }),
            this
          );
        }
        pause() {
          this._update({ pause: !0 });
        }
        resume() {
          this._update({ pause: !1 });
        }
        finish() {
          if (Ye(this)) {
            const { to: t, config: e } = this.animation;
            c.batchedUpdates(() => {
              this._onStart(), e.decay || this._set(t, !1), this._stop();
            });
          }
          return this;
        }
        update(t) {
          return (this.queue || (this.queue = [])).push(t), this;
        }
        start(t, e) {
          let s;
          return (
            I.und(t)
              ? ((s = this.queue || []), (this.queue = []))
              : (s = [I.obj(t) ? t : ue({}, e, { to: t })]),
            Promise.all(s.map((t) => this._update(t))).then((t) => Re(this, t))
          );
        }
        stop(t) {
          const { to: e } = this.animation;
          return (
            this._focus(this.get()),
            Be(this._state, t && this._lastCallId),
            c.batchedUpdates(() => this._stop(e, t)),
            this
          );
        }
        reset() {
          this._update({ reset: !0 });
        }
        eventObserved(t) {
          "change" == t.type
            ? this._start()
            : "priority" == t.type && (this.priority = t.priority + 1);
        }
        _prepareNode(t) {
          const e = this.key || "";
          let { to: s, from: n } = t;
          (s = I.obj(s) ? s[e] : s),
            (null == s || we(s)) && (s = void 0),
            (n = I.obj(n) ? n[e] : n),
            null == n && (n = void 0);
          const i = { to: s, from: n };
          return (
            Xe(this) ||
              (t.reverse && ([s, n] = [n, s]),
              (n = yt(n)),
              I.und(n) ? Ht(this) || this._set(s) : this._set(n)),
            i
          );
        }
        _update(t, e) {
          let s = ue({}, t);
          const { key: n, defaultProps: i } = this;
          s.default &&
            Object.assign(
              i,
              me(s, (t, e) => (/^on/.test(e) ? de(t, n) : t))
            ),
            rs(this, s, "onProps"),
            as(this, "onProps", s, this);
          const o = this._prepareNode(s);
          if (Object.isFrozen(this))
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
            );
          const r = this._state;
          return De(++this._lastCallId, {
            key: n,
            props: s,
            defaultProps: i,
            state: r,
            actions: {
              pause: () => {
                We(this) ||
                  (Ge(this, !0),
                  T(r.pauseQueue),
                  as(
                    this,
                    "onPause",
                    ze(this, ts(this, this.animation.to)),
                    this
                  ));
              },
              resume: () => {
                We(this) &&
                  (Ge(this, !1),
                  Ye(this) && this._resume(),
                  T(r.resumeQueue),
                  as(
                    this,
                    "onResume",
                    ze(this, ts(this, this.animation.to)),
                    this
                  ));
              },
              start: this._merge.bind(this, o),
            },
          }).then((t) => {
            if (s.loop && t.finished && (!e || !t.noop)) {
              const t = es(s);
              if (t) return this._update(t, !0);
            }
            return t;
          });
        }
        _merge(t, e, s) {
          if (e.cancel) return this.stop(!0), s(Le(this));
          const n = !I.und(t.to),
            i = !I.und(t.from);
          if (n || i) {
            if (!(e.callId > this._lastToId)) return s(Le(this));
            this._lastToId = e.callId;
          }
          const { key: o, defaultProps: r, animation: a } = this,
            { to: u, from: l } = a;
          let { to: h = u, from: d = l } = t;
          !i || n || (e.default && !I.und(h)) || (h = d),
            e.reverse && ([h, d] = [d, h]);
          const p = !O(d, l);
          p && (a.from = d), (d = yt(d));
          const f = !O(h, u);
          f && this._focus(h);
          const m = we(e.to),
            { config: g } = a,
            { decay: v, velocity: y } = g;
          (n || i) && (g.velocity = 0),
            e.config &&
              !m &&
              (function (t, e, s) {
                s && (Te((s = ue({}, s)), e), (e = ue({}, s, e))),
                  Te(t, e),
                  Object.assign(t, e);
                for (const r in Ce) null == t[r] && (t[r] = Ce[r]);
                let { mass: n, frequency: i, damping: o } = t;
                I.und(i) ||
                  (i < 0.01 && (i = 0.01),
                  o < 0 && (o = 0),
                  (t.tension = Math.pow((2 * Math.PI) / i, 2) * n),
                  (t.friction = (4 * Math.PI * o * n) / i));
              })(
                g,
                le(e.config, o),
                e.config !== r.config ? le(r.config, o) : void 0
              );
          let _ = Ht(this);
          if (!_ || I.und(h)) return s(ze(this, !0));
          const b = I.und(e.reset)
              ? i && !e.default
              : !I.und(d) && he(e.reset, o),
            w = b ? d : this.get(),
            S = _e(h),
            k = I.num(S) || I.arr(S) || Lt(S),
            M = !m && (!k || he(r.immediate || e.immediate, o));
          if (f) {
            const t = ne(h);
            if (t !== _.constructor) {
              if (!M)
                throw Error(
                  `Cannot animate between ${_.constructor.name} and ${t.name}, as the "to" prop suggests`
                );
              _ = this._set(S);
            }
          }
          const P = _.constructor;
          let x = vt(h),
            A = !1;
          if (!x) {
            const t = b || (!Xe(this) && p);
            (f || t) && ((A = O(_e(w), S)), (x = !A)),
              ((O(a.immediate, M) || M) && O(g.decay, v) && O(g.velocity, y)) ||
                (x = !0);
          }
          if (
            (A && Ye(this) && (a.changed && !b ? (x = !0) : x || this._stop(u)),
            !m &&
              ((x || vt(u)) &&
                ((a.values = _.getPayload()),
                (a.toValues = vt(h) ? null : P == Gt ? [1] : C(S))),
              a.immediate != M && ((a.immediate = M), M || b || this._set(u)),
              x))
          ) {
            const { onRest: t } = a;
            E(os, (t) => rs(this, e, t));
            const n = ze(this, ts(this, u));
            T(this._pendingCalls, n),
              this._pendingCalls.add(s),
              a.changed &&
                c.batchedUpdates(() => {
                  (a.changed = !b),
                    null == t || t(n, this),
                    b
                      ? le(r.onRest, n)
                      : null == a.onStart || a.onStart(n, this);
                });
          }
          b && this._set(w),
            m
              ? s(Ue(e.to, e, this._state, this))
              : x
              ? this._start()
              : Ye(this) && !f
              ? this._pendingCalls.add(s)
              : s(qe(w));
        }
        _focus(t) {
          const e = this.animation;
          t !== e.to &&
            (_t(this) && this._detach(),
            (e.to = t),
            _t(this) && this._attach());
        }
        _attach() {
          let t = 0;
          const { to: e } = this.animation;
          vt(e) && (St(e, this), Qe(e) && (t = e.priority + 1)),
            (this.priority = t);
        }
        _detach() {
          const { to: t } = this.animation;
          vt(t) && kt(t, this);
        }
        _set(t, e = !0) {
          const s = yt(t);
          if (!I.und(s)) {
            const t = Ht(this);
            if (!t || !O(s, t.getValue())) {
              const n = ne(s);
              t && t.constructor == n ? t.setValue(s) : Xt(this, n.create(s)),
                t &&
                  c.batchedUpdates(() => {
                    this._onChange(s, e);
                  });
            }
          }
          return Ht(this);
        }
        _onStart() {
          const t = this.animation;
          t.changed ||
            ((t.changed = !0),
            as(this, "onStart", ze(this, ts(this, t.to)), this));
        }
        _onChange(t, e) {
          e || (this._onStart(), le(this.animation.onChange, t, this)),
            le(this.defaultProps.onChange, t, this),
            super._onChange(t, e);
        }
        _start() {
          const t = this.animation;
          Ht(this).reset(yt(t.to)),
            t.immediate || (t.fromValues = t.values.map((t) => t.lastPosition)),
            Ye(this) || (Ze(this, !0), We(this) || this._resume());
        }
        _resume() {
          L.skipAnimation ? this.finish() : Q.start(this);
        }
        _stop(t, e) {
          if (Ye(this)) {
            Ze(this, !1);
            const s = this.animation;
            E(s.values, (t) => {
              t.done = !0;
            }),
              s.toValues && (s.onChange = s.onPause = s.onResume = void 0),
              bt(this, { type: "idle", parent: this });
            const n = e
              ? Le(this.get())
              : ze(this.get(), ts(this, null != t ? t : s.to));
            T(this._pendingCalls, n),
              s.changed && ((s.changed = !1), as(this, "onRest", n, this));
          }
        }
      }
      function ts(t, e) {
        const s = _e(e);
        return O(_e(t.get()), s);
      }
      function es(t, e = t.loop, s = t.to) {
        let n = le(e);
        if (n) {
          const i = !0 !== n && ye(n),
            o = (i || t).reverse,
            r = !i || i.reset;
          return ss(
            ue(
              {},
              t,
              {
                loop: e,
                default: !1,
                pause: void 0,
                to: !o || we(s) ? s : void 0,
                from: r ? t.from : void 0,
                reset: r,
              },
              i
            )
          );
        }
      }
      function ss(t) {
        const { to: e, from: s } = (t = ye(t)),
          n = new Set();
        return (
          I.obj(e) && is(e, n),
          I.obj(s) && is(s, n),
          (t.keys = n.size ? Array.from(n) : null),
          t
        );
      }
      function ns(t) {
        const e = ss(t);
        return I.und(e.default) && (e.default = me(e)), e;
      }
      function is(t, e) {
        x(t, (t, s) => null != t && e.add(s));
      }
      const os = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function rs(t, e, s) {
        t.animation[s] = e[s] !== pe(e, s) ? de(e[s], t.key) : void 0;
      }
      function as(t, e, ...s) {
        var n, i, o, r;
        null == (n = (i = t.animation)[e]) || n.call(i, ...s),
          null == (o = (r = t.defaultProps)[e]) || o.call(r, ...s);
      }
      const cs = ["onStart", "onChange", "onRest"];
      let us = 1;
      class ls {
        constructor(t, e) {
          (this.id = us++),
            (this.springs = {}),
            (this.queue = []),
            (this.ref = void 0),
            (this._flush = void 0),
            (this._initialProps = void 0),
            (this._lastAsyncId = 0),
            (this._active = new Set()),
            (this._changed = new Set()),
            (this._started = !1),
            (this._item = void 0),
            (this._state = {
              paused: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._events = {
              onStart: new Map(),
              onChange: new Map(),
              onRest: new Map(),
            }),
            (this._onFrame = this._onFrame.bind(this)),
            e && (this._flush = e),
            t && this.start(ue({ default: !0 }, t));
        }
        get idle() {
          return (
            !this._state.asyncTo &&
            Object.values(this.springs).every(
              (t) => t.idle && !t.isDelayed && !t.isPaused
            )
          );
        }
        get item() {
          return this._item;
        }
        set item(t) {
          this._item = t;
        }
        get() {
          const t = {};
          return this.each((e, s) => (t[s] = e.get())), t;
        }
        set(t) {
          for (const e in t) {
            const s = t[e];
            I.und(s) || this.springs[e].set(s);
          }
        }
        update(t) {
          return t && this.queue.push(ss(t)), this;
        }
        start(t) {
          let { queue: e } = this;
          return (
            t ? (e = C(t).map(ss)) : (this.queue = []),
            this._flush ? this._flush(this, e) : (vs(this, e), hs(this, e))
          );
        }
        stop(t, e) {
          if ((t !== !!t && (e = t), e)) {
            const s = this.springs;
            E(C(e), (e) => s[e].stop(!!t));
          } else
            Be(this._state, this._lastAsyncId), this.each((e) => e.stop(!!t));
          return this;
        }
        pause(t) {
          if (I.und(t)) this.start({ pause: !0 });
          else {
            const e = this.springs;
            E(C(t), (t) => e[t].pause());
          }
          return this;
        }
        resume(t) {
          if (I.und(t)) this.start({ pause: !1 });
          else {
            const e = this.springs;
            E(C(t), (t) => e[t].resume());
          }
          return this;
        }
        each(t) {
          x(this.springs, t);
        }
        _onFrame() {
          const { onStart: t, onChange: e, onRest: s } = this._events,
            n = this._active.size > 0,
            i = this._changed.size > 0;
          ((n && !this._started) || (i && !this._started)) &&
            ((this._started = !0),
            A(t, ([t, e]) => {
              (e.value = this.get()), t(e, this, this._item);
            }));
          const o = !n && this._started,
            r = i || (o && s.size) ? this.get() : null;
          i &&
            e.size &&
            A(e, ([t, e]) => {
              (e.value = r), t(e, this, this._item);
            }),
            o &&
              ((this._started = !1),
              A(s, ([t, e]) => {
                (e.value = r), t(e, this, this._item);
              }));
        }
        eventObserved(t) {
          if ("change" == t.type)
            this._changed.add(t.parent), t.idle || this._active.add(t.parent);
          else {
            if ("idle" != t.type) return;
            this._active.delete(t.parent);
          }
          c.onFrame(this._onFrame);
        }
      }
      function hs(t, e) {
        return Promise.all(e.map((e) => ds(t, e))).then((e) => Re(t, e));
      }
      async function ds(t, e, s) {
        const { keys: n, to: i, from: o, loop: r, onRest: a, onResolve: u } = e,
          l = I.obj(e.default) && e.default;
        r && (e.loop = !1),
          !1 === i && (e.to = null),
          !1 === o && (e.from = null);
        const h = I.arr(i) || I.fun(i) ? i : void 0;
        h
          ? ((e.to = void 0), (e.onRest = void 0), l && (l.onRest = void 0))
          : E(cs, (s) => {
              const n = e[s];
              if (I.fun(n)) {
                const i = t._events[s];
                (e[s] = ({ finished: t, cancelled: e }) => {
                  const s = i.get(n);
                  s
                    ? (t || (s.finished = !1), e && (s.cancelled = !0))
                    : i.set(n, {
                        value: null,
                        finished: t || !1,
                        cancelled: e || !1,
                      });
                }),
                  l && (l[s] = e[s]);
              }
            });
        const d = t._state;
        e.pause === !d.paused
          ? ((d.paused = e.pause), T(e.pause ? d.pauseQueue : d.resumeQueue))
          : d.paused && (e.pause = !0);
        const p = (n || Object.keys(t.springs)).map((s) =>
            t.springs[s].start(e)
          ),
          f = !0 === e.cancel || !0 === pe(e, "cancel");
        (h || (f && d.asyncId)) &&
          p.push(
            De(++t._lastAsyncId, {
              props: e,
              state: d,
              actions: {
                pause: P,
                resume: P,
                start(e, s) {
                  f
                    ? (Be(d, t._lastAsyncId), s(Le(t)))
                    : ((e.onRest = a), s(Ue(h, e, d, t)));
                },
              },
            })
          ),
          d.paused &&
            (await new Promise((t) => {
              d.resumeQueue.add(t);
            }));
        const m = Re(t, await Promise.all(p));
        if (r && m.finished && (!s || !m.noop)) {
          const s = es(e, r, i);
          if (s) return vs(t, [s]), ds(t, s, !0);
        }
        return u && c.batchedUpdates(() => u(m, t, t.item)), m;
      }
      function ps(t, e) {
        const s = ue({}, t.springs);
        return (
          e &&
            E(C(e), (t) => {
              I.und(t.keys) && (t = ss(t)),
                I.obj(t.to) || (t = ue({}, t, { to: void 0 })),
                gs(s, t, (t) => ms(t));
            }),
          fs(t, s),
          s
        );
      }
      function fs(t, e) {
        x(e, (e, s) => {
          t.springs[s] || ((t.springs[s] = e), St(e, t));
        });
      }
      function ms(t, e) {
        const s = new Je();
        return (s.key = t), e && St(s, e), s;
      }
      function gs(t, e, s) {
        e.keys &&
          E(e.keys, (n) => {
            (t[n] || (t[n] = s(n)))._prepareNode(e);
          });
      }
      function vs(t, e) {
        E(e, (e) => {
          gs(t.springs, e, (e) => ms(e, t));
        });
      }
      function ys(t, e) {
        if (null == t) return {};
        var s,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          (s = o[n]), e.indexOf(s) >= 0 || (i[s] = t[s]);
        return i;
      }
      const _s = ["children"],
        bs = (t) => {
          let { children: e } = t,
            s = ys(t, _s);
          const n = (0, i.useContext)(ws),
            o = s.pause || !!n.pause,
            r = s.immediate || !!n.immediate;
          s = (function (t, e) {
            const [s] = (0, i.useState)(() => ({ inputs: e, result: t() })),
              n = (0, i.useRef)(),
              o = n.current;
            let r = o;
            r
              ? Boolean(
                  e &&
                    r.inputs &&
                    (function (t, e) {
                      if (t.length !== e.length) return !1;
                      for (let s = 0; s < t.length; s++)
                        if (t[s] !== e[s]) return !1;
                      return !0;
                    })(e, r.inputs)
                ) || (r = { inputs: e, result: t() })
              : (r = s);
            return (
              (0, i.useEffect)(() => {
                (n.current = r), o == s && (s.inputs = s.result = void 0);
              }, [r]),
              r.result
            );
          })(() => ({ pause: o, immediate: r }), [o, r]);
          const { Provider: a } = ws;
          return i.createElement(a, { value: s }, e);
        },
        ws =
          ((Ss = bs),
          (ks = {}),
          Object.assign(Ss, i.createContext(ks)),
          (Ss.Provider._context = Ss),
          (Ss.Consumer._context = Ss),
          Ss);
      var Ss, ks;
      (bs.Provider = ws.Provider), (bs.Consumer = ws.Consumer);
      const Ms = () => {
        const t = [],
          e = function (e) {
            zt(
              `${Dt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
            );
            const n = [];
            return (
              E(t, (t, i) => {
                if (I.und(e)) n.push(t.start());
                else {
                  const o = s(e, t, i);
                  o && n.push(t.start(o));
                }
              }),
              n
            );
          };
        (e.current = t),
          (e.add = function (e) {
            t.includes(e) || t.push(e);
          }),
          (e.delete = function (e) {
            const s = t.indexOf(e);
            ~s && t.splice(s, 1);
          }),
          (e.pause = function () {
            return E(t, (t) => t.pause(...arguments)), this;
          }),
          (e.resume = function () {
            return E(t, (t) => t.resume(...arguments)), this;
          }),
          (e.set = function (e) {
            E(t, (t) => t.set(e));
          }),
          (e.start = function (e) {
            const s = [];
            return (
              E(t, (t, n) => {
                if (I.und(e)) s.push(t.start());
                else {
                  const i = this._getProps(e, t, n);
                  i && s.push(t.start(i));
                }
              }),
              s
            );
          }),
          (e.stop = function () {
            return E(t, (t) => t.stop(...arguments)), this;
          }),
          (e.update = function (e) {
            return E(t, (t, s) => t.update(this._getProps(e, t, s))), this;
          });
        const s = function (t, e, s) {
          return I.fun(t) ? t(s, e) : t;
        };
        return (e._getProps = s), e;
      };
      function Ps(t, e, s) {
        const n = I.fun(e) && e;
        n && !s && (s = []);
        const o = (0, i.useMemo)(
            () => (n || 3 == arguments.length ? Ms() : void 0),
            []
          ),
          r = (0, i.useRef)(0),
          a = Kt(),
          c = (0, i.useMemo)(
            () => ({
              ctrls: [],
              queue: [],
              flush(t, e) {
                const s = ps(t, e);
                return r.current > 0 &&
                  !c.queue.length &&
                  !Object.keys(s).some((e) => !t.springs[e])
                  ? hs(t, e)
                  : new Promise((n) => {
                      fs(t, s),
                        c.queue.push(() => {
                          n(hs(t, e));
                        }),
                        a();
                    });
              },
            }),
            []
          ),
          u = (0, i.useRef)([...c.ctrls]),
          l = [],
          h = Qt(t) || 0;
        function d(t, s) {
          for (let i = t; i < s; i++) {
            const t = u.current[i] || (u.current[i] = new ls(null, c.flush)),
              s = n ? n(i, t) : e[i];
            s && (l[i] = ns(s));
          }
        }
        (0, i.useMemo)(() => {
          E(u.current.slice(t, h), (t) => {
            Se(t, o), t.stop(!0);
          }),
            (u.current.length = t),
            d(h, t);
        }, [t]),
          (0, i.useMemo)(() => {
            d(0, Math.min(h, t));
          }, s);
        const p = u.current.map((t, e) => ps(t, l[e])),
          f = (0, i.useContext)(bs),
          m = Qt(f),
          g = f !== m && be(f);
        $t(() => {
          r.current++, (c.ctrls = u.current);
          const { queue: t } = c;
          t.length && ((c.queue = []), E(t, (t) => t())),
            E(u.current, (t, e) => {
              null == o || o.add(t), g && t.start({ default: f });
              const s = l[e];
              s && (ke(t, s.ref), t.ref ? t.queue.push(s) : t.start(s));
            });
        }),
          Ut(() => () => {
            E(c.ctrls, (t) => t.stop(!0));
          });
        const v = p.map((t) => ue({}, t));
        return o ? [v, o] : v;
      }
      function Is(t, e) {
        const s = I.fun(t),
          [[n], i] = Ps(1, s ? t : [t], s ? e || [] : e);
        return s || 2 == arguments.length ? [n, i] : n;
      }
      let Os;
      !(function (t) {
        (t.MOUNT = "mount"),
          (t.ENTER = "enter"),
          (t.UPDATE = "update"),
          (t.LEAVE = "leave");
      })(Os || (Os = {}));
      class Es extends Ne {
        constructor(t, e) {
          super(),
            (this.key = void 0),
            (this.idle = !0),
            (this.calc = void 0),
            (this._active = new Set()),
            (this.source = t),
            (this.calc = pt(...e));
          const s = this._get(),
            n = ne(s);
          Xt(this, n.create(s));
        }
        advance(t) {
          const e = this._get();
          O(e, this.get()) ||
            (Ht(this).setValue(e), this._onChange(e, this.idle)),
            !this.idle && Cs(this._active) && As(this);
        }
        _get() {
          const t = I.arr(this.source)
            ? this.source.map(yt)
            : C(yt(this.source));
          return this.calc(...t);
        }
        _start() {
          this.idle &&
            !Cs(this._active) &&
            ((this.idle = !1),
            E(Yt(this), (t) => {
              t.done = !1;
            }),
            L.skipAnimation
              ? (c.batchedUpdates(() => this.advance()), As(this))
              : Q.start(this));
        }
        _attach() {
          let t = 1;
          E(C(this.source), (e) => {
            vt(e) && St(e, this),
              Qe(e) &&
                (e.idle || this._active.add(e),
                (t = Math.max(t, e.priority + 1)));
          }),
            (this.priority = t),
            this._start();
        }
        _detach() {
          E(C(this.source), (t) => {
            vt(t) && kt(t, this);
          }),
            this._active.clear(),
            As(this);
        }
        eventObserved(t) {
          "change" == t.type
            ? t.idle
              ? this.advance()
              : (this._active.add(t.parent), this._start())
            : "idle" == t.type
            ? this._active.delete(t.parent)
            : "priority" == t.type &&
              (this.priority = C(this.source).reduce(
                (t, e) => Math.max(t, (Qe(e) ? e.priority : 0) + 1),
                0
              ));
        }
      }
      function xs(t) {
        return !1 !== t.idle;
      }
      function Cs(t) {
        return !t.size || Array.from(t).every(xs);
      }
      function As(t) {
        t.idle ||
          ((t.idle = !0),
          E(Yt(t), (t) => {
            t.done = !0;
          }),
          bt(t, { type: "idle", parent: t }));
      }
      L.assign({ createStringInterpolator: jt, to: (t, e) => new Es(t, e) });
      Q.advance;
      const Ts = ["primitive"].concat(
        Object.keys(o)
          .filter((t) => /^[A-Z]/.test(t))
          .map((t) => t[0].toLowerCase() + t.slice(1))
      );
      L.assign({
        createStringInterpolator: jt,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
        frameLoop: "demand",
      }),
        (0, r.gy)(() => {
          c.advance();
        });
      const Vs = ((
        t,
        {
          applyAnimatedValues: e = () => !1,
          createAnimatedStyle: s = (t) => new te(t),
          getComponentProps: n = (t) => t,
        } = {}
      ) => {
        const i = {
            applyAnimatedValues: e,
            createAnimatedStyle: s,
            getComponentProps: n,
          },
          o = (t) => {
            const e = ce(t) || "Anonymous";
            return (
              ((t = I.str(t)
                ? o[t] || (o[t] = oe(t, i))
                : t[ae] || (t[ae] = oe(t, i))).displayName = `Animated(${e})`),
              t
            );
          };
        return (
          x(t, (e, s) => {
            I.arr(t) && (s = ce(e)), (o[s] = o(e));
          }),
          { animated: o }
        );
      })(Ts, { applyAnimatedValues: r.nH }).animated;
      const js = {
        toVector: (t, e) => (
          void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]
        ),
        add: (t, e) => [t[0] + e[0], t[1] + e[1]],
        sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
        addTo(t, e) {
          (t[0] += e[0]), (t[1] += e[1]);
        },
        subTo(t, e) {
          (t[0] -= e[0]), (t[1] -= e[1]);
        },
      };
      function Ds(t, e, s) {
        return 0 === e || Math.abs(e) === 1 / 0
          ? Math.pow(t, 5 * s)
          : (t * e * s) / (e + s * t);
      }
      function Rs(t, e, s, n = 0.15) {
        return 0 === n
          ? (function (t, e, s) {
              return Math.max(e, Math.min(t, s));
            })(t, e, s)
          : t < e
          ? -Ds(e - t, s - e, n) + e
          : t > s
          ? +Ds(t - s, s - e, n) + s
          : t;
      }
      function qs(t, e, s) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = s),
          t
        );
      }
      function zs(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function Ls(t) {
        for (var e = 1; e < arguments.length; e++) {
          var s = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? zs(Object(s), !0).forEach(function (e) {
                qs(t, e, s[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : zs(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e)
                );
              });
        }
        return t;
      }
      const Us = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function Bs(t) {
        return t ? t[0].toUpperCase() + t.slice(1) : "";
      }
      const Ks = ["gotpointercapture", "lostpointercapture"];
      function Fs(t) {
        let e = t.substring(2).toLowerCase();
        const s = !!~e.indexOf("passive");
        s && (e = e.replace("passive", ""));
        const n = Ks.includes(e) ? "capturecapture" : "capture",
          i = !!~e.indexOf(n);
        return (
          i && (e = e.replace("capture", "")),
          { device: e, capture: i, passive: s }
        );
      }
      function Qs(t) {
        return "touches" in t;
      }
      function $s(t) {
        return Qs(t)
          ? (function (t) {
              return "touchend" === t.type || "touchcancel" === t.type
                ? t.changedTouches
                : t.targetTouches;
            })(t)[0]
          : t;
      }
      function Ns(t, e) {
        const s = e.clientX - t.clientX,
          n = e.clientY - t.clientY,
          i = (e.clientX + t.clientX) / 2,
          o = (e.clientY + t.clientY) / 2,
          r = Math.hypot(s, n);
        return {
          angle: (-180 * Math.atan2(s, n)) / Math.PI,
          distance: r,
          origin: [i, o],
        };
      }
      function Hs(t) {
        return (function (t) {
          return Array.from(t.touches).filter((e) => {
            var s, n;
            return (
              e.target === t.currentTarget ||
              (null === (s = t.currentTarget) ||
              void 0 === s ||
              null === (n = s.contains) ||
              void 0 === n
                ? void 0
                : n.call(s, e.target))
            );
          });
        })(t).map((t) => t.identifier);
      }
      function Xs(t, e) {
        const [s, n] = Array.from(t.touches).filter((t) =>
          e.includes(t.identifier)
        );
        return Ns(s, n);
      }
      function Ys(t) {
        const e = $s(t);
        return Qs(t) ? e.identifier : e.pointerId;
      }
      function Ws(t) {
        const e = $s(t);
        return [e.clientX, e.clientY];
      }
      function Zs(t) {
        let { deltaX: e, deltaY: s, deltaMode: n } = t;
        return (
          1 === n
            ? ((e *= 40), (s *= 40))
            : 2 === n && ((e *= 800), (s *= 800)),
          [e, s]
        );
      }
      function Gs(t, ...e) {
        return "function" === typeof t ? t(...e) : t;
      }
      function Js() {}
      function tn(...t) {
        return 0 === t.length
          ? Js
          : 1 === t.length
          ? t[0]
          : function () {
              let e;
              for (const s of t) e = s.apply(this, arguments) || e;
              return e;
            };
      }
      function en(t, e) {
        return Object.assign({}, e, t || {});
      }
      class sn {
        constructor(t, e, s) {
          (this.ctrl = t),
            (this.args = e),
            (this.key = s),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(t) {
          this.ctrl.state[this.key] = t;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          const { state: t, shared: e, ingKey: s, args: n } = this;
          (e[s] = t._active = t.active = t._blocked = t._force = !1),
            (t._step = [!1, !1]),
            (t.intentional = !1),
            (t._movement = [0, 0]),
            (t._distance = [0, 0]),
            (t._direction = [0, 0]),
            (t._delta = [0, 0]),
            (t._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (t.args = n),
            (t.axis = void 0),
            (t.memo = void 0),
            (t.elapsedTime = 0),
            (t.direction = [0, 0]),
            (t.distance = [0, 0]),
            (t.overflow = [0, 0]),
            (t._movementBound = [!1, !1]),
            (t.velocity = [0, 0]),
            (t.movement = [0, 0]),
            (t.delta = [0, 0]),
            (t.timeStamp = 0);
        }
        start(t) {
          const e = this.state,
            s = this.config;
          e._active ||
            (this.reset(),
            this.computeInitial(),
            (e._active = !0),
            (e.target = t.target),
            (e.currentTarget = t.currentTarget),
            (e.lastOffset = s.from ? Gs(s.from, e) : e.offset),
            (e.offset = e.lastOffset)),
            (e.startTime = e.timeStamp = t.timeStamp);
        }
        computeValues(t) {
          const e = this.state;
          (e._values = t), (e.values = this.config.transform(t));
        }
        computeInitial() {
          const t = this.state;
          (t._initial = t._values), (t.initial = t.values);
        }
        compute(t) {
          const { state: e, config: s, shared: n } = this;
          e.args = this.args;
          let i = 0;
          if (
            (t &&
              ((e.event = t),
              s.preventDefault && t.cancelable && e.event.preventDefault(),
              (e.type = t.type),
              (n.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (n.locked = !!document.pointerLockElement),
              Object.assign(
                n,
                (function (t) {
                  const e = {};
                  if (
                    ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t)
                  ) {
                    const {
                      shiftKey: s,
                      altKey: n,
                      metaKey: i,
                      ctrlKey: o,
                    } = t;
                    Object.assign(e, {
                      shiftKey: s,
                      altKey: n,
                      metaKey: i,
                      ctrlKey: o,
                    });
                  }
                  return e;
                })(t)
              ),
              (n.down = n.pressed = n.buttons % 2 === 1 || n.touches > 0),
              (i = t.timeStamp - e.timeStamp),
              (e.timeStamp = t.timeStamp),
              (e.elapsedTime = e.timeStamp - e.startTime)),
            e._active)
          ) {
            const t = e._delta.map(Math.abs);
            js.addTo(e._distance, t);
          }
          const [o, r] = e._movement,
            [a, c] = s.threshold,
            { _step: u, values: l } = e;
          if (
            (s.hasCustomTransform
              ? (!1 === u[0] && (u[0] = Math.abs(o) >= a && l[0]),
                !1 === u[1] && (u[1] = Math.abs(r) >= c && l[1]))
              : (!1 === u[0] && (u[0] = Math.abs(o) >= a && Math.sign(o) * a),
                !1 === u[1] && (u[1] = Math.abs(r) >= c && Math.sign(r) * c)),
            (e.intentional = !1 !== u[0] || !1 !== u[1]),
            !e.intentional)
          )
            return;
          const h = [0, 0];
          if (s.hasCustomTransform) {
            const [t, e] = l;
            (h[0] = !1 !== u[0] ? t - u[0] : 0),
              (h[1] = !1 !== u[1] ? e - u[1] : 0);
          } else
            (h[0] = !1 !== u[0] ? o - u[0] : 0),
              (h[1] = !1 !== u[1] ? r - u[1] : 0);
          if (
            (this.intent && this.intent(h),
            ((e._active && !e._blocked) || e.active) &&
              ((e.first = e._active && !e.active),
              (e.last = !e._active && e.active),
              (e.active = n[this.ingKey] = e._active),
              t))
          ) {
            e.first &&
              ("bounds" in s && (e._bounds = Gs(s.bounds, e)),
              this.setup && this.setup()),
              (e.movement = h);
            const t = e.offset;
            if ((this.computeOffset(), !e.last || i > 32)) {
              e.delta = js.sub(e.offset, t);
              const s = e.delta.map(Math.abs);
              js.addTo(e.distance, s),
                (e.direction = e.delta.map(Math.sign)),
                (e._direction = e._delta.map(Math.sign)),
                !e.first && i > 0 && (e.velocity = [s[0] / i, s[1] / i]);
            }
          }
          const [d, p] = e.offset,
            [[f, m], [g, v]] = e._bounds;
          (e.overflow = [
            d < f ? -1 : d > m ? 1 : 0,
            p < g ? -1 : p > v ? 1 : 0,
          ]),
            (e._movementBound[0] =
              !!e.overflow[0] &&
              (!1 === e._movementBound[0]
                ? e._movement[0]
                : e._movementBound[0])),
            (e._movementBound[1] =
              !!e.overflow[1] &&
              (!1 === e._movementBound[1]
                ? e._movement[1]
                : e._movementBound[1]));
          const y = (e._active && s.rubberband) || [0, 0];
          (e.offset = (function (t, [e, s], [n, i]) {
            const [[o, r], [a, c]] = t;
            return [Rs(e, o, r, n), Rs(s, a, c, i)];
          })(e._bounds, e.offset, y)),
            this.computeMovement();
        }
        emit() {
          const t = this.state,
            e = this.shared,
            s = this.config;
          if (
            (t._active || this.clean(),
            (t._blocked || !t.intentional) && !t._force && !s.triggerAllEvents)
          )
            return;
          const n = this.handler(
            Ls(Ls(Ls({}, e), t), {}, { [this.aliasKey]: t.values })
          );
          void 0 !== n && (t.memo = n);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      }
      class nn extends sn {
        constructor(...t) {
          super(...t), qs(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = js.add(
            this.state.lastOffset,
            this.state.movement
          );
        }
        computeMovement() {
          this.state.movement = js.sub(
            this.state.offset,
            this.state.lastOffset
          );
        }
        intent(t) {
          (this.state.axis =
            this.state.axis ||
            (function ([t, e]) {
              const s = Math.abs(t) - Math.abs(e);
              return s > 0 ? "x" : s < 0 ? "y" : void 0;
            })(t)),
            (this.state._blocked =
              ((this.config.lockDirection || !!this.config.axis) &&
                !this.state.axis) ||
              (!!this.config.axis && this.config.axis !== this.state.axis)),
            this.state._blocked ||
              ((this.config.axis || this.config.lockDirection) &&
                (function (t, e) {
                  switch (e) {
                    case "x":
                      t[1] = 0;
                      break;
                    case "y":
                      t[0] = 0;
                  }
                })(t, this.state.axis));
        }
      }
      const on = (t) => t,
        rn = {
          enabled: (t = !0) => t,
          preventDefault: (t = !1) => t,
          triggerAllEvents: (t = !1) => t,
          rubberband(t = 0) {
            switch (t) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return js.toVector(t);
            }
          },
          from: (t) =>
            "function" === typeof t ? t : null != t ? js.toVector(t) : void 0,
          transform(t, e, s) {
            const n = t || s.shared.transform;
            return (this.hasCustomTransform = !!n), n || on;
          },
          threshold: (t) => js.toVector(t, 0),
        };
      const an = Ls(
          Ls({}, rn),
          {},
          {
            axis(t, e, { axis: s }) {
              if (((this.lockDirection = "lock" === s), !this.lockDirection))
                return s;
            },
            bounds(t = {}) {
              if ("function" === typeof t) return (e) => an.bounds(t(e));
              if ("current" in t) return () => t.current;
              if ("function" === typeof HTMLElement && t instanceof HTMLElement)
                return t;
              const {
                left: e = -1 / 0,
                right: s = 1 / 0,
                top: n = -1 / 0,
                bottom: i = 1 / 0,
              } = t;
              return [
                [e, s],
                [n, i],
              ];
            },
          }
        ),
        cn = {
          ArrowRight: (t = 1) => [10 * t, 0],
          ArrowLeft: (t = 1) => [-10 * t, 0],
          ArrowUp: (t = 1) => [0, -10 * t],
          ArrowDown: (t = 1) => [0, 10 * t],
        };
      const un =
        "undefined" !== typeof window &&
        window.document &&
        window.document.createElement;
      function ln() {
        return (
          (un && "ontouchstart" in window) ||
          (un && window.navigator.maxTouchPoints > 1)
        );
      }
      const hn = {
          isBrowser: un,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (t) {
              return !1;
            }
          })(),
          touch: ln(),
          touchscreen: ln(),
          pointer: un && "onpointerdown" in window,
          pointerLock: un && "exitPointerLock" in window.document,
        },
        dn = Ls(
          Ls({}, an),
          {},
          {
            pointerLock(
              t,
              e,
              { pointer: { lock: s = !1, touch: n = !1 } = {} }
            ) {
              return (this.useTouch = n && hn.touch), s && hn.pointerLock;
            },
            device(t, e) {
              return this.useTouch
                ? "touch"
                : this.pointerLock
                ? "mouse"
                : hn.pointer
                ? "pointer"
                : hn.touch
                ? "touch"
                : "mouse";
            },
            preventScroll(t = !1, e, { preventScrollAxis: s = "y" }) {
              return (
                s && (this.preventScrollAxis = s),
                !!hn.touchscreen && ("number" === typeof t ? t : !!t && 250)
              );
            },
            pointerCapture(
              t,
              e,
              { pointer: { capture: s = !0, buttons: n = 1 } = {} }
            ) {
              return (
                (this.pointerButtons = n),
                !this.pointerLock && "pointer" === this.device && s
              );
            },
            threshold(
              t,
              e,
              { filterTaps: s = !1, tapsThreshold: n = 3, axis: i }
            ) {
              const o = js.toVector(t, s ? n : i ? 1 : 0);
              return (this.filterTaps = s), (this.tapsThreshold = n), o;
            },
            swipe({
              velocity: t = 0.5,
              distance: e = 50,
              duration: s = 250,
            } = {}) {
              return {
                velocity: this.transform(js.toVector(t)),
                distance: this.transform(js.toVector(e)),
                duration: s,
              };
            },
            delay(t = 0) {
              switch (t) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return t;
              }
            },
          }
        );
      const pn = Ls(
        Ls({}, rn),
        {},
        {
          useTouch: (t, e, { pointer: { touch: s = !1 } = {} }) =>
            s && hn.touch,
          device(t, e, s) {
            if (s.shared.target && !hn.touch && hn.gesture) return "gesture";
            if (this.useTouch) return "touch";
            if (hn.touchscreen) {
              if (hn.pointer) return "pointer";
              if (hn.touch) return "touch";
            }
          },
          bounds(t, e, { scaleBounds: s = {}, angleBounds: n = {} }) {
            const i = (t) => {
                const e = en(Gs(s, t), { min: -1 / 0, max: 1 / 0 });
                return [e.min, e.max];
              },
              o = (t) => {
                const e = en(Gs(n, t), { min: -1 / 0, max: 1 / 0 });
                return [e.min, e.max];
              };
            return "function" !== typeof s && "function" !== typeof n
              ? [i(), o()]
              : (t) => [i(t), o(t)];
          },
          threshold(t, e, s) {
            this.lockDirection = "lock" === s.axis;
            return js.toVector(t, this.lockDirection ? [0.1, 3] : 0);
          },
        }
      );
      const fn = Ls(Ls({}, an), {}, { mouseOnly: (t = !0) => t });
      const mn = an;
      const gn = an;
      const vn = Ls(Ls({}, an), {}, { mouseOnly: (t = !0) => t }),
        yn = new Map(),
        _n = new Map();
      function bn(t) {
        yn.set(t.key, t.engine), _n.set(t.key, t.resolver);
      }
      const wn = {
          key: "drag",
          engine: class extends nn {
            constructor(...t) {
              super(...t), qs(this, "ingKey", "dragging");
            }
            reset() {
              super.reset();
              const t = this.state;
              (t._pointerId = void 0),
                (t._pointerActive = !1),
                (t._keyboardActive = !1),
                (t._preventScroll = !1),
                (t._delayed = !1),
                (t.swipe = [0, 0]),
                (t.tap = !1),
                (t.canceled = !1),
                (t.cancel = this.cancel.bind(this));
            }
            setup() {
              const t = this.state;
              if (t._bounds instanceof HTMLElement) {
                const e = t._bounds.getBoundingClientRect(),
                  s = t.currentTarget.getBoundingClientRect(),
                  n = {
                    left: e.left - s.left + t.offset[0],
                    right: e.right - s.right + t.offset[0],
                    top: e.top - s.top + t.offset[1],
                    bottom: e.bottom - s.bottom + t.offset[1],
                  };
                t._bounds = an.bounds(n);
              }
            }
            cancel() {
              const t = this.state;
              t.canceled ||
                ((t.canceled = !0),
                (t._active = !1),
                setTimeout(() => {
                  this.compute(), this.emit();
                }, 0));
            }
            setActive() {
              this.state._active =
                this.state._pointerActive || this.state._keyboardActive;
            }
            clean() {
              this.pointerClean(),
                (this.state._pointerActive = !1),
                (this.state._keyboardActive = !1),
                super.clean();
            }
            pointerDown(t) {
              const e = this.config,
                s = this.state;
              (null == t.buttons ||
                (Array.isArray(e.pointerButtons)
                  ? e.pointerButtons.includes(t.buttons)
                  : -1 === e.pointerButtons ||
                    e.pointerButtons === t.buttons)) &&
                (this.ctrl.setEventIds(t),
                e.pointerCapture && t.target.setPointerCapture(t.pointerId),
                s._pointerActive ||
                  (this.start(t),
                  this.setupPointer(t),
                  (s._pointerId = Ys(t)),
                  (s._pointerActive = !0),
                  this.computeValues(Ws(t)),
                  this.computeInitial(),
                  e.preventScroll
                    ? this.setupScrollPrevention(t)
                    : e.delay > 0
                    ? this.setupDelayTrigger(t)
                    : this.startPointerDrag(t)));
            }
            startPointerDrag(t) {
              const e = this.state;
              (e._active = !0),
                (e._preventScroll = !0),
                (e._delayed = !1),
                this.compute(t),
                this.emit();
            }
            pointerMove(t) {
              const e = this.state,
                s = this.config;
              if (!e._pointerActive) return;
              if (e.type === t.type && t.timeStamp === e.timeStamp) return;
              const n = Ys(t);
              if (void 0 !== e._pointerId && n !== e._pointerId) return;
              const i = Ws(t);
              return (
                document.pointerLockElement === t.target
                  ? (e._delta = [t.movementX, t.movementY])
                  : ((e._delta = js.sub(i, e._values)), this.computeValues(i)),
                js.addTo(e._movement, e._delta),
                this.compute(t),
                e._delayed
                  ? (this.timeoutStore.remove("dragDelay"),
                    (e.active = !1),
                    void this.startPointerDrag(t))
                  : s.preventScroll && !e._preventScroll
                  ? e.axis
                    ? e.axis === s.preventScrollAxis ||
                      "xy" === s.preventScrollAxis
                      ? ((e._active = !1), void this.clean())
                      : (this.timeoutStore.remove("startPointerDrag"),
                        void this.startPointerDrag(t))
                    : void 0
                  : void this.emit()
              );
            }
            pointerUp(t) {
              this.ctrl.setEventIds(t);
              try {
                this.config.pointerCapture &&
                  t.target.hasPointerCapture(t.pointerId) &&
                  t.target.releasePointerCapture(t.pointerId);
              } catch (r) {
                0;
              }
              const e = this.state,
                s = this.config;
              if (!e._pointerActive) return;
              const n = Ys(t);
              if (void 0 !== e._pointerId && n !== e._pointerId) return;
              (this.state._pointerActive = !1),
                this.setActive(),
                this.compute(t);
              const [i, o] = e._distance;
              if (
                ((e.tap = i <= s.tapsThreshold && o <= s.tapsThreshold),
                e.tap && s.filterTaps)
              )
                e._force = !0;
              else {
                const [t, n] = e.direction,
                  [i, o] = e.velocity,
                  [r, a] = e.movement,
                  [c, u] = s.swipe.velocity,
                  [l, h] = s.swipe.distance,
                  d = s.swipe.duration;
                e.elapsedTime < d &&
                  (Math.abs(i) > c && Math.abs(r) > l && (e.swipe[0] = t),
                  Math.abs(o) > u && Math.abs(a) > h && (e.swipe[1] = n));
              }
              this.emit();
            }
            pointerClick(t) {
              this.state.tap || (t.preventDefault(), t.stopPropagation());
            }
            setupPointer(t) {
              const e = this.config;
              let s = e.device;
              e.pointerLock && t.currentTarget.requestPointerLock(),
                e.pointerCapture ||
                  (this.eventStore.add(
                    this.sharedConfig.window,
                    s,
                    "change",
                    this.pointerMove.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    s,
                    "end",
                    this.pointerUp.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    s,
                    "cancel",
                    this.pointerUp.bind(this)
                  ));
            }
            pointerClean() {
              this.config.pointerLock &&
                document.pointerLockElement === this.state.currentTarget &&
                document.exitPointerLock();
            }
            preventScroll(t) {
              this.state._preventScroll && t.cancelable && t.preventDefault();
            }
            setupScrollPrevention(t) {
              !(function (t) {
                "persist" in t &&
                  "function" === typeof t.persist &&
                  t.persist();
              })(t),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "change",
                  this.preventScroll.bind(this),
                  { passive: !1 }
                ),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "end",
                  this.clean.bind(this),
                  { passive: !1 }
                ),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "cancel",
                  this.clean.bind(this),
                  { passive: !1 }
                ),
                this.timeoutStore.add(
                  "startPointerDrag",
                  this.startPointerDrag.bind(this),
                  this.config.preventScroll,
                  t
                );
            }
            setupDelayTrigger(t) {
              (this.state._delayed = !0),
                this.timeoutStore.add(
                  "dragDelay",
                  this.startPointerDrag.bind(this),
                  this.config.delay,
                  t
                );
            }
            keyDown(t) {
              const e = cn[t.key];
              if (e) {
                const s = this.state,
                  n = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
                (s._delta = e(n)),
                  this.start(t),
                  (s._keyboardActive = !0),
                  js.addTo(s._movement, s._delta),
                  this.compute(t),
                  this.emit();
              }
            }
            keyUp(t) {
              t.key in cn &&
                ((this.state._keyboardActive = !1),
                this.setActive(),
                this.compute(t),
                this.emit());
            }
            bind(t) {
              const e = this.config.device;
              t(e, "start", this.pointerDown.bind(this)),
                this.config.pointerCapture &&
                  (t(e, "change", this.pointerMove.bind(this)),
                  t(e, "end", this.pointerUp.bind(this)),
                  t(e, "cancel", this.pointerUp.bind(this)),
                  t("lostPointerCapture", "", this.pointerUp.bind(this))),
                t("key", "down", this.keyDown.bind(this)),
                t("key", "up", this.keyUp.bind(this)),
                this.config.filterTaps &&
                  t("click", "", this.pointerClick.bind(this), {
                    capture: !0,
                    passive: !1,
                  });
            }
          },
          resolver: dn,
        },
        Sn = {
          key: "hover",
          engine: class extends nn {
            constructor(...t) {
              super(...t), qs(this, "ingKey", "hovering");
            }
            enter(t) {
              (this.config.mouseOnly && "mouse" !== t.pointerType) ||
                (this.start(t),
                this.computeValues(Ws(t)),
                this.compute(t),
                this.emit());
            }
            leave(t) {
              if (this.config.mouseOnly && "mouse" !== t.pointerType) return;
              const e = this.state;
              if (!e._active) return;
              e._active = !1;
              const s = Ws(t);
              (e._movement = e._delta = js.sub(s, e._values)),
                this.computeValues(s),
                this.compute(t),
                (e.delta = e.movement),
                this.emit();
            }
            bind(t) {
              t("pointer", "enter", this.enter.bind(this)),
                t("pointer", "leave", this.leave.bind(this));
            }
          },
          resolver: vn,
        },
        kn = {
          key: "move",
          engine: class extends nn {
            constructor(...t) {
              super(...t), qs(this, "ingKey", "moving");
            }
            move(t) {
              (this.config.mouseOnly && "mouse" !== t.pointerType) ||
                (this.state._active ? this.moveChange(t) : this.moveStart(t),
                this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
            }
            moveStart(t) {
              this.start(t),
                this.computeValues(Ws(t)),
                this.compute(t),
                this.computeInitial(),
                this.emit();
            }
            moveChange(t) {
              if (!this.state._active) return;
              const e = Ws(t),
                s = this.state;
              (s._delta = js.sub(e, s._values)),
                js.addTo(s._movement, s._delta),
                this.computeValues(e),
                this.compute(t),
                this.emit();
            }
            moveEnd(t) {
              this.state._active &&
                ((this.state._active = !1), this.compute(t), this.emit());
            }
            bind(t) {
              t("pointer", "change", this.move.bind(this)),
                t("pointer", "leave", this.moveEnd.bind(this));
            }
          },
          resolver: fn,
        },
        Mn = {
          key: "pinch",
          engine: class extends sn {
            constructor(...t) {
              super(...t),
                qs(this, "ingKey", "pinching"),
                qs(this, "aliasKey", "da");
            }
            init() {
              (this.state.offset = [1, 0]),
                (this.state.lastOffset = [1, 0]),
                (this.state._pointerEvents = new Map());
            }
            reset() {
              super.reset();
              const t = this.state;
              (t._touchIds = []),
                (t.canceled = !1),
                (t.cancel = this.cancel.bind(this)),
                (t.turns = 0);
            }
            computeOffset() {
              const { type: t, movement: e, lastOffset: s } = this.state;
              this.state.offset =
                "wheel" === t ? js.add(e, s) : [(1 + e[0]) * s[0], e[1] + s[1]];
            }
            computeMovement() {
              const { offset: t, lastOffset: e } = this.state;
              this.state.movement = [t[0] / e[0], t[1] - e[1]];
            }
            intent(t) {
              const e = this.state;
              if (!e.axis) {
                const s = 30 * Math.abs(t[0]) - Math.abs(t[1]);
                s < 0 ? (e.axis = "angle") : s > 0 && (e.axis = "scale");
              }
              this.config.lockDirection &&
                ("scale" === e.axis
                  ? (t[1] = 0)
                  : "angle" === e.axis && (t[0] = 0));
            }
            cancel() {
              const t = this.state;
              t.canceled ||
                setTimeout(() => {
                  (t.canceled = !0),
                    (t._active = !1),
                    this.compute(),
                    this.emit();
                }, 0);
            }
            touchStart(t) {
              this.ctrl.setEventIds(t);
              const e = this.state,
                s = this.ctrl.touchIds;
              if (e._active && e._touchIds.every((t) => s.has(t))) return;
              if (s.size < 2) return;
              this.start(t), (e._touchIds = Array.from(s).slice(0, 2));
              const n = Xs(t, e._touchIds);
              this.pinchStart(t, n);
            }
            pointerStart(t) {
              if (null != t.buttons && t.buttons % 2 !== 1) return;
              this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
              const e = this.state,
                s = e._pointerEvents,
                n = this.ctrl.pointerIds;
              if (e._active && Array.from(s.keys()).every((t) => n.has(t)))
                return;
              if (
                (s.size < 2 && s.set(t.pointerId, t), e._pointerEvents.size < 2)
              )
                return;
              this.start(t);
              const i = Ns(...Array.from(s.values()));
              this.pinchStart(t, i);
            }
            pinchStart(t, e) {
              (this.state.origin = e.origin),
                this.computeValues([e.distance, e.angle]),
                this.computeInitial(),
                this.compute(t),
                this.emit();
            }
            touchMove(t) {
              if (!this.state._active) return;
              const e = Xs(t, this.state._touchIds);
              this.pinchMove(t, e);
            }
            pointerMove(t) {
              const e = this.state._pointerEvents;
              if (
                (e.has(t.pointerId) && e.set(t.pointerId, t),
                !this.state._active)
              )
                return;
              const s = Ns(...Array.from(e.values()));
              this.pinchMove(t, s);
            }
            pinchMove(t, e) {
              const s = this.state,
                n = s._values[1],
                i = e.angle - n;
              let o = 0;
              Math.abs(i) > 270 && (o += Math.sign(i)),
                this.computeValues([e.distance, e.angle - 360 * o]),
                (s.origin = e.origin),
                (s.turns = o),
                (s._movement = [
                  s._values[0] / s._initial[0] - 1,
                  s._values[1] - s._initial[1],
                ]),
                this.compute(t),
                this.emit();
            }
            touchEnd(t) {
              this.ctrl.setEventIds(t),
                this.state._active &&
                  this.state._touchIds.some(
                    (t) => !this.ctrl.touchIds.has(t)
                  ) &&
                  ((this.state._active = !1), this.compute(t), this.emit());
            }
            pointerEnd(t) {
              const e = this.state;
              this.ctrl.setEventIds(t);
              try {
                t.target.releasePointerCapture(t.pointerId);
              } catch (s) {}
              e._pointerEvents.has(t.pointerId) &&
                e._pointerEvents.delete(t.pointerId),
                e._active &&
                  e._pointerEvents.size < 2 &&
                  ((e._active = !1), this.compute(t), this.emit());
            }
            gestureStart(t) {
              t.cancelable && t.preventDefault();
              const e = this.state;
              e._active ||
                (this.start(t),
                this.computeValues([t.scale, t.rotation]),
                (e.origin = [t.clientX, t.clientY]),
                this.compute(t),
                this.emit());
            }
            gestureMove(t) {
              if ((t.cancelable && t.preventDefault(), !this.state._active))
                return;
              const e = this.state;
              this.computeValues([t.scale, t.rotation]),
                (e.origin = [t.clientX, t.clientY]);
              const s = e._movement;
              (e._movement = [t.scale - 1, t.rotation]),
                (e._delta = js.sub(e._movement, s)),
                this.compute(t),
                this.emit();
            }
            gestureEnd(t) {
              this.state._active &&
                ((this.state._active = !1), this.compute(t), this.emit());
            }
            wheel(t) {
              t.ctrlKey &&
                (this.state._active ? this.wheelChange(t) : this.wheelStart(t),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
            }
            wheelStart(t) {
              this.start(t), this.wheelChange(t);
            }
            wheelChange(t) {
              "uv" in t || (t.cancelable && t.preventDefault());
              const e = this.state;
              (e._delta = [(-Zs(t)[1] / 36) * e.offset[0], 0]),
                js.addTo(e._movement, e._delta),
                (this.state.origin = [t.clientX, t.clientY]),
                this.compute(t),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              const e = this.config.device;
              e
                ? (t(e, "start", this[e + "Start"].bind(this)),
                  t(e, "change", this[e + "Move"].bind(this)),
                  t(e, "end", this[e + "End"].bind(this)),
                  t(e, "cancel", this[e + "End"].bind(this)))
                : t("wheel", "", this.wheel.bind(this), { passive: !1 });
            }
          },
          resolver: pn,
        },
        Pn = {
          key: "scroll",
          engine: class extends nn {
            constructor(...t) {
              super(...t), qs(this, "ingKey", "scrolling");
            }
            scroll(t) {
              this.state._active || this.start(t),
                this.scrollChange(t),
                this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
            }
            scrollChange(t) {
              t.cancelable && t.preventDefault();
              const e = this.state,
                s = (function (t) {
                  var e, s;
                  const {
                    scrollX: n,
                    scrollY: i,
                    scrollLeft: o,
                    scrollTop: r,
                  } = t.currentTarget;
                  return [
                    null !== (e = null !== n && void 0 !== n ? n : o) &&
                    void 0 !== e
                      ? e
                      : 0,
                    null !== (s = null !== i && void 0 !== i ? i : r) &&
                    void 0 !== s
                      ? s
                      : 0,
                  ];
                })(t);
              (e._delta = js.sub(s, e._values)),
                js.addTo(e._movement, e._delta),
                this.computeValues(s),
                this.compute(t),
                this.emit();
            }
            scrollEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              t("scroll", "", this.scroll.bind(this));
            }
          },
          resolver: mn,
        },
        In = {
          key: "wheel",
          engine: class extends nn {
            constructor(...t) {
              super(...t), qs(this, "ingKey", "wheeling");
            }
            wheel(t) {
              this.state._active || this.start(t),
                this.wheelChange(t),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
            }
            wheelChange(t) {
              const e = this.state;
              (e._delta = Zs(t)), js.addTo(e._movement, e._delta);
              const [s, n] = e.overflow,
                [i, o] = e._delta,
                [r, a] = e._direction;
              ((s < 0 && i > 0 && r < 0) || (s > 0 && i < 0 && r > 0)) &&
                (e._movement[0] = e._movementBound[0]),
                ((n < 0 && o > 0 && a < 0) || (n > 0 && o < 0 && a > 0)) &&
                  (e._movement[1] = e._movementBound[1]),
                this.compute(t),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              t("wheel", "", this.wheel.bind(this));
            }
          },
          resolver: gn,
        };
      function On(t, e) {
        if (null == t) return {};
        var s,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var s,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (s = o[n]), e.indexOf(s) >= 0 || (i[s] = t[s]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (s = o[n]),
              e.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, s) &&
                  (i[s] = t[s]));
        }
        return i;
      }
      const En = {
          target(t) {
            if (t) return () => ("current" in t ? t.current : t);
          },
          enabled: (t = !0) => t,
          window: (t = hn.isBrowser ? window : void 0) => t,
          eventOptions: ({ passive: t = !0, capture: e = !1 } = {}) => ({
            passive: t,
            capture: e,
          }),
          transform: (t) => t,
        },
        xn = ["target", "eventOptions", "window", "enabled", "transform"];
      function Cn(t = {}, e) {
        const s = {};
        for (const [n, i] of Object.entries(e))
          switch (typeof i) {
            case "function":
              s[n] = i.call(s, t[n], n, t);
              break;
            case "object":
              s[n] = Cn(t[n], i);
              break;
            case "boolean":
              i && (s[n] = t[n]);
          }
        return s;
      }
      class An {
        constructor(t) {
          qs(this, "_listeners", []), (this._ctrl = t);
        }
        add(t, e, s, n, i) {
          const o = (function (t, e = "") {
              const s = Us[t];
              return t + ((s && s[e]) || e);
            })(e, s),
            r = Ls(Ls({}, this._ctrl.config.shared.eventOptions), i);
          t.addEventListener(o, n, r),
            this._listeners.push(() => t.removeEventListener(o, n, r));
        }
        clean() {
          this._listeners.forEach((t) => t()), (this._listeners = []);
        }
      }
      class Tn {
        constructor() {
          qs(this, "_timeouts", new Map());
        }
        add(t, e, s = 140, ...n) {
          this.remove(t), this._timeouts.set(t, window.setTimeout(e, s, ...n));
        }
        remove(t) {
          const e = this._timeouts.get(t);
          e && window.clearTimeout(e);
        }
        clean() {
          this._timeouts.forEach((t) => {
            window.clearTimeout(t);
          }),
            this._timeouts.clear();
        }
      }
      class Vn {
        constructor(t) {
          qs(this, "gestures", new Set()),
            qs(this, "_targetEventStore", new An(this)),
            qs(this, "gestureEventStores", {}),
            qs(this, "gestureTimeoutStores", {}),
            qs(this, "handlers", {}),
            qs(this, "config", {}),
            qs(this, "pointerIds", new Set()),
            qs(this, "touchIds", new Set()),
            qs(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            (function (t, e) {
              e.drag && jn(t, "drag");
              e.wheel && jn(t, "wheel");
              e.scroll && jn(t, "scroll");
              e.move && jn(t, "move");
              e.pinch && jn(t, "pinch");
              e.hover && jn(t, "hover");
            })(this, t);
        }
        setEventIds(t) {
          Qs(t)
            ? (this.touchIds = new Set(Hs(t)))
            : "pointerId" in t &&
              ("pointerup" === t.type || "pointercancel" === t.type
                ? this.pointerIds.delete(t.pointerId)
                : "pointerdown" === t.type && this.pointerIds.add(t.pointerId));
        }
        applyHandlers(t, e) {
          (this.handlers = t), (this.nativeHandlers = e);
        }
        applyConfig(t, e) {
          this.config = (function (t, e) {
            const s = t,
              {
                target: n,
                eventOptions: i,
                window: o,
                enabled: r,
                transform: a,
              } = s,
              c = On(s, xn),
              u = {
                shared: Cn(
                  {
                    target: n,
                    eventOptions: i,
                    window: o,
                    enabled: r,
                    transform: a,
                  },
                  En
                ),
              };
            if (e) {
              const t = _n.get(e);
              u[e] = Cn(Ls({ shared: u.shared }, c), t);
            } else
              for (const l in c) {
                const t = _n.get(l);
                t && (u[l] = Cn(Ls({ shared: u.shared }, c[l]), t));
              }
            return u;
          })(t, e);
        }
        clean() {
          this._targetEventStore.clean();
          for (const t of this.gestures)
            this.gestureEventStores[t].clean(),
              this.gestureTimeoutStores[t].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...t) {
          const e = this.config.shared,
            s = e.eventOptions,
            n = {};
          let i;
          if (e.target && ((i = e.target()), !i)) return;
          const o = Dn(n, s, !!i);
          if (e.enabled) {
            for (const e of this.gestures)
              if (this.config[e].enabled) {
                new (yn.get(e))(this, t, e).bind(o);
              }
            for (const e in this.nativeHandlers)
              o(
                e,
                "",
                (s) =>
                  this.nativeHandlers[e](
                    Ls(Ls({}, this.state.shared), {}, { event: s, args: t })
                  ),
                void 0,
                !0
              );
          }
          for (const r in n) n[r] = tn(...n[r]);
          if (!i) return n;
          for (const r in n) {
            const { device: t, capture: e, passive: s } = Fs(r);
            this._targetEventStore.add(i, t, "", n[r], {
              capture: e,
              passive: s,
            });
          }
        }
      }
      function jn(t, e) {
        t.gestures.add(e),
          (t.gestureEventStores[e] = new An(t)),
          (t.gestureTimeoutStores[e] = new Tn());
      }
      const Dn =
          (t, e, s) =>
          (n, i, o, r = {}, a = !1) => {
            var c, u;
            const l = null !== (c = r.capture) && void 0 !== c ? c : e.capture,
              h = null !== (u = r.passive) && void 0 !== u ? u : e.passive;
            let d = a
              ? n
              : (function (t, e = "", s = !1) {
                  const n = Us[t],
                    i = (n && n[e]) || e;
                  return "on" + Bs(t) + Bs(i) + (s ? "Capture" : "");
                })(n, i, l);
            s && h && (d += "Passive"), (t[d] = t[d] || []), t[d].push(o);
          },
        Rn = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
      function qn(t, e, s, n, i, o) {
        if (!t.has(s)) return;
        if (!yn.has(n)) return void 0;
        const r = s + "Start",
          a = s + "End";
        (i[n] = (t) => {
          let n;
          return (
            t.first && r in e && e[r](t),
            s in e && (n = e[s](t)),
            t.last && a in e && e[a](t),
            n
          );
        }),
          (o[n] = o[n] || {});
      }
      function zn(t, e) {
        const [s, n, i] = (function (t) {
            const e = {},
              s = {},
              n = new Set();
            for (let i in t)
              Rn.test(i)
                ? (n.add(RegExp.lastMatch), (s[i] = t[i]))
                : (e[i] = t[i]);
            return [s, e, n];
          })(t),
          o = {};
        return (
          qn(i, s, "onDrag", "drag", o, e),
          qn(i, s, "onWheel", "wheel", o, e),
          qn(i, s, "onScroll", "scroll", o, e),
          qn(i, s, "onPinch", "pinch", o, e),
          qn(i, s, "onMove", "move", o, e),
          qn(i, s, "onHover", "hover", o, e),
          { handlers: o, config: e, nativeHandlers: n }
        );
      }
      function Ln(t, e = {}, s, n) {
        const o = i.useMemo(() => new Vn(t), []);
        if (
          (o.applyHandlers(t, n),
          o.applyConfig(e, s),
          i.useEffect(o.effect.bind(o)),
          i.useEffect(() => o.clean.bind(o), []),
          void 0 === e.target)
        )
          return o.bind.bind(o);
      }
      function Un(t, e = {}) {
        return ([wn, Mn, Pn, In, kn, Sn].forEach(bn),
        function (t, e = {}) {
          const { handlers: s, nativeHandlers: n, config: i } = zn(t, e);
          return Ln(s, i, void 0, n);
        })(t, e);
      }
      function Bn({
        snap: t,
        global: e,
        cursor: s = !0,
        children: a,
        speed: c = 1,
        rotation: u = [0, 0, 0],
        zoom: l = 1,
        polar: h = [0, Math.PI / 2],
        azimuth: d = [-1 / 0, 1 / 0],
        config: p = { mass: 1, tension: 170, friction: 26 },
      }) {
        const { size: f, gl: m } = (0, r.Ky)(),
          g = i.useMemo(() => [u[0] + h[0], u[0] + h[1]], [u[0], h[0], h[1]]),
          v = i.useMemo(() => [u[1] + d[0], u[1] + d[1]], [u[1], d[0], d[1]]),
          y = i.useMemo(
            () => [
              o.MathUtils.clamp(u[0], ...g),
              o.MathUtils.clamp(u[1], ...v),
              u[2],
            ],
            [u[0], u[1], u[2], g, v]
          ),
          [_, b] = Is(() => ({ scale: 1, rotation: y, config: p }));
        i.useEffect(() => {
          b.start({ scale: 1, rotation: y, config: p });
        }, [y]),
          i.useEffect(() => {
            e && s && (m.domElement.style.cursor = "grab");
          }, [e, s, m.domElement]);
        const w = Un(
          {
            onHover: ({ last: t }) => {
              s && !e && (m.domElement.style.cursor = t ? "auto" : "grab");
            },
            onDrag: ({
              down: e,
              delta: [n, i],
              memo: [r, a] = _.rotation.animation.to || y,
            }) => {
              s && (m.domElement.style.cursor = e ? "grabbing" : "grab"),
                (n = o.MathUtils.clamp(a + (n / f.width) * Math.PI * c, ...v)),
                (i = o.MathUtils.clamp(r + (i / f.height) * Math.PI * c, ...g));
              const u = t && !e && "boolean" !== typeof t ? t : p;
              return (
                b.start({
                  scale: e && i > g[1] / 2 ? l : 1,
                  rotation: t && !e ? y : [i, n, 0],
                  config: (t) =>
                    "scale" === t ? { ...u, friction: 3 * u.friction } : u,
                }),
                [i, n]
              );
            },
          },
          { target: e ? m.domElement : void 0 }
        );
        return i.createElement(Vs.group, n({}, null == w ? void 0 : w(), _), a);
      }
    },
  },
]);
//# sourceMappingURL=176-e016e6cc9e2bd2e1.js.map
