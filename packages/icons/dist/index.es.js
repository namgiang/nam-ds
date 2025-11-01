import ne from "react";
import { ArrowLeft as oe, ArrowRight as te, ArrowUp as ce, ArrowDown as ae, ChevronLeft as se, ChevronRight as le, ChevronUp as ie, ChevronDown as ue, Menu as fe, X as de, Plus as me, Minus as Ie, Edit as pe, Trash2 as Ee, Save as ve, Copy as _e, Download as he, Upload as Re, Check as be, CheckCircle as we, AlertCircle as Se, AlertTriangle as Ce, Info as ke, XCircle as Te, Search as ye, Filter as Ae, Eye as Oe, EyeOff as xe, Heart as ge, Star as Pe, Settings as je, User as Ne, Home as De, ExternalLink as Ue, Mail as Le, Phone as Me, Calendar as Ye, Clock as Fe } from "lucide-react";
function $e(c) {
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
function ze() {
  if (Y) return p;
  Y = 1;
  var c = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
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
  return p.Fragment = m, p.jsx = i, p.jsxs = i, p;
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
function We() {
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
        case J:
          return "Suspense";
        case B:
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
          case q:
            return e.displayName || "Context";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function i(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), m(e);
      }
    }
    function d(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
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
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
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
    function R(e, r, t, s, h, k) {
      var l = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
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
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, s, h, k) {
      var l = r.children;
      if (l !== void 0)
        if (s)
          if (ee(l)) {
            for (s = 0; s < l.length; s++)
              x(l[s]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(l);
      if (j.call(r, "key")) {
        l = c(e);
        var I = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        s = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", M[l + s] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          l,
          I,
          l
        ), M[l + s] = !0);
      }
      if (l = null, t !== void 0 && (i(t), l = "" + t), a(r) && (i(r.key), l = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return l && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        l,
        t,
        u(),
        h,
        k
      );
    }
    function x(e) {
      g(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === w && (e._payload.status === "fulfilled" ? g(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function g(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var _ = ne, P = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), S = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, ee = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, D = {}, U = _.react_stack_bottom_frame.bind(
      _,
      o
    )(), L = C(d(o)), M = {};
    E.Fragment = b, E.jsx = function(e, r, t) {
      var s = 1e4 > S.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        s ? Error("react-stack-top-frame") : U,
        s ? C(d(e)) : L
      );
    }, E.jsxs = function(e, r, t) {
      var s = 1e4 > S.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        s ? Error("react-stack-top-frame") : U,
        s ? C(d(e)) : L
      );
    };
  }()), E;
}
process.env.NODE_ENV === "production" ? y.exports = ze() : y.exports = We();
var A = y.exports, $ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(c) {
  (function() {
    var m = {}.hasOwnProperty;
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
        m.call(o, f) && o[f] && (a = u(a, f));
      return a;
    }
    function u(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    c.exports ? (i.default = i, c.exports = i) : window.classNames = i;
  })();
})($);
var Ve = $.exports;
const He = /* @__PURE__ */ $e(Ve), Xe = {
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
  className: m,
  label: i,
  color: d,
  children: u,
  style: o,
  ref: a,
  ...f
}) => {
  const v = Xe[c], R = !i;
  return /* @__PURE__ */ A.jsx(
    "span",
    {
      ref: a,
      className: He("nam-icon", `nam-icon--${c}`, m),
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
const qe = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 24,
  xl: 30,
  "2xl": 36
};
function n(c, m) {
  const i = (d) => {
    const { size: u = "md", ref: o, ...a } = d, f = qe[u];
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
  return i.displayName = m, i;
}
const Be = n(oe, "IconArrowLeft"), Ze = n(
  te,
  "IconArrowRight"
), Qe = n(ce, "IconArrowUp"), Ke = n(ae, "IconArrowDown"), er = n(
  se,
  "IconChevronLeft"
), rr = n(
  le,
  "IconChevronRight"
), nr = n(ie, "IconChevronUp"), or = n(
  ue,
  "IconChevronDown"
), tr = n(fe, "IconMenu"), cr = n(de, "IconClose"), ar = n(me, "IconPlus"), sr = n(Ie, "IconMinus"), lr = n(pe, "IconEdit"), ir = n(Ee, "IconDelete"), ur = n(ve, "IconSave"), fr = n(_e, "IconCopy"), dr = n(he, "IconDownload"), mr = n(Re, "IconUpload"), Ir = n(be, "IconCheck"), pr = n(
  we,
  "IconCheckCircle"
), Er = n(Se, "IconAlert"), vr = n(Ce, "IconWarning"), _r = n(ke, "IconInfo"), hr = n(Te, "IconError"), Rr = n(ye, "IconSearch"), br = n(Ae, "IconFilter"), wr = n(Oe, "IconEye"), Sr = n(xe, "IconEyeOff"), Cr = n(ge, "IconHeart"), kr = n(Pe, "IconStar"), Tr = n(je, "IconSettings"), yr = n(Ne, "IconUser"), Ar = n(De, "IconHome"), Or = n(
  Ue,
  "IconExternalLink"
), xr = n(Le, "IconMail"), gr = n(Me, "IconPhone"), Pr = n(Ye, "IconCalendar"), jr = n(Fe, "IconClock");
export {
  z as BaseIcon,
  Xe as ICON_SIZES,
  Er as IconAlert,
  Ke as IconArrowDown,
  Be as IconArrowLeft,
  Ze as IconArrowRight,
  Qe as IconArrowUp,
  Pr as IconCalendar,
  Ir as IconCheck,
  pr as IconCheckCircle,
  or as IconChevronDown,
  er as IconChevronLeft,
  rr as IconChevronRight,
  nr as IconChevronUp,
  jr as IconClock,
  cr as IconClose,
  fr as IconCopy,
  ir as IconDelete,
  dr as IconDownload,
  lr as IconEdit,
  hr as IconError,
  Or as IconExternalLink,
  wr as IconEye,
  Sr as IconEyeOff,
  br as IconFilter,
  Cr as IconHeart,
  Ar as IconHome,
  _r as IconInfo,
  xr as IconMail,
  tr as IconMenu,
  sr as IconMinus,
  gr as IconPhone,
  ar as IconPlus,
  ur as IconSave,
  Rr as IconSearch,
  Tr as IconSettings,
  kr as IconStar,
  mr as IconUpload,
  yr as IconUser,
  vr as IconWarning,
  n as createIcon
};
//# sourceMappingURL=index.es.js.map
