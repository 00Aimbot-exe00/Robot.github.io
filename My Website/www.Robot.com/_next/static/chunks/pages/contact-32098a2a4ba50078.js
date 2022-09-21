(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    3038: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return t(2418);
        },
      ]);
    },
    2418: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var r = t(5893),
        i = t(9008),
        a = t(7294),
        s = t(9346),
        o = t(8159),
        c = t(6616),
        l = t(8595),
        u = t(8056),
        d = t(8043),
        m = t.n(d),
        x = function () {
          return (
            (0, a.useEffect)(function () {
              return (
                (0, u.u)("--white"),
                function () {
                  (0, u.u)("--black");
                }
              );
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", { className: m().fullBg }),
                (0, r.jsx)("section", {
                  className: m().contactContainer,
                  children: (0, r.jsxs)(s.ZP, {
                    className: m().contact,
                    children: [
                      (0, r.jsx)("h4", {
                        className: m().emailTitle,
                        children: (0, r.jsx)(l.Z, {
                          animationDelay: 0.44,
                          animateIntoView: !1,
                          children: "SEND ME A MESSAGE",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: m().emailAddress,
                        children: (0, r.jsx)(o.Z, {
                          animationDelay: 0.46,
                          animateIntoView: !1,
                          inverse: !0,
                        }),
                      }),
                      (0, r.jsx)("h4", {
                        className: m().socialsTitle,
                        children: (0, r.jsxs)(l.Z, {
                          animationDelay: 0.95,
                          animateIntoView: !1,
                          children: [
                            "OR CONNECT WITH ",
                            (0, r.jsx)("br", {}),
                            " ME ON SOCIALS",
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: m().socials,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, r.jsx)("a", {
                              href: "https://twitter.com/ekwonye",
                              rel: "noreferrer",
                              target: "_blank",
                              children: (0, r.jsx)(c.Z, {
                                text: "Twitter",
                                srText: "Twitter",
                                inverse: !0,
                              }),
                            }),
                          }),
                          (0, r.jsx)("span", {
                            children: (0, r.jsx)("a", {
                              href: "https://www.instagram.com/ekwonyenoob",
                              rel: "noreferrer",
                              target: "_blank",
                              children: (0, r.jsx)(c.Z, {
                                text: "Instagram",
                                srText: "Instagram",
                                inverse: !0,
                              }),
                            }),
                          }),
                          (0, r.jsx)("span", {
                            children: (0, r.jsx)("a", {
                              href: "https://github.com/ekwonye-richard",
                              rel: "noreferrer",
                              target: "_blank",
                              children: (0, r.jsx)(c.Z, {
                                text: "Github",
                                srText: "Github",
                                inverse: !0,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        f = function () {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.default, {
                children: (0, r.jsx)("title", {
                  children: "Richard Ekwonye | Contact",
                }),
              }),
              (0, r.jsx)(x, {}),
            ],
          });
        };
    },
    3123: function (e, n, t) {
      "use strict";
      t.d(n, {
        A: function () {
          return r;
        },
        Z: function () {
          return g;
        },
      });
      var r,
        i,
        a = t(5893),
        s = t(7294),
        o = t(3935),
        c = t(4184),
        l = t.n(c);
      ((i = r || (r = {}))[(i.CLICK = 0)] = "CLICK"),
        (i[(i.DRAG = 1)] = "DRAG");
      var u,
        d = t(6211),
        m = t.n(d);
      function x(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var f,
        _ = function (e) {
          var n = e.mode,
            t = e.initialPosition,
            i = e.clicked,
            o = e.fading,
            c = e.label,
            d = e.className,
            f = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(
              function () {
                o
                  ? ((document.body.style.cursor = ""),
                    (document.body.style.userSelect = ""))
                  : ((document.body.style.cursor = "none"),
                    (document.body.style.userSelect = "none"));
              },
              [o]
            ),
            (0, s.useEffect)(function () {
              !(function (e) {
                var n = e.cursorRef,
                  t = e.initialPosition,
                  r = t.x,
                  i = t.y,
                  a = n.current;
                (a.style.transform = "translate3d("
                  .concat(r, "px, ")
                  .concat(i, "px, 0)")),
                  window.addEventListener("mousemove", function (e) {
                    a.style.transform = "translate3d("
                      .concat(e.clientX, "px, ")
                      .concat(e.clientY, "px, 0)");
                  });
              })({ cursorRef: f, initialPosition: t });
            }, []),
            (0, a.jsx)("div", {
              ref: f,
              className: l()(
                m().cursor,
                d,
                ((u = {}),
                x(u, m().fading, o),
                x(u, m().clicked, i && n === r.CLICK),
                x(u, m().dragging, i && n === r.DRAG),
                u)
              ),
              children: (0, a.jsx)("span", {
                className: m().wrapper,
                children: (0, a.jsx)("span", {
                  className: m().cursorRing,
                  children: (0, a.jsx)("span", { children: c }),
                }),
              }),
            })
          );
        };
      function h(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var v = (h((f = {}), r.CLICK, "See more"), h(f, r.DRAG, "Drag me"), f),
        g = function (e) {
          var n = e.areaRef,
            t = e.label,
            i = e.className,
            c = e.mode,
            l = void 0 === c ? r.CLICK : c,
            u = e.onCursorExit,
            d = (0, s.useState)({ x: 0, y: 0 }),
            m = d[0],
            x = d[1],
            f = (0, s.useState)(!1),
            h = f[0],
            g = f[1],
            A = (0, s.useState)(!1),
            C = A[0],
            w = A[1],
            p = (0, s.useState)(!1),
            T = p[0],
            j = p[1],
            b = (0, s.useRef)(),
            y = function (e) {
              b.current && clearTimeout(b.current), x(e), g(!0), j(!1);
            },
            N = function () {
              w(!1),
                j(!0),
                b.current && clearTimeout(b.current),
                (b.current = setTimeout(function () {
                  g(!1), u && u();
                }, 500));
            },
            E = function () {
              if (l === r.CLICK)
                return (
                  w(!1),
                  void setTimeout(function () {
                    return w(!0);
                  }, 0)
                );
              w(!0);
            },
            k = function () {
              w(!1);
            };
          return (
            (0, s.useEffect)(function () {
              !(function (e) {
                var n = e.areaRef,
                  t = e.mode,
                  i = e.onEnter,
                  a = e.onLeave,
                  s = e.onClick,
                  o = e.onDragEnd,
                  c = t === r.DRAG,
                  l = !1,
                  u = n.current,
                  d = function (e) {
                    o(), (l = !1);
                    var n = u.getBoundingClientRect(),
                      t = n.x,
                      r = n.x + n.width,
                      i = n.y,
                      s = n.y + n.height;
                    (e.clientX < t ||
                      e.clientX > r ||
                      e.clientY < i ||
                      e.clientY > s) &&
                      a(),
                      window.removeEventListener("contextmenu", d),
                      window.removeEventListener("mouseup", d);
                  };
                u.addEventListener("mouseenter", function (e) {
                  i({ x: e.clientX, y: e.clientY });
                }),
                  u.addEventListener("mouseleave", function () {
                    (c && l) || a();
                  }),
                  u.addEventListener("mousedown", function () {
                    c &&
                      ((l = !0),
                      window.addEventListener("contextmenu", d),
                      window.addEventListener("mouseup", d)),
                      s();
                  });
              })({
                areaRef: n,
                mode: l,
                onEnter: y,
                onLeave: N,
                onClick: E,
                onDragEnd: k,
              });
            }, []),
            h
              ? (0, o.createPortal)(
                  (0, a.jsx)(_, {
                    mode: l,
                    initialPosition: m,
                    clicked: C,
                    fading: T,
                    label: t || v[l],
                    className: i,
                  }),
                  document.body
                )
              : null
          );
        };
    },
    6616: function (e, n, t) {
      "use strict";
      t.d(n, {
        H: function () {
          return r;
        },
        Z: function () {
          return v;
        },
      });
      var r,
        i,
        a = t(5893),
        s = t(7294),
        o = t(4184),
        c = t.n(o),
        l = t(2336),
        u = t(3123),
        d = t(5160);
      ((i = r || (r = {}))[(i.BUTTON = 0)] = "BUTTON"),
        (i[(i.SPAN = 1)] = "SPAN");
      var m,
        x,
        f = t(3633),
        _ = t.n(f);
      function h(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var v = function (e) {
        var n = e.text,
          t = e.textTwo,
          i = e.onClick,
          o = e.onMouseEnter,
          f = e.onMouseLeave,
          v = e.className,
          g = e.srText,
          A = e.elementType,
          C = e.withAreaCursor,
          w = e.areaCursorLabel,
          p = e.areaCursorClassName,
          T = e.onAreaCursorExit,
          j = e.animationDelay,
          b = e.animateIntoView,
          y = void 0 === b || b,
          N = e.inverse,
          E = (0, s.useState)((0, d.t)() ? 43 : 110)[0],
          k = (0, s.useState)(!1),
          S = k[0],
          L = k[1],
          R = (0, s.useRef)(null),
          B = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.Z, {
                text: n,
                snapOnAnimationEnd: function () {
                  L(!0);
                },
                withoutSrText: !g,
                srText: g,
              }),
              t &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", { className: _().textsSeperator }),
                    (0, a.jsx)(l.Z, {
                      text: t,
                      intersectionThreshold: 0,
                      intersectionRootMargin: "".concat(E, "px"),
                      animationDelay: j,
                      animateIntoView: y,
                      withoutSrText: !0,
                    }),
                  ],
                }),
              C &&
                (0, a.jsx)(u.Z, {
                  areaRef: R,
                  label: w,
                  className: p,
                  onCursorExit: T,
                }),
            ],
          });
        return A === r.BUTTON
          ? (0, a.jsx)("button", {
              ref: R,
              className: c()(_().bigActionBtn, h({}, _().withAreaCursor, C)),
              onClick: i,
              onMouseEnter: o,
              onMouseLeave: f,
              children: (0, a.jsx)("span", {
                className: c()(
                  _().bigAction,
                  v,
                  ((m = {}), h(m, _().passive, !S), h(m, _().inverse, N), m)
                ),
                children: B,
              }),
            })
          : (0, a.jsx)("span", {
              ref: R,
              className: c()(
                _().bigAction,
                v,
                ((x = {}), h(x, _().passive, !S), h(x, _().inverse, N), x)
              ),
              onClick: i,
              onMouseEnter: o,
              onMouseLeave: f,
              children: B,
            });
      };
    },
    8159: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var r = t(8520),
        i = t.n(r),
        a = t(5893),
        s = t(7294),
        o = t(4184),
        c = t.n(o),
        l = t(6616),
        u = t(3790),
        d = t.n(u);
      function m(e, n, t, r, i, a, s) {
        try {
          var o = e[a](s),
            c = o.value;
        } catch (l) {
          return void t(l);
        }
        o.done ? n(c) : Promise.resolve(c).then(r, i);
      }
      var x = function (e) {
        var n,
          t = e.className,
          r = e.animationDelay,
          o = e.animateIntoView,
          u = e.inverse,
          x = (0, s.useState)(!1),
          f = x[0],
          _ = x[1],
          h =
            ((n = i().mark(function e() {
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        navigator.clipboard.writeText(
                          "hello@richardekwonye.com"
                        )
                      );
                    case 2:
                      setTimeout(function () {
                        _(!0);
                      }, 200);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (r, i) {
                var a = n.apply(e, t);
                function s(e) {
                  m(a, r, i, s, o, "next", e);
                }
                function o(e) {
                  m(a, r, i, s, o, "throw", e);
                }
                s(void 0);
              });
            });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.Z, {
              onClick: h,
              className: c()(d().clipboardText, d().emailAddressBigText, t),
              text: "hello@richard",
              textTwo: "ekwonye.com",
              withAreaCursor: !0,
              animationDelay: r,
              animateIntoView: o,
              inverse: u,
              areaCursorLabel: f ? "Done!" : "Click to copy",
              areaCursorClassName: d().areaCursor,
              onAreaCursorExit: function () {
                _(!1);
              },
              srText: "hello@richardekwonye.com",
            }),
            (0, a.jsxs)("a", {
              className: d().emailToAddress,
              href: "mailto:hello@richardekwonye.com",
              children: [
                (0, a.jsx)(l.Z, {
                  className: d().emailAddressBigText,
                  text: "hello@",
                  inverse: u,
                  srText: "hello@richardekwonye.com",
                }),
                (0, a.jsx)(l.Z, {
                  className: d().emailAddressBigText,
                  text: "richard",
                  inverse: u,
                }),
                (0, a.jsx)(l.Z, {
                  className: d().emailAddressBigText,
                  text: "ekwonye",
                  inverse: u,
                }),
                (0, a.jsx)(l.Z, {
                  className: d().emailAddressBigText,
                  text: ".com",
                  inverse: u,
                }),
              ],
            }),
          ],
        });
      };
    },
    8056: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return r;
        },
      });
      var r = function (e) {
        var n = document.documentElement,
          t = getComputedStyle(n).getPropertyValue(e);
        n.style.setProperty("--main-color", t);
      };
    },
    6211: function (e) {
      e.exports = {
        cursor: "AreaCursor_cursor__tOUSC",
        clicked: "AreaCursor_clicked___ZULI",
        "click-spring": "AreaCursor_click-spring__lMB8f",
        dragging: "AreaCursor_dragging__atwdh",
        fading: "AreaCursor_fading__9aj2e",
        wrapper: "AreaCursor_wrapper__u4r_R",
        cursorRing: "AreaCursor_cursorRing__ATTaA",
        "cursor-ring-in": "AreaCursor_cursor-ring-in__ci8zt",
        "label-in": "AreaCursor_label-in__lv0pR",
      };
    },
    3633: function (e) {
      e.exports = {
        bigAction: "BigAction_bigAction__1_x13",
        passive: "BigAction_passive__lAA3y",
        bigActionBtn: "BigAction_bigActionBtn__wrKRN",
        withAreaCursor: "BigAction_withAreaCursor__ahdaZ",
        inverse: "BigAction_inverse__IujKE",
        textsSeperator: "BigAction_textsSeperator__DG3xy",
      };
    },
    8043: function (e) {
      e.exports = {
        contactContainer: "Contact_contactContainer__HyVrv",
        contact: "Contact_contact___3IXY",
        fullBg: "Contact_fullBg__7axXn",
        emailTitle: "Contact_emailTitle__Y26d8",
        emailAddress: "Contact_emailAddress__P4sLL",
        socialsTitle: "Contact_socialsTitle__gA227",
        socials: "Contact_socials__aS4bu",
      };
    },
    3790: function (e) {
      e.exports = {
        emailAddressBigText: "EmailAddress_emailAddressBigText__RQOXb",
        clipboardText: "EmailAddress_clipboardText__A9AQN",
        areaCursor: "EmailAddress_areaCursor__GPWnN",
        emailToAddress: "EmailAddress_emailToAddress__xUSpW",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (n = 3038), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=contact-32098a2a4ba50078.js.map
