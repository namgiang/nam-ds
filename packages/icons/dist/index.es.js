import ne from "react";
import { ArrowLeft as oe, ArrowRight as te, ArrowUp as ce, ArrowDown as ae, ChevronLeft as se, ChevronRight as le, ChevronUp as ie, ChevronDown as ue, Menu as fe, X as de, Plus as Ie, Minus as me, Edit as pe, Trash2 as Ee, Save as ve, Copy as _e, Download as he, Upload as Re, Check as be, CheckCircle as ke, AlertCircle as Se, AlertTriangle as we, Info as Ce, XCircle as Te, Search as ye, Filter as Ae, Eye as ge, EyeOff as Oe, Heart as xe, Star as Pe, Settings as je, User as Ne, Home as De, ExternalLink as Le, Mail as Ue, Phone as Me, Calendar as Ye, Clock as Fe, Book as $e, Languages as ze, Sparkles as We } from "lucide-react";
function Ve(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var y = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function He() {
  if (Y) return p;
  Y = 1;
  var c = Symbol.for("react.transitional.element"), I = Symbol.for("react.fragment");
  function i(d, u, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), u.key !== void 0 && (a = "" + u.key), "key" in u) {
      o = {};
      for (var f in u)
        f !== "key" && (o[f] = u[f]);
    } else o = u;
    return u = o.ref, {
      $$typeof: c,
      type: d,
      key: a,
      ref: u !== void 0 ? u : null,
      props: o
    };
  }
  return p.Fragment = I, p.jsx = i, p.jsxs = i, p;
}
var E = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function Be() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case H:
          return "Profiler";
        case V:
          return "StrictMode";
        case G:
          return "Suspense";
        case J:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case X:
            return e.displayName || "Context";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return n = e.displayName || null, n !== null ? n : c(e.type) || "Memo";
          case k:
            n = e._payload, e = e._init;
            try {
              return c(e(n));
            } catch {
            }
        }
      return null;
    }
    function I(e) {
      return "" + e;
    }
    function i(e) {
      try {
        I(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var t = n.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), I(e);
      }
    }
    function d(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var n = c(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(e) {
      if (j.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, n) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function v() {
      var e = c(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, n, t, s, h, C) {
      var l = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: n,
        props: t,
        _owner: s
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, n, t, s, h, C) {
      var l = n.children;
      if (l !== void 0)
        if (s)
          if (ee(l)) {
            for (s = 0; s < l.length; s++)
              O(l[s]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(l);
      if (j.call(n, "key")) {
        l = c(e);
        var m = Object.keys(n).filter(function(re) {
          return re !== "key";
        });
        s = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", M[l + s] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          l,
          m,
          l
        ), M[l + s] = !0);
      }
      if (l = null, t !== void 0 && (i(t), l = "" + t), a(n) && (i(n.key), l = "" + n.key), "key" in n) {
        t = {};
        for (var T in n)
          T !== "key" && (t[T] = n[T]);
      } else t = n;
      return l && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        l,
        t,
        u(),
        h,
        C
      );
    }
    function O(e) {
      x(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? x(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function x(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var _ = ne, P = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), X = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), S = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, ee = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, D = {}, L = _.react_stack_bottom_frame.bind(
      _,
      o
    )(), U = w(d(o)), M = {};
    E.Fragment = b, E.jsx = function(e, n, t) {
      var s = 1e4 > S.recentlyCreatedOwnerStacks++;
      return g(
        e,
        n,
        t,
        !1,
        s ? Error("react-stack-top-frame") : L,
        s ? w(d(e)) : U
      );
    }, E.jsxs = function(e, n, t) {
      var s = 1e4 > S.recentlyCreatedOwnerStacks++;
      return g(
        e,
        n,
        t,
        !0,
        s ? Error("react-stack-top-frame") : L,
        s ? w(d(e)) : U
      );
    };
  }()), E;
}
process.env.NODE_ENV === "production" ? y.exports = He() : y.exports = Be();
var A = y.exports, $ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(c) {
  (function() {
    var I = {}.hasOwnProperty;
    function i() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var f = arguments[a];
        f && (o = u(o, d(f)));
      }
      return o;
    }
    function d(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return i.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var f in o)
        I.call(o, f) && o[f] && (a = u(a, f));
      return a;
    }
    function u(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    c.exports ? (i.default = i, c.exports = i) : window.classNames = i;
  })();
})($);
var Xe = $.exports;
const qe = /* @__PURE__ */ Ve(Xe), Ge = {
  xs: "var(--font-size-xs)",
  // 0.75rem = 12px
  sm: "var(--font-size-sm)",
  // 0.875rem = 14px
  md: "var(--font-size-base)",
  // 1.125rem = 18px
  lg: "var(--font-size-lg)",
  // 1.5rem = 24px
  xl: "var(--font-size-xl)",
  // 1.875rem = 30px
  "2xl": "var(--font-size-2xl)"
  // 2.25rem = 36px
}, z = ({
  size: c = "md",
  className: I,
  label: i,
  color: d,
  children: u,
  style: o,
  ref: a,
  ...f
}) => {
  const v = Ge[c], R = !i;
  return /* @__PURE__ */ A.jsx(
    "span",
    {
      ref: a,
      className: qe("nam-icon", `nam-icon--${c}`, I),
      style: {
        display: "inline-block",
        width: v,
        height: v,
        color: d || "currentColor",
        flexShrink: 0,
        ...o
      },
      "aria-hidden": R,
      "aria-label": i,
      role: i ? "img" : void 0,
      ...f,
      children: u
    }
  );
};
z.displayName = "BaseIcon";
const Je = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 24,
  xl: 30,
  "2xl": 36
};
function r(c, I) {
  const i = (d) => {
    const { size: u = "md", ref: o, ...a } = d, f = Je[u];
    return /* @__PURE__ */ A.jsx(z, { ref: o, ...d, children: /* @__PURE__ */ A.jsx(
      c,
      {
        size: f,
        strokeWidth: 1.5,
        style: {
          width: "100%",
          height: "100%",
          display: "block"
        },
        ...a
      }
    ) });
  };
  return i.displayName = I, i;
}
const Ke = r(oe, "IconArrowLeft"), er = r(
  te,
  "IconArrowRight"
), rr = r(ce, "IconArrowUp"), nr = r(ae, "IconArrowDown"), or = r(
  se,
  "IconChevronLeft"
), tr = r(
  le,
  "IconChevronRight"
), cr = r(ie, "IconChevronUp"), ar = r(
  ue,
  "IconChevronDown"
), sr = r(fe, "IconMenu"), lr = r(de, "IconClose"), ir = r(Ie, "IconPlus"), ur = r(me, "IconMinus"), fr = r(pe, "IconEdit"), dr = r(Ee, "IconDelete"), Ir = r(ve, "IconSave"), mr = r(_e, "IconCopy"), pr = r(he, "IconDownload"), Er = r(Re, "IconUpload"), vr = r(be, "IconCheck"), _r = r(
  ke,
  "IconCheckCircle"
), hr = r(Se, "IconAlert"), Rr = r(we, "IconWarning"), br = r(Ce, "IconInfo"), kr = r(Te, "IconError"), Sr = r(ye, "IconSearch"), wr = r(Ae, "IconFilter"), Cr = r(ge, "IconEye"), Tr = r(Oe, "IconEyeOff"), yr = r(xe, "IconHeart"), Ar = r(Pe, "IconStar"), gr = r(je, "IconSettings"), Or = r(Ne, "IconUser"), xr = r(De, "IconHome"), Pr = r(
  Le,
  "IconExternalLink"
), jr = r(Ue, "IconMail"), Nr = r(Me, "IconPhone"), Dr = r(Ye, "IconCalendar"), Lr = r(Fe, "IconClock"), Ur = r($e, "IconBook"), Mr = r(ze, "IconLanguage"), Yr = r(We, "IconSparkles");
export {
  z as BaseIcon,
  Ge as ICON_SIZES,
  hr as IconAlert,
  nr as IconArrowDown,
  Ke as IconArrowLeft,
  er as IconArrowRight,
  rr as IconArrowUp,
  Ur as IconBook,
  Dr as IconCalendar,
  vr as IconCheck,
  _r as IconCheckCircle,
  ar as IconChevronDown,
  or as IconChevronLeft,
  tr as IconChevronRight,
  cr as IconChevronUp,
  Lr as IconClock,
  lr as IconClose,
  mr as IconCopy,
  dr as IconDelete,
  pr as IconDownload,
  fr as IconEdit,
  kr as IconError,
  Pr as IconExternalLink,
  Cr as IconEye,
  Tr as IconEyeOff,
  wr as IconFilter,
  yr as IconHeart,
  xr as IconHome,
  br as IconInfo,
  Mr as IconLanguage,
  jr as IconMail,
  sr as IconMenu,
  ur as IconMinus,
  Nr as IconPhone,
  ir as IconPlus,
  Ir as IconSave,
  Sr as IconSearch,
  gr as IconSettings,
  Yr as IconSparkles,
  Ar as IconStar,
  Er as IconUpload,
  Or as IconUser,
  Rr as IconWarning,
  r as createIcon
};
//# sourceMappingURL=index.es.js.map
