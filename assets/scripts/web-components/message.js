import Vue from 'vue';

/* eslint-ignore */
(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default'];
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = '5a74'));
})({
  2350: function(t, e) {
    function n(t, e) {
      var n = t[1] || '',
        o = t[3];
      if (!o) return n;
      if (e && 'function' === typeof btoa) {
        var i = r(o),
          s = o.sources.map(function(t) {
            return '/*# sourceURL=' + o.sourceRoot + t + ' */';
          });
        return [n]
          .concat(s)
          .concat([i])
          .join('\n');
      }
      return [n].join('\n');
    }
    function r(t) {
      var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + e;
      return '/*# ' + n + ' */';
    }
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var r = n(e, t);
            return e[2] ? '@media ' + e[2] + '{' + r + '}' : r;
          }).join('');
        }),
        (e.i = function(t, n) {
          'string' === typeof t && (t = [[null, t, '']]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            'number' === typeof i && (r[i] = !0);
          }
          for (o = 0; o < t.length; o++) {
            var s = t[o];
            ('number' === typeof s[0] && r[s[0]]) ||
              (n && !s[2] ? (s[2] = n) : n && (s[2] = '(' + s[2] + ') and (' + n + ')'), e.push(s));
          }
        }),
        e
      );
    };
  },
  '237a': function(t, e, n) {
    (e = t.exports = n('2350')(!1)),
      e.push([t.i, '.text[data-v-36b4e511]{font-size:2em;background:#f0f}', '']);
  },
  '35d6': function(t, e, n) {
    'use strict';
    function r(t, e) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          s = i[0],
          a = i[1],
          c = i[2],
          u = i[3],
          f = { id: t + ':' + o, css: a, media: c, sourceMap: u };
        r[s] ? r[s].parts.push(f) : n.push((r[s] = { id: s, parts: [f] }));
      }
      return n;
    }
    function o(t, e, n) {
      var o = r(t, e);
      i(o, n);
    }
    function i(t, e) {
      const n = e._injectedStyles || (e._injectedStyles = {});
      for (var r = 0; r < t.length; r++) {
        var o = t[r],
          i = n[o.id];
        if (!i) {
          for (var s = 0; s < o.parts.length; s++) a(o.parts[s], e);
          n[o.id] = !0;
        }
      }
    }
    function s(t) {
      var e = document.createElement('style');
      return (e.type = 'text/css'), t.appendChild(e), e;
    }
    function a(t, e) {
      var n = s(e),
        r = t.css,
        o = t.media,
        i = t.sourceMap;
      if (
        (o && n.setAttribute('media', o),
        i &&
          ((r += '\n/*# sourceURL=' + i.sources[0] + ' */'),
          (r +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            ' */')),
        n.styleSheet)
      )
        n.styleSheet.cssText = r;
      else {
        while (n.firstChild) n.removeChild(n.firstChild);
        n.appendChild(document.createTextNode(r));
      }
    }
    n.r(e),
      n.d(e, 'default', function() {
        return o;
      });
  },
  '5a74': function(t, e, n) {
    'use strict';
    var r;
    (n.r(e), 'undefined' !== typeof window) &&
      (Object({ NODE_ENV: 'production', BASE_URL: '/' }).NEED_CURRENTSCRIPT_POLYFILL && n('f6fd'),
      (r = window.document.currentScript) &&
        (r = r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/)) &&
        (n.p = r[1]));
    var o = n('8bbf'),
      i = n.n(o);
    const s = /-(\w)/g,
      a = t => {
        return t.replace(s, (t, e) => (e ? e.toUpperCase() : ''));
      },
      c = /\B([A-Z])/g,
      u = t => {
        return t.replace(c, '-$1').toLowerCase();
      };
    function f(t) {
      const e = {};
      return (
        t.forEach(t => {
          e[t] = void 0;
        }),
        e
      );
    }
    function p(t, e, n) {
      (t[e] = [].concat(t[e] || [])), t[e].unshift(n);
    }
    function l(t, e) {
      if (t) {
        const n = t.$options[e] || [];
        n.forEach(e => {
          e.call(t);
        });
      }
    }
    function d(t, e) {
      return new CustomEvent(t, { bubbles: !1, cancelable: !1, detail: e });
    }
    const h = t => /function Boolean/.test(String(t)),
      v = t => /function Number/.test(String(t));
    function m(t, e, { type: n } = {}) {
      if (h(n))
        return 'true' === t || 'false' === t ? 'true' === t : '' === t || t === e || null != t;
      if (v(n)) {
        const e = parseFloat(t, 10);
        return isNaN(e) ? t : e;
      }
      return t;
    }
    function b(t, e) {
      const n = [];
      for (let r = 0, o = e.length; r < o; r++) n.push(_(t, e[r]));
      return n;
    }
    function _(t, e) {
      if (3 === e.nodeType) return e.data.trim() ? e.data : null;
      if (1 === e.nodeType) {
        const n = { attrs: y(e), domProps: { innerHTML: e.innerHTML } };
        return n.attrs.slot && ((n.slot = n.attrs.slot), delete n.attrs.slot), t(e.tagName, n);
      }
      return null;
    }
    function y(t) {
      const e = {};
      for (let n = 0, r = t.attributes.length; n < r; n++) {
        const r = t.attributes[n];
        e[r.nodeName] = r.nodeValue;
      }
      return e;
    }
    function g(t, e) {
      const n = 'function' === typeof e && !e.cid;
      let r,
        o,
        i,
        s = !1;
      function c(t) {
        if (s) return;
        const e = 'function' === typeof t ? t.options : t,
          n = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
        (r = n.map(u)), (o = n.map(a));
        const c = Array.isArray(e.props) ? {} : e.props || {};
        (i = o.reduce((t, e, r) => {
          return (t[e] = c[n[r]]), t;
        }, {})),
          p(e, 'beforeCreate', function() {
            const t = this.$emit;
            this.$emit = (e, ...n) => {
              return (
                this.$root.$options.customElement.dispatchEvent(d(e, n)), t.call(this, e, ...n)
              );
            };
          }),
          p(e, 'created', function() {
            o.forEach(t => {
              this.$root.props[t] = this[t];
            });
          }),
          o.forEach(t => {
            Object.defineProperty(v.prototype, t, {
              get() {
                return this._wrapper.props[t];
              },
              set(e) {
                this._wrapper.props[t] = e;
              },
              enumerable: !1,
              configurable: !0,
            });
          }),
          (s = !0);
      }
      function h(t, e) {
        const n = a(e),
          r = t.hasAttribute(e) ? t.getAttribute(e) : void 0;
        t._wrapper.props[n] = m(r, e, i[n]);
      }
      class v extends HTMLElement {
        constructor() {
          super(), this.attachShadow({ mode: 'open' });
          const n = (this._wrapper = new t({
              name: 'shadow-root',
              customElement: this,
              shadowRoot: this.shadowRoot,
              data() {
                return { props: {}, slotChildren: [] };
              },
              render(t) {
                return t(e, { ref: 'inner', props: this.props }, this.slotChildren);
              },
            })),
            r = new MutationObserver(t => {
              let e = !1;
              for (let n = 0; n < t.length; n++) {
                const r = t[n];
                s && 'attributes' === r.type && r.target === this
                  ? h(this, r.attributeName)
                  : (e = !0);
              }
              e && (n.slotChildren = Object.freeze(b(n.$createElement, this.childNodes)));
            });
          r.observe(this, { childList: !0, subtree: !0, characterData: !0, attributes: !0 });
        }
        get vueComponent() {
          return this._wrapper.$refs.inner;
        }
        connectedCallback() {
          const t = this._wrapper;
          if (t._isMounted) l(this.vueComponent, 'activated');
          else {
            const n = () => {
              (t.props = f(o)),
                r.forEach(t => {
                  h(this, t);
                });
            };
            s
              ? n()
              : e().then(t => {
                  (t.__esModule || 'Module' === t[Symbol.toStringTag]) && (t = t.default),
                    c(t),
                    n();
                }),
              (t.slotChildren = Object.freeze(b(t.$createElement, this.childNodes))),
              t.$mount(),
              this.shadowRoot.appendChild(t.$el);
          }
        }
        disconnectedCallback() {
          l(this.vueComponent, 'deactivated');
        }
      }
      return n || c(e), v;
    }
    var C = g;
    n('2350'), n('35d6');
    function S(t, e, n, r, o, i, s, a) {
      var c,
        u = 'function' === typeof t ? t.options : t;
      if (
        (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
        r && (u.functional = !0),
        i && (u._scopeId = 'data-v-' + i),
        s
          ? ((c = function(t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)),
                t || 'undefined' === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                o && o.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(s);
            }),
            (u._ssrRegister = c))
          : o &&
            (c = a
              ? function() {
                  o.call(this, this.$root.$options.shadowRoot);
                }
              : o),
        c)
      )
        if (u.functional) {
          u._injectStyles = c;
          var f = u.render;
          u.render = function(t, e) {
            return c.call(e), f(t, e);
          };
        } else {
          var p = u.beforeCreate;
          u.beforeCreate = p ? [].concat(p, c) : [c];
        }
      return { exports: t, options: u };
    }
    var w = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n('div', { staticClass: 'text' }, [t._v(t._s(t.text))]);
      },
      E = [],
      j = { props: { text: { type: String, required: !0 } } },
      x = j;
    function $(t) {
      var e = n('d199');
      e.__inject__ && e.__inject__(t);
    }
    var O = S(x, w, E, !1, $, '36b4e511', null, !0),
      R = O.exports;
    window.customElements.define('app-message', C(i.a, R));
  },
  '8bbf': function(t, e) {
    t.exports = Vue;
  },
  '9f65': function(t, e, n) {
    var r = n('237a');
    'string' === typeof r && (r = [[t.i, r, '']]), r.locals && (t.exports = r.locals);
    var o = n('35d6').default;
    t.exports.__inject__ = function(t) {
      o('8a98c4be', r, t);
    };
  },
  d199: function(t, e, n) {
    'use strict';
    n.r(e);
    var r = n('9f65'),
      o = n.n(r);
    for (var i in r)
      'default' !== i &&
        (function(t) {
          n.d(e, t, function() {
            return r[t];
          });
        })(i);
    e['default'] = o.a;
  },
  f6fd: function(t, e) {
    (function(t) {
      var e = 'currentScript',
        n = t.getElementsByTagName('script');
      e in t ||
        Object.defineProperty(t, e, {
          get: function() {
            try {
              throw new Error();
            } catch (r) {
              var t,
                e = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack) || [!1])[1];
              for (t in n) if (n[t].src == e || 'interactive' == n[t].readyState) return n[t];
              return null;
            }
          },
        });
    })(document);
  },
});
//# sourceMappingURL=app-message.min.js.map
