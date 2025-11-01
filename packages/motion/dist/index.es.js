import V, { useRef as re, useEffect as oe } from "react";
const d = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  },
  scaleOut: {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  },
  // Slide animations
  slideInUp: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" }
  },
  slideInDown: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" }
  },
  slideInLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" }
  },
  slideInRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" }
  },
  // Special effects
  bounce: {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 400
      }
    },
    exit: { scale: 0 }
  },
  flip: {
    initial: { rotateY: -90, opacity: 0 },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    exit: { rotateY: 90, opacity: 0 }
  },
  // Container animations for staggered children
  stagger: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }
}, F = {
  // Modal/Dialog variants
  modal: {
    backdrop: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    content: {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 400
        }
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
          duration: 0.2
        }
      }
    }
  },
  // Dropdown/Menu variants
  dropdown: {
    container: {
      initial: { opacity: 0, scale: 0.95, y: -10 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        y: -10,
        transition: {
          duration: 0.15,
          ease: "easeIn"
        }
      }
    },
    item: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 }
    }
  },
  // Toast/Notification variants
  toast: {
    topRight: {
      initial: { opacity: 0, x: 100, scale: 0.8 },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300
        }
      },
      exit: {
        opacity: 0,
        x: 100,
        scale: 0.8,
        transition: {
          duration: 0.2
        }
      }
    },
    bottomCenter: {
      initial: { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300
        }
      },
      exit: {
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.2
        }
      }
    }
  },
  // Accordion variants
  accordion: {
    container: {
      initial: { height: 0, opacity: 0 },
      animate: {
        height: "auto",
        opacity: 1,
        transition: {
          height: {
            type: "spring",
            damping: 25,
            stiffness: 200
          },
          opacity: {
            delay: 0.1,
            duration: 0.2
          }
        }
      },
      exit: {
        height: 0,
        opacity: 0,
        transition: {
          height: {
            type: "spring",
            damping: 25,
            stiffness: 200
          },
          opacity: {
            duration: 0.1
          }
        }
      }
    }
  },
  // Tab variants
  tab: {
    content: {
      initial: { opacity: 0, x: 10 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      },
      exit: {
        opacity: 0,
        x: -10,
        transition: {
          duration: 0.2,
          ease: "easeIn"
        }
      }
    },
    indicator: {
      initial: { scaleX: 0 },
      animate: {
        scaleX: 1,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300
        }
      }
    }
  },
  // Loading/Skeleton variants
  loading: {
    pulse: {
      initial: { opacity: 0.5 },
      animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
          duration: 1.5,
          repeat: 1 / 0,
          ease: "easeInOut"
        }
      }
    },
    shimmer: {
      initial: { x: "-100%" },
      animate: {
        x: "100%",
        transition: {
          duration: 1.5,
          repeat: 1 / 0,
          ease: "linear"
        }
      }
    }
  }
}, de = {
  // Easing functions
  easing: {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    sharp: [0.4, 0, 0.6, 1],
    standard: [0.4, 0, 0.2, 1]
  },
  // Duration presets
  duration: {
    fastest: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slowest: 0.8
  },
  // Spring configurations
  spring: {
    gentle: {
      type: "spring",
      damping: 25,
      stiffness: 120
    },
    wobbly: {
      type: "spring",
      damping: 10,
      stiffness: 400
    },
    stiff: {
      type: "spring",
      damping: 20,
      stiffness: 300
    },
    slow: {
      type: "spring",
      damping: 30,
      stiffness: 80
    }
  },
  // Common transition presets
  presets: {
    fade: {
      duration: 0.2,
      ease: "easeInOut"
    },
    slideUp: {
      type: "spring",
      damping: 25,
      stiffness: 200
    },
    scaleIn: {
      type: "spring",
      damping: 20,
      stiffness: 300
    },
    bouncy: {
      type: "spring",
      damping: 15,
      stiffness: 400
    },
    smooth: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    },
    snappy: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1]
    }
  },
  // Stagger configurations
  stagger: {
    fast: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    },
    normal: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
    slow: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
function S() {
  return {
    start: async () => {
    }
  };
}
function se(t, n) {
  return !0;
}
function pe() {
  const t = S(), n = re(null), a = se();
  return oe(() => {
    t.start("animate");
  }, [t, a]), { ref: n, controls: t, inView: a };
}
function me(t, n = 0.1) {
  const a = S();
  return { controls: a, startAnimation: () => {
    a.start((c) => ({
      opacity: 1,
      y: 0,
      transition: { delay: c * n }
    }));
  } };
}
function ye(t = { scale: 1.05 }, n = { scale: 0.95 }) {
  return {
    whileHover: t,
    whileTap: n
  };
}
function ge() {
  return typeof window < "u" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1;
}
function xe() {
  const t = S();
  return { controls: t, playSequence: async (a) => {
    for (const l of a)
      await t.start(l.animation), l.duration && await new Promise(
        (c) => setTimeout(c, (l.duration || 0) * 1e3)
      );
  } };
}
var O = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function ce() {
  if (L) return x;
  L = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(l, c, f) {
    var y = null;
    if (f !== void 0 && (y = "" + f), c.key !== void 0 && (y = "" + c.key), "key" in c) {
      f = {};
      for (var g in c)
        g !== "key" && (f[g] = c[g]);
    } else f = c;
    return c = f.ref, {
      $$typeof: t,
      type: l,
      key: y,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return x.Fragment = n, x.jsx = a, x.jsxs = a, x;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function le() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case J:
          return "Profiler";
        case G:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return "Portal";
          case B:
            return e.displayName || "Context";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var i = e.render;
            return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return i = e.displayName || null, i !== null ? i : t(e.type) || "Memo";
          case b:
            i = e._payload, e = e._init;
            try {
              return t(e(i));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function a(e) {
      try {
        n(e);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var r = i.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), n(e);
      }
    }
    function l(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === b)
        return "<...>";
      try {
        var i = t(e);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function y(e) {
      if (C.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function g(e, i) {
      function r() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: r,
        configurable: !0
      });
    }
    function q() {
      var e = t(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function z(e, i, r, o, _, T) {
      var s = r.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: i,
        props: r,
        _owner: o
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: q
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
        value: _
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, i, r, o, _, T) {
      var s = i.children;
      if (s !== void 0)
        if (o)
          if (ie(s)) {
            for (o = 0; o < s.length; o++)
              I(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(s);
      if (C.call(i, "key")) {
        s = t(e);
        var m = Object.keys(i).filter(function(ae) {
          return ae !== "key";
        });
        o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[s + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          m,
          s
        ), $[s + o] = !0);
      }
      if (s = null, r !== void 0 && (a(r), s = "" + r), y(i) && (a(i.key), s = "" + i.key), "key" in i) {
        r = {};
        for (var k in i)
          k !== "key" && (r[k] = i[k]);
      } else r = i;
      return s && g(
        r,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), z(
        e,
        s,
        r,
        c(),
        _,
        T
      );
    }
    function I(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === b && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var E = V, P = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), h = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ie = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, M = {}, Y = E.react_stack_bottom_frame.bind(
      E,
      f
    )(), D = w(l(f)), $ = {};
    v.Fragment = R, v.jsx = function(e, i, r) {
      var o = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        i,
        r,
        !1,
        o ? Error("react-stack-top-frame") : Y,
        o ? w(l(e)) : D
      );
    }, v.jsxs = function(e, i, r) {
      var o = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        i,
        r,
        !0,
        o ? Error("react-stack-top-frame") : Y,
        o ? w(l(e)) : D
      );
    };
  }()), v;
}
process.env.NODE_ENV === "production" ? O.exports = ce() : O.exports = le();
var u = O.exports;
const p = {
  div: ({ children: t, ...n }) => /* @__PURE__ */ u.jsx("div", { ...n, children: t })
}, W = ({
  children: t,
  mode: n
}) => /* @__PURE__ */ u.jsx(u.Fragment, { children: t });
function ve({ preset: t = "fadeIn", children: n, ...a }) {
  return /* @__PURE__ */ u.jsx(
    p.div,
    {
      variants: d[t],
      initial: "initial",
      animate: "animate",
      exit: "exit",
      ...a,
      children: n
    }
  );
}
function Ee({ delay: t = 0.1, children: n, ...a }) {
  return /* @__PURE__ */ u.jsx(
    p.div,
    {
      variants: d.stagger,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      ...a,
      children: V.Children.map(n, (l, c) => /* @__PURE__ */ u.jsx(p.div, { variants: d.staggerItem, custom: c, children: l }, c))
    }
  );
}
function _e({ children: t, ...n }) {
  return /* @__PURE__ */ u.jsx(
    p.div,
    {
      variants: d.scaleIn,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      ...n,
      children: t
    }
  );
}
function Re({ direction: t = "up", children: n, ...a }) {
  const l = {
    up: d.slideInUp,
    down: d.slideInDown,
    left: d.slideInLeft,
    right: d.slideInRight
  };
  return /* @__PURE__ */ u.jsx(
    p.div,
    {
      variants: l[t],
      initial: "initial",
      animate: "animate",
      exit: "exit",
      ...a,
      children: n
    }
  );
}
function be({ isOpen: t, onClose: n, children: a }) {
  return /* @__PURE__ */ u.jsx(W, { children: t && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      p.div,
      {
        variants: F.modal.backdrop,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1e3
        },
        onClick: n
      }
    ),
    /* @__PURE__ */ u.jsx(
      p.div,
      {
        variants: F.modal.content,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        style: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1001
        },
        children: a
      }
    )
  ] }) });
}
function he({ show: t, mode: n = "wait", children: a }) {
  return /* @__PURE__ */ u.jsx(W, { mode: n, children: t && a });
}
function ue(t) {
  return typeof document < "u" ? getComputedStyle(document.documentElement).getPropertyValue(t.startsWith("--") ? t : `--${t}`).trim() : "";
}
function we(t) {
  return ue(t);
}
function Te(t = 300, n = 20, a = 1) {
  return {
    type: "spring",
    damping: n,
    stiffness: t,
    mass: a
  };
}
function ke(t) {
  return t / 1e3;
}
function Oe(t) {
  return t;
}
const Se = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  standard: [0.4, 0, 0.2, 1]
};
function Ae(t, n) {
  return {
    keyframes: t,
    times: n || t.map((a, l) => l / (t.length - 1))
  };
}
function Ie(t, n) {
  return (typeof window < "u" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1) && n ? { ...t, ...n } : t;
}
function je(t, n) {
  return (typeof window < "u" ? window.innerWidth < 768 : !1) ? t : n || t;
}
function Pe(t, n = 0.1) {
  return t * n;
}
function Ce(t = 0.3, n = "0px") {
  return {
    viewport: {
      once: !0,
      amount: t,
      margin: n
    }
  };
}
export {
  ve as Fade,
  be as Modal,
  he as Presence,
  _e as Scale,
  Re as Slide,
  Ee as Stagger,
  Ae as createKeyframes,
  je as createResponsiveAnimation,
  Te as createSpring,
  Ce as createViewportAnimation,
  Se as easings,
  we as getMotionValue,
  ke as ms,
  d as presets,
  Oe as seconds,
  Pe as staggerDelay,
  de as transitions,
  ye as useHoverAnimation,
  ge as useReducedMotion,
  pe as useScrollAnimation,
  xe as useSequence,
  me as useStaggeredAnimation,
  F as variants,
  Ie as withReducedMotion
};
//# sourceMappingURL=index.es.js.map
