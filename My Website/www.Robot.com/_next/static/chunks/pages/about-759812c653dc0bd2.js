(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    4613: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(2585);
        },
      ]);
    },
    2585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return se;
          },
        });
      var r = n(5893),
        i = n(9008),
        a = n(9346),
        s = n(8595),
        o = n(2336),
        c = 0.46,
        l = n(5906),
        u = n.n(l),
        d = function () {
          return (0, r.jsx)("section", {
            className: u().aboutHeroContainer,
            children: (0, r.jsxs)(a.ZP, {
              className: u().aboutHero,
              children: [
                (0, r.jsx)(s.Z, {
                  animationDelay: 0.95,
                  animateIntoView: !1,
                  children: (0, r.jsx)("h4", { children: "01/" }),
                }),
                (0, r.jsxs)("h2", {
                  className: u().title,
                  children: [
                    (0, r.jsx)(o.Z, {
                      text: "Passionate",
                      animationDelay: c,
                      animateIntoView: !1,
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(o.Z, {
                      text: "creative",
                      animationDelay: c,
                      animateIntoView: !1,
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(o.Z, {
                      text: "developer",
                      animationDelay: c,
                      animateIntoView: !1,
                    }),
                  ],
                }),
                (0, r.jsx)(a.r7, {
                  src: "/images/about-cover.jpg",
                  className: u().coverImage,
                  containerClassName: u().coverImageContainer,
                  multiplier: 0.1,
                  animationDelay: 1.1,
                  animateIn: !0,
                }),
                (0, r.jsxs)("h2", {
                  className: u().title,
                  children: [
                    (0, r.jsx)(o.Z, { text: "based in" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(o.Z, { text: "London" }),
                  ],
                }),
              ],
            }),
          });
        },
        m = n(2852),
        f = n.n(m),
        p = function () {
          return (0, r.jsx)("section", {
            className: f().aboutDetailsContainer,
            children: (0, r.jsxs)(a.ZP, {
              className: f().aboutDetails,
              children: [
                (0, r.jsx)(s.Z, {
                  className: f().title,
                  children: (0, r.jsx)("h4", {
                    children: "A journey of curiosity and explorations",
                  }),
                }),
                (0, r.jsx)(s.Z, {
                  className: f().details,
                  children: (0, r.jsxs)("p", {
                    children: [
                      "I'm a creative developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia.",
                      (0, r.jsx)("br", {}),
                      " ",
                      (0, r.jsx)("br", {}),
                      "Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.",
                    ],
                  }),
                }),
                (0, r.jsx)(a.r7, {
                  src: "/images/about-details.jpg",
                  className: f().detailsImage,
                  containerClassName: f().detailsImageContainer,
                  multiplier: 0.1,
                }),
              ],
            }),
          });
        },
        x = n(7294),
        _ = n(4184),
        b = n.n(_),
        j = n(5604);
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var v = n(7157),
        y = n.n(v);
      var g = function (e) {
        var t,
          n,
          i,
          a = e.title,
          s = e.content,
          o = e.index,
          c = e.isActive,
          l = e.onToggle,
          u = (0, x.useRef)(null);
        return (
          (0, x.useEffect)(
            function () {
              var e = u.current;
              e.style.maxHeight = c ? "".concat(e.scrollHeight, "px") : "0px";
            },
            [c]
          ),
          (0, x.useEffect)(function () {
            var e = (function (e, t) {
              var n = !0;
              return function () {
                for (
                  var r = arguments.length, i = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  i[a] = arguments[a];
                var s;
                n &&
                  ((n = !1),
                  (s = e).call.apply(s, [null].concat(h(i))),
                  setTimeout(function () {
                    return (n = !0);
                  }, t));
              };
            })(function () {
              var e = u.current;
              "0px" !== e.style.maxHeight &&
                (e.style.maxHeight = "".concat(e.scrollHeight, "px"));
            }, 100);
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, r.jsxs)("div", {
            className: y().item,
            children: [
              (0, r.jsxs)("button", {
                className: y().control,
                onClick: function () {
                  return l(o);
                },
                children: [
                  (0, r.jsx)("span", {
                    className: y().itemNumber,
                    children: (0, j.m)(o + 1),
                  }),
                  (0, r.jsx)("h4", { className: y().title, children: a }),
                  (0, r.jsx)("span", {
                    className: b()(
                      y().stateSymbol,
                      ((t = {}),
                      (n = y().passive),
                      (i = !c),
                      n in t
                        ? Object.defineProperty(t, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[n] = i),
                      t)
                    ),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                ref: u,
                className: y().content,
                children: (0, r.jsx)("p", { children: s }),
              }),
            ],
          })
        );
      };
      function w(e, t, n) {
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
      var A = function (e) {
          var t = e.data,
            n = e.className,
            i = (0, x.useState)(0),
            a = i[0],
            s = i[1],
            o = function (e) {
              s(a !== e ? e : null);
            };
          return (0, r.jsx)("div", {
            className: b()(y().accordion, n),
            children: t.map(function (e, t) {
              return (0, r.jsx)(
                g,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })
                      )),
                      r.forEach(function (t) {
                        w(e, t, n[t]);
                      });
                  }
                  return e;
                })({ index: t, isActive: a === t, onToggle: o }, e),
                t
              );
            }),
          });
        },
        N = [
          {
            title: "Front end development / engineering",
            content:
              "I plan, design, build, test and maintain scalable front end web applications.",
          },
          {
            title: "Interaction design / animation",
            content:
              "I collaborate with designers to plan and execute interactions / animations on web applications and design systems.",
          },
          {
            title: "Creative implementation",
            content:
              "I build layouts and interactions optimizing for performance and usabilty.",
          },
        ],
        I = n(5202),
        P = n.n(I),
        C = function () {
          return (0, r.jsx)("section", {
            className: P().servicesContainer,
            children: (0, r.jsxs)(a.ZP, {
              className: P().services,
              children: [
                (0, r.jsx)(s.Z, {
                  children: (0, r.jsx)("h4", { children: "02/" }),
                }),
                (0, r.jsx)("h2", {
                  className: P().title,
                  children: (0, r.jsx)(o.Z, { text: "Services" }),
                }),
                (0, r.jsx)(A, { className: P().accordion, data: N }),
              ],
            }),
          });
        },
        H = n(5596),
        D = n(6447),
        R = n(3176),
        O = n(3123),
        S = n(8626),
        E = [
          "ps_logo_3d",
          "controller",
          "back_part_logo",
          "buttons_circle",
          "buttons_arrows_glass",
          "circles_right",
          "arrows _left",
          "buttons_little",
        ],
        T = [
          function (e) {
            var t = e.visible,
              n = void 0 === t || t,
              i = (0, x.useRef)(null),
              a = (0, S.L)("assets/DualSense.glb").scene;
            return (
              (0, D.xQ)(function () {
                var e = i.current;
                if (n && e) {
                  var t = e.scale.x;
                  if (t < 1) {
                    var r = t + 0.09 * (1 - t);
                    e.scale.set(r, r, r);
                  }
                }
              }),
              (0, x.useEffect)(
                function () {
                  a &&
                    (function (e) {
                      e.traverse(function (e) {
                        var t = e;
                        t.material &&
                          (E.includes(t.material.name)
                            ? t.material.color.set("#020202")
                            : t.material.color.set("#000000"));
                      });
                    })(a);
                },
                [a]
              ),
              (0, r.jsxs)("group", {
                ref: i,
                dispose: null,
                scale: 0.65,
                position: [0, 0.03, 0],
                rotation: [0, 1.79 * Math.PI, 0],
                visible: n,
                renderOrder: n ? 1 : 0,
                children: [
                  (0, r.jsxs)("mesh", {
                    children: [
                      (0, r.jsx)("boxGeometry", { args: [1, 1, 1] }),
                      (0, r.jsx)("meshStandardMaterial", {
                        opacity: 0,
                        transparent: !0,
                      }),
                    ],
                  }),
                  (0, r.jsx)("primitive", { object: a }),
                ],
              })
            );
          },
          function (e) {
            var t = e.visible,
              n = void 0 === t || t,
              i = (0, x.useRef)(null),
              a = (0, S.L)("assets/XM4.glb"),
              s = a.nodes,
              o = a.materials;
            return (
              (0, D.xQ)(function () {
                var e = i.current;
                if (n && e) {
                  var t = e.scale.x;
                  if (t < 0.7) {
                    var r = t + 0.09 * (0.7 - t);
                    e.scale.set(r, r, r);
                  }
                }
              }),
              (0, x.useEffect)(
                function () {
                  o && o.MainMaterial.color.set("#000000");
                },
                [o]
              ),
              (0, r.jsxs)("group", {
                ref: i,
                dispose: null,
                scale: 0.35,
                visible: n,
                renderOrder: n ? 1 : 0,
                children: [
                  (0, r.jsxs)("mesh", {
                    children: [
                      (0, r.jsx)("boxGeometry", { args: [1, 1, 1] }),
                      (0, r.jsx)("meshStandardMaterial", {
                        opacity: 0,
                        transparent: !0,
                      }),
                    ],
                  }),
                  (0, r.jsx)("mesh", {
                    geometry: s.ShMainL.geometry,
                    material: o.MainMaterial,
                    position: [0.14, 0.04, 0],
                    rotation: [0.1 * Math.PI, 2.18 * Math.PI, 1.7 * Math.PI],
                  }),
                ],
              })
            );
          },
          function (e) {
            var t = e.visible,
              n = void 0 === t || t,
              i = (0, x.useRef)(null),
              a = (0, S.L)("assets/football.glb"),
              s = a.nodes,
              o = a.materials;
            return (
              (0, D.xQ)(function () {
                var e = i.current;
                if (n && e) {
                  var t = e.scale.x;
                  if (t < 1) {
                    var r = t + 0.09 * (1 - t);
                    e.scale.set(r, r, r);
                  }
                }
              }),
              (0, x.useEffect)(
                function () {
                  o && o.black.color.set("#d5d5d5");
                },
                [o]
              ),
              (0, r.jsxs)("group", {
                dispose: null,
                scale: 0.2,
                visible: n,
                children: [
                  (0, r.jsxs)("mesh", {
                    children: [
                      (0, r.jsx)("boxGeometry", { args: [1, 1, 1] }),
                      (0, r.jsx)("meshStandardMaterial", {
                        opacity: 0,
                        transparent: !0,
                      }),
                    ],
                  }),
                  (0, r.jsx)("mesh", {
                    ref: i,
                    scale: 0.65,
                    geometry: s.Soccer_Ball_Clean.geometry,
                    material: o.black,
                  }),
                ],
              })
            );
          },
        ],
        Z = n(8834),
        k = n.n(Z),
        M = function (e) {
          var t = e.activeIndex,
            n = e.className,
            i = e.renderDelay,
            a = (0, x.useState)(!i),
            s = a[0],
            o = a[1],
            c = (0, x.useRef)(null);
          return (
            (0, x.useEffect)(function () {
              i &&
                setTimeout(function () {
                  o(!0);
                }, 1e3 * i);
            }, []),
            (0, r.jsxs)("div", {
              ref: c,
              className: b()(k().sceneWrapper, n),
              children: [
                (0, r.jsxs)(D.Xz, {
                  camera: { fov: 2.5 },
                  dpr: [1, 2],
                  children: [
                    (0, r.jsx)("ambientLight", { intensity: 2 }),
                    (0, r.jsx)("pointLight", {
                      intensity: 2,
                      position: [-4, 10, 10],
                    }),
                    (0, r.jsx)(x.Suspense, {
                      fallback: (0, r.jsx)("mesh", {}),
                      children:
                        s &&
                        T.map(function (e, n) {
                          return (0,
                          r.jsx)(R.N, { cursor: !1, global: !1, speed: t === n ? 2.5 : 0, children: (0, r.jsx)(e, { visible: t === n }) }, t === n ? "active-".concat(n) : "passive-".concat(n));
                        }),
                    }),
                  ],
                }),
                (0, r.jsx)(O.Z, { areaRef: c, mode: O.A.DRAG }),
              ],
            })
          );
        },
        L = [
          {
            id: 0,
            title: "Gaming",
            descriptionTitle: "PS5 / Oculus",
            description:
              "Most of my gaming time goes to FIFA. I often play Mortal Kombat 11, Call of Duty, Marvel's Spider-Man and a few others . I'm also exploring VR gaming with Oculus.",
          },
          {
            id: 1,
            title: "Music",
            descriptionTitle: "An eclectic music taste",
            description:
              "I enjoy music and I enjoy discovering music more. I listen to a broad range of genres. Often reoccuring are pop, indie soul, electronic, afro house and afrobeats. Spotify Wrapped showed that I listened to 196,334 minutes of music in 2021 (approximately 40% of the year).",
          },
          {
            id: 2,
            title: "Football",
            descriptionTitle: "SUNDAY LEAGUE HERO",
            description:
              "I'm a big football enthusiast. I'm either watching or playing unprofessional football as a center forward. I'm a fan of FC Bayern Munich.",
          },
        ];
      function G(e, t, n) {
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              G(e, t, n[t]);
            });
        }
        return e;
      }
      function F(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function z(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var B = n(5173),
        Q = n.n(B);
      function V(e, t, n) {
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
      var q = function () {
          var e = (0, x.useState)(
              (function (e) {
                var t = e.map(function (e) {
                    var t = e.title,
                      n = e.id;
                    return { title: t, id: n, key: n };
                  }),
                  n = [],
                  r = [],
                  i = [];
                return (
                  t.forEach(function (e) {
                    var a = e.key,
                      s = F(e, ["key"]);
                    n.push(W({}, s, { key: a + t.length })),
                      r.push(W({}, s, { key: a + 2 * t.length })),
                      i.push(W({}, s, { key: a + 3 * t.length }));
                  }),
                  z(t).concat(z(n), z(r), z(i))
                );
              })(L)
            ),
            t = e[0],
            n = e[1],
            i = (0, x.useState)(0),
            a = i[0],
            c = i[1],
            l = (0, x.useState)(!1),
            u = l[0],
            d = l[1],
            m = (0, x.useRef)(0),
            f = (0, x.useRef)(!1),
            p = (0, x.useRef)(null),
            _ = function (e) {
              var r = p.current;
              (r.style.transition = "none"),
                (r.style.transform = ""),
                n(
                  (function (e, t) {
                    var n = e.findIndex(function (e) {
                        return e.key === t;
                      }),
                      r = e.slice(n),
                      i = e.slice(0, n).map(function (e, t) {
                        return W({}, e, { key: r[r.length - 1].key + t + 1 });
                      });
                    return z(r).concat(z(i));
                  })(t, e)
                ),
                setTimeout(function () {
                  (r.style.transition = ""), d(!1);
                }, 50);
            },
            j = function () {
              f.current = !0;
            };
          return (
            (0, x.useEffect)(function () {
              var e = function () {
                f.current &&
                  (m.current > 2 || _(m.current),
                  window.removeEventListener("resize", e));
              };
              return (
                window.addEventListener("resize", e),
                function () {
                  m.current < 3 && window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, r.jsxs)("div", {
              className: Q().hobbiesCarousel,
              children: [
                (0, r.jsx)("div", {
                  ref: p,
                  className: Q().controls,
                  children: t.map(function (e) {
                    var t = e.id,
                      n = e.title,
                      i = e.key;
                    return (0, r.jsx)(
                      "button",
                      {
                        className: b()(Q().control, V({}, Q().active, a === t)),
                        onClick: function (e) {
                          return (function (e) {
                            var t = e.e,
                              n = e.id,
                              r = e.key;
                            if (!u) {
                              var i = p.current,
                                a =
                                  t.target.getBoundingClientRect().left -
                                  i.getBoundingClientRect().left;
                              (i.style.transform = "translate3d(".concat(
                                -a,
                                "px, 0, 0)"
                              )),
                                c(n),
                                (m.current = r),
                                r > 2 &&
                                  (d(!0),
                                  setTimeout(function () {
                                    return _(r);
                                  }, 750));
                            }
                          })({ e: e, id: t, key: i });
                        },
                        children: (0, r.jsx)(o.Z, {
                          text: n,
                          animateIntoView: i < 3,
                          isStatic: i > 2,
                          intersectionRootMargin: "0px 100px",
                          snapOnAnimationEnd: 2 === i ? j : void 0,
                        }),
                      },
                      i
                    );
                  }),
                }),
                (0, r.jsx)("div", {
                  className: Q().mobileControls,
                  children: L.map(function (e) {
                    var t = e.id,
                      n = e.title;
                    return (0, r.jsx)(
                      "button",
                      {
                        className: b()(Q().control, V({}, Q().active, a === t)),
                        onClick: function () {
                          return c(t);
                        },
                        children: (0, r.jsx)(o.Z, { text: n }),
                      },
                      t
                    );
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: Q().items,
                  children: [
                    (0, r.jsx)("div", {
                      className: Q().itemDetailsWrapper,
                      children: L.map(function (e) {
                        var t = e.id,
                          n = e.descriptionTitle,
                          i = e.description;
                        return (0,
                        r.jsxs)("div", { className: b()(Q().itemDetails, V({}, Q().active, a === t)), children: [(0, r.jsx)(H.ZP, { text: n, elementType: H.Hd.HEADING }), (0, r.jsx)(s.Z, { children: (0, r.jsx)("p", { children: i }) })] }, t);
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: Q().itemsScene,
                      children: (0, r.jsx)(M, {
                        renderDelay: 0,
                        activeIndex: a,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        K = n(3953),
        X = n.n(K),
        U = function () {
          return (0, r.jsx)("section", {
            className: X().personalInterestsContainer,
            children: (0, r.jsxs)(a.ZP, {
              className: X().personalInterests,
              children: [
                (0, r.jsx)(s.Z, {
                  children: (0, r.jsx)("h4", { children: "03/" }),
                }),
                (0, r.jsx)(H.ZP, {
                  className: X().titleTwo,
                  elementType: H.Hd.HEADING,
                  text: "Personal interests",
                }),
                (0, r.jsx)(H.ZP, {
                  className: X().titleThree,
                  elementType: H.Hd.HEADING,
                  text: "Drag around",
                }),
                (0, r.jsx)(q, {}),
              ],
            }),
          });
        },
        Y = [
          {
            project: "Richard Ekwonye Portfolio",
            platform: "Awwwards Site of the Day",
            year: "2022",
          },
          {
            project: "Richard Ekwonye Portfolio",
            platform: "Awwwards Developer Award",
            year: "2022",
          },
          {
            project: "Richard Ekwonye Portfolio",
            platform: "Awwwards Honorable Mention",
            year: "2022",
          },
          {
            project: "Richard Ekwonye Portfolio",
            platform: "FWA of the Day",
            year: "2022",
          },
          {
            project: "Richard Ekwonye Portfolio",
            platform: "Godly",
            year: "2022",
          },
          {
            project: "Richard Ekwonye Portfolio",
            platform: "Muzli Portfolio Design Inspiration",
            year: "2022",
          },
          {
            project: "Richard Ekwonye Portfolio",
            platform: "Codrops Inspirational Websites Roundup",
            year: "2022",
          },
        ],
        J = n(1586),
        $ = n.n(J),
        ee = function () {
          return (0, r.jsx)("section", {
            className: $().awardsAndRecognitionContainer,
            children: (0, r.jsxs)(a.ZP, {
              className: $().awardsAndRecognition,
              children: [
                (0, r.jsx)(s.Z, {
                  children: (0, r.jsx)("h4", { children: "04/" }),
                }),
                (0, r.jsxs)("h2", {
                  className: $().title,
                  children: [
                    (0, r.jsx)(o.Z, { text: "Awards and" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(o.Z, { text: "recognition" }),
                  ],
                }),
                (0, r.jsxs)("h2", {
                  className: $().mobileTitle,
                  children: [
                    (0, r.jsx)(o.Z, {
                      text: "Awards",
                      srText: "Awards & recognition",
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(o.Z, { text: "& recog", withoutSrText: !0 }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(o.Z, { text: "-nition", withoutSrText: !0 }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: $().table,
                  children: [
                    (0, r.jsxs)("div", {
                      className: $().tableHead,
                      children: [
                        (0, r.jsx)("span", {
                          className: $().project,
                          children: "Project",
                        }),
                        (0, r.jsx)("span", {
                          className: $().platform,
                          children: "Award or platform",
                        }),
                        (0, r.jsx)("span", {
                          className: $().year,
                          children: "Year",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: $().tableBody,
                      children: Y.map(function (e, t) {
                        var n = e.project,
                          i = e.platform,
                          a = e.year;
                        return (0,
                        r.jsxs)("div", { className: $().tableRow, children: [(0, r.jsx)("span", { className: $().project, children: n }), (0, r.jsx)("span", { className: $().platform, children: i }), (0, r.jsx)("span", { className: $().year, children: a })] }, t);
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        te = n(2907),
        ne = n(3279),
        re = n.n(ne),
        ie = function () {
          return (0, r.jsx)("section", {
            className: re().latestProjectContainer,
            children: (0, r.jsxs)(a.ZP, {
              className: re().latestProject,
              children: [
                (0, r.jsx)(s.Z, {
                  children: (0, r.jsx)("h4", { children: "05/" }),
                }),
                (0, r.jsx)(H.ZP, {
                  className: re().titleTwo,
                  elementType: H.Hd.HEADING,
                  text: "See latest project",
                }),
                (0, r.jsx)(H.ZP, {
                  className: re().titleThree,
                  elementType: H.Hd.HEADING,
                  text: "Creative development",
                }),
                (0, r.jsx)(te.ZP, { maxCount: 1 }),
              ],
            }),
          });
        },
        ae = n(4562),
        se = function () {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.default, {
                children: (0, r.jsx)("title", {
                  children: "Richard Ekwonye | About",
                }),
              }),
              (0, r.jsx)(d, {}),
              (0, r.jsx)(p, {}),
              (0, r.jsx)(C, {}),
              (0, r.jsx)(U, {}),
              (0, r.jsx)(ee, {}),
              (0, r.jsx)(ie, {}),
              (0, r.jsx)(ae.Z, { sectionNumber: "06" }),
            ],
          });
        };
    },
    5604: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return r;
        },
      });
      var r = function (e) {
        return "0".concat(e).slice(-2);
      };
    },
    2852: function (e) {
      e.exports = {
        aboutDetailsContainer: "AboutDetails_aboutDetailsContainer__l7LLh",
        aboutDetails: "AboutDetails_aboutDetails__2t02f",
        title: "AboutDetails_title__bTCwM",
        details: "AboutDetails_details__GyCyI",
        detailsImageContainer: "AboutDetails_detailsImageContainer__QDOPY",
        detailsImage: "AboutDetails_detailsImage__bN2fE",
      };
    },
    5906: function (e) {
      e.exports = {
        aboutHeroContainer: "AboutHero_aboutHeroContainer__IHDKA",
        aboutHero: "AboutHero_aboutHero__2O4_h",
        title: "AboutHero_title__KiQf4",
        coverImageContainer: "AboutHero_coverImageContainer___u3KQ",
        coverImage: "AboutHero_coverImage__qgmqo",
      };
    },
    7157: function (e) {
      e.exports = {
        accordion: "Accordion_accordion__ffj9F",
        item: "Accordion_item__FmWun",
        control: "Accordion_control__DnUPJ",
        itemNumber: "Accordion_itemNumber__nP_7i",
        title: "Accordion_title__QDGNX",
        stateSymbol: "Accordion_stateSymbol__cPWwv",
        passive: "Accordion_passive__rHhjV",
        content: "Accordion_content__Qfqgr",
      };
    },
    1586: function (e) {
      e.exports = {
        awardsAndRecognitionContainer:
          "AwardsAndRecognition_awardsAndRecognitionContainer__7RqvW",
        awardsAndRecognition:
          "AwardsAndRecognition_awardsAndRecognition__0jlDZ",
        title: "AwardsAndRecognition_title__CYLkC",
        mobileTitle: "AwardsAndRecognition_mobileTitle__a_ouN",
        table: "AwardsAndRecognition_table__c_8xx",
        tableHead: "AwardsAndRecognition_tableHead__v6ApO",
        tableBody: "AwardsAndRecognition_tableBody__ZUaa_",
        tableRow: "AwardsAndRecognition_tableRow___8itP",
        project: "AwardsAndRecognition_project__P0viC",
        platform: "AwardsAndRecognition_platform__SHa1P",
        year: "AwardsAndRecognition_year__y37WL",
      };
    },
    5173: function (e) {
      e.exports = {
        hobbiesCarousel: "HobbiesCarousel_hobbiesCarousel__Vd3Ki",
        controls: "HobbiesCarousel_controls__YUpRI",
        mobileControls: "HobbiesCarousel_mobileControls__9ZPlJ",
        control: "HobbiesCarousel_control__N9EAF",
        active: "HobbiesCarousel_active__A2LTK",
        items: "HobbiesCarousel_items__OzKXw",
        itemDetailsWrapper: "HobbiesCarousel_itemDetailsWrapper__feqDh",
        itemDetails: "HobbiesCarousel_itemDetails__hy40u",
        itemsScene: "HobbiesCarousel_itemsScene__fQg3P",
      };
    },
    8834: function (e) {
      e.exports = { sceneWrapper: "HobbiesScene_sceneWrapper__2qqkG" };
    },
    3279: function (e) {
      e.exports = {
        latestProjectContainer: "LatestProject_latestProjectContainer__c0FH4",
        latestProject: "LatestProject_latestProject__2h87k",
        titleTwo: "LatestProject_titleTwo__Gu3Kg",
        titleThree: "LatestProject_titleThree__zV_HL",
      };
    },
    3953: function (e) {
      e.exports = {
        personalInterestsContainer:
          "PersonalInterests_personalInterestsContainer__XR_fv",
        personalInterests: "PersonalInterests_personalInterests___5uMH",
        titleTwo: "PersonalInterests_titleTwo___0BF_",
        titleThree: "PersonalInterests_titleThree__Jq6Ot",
      };
    },
    5202: function (e) {
      e.exports = {
        servicesContainer: "Services_servicesContainer__1f_6U",
        services: "Services_services__WCO8I",
        title: "Services_title__vrBfi",
        accordion: "Services_accordion__lnwXH",
      };
    },
  },
  function (e) {
    e.O(0, [176, 822, 186, 774, 888, 179], function () {
      return (t = 4613), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=about-759812c653dc0bd2.js.map
