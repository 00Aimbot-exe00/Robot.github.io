(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [337],
  {
    251: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/work",
        function () {
          return n(3412);
        },
      ]);
    },
    3412: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var a = n(5893),
        i = n(9008),
        s = n(7294),
        r = n(4184),
        o = n.n(r),
        c = n(9346),
        l = n(2907),
        u = n(8595),
        b = n(5596),
        _ = n(2336),
        d = n(5604),
        p = [
          {
            title: "Projects",
            description:
              "A selected set of projects I've built with individuals and teams. This is a mix of personal, collaborative and client owned projects.",
            projectsType: l.q0.PROJECTS,
            total: (0, d.m)(l.hQ),
          },
          {
            title: "Labs",
            description:
              "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.",
            projectsType: l.q0.LABS,
            total: (0, d.m)(l.VJ),
          },
        ],
        m = 0.46,
        T = n(5426),
        h = n.n(T);
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
      var f = function () {
          var e = (0, s.useState)(0),
            t = e[0],
            n = e[1];
          return (0, a.jsx)("section", {
            className: h().workTabsContainer,
            children: (0, a.jsxs)(c.ZP, {
              className: h().workTabs,
              children: [
                (0, a.jsx)(u.Z, {
                  animationDelay: 0.95,
                  animateIntoView: !1,
                  children: (0, a.jsx)("h4", { children: "01/" }),
                }),
                (0, a.jsx)("div", {
                  className: h().tabHeader,
                  children: p.map(function (e, i) {
                    var s = e.title,
                      r = e.total;
                    return (0, a.jsxs)(
                      "button",
                      {
                        className: o()(
                          h().tabControl,
                          j({}, h().inactive, t !== i)
                        ),
                        onClick: function () {
                          return n(i);
                        },
                        children: [
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(_.Z, {
                              text: s,
                              animationDelay: m,
                              animateIntoView: !1,
                            }),
                          }),
                          (0, a.jsx)(b.ZP, {
                            className: h().typeCount,
                            elementType: b.Hd.SPAN,
                            text: r,
                            animationDelay: m,
                            animateIntoView: !1,
                          }),
                        ],
                      },
                      i
                    );
                  }),
                }),
                (0, a.jsx)("div", {
                  className: h().tabTitles,
                  children: p.map(function (e, n) {
                    var i = e.title;
                    return (0,
                    a.jsx)(b.ZP, { className: o()(h().tabTitle, j({}, h().passive, t !== n)), elementType: b.Hd.HEADING, text: i, animationDelay: m, animateIntoView: !1 }, n);
                  }),
                }),
                (0, a.jsx)(u.Z, {
                  className: h().tabDescriptions,
                  animationDelay: 1,
                  animateIntoView: !1,
                  children: p.map(function (e, n) {
                    var i = e.description;
                    return (0,
                    a.jsx)("p", { className: o()(h().tabDescription, j({}, h().passive, t !== n)), children: i }, n);
                  }),
                }),
                (0, a.jsx)(l.ZP, { projectsType: p[t].projectsType }),
              ],
            }),
          });
        },
        k = n(4562),
        x = function () {
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(i.default, {
                children: (0, a.jsx)("title", {
                  children: "Richard Ekwonye | Work",
                }),
              }),
              (0, a.jsx)(f, {}),
              (0, a.jsx)(k.Z, { sectionNumber: "02" }),
            ],
          });
        };
    },
    5604: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return a;
        },
      });
      var a = function (e) {
        return "0".concat(e).slice(-2);
      };
    },
    5426: function (e) {
      e.exports = {
        workTabsContainer: "WorkTabs_workTabsContainer__Kls1N",
        workTabs: "WorkTabs_workTabs__90Ckt",
        tabHeader: "WorkTabs_tabHeader__c_JF_",
        tabControl: "WorkTabs_tabControl__UE998",
        inactive: "WorkTabs_inactive__30J6i",
        typeCount: "WorkTabs_typeCount__qXsMQ",
        tabTitles: "WorkTabs_tabTitles__t3ShL",
        tabTitle: "WorkTabs_tabTitle__gyq8g",
        passive: "WorkTabs_passive__AC5tU",
        tabDescriptions: "WorkTabs_tabDescriptions__ZozmI",
        tabDescription: "WorkTabs_tabDescription__CdApc",
      };
    },
  },
  function (e) {
    e.O(0, [822, 186, 774, 888, 179], function () {
      return (t = 251), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=work-17fd3eca354afbe9.js.map
