(function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	//#region node_modules/dexie/import-wrapper-prod.mjs
	var import_dexie_min = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		((e, t) => {
			"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Dexie = t();
		})(exports, function() {
			var B = function(e, t) {
				return (B = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
					e.__proto__ = t;
				} : function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				}))(e, t);
			};
			var _ = function() {
				return (_ = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e;
				}).apply(this, arguments);
			};
			function R(e, t, n) {
				if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
				return e.concat(r || Array.prototype.slice.call(t));
			}
			var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, O = Object.keys, x = Array.isArray;
			function a(t, n) {
				return "object" == typeof n && O(n).forEach(function(e) {
					t[e] = n[e];
				}), t;
			}
			"undefined" == typeof Promise || f.Promise || (f.Promise = Promise);
			var F = Object.getPrototypeOf, N = {}.hasOwnProperty;
			function m(e, t) {
				return N.call(e, t);
			}
			function M(t, n) {
				"function" == typeof n && (n = n(F(t))), ("undefined" == typeof Reflect ? O : Reflect.ownKeys)(n).forEach(function(e) {
					u(t, e, n[e]);
				});
			}
			var L = Object.defineProperty;
			function u(e, t, n, r) {
				L(e, t, a(n && m(n, "get") && "function" == typeof n.get ? {
					get: n.get,
					set: n.set,
					configurable: !0
				} : {
					value: n,
					configurable: !0,
					writable: !0
				}, r));
			}
			function U(t) {
				return { from: function(e) {
					return t.prototype = Object.create(e.prototype), u(t.prototype, "constructor", t), { extend: M.bind(null, t.prototype) };
				} };
			}
			var z = Object.getOwnPropertyDescriptor;
			var V = [].slice;
			function W(e, t, n) {
				return V.call(e, t, n);
			}
			function Y(e, t) {
				return t(e);
			}
			function $(e) {
				if (!e) throw new Error("Assertion Failed");
			}
			function Q(e) {
				f.setImmediate ? setImmediate(e) : setTimeout(e, 0);
			}
			function c(e, t) {
				if ("string" == typeof t && m(e, t)) return e[t];
				if (!t) return e;
				if ("string" != typeof t) {
					for (var n = [], r = 0, i = t.length; r < i; ++r) {
						var o = c(e, t[r]);
						n.push(o);
					}
					return n;
				}
				var a, u = t.indexOf(".");
				return -1 === u || null == (a = e[t.substr(0, u)]) ? void 0 : c(a, t.substr(u + 1));
			}
			function b(e, t, n) {
				if (e && void 0 !== t && !("isFrozen" in Object && Object.isFrozen(e))) if ("string" != typeof t && "length" in t) {
					$("string" != typeof n && "length" in n);
					for (var r = 0, i = t.length; r < i; ++r) b(e, t[r], n[r]);
				} else {
					var o = t.indexOf(".");
					if (-1 !== o) {
						var a = t.substr(0, o), o = t.substr(o + 1);
						if ("" === o) void 0 === n ? x(e) && !isNaN(parseInt(a)) ? e.splice(a, 1) : delete e[a] : e[a] = n;
						else {
							var u = e[a];
							if (!u || !m(e, a)) {
								if (void 0 === n) return;
								u = e[a] = {};
							}
							b(u, o, n);
						}
					} else void 0 === n ? x(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
				}
			}
			function G(e) {
				var t, n = {};
				for (t in e) m(e, t) && (n[t] = e[t]);
				return n;
			}
			var X = [].concat;
			function H(e) {
				return X.apply([], e);
			}
			var e = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(H([
				8,
				16,
				32,
				64
			].map(function(t) {
				return [
					"Int",
					"Uint",
					"Float"
				].map(function(e) {
					return e + t + "Array";
				});
			}))).filter(function(e) {
				return f[e];
			}), J = new Set(e.map(function(e) {
				return f[e];
			}));
			var Z = null;
			function ee(e) {
				Z = /* @__PURE__ */ new WeakMap();
				e = function e(t) {
					if (!t || "object" != typeof t) return t;
					var n = Z.get(t);
					if (n) return n;
					if (x(t)) {
						n = [], Z.set(t, n);
						for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
					} else if (J.has(t.constructor)) n = t;
					else {
						var o, a = F(t);
						for (o in n = a === Object.prototype ? {} : Object.create(a), Z.set(t, n), t) m(t, o) && (n[o] = e(t[o]));
					}
					return n;
				}(e);
				return Z = null, e;
			}
			var te = {}.toString;
			function ne(e) {
				return te.call(e).slice(8, -1);
			}
			var re = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", ie = "symbol" == typeof re ? function(e) {
				var t;
				return null != e && (t = e[re]) && t.apply(e);
			} : function() {
				return null;
			};
			function oe(e, t) {
				t = e.indexOf(t);
				0 <= t && e.splice(t, 1);
			}
			var ae = {};
			function n(e) {
				var t, n, r, i;
				if (1 === arguments.length) {
					if (x(e)) return e.slice();
					if (this === ae && "string" == typeof e) return [e];
					if (i = ie(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
					else {
						if (null == e) return [e];
						if ("number" != typeof (t = e.length)) return [e];
						for (n = new Array(t); t--;) n[t] = e[t];
					}
				} else for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
				return n;
			}
			var ue = "undefined" != typeof Symbol ? function(e) {
				return "AsyncFunction" === e[Symbol.toStringTag];
			} : function() {
				return !1;
			}, e = [
				"Unknown",
				"Constraint",
				"Data",
				"TransactionInactive",
				"ReadOnly",
				"Version",
				"NotFound",
				"InvalidState",
				"InvalidAccess",
				"Abort",
				"Timeout",
				"QuotaExceeded",
				"Syntax",
				"DataClone"
			], t = [
				"Modify",
				"Bulk",
				"OpenFailed",
				"VersionChange",
				"Schema",
				"Upgrade",
				"InvalidTable",
				"MissingAPI",
				"NoSuchDatabase",
				"InvalidArgument",
				"SubTransaction",
				"Unsupported",
				"Internal",
				"DatabaseClosed",
				"PrematureCommit",
				"ForeignAwait"
			].concat(e), se = {
				VersionChanged: "Database version changed by other database connection",
				DatabaseClosed: "Database has been closed",
				Abort: "Transaction aborted",
				TransactionInactive: "Transaction has already completed or failed",
				MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
			};
			function ce(e, t) {
				this.name = e, this.message = t;
			}
			function le(e, t) {
				return e + ". Errors: " + Object.keys(t).map(function(e) {
					return t[e].toString();
				}).filter(function(e, t, n) {
					return n.indexOf(e) === t;
				}).join("\n");
			}
			function fe(e, t, n, r) {
				this.failures = t, this.failedKeys = r, this.successCount = n, this.message = le(e, t);
			}
			function he(e, t) {
				this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
					return t[e];
				}), this.failuresByPos = t, this.message = le(e, this.failures);
			}
			U(ce).from(Error).extend({ toString: function() {
				return this.name + ": " + this.message;
			} }), U(fe).from(ce), U(he).from(ce);
			var de = t.reduce(function(e, t) {
				return e[t] = t + "Error", e;
			}, {}), pe = ce, k = t.reduce(function(e, n) {
				var r = n + "Error";
				function t(e, t) {
					this.name = r, e ? "string" == typeof e ? (this.message = "".concat(e).concat(t ? "\n " + t : ""), this.inner = t || null) : "object" == typeof e && (this.message = "".concat(e.name, " ").concat(e.message), this.inner = e) : (this.message = se[n] || r, this.inner = null);
				}
				return U(t).from(pe), e[n] = t, e;
			}, {}), ye = (k.Syntax = SyntaxError, k.Type = TypeError, k.Range = RangeError, e.reduce(function(e, t) {
				return e[t + "Error"] = k[t], e;
			}, {}));
			e = t.reduce(function(e, t) {
				return -1 === [
					"Syntax",
					"Type",
					"Range"
				].indexOf(t) && (e[t + "Error"] = k[t]), e;
			}, {});
			function g() {}
			function ve(e) {
				return e;
			}
			function me(t, n) {
				return null == t || t === ve ? n : function(e) {
					return n(t(e));
				};
			}
			function be(e, t) {
				return function() {
					e.apply(this, arguments), t.apply(this, arguments);
				};
			}
			function ge(i, o) {
				return i === g ? o : function() {
					var e = i.apply(this, arguments), t = (void 0 !== e && (arguments[0] = e), this.onsuccess), n = this.onerror, r = (this.onsuccess = null, this.onerror = null, o.apply(this, arguments));
					return t && (this.onsuccess = this.onsuccess ? be(t, this.onsuccess) : t), n && (this.onerror = this.onerror ? be(n, this.onerror) : n), void 0 !== r ? r : e;
				};
			}
			function we(n, r) {
				return n === g ? r : function() {
					n.apply(this, arguments);
					var e = this.onsuccess, t = this.onerror;
					this.onsuccess = this.onerror = null, r.apply(this, arguments), e && (this.onsuccess = this.onsuccess ? be(e, this.onsuccess) : e), t && (this.onerror = this.onerror ? be(t, this.onerror) : t);
				};
			}
			function _e(i, o) {
				return i === g ? o : function(e) {
					var t = i.apply(this, arguments), e = (a(e, t), this.onsuccess), n = this.onerror, r = (this.onsuccess = null, this.onerror = null, o.apply(this, arguments));
					return e && (this.onsuccess = this.onsuccess ? be(e, this.onsuccess) : e), n && (this.onerror = this.onerror ? be(n, this.onerror) : n), void 0 === t ? void 0 === r ? void 0 : r : a(t, r);
				};
			}
			function xe(e, t) {
				return e === g ? t : function() {
					return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
				};
			}
			function ke(i, o) {
				return i === g ? o : function() {
					var e = i.apply(this, arguments);
					if (e && "function" == typeof e.then) {
						for (var t = this, n = arguments.length, r = new Array(n); n--;) r[n] = arguments[n];
						return e.then(function() {
							return o.apply(t, r);
						});
					}
					return o.apply(this, arguments);
				};
			}
			e.ModifyError = fe, e.DexieError = ce, e.BulkError = he;
			var l = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
			function Oe(e) {
				l = e;
			}
			var Pe = {}, Ke = 100, Ee = "undefined" == typeof Promise ? [] : (t = Promise.resolve(), "undefined" != typeof crypto && crypto.subtle ? [
				Ee = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
				F(Ee),
				t
			] : [
				t,
				F(t),
				t
			]), t = Ee[0], Se = Ee[1], Se = Se && Se.then, Ae = t && t.constructor, je = !!Ee[2];
			var Ce = function(e, t) {
				Re.push([e, t]), Ie && (queueMicrotask(Ye), Ie = !1);
			}, Te = !0, Ie = !0, qe = [], De = [], Be = ve, s = {
				id: "global",
				global: !0,
				ref: 0,
				unhandleds: [],
				onunhandled: g,
				pgp: !1,
				env: {},
				finalize: g
			}, P = s, Re = [], Fe = 0, Ne = [];
			function K(e) {
				if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
				this._listeners = [], this._lib = !1;
				var t = this._PSD = P;
				if ("function" != typeof e) {
					if (e !== Pe) throw new TypeError("Not a function");
					this._state = arguments[1], this._value = arguments[2], !1 === this._state && Ue(this, this._value);
				} else this._state = null, this._value = null, ++t.ref, function t(r, e) {
					try {
						e(function(n) {
							if (null === r._state) {
								if (n === r) throw new TypeError("A promise cannot be resolved with itself.");
								var e = r._lib && $e();
								n && "function" == typeof n.then ? t(r, function(e, t) {
									n instanceof K ? n._then(e, t) : n.then(e, t);
								}) : (r._state = !0, r._value = n, ze(r)), e && Qe();
							}
						}, Ue.bind(null, r));
					} catch (e) {
						Ue(r, e);
					}
				}(this, e);
			}
			var Me = {
				get: function() {
					var u = P, t = et;
					function e(n, r) {
						var i = this, o = !u.global && (u !== P || t !== et), a = o && !w(), e = new K(function(e, t) {
							Ve(i, new Le(ut(n, u, o, a), ut(r, u, o, a), e, t, u));
						});
						return this._consoleTask && (e._consoleTask = this._consoleTask), e;
					}
					return e.prototype = Pe, e;
				},
				set: function(e) {
					u(this, "then", e && e.prototype === Pe ? Me : {
						get: function() {
							return e;
						},
						set: Me.set
					});
				}
			};
			function Le(e, t, n, r, i) {
				this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r, this.psd = i;
			}
			function Ue(e, t) {
				var n, r;
				De.push(t), null === e._state && (n = e._lib && $e(), t = Be(t), e._state = !1, e._value = t, r = e, qe.some(function(e) {
					return e._value === r._value;
				}) || qe.push(r), ze(e), n) && Qe();
			}
			function ze(e) {
				var t = e._listeners;
				e._listeners = [];
				for (var n = 0, r = t.length; n < r; ++n) Ve(e, t[n]);
				var i = e._PSD;
				--i.ref || i.finalize(), 0 === Fe && (++Fe, Ce(function() {
					0 == --Fe && Ge();
				}, []));
			}
			function Ve(e, t) {
				if (null === e._state) e._listeners.push(t);
				else {
					var n = e._state ? t.onFulfilled : t.onRejected;
					if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
					++t.psd.ref, ++Fe, Ce(We, [
						n,
						e,
						t
					]);
				}
			}
			function We(e, t, n) {
				try {
					var r, i = t._value;
					!t._state && De.length && (De = []), r = l && t._consoleTask ? t._consoleTask.run(function() {
						return e(i);
					}) : e(i), t._state || -1 !== De.indexOf(i) || ((e) => {
						for (var t = qe.length; t;) if (qe[--t]._value === e._value) return qe.splice(t, 1);
					})(t), n.resolve(r);
				} catch (e) {
					n.reject(e);
				} finally {
					0 == --Fe && Ge(), --n.psd.ref || n.psd.finalize();
				}
			}
			function Ye() {
				at(s, function() {
					$e() && Qe();
				});
			}
			function $e() {
				var e = Te;
				return Ie = Te = !1, e;
			}
			function Qe() {
				var e, t, n;
				do
					for (; 0 < Re.length;) for (e = Re, Re = [], n = e.length, t = 0; t < n; ++t) {
						var r = e[t];
						r[0].apply(null, r[1]);
					}
				while (0 < Re.length);
				Ie = Te = !0;
			}
			function Ge() {
				for (var e = qe, t = (qe = [], e.forEach(function(e) {
					e._PSD.onunhandled.call(null, e._value, e);
				}), Ne.slice(0)), n = t.length; n;) t[--n]();
			}
			function Xe(e) {
				return new K(Pe, !1, e);
			}
			function E(n, r) {
				var i = P;
				return function() {
					var e = $e(), t = P;
					try {
						return h(i, !0), n.apply(this, arguments);
					} catch (e) {
						r && r(e);
					} finally {
						h(t, !1), e && Qe();
					}
				};
			}
			M(K.prototype, {
				then: Me,
				_then: function(e, t) {
					Ve(this, new Le(null, null, e, t, P));
				},
				catch: function(e) {
					var t, n;
					return 1 === arguments.length ? this.then(null, e) : (t = e, n = arguments[1], "function" == typeof t ? this.then(null, function(e) {
						return (e instanceof t ? n : Xe)(e);
					}) : this.then(null, function(e) {
						return (e && e.name === t ? n : Xe)(e);
					}));
				},
				finally: function(t) {
					return this.then(function(e) {
						return K.resolve(t()).then(function() {
							return e;
						});
					}, function(e) {
						return K.resolve(t()).then(function() {
							return Xe(e);
						});
					});
				},
				timeout: function(r, i) {
					var o = this;
					return r < 1 / 0 ? new K(function(e, t) {
						var n = setTimeout(function() {
							return t(new k.Timeout(i));
						}, r);
						o.then(e, t).finally(clearTimeout.bind(null, n));
					}) : this;
				}
			}), "undefined" != typeof Symbol && Symbol.toStringTag && u(K.prototype, Symbol.toStringTag, "Dexie.Promise"), s.env = ot(), M(K, {
				all: function() {
					var o = n.apply(null, arguments).map(rt);
					return new K(function(n, r) {
						0 === o.length && n([]);
						var i = o.length;
						o.forEach(function(e, t) {
							return K.resolve(e).then(function(e) {
								o[t] = e, --i || n(o);
							}, r);
						});
					});
				},
				resolve: function(n) {
					return n instanceof K ? n : n && "function" == typeof n.then ? new K(function(e, t) {
						n.then(e, t);
					}) : new K(Pe, !0, n);
				},
				reject: Xe,
				race: function() {
					var e = n.apply(null, arguments).map(rt);
					return new K(function(t, n) {
						e.map(function(e) {
							return K.resolve(e).then(t, n);
						});
					});
				},
				PSD: {
					get: function() {
						return P;
					},
					set: function(e) {
						return P = e;
					}
				},
				totalEchoes: { get: function() {
					return et;
				} },
				newPSD: v,
				usePSD: at,
				scheduler: {
					get: function() {
						return Ce;
					},
					set: function(e) {
						Ce = e;
					}
				},
				rejectionMapper: {
					get: function() {
						return Be;
					},
					set: function(e) {
						Be = e;
					}
				},
				follow: function(i, n) {
					return new K(function(e, t) {
						return v(function(n, r) {
							var e = P;
							e.unhandleds = [], e.onunhandled = r, e.finalize = be(function() {
								var t, e = this;
								t = function() {
									0 === e.unhandleds.length ? n() : r(e.unhandleds[0]);
								}, Ne.push(function e() {
									t(), Ne.splice(Ne.indexOf(e), 1);
								}), ++Fe, Ce(function() {
									0 == --Fe && Ge();
								}, []);
							}, e.finalize), i();
						}, n, e, t);
					});
				}
			}), Ae && (Ae.allSettled && u(K, "allSettled", function() {
				var e = n.apply(null, arguments).map(rt);
				return new K(function(n) {
					0 === e.length && n([]);
					var r = e.length, i = new Array(r);
					e.forEach(function(e, t) {
						return K.resolve(e).then(function(e) {
							return i[t] = {
								status: "fulfilled",
								value: e
							};
						}, function(e) {
							return i[t] = {
								status: "rejected",
								reason: e
							};
						}).then(function() {
							return --r || n(i);
						});
					});
				});
			}), Ae.any && "undefined" != typeof AggregateError && u(K, "any", function() {
				var e = n.apply(null, arguments).map(rt);
				return new K(function(n, r) {
					0 === e.length && r(/* @__PURE__ */ new AggregateError([]));
					var i = e.length, o = new Array(i);
					e.forEach(function(e, t) {
						return K.resolve(e).then(function(e) {
							return n(e);
						}, function(e) {
							o[t] = e, --i || r(new AggregateError(o));
						});
					});
				});
			}), Ae.withResolvers) && (K.withResolvers = Ae.withResolvers);
			var o = {
				awaits: 0,
				echoes: 0,
				id: 0
			}, He = 0, Je = [], Ze = 0, et = 0, tt = 0;
			function v(e, t, n, r) {
				var i = P, o = Object.create(i), t = (o.parent = i, o.ref = 0, o.global = !1, o.id = ++tt, s.env, o.env = je ? {
					Promise: K,
					PromiseProp: {
						value: K,
						configurable: !0,
						writable: !0
					},
					all: K.all,
					race: K.race,
					allSettled: K.allSettled,
					any: K.any,
					resolve: K.resolve,
					reject: K.reject
				} : {}, t && a(o, t), ++i.ref, o.finalize = function() {
					--this.parent.ref || this.parent.finalize();
				}, at(o, e, n, r));
				return 0 === o.ref && o.finalize(), t;
			}
			function nt() {
				return o.id || (o.id = ++He), ++o.awaits, o.echoes += Ke, o.id;
			}
			function w() {
				return !!o.awaits && (0 == --o.awaits && (o.id = 0), o.echoes = o.awaits * Ke, !0);
			}
			function rt(e) {
				return o.echoes && e && e.constructor === Ae ? (nt(), e.then(function(e) {
					return w(), e;
				}, function(e) {
					return w(), S(e);
				})) : e;
			}
			function it() {
				var e = Je[Je.length - 1];
				Je.pop(), h(e, !1);
			}
			function h(e, t) {
				var n, r, i = P;
				(t ? !o.echoes || Ze++ && e === P : !Ze || --Ze && e === P) || queueMicrotask(t ? function(e) {
					++et, o.echoes && 0 != --o.echoes || (o.echoes = o.awaits = o.id = 0), Je.push(P), h(e, !0);
				}.bind(null, e) : it), e !== P && (P = e, i === s && (s.env = ot()), je) && (n = s.env.Promise, r = e.env, i.global || e.global) && (Object.defineProperty(f, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any) && (n.any = r.any);
			}
			function ot() {
				var e = f.Promise;
				return je ? {
					Promise: e,
					PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"),
					all: e.all,
					race: e.race,
					allSettled: e.allSettled,
					any: e.any,
					resolve: e.resolve,
					reject: e.reject
				} : {};
			}
			function at(e, t, n, r, i) {
				var o = P;
				try {
					return h(e, !0), t(n, r, i);
				} finally {
					h(o, !1);
				}
			}
			function ut(t, n, r, i) {
				return "function" != typeof t ? t : function() {
					var e = P;
					r && nt(), h(n, !0);
					try {
						return t.apply(this, arguments);
					} finally {
						h(e, !1), i && queueMicrotask(w);
					}
				};
			}
			function st(e) {
				Promise === Ae && 0 === o.echoes ? 0 === Ze ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
			}
			-1 === ("" + Se).indexOf("[native code]") && (nt = w = g);
			var S = K.reject;
			var ct = String.fromCharCode(65535), A = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lt = "String expected.", ft = "__dbnames", ht = "readonly", dt = "readwrite";
			function pt(e, t) {
				return e ? t ? function() {
					return e.apply(this, arguments) && t.apply(this, arguments);
				} : e : t;
			}
			var yt = {
				type: 3,
				lower: -1 / 0,
				lowerOpen: !1,
				upper: [[]],
				upperOpen: !1
			};
			function vt(t) {
				return "string" != typeof t || /\./.test(t) ? function(e) {
					return e;
				} : function(e) {
					return void 0 === e[t] && t in e && delete (e = ee(e))[t], e;
				};
			}
			function mt() {
				throw k.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
			}
			function j(e, t) {
				try {
					var n = bt(e), r = bt(t);
					if (n !== r) return "Array" === n ? 1 : "Array" === r ? -1 : "binary" === n ? 1 : "binary" === r ? -1 : "string" === n ? 1 : "string" === r ? -1 : "Date" === n ? 1 : "Date" !== r ? NaN : -1;
					switch (n) {
						case "number":
						case "Date":
						case "string": return t < e ? 1 : e < t ? -1 : 0;
						case "binary":
							for (var i = gt(e), o = gt(t), a = i.length, u = o.length, s = a < u ? a : u, c = 0; c < s; ++c) if (i[c] !== o[c]) return i[c] < o[c] ? -1 : 1;
							return a === u ? 0 : a < u ? -1 : 1;
						case "Array":
							for (var l = e, f = t, h = l.length, d = f.length, p = h < d ? h : d, y = 0; y < p; ++y) {
								var v = j(l[y], f[y]);
								if (0 !== v) return v;
							}
							return h === d ? 0 : h < d ? -1 : 1;
					}
				} catch (e) {}
				return NaN;
			}
			function bt(e) {
				var t = typeof e;
				return "object" == t && (ArrayBuffer.isView(e) || "ArrayBuffer" === (t = ne(e))) ? "binary" : t;
			}
			function gt(e) {
				return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
			}
			function wt(t, n, r) {
				var e = t.schema.yProps;
				return e ? (n && 0 < r.numFailures && (n = n.filter(function(e, t) {
					return !r.failures[t];
				})), Promise.all(e.map(function(e) {
					e = e.updatesTable;
					return n ? t.db.table(e).where("k").anyOf(n).delete() : t.db.table(e).clear();
				})).then(function() {
					return r;
				})) : r;
			}
			xt.prototype.execute = function(e) {
				var t = this["@@propmod"];
				if (void 0 !== t.add) {
					var n = t.add;
					if (x(n)) return R(R([], x(e) ? e : [], !0), n, !0).sort();
					if ("number" == typeof n) return (Number(e) || 0) + n;
					if ("bigint" == typeof n) try {
						return BigInt(e) + n;
					} catch (e) {
						return BigInt(0) + n;
					}
					throw new TypeError("Invalid term ".concat(n));
				}
				if (void 0 !== t.remove) {
					var r = t.remove;
					if (x(r)) return x(e) ? e.filter(function(e) {
						return !r.includes(e);
					}).sort() : [];
					if ("number" == typeof r) return Number(e) - r;
					if ("bigint" == typeof r) try {
						return BigInt(e) - r;
					} catch (e) {
						return BigInt(0) - r;
					}
					throw new TypeError("Invalid subtrahend ".concat(r));
				}
				n = null == (n = t.replacePrefix) ? void 0 : n[0];
				return n && "string" == typeof e && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
			};
			var _t = xt;
			function xt(e) {
				this["@@propmod"] = e;
			}
			function kt(e, t) {
				for (var n = O(t), r = n.length, i = !1, o = 0; o < r; ++o) {
					var a = n[o], u = t[a], s = c(e, a);
					u instanceof _t ? (b(e, a, u.execute(s)), i = !0) : s !== u && (b(e, a, u), i = !0);
				}
				return i;
			}
			r.prototype._trans = function(e, r, t) {
				var n = this._tx || P.trans, i = this.name, o = l && "undefined" != typeof console && console.createTask && console.createTask("Dexie: ".concat("readonly" === e ? "read" : "write", " ").concat(this.name));
				function a(e, t, n) {
					if (n.schema[i]) return r(n.idbtrans, n);
					throw new k.NotFound("Table " + i + " not part of transaction");
				}
				var u = $e();
				try {
					var s = n && n.db._novip === this.db._novip ? n === P.trans ? n._promise(e, a, t) : v(function() {
						return n._promise(e, a, t);
					}, {
						trans: n,
						transless: P.transless || P
					}) : function t(n, r, i, o) {
						if (n.idbdb && (n._state.openComplete || P.letThrough || n._vip)) {
							var a = n._createTransaction(r, i, n._dbSchema);
							try {
								a.create(), n._state.PR1398_maxLoop = 3;
							} catch (e) {
								return e.name === de.InvalidState && n.isOpen() && 0 < --n._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), n.close({ disableAutoOpen: !1 }), n.open().then(function() {
									return t(n, r, i, o);
								})) : S(e);
							}
							return a._promise(r, function(e, t) {
								return v(function() {
									return P.trans = a, o(e, t, a);
								});
							}).then(function(e) {
								if ("readwrite" === r) try {
									a.idbtrans.commit();
								} catch (e) {}
								return "readonly" === r ? e : a._completion.then(function() {
									return e;
								});
							});
						}
						if (n._state.openComplete) return S(new k.DatabaseClosed(n._state.dbOpenError));
						if (!n._state.isBeingOpened) {
							if (!n._state.autoOpen) return S(new k.DatabaseClosed());
							n.open().catch(g);
						}
						return n._state.dbReadyPromise.then(function() {
							return t(n, r, i, o);
						});
					}(this.db, e, [this.name], a);
					return o && (s._consoleTask = o, s = s.catch(function(e) {
						return console.trace(e), S(e);
					})), s;
				} finally {
					u && Qe();
				}
			}, r.prototype.get = function(t, e) {
				var n = this;
				return t && t.constructor === Object ? this.where(t).first(e) : null == t ? S(new k.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(e) {
					return n.core.get({
						trans: e,
						key: t
					}).then(function(e) {
						return n.hook.reading.fire(e);
					});
				}).then(e);
			}, r.prototype.where = function(o) {
				if ("string" == typeof o) return new this.db.WhereClause(this, o);
				if (x(o)) return new this.db.WhereClause(this, "[".concat(o.join("+"), "]"));
				var n = O(o);
				if (1 === n.length) return this.where(n[0]).equals(o[n[0]]);
				var e = this.schema.indexes.concat(this.schema.primKey).filter(function(t) {
					if (t.compound && n.every(function(e) {
						return 0 <= t.keyPath.indexOf(e);
					})) {
						for (var e = 0; e < n.length; ++e) if (-1 === n.indexOf(t.keyPath[e])) return !1;
						return !0;
					}
					return !1;
				}).sort(function(e, t) {
					return e.keyPath.length - t.keyPath.length;
				})[0];
				if (e && this.db._maxKey !== ct) return t = e.keyPath.slice(0, n.length), this.where(t).equals(t.map(function(e) {
					return o[e];
				}));
				!e && l && console.warn("The query ".concat(JSON.stringify(o), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
				var a = this.schema.idxByName;
				function u(e, t) {
					return 0 === j(e, t);
				}
				var t = n.reduce(function(e, t) {
					var n = e[0], e = e[1], r = a[t], i = o[t];
					return [n || r, n || !r ? pt(e, r && r.multi ? function(e) {
						e = c(e, t);
						return x(e) && e.some(function(e) {
							return u(i, e);
						});
					} : function(e) {
						return u(i, c(e, t));
					}) : e];
				}, [null, null]), r = t[0], t = t[1];
				return r ? this.where(r.name).equals(o[r.keyPath]).filter(t) : e ? this.filter(t) : this.where(n).equals("");
			}, r.prototype.filter = function(e) {
				return this.toCollection().and(e);
			}, r.prototype.count = function(e) {
				return this.toCollection().count(e);
			}, r.prototype.offset = function(e) {
				return this.toCollection().offset(e);
			}, r.prototype.limit = function(e) {
				return this.toCollection().limit(e);
			}, r.prototype.each = function(e) {
				return this.toCollection().each(e);
			}, r.prototype.toArray = function(e) {
				return this.toCollection().toArray(e);
			}, r.prototype.toCollection = function() {
				return new this.db.Collection(new this.db.WhereClause(this));
			}, r.prototype.orderBy = function(e) {
				return new this.db.Collection(new this.db.WhereClause(this, x(e) ? "[".concat(e.join("+"), "]") : e));
			}, r.prototype.reverse = function() {
				return this.toCollection().reverse();
			}, r.prototype.mapToClass = function(r) {
				for (var o = this.db, a = this.name, i = ((this.schema.mappedClass = r).prototype instanceof mt && (r = ((e) => {
					var t = i, n = e;
					if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
					function r() {
						this.constructor = t;
					}
					function i() {
						return null !== e && e.apply(this, arguments) || this;
					}
					return B(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r()), Object.defineProperty(i.prototype, "db", {
						get: function() {
							return o;
						},
						enumerable: !1,
						configurable: !0
					}), i.prototype.table = function() {
						return a;
					}, i;
				})(r)), /* @__PURE__ */ new Set()), e = r.prototype; e; e = F(e)) Object.getOwnPropertyNames(e).forEach(function(e) {
					return i.add(e);
				});
				function t(e) {
					if (!e) return e;
					var t, n = Object.create(r.prototype);
					for (t in e) if (!i.has(t)) try {
						n[t] = e[t];
					} catch (e) {}
					return n;
				}
				return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = t, this.hook("reading", t), r;
			}, r.prototype.defineClass = function() {
				return this.mapToClass(function(e) {
					a(this, e);
				});
			}, r.prototype.add = function(t, n) {
				var r = this, e = this.schema.primKey, i = e.auto, o = e.keyPath, a = t;
				return o && i && (a = vt(o)(t)), this._trans("readwrite", function(e) {
					return r.core.mutate({
						trans: e,
						type: "add",
						keys: null != n ? [n] : null,
						values: [a]
					});
				}).then(function(e) {
					return e.numFailures ? K.reject(e.failures[0]) : e.lastResult;
				}).then(function(e) {
					if (o) try {
						b(t, o, e);
					} catch (e) {}
					return e;
				});
			}, r.prototype.upsert = function(r, i) {
				var o = this, a = this.schema.primKey.keyPath;
				return this._trans("readwrite", function(n) {
					return o.core.get({
						trans: n,
						key: r
					}).then(function(t) {
						var e = null != t ? t : {};
						return kt(e, i), a && b(e, a, r), o.core.mutate({
							trans: n,
							type: "put",
							values: [e],
							keys: [r],
							upsert: !0,
							updates: {
								keys: [r],
								changeSpecs: [i]
							}
						}).then(function(e) {
							return e.numFailures ? K.reject(e.failures[0]) : !!t;
						});
					});
				});
			}, r.prototype.update = function(e, t) {
				return "object" != typeof e || x(e) ? this.where(":id").equals(e).modify(t) : void 0 === (e = c(e, this.schema.primKey.keyPath)) ? S(new k.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
			}, r.prototype.put = function(t, n) {
				var r = this, e = this.schema.primKey, i = e.auto, o = e.keyPath, a = t;
				return o && i && (a = vt(o)(t)), this._trans("readwrite", function(e) {
					return r.core.mutate({
						trans: e,
						type: "put",
						values: [a],
						keys: null != n ? [n] : null
					});
				}).then(function(e) {
					return e.numFailures ? K.reject(e.failures[0]) : e.lastResult;
				}).then(function(e) {
					if (o) try {
						b(t, o, e);
					} catch (e) {}
					return e;
				});
			}, r.prototype.delete = function(t) {
				var n = this;
				return this._trans("readwrite", function(e) {
					return n.core.mutate({
						trans: e,
						type: "delete",
						keys: [t]
					}).then(function(e) {
						return wt(n, [t], e);
					}).then(function(e) {
						return e.numFailures ? K.reject(e.failures[0]) : void 0;
					});
				});
			}, r.prototype.clear = function() {
				var t = this;
				return this._trans("readwrite", function(e) {
					return t.core.mutate({
						trans: e,
						type: "deleteRange",
						range: yt
					}).then(function(e) {
						return wt(t, null, e);
					});
				}).then(function(e) {
					return e.numFailures ? K.reject(e.failures[0]) : void 0;
				});
			}, r.prototype.bulkGet = function(t) {
				var n = this;
				return this._trans("readonly", function(e) {
					return n.core.getMany({
						keys: t,
						trans: e
					}).then(function(e) {
						return e.map(function(e) {
							return n.hook.reading.fire(e);
						});
					});
				});
			}, r.prototype.bulkAdd = function(i, e, t) {
				var o = this, a = Array.isArray(e) ? e : void 0, u = (t = t || (a ? void 0 : e)) ? t.allKeys : void 0;
				return this._trans("readwrite", function(e) {
					var t = o.schema.primKey, n = t.auto, t = t.keyPath;
					if (t && a) throw new k.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
					if (a && a.length !== i.length) throw new k.InvalidArgument("Arguments objects and keys must have the same length");
					var r = i.length, n = t && n ? i.map(vt(t)) : i;
					return o.core.mutate({
						trans: e,
						type: "add",
						keys: a,
						values: n,
						wantResults: u
					}).then(function(e) {
						var t = e.numFailures, n = e.failures;
						if (0 === t) return u ? e.results : e.lastResult;
						throw new he("".concat(o.name, ".bulkAdd(): ").concat(t, " of ").concat(r, " operations failed"), n);
					});
				});
			}, r.prototype.bulkPut = function(i, e, t) {
				var o = this, a = Array.isArray(e) ? e : void 0, u = (t = t || (a ? void 0 : e)) ? t.allKeys : void 0;
				return this._trans("readwrite", function(e) {
					var t = o.schema.primKey, n = t.auto, t = t.keyPath;
					if (t && a) throw new k.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
					if (a && a.length !== i.length) throw new k.InvalidArgument("Arguments objects and keys must have the same length");
					var r = i.length, n = t && n ? i.map(vt(t)) : i;
					return o.core.mutate({
						trans: e,
						type: "put",
						keys: a,
						values: n,
						wantResults: u
					}).then(function(e) {
						var t = e.numFailures, n = e.failures;
						if (0 === t) return u ? e.results : e.lastResult;
						throw new he("".concat(o.name, ".bulkPut(): ").concat(t, " of ").concat(r, " operations failed"), n);
					});
				});
			}, r.prototype.bulkUpdate = function(t) {
				var h = this, n = this.core, r = t.map(function(e) {
					return e.key;
				}), i = t.map(function(e) {
					return e.changes;
				}), d = [];
				return this._trans("readwrite", function(e) {
					return n.getMany({
						trans: e,
						keys: r,
						cache: "clone"
					}).then(function(c) {
						var l = [], f = [], s = (t.forEach(function(e, t) {
							var n = e.key, r = e.changes, i = c[t];
							if (i) {
								for (var o = 0, a = Object.keys(r); o < a.length; o++) {
									var u = a[o], s = r[u];
									if (u === h.schema.primKey.keyPath) {
										if (0 !== j(s, n)) throw new k.Constraint("Cannot update primary key in bulkUpdate()");
									} else b(i, u, s);
								}
								d.push(t), l.push(n), f.push(i);
							}
						}), l.length);
						return n.mutate({
							trans: e,
							type: "put",
							keys: l,
							values: f,
							updates: {
								keys: r,
								changeSpecs: i
							}
						}).then(function(e) {
							var t = e.numFailures, n = e.failures;
							if (0 === t) return s;
							for (var r = 0, i = Object.keys(n); r < i.length; r++) {
								var o, a = i[r], u = d[Number(a)];
								null != u && (o = n[a], delete n[a], n[u] = o);
							}
							throw new he("".concat(h.name, ".bulkUpdate(): ").concat(t, " of ").concat(s, " operations failed"), n);
						});
					});
				});
			}, r.prototype.bulkDelete = function(t) {
				var r = this, i = t.length;
				return this._trans("readwrite", function(e) {
					return r.core.mutate({
						trans: e,
						type: "delete",
						keys: t
					}).then(function(e) {
						return wt(r, t, e);
					});
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (0 === t) return e.lastResult;
					throw new he("".concat(r.name, ".bulkDelete(): ").concat(t, " of ").concat(i, " operations failed"), n);
				});
			};
			var Ot = r;
			function r() {}
			function Pt(i) {
				function t(e, t) {
					if (t) {
						for (var n = arguments.length, r = new Array(n - 1); --n;) r[n - 1] = arguments[n];
						return a[e].subscribe.apply(null, r), i;
					}
					if ("string" == typeof e) return a[e];
				}
				var a = {};
				t.addEventType = u;
				for (var e = 1, n = arguments.length; e < n; ++e) u(arguments[e]);
				return t;
				function u(e, n, r) {
					var i, o;
					if ("object" != typeof e) return n = n || xe, o = {
						subscribers: [],
						fire: r = r || g,
						subscribe: function(e) {
							-1 === o.subscribers.indexOf(e) && (o.subscribers.push(e), o.fire = n(o.fire, e));
						},
						unsubscribe: function(t) {
							o.subscribers = o.subscribers.filter(function(e) {
								return e !== t;
							}), o.fire = o.subscribers.reduce(n, r);
						}
					}, a[e] = t[e] = o;
					O(i = e).forEach(function(e) {
						var t = i[e];
						if (x(t)) u(e, i[e][0], i[e][1]);
						else {
							if ("asap" !== t) throw new k.InvalidArgument("Invalid event config");
							var n = u(e, ve, function() {
								for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
								n.subscribers.forEach(function(e) {
									Q(function() {
										e.apply(null, t);
									});
								});
							});
						}
					});
				}
			}
			function Kt(e, t) {
				return U(t).from({ prototype: e }), t;
			}
			function Et(e, t) {
				return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
			}
			function St(e, t) {
				e.filter = pt(e.filter, t);
			}
			function At(e, t, n) {
				var r = e.replayFilter;
				e.replayFilter = r ? function() {
					return pt(r(), t());
				} : t, e.justLimit = n && !r;
			}
			function jt(e, t) {
				if (e.isPrimKey) return t.primaryKey;
				var n = t.getIndexByKeyPath(e.index);
				if (n) return n;
				throw new k.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
			}
			function Ct(e, t, n) {
				var r = jt(e, t.schema);
				return t.openCursor({
					trans: n,
					values: !e.keysOnly,
					reverse: "prev" === e.dir,
					unique: !!e.unique,
					query: {
						index: r,
						range: e.range
					}
				});
			}
			function Tt(e, o, t, n) {
				var a, r, u = e.replayFilter ? pt(e.filter, e.replayFilter()) : e.filter;
				return e.or ? (a = {}, r = function(e, t, n) {
					var r, i;
					u && !u(t, n, function(e) {
						return t.stop(e);
					}, function(e) {
						return t.fail(e);
					}) || ("[object ArrayBuffer]" === (i = "" + (r = t.primaryKey)) && (i = "" + new Uint8Array(r)), m(a, i)) || (a[i] = !0, o(e, t, n));
				}, Promise.all([e.or._iterate(r, t), It(Ct(e, n, t), e.algorithm, r, !e.keysOnly && e.valueMapper)])) : It(Ct(e, n, t), pt(e.algorithm, u), o, !e.keysOnly && e.valueMapper);
			}
			function It(e, r, i, o) {
				var a = E(o ? function(e, t, n) {
					return i(o(e), t, n);
				} : i);
				return e.then(function(n) {
					if (n) return n.start(function() {
						var t = function() {
							return n.continue();
						};
						r && !r(n, function(e) {
							return t = e;
						}, function(e) {
							n.stop(e), t = g;
						}, function(e) {
							n.fail(e), t = g;
						}) || a(n.value, n, function(e) {
							return t = e;
						}), t();
					});
				});
			}
			i.prototype._read = function(e, t) {
				var n = this._ctx;
				return n.error ? n.table._trans(null, S.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
			}, i.prototype._write = function(e) {
				var t = this._ctx;
				return t.error ? t.table._trans(null, S.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
			}, i.prototype._addAlgorithm = function(e) {
				var t = this._ctx;
				t.algorithm = pt(t.algorithm, e);
			}, i.prototype._iterate = function(e, t) {
				return Tt(this._ctx, e, t, this._ctx.table.core);
			}, i.prototype.clone = function(e) {
				var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
				return e && a(n, e), t._ctx = n, t;
			}, i.prototype.raw = function() {
				return this._ctx.valueMapper = null, this;
			}, i.prototype.each = function(t) {
				var n = this._ctx;
				return this._read(function(e) {
					return Tt(n, t, e, n.table.core);
				});
			}, i.prototype.count = function(e) {
				var i = this;
				return this._read(function(e) {
					var t, n = i._ctx, r = n.table.core;
					return Et(n, !0) ? r.count({
						trans: e,
						query: {
							index: jt(n, r.schema),
							range: n.range
						}
					}).then(function(e) {
						return Math.min(e, n.limit);
					}) : (t = 0, Tt(n, function() {
						return ++t, !1;
					}, e, r).then(function() {
						return t;
					}));
				}).then(e);
			}, i.prototype.sortBy = function(e, t) {
				var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
				function o(e, t) {
					return t ? o(e[n[t]], t - 1) : e[r];
				}
				var a = "next" === this._ctx.dir ? 1 : -1;
				function u(e, t) {
					return j(o(e, i), o(t, i)) * a;
				}
				return this.toArray(function(e) {
					return e.slice().sort(u);
				}).then(t);
			}, i.prototype.toArray = function(e) {
				var o = this;
				return this._read(function(e) {
					var t, n, r, i = o._ctx;
					return Et(i, !0) && 0 < i.limit ? (t = i.valueMapper, n = jt(i, i.table.core.schema), i.table.core.query({
						trans: e,
						limit: i.limit,
						values: !0,
						direction: "prev" === i.dir ? "prev" : void 0,
						query: {
							index: n,
							range: i.range
						}
					}).then(function(e) {
						e = e.result;
						return t ? e.map(t) : e;
					})) : (r = [], Tt(i, function(e) {
						return r.push(e);
					}, e, i.table.core).then(function() {
						return r;
					}));
				}, e);
			}, i.prototype.offset = function(t) {
				var e = this._ctx;
				return t <= 0 || (e.offset += t, Et(e) ? At(e, function() {
					var n = t;
					return function(e, t) {
						return 0 === n || (1 === n ? --n : t(function() {
							e.advance(n), n = 0;
						}), !1);
					};
				}) : At(e, function() {
					var e = t;
					return function() {
						return --e < 0;
					};
				})), this;
			}, i.prototype.limit = function(e) {
				return this._ctx.limit = Math.min(this._ctx.limit, e), At(this._ctx, function() {
					var r = e;
					return function(e, t, n) {
						return --r <= 0 && t(n), 0 <= r;
					};
				}, !0), this;
			}, i.prototype.until = function(r, i) {
				return St(this._ctx, function(e, t, n) {
					return !r(e.value) || (t(n), i);
				}), this;
			}, i.prototype.first = function(e) {
				return this.limit(1).toArray(function(e) {
					return e[0];
				}).then(e);
			}, i.prototype.last = function(e) {
				return this.reverse().first(e);
			}, i.prototype.filter = function(t) {
				var e;
				return St(this._ctx, function(e) {
					return t(e.value);
				}), (e = this._ctx).isMatch = pt(e.isMatch, t), this;
			}, i.prototype.and = function(e) {
				return this.filter(e);
			}, i.prototype.or = function(e) {
				return new this.db.WhereClause(this._ctx.table, e, this);
			}, i.prototype.reverse = function() {
				return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
			}, i.prototype.desc = function() {
				return this.reverse();
			}, i.prototype.eachKey = function(n) {
				var e = this._ctx;
				return e.keysOnly = !e.isMatch, this.each(function(e, t) {
					n(t.key, t);
				});
			}, i.prototype.eachUniqueKey = function(e) {
				return this._ctx.unique = "unique", this.eachKey(e);
			}, i.prototype.eachPrimaryKey = function(n) {
				var e = this._ctx;
				return e.keysOnly = !e.isMatch, this.each(function(e, t) {
					n(t.primaryKey, t);
				});
			}, i.prototype.keys = function(e) {
				var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
				return this.each(function(e, t) {
					n.push(t.key);
				}).then(function() {
					return n;
				}).then(e);
			}, i.prototype.primaryKeys = function(e) {
				var n = this._ctx;
				if (Et(n, !0) && 0 < n.limit) return this._read(function(e) {
					var t = jt(n, n.table.core.schema);
					return n.table.core.query({
						trans: e,
						values: !1,
						limit: n.limit,
						direction: "prev" === n.dir ? "prev" : void 0,
						query: {
							index: t,
							range: n.range
						}
					});
				}).then(function(e) {
					return e.result;
				}).then(e);
				n.keysOnly = !n.isMatch;
				var r = [];
				return this.each(function(e, t) {
					r.push(t.primaryKey);
				}).then(function() {
					return r;
				}).then(e);
			}, i.prototype.uniqueKeys = function(e) {
				return this._ctx.unique = "unique", this.keys(e);
			}, i.prototype.firstKey = function(e) {
				return this.limit(1).keys(function(e) {
					return e[0];
				}).then(e);
			}, i.prototype.lastKey = function(e) {
				return this.reverse().firstKey(e);
			}, i.prototype.distinct = function() {
				var n, e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
				return e && e.multi && (n = {}, St(this._ctx, function(e) {
					var e = e.primaryKey.toString(), t = m(n, e);
					return n[e] = !0, !t;
				})), this;
			}, i.prototype.modify = function(x) {
				var n = this, k = this._ctx;
				return this._write(function(p) {
					function y(e, t) {
						var n = t.failures;
						u += e - t.numFailures;
						for (var r = 0, i = O(n); r < i.length; r++) {
							var o = i[r];
							a.push(n[o]);
						}
					}
					var v = "function" == typeof x ? x : function(e) {
						return kt(e, x);
					}, m = k.table.core, e = m.schema.primaryKey, b = e.outbound, g = e.extractKey, w = 200, e = n.db._options.modifyChunkSize, a = (e && (w = "object" == typeof e ? e[m.name] || e["*"] || 200 : e), []), u = 0, t = [], _ = x === Dt;
					return n.clone().primaryKeys().then(function(f) {
						function h(s) {
							var c = Math.min(w, f.length - s), l = f.slice(s, s + c);
							return (_ ? Promise.resolve([]) : m.getMany({
								trans: p,
								keys: l,
								cache: "immutable"
							})).then(function(e) {
								var n = [], t = [], r = b ? [] : null, i = _ ? l : [];
								if (!_) for (var o = 0; o < c; ++o) {
									var a = e[o], u = {
										value: ee(a),
										primKey: f[s + o]
									};
									!1 !== v.call(u, u.value, u) && (null == u.value ? i.push(f[s + o]) : b || 0 === j(g(a), g(u.value)) ? (t.push(u.value), b && r.push(f[s + o])) : (i.push(f[s + o]), n.push(u.value)));
								}
								return Promise.resolve(0 < n.length && m.mutate({
									trans: p,
									type: "add",
									values: n
								}).then(function(e) {
									for (var t in e.failures) i.splice(parseInt(t), 1);
									y(n.length, e);
								})).then(function() {
									return (0 < t.length || d && "object" == typeof x) && m.mutate({
										trans: p,
										type: "put",
										keys: r,
										values: t,
										criteria: d,
										changeSpec: "function" != typeof x && x,
										isAdditionalChunk: 0 < s
									}).then(function(e) {
										return y(t.length, e);
									});
								}).then(function() {
									return (0 < i.length || d && _) && m.mutate({
										trans: p,
										type: "delete",
										keys: i,
										criteria: d,
										isAdditionalChunk: 0 < s
									}).then(function(e) {
										return wt(k.table, i, e);
									}).then(function(e) {
										return y(i.length, e);
									});
								}).then(function() {
									return f.length > s + c && h(s + w);
								});
							});
						}
						var d = Et(k) && k.limit === 1 / 0 && ("function" != typeof x || _) && {
							index: k.index,
							range: k.range
						};
						return h(0).then(function() {
							if (0 < a.length) throw new fe("Error modifying one or more objects", a, u, t);
							return f.length;
						});
					});
				});
			}, i.prototype.delete = function() {
				var i = this._ctx, n = i.range;
				return !Et(i) || i.table.schema.yProps || !i.isPrimKey && 3 !== n.type ? this.modify(Dt) : this._write(function(e) {
					var t = i.table.core.schema.primaryKey, r = n;
					return i.table.core.count({
						trans: e,
						query: {
							index: t,
							range: r
						}
					}).then(function(n) {
						return i.table.core.mutate({
							trans: e,
							type: "deleteRange",
							range: r
						}).then(function(e) {
							var t = e.failures, e = e.numFailures;
							if (e) throw new fe("Could not delete some values", Object.keys(t).map(function(e) {
								return t[e];
							}), n - e);
							return n - e;
						});
					});
				});
			};
			var qt = i;
			function i() {}
			var Dt = function(e, t) {
				return t.value = null;
			};
			function Bt(e, t) {
				return e < t ? -1 : e === t ? 0 : 1;
			}
			function Rt(e, t) {
				return t < e ? -1 : e === t ? 0 : 1;
			}
			function C(e, t, n) {
				e = e instanceof Lt ? new e.Collection(e) : e;
				return e._ctx.error = new (n || TypeError)(t), e;
			}
			function Ft(e) {
				return new e.Collection(e, function() {
					return Mt("");
				}).limit(0);
			}
			function Nt(e, s, n, r) {
				var i, c, l, f, h, d, p, y = n.length;
				if (!n.every(function(e) {
					return "string" == typeof e;
				})) return C(e, lt);
				function t(e) {
					i = "next" === e ? function(e) {
						return e.toUpperCase();
					} : function(e) {
						return e.toLowerCase();
					}, c = "next" === e ? function(e) {
						return e.toLowerCase();
					} : function(e) {
						return e.toUpperCase();
					}, l = "next" === e ? Bt : Rt;
					var t = n.map(function(e) {
						return {
							lower: c(e),
							upper: i(e)
						};
					}).sort(function(e, t) {
						return l(e.lower, t.lower);
					});
					f = t.map(function(e) {
						return e.upper;
					}), h = t.map(function(e) {
						return e.lower;
					}), p = "next" === (d = e) ? "" : r;
				}
				t("next");
				var e = new e.Collection(e, function() {
					return T(f[0], h[y - 1] + r);
				}), v = (e._ondirectionchange = function(e) {
					t(e);
				}, 0);
				return e._addAlgorithm(function(e, t, n) {
					var r = e.key;
					if ("string" == typeof r) {
						var i = c(r);
						if (s(i, h, v)) return !0;
						for (var o = null, a = v; a < y; ++a) {
							var u = ((e, t, n, r, i, o) => {
								for (var a = Math.min(e.length, r.length), u = -1, s = 0; s < a; ++s) {
									var c = t[s];
									if (c !== r[s]) return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : 0 <= u ? e.substr(0, u) + t[u] + n.substr(u + 1) : null;
									i(e[s], c) < 0 && (u = s);
								}
								return a < r.length && "next" === o ? e + n.substr(e.length) : a < e.length && "prev" === o ? e.substr(0, n.length) : u < 0 ? null : e.substr(0, u) + r[u] + n.substr(u + 1);
							})(r, i, f[a], h[a], l, d);
							null === u && null === o ? v = a + 1 : (null === o || 0 < l(o, u)) && (o = u);
						}
						t(null !== o ? function() {
							e.continue(o + p);
						} : n);
					}
					return !1;
				}), e;
			}
			function T(e, t, n, r) {
				return {
					type: 2,
					lower: e,
					upper: t,
					lowerOpen: n,
					upperOpen: r
				};
			}
			function Mt(e) {
				return {
					type: 1,
					lower: e,
					upper: e
				};
			}
			Object.defineProperty(d.prototype, "Collection", {
				get: function() {
					return this._ctx.table.db.Collection;
				},
				enumerable: !1,
				configurable: !0
			}), d.prototype.between = function(e, t, n, r) {
				n = !1 !== n, r = !0 === r;
				try {
					return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (n || r) && (!n || !r) ? Ft(this) : new this.Collection(this, function() {
						return T(e, t, !n, !r);
					});
				} catch (e) {
					return C(this, A);
				}
			}, d.prototype.equals = function(e) {
				return null == e ? C(this, A) : new this.Collection(this, function() {
					return Mt(e);
				});
			}, d.prototype.above = function(e) {
				return null == e ? C(this, A) : new this.Collection(this, function() {
					return T(e, void 0, !0);
				});
			}, d.prototype.aboveOrEqual = function(e) {
				return null == e ? C(this, A) : new this.Collection(this, function() {
					return T(e, void 0, !1);
				});
			}, d.prototype.below = function(e) {
				return null == e ? C(this, A) : new this.Collection(this, function() {
					return T(void 0, e, !1, !0);
				});
			}, d.prototype.belowOrEqual = function(e) {
				return null == e ? C(this, A) : new this.Collection(this, function() {
					return T(void 0, e);
				});
			}, d.prototype.startsWith = function(e) {
				return "string" != typeof e ? C(this, lt) : this.between(e, e + ct, !0, !0);
			}, d.prototype.startsWithIgnoreCase = function(e) {
				return "" === e ? this.startsWith(e) : Nt(this, function(e, t) {
					return 0 === e.indexOf(t[0]);
				}, [e], ct);
			}, d.prototype.equalsIgnoreCase = function(e) {
				return Nt(this, function(e, t) {
					return e === t[0];
				}, [e], "");
			}, d.prototype.anyOfIgnoreCase = function() {
				var e = n.apply(ae, arguments);
				return 0 === e.length ? Ft(this) : Nt(this, function(e, t) {
					return -1 !== t.indexOf(e);
				}, e, "");
			}, d.prototype.startsWithAnyOfIgnoreCase = function() {
				var e = n.apply(ae, arguments);
				return 0 === e.length ? Ft(this) : Nt(this, function(t, e) {
					return e.some(function(e) {
						return 0 === t.indexOf(e);
					});
				}, e, ct);
			}, d.prototype.anyOf = function() {
				var e, i, t = this, o = n.apply(ae, arguments), a = this._cmp;
				try {
					o.sort(a);
				} catch (e) {
					return C(this, A);
				}
				return 0 === o.length ? Ft(this) : ((e = new this.Collection(this, function() {
					return T(o[0], o[o.length - 1]);
				}))._ondirectionchange = function(e) {
					a = "next" === e ? t._ascending : t._descending, o.sort(a);
				}, i = 0, e._addAlgorithm(function(e, t, n) {
					for (var r = e.key; 0 < a(r, o[i]);) if (++i === o.length) return t(n), !1;
					return 0 === a(r, o[i]) || (t(function() {
						e.continue(o[i]);
					}), !1);
				}), e);
			}, d.prototype.notEqual = function(e) {
				return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], {
					includeLowers: !1,
					includeUppers: !1
				});
			}, d.prototype.noneOf = function() {
				var e = n.apply(ae, arguments);
				if (0 === e.length) return new this.Collection(this);
				try {
					e.sort(this._ascending);
				} catch (e) {
					return C(this, A);
				}
				var t = e.reduce(function(e, t) {
					return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
				}, null);
				return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
					includeLowers: !1,
					includeUppers: !1
				});
			}, d.prototype.inAnyRange = function(e, t) {
				var o = this, a = this._cmp, u = this._ascending, n = this._descending, s = this._min, c = this._max;
				if (0 === e.length) return Ft(this);
				if (!e.every(function(e) {
					return void 0 !== e[0] && void 0 !== e[1] && u(e[0], e[1]) <= 0;
				})) return C(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", k.InvalidArgument);
				var r = !t || !1 !== t.includeLowers, i = t && !0 === t.includeUppers;
				var l, f = u;
				function h(e, t) {
					return f(e[0], t[0]);
				}
				try {
					(l = e.reduce(function(e, t) {
						for (var n = 0, r = e.length; n < r; ++n) {
							var i = e[n];
							if (a(t[0], i[1]) < 0 && 0 < a(t[1], i[0])) {
								i[0] = s(i[0], t[0]), i[1] = c(i[1], t[1]);
								break;
							}
						}
						return n === r && e.push(t), e;
					}, [])).sort(h);
				} catch (e) {
					return C(this, A);
				}
				var d = 0, p = i ? function(e) {
					return 0 < u(e, l[d][1]);
				} : function(e) {
					return 0 <= u(e, l[d][1]);
				}, y = r ? function(e) {
					return 0 < n(e, l[d][0]);
				} : function(e) {
					return 0 <= n(e, l[d][0]);
				};
				var v = p, t = new this.Collection(this, function() {
					return T(l[0][0], l[l.length - 1][1], !r, !i);
				});
				return t._ondirectionchange = function(e) {
					f = "next" === e ? (v = p, u) : (v = y, n), l.sort(h);
				}, t._addAlgorithm(function(e, t, n) {
					for (var r, i = e.key; v(i);) if (++d === l.length) return t(n), !1;
					return !p(r = i) && !y(r) || (0 === o._cmp(i, l[d][1]) || 0 === o._cmp(i, l[d][0]) || t(function() {
						f === u ? e.continue(l[d][0]) : e.continue(l[d][1]);
					}), !1);
				}), t;
			}, d.prototype.startsWithAnyOf = function() {
				var e = n.apply(ae, arguments);
				return e.every(function(e) {
					return "string" == typeof e;
				}) ? 0 === e.length ? Ft(this) : this.inAnyRange(e.map(function(e) {
					return [e, e + ct];
				})) : C(this, "startsWithAnyOf() only works with strings");
			};
			var Lt = d;
			function d() {}
			function I(t) {
				return E(function(e) {
					return Ut(e), t(e.target.error), !1;
				});
			}
			function Ut(e) {
				e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
			}
			var zt = "storagemutated", Vt = "x-storagemutated-1", Wt = Pt(null, zt), Yt = (p.prototype._lock = function() {
				return $(!P.global), ++this._reculock, 1 !== this._reculock || P.global || (P.lockOwnerFor = this), this;
			}, p.prototype._unlock = function() {
				if ($(!P.global), 0 == --this._reculock) for (P.global || (P.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
					var e = this._blockedFuncs.shift();
					try {
						at(e[1], e[0]);
					} catch (e) {}
				}
				return this;
			}, p.prototype._locked = function() {
				return this._reculock && P.lockOwnerFor !== this;
			}, p.prototype.create = function(t) {
				var n = this;
				if (this.mode) {
					var e = this.db.idbdb, r = this.db._state.dbOpenError;
					if ($(!this.idbtrans), !t && !e) switch (r && r.name) {
						case "DatabaseClosedError": throw new k.DatabaseClosed(r);
						case "MissingAPIError": throw new k.MissingAPI(r.message, r);
						default: throw new k.OpenFailed(r);
					}
					if (!this.active) throw new k.TransactionInactive();
					$(null === this._completion._state), (t = this.idbtrans = t || (this.db.core || e).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = E(function(e) {
						Ut(e), n._reject(t.error);
					}), t.onabort = E(function(e) {
						Ut(e), n.active && n._reject(new k.Abort(t.error)), n.active = !1, n.on("abort").fire(e);
					}), t.oncomplete = E(function() {
						n.active = !1, n._resolve(), "mutatedParts" in t && Wt.storagemutated.fire(t.mutatedParts);
					});
				}
				return this;
			}, p.prototype._promise = function(n, r, i) {
				var e, o = this;
				return "readwrite" === n && "readwrite" !== this.mode ? S(new k.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new K(function(e, t) {
					o._blockedFuncs.push([function() {
						o._promise(n, r, i).then(e, t);
					}, P]);
				}) : i ? v(function() {
					var e = new K(function(e, t) {
						o._lock();
						var n = r(e, t, o);
						n && n.then && n.then(e, t);
					});
					return e.finally(function() {
						return o._unlock();
					}), e._lib = !0, e;
				}) : ((e = new K(function(e, t) {
					var n = r(e, t, o);
					n && n.then && n.then(e, t);
				}))._lib = !0, e) : S(new k.TransactionInactive());
			}, p.prototype._root = function() {
				return this.parent ? this.parent._root() : this;
			}, p.prototype.waitFor = function(e) {
				var t, r = this._root(), i = K.resolve(e), o = (r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
					return i;
				}) : (r._waitingFor = i, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function e() {
					for (++r._spinCount; r._waitingQueue.length;) r._waitingQueue.shift()();
					r._waitingFor && (t.get(-1 / 0).onsuccess = e);
				}()), r._waitingFor);
				return new K(function(t, n) {
					i.then(function(e) {
						return r._waitingQueue.push(E(t.bind(null, e)));
					}, function(e) {
						return r._waitingQueue.push(E(n.bind(null, e)));
					}).finally(function() {
						r._waitingFor === o && (r._waitingFor = null);
					});
				});
			}, p.prototype.abort = function() {
				this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new k.Abort()));
			}, p.prototype.table = function(e) {
				var t = this._memoizedTables || (this._memoizedTables = {});
				if (m(t, e)) return t[e];
				var n = this.schema[e];
				if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
				throw new k.NotFound("Table " + e + " not part of transaction");
			}, p);
			function p() {}
			function $t(e, t, n, r, i, o, a, u) {
				return {
					name: e,
					keyPath: t,
					unique: n,
					multi: r,
					auto: i,
					compound: o,
					src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Qt(t),
					type: u
				};
			}
			function Qt(e) {
				return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
			}
			function Gt(e, t, n) {
				return {
					name: e,
					primKey: t,
					indexes: n,
					mappedClass: null,
					idxByName: (r = function(e) {
						return [e.name, e];
					}, n.reduce(function(e, t, n) {
						t = r(t, n);
						return t && (e[t[0]] = t[1]), e;
					}, {}))
				};
				var r;
			}
			var Xt = function(e) {
				try {
					return e.only([[]]), Xt = function() {
						return [[]];
					}, [[]];
				} catch (e) {
					return Xt = function() {
						return ct;
					}, ct;
				}
			};
			function Ht(t) {
				return null == t ? function() {} : "string" == typeof t ? 1 === (n = t).split(".").length ? function(e) {
					return e[n];
				} : function(e) {
					return c(e, n);
				} : function(e) {
					return c(e, t);
				};
				var n;
			}
			function Jt(e) {
				return [].slice.call(e);
			}
			var Zt = 0;
			function en(e) {
				return null == e ? ":id" : "string" == typeof e ? e : "[".concat(e.join("+"), "]");
			}
			function tn(e, i, t) {
				function _(e) {
					if (3 === e.type) return null;
					if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
					var t = e.lower, n = e.upper, r = e.lowerOpen, e = e.upperOpen;
					return void 0 === t ? void 0 === n ? null : i.upperBound(n, !!e) : void 0 === n ? i.lowerBound(t, !!r) : i.bound(t, n, !!r, !!e);
				}
				function n(e) {
					var p, y, w = e.name;
					return {
						name: w,
						schema: e,
						mutate: function(e) {
							var y = e.trans, v = e.type, m = e.keys, b = e.values, g = e.range;
							return new Promise(function(t, e) {
								t = E(t);
								var n = y.objectStore(w), r = null == n.keyPath, i = "put" === v || "add" === v;
								if (!i && "delete" !== v && "deleteRange" !== v) throw new Error("Invalid operation type: " + v);
								var o, a = (m || b || { length: 1 }).length;
								if (m && b && m.length !== b.length) throw new Error("Given keys array must have same length as given values array.");
								if (0 === a) return t({
									numFailures: 0,
									failures: {},
									results: [],
									lastResult: void 0
								});
								function u(e) {
									++l, Ut(e);
								}
								var s = [], c = [], l = 0;
								if ("deleteRange" === v) {
									if (4 === g.type) return t({
										numFailures: l,
										failures: c,
										results: [],
										lastResult: void 0
									});
									3 === g.type ? s.push(o = n.clear()) : s.push(o = n.delete(_(g)));
								} else {
									var r = i ? r ? [b, m] : [b, null] : [m, null], f = r[0], h = r[1];
									if (i) for (var d = 0; d < a; ++d) s.push(o = h && void 0 !== h[d] ? n[v](f[d], h[d]) : n[v](f[d])), o.onerror = u;
									else for (d = 0; d < a; ++d) s.push(o = n[v](f[d])), o.onerror = u;
								}
								function p(e) {
									e = e.target.result, s.forEach(function(e, t) {
										return null != e.error && (c[t] = e.error);
									}), t({
										numFailures: l,
										failures: c,
										results: "delete" === v ? m : s.map(function(e) {
											return e.result;
										}),
										lastResult: e
									});
								}
								o.onerror = function(e) {
									u(e), p(e);
								}, o.onsuccess = p;
							});
						},
						getMany: function(e) {
							var f = e.trans, h = e.keys;
							return new Promise(function(t, e) {
								t = E(t);
								for (var n, r = f.objectStore(w), i = h.length, o = new Array(i), a = 0, u = 0, s = function(e) {
									e = e.target;
									o[e._pos] = e.result, ++u === a && t(o);
								}, c = I(e), l = 0; l < i; ++l) null != h[l] && ((n = r.get(h[l]))._pos = l, n.onsuccess = s, n.onerror = c, ++a);
								0 === a && t(o);
							});
						},
						get: function(e) {
							var r = e.trans, i = e.key;
							return new Promise(function(t, e) {
								t = E(t);
								var n = r.objectStore(w).get(i);
								n.onsuccess = function(e) {
									return t(e.target.result);
								}, n.onerror = I(e);
							});
						},
						query: (p = a, y = u, function(d) {
							return new Promise(function(t, e) {
								t = E(t);
								var n, r, i, o, a = d.trans, u = d.values, s = d.limit, c = d.query, l = null != (l = d.direction) ? l : "next", f = s === 1 / 0 ? void 0 : s, h = c.index, c = c.range, a = a.objectStore(w), a = h.isPrimaryKey ? a : a.index(h.name), h = _(c);
								if (0 === s) return t({ result: [] });
								y ? (c = {
									query: h,
									count: f,
									direction: l
								}, (n = u ? a.getAll(c) : a.getAllKeys(c)).onsuccess = function(e) {
									return t({ result: e.target.result });
								}, n.onerror = I(e)) : p && "next" === l ? ((n = u ? a.getAll(h, f) : a.getAllKeys(h, f)).onsuccess = function(e) {
									return t({ result: e.target.result });
								}, n.onerror = I(e)) : (r = 0, i = !u && "openKeyCursor" in a ? a.openKeyCursor(h, l) : a.openCursor(h, l), o = [], i.onsuccess = function() {
									var e = i.result;
									return !e || (o.push(u ? e.value : e.primaryKey), ++r === s) ? t({ result: o }) : void e.continue();
								}, i.onerror = I(e));
							});
						}),
						openCursor: function(e) {
							var c = e.trans, o = e.values, a = e.query, u = e.reverse, l = e.unique;
							return new Promise(function(t, n) {
								t = E(t);
								var e = a.index, r = a.range, i = c.objectStore(w), i = e.isPrimaryKey ? i : i.index(e.name), e = u ? l ? "prevunique" : "prev" : l ? "nextunique" : "next", s = !o && "openKeyCursor" in i ? i.openKeyCursor(_(r), e) : i.openCursor(_(r), e);
								s.onerror = I(n), s.onsuccess = E(function(e) {
									var r, i, o, a, u = s.result;
									u ? (u.___id = ++Zt, u.done = !1, r = u.continue.bind(u), i = (i = u.continuePrimaryKey) && i.bind(u), o = u.advance.bind(u), a = function() {
										throw new Error("Cursor not stopped");
									}, u.trans = c, u.stop = u.continue = u.continuePrimaryKey = u.advance = function() {
										throw new Error("Cursor not started");
									}, u.fail = E(n), u.next = function() {
										var e = this, t = 1;
										return this.start(function() {
											return t-- ? e.continue() : e.stop();
										}).then(function() {
											return e;
										});
									}, u.start = function(e) {
										function t() {
											if (s.result) try {
												e();
											} catch (e) {
												u.fail(e);
											}
											else u.done = !0, u.start = function() {
												throw new Error("Cursor behind last entry");
											}, u.stop();
										}
										var n = new Promise(function(t, e) {
											t = E(t), s.onerror = I(e), u.fail = e, u.stop = function(e) {
												u.stop = u.continue = u.continuePrimaryKey = u.advance = a, t(e);
											};
										});
										return s.onsuccess = E(function(e) {
											s.onsuccess = t, t();
										}), u.continue = r, u.continuePrimaryKey = i, u.advance = o, t(), n;
									}, t(u)) : t(null);
								}, n);
							});
						},
						count: function(e) {
							var t = e.query, i = e.trans, o = t.index, a = t.range;
							return new Promise(function(t, e) {
								var n = i.objectStore(w), n = o.isPrimaryKey ? n : n.index(o.name), r = _(a), r = r ? n.count(r) : n.count();
								r.onsuccess = E(function(e) {
									return t(e.target.result);
								}), r.onerror = I(e);
							});
						}
					};
				}
				r = t, o = Jt((t = e).objectStoreNames), s = 0 < o.length ? r.objectStore(o[0]) : {};
				var r, t = {
					schema: {
						name: t.name,
						tables: o.map(function(e) {
							return r.objectStore(e);
						}).map(function(t) {
							var e = t.keyPath, n = t.autoIncrement, r = x(e), i = {}, r = {
								name: t.name,
								primaryKey: {
									name: null,
									isPrimaryKey: !0,
									outbound: null == e,
									compound: r,
									keyPath: e,
									autoIncrement: n,
									unique: !0,
									extractKey: Ht(e)
								},
								indexes: Jt(t.indexNames).map(function(e) {
									return t.index(e);
								}).map(function(e) {
									var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
										name: t,
										compound: x(e),
										keyPath: e,
										unique: n,
										multiEntry: r,
										extractKey: Ht(e)
									};
									return i[en(e)] = t;
								}),
								getIndexByKeyPath: function(e) {
									return i[en(e)];
								}
							};
							return i[":id"] = r.primaryKey, null != e && (i[en(e)] = r.primaryKey), r;
						})
					},
					hasGetAll: 0 < o.length && "getAll" in s && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
					hasIdb3Features: "getAllRecords" in s
				}, o = t.schema, a = t.hasGetAll, u = t.hasIdb3Features, s = o.tables.map(n), c = {};
				return s.forEach(function(e) {
					return c[e.name] = e;
				}), {
					stack: "dbcore",
					transaction: e.transaction.bind(e),
					table: function(e) {
						if (c[e]) return c[e];
						throw new Error("Table '".concat(e, "' not found"));
					},
					MIN_KEY: -1 / 0,
					MAX_KEY: Xt(i),
					schema: o
				};
			}
			function nn(e, t, n, r) {
				n = n.IDBKeyRange;
				return t = tn(t, n, r), { dbcore: e.dbcore.reduce(function(e, t) {
					t = t.create;
					return _(_({}, e), t(e));
				}, t) };
			}
			function rn(n, e) {
				var t = e.db, t = nn(n._middlewares, t, n._deps, e);
				n.core = t.dbcore, n.tables.forEach(function(e) {
					var t = e.name;
					n.core.schema.tables.some(function(e) {
						return e.name === t;
					}) && (e.core = n.core.table(t), n[t] instanceof n.Table) && (n[t].core = e.core);
				});
			}
			function on(i, e, t, o) {
				t.forEach(function(n) {
					var r = o[n];
					e.forEach(function(e) {
						var t = function e(t, n) {
							return z(t, n) || (t = F(t)) && e(t, n);
						}(e, n);
						(!t || "value" in t && void 0 === t.value) && (e === i.Transaction.prototype || e instanceof i.Transaction ? u(e, n, {
							get: function() {
								return this.table(n);
							},
							set: function(e) {
								L(this, n, {
									value: e,
									writable: !0,
									configurable: !0,
									enumerable: !0
								});
							}
						}) : e[n] = new i.Table(n, r));
					});
				});
			}
			function an(n, e) {
				e.forEach(function(e) {
					for (var t in e) e[t] instanceof n.Table && delete e[t];
				});
			}
			function un(e, t) {
				return e._cfg.version - t._cfg.version;
			}
			function sn(n, r, i, e) {
				var o = n._dbSchema, a = (i.objectStoreNames.contains("$meta") && !o.$meta && (o.$meta = Gt("$meta", vn("")[0], []), n._storeNames.push("$meta")), n._createTransaction("readwrite", n._storeNames, o)), u = (a.create(i), a._completion.catch(e), a._reject.bind(a)), s = P.transless || P;
				v(function() {
					if (P.trans = a, P.transless = s, 0 !== r) return rn(n, i), t = r, ((e = a).storeNames.includes("$meta") ? e.table("$meta").get("version").then(function(e) {
						return null != e ? e : t;
					}) : K.resolve(t)).then(function(e) {
						var s = n, c = e, l = a, f = i, t = [], e = s._versions, h = s._dbSchema = pn(0, s.idbdb, f);
						return 0 === (e = e.filter(function(e) {
							return e._cfg.version >= c;
						})).length ? K.resolve() : (e.forEach(function(u) {
							t.push(function() {
								var t, n, r, i = h, e = u._cfg.dbschema, o = (yn(s, i, f), yn(s, e, f), h = s._dbSchema = e, ln(i, e)), a = (o.add.forEach(function(e) {
									fn(f, e[0], e[1].primKey, e[1].indexes);
								}), o.change.forEach(function(e) {
									if (e.recreate) throw new k.Upgrade("Not yet support for changing primary key");
									var t = f.objectStore(e.name);
									e.add.forEach(function(e) {
										return dn(t, e);
									}), e.change.forEach(function(e) {
										t.deleteIndex(e.name), dn(t, e);
									}), e.del.forEach(function(e) {
										return t.deleteIndex(e);
									});
								}), u._cfg.contentUpgrade);
								if (a && u._cfg.version > c) return rn(s, f), l._memoizedTables = {}, t = G(e), o.del.forEach(function(e) {
									t[e] = i[e];
								}), an(s, [s.Transaction.prototype]), on(s, [s.Transaction.prototype], O(t), t), l.schema = t, (n = ue(a)) && nt(), e = K.follow(function() {
									var e;
									(r = a(l)) && n && (e = w.bind(null, null), r.then(e, e));
								}), r && "function" == typeof r.then ? K.resolve(r) : e.then(function() {
									return r;
								});
							}), t.push(function(e) {
								var t = u._cfg.dbschema, n = e;
								[].slice.call(n.db.objectStoreNames).forEach(function(e) {
									return null == t[e] && n.db.deleteObjectStore(e);
								}), an(s, [s.Transaction.prototype]), on(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
							}), t.push(function(e) {
								s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === u._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(e) {
									return "$meta" !== e;
								})) : e.objectStore("$meta").put(u._cfg.version, "version"));
							});
						}), function e() {
							return t.length ? K.resolve(t.shift()(l.idbtrans)).then(e) : K.resolve();
						}().then(function() {
							hn(h, f);
						}));
					}).catch(u);
					var e, t;
					O(o).forEach(function(e) {
						fn(i, e, o[e].primKey, o[e].indexes);
					}), rn(n, i), K.follow(function() {
						return n.on.populate.fire(a);
					}).catch(u);
				});
			}
			function cn(e, r) {
				hn(e._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
				var t = pn(0, e.idbdb, r);
				yn(e, e._dbSchema, r);
				for (var n = 0, i = ln(t, e._dbSchema).change; n < i.length; n++) {
					var o = ((t) => {
						if (t.change.length || t.recreate) return console.warn("Unable to patch indexes of table ".concat(t.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
						var n = r.objectStore(t.name);
						t.add.forEach(function(e) {
							l && console.debug("Dexie upgrade patch: Creating missing index ".concat(t.name, ".").concat(e.src)), dn(n, e);
						});
					})(i[n]);
					if ("object" == typeof o) return o.value;
				}
			}
			function ln(e, t) {
				var n, r = {
					del: [],
					add: [],
					change: []
				};
				for (n in e) t[n] || r.del.push(n);
				for (n in t) {
					var i = e[n], o = t[n];
					if (i) {
						var a = {
							name: n,
							def: o,
							recreate: !1,
							del: [],
							add: [],
							change: []
						};
						if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) a.recreate = !0, r.change.push(a);
						else {
							var u = i.idxByName, s = o.idxByName, c = void 0;
							for (c in u) s[c] || a.del.push(c);
							for (c in s) {
								var l = u[c], f = s[c];
								l ? l.src !== f.src && a.change.push(f) : a.add.push(f);
							}
							(0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
						}
					} else r.add.push([n, o]);
				}
				return r;
			}
			function fn(e, t, n, r) {
				var i = e.db.createObjectStore(t, n.keyPath ? {
					keyPath: n.keyPath,
					autoIncrement: n.auto
				} : { autoIncrement: n.auto });
				r.forEach(function(e) {
					return dn(i, e);
				});
			}
			function hn(t, n) {
				O(t).forEach(function(e) {
					n.db.objectStoreNames.contains(e) || (l && console.debug("Dexie: Creating missing table", e), fn(n, e, t[e].primKey, t[e].indexes));
				});
			}
			function dn(e, t) {
				e.createIndex(t.name, t.keyPath, {
					unique: t.unique,
					multiEntry: t.multi
				});
			}
			function pn(e, t, u) {
				var s = {};
				return W(t.objectStoreNames, 0).forEach(function(e) {
					for (var t = u.objectStore(e), n = $t(Qt(a = t.keyPath), a || "", !0, !1, !!t.autoIncrement, a && "string" != typeof a, !0), r = [], i = 0; i < t.indexNames.length; ++i) {
						var o = t.index(t.indexNames[i]), a = o.keyPath, o = $t(o.name, a, !!o.unique, !!o.multiEntry, !1, a && "string" != typeof a, !1);
						r.push(o);
					}
					s[e] = Gt(e, n, r);
				}), s;
			}
			function yn(e, t, n) {
				for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
					var o = r[i], a = n.objectStore(o);
					e._hasGetAll = "getAll" in a;
					for (var u = 0; u < a.indexNames.length; ++u) {
						var s, c = a.indexNames[u], l = a.index(c).keyPath, l = "string" == typeof l ? l : "[" + W(l).join("+") + "]";
						t[o] && (s = t[o].idxByName[l]) && (s.name = c, delete t[o].idxByName[l], t[o].idxByName[c] = s);
					}
				}
				"undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
			}
			function vn(e) {
				return e.split(",").map(function(e, t) {
					var n = e.split(":"), r = null == (r = n[1]) ? void 0 : r.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
					return $t(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), x(i), 0 === t, r);
				});
			}
			bn.prototype._createTableSchema = Gt, bn.prototype._parseIndexSyntax = vn, bn.prototype._parseStoresSpec = function(r, i) {
				var o = this;
				O(r).forEach(function(e) {
					if (null !== r[e]) {
						var t = o._parseIndexSyntax(r[e]), n = t.shift();
						if (!n) throw new k.Schema("Invalid schema for table " + e + ": " + r[e]);
						if (n.unique = !0, n.multi) throw new k.Schema("Primary key cannot be multiEntry*");
						t.forEach(function(e) {
							if (e.auto) throw new k.Schema("Only primary key can be marked as autoIncrement (++)");
							if (!e.keyPath) throw new k.Schema("Index must have a name and cannot be an empty string");
						});
						n = o._createTableSchema(e, n, t);
						i[e] = n;
					}
				});
			}, bn.prototype.stores = function(e) {
				var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? a(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
				return e.forEach(function(e) {
					a(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
				}), t._dbSchema = r, an(t, [
					t._allTables,
					t,
					t.Transaction.prototype
				]), on(t, [
					t._allTables,
					t,
					t.Transaction.prototype,
					this._cfg.tables
				], O(r), r), t._storeNames = O(r), this;
			}, bn.prototype.upgrade = function(e) {
				return this._cfg.contentUpgrade = ke(this._cfg.contentUpgrade || g, e), this;
			};
			var mn = bn;
			function bn() {}
			var gn = (() => {
				var i, o, t;
				return "undefined" != typeof FinalizationRegistry && "undefined" != typeof WeakRef ? (i = /* @__PURE__ */ new Set(), o = new FinalizationRegistry(function(e) {
					i.delete(e);
				}), {
					toArray: function() {
						return Array.from(i).map(function(e) {
							return e.deref();
						}).filter(function(e) {
							return void 0 !== e;
						});
					},
					add: function(e) {
						var t = new WeakRef(e._novip);
						i.add(t), o.register(e._novip, t, t), i.size > e._options.maxConnections && (t = i.values().next().value, i.delete(t), o.unregister(t));
					},
					remove: function(e) {
						if (e) for (var t = i.values(), n = t.next(); !n.done;) {
							var r = n.value;
							if (r.deref() === e._novip) return i.delete(r), void o.unregister(r);
							n = t.next();
						}
					}
				}) : (t = [], {
					toArray: function() {
						return t;
					},
					add: function(e) {
						t.push(e._novip);
					},
					remove: function(e) {
						e && -1 !== (e = t.indexOf(e._novip)) && t.splice(e, 1);
					}
				});
			})();
			function wn(e, t) {
				var n = e._dbNamesDB;
				return n || (n = e._dbNamesDB = new y(ft, {
					addons: [],
					indexedDB: e,
					IDBKeyRange: t
				})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
			}
			function _n(e) {
				return e && "function" == typeof e.databases;
			}
			function xn(e) {
				return v(function() {
					return P.letThrough = !0, e();
				});
			}
			function kn(e) {
				return !("from" in e);
			}
			var q = function(e, t) {
				var n;
				if (!this) return n = new q(), e && "d" in e && a(n, e), n;
				a(this, arguments.length ? {
					d: 1,
					from: e,
					to: 1 < arguments.length ? t : e
				} : { d: 0 });
			};
			function On(e, t, n) {
				var r = j(t, n);
				if (!isNaN(r)) {
					if (0 < r) throw RangeError();
					if (kn(e)) return a(e, {
						from: t,
						to: n,
						d: 1
					});
					var r = e.l, i = e.r;
					if (j(n, e.from) < 0) return r ? On(r, t, n) : e.l = {
						from: t,
						to: n,
						d: 1,
						l: null,
						r: null
					}, Sn(e);
					if (0 < j(t, e.to)) return i ? On(i, t, n) : e.r = {
						from: t,
						to: n,
						d: 1,
						l: null,
						r: null
					}, Sn(e);
					j(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < j(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
					t = !e.r;
					r && !e.l && Pn(e, r), i && t && Pn(e, i);
				}
			}
			function Pn(e, t) {
				kn(t) || function e(t, n) {
					var r = n.from, i = n.l, o = n.r;
					On(t, r, n.to), i && e(t, i), o && e(t, o);
				}(e, t);
			}
			function Kn(e, t) {
				var n = En(t), r = n.next();
				if (!r.done) for (var i = r.value, o = En(e), a = o.next(i.from), u = a.value; !r.done && !a.done;) {
					if (j(u.from, i.to) <= 0 && 0 <= j(u.to, i.from)) return !0;
					j(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
				}
				return !1;
			}
			function En(e) {
				var n = kn(e) ? null : {
					s: 0,
					n: e
				};
				return { next: function(e) {
					for (var t = 0 < arguments.length; n;) switch (n.s) {
						case 0: if (n.s = 1, t) for (; n.n.l && j(e, n.n.from) < 0;) n = {
							up: n,
							n: n.n.l,
							s: 1
						};
						else for (; n.n.l;) n = {
							up: n,
							n: n.n.l,
							s: 1
						};
						case 1: if (n.s = 2, !t || j(e, n.n.to) <= 0) return {
							value: n.n,
							done: !1
						};
						case 2: if (n.n.r) {
							n.s = 3, n = {
								up: n,
								n: n.n.r,
								s: 0
							};
							continue;
						}
						case 3: n = n.up;
					}
					return { done: !0 };
				} };
			}
			function Sn(e) {
				var t, n, r, i = ((null == (i = e.r) ? void 0 : i.d) || 0) - ((null == (i = e.l) ? void 0 : i.d) || 0), i = 1 < i ? "r" : i < -1 ? "l" : "";
				i && (t = "r" == i ? "l" : "r", n = _({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = An(n)), e.d = An(e);
			}
			function An(e) {
				var t = e.r, e = e.l;
				return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
			}
			function jn(t, n) {
				return O(n).forEach(function(e) {
					t[e] ? Pn(t[e], n[e]) : t[e] = function e(t) {
						var n, r, i = {};
						for (n in t) m(t, n) && (r = t[n], i[n] = !r || "object" != typeof r || J.has(r.constructor) ? r : e(r));
						return i;
					}(n[e]);
				}), t;
			}
			function Cn(t, n) {
				return t.all || n.all || Object.keys(t).some(function(e) {
					return n[e] && Kn(n[e], t[e]);
				});
			}
			M(q.prototype, ((t = {
				add: function(e) {
					return Pn(this, e), this;
				},
				addKey: function(e) {
					return On(this, e, e), this;
				},
				addKeys: function(e) {
					var t = this;
					return e.forEach(function(e) {
						return On(t, e, e);
					}), this;
				},
				hasKey: function(e) {
					var t = En(this).next(e).value;
					return t && j(t.from, e) <= 0 && 0 <= j(t.to, e);
				}
			})[re] = function() {
				return En(this);
			}, t));
			var Tn = {}, In = {}, qn = !1;
			function Dn(e) {
				jn(In, e), qn || (qn = !0, setTimeout(function() {
					qn = !1, Bn(In, !(In = {}));
				}, 0));
			}
			function Bn(e, t) {
				void 0 === t && (t = !1);
				var n = /* @__PURE__ */ new Set();
				if (e.all) for (var r = 0, i = Object.values(Tn); r < i.length; r++) Rn(u = i[r], e, n, t);
				else for (var o in e) {
					var a, u, o = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
					o && (a = o[1], o = o[2], u = Tn["idb://".concat(a, "/").concat(o)]) && Rn(u, e, n, t);
				}
				n.forEach(function(e) {
					return e();
				});
			}
			function Rn(e, t, n, r) {
				for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
					for (var u = a[o], s = u[0], c = [], l = 0, f = u[1]; l < f.length; l++) {
						var h = f[l];
						Cn(t, h.obsSet) ? h.subscribers.forEach(function(e) {
							return n.add(e);
						}) : r && c.push(h);
					}
					r && i.push([s, c]);
				}
				if (r) for (var d = 0, p = i; d < p.length; d++) {
					var y = p[d], s = y[0], c = y[1];
					e.queries.query[s] = c;
				}
			}
			function Fn(h) {
				var d = h._state, r = h._deps.indexedDB;
				if (d.isBeingOpened || h.idbdb) return d.dbReadyPromise.then(function() {
					return d.dbOpenError ? S(d.dbOpenError) : h;
				});
				d.isBeingOpened = !0, d.dbOpenError = null, d.openComplete = !1;
				var t = d.openCanceller, p = Math.round(10 * h.verno), y = !1;
				function e() {
					if (d.openCanceller !== t) throw new k.DatabaseClosed("db.open() was cancelled");
				}
				function v() {
					return new K(function(c, n) {
						if (e(), !r) throw new k.MissingAPI();
						var l = h.name, f = d.autoSchema || !p ? r.open(l) : r.open(l, p);
						if (!f) throw new k.MissingAPI();
						f.onerror = I(n), f.onblocked = E(h._fireOnBlocked), f.onupgradeneeded = E(function(e) {
							var t;
							m = f.transaction, d.autoSchema && !h._options.allowEmptyDB ? (f.onerror = Ut, m.abort(), f.result.close(), (t = r.deleteDatabase(l)).onsuccess = t.onerror = E(function() {
								n(new k.NoSuchDatabase("Database ".concat(l, " doesnt exist")));
							})) : (m.onerror = I(n), t = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion, b = t < 1, h.idbdb = f.result, y && cn(h, m), sn(h, t / 10, m, n));
						}, n), f.onsuccess = E(function() {
							m = null;
							var e, t, n, r, i, o, a = h.idbdb = f.result, u = W(a.objectStoreNames);
							if (0 < u.length) try {
								var s = a.transaction(1 === (i = u).length ? i[0] : i, "readonly");
								if (d.autoSchema) o = a, r = s, (n = h).verno = o.version / 10, r = n._dbSchema = pn(0, o, r), n._storeNames = W(o.objectStoreNames, 0), on(n, [n._allTables], O(r), r);
								else if (yn(h, h._dbSchema, s), t = s, ((t = ln(pn(0, (e = h).idbdb, t), e._dbSchema)).add.length || t.change.some(function(e) {
									return e.add.length || e.change.length;
								})) && !y) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), a.close(), p = a.version + 1, y = !0, c(v());
								rn(h, s);
							} catch (e) {}
							gn.add(h), a.onversionchange = E(function(e) {
								d.vcFired = !0, h.on("versionchange").fire(e);
							}), a.onclose = E(function() {
								h.close({ disableAutoOpen: !1 });
							}), b && (u = h._deps, i = l, _n(o = u.indexedDB) || i === ft || wn(o, u.IDBKeyRange).put({ name: i }).catch(g)), c();
						}, n);
					}).catch(function(e) {
						switch (null == e ? void 0 : e.name) {
							case "UnknownError":
								if (0 < d.PR1398_maxLoop) return d.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
								break;
							case "VersionError": if (0 < p) return p = 0, v();
						}
						return K.reject(e);
					});
				}
				var n, i = d.dbReadyResolve, m = null, b = !1;
				return K.race([t, ("undefined" == typeof navigator ? K.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
					function t() {
						return indexedDB.databases().finally(e);
					}
					n = setInterval(t, 100), t();
				}).finally(function() {
					return clearInterval(n);
				}) : Promise.resolve()).then(v)]).then(function() {
					return e(), d.onReadyBeingFired = [], K.resolve(xn(function() {
						return h.on.ready.fire(h.vip);
					})).then(function e() {
						var t;
						if (0 < d.onReadyBeingFired.length) return t = d.onReadyBeingFired.reduce(ke, g), d.onReadyBeingFired = [], K.resolve(xn(function() {
							return t(h.vip);
						})).then(e);
					});
				}).finally(function() {
					d.openCanceller === t && (d.onReadyBeingFired = null, d.isBeingOpened = !1);
				}).catch(function(e) {
					d.dbOpenError = e;
					try {
						m && m.abort();
					} catch (e) {}
					return t === d.openCanceller && h._close(), S(e);
				}).finally(function() {
					d.openComplete = !0, i();
				}).then(function() {
					var n;
					return b && (n = {}, h.tables.forEach(function(t) {
						t.schema.indexes.forEach(function(e) {
							e.name && (n["idb://".concat(h.name, "/").concat(t.name, "/").concat(e.name)] = new q(-1 / 0, [[[]]]));
						}), n["idb://".concat(h.name, "/").concat(t.name, "/")] = n["idb://".concat(h.name, "/").concat(t.name, "/:dels")] = new q(-1 / 0, [[[]]]);
					}), Wt(zt).fire(n), Bn(n, !0)), h;
				});
			}
			function Nn(t) {
				function e(e) {
					return t.next(e);
				}
				var r = n(e), i = n(function(e) {
					return t.throw(e);
				});
				function n(n) {
					return function(e) {
						var e = n(e), t = e.value;
						return e.done ? t : t && "function" == typeof t.then ? t.then(r, i) : x(t) ? Promise.all(t).then(r, i) : r(t);
					};
				}
				return n(e)();
			}
			function Mn(e, t, n) {
				for (var r = x(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
				return r;
			}
			var Ln = {
				stack: "dbcore",
				name: "VirtualIndexMiddleware",
				level: 1,
				create: function(l) {
					return _(_({}, l), { table: function(e) {
						var o = l.table(e), e = o.schema, u = Object.create(null), s = [];
						function c(e, t, n) {
							var r = en(e), i = u[r] = u[r] || [], o = null == e ? 0 : "string" == typeof e ? 1 : e.length, a = 0 < t, r = _(_({}, n), {
								name: a ? "".concat(r, "(virtual-from:").concat(n.name, ")") : n.name,
								lowLevelIndex: n,
								isVirtual: a,
								keyTail: t,
								keyLength: o,
								extractKey: Ht(e),
								unique: !a && n.unique
							});
							return i.push(r), r.isPrimaryKey || s.push(r), 1 < o && c(2 === o ? e[0] : e.slice(0, o - 1), t + 1, n), i.sort(function(e, t) {
								return e.keyTail - t.keyTail;
							}), r;
						}
						var t = c(e.primaryKey.keyPath, 0, e.primaryKey);
						u[":id"] = [t];
						for (var n = 0, r = e.indexes; n < r.length; n++) {
							var i = r[n];
							c(i.keyPath, 0, i);
						}
						function a(e) {
							var t, n = e.query.index;
							return n.isVirtual ? _(_({}, e), { query: {
								index: n.lowLevelIndex,
								range: (t = e.query.range, n = n.keyTail, {
									type: 1 === t.type ? 2 : t.type,
									lower: Mn(t.lower, t.lowerOpen ? l.MAX_KEY : l.MIN_KEY, n),
									lowerOpen: !0,
									upper: Mn(t.upper, t.upperOpen ? l.MIN_KEY : l.MAX_KEY, n),
									upperOpen: !0
								})
							} }) : e;
						}
						return _(_({}, o), {
							schema: _(_({}, e), {
								primaryKey: t,
								indexes: s,
								getIndexByKeyPath: function(e) {
									return (e = u[en(e)]) && e[0];
								}
							}),
							count: function(e) {
								return o.count(a(e));
							},
							query: function(e) {
								return o.query(a(e));
							},
							openCursor: function(t) {
								var e = t.query.index, r = e.keyTail, i = e.keyLength;
								return e.isVirtual ? o.openCursor(a(t)).then(function(e) {
									return e && n(e);
								}) : o.openCursor(t);
								function n(n) {
									return Object.create(n, {
										continue: { value: function(e) {
											null != e ? n.continue(Mn(e, t.reverse ? l.MAX_KEY : l.MIN_KEY, r)) : t.unique ? n.continue(n.key.slice(0, i).concat(t.reverse ? l.MIN_KEY : l.MAX_KEY, r)) : n.continue();
										} },
										continuePrimaryKey: { value: function(e, t) {
											n.continuePrimaryKey(Mn(e, l.MAX_KEY, r), t);
										} },
										primaryKey: { get: function() {
											return n.primaryKey;
										} },
										key: { get: function() {
											var e = n.key;
											return 1 === i ? e[0] : e.slice(0, i);
										} },
										value: { get: function() {
											return n.value;
										} }
									});
								}
							}
						});
					} });
				}
			};
			function Un(i, o, a, u) {
				return a = a || {}, u = u || "", O(i).forEach(function(e) {
					var t, n, r;
					m(o, e) ? (t = i[e], n = o[e], "object" == typeof t && "object" == typeof n && t && n ? (r = ne(t)) !== ne(n) ? a[u + e] = o[e] : "Object" === r ? Un(t, n, a, u + e + ".") : t !== n && (a[u + e] = o[e]) : t !== n && (a[u + e] = o[e])) : a[u + e] = void 0;
				}), O(o).forEach(function(e) {
					m(i, e) || (a[u + e] = o[e]);
				}), a;
			}
			function zn(e, t) {
				return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey);
			}
			var Vn = {
				stack: "dbcore",
				name: "HooksMiddleware",
				level: 2,
				create: function(e) {
					return _(_({}, e), { table: function(r) {
						var y = e.table(r), v = y.schema.primaryKey;
						return _(_({}, y), { mutate: function(e) {
							var t = P.trans, n = t.table(r).hook, h = n.deleting, d = n.creating, p = n.updating;
							switch (e.type) {
								case "add":
									if (d.fire === g) break;
									return t._promise("readwrite", function() {
										return a(e);
									}, !0);
								case "put":
									if (d.fire === g && p.fire === g) break;
									return t._promise("readwrite", function() {
										return a(e);
									}, !0);
								case "delete":
									if (h.fire === g) break;
									return t._promise("readwrite", function() {
										return a(e);
									}, !0);
								case "deleteRange":
									if (h.fire === g) break;
									return t._promise("readwrite", function() {
										return function n(r, i, o) {
											return y.query({
												trans: r,
												values: !1,
												query: {
													index: v,
													range: i
												},
												limit: o
											}).then(function(e) {
												var t = e.result;
												return a({
													type: "delete",
													keys: t,
													trans: r
												}).then(function(e) {
													return 0 < e.numFailures ? Promise.reject(e.failures[0]) : t.length < o ? {
														failures: [],
														numFailures: 0,
														lastResult: void 0
													} : n(r, _(_({}, i), {
														lower: t[t.length - 1],
														lowerOpen: !0
													}), o);
												});
											});
										}(e.trans, e.range, 1e4);
									}, !0);
							}
							return y.mutate(e);
							function a(c) {
								var e, t, n, l = P.trans, f = c.keys || zn(v, c);
								if (f) return "delete" !== (c = "add" === c.type || "put" === c.type ? _(_({}, c), { keys: f }) : _({}, c)).type && (c.values = R([], c.values, !0)), c.keys && (c.keys = R([], c.keys, !0)), e = y, n = f, ("add" === (t = c).type ? Promise.resolve([]) : e.getMany({
									trans: t.trans,
									keys: n,
									cache: "immutable"
								})).then(function(u) {
									var s = f.map(function(e, t) {
										var n, r, i, o = u[t], a = {
											onerror: null,
											onsuccess: null
										};
										return "delete" === c.type ? h.fire.call(a, e, o, l) : "add" === c.type || void 0 === o ? (n = d.fire.call(a, e, c.values[t], l), null == e && null != n && (c.keys[t] = e = n, v.outbound || b(c.values[t], v.keyPath, e))) : (n = Un(o, c.values[t]), (r = p.fire.call(a, n, e, o, l)) && (i = c.values[t], Object.keys(r).forEach(function(e) {
											m(i, e) ? i[e] = r[e] : b(i, e, r[e]);
										}))), a;
									});
									return y.mutate(c).then(function(e) {
										for (var t = e.failures, n = e.results, r = e.numFailures, e = e.lastResult, i = 0; i < f.length; ++i) {
											var o = (n || f)[i], a = s[i];
											null == o ? a.onerror && a.onerror(t[i]) : a.onsuccess && a.onsuccess("put" === c.type && u[i] ? c.values[i] : o);
										}
										return {
											failures: t,
											results: n,
											numFailures: r,
											lastResult: e
										};
									}).catch(function(t) {
										return s.forEach(function(e) {
											return e.onerror && e.onerror(t);
										}), Promise.reject(t);
									});
								});
								throw new Error("Keys missing");
							}
						} });
					} });
				}
			};
			function Wn(e, t, n) {
				try {
					if (!t) return null;
					if (t.keys.length < e.length) return null;
					for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) 0 === j(t.keys[i], e[o]) && (r.push(n ? ee(t.values[i]) : t.values[i]), ++o);
					return r.length === e.length ? r : null;
				} catch (e) {
					return null;
				}
			}
			var Yn = {
				stack: "dbcore",
				level: -1,
				create: function(t) {
					return { table: function(e) {
						var n = t.table(e);
						return _(_({}, n), {
							getMany: function(t) {
								var e;
								return t.cache ? (e = Wn(t.keys, t.trans._cache, "clone" === t.cache)) ? K.resolve(e) : n.getMany(t).then(function(e) {
									return t.trans._cache = {
										keys: t.keys,
										values: "clone" === t.cache ? ee(e) : e
									}, e;
								}) : n.getMany(t);
							},
							mutate: function(e) {
								return "add" !== e.type && (e.trans._cache = null), n.mutate(e);
							}
						});
					} };
				}
			};
			function $n(e, t) {
				return "readonly" === e.trans.mode && !!e.subscr && !e.trans.explicit && "disabled" !== e.trans.db._options.cache && !t.schema.primaryKey.outbound;
			}
			function Qn(e, t) {
				switch (e) {
					case "query": return t.values && !t.unique;
					case "get":
					case "getMany":
					case "count":
					case "openCursor": return !1;
				}
			}
			var Gn = {
				stack: "dbcore",
				level: 0,
				name: "Observability",
				create: function(b) {
					var g = b.schema.name, w = new q(b.MIN_KEY, b.MAX_KEY);
					return _(_({}, b), {
						transaction: function(e, t, n) {
							if (P.subscr && "readonly" !== t) throw new k.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(P.querier));
							return b.transaction(e, t, n);
						},
						table: function(d) {
							function e(e) {
								var t, e = e.query;
								return [t = e.index, new q(null != (t = (e = e.range).lower) ? t : b.MIN_KEY, null != (t = e.upper) ? t : b.MAX_KEY)];
							}
							var p = b.table(d), y = p.schema, v = y.primaryKey, t = y.indexes, c = v.extractKey, l = v.outbound, m = v.autoIncrement && t.filter(function(e) {
								return e.compound && e.keyPath.includes(v.keyPath);
							}), n = _(_({}, p), { mutate: function(a) {
								function u(e) {
									return e = "idb://".concat(g, "/").concat(d, "/").concat(e), n[e] || (n[e] = new q());
								}
								var e, o, s, t = a.trans, n = a.mutatedParts || (a.mutatedParts = {}), r = u(""), i = u(":dels"), c = a.type, l = "deleteRange" === a.type ? [a.range] : "delete" === a.type ? [a.keys] : a.values.length < 50 ? [zn(v, a).filter(function(e) {
									return e;
								}), a.values] : [], f = l[0], l = l[1], h = a.trans._cache;
								return x(f) ? (r.addKeys(f), (c = "delete" === c || f.length === l.length ? Wn(f, h) : null) || i.addKeys(f), (c || l) && (e = u, o = c, s = l, y.indexes.forEach(function(t) {
									var n = e(t.name || "");
									function r(e) {
										return null != e ? t.extractKey(e) : null;
									}
									function i(e) {
										t.multiEntry && x(e) ? e.forEach(function(e) {
											return n.addKey(e);
										}) : n.addKey(e);
									}
									(o || s).forEach(function(e, t) {
										var n = o && r(o[t]), t = s && r(s[t]);
										0 !== j(n, t) && (null != n && i(n), null != t) && i(t);
									});
								}))) : f ? (l = {
									from: null != (h = f.lower) ? h : b.MIN_KEY,
									to: null != (c = f.upper) ? c : b.MAX_KEY
								}, i.add(l), r.add(l)) : (r.add(w), i.add(w), y.indexes.forEach(function(e) {
									return u(e.name).add(w);
								})), p.mutate(a).then(function(o) {
									return !f || "add" !== a.type && "put" !== a.type || (r.addKeys(o.results), m && m.forEach(function(t) {
										for (var e = a.values.map(function(e) {
											return t.extractKey(e);
										}), n = t.keyPath.findIndex(function(e) {
											return e === v.keyPath;
										}), r = 0, i = o.results.length; r < i; ++r) e[r][n] = o.results[r];
										u(t.name).addKeys(e);
									})), t.mutatedParts = jn(t.mutatedParts || {}, n), o;
								});
							} }), f = {
								get: function(e) {
									return [v, new q(e.key)];
								},
								getMany: function(e) {
									return [v, new q().addKeys(e.keys)];
								},
								count: e,
								query: e,
								openCursor: e
							};
							return O(f).forEach(function(s) {
								n[s] = function(i) {
									var e = P.subscr, t = !!e, n = $n(P, p) && Qn(s, i) ? i.obsSet = {} : e;
									if (t) {
										var o, e = function(e) {
											e = "idb://".concat(g, "/").concat(d, "/").concat(e);
											return n[e] || (n[e] = new q());
										}, a = e(""), u = e(":dels"), t = f[s](i), r = t[0], t = t[1];
										if (("query" === s && r.isPrimaryKey && !i.values ? u : e(r.name || "")).add(t), !r.isPrimaryKey) {
											if ("count" !== s) return o = "query" === s && l && i.values && p.query(_(_({}, i), { values: !1 })), p[s].apply(this, arguments).then(function(t) {
												if ("query" === s) {
													if (l && i.values) return o.then(function(e) {
														e = e.result;
														return a.addKeys(e), t;
													});
													var e = i.values ? t.result.map(c) : t.result;
													(i.values ? a : u).addKeys(e);
												} else {
													var n, r;
													if ("openCursor" === s) return r = i.values, (n = t) && Object.create(n, {
														key: { get: function() {
															return u.addKey(n.primaryKey), n.key;
														} },
														primaryKey: { get: function() {
															var e = n.primaryKey;
															return u.addKey(e), e;
														} },
														value: { get: function() {
															return r && a.addKey(n.primaryKey), n.value;
														} }
													});
												}
												return t;
											});
											u.add(w);
										}
									}
									return p[s].apply(this, arguments);
								};
							}), n;
						}
					});
				}
			};
			function Xn(e, t, n) {
				var r;
				return 0 === n.numFailures ? t : "deleteRange" === t.type || (r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1, n.numFailures === r) ? null : (r = _({}, t), x(r.keys) && (r.keys = r.keys.filter(function(e, t) {
					return !(t in n.failures);
				})), "values" in r && x(r.values) && (r.values = r.values.filter(function(e, t) {
					return !(t in n.failures);
				})), r);
			}
			function Hn(e, t) {
				return n = e, (void 0 === (r = t).lower || (r.lowerOpen ? 0 < j(n, r.lower) : 0 <= j(n, r.lower))) && (n = e, void 0 === (r = t).upper || (r.upperOpen ? j(n, r.upper) < 0 : j(n, r.upper) <= 0));
				var n, r;
			}
			function Jn(e, d, t, n, r, i) {
				var o, p, y, v, m, a, u;
				return !t || 0 === t.length || (o = d.query.index, p = o.multiEntry, y = d.query.range, v = n.schema.primaryKey.extractKey, m = o.extractKey, a = (o.lowLevelIndex || o).extractKey, (n = t.reduce(function(e, t) {
					var n = e, r = [];
					if ("add" === t.type || "put" === t.type) for (var i = new q(), o = t.values.length - 1; 0 <= o; --o) {
						var a, u = t.values[o], s = v(u);
						!i.hasKey(s) && (a = m(u), p && x(a) ? a.some(function(e) {
							return Hn(e, y);
						}) : Hn(a, y)) && (i.addKey(s), r.push(u));
					}
					switch (t.type) {
						case "add":
							var c = new q().addKeys(d.values ? e.map(function(e) {
								return v(e);
							}) : e), n = e.concat(d.values ? r.filter(function(e) {
								e = v(e);
								return !c.hasKey(e) && (c.addKey(e), !0);
							}) : r.map(function(e) {
								return v(e);
							}).filter(function(e) {
								return !c.hasKey(e) && (c.addKey(e), !0);
							}));
							break;
						case "put":
							var l = new q().addKeys(t.values.map(function(e) {
								return v(e);
							}));
							n = e.filter(function(e) {
								return !l.hasKey(d.values ? v(e) : e);
							}).concat(d.values ? r : r.map(function(e) {
								return v(e);
							}));
							break;
						case "delete":
							var f = new q().addKeys(t.keys);
							n = e.filter(function(e) {
								return !f.hasKey(d.values ? v(e) : e);
							});
							break;
						case "deleteRange":
							var h = t.range;
							n = e.filter(function(e) {
								return !Hn(v(e), h);
							});
					}
					return n;
				}, e)) === e) ? e : (u = function(e, t) {
					return j(a(e), a(t)) || j(v(e), v(t));
				}, n.sort("prev" === d.direction || "prevunique" === d.direction ? function(e, t) {
					return u(t, e);
				} : u), d.limit && d.limit < 1 / 0 && (n.length > d.limit ? n.length = d.limit : e.length === d.limit && n.length < d.limit && (r.dirty = !0)), i ? Object.freeze(n) : n);
			}
			function Zn(e, t) {
				return 0 === j(e.lower, t.lower) && 0 === j(e.upper, t.upper) && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
			}
			function er(e, t) {
				return ((e, t, n, r) => {
					if (void 0 === e) return void 0 !== t ? -1 : 0;
					if (void 0 === t) return 1;
					if (0 === (e = j(e, t))) {
						if (n && r) return 0;
						if (n) return 1;
						if (r) return -1;
					}
					return e;
				})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
					if (void 0 === e) return void 0 !== t ? 1 : 0;
					if (void 0 === t) return -1;
					if (0 === (e = j(e, t))) {
						if (n && r) return 0;
						if (n) return -1;
						if (r) return 1;
					}
					return e;
				})(e.upper, t.upper, e.upperOpen, t.upperOpen);
			}
			function tr(n, r, i, e) {
				n.subscribers.add(i), e.addEventListener("abort", function() {
					var e, t;
					n.subscribers.delete(i), 0 === n.subscribers.size && (e = n, t = r, setTimeout(function() {
						0 === e.subscribers.size && oe(t, e);
					}, 3e3));
				});
			}
			var nr = {
				stack: "dbcore",
				level: 0,
				name: "Cache",
				create: function(k) {
					var O = k.schema.name;
					return _(_({}, k), {
						transaction: function(g, w, e) {
							var _, t, x = k.transaction(g, w, e);
							return "readwrite" === w && (e = (_ = new AbortController()).signal, x.addEventListener("abort", (t = function(b) {
								return function() {
									if (_.abort(), "readwrite" === w) {
										for (var t = /* @__PURE__ */ new Set(), e = 0, n = g; e < n.length; e++) {
											var r = n[e], i = Tn["idb://".concat(O, "/").concat(r)];
											if (i) {
												var o = k.table(r), a = i.optimisticOps.filter(function(e) {
													return e.trans === x;
												});
												if (x._explicit && b && x.mutatedParts) for (var u = 0, s = Object.values(i.queries.query); u < s.length; u++) for (var c = 0, l = (d = s[u]).slice(); c < l.length; c++) Cn((p = l[c]).obsSet, x.mutatedParts) && (oe(d, p), p.subscribers.forEach(function(e) {
													return t.add(e);
												}));
												else if (0 < a.length) {
													i.optimisticOps = i.optimisticOps.filter(function(e) {
														return e.trans !== x;
													});
													for (var f = 0, h = Object.values(i.queries.query); f < h.length; f++) for (var d, p, y, v = 0, m = (d = h[f]).slice(); v < m.length; v++) null != (p = m[v]).res && x.mutatedParts && (b && !p.dirty ? (y = Object.isFrozen(p.res), y = Jn(p.res, p.req, a, o, p, y), p.dirty ? (oe(d, p), p.subscribers.forEach(function(e) {
														return t.add(e);
													})) : y !== p.res && (p.res = y, p.promise = K.resolve({ result: y }))) : (p.dirty && oe(d, p), p.subscribers.forEach(function(e) {
														return t.add(e);
													})));
												}
											}
										}
										t.forEach(function(e) {
											return e();
										});
									}
								};
							})(!1), { signal: e }), x.addEventListener("error", t(!1), { signal: e }), x.addEventListener("complete", t(!0), { signal: e })), x;
						},
						table: function(s) {
							var c = k.table(s), i = c.schema.primaryKey;
							return _(_({}, c), {
								mutate: function(t) {
									var n, e = P.trans;
									return !i.outbound && "disabled" !== e.db._options.cache && !e.explicit && "readwrite" === e.idbtrans.mode && (n = Tn["idb://".concat(O, "/").concat(s)]) ? (e = c.mutate(t), "add" !== t.type && "put" !== t.type || !(50 <= t.values.length || zn(i, t).some(function(e) {
										return null == e;
									})) ? (n.optimisticOps.push(t), t.mutatedParts && Dn(t.mutatedParts), e.then(function(e) {
										0 < e.numFailures && (oe(n.optimisticOps, t), (e = Xn(0, t, e)) && n.optimisticOps.push(e), t.mutatedParts) && Dn(t.mutatedParts);
									}), e.catch(function() {
										oe(n.optimisticOps, t), t.mutatedParts && Dn(t.mutatedParts);
									})) : e.then(function(r) {
										var e = Xn(0, _(_({}, t), { values: t.values.map(function(e, t) {
											var n;
											return r.failures[t] ? e : (b(n = null != (n = i.keyPath) && n.includes(".") ? ee(e) : _({}, e), i.keyPath, r.results[t]), n);
										}) }), r);
										n.optimisticOps.push(e), queueMicrotask(function() {
											return t.mutatedParts && Dn(t.mutatedParts);
										});
									}), e) : c.mutate(t);
								},
								query: function(t) {
									var i, e, n, r, o, a, u;
									return $n(P, c) && Qn("query", t) ? (i = "immutable" === (null == (n = P.trans) ? void 0 : n.db._options.cache), e = (n = P).requery, n = n.signal, a = ((e, t, n, r) => {
										var i = Tn["idb://".concat(e, "/").concat(t)];
										if (!i) return [];
										if (!(e = i.queries[n])) return [
											null,
											!1,
											i,
											null
										];
										var o = e[(r.query ? r.query.index.name : null) || ""];
										if (!o) return [
											null,
											!1,
											i,
											null
										];
										switch (n) {
											case "query":
												var a = null != (u = r.direction) ? u : "next", u = o.find(function(e) {
													var t;
													return e.req.limit === r.limit && e.req.values === r.values && (null != (t = e.req.direction) ? t : "next") === a && Zn(e.req.query.range, r.query.range);
												});
												return u ? [
													u,
													!0,
													i,
													o
												] : [
													o.find(function(e) {
														var t;
														return ("limit" in e.req ? e.req.limit : 1 / 0) >= r.limit && (null != (t = e.req.direction) ? t : "next") === a && (!r.values || e.req.values) && er(e.req.query.range, r.query.range);
													}),
													!1,
													i,
													o
												];
											case "count":
												u = o.find(function(e) {
													return Zn(e.req.query.range, r.query.range);
												});
												return [
													u,
													!!u,
													i,
													o
												];
										}
									})(O, s, "query", t), u = a[0], r = a[2], o = a[3], u && a[1] ? u.obsSet = t.obsSet : (a = c.query(t).then(function(e) {
										var t = e.result;
										if (u && (u.res = t), i) {
											for (var n = 0, r = t.length; n < r; ++n) Object.freeze(t[n]);
											Object.freeze(t);
										}
										return e;
									}).catch(function(e) {
										return o && u && oe(o, u), Promise.reject(e);
									}), u = {
										obsSet: t.obsSet,
										promise: a,
										subscribers: /* @__PURE__ */ new Set(),
										type: "query",
										req: t,
										dirty: !1
									}, o ? o.push(u) : (o = [u], (r = r || (Tn["idb://".concat(O, "/").concat(s)] = {
										queries: {
											query: {},
											count: {}
										},
										objs: /* @__PURE__ */ new Map(),
										optimisticOps: [],
										unsignaledParts: {}
									})).queries.query[t.query.index.name || ""] = o)), tr(u, o, e, n), u.promise.then(function(e) {
										e = Jn(e.result, t, null == r ? void 0 : r.optimisticOps, c, u, i);
										return { result: i ? e : ee(e) };
									})) : c.query(t);
								}
							});
						}
					});
				}
			};
			function rr(e, r) {
				return new Proxy(e, { get: function(e, t, n) {
					return "db" === t ? r : Reflect.get(e, t, n);
				} });
			}
			D.prototype.version = function(t) {
				if (isNaN(t) || t < .1) throw new k.Type("Given version is not a positive number");
				if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new k.Schema("Cannot add version when database is open");
				this.verno = Math.max(this.verno, t);
				var e = this._versions, n = e.filter(function(e) {
					return e._cfg.version === t;
				})[0];
				return n || (n = new this.Version(t), e.push(n), e.sort(un), n.stores({}), this._state.autoSchema = !1), n;
			}, D.prototype._whenReady = function(e) {
				var n = this;
				return this.idbdb && (this._state.openComplete || P.letThrough || this._vip) ? e() : new K(function(e, t) {
					if (n._state.openComplete) return t(new k.DatabaseClosed(n._state.dbOpenError));
					if (!n._state.isBeingOpened) {
						if (!n._state.autoOpen) return void t(new k.DatabaseClosed());
						n.open().catch(g);
					}
					n._state.dbReadyPromise.then(e, t);
				}).then(e);
			}, D.prototype.use = function(e) {
				var t = e.stack, n = e.create, r = e.level, e = e.name, i = (e && this.unuse({
					stack: t,
					name: e
				}), this._middlewares[t] || (this._middlewares[t] = []));
				return i.push({
					stack: t,
					create: n,
					level: null == r ? 10 : r,
					name: e
				}), i.sort(function(e, t) {
					return e.level - t.level;
				}), this;
			}, D.prototype.unuse = function(e) {
				var t = e.stack, n = e.name, r = e.create;
				return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
					return r ? e.create !== r : !!n && e.name !== n;
				})), this;
			}, D.prototype.open = function() {
				var e = this;
				return at(s, function() {
					return Fn(e);
				});
			}, D.prototype._close = function() {
				this.on.close.fire(new CustomEvent("close"));
				var n = this._state;
				if (gn.remove(this), this.idbdb) {
					try {
						this.idbdb.close();
					} catch (e) {}
					this.idbdb = null;
				}
				n.isBeingOpened || (n.dbReadyPromise = new K(function(e) {
					n.dbReadyResolve = e;
				}), n.openCanceller = new K(function(e, t) {
					n.cancelOpen = t;
				}));
			}, D.prototype.close = function(e) {
				var e = (void 0 === e ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
				e ? (t.isBeingOpened && t.cancelOpen(new k.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new k.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
			}, D.prototype.delete = function(n) {
				var i = this, o = (void 0 === n && (n = { disableAutoOpen: !0 }), 0 < arguments.length && "object" != typeof arguments[0]), a = this._state;
				return new K(function(r, t) {
					function e() {
						i.close(n);
						var e = i._deps.indexedDB.deleteDatabase(i.name);
						e.onsuccess = E(function() {
							var e = i._deps, t = i.name, n;
							_n(n = e.indexedDB) || t === ft || wn(n, e.IDBKeyRange).delete(t).catch(g), r();
						}), e.onerror = I(t), e.onblocked = i._fireOnBlocked;
					}
					if (o) throw new k.InvalidArgument("Invalid closeOptions argument to db.delete()");
					a.isBeingOpened ? a.dbReadyPromise.then(e) : e();
				});
			}, D.prototype.backendDB = function() {
				return this.idbdb;
			}, D.prototype.isOpen = function() {
				return null !== this.idbdb;
			}, D.prototype.hasBeenClosed = function() {
				var e = this._state.dbOpenError;
				return e && "DatabaseClosed" === e.name;
			}, D.prototype.hasFailed = function() {
				return null !== this._state.dbOpenError;
			}, D.prototype.dynamicallyOpened = function() {
				return this._state.autoSchema;
			}, Object.defineProperty(D.prototype, "tables", {
				get: function() {
					var t = this;
					return O(this._allTables).map(function(e) {
						return t._allTables[e];
					});
				},
				enumerable: !1,
				configurable: !0
			}), D.prototype.transaction = function() {
				var e = function(e, t, n) {
					var r = arguments.length;
					if (r < 2) throw new k.InvalidArgument("Too few arguments");
					for (var i = new Array(r - 1); --r;) i[r - 1] = arguments[r];
					return n = i.pop(), [
						e,
						H(i),
						n
					];
				}.apply(this, arguments);
				return this._transaction.apply(this, e);
			}, D.prototype._transaction = function(e, t, n) {
				var r, i, o = this, a = P.trans, u = (a && a.db === this && -1 === e.indexOf("!") || (a = null), -1 !== e.indexOf("?"));
				e = e.replace("!", "").replace("?", "");
				try {
					if (i = t.map(function(e) {
						e = e instanceof o.Table ? e.name : e;
						if ("string" != typeof e) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
						return e;
					}), "r" == e || e === ht) r = ht;
					else {
						if ("rw" != e && e != dt) throw new k.InvalidArgument("Invalid transaction mode: " + e);
						r = dt;
					}
					if (a) {
						if (a.mode === ht && r === dt) {
							if (!u) throw new k.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
							a = null;
						}
						a && i.forEach(function(e) {
							if (a && -1 === a.storeNames.indexOf(e)) {
								if (!u) throw new k.SubTransaction("Table " + e + " not included in parent transaction.");
								a = null;
							}
						}), u && a && !a.active && (a = null);
					}
				} catch (n) {
					return a ? a._promise(null, function(e, t) {
						t(n);
					}) : S(n);
				}
				var s = function i(o, a, u, s, c) {
					return K.resolve().then(function() {
						var e = P.transless || P, t = o._createTransaction(a, u, o._dbSchema, s), e = (t.explicit = !0, {
							trans: t,
							transless: e
						});
						if (s) t.idbtrans = s.idbtrans;
						else try {
							t.create(), t.idbtrans._explicit = !0, o._state.PR1398_maxLoop = 3;
						} catch (e) {
							return e.name === de.InvalidState && o.isOpen() && 0 < --o._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), o.close({ disableAutoOpen: !1 }), o.open().then(function() {
								return i(o, a, u, null, c);
							})) : S(e);
						}
						var n, r = ue(c), e = (r && nt(), K.follow(function() {
							var e;
							(n = c.call(t, t)) && (r ? (e = w.bind(null, null), n.then(e, e)) : "function" == typeof n.next && "function" == typeof n.throw && (n = Nn(n)));
						}, e));
						return (n && "function" == typeof n.then ? K.resolve(n).then(function(e) {
							return t.active ? e : S(new k.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
						}) : e.then(function() {
							return n;
						})).then(function(e) {
							return s && t._resolve(), t._completion.then(function() {
								return e;
							});
						}).catch(function(e) {
							return t._reject(e), S(e);
						});
					});
				}.bind(null, this, r, i, a, n);
				return a ? a._promise(r, s, "lock") : P.trans ? at(P.transless, function() {
					return o._whenReady(s);
				}) : this._whenReady(s);
			}, D.prototype.table = function(e) {
				if (m(this._allTables, e)) return this._allTables[e];
				throw new k.InvalidTable("Table ".concat(e, " does not exist"));
			};
			var y = D;
			function D(e, t) {
				var o, r, a, n, i, u = this, s = (this._middlewares = {}, this.verno = 0, D.dependencies), s = (this._options = t = _({
					addons: D.addons,
					autoOpen: !0,
					indexedDB: s.indexedDB,
					IDBKeyRange: s.IDBKeyRange,
					cache: "cloned",
					maxConnections: 1e3
				}, t), this._deps = {
					indexedDB: t.indexedDB,
					IDBKeyRange: t.IDBKeyRange
				}, t.addons), c = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
					dbOpenError: null,
					isBeingOpened: !1,
					onReadyBeingFired: null,
					openComplete: !1,
					dbReadyResolve: g,
					dbReadyPromise: null,
					cancelOpen: g,
					openCanceller: null,
					autoSchema: !0,
					PR1398_maxLoop: 3,
					autoOpen: t.autoOpen
				}), l = (c.dbReadyPromise = new K(function(e) {
					c.dbReadyResolve = e;
				}), c.openCanceller = new K(function(e, t) {
					c.cancelOpen = t;
				}), this._state = c, this.name = e, this.on = Pt(this, "populate", "blocked", "versionchange", "close", { ready: [ke, g] }), this.once = function(n, r) {
					var i = function() {
						for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
						u.on(n).unsubscribe(i), r.apply(u, e);
					};
					return u.on(n, i);
				}, this.on.ready.subscribe = Y(this.on.ready.subscribe, function(i) {
					return function(n, r) {
						D.vip(function() {
							var t, e = u._state;
							e.openComplete ? (e.dbOpenError || K.resolve().then(n), r && i(n)) : e.onReadyBeingFired ? (e.onReadyBeingFired.push(n), r && i(n)) : (i(n), t = u, r || i(function e() {
								t.on.ready.unsubscribe(n), t.on.ready.unsubscribe(e);
							}));
						});
					};
				}), this.Collection = (o = this, Kt(qt.prototype, function(e, t) {
					this.db = o;
					var n = yt, r = null;
					if (t) try {
						n = t();
					} catch (e) {
						r = e;
					}
					var t = e._ctx, e = t.table, i = e.hook.reading.fire;
					this._ctx = {
						table: e,
						index: t.index,
						isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
						range: n,
						keysOnly: !1,
						dir: "next",
						unique: "",
						algorithm: null,
						filter: null,
						replayFilter: null,
						justLimit: !0,
						isMatch: null,
						offset: 0,
						limit: 1 / 0,
						error: r,
						or: t.or,
						valueMapper: i !== ve ? i : null
					};
				})), this.Table = (r = this, Kt(Ot.prototype, function(e, t, n) {
					this.db = r, this._tx = n, this.name = e, this.schema = t, this.hook = r._allTables[e] ? r._allTables[e].hook : Pt(null, {
						creating: [ge, g],
						reading: [me, ve],
						updating: [_e, g],
						deleting: [we, g]
					});
				})), this.Transaction = (a = this, Kt(Yt.prototype, function(e, t, n, r, i) {
					var o = this;
					"readonly" !== e && t.forEach(function(e) {
						e = null == (e = n[e]) ? void 0 : e.yProps;
						e && (t = t.concat(e.map(function(e) {
							return e.updatesTable;
						})));
					}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = Pt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new K(function(e, t) {
						o._resolve = e, o._reject = t;
					}), this._completion.then(function() {
						o.active = !1, o.on.complete.fire();
					}, function(e) {
						var t = o.active;
						return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), S(e);
					});
				})), this.Version = (n = this, Kt(mn.prototype, function(e) {
					this.db = n, this._cfg = {
						version: e,
						storesSource: null,
						dbschema: {},
						tables: {},
						contentUpgrade: null
					};
				})), this.WhereClause = (i = this, Kt(Lt.prototype, function(e, t, n) {
					if (this.db = i, this._ctx = {
						table: e,
						index: ":id" === t ? null : t,
						or: n
					}, this._cmp = this._ascending = j, this._descending = function(e, t) {
						return j(t, e);
					}, this._max = function(e, t) {
						return 0 < j(e, t) ? e : t;
					}, this._min = function(e, t) {
						return j(e, t) < 0 ? e : t;
					}, this._IDBKeyRange = i._deps.IDBKeyRange, !this._IDBKeyRange) throw new k.MissingAPI();
				})), this.on("versionchange", function(e) {
					0 < e.newVersion ? console.warn("Another connection wants to upgrade database '".concat(u.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(u.name, "'. Closing db now to resume the delete request.")), u.close({ disableAutoOpen: !1 });
				}), this.on("blocked", function(e) {
					!e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('".concat(u.name, "') was blocked")) : console.warn("Upgrade '".concat(u.name, "' blocked by other connection holding version ").concat(e.oldVersion / 10));
				}), this._maxKey = Xt(t.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
					return new u.Transaction(e, t, n, u._options.chromeTransactionDurability, r);
				}, this._fireOnBlocked = function(t) {
					u.on("blocked").fire(t), gn.toArray().filter(function(e) {
						return e.name === u.name && e !== u && !e._state.vcFired;
					}).map(function(e) {
						return e.on("versionchange").fire(t);
					});
				}, this.use(Yn), this.use(nr), this.use(Gn), this.use(Ln), this.use(Vn), new Proxy(this, { get: function(e, t, n) {
					var r;
					return "_vip" === t || ("table" === t ? function(e) {
						return rr(u.table(e), l);
					} : (r = Reflect.get(e, t, n)) instanceof Ot ? rr(r, l) : "tables" === t ? r.map(function(e) {
						return rr(e, l);
					}) : "_createTransaction" === t ? function() {
						return rr(r.apply(this, arguments), l);
					} : r);
				} }));
				this.vip = l, s.forEach(function(e) {
					return e(u);
				});
			}
			var ir, Se = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable", or = (ar.prototype.subscribe = function(e, t, n) {
				return this._subscribe(e && "function" != typeof e ? e : {
					next: e,
					error: t,
					complete: n
				});
			}, ar.prototype[Se] = function() {
				return this;
			}, ar);
			function ar(e) {
				this._subscribe = e;
			}
			try {
				ir = {
					indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB,
					IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange
				};
			} catch (e) {
				ir = {
					indexedDB: null,
					IDBKeyRange: null
				};
			}
			function ur(d) {
				var p, y = !1, e = new or(function(r) {
					var i = ue(d);
					var o, a = !1, u = {}, s = {}, e = {
						get closed() {
							return a;
						},
						unsubscribe: function() {
							a || (a = !0, o && o.abort(), c && Wt.storagemutated.unsubscribe(h));
						}
					}, c = (r.start && r.start(e), !1), l = function() {
						return st(t);
					};
					function f() {
						return Cn(s, u);
					}
					var h = function(e) {
						jn(u, e), f() && l();
					}, t = function() {
						var t, n, e;
						!a && ir.indexedDB && (u = {}, t = {}, o && o.abort(), o = new AbortController(), e = ((e) => {
							var t = $e();
							try {
								i && nt();
								var n = v(d, e);
								return n = i ? n.finally(w) : n;
							} finally {
								t && Qe();
							}
						})(n = {
							subscr: t,
							signal: o.signal,
							requery: l,
							querier: d,
							trans: null
						}), c || (Wt.storagemutated.subscribe(h), c = !0), Promise.resolve(e).then(function(e) {
							y = !0, p = e, a || n.signal.aborted || (f() || (s = t, f()) ? l() : (u = {}, st(function() {
								return !a && r.next && r.next(e);
							})));
						}, function(e) {
							y = !1, ["DatabaseClosedError", "AbortError"].includes(null == e ? void 0 : e.name) || a || st(function() {
								a || r.error && r.error(e);
							});
						}));
					};
					return setTimeout(l, 0), e;
				});
				return e.hasValue = function() {
					return y;
				}, e.getValue = function() {
					return p;
				}, e;
			}
			var sr = y;
			function cr(e) {
				var t = fr;
				try {
					fr = !0, Wt.storagemutated.fire(e), Bn(e, !0);
				} finally {
					fr = t;
				}
			}
			M(sr, _(_({}, e), {
				delete: function(e) {
					return new sr(e, { addons: [] }).delete();
				},
				exists: function(e) {
					return new sr(e, { addons: [] }).open().then(function(e) {
						return e.close(), !0;
					}).catch("NoSuchDatabaseError", function() {
						return !1;
					});
				},
				getDatabaseNames: function(e) {
					try {
						return t = sr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (_n(n) ? Promise.resolve(n.databases()).then(function(e) {
							return e.map(function(e) {
								return e.name;
							}).filter(function(e) {
								return e !== ft;
							});
						}) : wn(n, t).toCollection().primaryKeys()).then(e);
					} catch (e) {
						return S(new k.MissingAPI());
					}
					var t, n;
				},
				defineClass: function() {
					return function(e) {
						a(this, e);
					};
				},
				ignoreTransaction: function(e) {
					return P.trans ? at(P.transless || s, e) : e();
				},
				vip: xn,
				async: function(t) {
					return function() {
						try {
							var e = Nn(t.apply(this, arguments));
							return e && "function" == typeof e.then ? e : K.resolve(e);
						} catch (e) {
							return S(e);
						}
					};
				},
				spawn: function(e, t, n) {
					try {
						var r = Nn(e.apply(n, t || []));
						return r && "function" == typeof r.then ? r : K.resolve(r);
					} catch (e) {
						return S(e);
					}
				},
				currentTransaction: { get: function() {
					return P.trans || null;
				} },
				waitFor: function(e, t) {
					e = K.resolve("function" == typeof e ? sr.ignoreTransaction(e) : e).timeout(t || 6e4);
					return P.trans ? P.trans.waitFor(e) : e;
				},
				Promise: K,
				debug: {
					get: function() {
						return l;
					},
					set: function(e) {
						Oe(e);
					}
				},
				derive: U,
				extend: a,
				props: M,
				override: Y,
				Events: Pt,
				on: Wt,
				liveQuery: ur,
				extendObservabilitySet: jn,
				getByKeyPath: c,
				setByKeyPath: b,
				delByKeyPath: function(t, e) {
					"string" == typeof e ? b(t, e, void 0) : "length" in e && [].map.call(e, function(e) {
						b(t, e, void 0);
					});
				},
				shallowClone: G,
				deepClone: ee,
				getObjectDiff: Un,
				cmp: j,
				asap: Q,
				minKey: -1 / 0,
				addons: [],
				connections: { get: gn.toArray },
				errnames: de,
				dependencies: ir,
				cache: Tn,
				semVer: "4.4.5",
				version: "4.4.5".split(".").map(function(e) {
					return parseInt(e);
				}).reduce(function(e, t, n) {
					return e + t / Math.pow(10, 2 * n);
				})
			})), sr.maxKey = Xt(sr.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (Wt(zt, function(e) {
				fr || (e = new CustomEvent(Vt, { detail: e }), fr = !0, dispatchEvent(e), fr = !1);
			}), addEventListener(Vt, function(e) {
				e = e.detail;
				fr || cr(e);
			}));
			var lr, fr = !1, hr = function() {};
			return "undefined" != typeof BroadcastChannel && ((hr = function() {
				(lr = new BroadcastChannel(Vt)).onmessage = function(e) {
					return e.data && cr(e.data);
				};
			})(), "function" == typeof lr.unref && lr.unref(), Wt(zt, function(e) {
				fr || lr.postMessage(e);
			})), "undefined" != typeof addEventListener && (addEventListener("pagehide", function(e) {
				if (!y.disableBfCache && e.persisted) {
					l && console.debug("Dexie: handling persisted pagehide"), lr?.close();
					for (var t = 0, n = gn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
				}
			}), addEventListener("pageshow", function(e) {
				!y.disableBfCache && e.persisted && (l && console.debug("Dexie: handling persisted pageshow"), hr(), cr({ all: new q(-1 / 0, [[]]) }));
			})), K.rejectionMapper = function(e, t) {
				return !e || e instanceof ce || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ye[e.name] ? e : (t = new ye[e.name](t || e.message, e), "stack" in e && u(t, "stack", { get: function() {
					return this.inner.stack;
				} }), t);
			}, Oe(l), _(y, Object.freeze({
				__proto__: null,
				DEFAULT_MAX_CONNECTIONS: 1e3,
				Dexie: y,
				Entity: mt,
				PropModification: _t,
				RangeSet: q,
				add: function(e) {
					return new _t({ add: e });
				},
				cmp: j,
				default: y,
				liveQuery: ur,
				mergeRanges: Pn,
				rangesOverlap: Kn,
				remove: function(e) {
					return new _t({ remove: e });
				},
				replacePrefix: function(e, t) {
					return new _t({ replacePrefix: [e, t] });
				}
			}), { default: y }), y;
		});
	})))(), 1);
	var DexieSymbol = Symbol.for("Dexie");
	var Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = import_dexie_min.default);
	if (import_dexie_min.default.semVer !== Dexie.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${import_dexie_min.default.semVer} and ${Dexie.semVer}`);
	var { liveQuery, mergeRanges, rangesOverlap, RangeSet, cmp, Entity, PropModification, replacePrefix, add, remove, DexieYProvider: DexieYProvider$1 } = Dexie;
	//#endregion
	//#region node_modules/tslib/tslib.es6.mjs
	/******************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	var extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		return extendStatics(d, b);
	};
	function __extends(d, b) {
		if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
		extendStatics(d, b);
		function __() {
			this.constructor = d;
		}
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	function __awaiter(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P ? value : new P(function(resolve) {
				resolve(value);
			});
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	}
	function __generator(thisArg, body) {
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
		return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (g && (g = 0, op[0] && (_ = 0)), _) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	}
	function __values(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function __read(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	}
	function __spreadArray(to, from, pack) {
		if (pack || arguments.length === 2) {
			for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
				if (!ar) ar = Array.prototype.slice.call(from, 0, i);
				ar[i] = from[i];
			}
		}
		return to.concat(ar || Array.prototype.slice.call(from));
	}
	function __await(v) {
		return this instanceof __await ? (this.v = v, this) : new __await(v);
	}
	function __asyncGenerator(thisArg, _arguments, generator) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var g = generator.apply(thisArg, _arguments || []), i, q = [];
		return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
			return this;
		}, i;
		function awaitReturn(f) {
			return function(v) {
				return Promise.resolve(v).then(f, reject);
			};
		}
		function verb(n, f) {
			if (g[n]) {
				i[n] = function(v) {
					return new Promise(function(a, b) {
						q.push([
							n,
							v,
							a,
							b
						]) > 1 || resume(n, v);
					});
				};
				if (f) i[n] = f(i[n]);
			}
		}
		function resume(n, v) {
			try {
				step(g[n](v));
			} catch (e) {
				settle(q[0][3], e);
			}
		}
		function step(r) {
			r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
		}
		function fulfill(value) {
			resume("next", value);
		}
		function reject(value) {
			resume("throw", value);
		}
		function settle(f, v) {
			if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
		}
	}
	function __asyncValues(o) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var m = o[Symbol.asyncIterator], i;
		return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
			return this;
		}, i);
		function verb(n) {
			i[n] = o[n] && function(v) {
				return new Promise(function(resolve, reject) {
					v = o[n](v), settle(resolve, reject, v.done, v.value);
				});
			};
		}
		function settle(resolve, reject, d, v) {
			Promise.resolve(v).then(function(v) {
				resolve({
					value: v,
					done: d
				});
			}, reject);
		}
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isFunction.js
	function isFunction(value) {
		return typeof value === "function";
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
	function createErrorClass(createImpl) {
		var _super = function(instance) {
			Error.call(instance);
			instance.stack = (/* @__PURE__ */ new Error()).stack;
		};
		var ctorFunc = createImpl(_super);
		ctorFunc.prototype = Object.create(Error.prototype);
		ctorFunc.prototype.constructor = ctorFunc;
		return ctorFunc;
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
	var UnsubscriptionError = createErrorClass(function(_super) {
		return function UnsubscriptionErrorImpl(errors) {
			_super(this);
			this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
				return i + 1 + ") " + err.toString();
			}).join("\n  ") : "";
			this.name = "UnsubscriptionError";
			this.errors = errors;
		};
	});
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
	function arrRemove(arr, item) {
		if (arr) {
			var index = arr.indexOf(item);
			0 <= index && arr.splice(index, 1);
		}
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
	var Subscription = function() {
		function Subscription(initialTeardown) {
			this.initialTeardown = initialTeardown;
			this.closed = false;
			this._parentage = null;
			this._finalizers = null;
		}
		Subscription.prototype.unsubscribe = function() {
			var e_1, _a, e_2, _b;
			var errors;
			if (!this.closed) {
				this.closed = true;
				var _parentage = this._parentage;
				if (_parentage) {
					this._parentage = null;
					if (Array.isArray(_parentage)) try {
						for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) _parentage_1_1.value.remove(this);
					} catch (e_1_1) {
						e_1 = { error: e_1_1 };
					} finally {
						try {
							if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
						} finally {
							if (e_1) throw e_1.error;
						}
					}
					else _parentage.remove(this);
				}
				var initialFinalizer = this.initialTeardown;
				if (isFunction(initialFinalizer)) try {
					initialFinalizer();
				} catch (e) {
					errors = e instanceof UnsubscriptionError ? e.errors : [e];
				}
				var _finalizers = this._finalizers;
				if (_finalizers) {
					this._finalizers = null;
					try {
						for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
							var finalizer = _finalizers_1_1.value;
							try {
								execFinalizer(finalizer);
							} catch (err) {
								errors = errors !== null && errors !== void 0 ? errors : [];
								if (err instanceof UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
								else errors.push(err);
							}
						}
					} catch (e_2_1) {
						e_2 = { error: e_2_1 };
					} finally {
						try {
							if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
						} finally {
							if (e_2) throw e_2.error;
						}
					}
				}
				if (errors) throw new UnsubscriptionError(errors);
			}
		};
		Subscription.prototype.add = function(teardown) {
			var _a;
			if (teardown && teardown !== this) {
				if (this.closed) execFinalizer(teardown);
				else {
					if (teardown instanceof Subscription) {
						if (teardown.closed || teardown._hasParent(this)) return;
						teardown._addParent(this);
					}
					(this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
				}
			}
		};
		Subscription.prototype._hasParent = function(parent) {
			var _parentage = this._parentage;
			return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
		};
		Subscription.prototype._addParent = function(parent) {
			var _parentage = this._parentage;
			this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
		};
		Subscription.prototype._removeParent = function(parent) {
			var _parentage = this._parentage;
			if (_parentage === parent) this._parentage = null;
			else if (Array.isArray(_parentage)) arrRemove(_parentage, parent);
		};
		Subscription.prototype.remove = function(teardown) {
			var _finalizers = this._finalizers;
			_finalizers && arrRemove(_finalizers, teardown);
			if (teardown instanceof Subscription) teardown._removeParent(this);
		};
		Subscription.EMPTY = (function() {
			var empty = new Subscription();
			empty.closed = true;
			return empty;
		})();
		return Subscription;
	}();
	var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
	function isSubscription(value) {
		return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
	}
	function execFinalizer(finalizer) {
		if (isFunction(finalizer)) finalizer();
		else finalizer.unsubscribe();
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/config.js
	var config = {
		onUnhandledError: null,
		onStoppedNotification: null,
		Promise: void 0,
		useDeprecatedSynchronousErrorHandling: false,
		useDeprecatedNextContext: false
	};
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
	var timeoutProvider = {
		setTimeout: function(handler, timeout) {
			var args = [];
			for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
			var delegate = timeoutProvider.delegate;
			if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
			return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
		},
		clearTimeout: function(handle) {
			var delegate = timeoutProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
		},
		delegate: void 0
	};
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
	function reportUnhandledError(err) {
		timeoutProvider.setTimeout(function() {
			var onUnhandledError = config.onUnhandledError;
			if (onUnhandledError) onUnhandledError(err);
			else throw err;
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
	function noop() {}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
	var COMPLETE_NOTIFICATION = (function() {
		return createNotification("C", void 0, void 0);
	})();
	function errorNotification(error) {
		return createNotification("E", void 0, error);
	}
	function nextNotification(value) {
		return createNotification("N", value, void 0);
	}
	function createNotification(kind, value, error) {
		return {
			kind,
			value,
			error
		};
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
	var context = null;
	function errorContext(cb) {
		if (config.useDeprecatedSynchronousErrorHandling) {
			var isRoot = !context;
			if (isRoot) context = {
				errorThrown: false,
				error: null
			};
			cb();
			if (isRoot) {
				var _a = context, errorThrown = _a.errorThrown, error = _a.error;
				context = null;
				if (errorThrown) throw error;
			}
		} else cb();
	}
	function captureError(err) {
		if (config.useDeprecatedSynchronousErrorHandling && context) {
			context.errorThrown = true;
			context.error = err;
		}
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
	var Subscriber = function(_super) {
		__extends(Subscriber, _super);
		function Subscriber(destination) {
			var _this = _super.call(this) || this;
			_this.isStopped = false;
			if (destination) {
				_this.destination = destination;
				if (isSubscription(destination)) destination.add(_this);
			} else _this.destination = EMPTY_OBSERVER;
			return _this;
		}
		Subscriber.create = function(next, error, complete) {
			return new SafeSubscriber(next, error, complete);
		};
		Subscriber.prototype.next = function(value) {
			if (this.isStopped) handleStoppedNotification(nextNotification(value), this);
			else this._next(value);
		};
		Subscriber.prototype.error = function(err) {
			if (this.isStopped) handleStoppedNotification(errorNotification(err), this);
			else {
				this.isStopped = true;
				this._error(err);
			}
		};
		Subscriber.prototype.complete = function() {
			if (this.isStopped) handleStoppedNotification(COMPLETE_NOTIFICATION, this);
			else {
				this.isStopped = true;
				this._complete();
			}
		};
		Subscriber.prototype.unsubscribe = function() {
			if (!this.closed) {
				this.isStopped = true;
				_super.prototype.unsubscribe.call(this);
				this.destination = null;
			}
		};
		Subscriber.prototype._next = function(value) {
			this.destination.next(value);
		};
		Subscriber.prototype._error = function(err) {
			try {
				this.destination.error(err);
			} finally {
				this.unsubscribe();
			}
		};
		Subscriber.prototype._complete = function() {
			try {
				this.destination.complete();
			} finally {
				this.unsubscribe();
			}
		};
		return Subscriber;
	}(Subscription);
	var _bind = Function.prototype.bind;
	function bind(fn, thisArg) {
		return _bind.call(fn, thisArg);
	}
	var ConsumerObserver = function() {
		function ConsumerObserver(partialObserver) {
			this.partialObserver = partialObserver;
		}
		ConsumerObserver.prototype.next = function(value) {
			var partialObserver = this.partialObserver;
			if (partialObserver.next) try {
				partialObserver.next(value);
			} catch (error) {
				handleUnhandledError(error);
			}
		};
		ConsumerObserver.prototype.error = function(err) {
			var partialObserver = this.partialObserver;
			if (partialObserver.error) try {
				partialObserver.error(err);
			} catch (error) {
				handleUnhandledError(error);
			}
			else handleUnhandledError(err);
		};
		ConsumerObserver.prototype.complete = function() {
			var partialObserver = this.partialObserver;
			if (partialObserver.complete) try {
				partialObserver.complete();
			} catch (error) {
				handleUnhandledError(error);
			}
		};
		return ConsumerObserver;
	}();
	var SafeSubscriber = function(_super) {
		__extends(SafeSubscriber, _super);
		function SafeSubscriber(observerOrNext, error, complete) {
			var _this = _super.call(this) || this;
			var partialObserver;
			if (isFunction(observerOrNext) || !observerOrNext) partialObserver = {
				next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
				error: error !== null && error !== void 0 ? error : void 0,
				complete: complete !== null && complete !== void 0 ? complete : void 0
			};
			else {
				var context_1;
				if (_this && config.useDeprecatedNextContext) {
					context_1 = Object.create(observerOrNext);
					context_1.unsubscribe = function() {
						return _this.unsubscribe();
					};
					partialObserver = {
						next: observerOrNext.next && bind(observerOrNext.next, context_1),
						error: observerOrNext.error && bind(observerOrNext.error, context_1),
						complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
					};
				} else partialObserver = observerOrNext;
			}
			_this.destination = new ConsumerObserver(partialObserver);
			return _this;
		}
		return SafeSubscriber;
	}(Subscriber);
	function handleUnhandledError(error) {
		if (config.useDeprecatedSynchronousErrorHandling) captureError(error);
		else reportUnhandledError(error);
	}
	function defaultErrorHandler(err) {
		throw err;
	}
	function handleStoppedNotification(notification, subscriber) {
		var onStoppedNotification = config.onStoppedNotification;
		onStoppedNotification && timeoutProvider.setTimeout(function() {
			return onStoppedNotification(notification, subscriber);
		});
	}
	var EMPTY_OBSERVER = {
		closed: true,
		next: noop,
		error: defaultErrorHandler,
		complete: noop
	};
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/symbol/observable.js
	var observable = (function() {
		return typeof Symbol === "function" && Symbol.observable || "@@observable";
	})();
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
	function identity(x) {
		return x;
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
	function pipeFromArray(fns) {
		if (fns.length === 0) return identity;
		if (fns.length === 1) return fns[0];
		return function piped(input) {
			return fns.reduce(function(prev, fn) {
				return fn(prev);
			}, input);
		};
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/Observable.js
	var Observable$1 = function() {
		function Observable(subscribe) {
			if (subscribe) this._subscribe = subscribe;
		}
		Observable.prototype.lift = function(operator) {
			var observable = new Observable();
			observable.source = this;
			observable.operator = operator;
			return observable;
		};
		Observable.prototype.subscribe = function(observerOrNext, error, complete) {
			var _this = this;
			var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
			errorContext(function() {
				var _a = _this, operator = _a.operator, source = _a.source;
				subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
			});
			return subscriber;
		};
		Observable.prototype._trySubscribe = function(sink) {
			try {
				return this._subscribe(sink);
			} catch (err) {
				sink.error(err);
			}
		};
		Observable.prototype.forEach = function(next, promiseCtor) {
			var _this = this;
			promiseCtor = getPromiseCtor(promiseCtor);
			return new promiseCtor(function(resolve, reject) {
				var subscriber = new SafeSubscriber({
					next: function(value) {
						try {
							next(value);
						} catch (err) {
							reject(err);
							subscriber.unsubscribe();
						}
					},
					error: reject,
					complete: resolve
				});
				_this.subscribe(subscriber);
			});
		};
		Observable.prototype._subscribe = function(subscriber) {
			var _a;
			return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
		};
		Observable.prototype[observable] = function() {
			return this;
		};
		Observable.prototype.pipe = function() {
			var operations = [];
			for (var _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
			return pipeFromArray(operations)(this);
		};
		Observable.prototype.toPromise = function(promiseCtor) {
			var _this = this;
			promiseCtor = getPromiseCtor(promiseCtor);
			return new promiseCtor(function(resolve, reject) {
				var value;
				_this.subscribe(function(x) {
					return value = x;
				}, function(err) {
					return reject(err);
				}, function() {
					return resolve(value);
				});
			});
		};
		Observable.create = function(subscribe) {
			return new Observable(subscribe);
		};
		return Observable;
	}();
	function getPromiseCtor(promiseCtor) {
		var _a;
		return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
	}
	function isObserver(value) {
		return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
	}
	function isSubscriber(value) {
		return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
	function hasLift(source) {
		return isFunction(source === null || source === void 0 ? void 0 : source.lift);
	}
	function operate(init) {
		return function(source) {
			if (hasLift(source)) return source.lift(function(liftedSource) {
				try {
					return init(liftedSource, this);
				} catch (err) {
					this.error(err);
				}
			});
			throw new TypeError("Unable to lift unknown Observable type");
		};
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
	function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
		return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
	}
	var OperatorSubscriber = function(_super) {
		__extends(OperatorSubscriber, _super);
		function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
			var _this = _super.call(this, destination) || this;
			_this.onFinalize = onFinalize;
			_this.shouldUnsubscribe = shouldUnsubscribe;
			_this._next = onNext ? function(value) {
				try {
					onNext(value);
				} catch (err) {
					destination.error(err);
				}
			} : _super.prototype._next;
			_this._error = onError ? function(err) {
				try {
					onError(err);
				} catch (err) {
					destination.error(err);
				} finally {
					this.unsubscribe();
				}
			} : _super.prototype._error;
			_this._complete = onComplete ? function() {
				try {
					onComplete();
				} catch (err) {
					destination.error(err);
				} finally {
					this.unsubscribe();
				}
			} : _super.prototype._complete;
			return _this;
		}
		OperatorSubscriber.prototype.unsubscribe = function() {
			var _a;
			if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
				var closed_1 = this.closed;
				_super.prototype.unsubscribe.call(this);
				!closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
			}
		};
		return OperatorSubscriber;
	}(Subscriber);
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
	var ObjectUnsubscribedError = createErrorClass(function(_super) {
		return function ObjectUnsubscribedErrorImpl() {
			_super(this);
			this.name = "ObjectUnsubscribedError";
			this.message = "object unsubscribed";
		};
	});
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/Subject.js
	var Subject = function(_super) {
		__extends(Subject, _super);
		function Subject() {
			var _this = _super.call(this) || this;
			_this.closed = false;
			_this.currentObservers = null;
			_this.observers = [];
			_this.isStopped = false;
			_this.hasError = false;
			_this.thrownError = null;
			return _this;
		}
		Subject.prototype.lift = function(operator) {
			var subject = new AnonymousSubject(this, this);
			subject.operator = operator;
			return subject;
		};
		Subject.prototype._throwIfClosed = function() {
			if (this.closed) throw new ObjectUnsubscribedError();
		};
		Subject.prototype.next = function(value) {
			var _this = this;
			errorContext(function() {
				var e_1, _a;
				_this._throwIfClosed();
				if (!_this.isStopped) {
					if (!_this.currentObservers) _this.currentObservers = Array.from(_this.observers);
					try {
						for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) _c.value.next(value);
					} catch (e_1_1) {
						e_1 = { error: e_1_1 };
					} finally {
						try {
							if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
						} finally {
							if (e_1) throw e_1.error;
						}
					}
				}
			});
		};
		Subject.prototype.error = function(err) {
			var _this = this;
			errorContext(function() {
				_this._throwIfClosed();
				if (!_this.isStopped) {
					_this.hasError = _this.isStopped = true;
					_this.thrownError = err;
					var observers = _this.observers;
					while (observers.length) observers.shift().error(err);
				}
			});
		};
		Subject.prototype.complete = function() {
			var _this = this;
			errorContext(function() {
				_this._throwIfClosed();
				if (!_this.isStopped) {
					_this.isStopped = true;
					var observers = _this.observers;
					while (observers.length) observers.shift().complete();
				}
			});
		};
		Subject.prototype.unsubscribe = function() {
			this.isStopped = this.closed = true;
			this.observers = this.currentObservers = null;
		};
		Object.defineProperty(Subject.prototype, "observed", {
			get: function() {
				var _a;
				return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
			},
			enumerable: false,
			configurable: true
		});
		Subject.prototype._trySubscribe = function(subscriber) {
			this._throwIfClosed();
			return _super.prototype._trySubscribe.call(this, subscriber);
		};
		Subject.prototype._subscribe = function(subscriber) {
			this._throwIfClosed();
			this._checkFinalizedStatuses(subscriber);
			return this._innerSubscribe(subscriber);
		};
		Subject.prototype._innerSubscribe = function(subscriber) {
			var _this = this;
			var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
			if (hasError || isStopped) return EMPTY_SUBSCRIPTION;
			this.currentObservers = null;
			observers.push(subscriber);
			return new Subscription(function() {
				_this.currentObservers = null;
				arrRemove(observers, subscriber);
			});
		};
		Subject.prototype._checkFinalizedStatuses = function(subscriber) {
			var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
			if (hasError) subscriber.error(thrownError);
			else if (isStopped) subscriber.complete();
		};
		Subject.prototype.asObservable = function() {
			var observable = new Observable$1();
			observable.source = this;
			return observable;
		};
		Subject.create = function(destination, source) {
			return new AnonymousSubject(destination, source);
		};
		return Subject;
	}(Observable$1);
	var AnonymousSubject = function(_super) {
		__extends(AnonymousSubject, _super);
		function AnonymousSubject(destination, source) {
			var _this = _super.call(this) || this;
			_this.destination = destination;
			_this.source = source;
			return _this;
		}
		AnonymousSubject.prototype.next = function(value) {
			var _a, _b;
			(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
		};
		AnonymousSubject.prototype.error = function(err) {
			var _a, _b;
			(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
		};
		AnonymousSubject.prototype.complete = function() {
			var _a, _b;
			(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
		};
		AnonymousSubject.prototype._subscribe = function(subscriber) {
			var _a, _b;
			return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
		};
		return AnonymousSubject;
	}(Subject);
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
	var BehaviorSubject = function(_super) {
		__extends(BehaviorSubject, _super);
		function BehaviorSubject(_value) {
			var _this = _super.call(this) || this;
			_this._value = _value;
			return _this;
		}
		Object.defineProperty(BehaviorSubject.prototype, "value", {
			get: function() {
				return this.getValue();
			},
			enumerable: false,
			configurable: true
		});
		BehaviorSubject.prototype._subscribe = function(subscriber) {
			var subscription = _super.prototype._subscribe.call(this, subscriber);
			!subscription.closed && subscriber.next(this._value);
			return subscription;
		};
		BehaviorSubject.prototype.getValue = function() {
			var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
			if (hasError) throw thrownError;
			this._throwIfClosed();
			return _value;
		};
		BehaviorSubject.prototype.next = function(value) {
			_super.prototype.next.call(this, this._value = value);
		};
		return BehaviorSubject;
	}(Subject);
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
	var dateTimestampProvider = {
		now: function() {
			return (dateTimestampProvider.delegate || Date).now();
		},
		delegate: void 0
	};
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
	var Action = function(_super) {
		__extends(Action, _super);
		function Action(scheduler, work) {
			return _super.call(this) || this;
		}
		Action.prototype.schedule = function(state, delay) {
			if (delay === void 0) delay = 0;
			return this;
		};
		return Action;
	}(Subscription);
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
	var intervalProvider = {
		setInterval: function(handler, timeout) {
			var args = [];
			for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
			var delegate = intervalProvider.delegate;
			if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
			return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
		},
		clearInterval: function(handle) {
			var delegate = intervalProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
		},
		delegate: void 0
	};
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
	var AsyncAction = function(_super) {
		__extends(AsyncAction, _super);
		function AsyncAction(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			_this.pending = false;
			return _this;
		}
		AsyncAction.prototype.schedule = function(state, delay) {
			var _a;
			if (delay === void 0) delay = 0;
			if (this.closed) return this;
			this.state = state;
			var id = this.id;
			var scheduler = this.scheduler;
			if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
			this.pending = true;
			this.delay = delay;
			this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
			return this;
		};
		AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
			if (delay === void 0) delay = 0;
			return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
		};
		AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay != null && this.delay === delay && this.pending === false) return id;
			if (id != null) intervalProvider.clearInterval(id);
		};
		AsyncAction.prototype.execute = function(state, delay) {
			if (this.closed) return /* @__PURE__ */ new Error("executing a cancelled action");
			this.pending = false;
			var error = this._execute(state, delay);
			if (error) return error;
			else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
		};
		AsyncAction.prototype._execute = function(state, _delay) {
			var errored = false;
			var errorValue;
			try {
				this.work(state);
			} catch (e) {
				errored = true;
				errorValue = e ? e : /* @__PURE__ */ new Error("Scheduled action threw falsy error");
			}
			if (errored) {
				this.unsubscribe();
				return errorValue;
			}
		};
		AsyncAction.prototype.unsubscribe = function() {
			if (!this.closed) {
				var _a = this, id = _a.id, scheduler = _a.scheduler;
				var actions = scheduler.actions;
				this.work = this.state = this.scheduler = null;
				this.pending = false;
				arrRemove(actions, this);
				if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
				this.delay = null;
				_super.prototype.unsubscribe.call(this);
			}
		};
		return AsyncAction;
	}(Action);
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/Scheduler.js
	var Scheduler = function() {
		function Scheduler(schedulerActionCtor, now) {
			if (now === void 0) now = Scheduler.now;
			this.schedulerActionCtor = schedulerActionCtor;
			this.now = now;
		}
		Scheduler.prototype.schedule = function(work, delay, state) {
			if (delay === void 0) delay = 0;
			return new this.schedulerActionCtor(this, work).schedule(state, delay);
		};
		Scheduler.now = dateTimestampProvider.now;
		return Scheduler;
	}();
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduler/async.js
	var asyncScheduler = new (function(_super) {
		__extends(AsyncScheduler, _super);
		function AsyncScheduler(SchedulerAction, now) {
			if (now === void 0) now = Scheduler.now;
			var _this = _super.call(this, SchedulerAction, now) || this;
			_this.actions = [];
			_this._active = false;
			return _this;
		}
		AsyncScheduler.prototype.flush = function(action) {
			var actions = this.actions;
			if (this._active) {
				actions.push(action);
				return;
			}
			var error;
			this._active = true;
			do
				if (error = action.execute(action.state, action.delay)) break;
			while (action = actions.shift());
			this._active = false;
			if (error) {
				while (action = actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		return AsyncScheduler;
	}(Scheduler))(AsyncAction);
	var async = asyncScheduler;
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/empty.js
	var EMPTY = new Observable$1(function(subscriber) {
		return subscriber.complete();
	});
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
	function isScheduler(value) {
		return value && isFunction(value.schedule);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/args.js
	function last$1(arr) {
		return arr[arr.length - 1];
	}
	function popResultSelector(args) {
		return isFunction(last$1(args)) ? args.pop() : void 0;
	}
	function popScheduler(args) {
		return isScheduler(last$1(args)) ? args.pop() : void 0;
	}
	function popNumber(args, defaultValue) {
		return typeof last$1(args) === "number" ? args.pop() : defaultValue;
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
	var isArrayLike = (function(x) {
		return x && typeof x.length === "number" && typeof x !== "function";
	});
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
	function isPromise(value) {
		return isFunction(value === null || value === void 0 ? void 0 : value.then);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
	function isInteropObservable(input) {
		return isFunction(input[observable]);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
	function isAsyncIterable(obj) {
		return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
	function createInvalidObservableTypeError(input) {
		return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
	function getSymbolIterator() {
		if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
		return Symbol.iterator;
	}
	var iterator = getSymbolIterator();
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
	function isIterable(input) {
		return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
	function readableStreamLikeToAsyncGenerator(readableStream) {
		return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
			var reader, _a, value, done;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						reader = readableStream.getReader();
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							,
							9,
							10
						]);
						_b.label = 2;
					case 2: return [4, __await(reader.read())];
					case 3:
						_a = _b.sent(), value = _a.value, done = _a.done;
						if (!done) return [3, 5];
						return [4, __await(void 0)];
					case 4: return [2, _b.sent()];
					case 5: return [4, __await(value)];
					case 6: return [4, _b.sent()];
					case 7:
						_b.sent();
						return [3, 2];
					case 8: return [3, 10];
					case 9:
						reader.releaseLock();
						return [7];
					case 10: return [2];
				}
			});
		});
	}
	function isReadableStreamLike(obj) {
		return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
	function innerFrom(input) {
		if (input instanceof Observable$1) return input;
		if (input != null) {
			if (isInteropObservable(input)) return fromInteropObservable(input);
			if (isArrayLike(input)) return fromArrayLike(input);
			if (isPromise(input)) return fromPromise(input);
			if (isAsyncIterable(input)) return fromAsyncIterable(input);
			if (isIterable(input)) return fromIterable(input);
			if (isReadableStreamLike(input)) return fromReadableStreamLike(input);
		}
		throw createInvalidObservableTypeError(input);
	}
	function fromInteropObservable(obj) {
		return new Observable$1(function(subscriber) {
			var obs = obj[observable]();
			if (isFunction(obs.subscribe)) return obs.subscribe(subscriber);
			throw new TypeError("Provided object does not correctly implement Symbol.observable");
		});
	}
	function fromArrayLike(array) {
		return new Observable$1(function(subscriber) {
			for (var i = 0; i < array.length && !subscriber.closed; i++) subscriber.next(array[i]);
			subscriber.complete();
		});
	}
	function fromPromise(promise) {
		return new Observable$1(function(subscriber) {
			promise.then(function(value) {
				if (!subscriber.closed) {
					subscriber.next(value);
					subscriber.complete();
				}
			}, function(err) {
				return subscriber.error(err);
			}).then(null, reportUnhandledError);
		});
	}
	function fromIterable(iterable) {
		return new Observable$1(function(subscriber) {
			var e_1, _a;
			try {
				for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
					var value = iterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return;
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
			subscriber.complete();
		});
	}
	function fromAsyncIterable(asyncIterable) {
		return new Observable$1(function(subscriber) {
			process$1(asyncIterable, subscriber).catch(function(err) {
				return subscriber.error(err);
			});
		});
	}
	function fromReadableStreamLike(readableStream) {
		return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
	}
	function process$1(asyncIterable, subscriber) {
		var asyncIterable_1, asyncIterable_1_1;
		var e_2, _a;
		return __awaiter(this, void 0, void 0, function() {
			var value, e_2_1;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						_b.trys.push([
							0,
							5,
							6,
							11
						]);
						asyncIterable_1 = __asyncValues(asyncIterable);
						_b.label = 1;
					case 1: return [4, asyncIterable_1.next()];
					case 2:
						if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
						value = asyncIterable_1_1.value;
						subscriber.next(value);
						if (subscriber.closed) return [2];
						_b.label = 3;
					case 3: return [3, 1];
					case 4: return [3, 11];
					case 5:
						e_2_1 = _b.sent();
						e_2 = { error: e_2_1 };
						return [3, 11];
					case 6:
						_b.trys.push([
							6,
							,
							9,
							10
						]);
						if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
						return [4, _a.call(asyncIterable_1)];
					case 7:
						_b.sent();
						_b.label = 8;
					case 8: return [3, 10];
					case 9:
						if (e_2) throw e_2.error;
						return [7];
					case 10: return [7];
					case 11:
						subscriber.complete();
						return [2];
				}
			});
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
	function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
		if (delay === void 0) delay = 0;
		if (repeat === void 0) repeat = false;
		var scheduleSubscription = scheduler.schedule(function() {
			work();
			if (repeat) parentSubscription.add(this.schedule(null, delay));
			else this.unsubscribe();
		}, delay);
		parentSubscription.add(scheduleSubscription);
		if (!repeat) return scheduleSubscription;
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
	function observeOn(scheduler, delay) {
		if (delay === void 0) delay = 0;
		return operate(function(source, subscriber) {
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				return executeSchedule(subscriber, scheduler, function() {
					return subscriber.next(value);
				}, delay);
			}, function() {
				return executeSchedule(subscriber, scheduler, function() {
					return subscriber.complete();
				}, delay);
			}, function(err) {
				return executeSchedule(subscriber, scheduler, function() {
					return subscriber.error(err);
				}, delay);
			}));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
	function subscribeOn(scheduler, delay) {
		if (delay === void 0) delay = 0;
		return operate(function(source, subscriber) {
			subscriber.add(scheduler.schedule(function() {
				return source.subscribe(subscriber);
			}, delay));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
	function scheduleObservable(input, scheduler) {
		return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
	function schedulePromise(input, scheduler) {
		return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
	function scheduleArray(input, scheduler) {
		return new Observable$1(function(subscriber) {
			var i = 0;
			return scheduler.schedule(function() {
				if (i === input.length) subscriber.complete();
				else {
					subscriber.next(input[i++]);
					if (!subscriber.closed) this.schedule();
				}
			});
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
	function scheduleIterable(input, scheduler) {
		return new Observable$1(function(subscriber) {
			var iterator$1;
			executeSchedule(subscriber, scheduler, function() {
				iterator$1 = input[iterator]();
				executeSchedule(subscriber, scheduler, function() {
					var _a;
					var value;
					var done;
					try {
						_a = iterator$1.next(), value = _a.value, done = _a.done;
					} catch (err) {
						subscriber.error(err);
						return;
					}
					if (done) subscriber.complete();
					else subscriber.next(value);
				}, 0, true);
			});
			return function() {
				return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
			};
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
	function scheduleAsyncIterable(input, scheduler) {
		if (!input) throw new Error("Iterable cannot be null");
		return new Observable$1(function(subscriber) {
			executeSchedule(subscriber, scheduler, function() {
				var iterator = input[Symbol.asyncIterator]();
				executeSchedule(subscriber, scheduler, function() {
					iterator.next().then(function(result) {
						if (result.done) subscriber.complete();
						else subscriber.next(result.value);
					});
				}, 0, true);
			});
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
	function scheduleReadableStreamLike(input, scheduler) {
		return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
	function scheduled(input, scheduler) {
		if (input != null) {
			if (isInteropObservable(input)) return scheduleObservable(input, scheduler);
			if (isArrayLike(input)) return scheduleArray(input, scheduler);
			if (isPromise(input)) return schedulePromise(input, scheduler);
			if (isAsyncIterable(input)) return scheduleAsyncIterable(input, scheduler);
			if (isIterable(input)) return scheduleIterable(input, scheduler);
			if (isReadableStreamLike(input)) return scheduleReadableStreamLike(input, scheduler);
		}
		throw createInvalidObservableTypeError(input);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
	function from$1(input, scheduler) {
		return scheduler ? scheduled(input, scheduler) : innerFrom(input);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
	function of() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return from$1(args, popScheduler(args));
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/throwError.js
	function throwError(errorOrErrorFactory, scheduler) {
		var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
			return errorOrErrorFactory;
		};
		var init = function(subscriber) {
			return subscriber.error(errorFactory());
		};
		return new Observable$1(scheduler ? function(subscriber) {
			return scheduler.schedule(init, 0, subscriber);
		} : init);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
	var EmptyError = createErrorClass(function(_super) {
		return function EmptyErrorImpl() {
			_super(this);
			this.name = "EmptyError";
			this.message = "no elements in sequence";
		};
	});
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
	function firstValueFrom(source, config) {
		var hasConfig = typeof config === "object";
		return new Promise(function(resolve, reject) {
			var subscriber = new SafeSubscriber({
				next: function(value) {
					resolve(value);
					subscriber.unsubscribe();
				},
				error: reject,
				complete: function() {
					if (hasConfig) resolve(config.defaultValue);
					else reject(new EmptyError());
				}
			});
			source.subscribe(subscriber);
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
	function isValidDate(value) {
		return value instanceof Date && !isNaN(value);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/map.js
	function map$1(project, thisArg) {
		return operate(function(source, subscriber) {
			var index = 0;
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				subscriber.next(project.call(thisArg, value, index++));
			}));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
	var isArray$2 = Array.isArray;
	function callOrApply(fn, args) {
		return isArray$2(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
	}
	function mapOneOrManyArgs(fn) {
		return map$1(function(args) {
			return callOrApply(fn, args);
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
	var isArray$1 = Array.isArray;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectProto = Object.prototype;
	var getKeys = Object.keys;
	function argsArgArrayOrObject(args) {
		if (args.length === 1) {
			var first_1 = args[0];
			if (isArray$1(first_1)) return {
				args: first_1,
				keys: null
			};
			if (isPOJO(first_1)) {
				var keys = getKeys(first_1);
				return {
					args: keys.map(function(key) {
						return first_1[key];
					}),
					keys
				};
			}
		}
		return {
			args,
			keys: null
		};
	}
	function isPOJO(obj) {
		return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/util/createObject.js
	function createObject(keys, values) {
		return keys.reduce(function(result, key, i) {
			return result[key] = values[i], result;
		}, {});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
	function combineLatest() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = popScheduler(args);
		var resultSelector = popResultSelector(args);
		var _a = argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
		if (observables.length === 0) return from$1([], scheduler);
		var result = new Observable$1(combineLatestInit(observables, scheduler, keys ? function(values) {
			return createObject(keys, values);
		} : identity));
		return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
	}
	function combineLatestInit(observables, scheduler, valueTransform) {
		if (valueTransform === void 0) valueTransform = identity;
		return function(subscriber) {
			maybeSchedule(scheduler, function() {
				var length = observables.length;
				var values = new Array(length);
				var active = length;
				var remainingFirstValues = length;
				var _loop_1 = function(i) {
					maybeSchedule(scheduler, function() {
						var source = from$1(observables[i], scheduler);
						var hasFirstValue = false;
						source.subscribe(createOperatorSubscriber(subscriber, function(value) {
							values[i] = value;
							if (!hasFirstValue) {
								hasFirstValue = true;
								remainingFirstValues--;
							}
							if (!remainingFirstValues) subscriber.next(valueTransform(values.slice()));
						}, function() {
							if (!--active) subscriber.complete();
						}));
					}, subscriber);
				};
				for (var i = 0; i < length; i++) _loop_1(i);
			}, subscriber);
		};
	}
	function maybeSchedule(scheduler, execute, subscription) {
		if (scheduler) executeSchedule(subscription, scheduler, execute);
		else execute();
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
	function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
		var buffer = [];
		var active = 0;
		var index = 0;
		var isComplete = false;
		var checkComplete = function() {
			if (isComplete && !buffer.length && !active) subscriber.complete();
		};
		var outerNext = function(value) {
			return active < concurrent ? doInnerSub(value) : buffer.push(value);
		};
		var doInnerSub = function(value) {
			expand && subscriber.next(value);
			active++;
			var innerComplete = false;
			innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
				onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
				if (expand) outerNext(innerValue);
				else subscriber.next(innerValue);
			}, function() {
				innerComplete = true;
			}, void 0, function() {
				if (innerComplete) try {
					active--;
					var _loop_1 = function() {
						var bufferedValue = buffer.shift();
						if (innerSubScheduler) executeSchedule(subscriber, innerSubScheduler, function() {
							return doInnerSub(bufferedValue);
						});
						else doInnerSub(bufferedValue);
					};
					while (buffer.length && active < concurrent) _loop_1();
					checkComplete();
				} catch (err) {
					subscriber.error(err);
				}
			}));
		};
		source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
			isComplete = true;
			checkComplete();
		}));
		return function() {
			additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
		};
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
	function mergeMap(project, resultSelector, concurrent) {
		if (concurrent === void 0) concurrent = Infinity;
		if (isFunction(resultSelector)) return mergeMap(function(a, i) {
			return map$1(function(b, ii) {
				return resultSelector(a, b, i, ii);
			})(innerFrom(project(a, i)));
		}, concurrent);
		else if (typeof resultSelector === "number") concurrent = resultSelector;
		return operate(function(source, subscriber) {
			return mergeInternals(source, subscriber, project, concurrent);
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
	function mergeAll(concurrent) {
		if (concurrent === void 0) concurrent = Infinity;
		return mergeMap(identity, concurrent);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
	function concatAll() {
		return mergeAll(1);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/concat.js
	function concat() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return concatAll()(from$1(args, popScheduler(args)));
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
	var nodeEventEmitterMethods = ["addListener", "removeListener"];
	var eventTargetMethods = ["addEventListener", "removeEventListener"];
	var jqueryMethods = ["on", "off"];
	function fromEvent(target, eventName, options, resultSelector) {
		if (isFunction(options)) {
			resultSelector = options;
			options = void 0;
		}
		if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
		var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
			return function(handler) {
				return target[methodName](eventName, handler, options);
			};
		}) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
		if (!add) {
			if (isArrayLike(target)) return mergeMap(function(subTarget) {
				return fromEvent(subTarget, eventName, options);
			})(innerFrom(target));
		}
		if (!add) throw new TypeError("Invalid event target");
		return new Observable$1(function(subscriber) {
			var handler = function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				return subscriber.next(1 < args.length ? args : args[0]);
			};
			add(handler);
			return function() {
				return remove(handler);
			};
		});
	}
	function toCommonHandlerRegistry(target, eventName) {
		return function(methodName) {
			return function(handler) {
				return target[methodName](eventName, handler);
			};
		};
	}
	function isNodeStyleEventEmitter(target) {
		return isFunction(target.addListener) && isFunction(target.removeListener);
	}
	function isJQueryStyleEventEmitter(target) {
		return isFunction(target.on) && isFunction(target.off);
	}
	function isEventTarget(target) {
		return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
	function timer(dueTime, intervalOrScheduler, scheduler) {
		if (dueTime === void 0) dueTime = 0;
		if (scheduler === void 0) scheduler = async;
		var intervalDuration = -1;
		if (intervalOrScheduler != null) {
			if (isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
			else intervalDuration = intervalOrScheduler;
		}
		return new Observable$1(function(subscriber) {
			var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
			if (due < 0) due = 0;
			var n = 0;
			return scheduler.schedule(function() {
				if (!subscriber.closed) {
					subscriber.next(n++);
					if (0 <= intervalDuration) this.schedule(void 0, intervalDuration);
					else subscriber.complete();
				}
			}, due);
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/observable/merge.js
	function merge() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = popScheduler(args);
		var concurrent = popNumber(args, Infinity);
		var sources = args;
		return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from$1(sources, scheduler));
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
	function filter(predicate, thisArg) {
		return operate(function(source, subscriber) {
			var index = 0;
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				return predicate.call(thisArg, value, index++) && subscriber.next(value);
			}));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/catchError.js
	function catchError(selector) {
		return operate(function(source, subscriber) {
			var innerSub = null;
			var syncUnsub = false;
			var handledResult;
			innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
				handledResult = innerFrom(selector(err, catchError(selector)(source)));
				if (innerSub) {
					innerSub.unsubscribe();
					innerSub = null;
					handledResult.subscribe(subscriber);
				} else syncUnsub = true;
			}));
			if (syncUnsub) {
				innerSub.unsubscribe();
				innerSub = null;
				handledResult.subscribe(subscriber);
			}
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
	function debounceTime(dueTime, scheduler) {
		if (scheduler === void 0) scheduler = asyncScheduler;
		return operate(function(source, subscriber) {
			var activeTask = null;
			var lastValue = null;
			var lastTime = null;
			var emit = function() {
				if (activeTask) {
					activeTask.unsubscribe();
					activeTask = null;
					var value = lastValue;
					lastValue = null;
					subscriber.next(value);
				}
			};
			function emitWhenIdle() {
				var targetTime = lastTime + dueTime;
				var now = scheduler.now();
				if (now < targetTime) {
					activeTask = this.schedule(void 0, targetTime - now);
					subscriber.add(activeTask);
					return;
				}
				emit();
			}
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				lastValue = value;
				lastTime = scheduler.now();
				if (!activeTask) {
					activeTask = scheduler.schedule(emitWhenIdle, dueTime);
					subscriber.add(activeTask);
				}
			}, function() {
				emit();
				subscriber.complete();
			}, void 0, function() {
				lastValue = activeTask = null;
			}));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/take.js
	function take(count) {
		return count <= 0 ? function() {
			return EMPTY;
		} : operate(function(source, subscriber) {
			var seen = 0;
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				if (++seen <= count) {
					subscriber.next(value);
					if (count <= seen) subscriber.complete();
				}
			}));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
	function ignoreElements() {
		return operate(function(source, subscriber) {
			source.subscribe(createOperatorSubscriber(subscriber, noop));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
	function mapTo(value) {
		return map$1(function() {
			return value;
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
	function delayWhen(delayDurationSelector, subscriptionDelay) {
		if (subscriptionDelay) return function(source) {
			return concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
		};
		return mergeMap(function(value, index) {
			return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/delay.js
	function delay(due, scheduler) {
		if (scheduler === void 0) scheduler = asyncScheduler;
		var duration = timer(due, scheduler);
		return delayWhen(function() {
			return duration;
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
	function distinctUntilChanged(comparator, keySelector) {
		if (keySelector === void 0) keySelector = identity;
		comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
		return operate(function(source, subscriber) {
			var previousKey;
			var first = true;
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				var currentKey = keySelector(value);
				if (first || !comparator(previousKey, currentKey)) {
					first = false;
					previousKey = currentKey;
					subscriber.next(value);
				}
			}));
		});
	}
	function defaultCompare(a, b) {
		return a === b;
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
	function share(options) {
		if (options === void 0) options = {};
		var _a = options.connector, connector = _a === void 0 ? function() {
			return new Subject();
		} : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
		return function(wrapperSource) {
			var connection;
			var resetConnection;
			var subject;
			var refCount = 0;
			var hasCompleted = false;
			var hasErrored = false;
			var cancelReset = function() {
				resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
				resetConnection = void 0;
			};
			var reset = function() {
				cancelReset();
				connection = subject = void 0;
				hasCompleted = hasErrored = false;
			};
			var resetAndUnsubscribe = function() {
				var conn = connection;
				reset();
				conn === null || conn === void 0 || conn.unsubscribe();
			};
			return operate(function(source, subscriber) {
				refCount++;
				if (!hasErrored && !hasCompleted) cancelReset();
				var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
				subscriber.add(function() {
					refCount--;
					if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
				});
				dest.subscribe(subscriber);
				if (!connection && refCount > 0) {
					connection = new SafeSubscriber({
						next: function(value) {
							return dest.next(value);
						},
						error: function(err) {
							hasErrored = true;
							cancelReset();
							resetConnection = handleReset(reset, resetOnError, err);
							dest.error(err);
						},
						complete: function() {
							hasCompleted = true;
							cancelReset();
							resetConnection = handleReset(reset, resetOnComplete);
							dest.complete();
						}
					});
					innerFrom(source).subscribe(connection);
				}
			})(wrapperSource);
		};
	}
	function handleReset(reset, on) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		if (on === true) {
			reset();
			return;
		}
		if (on === false) return;
		var onSubscriber = new SafeSubscriber({ next: function() {
			onSubscriber.unsubscribe();
			reset();
		} });
		return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/skip.js
	function skip(count) {
		return filter(function(_, index) {
			return count <= index;
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/startWith.js
	function startWith() {
		var values = [];
		for (var _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
		var scheduler = popScheduler(values);
		return operate(function(source, subscriber) {
			(scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
	function switchMap(project, resultSelector) {
		return operate(function(source, subscriber) {
			var innerSubscriber = null;
			var index = 0;
			var isComplete = false;
			var checkComplete = function() {
				return isComplete && !innerSubscriber && subscriber.complete();
			};
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
				var innerIndex = 0;
				var outerIndex = index++;
				innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
					return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
				}, function() {
					innerSubscriber = null;
					checkComplete();
				}));
			}, function() {
				isComplete = true;
				checkComplete();
			}));
		});
	}
	//#endregion
	//#region node_modules/rxjs/dist/esm5/internal/operators/tap.js
	function tap(observerOrNext, error, complete) {
		var tapObserver = isFunction(observerOrNext) || error || complete ? {
			next: observerOrNext,
			error,
			complete
		} : observerOrNext;
		return tapObserver ? operate(function(source, subscriber) {
			var _a;
			(_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
			var isUnsub = true;
			source.subscribe(createOperatorSubscriber(subscriber, function(value) {
				var _a;
				(_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
				subscriber.next(value);
			}, function() {
				var _a;
				isUnsub = false;
				(_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
				subscriber.complete();
			}, function(err) {
				var _a;
				isUnsub = false;
				(_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
				subscriber.error(err);
			}, function() {
				var _a, _b;
				if (isUnsub) (_a = tapObserver.unsubscribe) === null || _a === void 0 || _a.call(tapObserver);
				(_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
			}));
		}) : identity;
	}
	//#endregion
	//#region node_modules/lib0/math.js
	/**
	* Common Math expressions.
	*
	* @module math
	*/
	var floor = Math.floor;
	var abs = Math.abs;
	/**
	* @function
	* @param {number} a
	* @param {number} b
	* @return {number} The smaller element of a and b
	*/
	var min = (a, b) => a < b ? a : b;
	/**
	* @function
	* @param {number} a
	* @param {number} b
	* @return {number} The bigger element of a and b
	*/
	var max = (a, b) => a > b ? a : b;
	Number.isNaN;
	/**
	* Check whether n is negative, while considering the -0 edge case. While `-0 < 0` is false, this
	* function returns true for -0,-1,,.. and returns false for 0,1,2,...
	* @param {number} n
	* @return {boolean} Wether n is negative. This function also distinguishes between -0 and +0
	*/
	var isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;
	//#endregion
	//#region node_modules/lib0/number.js
	/**
	* Utility helpers for working with numbers.
	*
	* @module number
	*/
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
	var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
	/* c8 ignore next */
	var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
	Number.isNaN;
	Number.parseInt;
	//#endregion
	//#region node_modules/lib0/set.js
	/**
	* Utility module to work with sets.
	*
	* @module set
	*/
	var create$5 = () => /* @__PURE__ */ new Set();
	//#endregion
	//#region node_modules/lib0/array.js
	/**
	* Return the last element of an array. The element must exist
	*
	* @template L
	* @param {ArrayLike<L>} arr
	* @return {L}
	*/
	var last = (arr) => arr[arr.length - 1];
	/**
	* Append elements from src to dest
	*
	* @template M
	* @param {Array<M>} dest
	* @param {Array<M>} src
	*/
	var appendTo = (dest, src) => {
		for (let i = 0; i < src.length; i++) dest.push(src[i]);
	};
	/**
	* Transforms something array-like to an actual Array.
	*
	* @function
	* @template T
	* @param {ArrayLike<T>|Iterable<T>} arraylike
	* @return {T}
	*/
	var from = Array.from;
	/**
	* True iff condition holds on every element in the Array.
	*
	* @function
	* @template {ArrayLike<any>} ARR
	*
	* @param {ARR} arr
	* @param {ARR extends ArrayLike<infer S> ? ((value:S, index:number, arr:ARR) => boolean) : any} f
	* @return {boolean}
	*/
	var every$1 = (arr, f) => {
		for (let i = 0; i < arr.length; i++) if (!f(arr[i], i, arr)) return false;
		return true;
	};
	/**
	* True iff condition holds on some element in the Array.
	*
	* @function
	* @template {ArrayLike<any>} ARR
	*
	* @param {ARR} arr
	* @param {ARR extends ArrayLike<infer S> ? ((value:S, index:number, arr:ARR) => boolean) : never} f
	* @return {boolean}
	*/
	var some = (arr, f) => {
		for (let i = 0; i < arr.length; i++) if (f(arr[i], i, arr)) return true;
		return false;
	};
	/**
	* @template T
	* @param {number} len
	* @param {function(number, Array<T>):T} f
	* @return {Array<T>}
	*/
	var unfold = (len, f) => {
		const array = new Array(len);
		for (let i = 0; i < len; i++) array[i] = f(i, array);
		return array;
	};
	var isArray = Array.isArray;
	//#endregion
	//#region node_modules/lib0/string.js
	/**
	* Utility module to work with strings.
	*
	* @module string
	*/
	var fromCharCode = String.fromCharCode;
	String.fromCodePoint;
	fromCharCode(65535);
	/**
	* @param {string} s
	* @return {string}
	*/
	var toLowerCase = (s) => s.toLowerCase();
	var trimLeftRegex = /^\s*/g;
	/**
	* @param {string} s
	* @return {string}
	*/
	var trimLeft = (s) => s.replace(trimLeftRegex, "");
	var fromCamelCaseRegex = /([A-Z])/g;
	/**
	* @param {string} s
	* @param {string} separator
	* @return {string}
	*/
	var fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
	/**
	* @param {string} str
	* @return {Uint8Array<ArrayBuffer>}
	*/
	var _encodeUtf8Polyfill = (str) => {
		const encodedString = unescape(encodeURIComponent(str));
		const len = encodedString.length;
		const buf = new Uint8Array(len);
		for (let i = 0; i < len; i++) buf[i] = encodedString.codePointAt(i);
		return buf;
	};
	/* c8 ignore next */
	var utf8TextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
	/**
	* @param {string} str
	* @return {Uint8Array<ArrayBuffer>}
	*/
	var _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
	/**
	* @param {string} str
	* @return {Uint8Array}
	*/
	/* c8 ignore next */
	var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
	/* c8 ignore next */
	var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", {
		fatal: true,
		ignoreBOM: true
	});
	/* c8 ignore start */
	if (utf8TextDecoder && utf8TextDecoder.decode(/* @__PURE__ */ new Uint8Array()).length === 1)
 /* c8 ignore next */
	utf8TextDecoder = null;
	/**
	* @param {string} source
	* @param {number} n
	*/
	var repeat = (source, n) => unfold(n, () => source).join("");
	//#endregion
	//#region node_modules/lib0/encoding.js
	/**
	* Efficient schema-less binary encoding with support for variable length encoding.
	*
	* Use [lib0/encoding] with [lib0/decoding]. Every encoding function has a corresponding decoding function.
	*
	* Encodes numbers in little-endian order (least to most significant byte order)
	* and is compatible with Golang's binary encoding (https://golang.org/pkg/encoding/binary/)
	* which is also used in Protocol Buffers.
	*
	* ```js
	* // encoding step
	* const encoder = encoding.createEncoder()
	* encoding.writeVarUint(encoder, 256)
	* encoding.writeVarString(encoder, 'Hello world!')
	* const buf = encoding.toUint8Array(encoder)
	* ```
	*
	* ```js
	* // decoding step
	* const decoder = decoding.createDecoder(buf)
	* decoding.readVarUint(decoder) // => 256
	* decoding.readVarString(decoder) // => 'Hello world!'
	* decoding.hasContent(decoder) // => false - all data is read
	* ```
	*
	* @module encoding
	*/
	/**
	* A BinaryEncoder handles the encoding to an Uint8Array.
	*/
	var Encoder = class {
		constructor() {
			this.cpos = 0;
			this.cbuf = /* @__PURE__ */ new Uint8Array(100);
			/**
			* @type {Array<Uint8Array>}
			*/
			this.bufs = [];
		}
	};
	/**
	* @function
	* @return {Encoder}
	*/
	var createEncoder = () => new Encoder();
	/**
	* The current length of the encoded data.
	*
	* @function
	* @param {Encoder} encoder
	* @return {number}
	*/
	var length = (encoder) => {
		let len = encoder.cpos;
		for (let i = 0; i < encoder.bufs.length; i++) len += encoder.bufs[i].length;
		return len;
	};
	/**
	* Transform to Uint8Array.
	*
	* @function
	* @param {Encoder} encoder
	* @return {Uint8Array<ArrayBuffer>} The created ArrayBuffer.
	*/
	var toUint8Array = (encoder) => {
		const uint8arr = new Uint8Array(length(encoder));
		let curPos = 0;
		for (let i = 0; i < encoder.bufs.length; i++) {
			const d = encoder.bufs[i];
			uint8arr.set(d, curPos);
			curPos += d.length;
		}
		uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
		return uint8arr;
	};
	/**
	* Verify that it is possible to write `len` bytes wtihout checking. If
	* necessary, a new Buffer with the required length is attached.
	*
	* @param {Encoder} encoder
	* @param {number} len
	*/
	var verifyLen = (encoder, len) => {
		const bufferLen = encoder.cbuf.length;
		if (bufferLen - encoder.cpos < len) {
			encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
			encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
			encoder.cpos = 0;
		}
	};
	/**
	* Write one byte to the encoder.
	*
	* @function
	* @param {Encoder} encoder
	* @param {number} num The byte that is to be encoded.
	*/
	var write = (encoder, num) => {
		const bufferLen = encoder.cbuf.length;
		if (encoder.cpos === bufferLen) {
			encoder.bufs.push(encoder.cbuf);
			encoder.cbuf = new Uint8Array(bufferLen * 2);
			encoder.cpos = 0;
		}
		encoder.cbuf[encoder.cpos++] = num;
	};
	/**
	* Write one byte as an unsigned integer.
	*
	* @function
	* @param {Encoder} encoder
	* @param {number} num The number that is to be encoded.
	*/
	var writeUint8 = write;
	/**
	* Write a variable length unsigned integer. Max encodable integer is 2^53.
	*
	* @function
	* @param {Encoder} encoder
	* @param {number} num The number that is to be encoded.
	*/
	var writeVarUint = (encoder, num) => {
		while (num > 127) {
			write(encoder, 128 | 127 & num);
			num = floor(num / 128);
		}
		write(encoder, 127 & num);
	};
	/**
	* Write a variable length integer.
	*
	* We use the 7th bit instead for signaling that this is a negative number.
	*
	* @function
	* @param {Encoder} encoder
	* @param {number} num The number that is to be encoded.
	*/
	var writeVarInt = (encoder, num) => {
		const isNegative = isNegativeZero(num);
		if (isNegative) num = -num;
		write(encoder, (num > 63 ? 128 : 0) | (isNegative ? 64 : 0) | 63 & num);
		num = floor(num / 64);
		while (num > 0) {
			write(encoder, (num > 127 ? 128 : 0) | 127 & num);
			num = floor(num / 128);
		}
	};
	/**
	* A cache to store strings temporarily
	*/
	var _strBuffer = /* @__PURE__ */ new Uint8Array(3e4);
	var _maxStrBSize = _strBuffer.length / 3;
	/**
	* Write a variable length string.
	*
	* @function
	* @param {Encoder} encoder
	* @param {String} str The string that is to be encoded.
	*/
	var _writeVarStringNative = (encoder, str) => {
		if (str.length < _maxStrBSize) {
			/* c8 ignore next */
			const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
			writeVarUint(encoder, written);
			for (let i = 0; i < written; i++) write(encoder, _strBuffer[i]);
		} else writeVarUint8Array(encoder, encodeUtf8(str));
	};
	/**
	* Write a variable length string.
	*
	* @function
	* @param {Encoder} encoder
	* @param {String} str The string that is to be encoded.
	*/
	var _writeVarStringPolyfill = (encoder, str) => {
		const encodedString = unescape(encodeURIComponent(str));
		const len = encodedString.length;
		writeVarUint(encoder, len);
		for (let i = 0; i < len; i++) write(encoder, encodedString.codePointAt(i));
	};
	/**
	* Write a variable length string.
	*
	* @function
	* @param {Encoder} encoder
	* @param {String} str The string that is to be encoded.
	*/
	/* c8 ignore next */
	var writeVarString = utf8TextEncoder && utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
	/**
	* Write the content of another Encoder.
	*
	* @TODO: can be improved!
	*        - Note: Should consider that when appending a lot of small Encoders, we should rather clone than referencing the old structure.
	*                Encoders start with a rather big initial buffer.
	*
	* @function
	* @param {Encoder} encoder The enUint8Arr
	* @param {Encoder} append The BinaryEncoder to be written.
	*/
	var writeBinaryEncoder = (encoder, append) => writeUint8Array(encoder, toUint8Array(append));
	/**
	* Append fixed-length Uint8Array to the encoder.
	*
	* @function
	* @param {Encoder} encoder
	* @param {Uint8Array} uint8Array
	*/
	var writeUint8Array = (encoder, uint8Array) => {
		const bufferLen = encoder.cbuf.length;
		const cpos = encoder.cpos;
		const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
		const rightCopyLen = uint8Array.length - leftCopyLen;
		encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
		encoder.cpos += leftCopyLen;
		if (rightCopyLen > 0) {
			encoder.bufs.push(encoder.cbuf);
			encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
			encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
			encoder.cpos = rightCopyLen;
		}
	};
	/**
	* Append an Uint8Array to Encoder.
	*
	* @function
	* @param {Encoder} encoder
	* @param {Uint8Array} uint8Array
	*/
	var writeVarUint8Array = (encoder, uint8Array) => {
		writeVarUint(encoder, uint8Array.byteLength);
		writeUint8Array(encoder, uint8Array);
	};
	/**
	* Create an DataView of the next `len` bytes. Use it to write data after
	* calling this function.
	*
	* ```js
	* // write float32 using DataView
	* const dv = writeOnDataView(encoder, 4)
	* dv.setFloat32(0, 1.1)
	* // read float32 using DataView
	* const dv = readFromDataView(encoder, 4)
	* dv.getFloat32(0) // => 1.100000023841858 (leaving it to the reader to find out why this is the correct result)
	* ```
	*
	* @param {Encoder} encoder
	* @param {number} len
	* @return {DataView}
	*/
	var writeOnDataView = (encoder, len) => {
		verifyLen(encoder, len);
		const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
		encoder.cpos += len;
		return dview;
	};
	/**
	* @param {Encoder} encoder
	* @param {number} num
	*/
	var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
	/**
	* @param {Encoder} encoder
	* @param {number} num
	*/
	var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
	/**
	* @param {Encoder} encoder
	* @param {bigint} num
	*/
	var writeBigInt64 = (encoder, num) => writeOnDataView(encoder, 8).setBigInt64(0, num, false);
	/**
	* @param {Encoder} encoder
	* @param {bigint} num
	*/
	var writeBigUint64 = (encoder, num) => writeOnDataView(encoder, 8).setBigUint64(0, num, false);
	var floatTestBed = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
	/**
	* Check if a number can be encoded as a 32 bit float.
	*
	* @param {number} num
	* @return {boolean}
	*/
	var isFloat32 = (num) => {
		floatTestBed.setFloat32(0, num);
		return floatTestBed.getFloat32(0) === num;
	};
	/**
	* @typedef {Array<AnyEncodable>} AnyEncodableArray
	*/
	/**
	* @typedef {undefined|null|number|bigint|boolean|string|{[k:string]:AnyEncodable}|AnyEncodableArray|Uint8Array} AnyEncodable
	*/
	/**
	* Encode data with efficient binary format.
	*
	* Differences to JSON:
	* • Transforms data to a binary format (not to a string)
	* • Encodes undefined, NaN, and ArrayBuffer (these can't be represented in JSON)
	* • Numbers are efficiently encoded either as a variable length integer, as a
	*   32 bit float, as a 64 bit float, or as a 64 bit bigint.
	*
	* Encoding table:
	*
	* | Data Type           | Prefix   | Encoding Method    | Comment |
	* | ------------------- | -------- | ------------------ | ------- |
	* | undefined           | 127      |                    | Functions, symbol, and everything that cannot be identified is encoded as undefined |
	* | null                | 126      |                    | |
	* | integer             | 125      | writeVarInt        | Only encodes 32 bit signed integers |
	* | float32             | 124      | writeFloat32       | |
	* | float64             | 123      | writeFloat64       | |
	* | bigint              | 122      | writeBigInt64      | |
	* | boolean (false)     | 121      |                    | True and false are different data types so we save the following byte |
	* | boolean (true)      | 120      |                    | - 0b01111000 so the last bit determines whether true or false |
	* | string              | 119      | writeVarString     | |
	* | object<string,any>  | 118      | custom             | Writes {length} then {length} key-value pairs |
	* | array<any>          | 117      | custom             | Writes {length} then {length} json values |
	* | Uint8Array          | 116      | writeVarUint8Array | We use Uint8Array for any kind of binary data |
	*
	* Reasons for the decreasing prefix:
	* We need the first bit for extendability (later we may want to encode the
	* prefix with writeVarUint). The remaining 7 bits are divided as follows:
	* [0-30]   the beginning of the data range is used for custom purposes
	*          (defined by the function that uses this library)
	* [31-127] the end of the data range is used for data encoding by
	*          lib0/encoding.js
	*
	* @param {Encoder} encoder
	* @param {AnyEncodable} data
	*/
	var writeAny = (encoder, data) => {
		switch (typeof data) {
			case "string":
				write(encoder, 119);
				writeVarString(encoder, data);
				break;
			case "number":
				if (isInteger(data) && abs(data) <= 2147483647) {
					write(encoder, 125);
					writeVarInt(encoder, data);
				} else if (isFloat32(data)) {
					write(encoder, 124);
					writeFloat32(encoder, data);
				} else {
					write(encoder, 123);
					writeFloat64(encoder, data);
				}
				break;
			case "bigint":
				write(encoder, 122);
				writeBigInt64(encoder, data);
				break;
			case "object":
				if (data === null) write(encoder, 126);
				else if (isArray(data)) {
					write(encoder, 117);
					writeVarUint(encoder, data.length);
					for (let i = 0; i < data.length; i++) writeAny(encoder, data[i]);
				} else if (data instanceof Uint8Array) {
					write(encoder, 116);
					writeVarUint8Array(encoder, data);
				} else {
					write(encoder, 118);
					const keys = Object.keys(data);
					writeVarUint(encoder, keys.length);
					for (let i = 0; i < keys.length; i++) {
						const key = keys[i];
						writeVarString(encoder, key);
						writeAny(encoder, data[key]);
					}
				}
				break;
			case "boolean":
				write(encoder, data ? 120 : 121);
				break;
			default: write(encoder, 127);
		}
	};
	/**
	* Now come a few stateful encoder that have their own classes.
	*/
	/**
	* Basic Run Length Encoder - a basic compression implementation.
	*
	* Encodes [1,1,1,7] to [1,3,7,1] (3 times 1, 1 time 7). This encoder might do more harm than good if there are a lot of values that are not repeated.
	*
	* It was originally used for image compression. Cool .. article http://csbruce.com/cbm/transactor/pdfs/trans_v7_i06.pdf
	*
	* @note T must not be null!
	*
	* @template T
	*/
	var RleEncoder = class extends Encoder {
		/**
		* @param {function(Encoder, T):void} writer
		*/
		constructor(writer) {
			super();
			/**
			* The writer
			*/
			this.w = writer;
			/**
			* Current state
			* @type {T|null}
			*/
			this.s = null;
			this.count = 0;
		}
		/**
		* @param {T} v
		*/
		write(v) {
			if (this.s === v) this.count++;
			else {
				if (this.count > 0) writeVarUint(this, this.count - 1);
				this.count = 1;
				this.w(this, v);
				this.s = v;
			}
		}
	};
	/**
	* @param {UintOptRleEncoder} encoder
	*/
	var flushUintOptRleEncoder = (encoder) => {
		if (encoder.count > 0) {
			writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
			if (encoder.count > 1) writeVarUint(encoder.encoder, encoder.count - 2);
		}
	};
	/**
	* Optimized Rle encoder that does not suffer from the mentioned problem of the basic Rle encoder.
	*
	* Internally uses VarInt encoder to write unsigned integers. If the input occurs multiple times, we write
	* write it as a negative number. The UintOptRleDecoder then understands that it needs to read a count.
	*
	* Encodes [1,2,3,3,3] as [1,2,-3,3] (once 1, once 2, three times 3)
	*/
	var UintOptRleEncoder = class {
		constructor() {
			this.encoder = new Encoder();
			/**
			* @type {number}
			*/
			this.s = 0;
			this.count = 0;
		}
		/**
		* @param {number} v
		*/
		write(v) {
			if (this.s === v) this.count++;
			else {
				flushUintOptRleEncoder(this);
				this.count = 1;
				this.s = v;
			}
		}
		/**
		* Flush the encoded state and transform this to a Uint8Array.
		*
		* Note that this should only be called once.
		*/
		toUint8Array() {
			flushUintOptRleEncoder(this);
			return toUint8Array(this.encoder);
		}
	};
	/**
	* @param {IntDiffOptRleEncoder} encoder
	*/
	var flushIntDiffOptRleEncoder = (encoder) => {
		if (encoder.count > 0) {
			const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
			writeVarInt(encoder.encoder, encodedDiff);
			if (encoder.count > 1) writeVarUint(encoder.encoder, encoder.count - 2);
		}
	};
	/**
	* A combination of the IntDiffEncoder and the UintOptRleEncoder.
	*
	* The count approach is similar to the UintDiffOptRleEncoder, but instead of using the negative bitflag, it encodes
	* in the LSB whether a count is to be read. Therefore this Encoder only supports 31 bit integers!
	*
	* Encodes [1, 2, 3, 2] as [3, 1, 6, -1] (more specifically [(1 << 1) | 1, (3 << 0) | 0, -1])
	*
	* Internally uses variable length encoding. Contrary to normal UintVar encoding, the first byte contains:
	* * 1 bit that denotes whether the next value is a count (LSB)
	* * 1 bit that denotes whether this value is negative (MSB - 1)
	* * 1 bit that denotes whether to continue reading the variable length integer (MSB)
	*
	* Therefore, only five bits remain to encode diff ranges.
	*
	* Use this Encoder only when appropriate. In most cases, this is probably a bad idea.
	*/
	var IntDiffOptRleEncoder = class {
		constructor() {
			this.encoder = new Encoder();
			/**
			* @type {number}
			*/
			this.s = 0;
			this.count = 0;
			this.diff = 0;
		}
		/**
		* @param {number} v
		*/
		write(v) {
			if (this.diff === v - this.s) {
				this.s = v;
				this.count++;
			} else {
				flushIntDiffOptRleEncoder(this);
				this.count = 1;
				this.diff = v - this.s;
				this.s = v;
			}
		}
		/**
		* Flush the encoded state and transform this to a Uint8Array.
		*
		* Note that this should only be called once.
		*/
		toUint8Array() {
			flushIntDiffOptRleEncoder(this);
			return toUint8Array(this.encoder);
		}
	};
	/**
	* Optimized String Encoder.
	*
	* Encoding many small strings in a simple Encoder is not very efficient. The function call to decode a string takes some time and creates references that must be eventually deleted.
	* In practice, when decoding several million small strings, the GC will kick in more and more often to collect orphaned string objects (or maybe there is another reason?).
	*
	* This string encoder solves the above problem. All strings are concatenated and written as a single string using a single encoding call.
	*
	* The lengths are encoded using a UintOptRleEncoder.
	*/
	var StringEncoder = class {
		constructor() {
			/**
			* @type {Array<string>}
			*/
			this.sarr = [];
			this.s = "";
			this.lensE = new UintOptRleEncoder();
		}
		/**
		* @param {string} string
		*/
		write(string) {
			this.s += string;
			if (this.s.length > 19) {
				this.sarr.push(this.s);
				this.s = "";
			}
			this.lensE.write(string.length);
		}
		toUint8Array() {
			const encoder = new Encoder();
			this.sarr.push(this.s);
			this.s = "";
			writeVarString(encoder, this.sarr.join(""));
			writeUint8Array(encoder, this.lensE.toUint8Array());
			return toUint8Array(encoder);
		}
	};
	//#endregion
	//#region node_modules/lib0/error.js
	/**
	* Error helpers.
	*
	* @module error
	*/
	/**
	* @param {string} s
	* @return {Error}
	*/
	/* c8 ignore next */
	var create$4 = (s) => new Error(s);
	/**
	* @throws {Error}
	* @return {never}
	*/
	/* c8 ignore next 3 */
	var methodUnimplemented = () => {
		throw create$4("Method unimplemented");
	};
	/**
	* @throws {Error}
	* @return {never}
	*/
	/* c8 ignore next 3 */
	var unexpectedCase = () => {
		throw create$4("Unexpected case");
	};
	//#endregion
	//#region node_modules/lib0/decoding.js
	/**
	* Efficient schema-less binary decoding with support for variable length encoding.
	*
	* Use [lib0/decoding] with [lib0/encoding]. Every encoding function has a corresponding decoding function.
	*
	* Encodes numbers in little-endian order (least to most significant byte order)
	* and is compatible with Golang's binary encoding (https://golang.org/pkg/encoding/binary/)
	* which is also used in Protocol Buffers.
	*
	* ```js
	* // encoding step
	* const encoder = encoding.createEncoder()
	* encoding.writeVarUint(encoder, 256)
	* encoding.writeVarString(encoder, 'Hello world!')
	* const buf = encoding.toUint8Array(encoder)
	* ```
	*
	* ```js
	* // decoding step
	* const decoder = decoding.createDecoder(buf)
	* decoding.readVarUint(decoder) // => 256
	* decoding.readVarString(decoder) // => 'Hello world!'
	* decoding.hasContent(decoder) // => false - all data is read
	* ```
	*
	* @module decoding
	*/
	var errorUnexpectedEndOfArray = create$4("Unexpected end of array");
	var errorIntegerOutOfRange = create$4("Integer out of Range");
	/**
	* A Decoder handles the decoding of an Uint8Array.
	* @template {ArrayBufferLike} [Buf=ArrayBufferLike]
	*/
	var Decoder = class {
		/**
		* @param {Uint8Array<Buf>} uint8Array Binary data to decode
		*/
		constructor(uint8Array) {
			/**
			* Decoding target.
			*
			* @type {Uint8Array<Buf>}
			*/
			this.arr = uint8Array;
			/**
			* Current decoding position.
			*
			* @type {number}
			*/
			this.pos = 0;
		}
	};
	/**
	* @function
	* @template {ArrayBufferLike} Buf
	* @param {Uint8Array<Buf>} uint8Array
	* @return {Decoder<Buf>}
	*/
	var createDecoder = (uint8Array) => new Decoder(uint8Array);
	/**
	* @function
	* @param {Decoder} decoder
	* @return {boolean}
	*/
	var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
	/**
	* Create an Uint8Array view of the next `len` bytes and advance the position by `len`.
	*
	* Important: The Uint8Array still points to the underlying ArrayBuffer. Make sure to discard the result as soon as possible to prevent any memory leaks.
	*            Use `buffer.copyUint8Array` to copy the result into a new Uint8Array.
	*
	* @function
	* @template {ArrayBufferLike} Buf
	* @param {Decoder<Buf>} decoder The decoder instance
	* @param {number} len The length of bytes to read
	* @return {Uint8Array<Buf>}
	*/
	var readUint8Array = (decoder, len) => {
		const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
		decoder.pos += len;
		return view;
	};
	/**
	* Read variable length Uint8Array.
	*
	* Important: The Uint8Array still points to the underlying ArrayBuffer. Make sure to discard the result as soon as possible to prevent any memory leaks.
	*            Use `buffer.copyUint8Array` to copy the result into a new Uint8Array.
	*
	* @function
	* @template {ArrayBufferLike} Buf
	* @param {Decoder<Buf>} decoder
	* @return {Uint8Array<Buf>}
	*/
	var readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
	/**
	* Read one byte as unsigned integer.
	* @function
	* @param {Decoder} decoder The decoder instance
	* @return {number} Unsigned 8-bit integer
	*/
	var readUint8 = (decoder) => decoder.arr[decoder.pos++];
	/**
	* Read unsigned integer (32bit) with variable length.
	* 1/8th of the storage is used as encoding overhead.
	*  * numbers < 2^7 is stored in one bytlength
	*  * numbers < 2^14 is stored in two bylength
	*
	* @function
	* @param {Decoder} decoder
	* @return {number} An unsigned integer.length
	*/
	var readVarUint = (decoder) => {
		let num = 0;
		let mult = 1;
		const len = decoder.arr.length;
		while (decoder.pos < len) {
			const r = decoder.arr[decoder.pos++];
			num = num + (r & 127) * mult;
			mult *= 128;
			if (r < 128) return num;
			/* c8 ignore start */
			if (num > MAX_SAFE_INTEGER) throw errorIntegerOutOfRange;
		}
		throw errorUnexpectedEndOfArray;
	};
	/**
	* Read signed integer (32bit) with variable length.
	* 1/8th of the storage is used as encoding overhead.
	*  * numbers < 2^7 is stored in one bytlength
	*  * numbers < 2^14 is stored in two bylength
	* @todo This should probably create the inverse ~num if number is negative - but this would be a breaking change.
	*
	* @function
	* @param {Decoder} decoder
	* @return {number} An unsigned integer.length
	*/
	var readVarInt = (decoder) => {
		let r = decoder.arr[decoder.pos++];
		let num = r & 63;
		let mult = 64;
		const sign = (r & 64) > 0 ? -1 : 1;
		if ((r & 128) === 0) return sign * num;
		const len = decoder.arr.length;
		while (decoder.pos < len) {
			r = decoder.arr[decoder.pos++];
			num = num + (r & 127) * mult;
			mult *= 128;
			if (r < 128) return sign * num;
			/* c8 ignore start */
			if (num > MAX_SAFE_INTEGER) throw errorIntegerOutOfRange;
		}
		throw errorUnexpectedEndOfArray;
	};
	/**
	* We don't test this function anymore as we use native decoding/encoding by default now.
	* Better not modify this anymore..
	*
	* Transforming utf8 to a string is pretty expensive. The code performs 10x better
	* when String.fromCodePoint is fed with all characters as arguments.
	* But most environments have a maximum number of arguments per functions.
	* For effiency reasons we apply a maximum of 10000 characters at once.
	*
	* @function
	* @param {Decoder} decoder
	* @return {String} The read String.
	*/
	/* c8 ignore start */
	var _readVarStringPolyfill = (decoder) => {
		let remainingLen = readVarUint(decoder);
		if (remainingLen === 0) return "";
		else {
			let encodedString = String.fromCodePoint(readUint8(decoder));
			if (--remainingLen < 100) while (remainingLen--) encodedString += String.fromCodePoint(readUint8(decoder));
			else while (remainingLen > 0) {
				const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
				const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
				decoder.pos += nextLen;
				encodedString += String.fromCodePoint.apply(null, bytes);
				remainingLen -= nextLen;
			}
			return decodeURIComponent(escape(encodedString));
		}
	};
	/* c8 ignore stop */
	/**
	* @function
	* @param {Decoder} decoder
	* @return {String} The read String
	*/
	var _readVarStringNative = (decoder) => utf8TextDecoder.decode(readVarUint8Array(decoder));
	/**
	* Read string of variable length
	* * varUint is used to store the length of the string
	*
	* @function
	* @param {Decoder} decoder
	* @return {String} The read String
	*
	*/
	/* c8 ignore next */
	var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
	/**
	* @param {Decoder} decoder
	* @param {number} len
	* @return {DataView}
	*/
	var readFromDataView = (decoder, len) => {
		const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
		decoder.pos += len;
		return dv;
	};
	/**
	* @param {Decoder} decoder
	*/
	var readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
	/**
	* @param {Decoder} decoder
	*/
	var readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
	/**
	* @param {Decoder} decoder
	*/
	var readBigInt64 = (decoder) => readFromDataView(decoder, 8).getBigInt64(0, false);
	/**
	* @param {Decoder} decoder
	*/
	var readBigUint64 = (decoder) => readFromDataView(decoder, 8).getBigUint64(0, false);
	/**
	* @type {Array<function(Decoder):any>}
	*/
	var readAnyLookupTable = [
		(decoder) => void 0,
		(decoder) => null,
		readVarInt,
		readFloat32,
		readFloat64,
		readBigInt64,
		(decoder) => false,
		(decoder) => true,
		readVarString,
		(decoder) => {
			const len = readVarUint(decoder);
			/**
			* @type {Object<string,any>}
			*/
			const obj = {};
			for (let i = 0; i < len; i++) {
				const key = readVarString(decoder);
				obj[key] = readAny(decoder);
			}
			return obj;
		},
		(decoder) => {
			const len = readVarUint(decoder);
			const arr = [];
			for (let i = 0; i < len; i++) arr.push(readAny(decoder));
			return arr;
		},
		readVarUint8Array
	];
	/**
	* @param {Decoder} decoder
	*/
	var readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
	/**
	* T must not be null.
	*
	* @template T
	*/
	var RleDecoder = class extends Decoder {
		/**
		* @param {Uint8Array} uint8Array
		* @param {function(Decoder):T} reader
		*/
		constructor(uint8Array, reader) {
			super(uint8Array);
			/**
			* The reader
			*/
			this.reader = reader;
			/**
			* Current state
			* @type {T|null}
			*/
			this.s = null;
			this.count = 0;
		}
		read() {
			if (this.count === 0) {
				this.s = this.reader(this);
				if (hasContent(this)) this.count = readVarUint(this) + 1;
				else this.count = -1;
			}
			this.count--;
			return this.s;
		}
	};
	var UintOptRleDecoder = class extends Decoder {
		/**
		* @param {Uint8Array} uint8Array
		*/
		constructor(uint8Array) {
			super(uint8Array);
			/**
			* @type {number}
			*/
			this.s = 0;
			this.count = 0;
		}
		read() {
			if (this.count === 0) {
				this.s = readVarInt(this);
				const isNegative = isNegativeZero(this.s);
				this.count = 1;
				if (isNegative) {
					this.s = -this.s;
					this.count = readVarUint(this) + 2;
				}
			}
			this.count--;
			return this.s;
		}
	};
	var IntDiffOptRleDecoder = class extends Decoder {
		/**
		* @param {Uint8Array} uint8Array
		*/
		constructor(uint8Array) {
			super(uint8Array);
			/**
			* @type {number}
			*/
			this.s = 0;
			this.count = 0;
			this.diff = 0;
		}
		/**
		* @return {number}
		*/
		read() {
			if (this.count === 0) {
				const diff = readVarInt(this);
				const hasCount = diff & 1;
				this.diff = floor(diff / 2);
				this.count = 1;
				if (hasCount) this.count = readVarUint(this) + 2;
			}
			this.s += this.diff;
			this.count--;
			return this.s;
		}
	};
	var StringDecoder = class {
		/**
		* @param {Uint8Array} uint8Array
		*/
		constructor(uint8Array) {
			this.decoder = new UintOptRleDecoder(uint8Array);
			this.str = readVarString(this.decoder);
			/**
			* @type {number}
			*/
			this.spos = 0;
		}
		/**
		* @return {string}
		*/
		read() {
			const end = this.spos + this.decoder.read();
			const res = this.str.slice(this.spos, end);
			this.spos = end;
			return res;
		}
	};
	//#endregion
	//#region node_modules/lib0/map.js
	/**
	* Utility module to work with key-value stores.
	*
	* @module map
	*/
	/**
	* @template K
	* @template V
	* @typedef {Map<K,V>} GlobalMap
	*/
	/**
	* Creates a new Map instance.
	*
	* @function
	* @return {Map<any, any>}
	*
	* @function
	*/
	var create$3 = () => /* @__PURE__ */ new Map();
	/**
	* Copy a Map object into a fresh Map object.
	*
	* @function
	* @template K,V
	* @param {Map<K,V>} m
	* @return {Map<K,V>}
	*/
	var copy = (m) => {
		const r = create$3();
		m.forEach((v, k) => {
			r.set(k, v);
		});
		return r;
	};
	/**
	* Get map property. Create T if property is undefined and set T on map.
	*
	* ```js
	* const listeners = map.setIfUndefined(events, 'eventName', set.create)
	* listeners.add(listener)
	* ```
	*
	* @function
	* @template {Map<any, any>} MAP
	* @template {MAP extends Map<any,infer V> ? function():V : unknown} CF
	* @param {MAP} map
	* @param {MAP extends Map<infer K,any> ? K : unknown} key
	* @param {CF} createT
	* @return {ReturnType<CF>}
	*/
	var setIfUndefined = (map, key, createT) => {
		let set = map.get(key);
		if (set === void 0) map.set(key, set = createT());
		return set;
	};
	/**
	* Creates an Array and populates it with the content of all key-value pairs using the `f(value, key)` function.
	*
	* @function
	* @template K
	* @template V
	* @template R
	* @param {Map<K,V>} m
	* @param {function(V,K):R} f
	* @return {Array<R>}
	*/
	var map = (m, f) => {
		const res = [];
		for (const [key, value] of m) res.push(f(value, key));
		return res;
	};
	/**
	* Tests whether any key-value pairs pass the test implemented by `f(value, key)`.
	*
	* @todo should rename to some - similarly to Array.some
	*
	* @function
	* @template K
	* @template V
	* @param {Map<K,V>} m
	* @param {function(V,K):boolean} f
	* @return {boolean}
	*/
	var any = (m, f) => {
		for (const [key, value] of m) if (f(value, key)) return true;
		return false;
	};
	//#endregion
	//#region node_modules/lib0/observable.js
	/**
	* Observable class prototype.
	*
	* @module observable
	*/
	/**
	* Handles named events.
	* @experimental
	*
	* This is basically a (better typed) duplicate of Observable, which will replace Observable in the
	* next release.
	*
	* @template {{[key in keyof EVENTS]: function(...any):void}} EVENTS
	*/
	var ObservableV2 = class {
		constructor() {
			/**
			* Some desc.
			* @type {Map<string, Set<any>>}
			*/
			this._observers = create$3();
		}
		/**
		* @template {keyof EVENTS & string} NAME
		* @param {NAME} name
		* @param {EVENTS[NAME]} f
		*/
		on(name, f) {
			setIfUndefined(this._observers, name, create$5).add(f);
			return f;
		}
		/**
		* @template {keyof EVENTS & string} NAME
		* @param {NAME} name
		* @param {EVENTS[NAME]} f
		*/
		once(name, f) {
			/**
			* @param  {...any} args
			*/
			const _f = (...args) => {
				this.off(name, _f);
				f(...args);
			};
			this.on(name, _f);
		}
		/**
		* @template {keyof EVENTS & string} NAME
		* @param {NAME} name
		* @param {EVENTS[NAME]} f
		*/
		off(name, f) {
			const observers = this._observers.get(name);
			if (observers !== void 0) {
				observers.delete(f);
				if (observers.size === 0) this._observers.delete(name);
			}
		}
		/**
		* Emit a named event. All registered event listeners that listen to the
		* specified name will receive the event.
		*
		* @todo This should catch exceptions
		*
		* @template {keyof EVENTS & string} NAME
		* @param {NAME} name The event name.
		* @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
		*/
		emit(name, args) {
			return from((this._observers.get(name) || create$3()).values()).forEach((f) => f(...args));
		}
		destroy() {
			this._observers = create$3();
		}
	};
	/* c8 ignore start */
	/**
	* Handles named events.
	*
	* @deprecated
	* @template N
	*/
	var Observable = class {
		constructor() {
			/**
			* Some desc.
			* @type {Map<N, any>}
			*/
			this._observers = create$3();
		}
		/**
		* @param {N} name
		* @param {function} f
		*/
		on(name, f) {
			setIfUndefined(this._observers, name, create$5).add(f);
		}
		/**
		* @param {N} name
		* @param {function} f
		*/
		once(name, f) {
			/**
			* @param  {...any} args
			*/
			const _f = (...args) => {
				this.off(name, _f);
				f(...args);
			};
			this.on(name, _f);
		}
		/**
		* @param {N} name
		* @param {function} f
		*/
		off(name, f) {
			const observers = this._observers.get(name);
			if (observers !== void 0) {
				observers.delete(f);
				if (observers.size === 0) this._observers.delete(name);
			}
		}
		/**
		* Emit a named event. All registered event listeners that listen to the
		* specified name will receive the event.
		*
		* @todo This should catch exceptions
		*
		* @param {N} name The event name.
		* @param {Array<any>} args The arguments that are applied to the event listener.
		*/
		emit(name, args) {
			return from((this._observers.get(name) || create$3()).values()).forEach((f) => f(...args));
		}
		destroy() {
			this._observers = create$3();
		}
	};
	crypto.subtle;
	var getRandomValues = crypto.getRandomValues.bind(crypto);
	//#endregion
	//#region node_modules/lib0/random.js
	var uint32 = () => getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0];
	var uuidv4Template = "10000000-1000-4000-8000-100000000000";
	/**
	* @return {string}
	*/
	var uuidv4 = () => uuidv4Template.replace(
		/[018]/g,
		/** @param {number} c */
		(c) => (c ^ uint32() & 15 >> c / 4).toString(16)
	);
	//#endregion
	//#region node_modules/lib0/time.js
	/**
	* Return current unix time.
	*
	* @return {number}
	*/
	var getUnixTime = Date.now;
	//#endregion
	//#region node_modules/lib0/promise.js
	/**
	* @template T
	* @callback PromiseResolve
	* @param {T|PromiseLike<T>} [result]
	*/
	/**
	* @template T
	* @param {function(PromiseResolve<T>,function(Error):void):any} f
	* @return {Promise<T>}
	*/
	var create$2 = (f) => new Promise(f);
	Promise.all.bind(Promise);
	//#endregion
	//#region node_modules/lib0/conditions.js
	/**
	* Often used conditions.
	*
	* @module conditions
	*/
	/**
	* @template T
	* @param {T|null|undefined} v
	* @return {T|null}
	*/
	/* c8 ignore next */
	var undefinedToNull = (v) => v === void 0 ? null : v;
	//#endregion
	//#region node_modules/lib0/storage.js
	/**
	* Isomorphic variable storage.
	*
	* Uses LocalStorage in the browser and falls back to in-memory storage.
	*
	* @module storage
	*/
	/* c8 ignore start */
	var VarStoragePolyfill = class {
		constructor() {
			this.map = /* @__PURE__ */ new Map();
		}
		/**
		* @param {string} key
		* @param {any} newValue
		*/
		setItem(key, newValue) {
			this.map.set(key, newValue);
		}
		/**
		* @param {string} key
		*/
		getItem(key) {
			return this.map.get(key);
		}
	};
	/* c8 ignore stop */
	/**
	* @type {any}
	*/
	var _localStorage = new VarStoragePolyfill();
	/* c8 ignore start */
	try {
		if (typeof localStorage !== "undefined" && localStorage) _localStorage = localStorage;
	} catch (e) {}
	/* c8 ignore stop */
	/**
	* This is basically localStorage in browser, or a polyfill in nodejs
	*/
	/* c8 ignore next */
	var varStorage = _localStorage;
	//#endregion
	//#region node_modules/lib0/trait/equality.js
	var EqualityTraitSymbol = Symbol("Equality");
	/**
	* @typedef {{ [EqualityTraitSymbol]:(other:EqualityTrait)=>boolean }} EqualityTrait
	*/
	/**
	*
	* Utility function to compare any two objects.
	*
	* Note that it is expected that the first parameter is more specific than the latter one.
	*
	* @example js
	*     class X { [traits.EqualityTraitSymbol] (other) { return other === this }  }
	*     class X2 { [traits.EqualityTraitSymbol] (other) { return other === this }, x2 () { return 2 }  }
	*     // this is fine
	*     traits.equals(new X2(), new X())
	*     // this is not, because the left type is less specific than the right one
	*     traits.equals(new X(), new X2())
	*
	* @template {EqualityTrait} T
	* @param {NoInfer<T>} a
	* @param {T} b
	* @return {boolean}
	*/
	var equals = (a, b) => a === b || !!a?.[EqualityTraitSymbol]?.(b) || false;
	//#endregion
	//#region node_modules/lib0/object.js
	/**
	* @param {any} o
	* @return {o is { [k:string]:any }}
	*/
	var isObject = (o) => typeof o === "object";
	/**
	* Object.assign
	*/
	var assign = Object.assign;
	/**
	* @param {Object<string,any>} obj
	*/
	var keys = Object.keys;
	/**
	* @template V
	* @param {{[k:string]:V}} obj
	* @param {function(V,string):any} f
	*/
	var forEach = (obj, f) => {
		for (const key in obj) f(obj[key], key);
	};
	/**
	* @param {Object<string,any>} obj
	* @return {number}
	*/
	var size = (obj) => keys(obj).length;
	/**
	* @param {Object|null|undefined} obj
	*/
	var isEmpty = (obj) => {
		for (const _k in obj) return false;
		return true;
	};
	/**
	* @template {{ [key:string|number|symbol]: any }} T
	* @param {T} obj
	* @param {(v:T[keyof T],k:keyof T)=>boolean} f
	* @return {boolean}
	*/
	var every = (obj, f) => {
		for (const key in obj) if (!f(obj[key], key)) return false;
		return true;
	};
	/**
	* Calls `Object.prototype.hasOwnProperty`.
	*
	* @param {any} obj
	* @param {string|number|symbol} key
	* @return {boolean}
	*/
	var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
	/**
	* @param {Object<string,any>} a
	* @param {Object<string,any>} b
	* @return {boolean}
	*/
	var equalFlat = (a, b) => a === b || size(a) === size(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && equals(b[key], val));
	/**
	* Make an object immutable. This hurts performance and is usually not needed if you perform good
	* coding practices.
	*/
	var freeze = Object.freeze;
	/**
	* Make an object and all its children immutable.
	* This *really* hurts performance and is usually not needed if you perform good coding practices.
	*
	* @template {any} T
	* @param {T} o
	* @return {Readonly<T>}
	*/
	var deepFreeze = (o) => {
		for (const key in o) {
			const c = o[key];
			if (typeof c === "object" || typeof c === "function") deepFreeze(o[key]);
		}
		return freeze(o);
	};
	//#endregion
	//#region node_modules/lib0/function.js
	/**
	* Calls all functions in `fs` with args. Only throws after all functions were called.
	*
	* @param {Array<function>} fs
	* @param {Array<any>} args
	*/
	var callAll = (fs, args, i = 0) => {
		try {
			for (; i < fs.length; i++) fs[i](...args);
		} finally {
			if (i < fs.length) callAll(fs, args, i + 1);
		}
	};
	/* c8 ignore start */
	/**
	* @param {any} a
	* @param {any} b
	* @return {boolean}
	*/
	var equalityDeep = (a, b) => {
		if (a === b) return true;
		if (a == null || b == null || a.constructor !== b.constructor && (a.constructor || Object) !== (b.constructor || Object)) return false;
		if (a[EqualityTraitSymbol] != null) return a[EqualityTraitSymbol](b);
		switch (a.constructor) {
			case ArrayBuffer:
				a = new Uint8Array(a);
				b = new Uint8Array(b);
			case Uint8Array:
				if (a.byteLength !== b.byteLength) return false;
				for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
				break;
			case Set:
				if (a.size !== b.size) return false;
				for (const value of a) if (!b.has(value)) return false;
				break;
			case Map:
				if (a.size !== b.size) return false;
				for (const key of a.keys()) if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) return false;
				break;
			case void 0:
			case Object:
				if (size(a) !== size(b)) return false;
				for (const key in a) if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) return false;
				break;
			case Array:
				if (a.length !== b.length) return false;
				for (let i = 0; i < a.length; i++) if (!equalityDeep(a[i], b[i])) return false;
				break;
			default: return false;
		}
		return true;
	};
	/**
	* @template V
	* @template {V} OPTS
	*
	* @param {V} value
	* @param {Array<OPTS>} options
	*/
	var isOneOf = (value, options) => options.includes(value);
	//#endregion
	//#region node_modules/lib0/environment.js
	/**
	* Isomorphic module to work access the environment (query params, env variables).
	*
	* @module environment
	*/
	/* c8 ignore next 2 */
	var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
	typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
	/**
	* @type {Map<string,string>}
	*/
	var params;
	var args = [];
	/* c8 ignore start */
	var computeParams = () => {
		if (params === void 0) {
			if (isNode) {
				params = create$3();
				const pargs = process.argv;
				let currParamName = null;
				for (let i = 0; i < pargs.length; i++) {
					const parg = pargs[i];
					if (parg[0] === "-") {
						if (currParamName !== null) params.set(currParamName, "");
						currParamName = parg;
					} else if (currParamName !== null) {
						params.set(currParamName, parg);
						currParamName = null;
					} else args.push(parg);
				}
				if (currParamName !== null) params.set(currParamName, "");
			} else if (typeof location === "object") {
				params = create$3();
				(location.search || "?").slice(1).split("&").forEach((kv) => {
					if (kv.length !== 0) {
						const [key, value] = kv.split("=");
						params.set(`--${fromCamelCase(key, "-")}`, value);
						params.set(`-${fromCamelCase(key, "-")}`, value);
					}
				});
			} else params = create$3();
		}
		return params;
	};
	/* c8 ignore stop */
	/**
	* @param {string} name
	* @return {boolean}
	*/
	/* c8 ignore next */
	var hasParam = (name) => computeParams().has(name);
	/**
	* @param {string} name
	* @return {string|null}
	*/
	/* c8 ignore next 4 */
	var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
	/**
	* @param {string} name
	* @return {boolean}
	*/
	/* c8 ignore next 2 */
	var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
	/* c8 ignore next */
	var production = hasConf("production");
	/* c8 ignore start */
	/**
	* Color is enabled by default if the terminal supports it.
	*
	* Explicitly enable color using `--color` parameter
	* Disable color using `--no-color` parameter or using `NO_COLOR=1` environment variable.
	* `FORCE_COLOR=1` enables color and takes precedence over all.
	*/
	var supportsColor = isNode && isOneOf(process.env.FORCE_COLOR, [
		"true",
		"1",
		"2"
	]) || !hasParam("--no-colors") && !hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
	/* c8 ignore stop */
	//#endregion
	//#region node_modules/lib0/pair.js
	/**
	* Working with value pairs.
	*
	* @module pair
	*/
	/**
	* @template L,R
	*/
	var Pair = class {
		/**
		* @param {L} left
		* @param {R} right
		*/
		constructor(left, right) {
			this.left = left;
			this.right = right;
		}
	};
	/**
	* @template L,R
	* @param {L} left
	* @param {R} right
	* @return {Pair<L,R>}
	*/
	var create$1 = (left, right) => new Pair(left, right);
	//#endregion
	//#region node_modules/lib0/prng.js
	/**
	* Generates a single random bool.
	*
	* @param {PRNG} gen A random number generator.
	* @return {Boolean} A random boolean
	*/
	var bool = (gen) => gen.next() >= .5;
	/**
	* Generates a random integer with 53 bit resolution.
	*
	* @param {PRNG} gen A random number generator.
	* @param {Number} min The lower bound of the allowed return values (inclusive).
	* @param {Number} max The upper bound of the allowed return values (inclusive).
	* @return {Number} A random integer on [min, max]
	*/
	var int53 = (gen, min, max) => floor(gen.next() * (max + 1 - min) + min);
	/**
	* Generates a random integer with 32 bit resolution.
	*
	* @param {PRNG} gen A random number generator.
	* @param {Number} min The lower bound of the allowed return values (inclusive).
	* @param {Number} max The upper bound of the allowed return values (inclusive).
	* @return {Number} A random integer on [min, max]
	*/
	var int32 = (gen, min, max) => floor(gen.next() * (max + 1 - min) + min);
	/**
	* @deprecated
	* Optimized version of prng.int32. It has the same precision as prng.int32, but should be preferred when
	* openaring on smaller ranges.
	*
	* @param {PRNG} gen A random number generator.
	* @param {Number} min The lower bound of the allowed return values (inclusive).
	* @param {Number} max The upper bound of the allowed return values (inclusive). The max inclusive number is `binary.BITS31-1`
	* @return {Number} A random integer on [min, max]
	*/
	var int31 = (gen, min, max) => int32(gen, min, max);
	/**
	* @param {PRNG} gen
	* @return {string} A single letter (a-z)
	*/
	var letter = (gen) => fromCharCode(int31(gen, 97, 122));
	/**
	* @param {PRNG} gen
	* @param {number} [minLen=0]
	* @param {number} [maxLen=20]
	* @return {string} A random word (0-20 characters) without spaces consisting of letters (a-z)
	*/
	var word = (gen, minLen = 0, maxLen = 20) => {
		const len = int31(gen, minLen, maxLen);
		let str = "";
		for (let i = 0; i < len; i++) str += letter(gen);
		return str;
	};
	/**
	* Returns one element of a given array.
	*
	* @param {PRNG} gen A random number generator.
	* @param {Array<T>} array Non empty Array of possible values.
	* @return {T} One of the values of the supplied Array.
	* @template T
	*/
	var oneOf = (gen, array) => array[int31(gen, 0, array.length - 1)];
	/* c8 ignore stop */
	//#endregion
	//#region node_modules/lib0/schema.js
	/**
	* @experimental WIP
	*
	* Simple & efficient schemas for your data.
	*/
	/**
	* @typedef {string|number|bigint|boolean|null|undefined|symbol} Primitive
	*/
	/**
	* @typedef {{ [k:string|number|symbol]: any }} AnyObject
	*/
	/**
	* @template T
	* @typedef {T extends Schema<infer X> ? X : T} Unwrap
	*/
	/**
	* @template T
	* @typedef {T extends Schema<infer X> ? X : T} TypeOf
	*/
	/**
	* @template {readonly unknown[]} T
	* @typedef {T extends readonly [Schema<infer First>, ...infer Rest] ? [First, ...UnwrapArray<Rest>] : [] } UnwrapArray
	*/
	/**
	* @template T
	* @typedef {T extends Schema<infer S> ? Schema<S> : never} CastToSchema
	*/
	/**
	* @template {unknown[]} Arr
	* @typedef {Arr extends [...unknown[], infer L] ? L : never} TupleLast
	*/
	/**
	* @template {unknown[]} Arr
	* @typedef {Arr extends [...infer Fs, unknown] ? Fs : never} TuplePop
	*/
	/**
	* @template {readonly unknown[]} T
	* @typedef {T extends []
	*   ? {}
	*   : T extends [infer First]
	*   ? First
	*   : T extends [infer First, ...infer Rest]
	*   ? First & Intersect<Rest>
	*   : never
	* } Intersect
	*/
	var schemaSymbol = Symbol("0schema");
	var ValidationError = class {
		constructor() {
			/**
			* Reverse errors
			* @type {Array<{ path: string?, expected: string, has: string, message: string? }>}
			*/
			this._rerrs = [];
		}
		/**
		* @param {string?} path
		* @param {string} expected
		* @param {string} has
		* @param {string?} message
		*/
		extend(path, expected, has, message = null) {
			this._rerrs.push({
				path,
				expected,
				has,
				message
			});
		}
		toString() {
			const s = [];
			for (let i = this._rerrs.length - 1; i > 0; i--) {
				const r = this._rerrs[i];
				/* c8 ignore next */
				s.push(repeat(" ", (this._rerrs.length - i) * 2) + `${r.path != null ? `[${r.path}] ` : ""}${r.has} doesn't match ${r.expected}. ${r.message}`);
			}
			return s.join("\n");
		}
	};
	/**
	* @param {any} a
	* @param {any} b
	* @return {boolean}
	*/
	var shapeExtends = (a, b) => {
		if (a === b) return true;
		if (a == null || b == null || a.constructor !== b.constructor) return false;
		if (a[EqualityTraitSymbol]) return equals(a, b);
		if (isArray(a)) return every$1(a, (aitem) => some(b, (bitem) => shapeExtends(aitem, bitem)));
		else if (isObject(a)) return every(a, (aitem, akey) => shapeExtends(aitem, b[akey]));
		/* c8 ignore next */
		return false;
	};
	/**
	* @template T
	* @implements {equalityTraits.EqualityTrait}
	*/
	var Schema = class {
		/**
		* If true, the more things are added to the shape the more objects this schema will accept (e.g.
		* union). By default, the more objects are added, the the fewer objects this schema will accept.
		* @protected
		*/
		static _dilutes = false;
		/**
		* @param {Schema<any>} other
		*/
		extends(other) {
			let [a, b] = [this.shape, other.shape];
			if (this.constructor._dilutes) [b, a] = [a, b];
			return shapeExtends(a, b);
		}
		/**
		* Overwrite this when necessary. By default, we only check the `shape` property which every shape
		* should have.
		* @param {Schema<any>} other
		*/
		equals(other) {
			return this.constructor === other.constructor && equalityDeep(this.shape, other.shape);
		}
		[schemaSymbol]() {
			return true;
		}
		/**
		* @param {object} other
		*/
		[EqualityTraitSymbol](other) {
			return this.equals(other);
		}
		/**
		* Use `schema.validate(obj)` with a typed parameter that is already of typed to be an instance of
		* Schema. Validate will check the structure of the parameter and return true iff the instance
		* really is an instance of Schema.
		*
		* @param {T} o
		* @return {boolean}
		*/
		validate(o) {
			return this.check(o);
		}
		/* c8 ignore start */
		/**
		* Similar to validate, but this method accepts untyped parameters.
		*
		* @param {any} _o
		* @param {ValidationError} [_err]
		* @return {_o is T}
		*/
		check(_o, _err) {
			methodUnimplemented();
		}
		/* c8 ignore stop */
		/**
		* @type {Schema<T?>}
		*/
		get nullable() {
			return $union(this, $null);
		}
		/**
		* @type {$Optional<Schema<T>>}
		*/
		get optional() {
			return new $Optional(this);
		}
		/**
		* Cast a variable to a specific type. Returns the casted value, or throws an exception otherwise.
		* Use this if you know that the type is of a specific type and you just want to convince the type
		* system.
		*
		* **Do not rely on these error messages!**
		* Performs an assertion check only if not in a production environment.
		*
		* @template OO
		* @param {OO} o
		* @return {Extract<OO, T> extends never ? T : (OO extends Array<never> ? T : Extract<OO,T>)}
		*/
		cast(o) {
			assert(o, this);
			return o;
		}
		/**
		* EXPECTO PATRONUM!! 🪄
		* This function protects against type errors. Though it may not work in the real world.
		*
		* "After all this time?"
		* "Always." - Snape, talking about type safety
		*
		* Ensures that a variable is a a specific type. Returns the value, or throws an exception if the assertion check failed.
		* Use this if you know that the type is of a specific type and you just want to convince the type
		* system.
		*
		* Can be useful when defining lambdas: `s.lambda(s.$number, s.$void).expect((n) => n + 1)`
		*
		* **Do not rely on these error messages!**
		* Performs an assertion check if not in a production environment.
		*
		* @param {T} o
		* @return {o extends T ? T : never}
		*/
		expect(o) {
			assert(o, this);
			return o;
		}
	};
	/**
	* @template {(new (...args:any[]) => any) | ((...args:any[]) => any)} Constr
	* @typedef {Constr extends ((...args:any[]) => infer T) ? T : (Constr extends (new (...args:any[]) => any) ? InstanceType<Constr> : never)} Instance
	*/
	/**
	* @template {(new (...args:any[]) => any) | ((...args:any[]) => any)} C
	* @extends {Schema<Instance<C>>}
	*/
	var $ConstructedBy = class extends Schema {
		/**
		* @param {C} c
		* @param {((o:Instance<C>)=>boolean)|null} check
		*/
		constructor(c, check) {
			super();
			this.shape = c;
			this._c = check;
		}
		/**
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is C extends ((...args:any[]) => infer T) ? T : (C extends (new (...args:any[]) => any) ? InstanceType<C> : never)} o
		*/
		check(o, err = void 0) {
			const c = o?.constructor === this.shape && (this._c == null || this._c(o));
			/* c8 ignore next */
			!c && err?.extend(null, this.shape.name, o?.constructor.name, o?.constructor !== this.shape ? "Constructor match failed" : "Check failed");
			return c;
		}
	};
	/**
	* @template {(new (...args:any[]) => any) | ((...args:any[]) => any)} C
	* @param {C} c
	* @param {((o:Instance<C>) => boolean)|null} check
	* @return {CastToSchema<$ConstructedBy<C>>}
	*/
	var $constructedBy = (c, check = null) => new $ConstructedBy(c, check);
	$constructedBy($ConstructedBy);
	/**
	* Check custom properties on any object. You may want to overwrite the generated Schema<any>.
	*
	* @extends {Schema<any>}
	*/
	var $Custom = class extends Schema {
		/**
		* @param {(o:any) => boolean} check
		*/
		constructor(check) {
			super();
			/**
			* @type {(o:any) => boolean}
			*/
			this.shape = check;
		}
		/**
		* @param {any} o
		* @param {ValidationError} err
		* @return {o is any}
		*/
		check(o, err) {
			const c = this.shape(o);
			/* c8 ignore next */
			!c && err?.extend(null, "custom prop", o?.constructor.name, "failed to check custom prop");
			return c;
		}
	};
	/**
	* @param {(o:any) => boolean} check
	* @return {Schema<any>}
	*/
	var $custom = (check) => new $Custom(check);
	$constructedBy($Custom);
	/**
	* @template {Primitive} T
	* @extends {Schema<T>}
	*/
	var $Literal = class extends Schema {
		/**
		* @param {Array<T>} literals
		*/
		constructor(literals) {
			super();
			this.shape = literals;
		}
		/**
		*
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is T}
		*/
		check(o, err) {
			const c = this.shape.some((a) => a === o);
			/* c8 ignore next */
			!c && err?.extend(null, this.shape.join(" | "), o.toString());
			return c;
		}
	};
	/**
	* @template {Primitive[]} T
	* @param {T} literals
	* @return {CastToSchema<$Literal<T[number]>>}
	*/
	var $literal = (...literals) => new $Literal(literals);
	var $$literal = $constructedBy($Literal);
	/**
	* @template {Array<string|Schema<string|number>>} Ts
	* @typedef {Ts extends [] ? `` : (Ts extends [infer T] ? (Unwrap<T> extends (string|number) ? Unwrap<T> : never) : (Ts extends [infer T1, ...infer Rest] ? `${Unwrap<T1> extends (string|number) ? Unwrap<T1> : never}${Rest extends Array<string|Schema<string|number>> ? CastStringTemplateArgsToTemplate<Rest> : never}` : never))} CastStringTemplateArgsToTemplate
	*/
	/**
	* @param {string} str
	* @return {string}
	*/
	var _regexEscape = RegExp.escape || ((str) => str.replace(/[().|&,$^[\]]/g, (s) => "\\" + s));
	/**
	* @param {string|Schema<any>} s
	* @return {string[]}
	*/
	var _schemaStringTemplateToRegex = (s) => {
		if ($string.check(s)) return [_regexEscape(s)];
		if ($$literal.check(s)) return s.shape.map((v) => v + "");
		if ($$number.check(s)) return ["[+-]?\\d+.?\\d*"];
		if ($$string.check(s)) return [".*"];
		if ($$union.check(s)) return s.shape.map(_schemaStringTemplateToRegex).flat(1);
		/* c8 ignore next 2 */
		unexpectedCase();
	};
	/**
	* @template {Array<string|Schema<string|number>>} T
	* @extends {Schema<CastStringTemplateArgsToTemplate<T>>}
	*/
	var $StringTemplate = class extends Schema {
		/**
		* @param {T} shape
		*/
		constructor(shape) {
			super();
			this.shape = shape;
			this._r = new RegExp("^" + shape.map(_schemaStringTemplateToRegex).map((opts) => `(${opts.join("|")})`).join("") + "$");
		}
		/**
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is CastStringTemplateArgsToTemplate<T>}
		*/
		check(o, err) {
			const c = this._r.exec(o) != null;
			/* c8 ignore next */
			!c && err?.extend(null, this._r.toString(), o.toString(), "String doesn't match string template.");
			return c;
		}
	};
	$constructedBy($StringTemplate);
	var isOptionalSymbol = Symbol("optional");
	/**
	* @template {Schema<any>} S
	* @extends Schema<Unwrap<S>|undefined>
	*/
	var $Optional = class extends Schema {
		/**
		* @param {S} shape
		*/
		constructor(shape) {
			super();
			this.shape = shape;
		}
		/**
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is (Unwrap<S>|undefined)}
		*/
		check(o, err) {
			const c = o === void 0 || this.shape.check(o);
			/* c8 ignore next */
			!c && err?.extend(null, "undefined (optional)", "()");
			return c;
		}
		get [isOptionalSymbol]() {
			return true;
		}
	};
	var $$optional = $constructedBy($Optional);
	/**
	* @extends Schema<never>
	*/
	var $Never = class extends Schema {
		/**
		* @param {any} _o
		* @param {ValidationError} [err]
		* @return {_o is never}
		*/
		check(_o, err) {
			/* c8 ignore next */
			err?.extend(null, "never", typeof _o);
			return false;
		}
	};
	new $Never();
	$constructedBy($Never);
	/**
	* @template {{ [key: string|symbol|number]: Schema<any> }} S
	* @typedef {{ [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? Key : never]?: S[Key] extends $Optional<Schema<infer Type>> ? Type : never } & { [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? never : Key]: S[Key] extends Schema<infer Type> ? Type : never }} $ObjectToType
	*/
	/**
	* @template {{[key:string|symbol|number]: Schema<any>}} S
	* @extends {Schema<$ObjectToType<S>>}
	*/
	var $Object = class $Object extends Schema {
		/**
		* @param {S} shape
		* @param {boolean} partial
		*/
		constructor(shape, partial = false) {
			super();
			/**
			* @type {S}
			*/
			this.shape = shape;
			this._isPartial = partial;
		}
		static _dilutes = true;
		/**
		* @type {Schema<Partial<$ObjectToType<S>>>}
		*/
		get partial() {
			return new $Object(this.shape, true);
		}
		/**
		* @param {any} o
		* @param {ValidationError} err
		* @return {o is $ObjectToType<S>}
		*/
		check(o, err) {
			if (o == null) {
				/* c8 ignore next */
				err?.extend(null, "object", "null");
				return false;
			}
			return every(this.shape, (vv, vk) => {
				const c = this._isPartial && !hasProperty(o, vk) || vv.check(o[vk], err);
				!c && err?.extend(vk.toString(), vv.toString(), typeof o[vk], "Object property does not match");
				return c;
			});
		}
	};
	/**
	* @template S
	* @typedef {Schema<{ [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? Key : never]?: S[Key] extends $Optional<Schema<infer Type>> ? Type : never } & { [Key in keyof S as S[Key] extends $Optional<Schema<any>> ? never : Key]: S[Key] extends Schema<infer Type> ? Type : never }>} _ObjectDefToSchema
	*/
	/**
	* @template {{ [key:string|symbol|number]: Schema<any> }} S
	* @param {S} def
	* @return {_ObjectDefToSchema<S> extends Schema<infer S> ? Schema<{ [K in keyof S]: S[K] }> : never}
	*/
	var $object = (def) => new $Object(def);
	var $$object = $constructedBy($Object);
	/**
	* @type {Schema<{[key:string]: any}>}
	*/
	var $objectAny = $custom((o) => o != null && (o.constructor === Object || o.constructor == null));
	/**
	* @template {Schema<string|number|symbol>} Keys
	* @template {Schema<any>} Values
	* @extends {Schema<{ [key in Unwrap<Keys>]: Unwrap<Values> }>}
	*/
	var $Record = class extends Schema {
		/**
		* @param {Keys} keys
		* @param {Values} values
		*/
		constructor(keys, values) {
			super();
			this.shape = {
				keys,
				values
			};
		}
		/**
		* @param {any} o
		* @param {ValidationError} err
		* @return {o is { [key in Unwrap<Keys>]: Unwrap<Values> }}
		*/
		check(o, err) {
			return o != null && every(o, (vv, vk) => {
				const ck = this.shape.keys.check(vk, err);
				/* c8 ignore next */
				!ck && err?.extend(vk + "", "Record", typeof o, ck ? "Key doesn't match schema" : "Value doesn't match value");
				return ck && this.shape.values.check(vv, err);
			});
		}
	};
	/**
	* @template {Schema<string|number|symbol>} Keys
	* @template {Schema<any>} Values
	* @param {Keys} keys
	* @param {Values} values
	* @return {CastToSchema<$Record<Keys,Values>>}
	*/
	var $record = (keys, values) => new $Record(keys, values);
	var $$record = $constructedBy($Record);
	/**
	* @template {Schema<any>[]} S
	* @extends {Schema<{ [Key in keyof S]: S[Key] extends Schema<infer Type> ? Type : never }>}
	*/
	var $Tuple = class extends Schema {
		/**
		* @param {S} shape
		*/
		constructor(shape) {
			super();
			this.shape = shape;
		}
		/**
		* @param {any} o
		* @param {ValidationError} err
		* @return {o is { [K in keyof S]: S[K] extends Schema<infer Type> ? Type : never }}
		*/
		check(o, err) {
			return o != null && every(this.shape, (vv, vk) => {
				const c = vv.check(o[vk], err);
				/* c8 ignore next */
				!c && err?.extend(vk.toString(), "Tuple", typeof vv);
				return c;
			});
		}
	};
	/**
	* @template {Array<Schema<any>>} T
	* @param {T} def
	* @return {CastToSchema<$Tuple<T>>}
	*/
	var $tuple = (...def) => new $Tuple(def);
	$constructedBy($Tuple);
	/**
	* @template {Schema<any>} S
	* @extends {Schema<Array<S extends Schema<infer T> ? T : never>>}
	*/
	var $Array = class extends Schema {
		/**
		* @param {Array<S>} v
		*/
		constructor(v) {
			super();
			/**
			* @type {Schema<S extends Schema<infer T> ? T : never>}
			*/
			this.shape = v.length === 1 ? v[0] : new $Union(v);
		}
		/**
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is Array<S extends Schema<infer T> ? T : never>} o
		*/
		check(o, err) {
			const c = isArray(o) && every$1(o, (oi) => this.shape.check(oi));
			/* c8 ignore next */
			!c && err?.extend(null, "Array", "");
			return c;
		}
	};
	/**
	* @template {Array<Schema<any>>} T
	* @param {T} def
	* @return {Schema<Array<T extends Array<Schema<infer S>> ? S : never>>}
	*/
	var $array = (...def) => new $Array(def);
	var $$array = $constructedBy($Array);
	/**
	* @type {Schema<Array<any>>}
	*/
	var $arrayAny = $custom((o) => isArray(o));
	/**
	* @template T
	* @extends {Schema<T>}
	*/
	var $InstanceOf = class extends Schema {
		/**
		* @param {new (...args:any) => T} constructor
		* @param {((o:T) => boolean)|null} check
		*/
		constructor(constructor, check) {
			super();
			this.shape = constructor;
			this._c = check;
		}
		/**
		* @param {any} o
		* @param {ValidationError} err
		* @return {o is T}
		*/
		check(o, err) {
			const c = o instanceof this.shape && (this._c == null || this._c(o));
			/* c8 ignore next */
			!c && err?.extend(null, this.shape.name, o?.constructor.name);
			return c;
		}
	};
	/**
	* @template T
	* @param {new (...args:any) => T} c
	* @param {((o:T) => boolean)|null} check
	* @return {Schema<T>}
	*/
	var $instanceOf = (c, check = null) => new $InstanceOf(c, check);
	$constructedBy($InstanceOf);
	var $$schema = $instanceOf(Schema);
	/**
	* @template {Schema<any>[]} Args
	* @typedef {(...args:UnwrapArray<TuplePop<Args>>)=>Unwrap<TupleLast<Args>>} _LArgsToLambdaDef
	*/
	/**
	* @template {Array<Schema<any>>} Args
	* @extends {Schema<_LArgsToLambdaDef<Args>>}
	*/
	var $Lambda = class extends Schema {
		/**
		* @param {Args} args
		*/
		constructor(args) {
			super();
			this.len = args.length - 1;
			this.args = $tuple(...args.slice(-1));
			this.res = args[this.len];
		}
		/**
		* @param {any} f
		* @param {ValidationError} err
		* @return {f is _LArgsToLambdaDef<Args>}
		*/
		check(f, err) {
			const c = f.constructor === Function && f.length <= this.len;
			/* c8 ignore next */
			!c && err?.extend(null, "function", typeof f);
			return c;
		}
	};
	var $$lambda = $constructedBy($Lambda);
	/**
	* @type {Schema<Function>}
	*/
	var $function = $custom((o) => typeof o === "function");
	/**
	* @template {Array<Schema<any>>} T
	* @extends {Schema<Intersect<UnwrapArray<T>>>}
	*/
	var $Intersection = class extends Schema {
		/**
		* @param {T} v
		*/
		constructor(v) {
			super();
			/**
			* @type {T}
			*/
			this.shape = v;
		}
		/**
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is Intersect<UnwrapArray<T>>}
		*/
		check(o, err) {
			const c = every$1(this.shape, (check) => check.check(o, err));
			/* c8 ignore next */
			!c && err?.extend(null, "Intersectinon", typeof o);
			return c;
		}
	};
	$constructedBy($Intersection, (o) => o.shape.length > 0);
	/**
	* @template S
	* @extends {Schema<S>}
	*/
	var $Union = class extends Schema {
		static _dilutes = true;
		/**
		* @param {Array<Schema<S>>} v
		*/
		constructor(v) {
			super();
			this.shape = v;
		}
		/**
		* @param {any} o
		* @param {ValidationError} [err]
		* @return {o is S}
		*/
		check(o, err) {
			const c = some(this.shape, (vv) => vv.check(o, err));
			err?.extend(null, "Union", typeof o);
			return c;
		}
	};
	/**
	* @template {Array<any>} T
	* @param {T} schemas
	* @return {CastToSchema<$Union<Unwrap<ReadSchema<T>>>>}
	*/
	var $union = (...schemas) => schemas.findIndex(($s) => $$union.check($s)) >= 0 ? $union(...schemas.map(($s) => $($s)).map(($s) => $$union.check($s) ? $s.shape : [$s]).flat(1)) : schemas.length === 1 ? schemas[0] : new $Union(schemas);
	var $$union = $constructedBy($Union);
	var _t = () => true;
	/**
	* @type {Schema<any>}
	*/
	var $any = $custom(_t);
	var $$any = $constructedBy($Custom, (o) => o.shape === _t);
	/**
	* @type {Schema<bigint>}
	*/
	var $bigint = $custom((o) => typeof o === "bigint");
	var $$bigint = $custom((o) => o === $bigint);
	/**
	* @type {Schema<symbol>}
	*/
	var $symbol = $custom((o) => typeof o === "symbol");
	$custom((o) => o === $symbol);
	/**
	* @type {Schema<number>}
	*/
	var $number = $custom((o) => typeof o === "number");
	var $$number = $custom((o) => o === $number);
	/**
	* @type {Schema<string>}
	*/
	var $string = $custom((o) => typeof o === "string");
	var $$string = $custom((o) => o === $string);
	/**
	* @type {Schema<boolean>}
	*/
	var $boolean = $custom((o) => typeof o === "boolean");
	var $$boolean = $custom((o) => o === $boolean);
	/**
	* @type {Schema<undefined>}
	*/
	var $undefined = $literal(void 0);
	$constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === void 0);
	$literal(void 0);
	var $null = $literal(null);
	var $$null = $constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === null);
	$constructedBy(Uint8Array);
	$constructedBy($ConstructedBy, (o) => o.shape === Uint8Array);
	/**
	* @type {Schema<Primitive>}
	*/
	var $primitive = $union($number, $string, $null, $undefined, $bigint, $boolean, $symbol);
	(() => {
		const $jsonArr = $array($any);
		const $jsonRecord = $record($string, $any);
		const $json = $union($number, $string, $null, $boolean, $jsonArr, $jsonRecord);
		$jsonArr.shape = $json;
		$jsonRecord.shape.values = $json;
		return $json;
	})();
	/**
	* @template {any} IN
	* @typedef {IN extends Schema<any> ? IN
	*   : (IN extends string|number|boolean|null ? Schema<IN>
	*     : (IN extends new (...args:any[])=>any ? Schema<InstanceType<IN>>
	*       : (IN extends any[] ? Schema<{ [K in keyof IN]: Unwrap<ReadSchema<IN[K]>> }[number]>
	*       : (IN extends object ? (_ObjectDefToSchema<{[K in keyof IN]:ReadSchema<IN[K]>}> extends Schema<infer S> ? Schema<{ [K in keyof S]: S[K] }> : never)
	*         : never)
	*         )
	*       )
	*     )
	* } ReadSchemaOld
	*/
	/**
	* @template {any} IN
	* @typedef {[Extract<IN,Schema<any>>,Extract<IN,string|number|boolean|null>,Extract<IN,new (...args:any[])=>any>,Extract<IN,any[]>,Extract<Exclude<IN,Schema<any>|string|number|boolean|null|(new (...args:any[])=>any)|any[]>,object>] extends [infer Schemas, infer Primitives, infer Constructors, infer Arrs, infer Obj]
	*   ? Schema<
	*       (Schemas extends Schema<infer S> ? S : never)
	*     | Primitives
	*     | (Constructors extends new (...args:any[])=>any ? InstanceType<Constructors> : never)
	*     | (Arrs extends any[] ? { [K in keyof Arrs]: Unwrap<ReadSchema<Arrs[K]>> }[number] : never)
	*     | (Obj extends object ? Unwrap<(_ObjectDefToSchema<{[K in keyof Obj]:ReadSchema<Obj[K]>}> extends Schema<infer S> ? Schema<{ [K in keyof S]: S[K] }> : never)> : never)>
	*   : never
	* } ReadSchema
	*/
	/**
	* @typedef {ReadSchema<{x:42}|{y:99}|Schema<string>|[1,2,{}]>} Q
	*/
	/**
	* @template IN
	* @param {IN} o
	* @return {ReadSchema<IN>}
	*/
	var $ = (o) => {
		if ($$schema.check(o)) return o;
		else if ($objectAny.check(o)) {
			/**
			* @type {any}
			*/
			const o2 = {};
			for (const k in o) o2[k] = $(o[k]);
			return $object(o2);
		} else if ($arrayAny.check(o)) return $union(...o.map($));
		else if ($primitive.check(o)) return $literal(o);
		else if ($function.check(o)) return $constructedBy(o);
		/* c8 ignore next */
		unexpectedCase();
	};
	/* c8 ignore start */
	/**
	* Assert that a variable is of this specific type.
	* The assertion check is only performed in non-production environments.
	*
	* @type {<T>(o:any,schema:Schema<T>) => asserts o is T}
	*/
	var assert = production ? () => {} : (o, schema) => {
		const err = new ValidationError();
		if (!schema.check(o, err)) throw create$4(`Expected value to be of type ${schema.constructor.name}.\n${err.toString()}`);
	};
	/* c8 ignore end */
	/**
	* @template In
	* @template Out
	* @typedef {{ if: Schema<In>, h: (o:In,state?:any)=>Out }} Pattern
	*/
	/**
	* @template {Pattern<any,any>} P
	* @template In
	* @typedef {ReturnType<Extract<P,Pattern<In extends number ? number : (In extends string ? string : In),any>>['h']>} PatternMatchResult
	*/
	/**
	* @todo move this to separate library
	* @template {any} [State=undefined]
	* @template {Pattern<any,any>} [Patterns=never]
	*/
	var PatternMatcher = class {
		/**
		* @param {Schema<State>} [$state]
		*/
		constructor($state) {
			/**
			* @type {Array<Patterns>}
			*/
			this.patterns = [];
			this.$state = $state;
		}
		/**
		* @template P
		* @template R
		* @param {P} pattern
		* @param {(o:NoInfer<Unwrap<ReadSchema<P>>>,s:State)=>R} handler
		* @return {PatternMatcher<State,Patterns|Pattern<Unwrap<ReadSchema<P>>,R>>}
		*/
		if(pattern, handler) {
			this.patterns.push({
				if: $(pattern),
				h: handler
			});
			return this;
		}
		/**
		* @template R
		* @param {(o:any,s:State)=>R} h
		*/
		else(h) {
			return this.if($any, h);
		}
		/**
		* @return {State extends undefined
		*   ? <In extends Unwrap<Patterns['if']>>(o:In,state?:undefined)=>PatternMatchResult<Patterns,In>
		*   : <In extends Unwrap<Patterns['if']>>(o:In,state:State)=>PatternMatchResult<Patterns,In>}
		*/
		done() {
			return (o, s) => {
				for (let i = 0; i < this.patterns.length; i++) {
					const p = this.patterns[i];
					if (p.if.check(o)) return p.h(o, s);
				}
				throw create$4("Unhandled pattern");
			};
		}
	};
	/**
	* @template [State=undefined]
	* @param {State} [state]
	* @return {PatternMatcher<State extends undefined ? undefined : Unwrap<ReadSchema<State>>>}
	*/
	var match = (state) => new PatternMatcher(state);
	/**
	* Helper function to generate a (non-exhaustive) sample set from a gives schema.
	*
	* @type {<T>(o:T,gen:prng.PRNG)=>T}
	*/
	var _random = match($any).if($$number, (_o, gen) => int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER)).if($$string, (_o, gen) => word(gen)).if($$boolean, (_o, gen) => bool(gen)).if($$bigint, (_o, gen) => BigInt(int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER))).if($$union, (o, gen) => random(gen, oneOf(gen, o.shape))).if($$object, (o, gen) => {
		/**
		* @type {any}
		*/
		const res = {};
		for (const k in o.shape) {
			let prop = o.shape[k];
			if ($$optional.check(prop)) {
				if (bool(gen)) continue;
				prop = prop.shape;
			}
			res[k] = _random(prop, gen);
		}
		return res;
	}).if($$array, (o, gen) => {
		const arr = [];
		const n = int32(gen, 0, 42);
		for (let i = 0; i < n; i++) arr.push(random(gen, o.shape));
		return arr;
	}).if($$literal, (o, gen) => {
		return oneOf(gen, o.shape);
	}).if($$null, (o, gen) => {
		return null;
	}).if($$lambda, (o, gen) => {
		const res = random(gen, o.res);
		return () => res;
	}).if($$any, (o, gen) => random(gen, oneOf(gen, [
		$number,
		$string,
		$null,
		$undefined,
		$bigint,
		$boolean,
		$array($number),
		$record($union("a", "b", "c"), $number)
	]))).if($$record, (o, gen) => {
		/**
		* @type {any}
		*/
		const res = {};
		const keysN = int53(gen, 0, 3);
		for (let i = 0; i < keysN; i++) {
			const key = random(gen, o.shape.keys);
			res[key] = random(gen, o.shape.values);
		}
		return res;
	}).done();
	/**
	* @template S
	* @param {prng.PRNG} gen
	* @param {S} schema
	* @return {Unwrap<ReadSchema<S>>}
	*/
	var random = (gen, schema) => _random($(schema), gen);
	//#endregion
	//#region node_modules/lib0/dom.js
	/* c8 ignore start */
	/**
	* @type {Document}
	*/
	var doc = typeof document !== "undefined" ? document : {};
	$custom((el) => el.nodeType === DOCUMENT_FRAGMENT_NODE);
	typeof DOMParser !== "undefined" && new DOMParser();
	$custom((el) => el.nodeType === ELEMENT_NODE);
	$custom((el) => el.nodeType === TEXT_NODE);
	/**
	* @param {Map<string,string>} m
	* @return {string}
	*/
	var mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
	var ELEMENT_NODE = doc.ELEMENT_NODE;
	var TEXT_NODE = doc.TEXT_NODE;
	doc.CDATA_SECTION_NODE;
	doc.COMMENT_NODE;
	var DOCUMENT_NODE = doc.DOCUMENT_NODE;
	doc.DOCUMENT_TYPE_NODE;
	var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
	$custom((el) => el.nodeType === DOCUMENT_NODE);
	/* c8 ignore stop */
	//#endregion
	//#region node_modules/lib0/symbol.js
	/**
	* Utility module to work with EcmaScript Symbols.
	*
	* @module symbol
	*/
	/**
	* Return fresh symbol.
	*/
	var create = Symbol;
	//#endregion
	//#region node_modules/lib0/logging.common.js
	var BOLD = create();
	var UNBOLD = create();
	var BLUE = create();
	var GREY = create();
	var GREEN = create();
	var RED = create();
	var PURPLE = create();
	var ORANGE = create();
	var UNCOLOR = create();
	/* c8 ignore start */
	/**
	* @param {Array<undefined|string|Symbol|Object|number|function():any>} args
	* @return {Array<string|object|number|undefined>}
	*/
	var computeNoColorLoggingArgs = (args) => {
		if (args.length === 1 && args[0]?.constructor === Function) args = args[0]();
		const strBuilder = [];
		const logArgs = [];
		let i = 0;
		for (; i < args.length; i++) {
			const arg = args[i];
			if (arg === void 0) break;
			else if (arg.constructor === String || arg.constructor === Number) strBuilder.push(arg);
			else if (arg.constructor === Object) break;
		}
		if (i > 0) logArgs.push(strBuilder.join(""));
		for (; i < args.length; i++) {
			const arg = args[i];
			if (!(arg instanceof Symbol)) logArgs.push(arg);
		}
		return logArgs;
	};
	getUnixTime();
	/* c8 ignore stop */
	//#endregion
	//#region node_modules/lib0/logging.js
	/**
	* Isomorphic logging module with support for colors!
	*
	* @module logging
	*/
	/**
	* @type {Object<Symbol,pair.Pair<string,string>>}
	*/
	var _browserStyleMap = {
		[BOLD]: create$1("font-weight", "bold"),
		[UNBOLD]: create$1("font-weight", "normal"),
		[BLUE]: create$1("color", "blue"),
		[GREEN]: create$1("color", "green"),
		[GREY]: create$1("color", "grey"),
		[RED]: create$1("color", "red"),
		[PURPLE]: create$1("color", "purple"),
		[ORANGE]: create$1("color", "orange"),
		[UNCOLOR]: create$1("color", "black")
	};
	/**
	* @param {Array<string|Symbol|Object|number|function():any>} args
	* @return {Array<string|object|number>}
	*/
	/* c8 ignore start */
	var computeBrowserLoggingArgs = (args) => {
		if (args.length === 1 && args[0]?.constructor === Function) args = args[0]();
		const strBuilder = [];
		const styles = [];
		const currentStyle = create$3();
		/**
		* @type {Array<string|Object|number>}
		*/
		let logArgs = [];
		let i = 0;
		for (; i < args.length; i++) {
			const arg = args[i];
			const style = _browserStyleMap[arg];
			if (style !== void 0) currentStyle.set(style.left, style.right);
			else {
				if (arg === void 0) break;
				if (arg.constructor === String || arg.constructor === Number) {
					const style = mapToStyleString(currentStyle);
					if (i > 0 || style.length > 0) {
						strBuilder.push("%c" + arg);
						styles.push(style);
					} else strBuilder.push(arg);
				} else break;
			}
		}
		if (i > 0) {
			logArgs = styles;
			logArgs.unshift(strBuilder.join(""));
		}
		for (; i < args.length; i++) {
			const arg = args[i];
			if (!(arg instanceof Symbol)) logArgs.push(arg);
		}
		return logArgs;
	};
	/* c8 ignore stop */
	/* c8 ignore start */
	var computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
	/* c8 ignore stop */
	/**
	* @param {Array<string|Symbol|Object|number>} args
	*/
	var print = (...args) => {
		console.log(...computeLoggingArgs(args));
		/* c8 ignore next */
		vconsoles.forEach((vc) => vc.print(args));
	};
	/* c8 ignore start */
	/**
	* @param {Array<string|Symbol|Object|number>} args
	*/
	var warn = (...args) => {
		console.warn(...computeLoggingArgs(args));
		args.unshift(ORANGE);
		vconsoles.forEach((vc) => vc.print(args));
	};
	var vconsoles = create$5();
	//#endregion
	//#region node_modules/lib0/iterator.js
	/**
	* @template T
	* @param {function():IteratorResult<T>} next
	* @return {IterableIterator<T>}
	*/
	var createIterator = (next) => ({
		/**
		* @return {IterableIterator<T>}
		*/
		[Symbol.iterator]() {
			return this;
		},
		next
	});
	/**
	* @template T
	* @param {Iterator<T>} iterator
	* @param {function(T):boolean} filter
	*/
	var iteratorFilter = (iterator, filter) => createIterator(() => {
		let res;
		do
			res = iterator.next();
		while (!res.done && !filter(res.value));
		return res;
	});
	/**
	* @template T,M
	* @param {Iterator<T>} iterator
	* @param {function(T):M} fmap
	*/
	var iteratorMap = (iterator, fmap) => createIterator(() => {
		const { done, value } = iterator.next();
		return {
			done,
			value: done ? void 0 : fmap(value)
		};
	});
	//#endregion
	//#region node_modules/yjs/dist/yjs.mjs
	var DeleteItem = class {
		/**
		* @param {number} clock
		* @param {number} len
		*/
		constructor(clock, len) {
			/**
			* @type {number}
			*/
			this.clock = clock;
			/**
			* @type {number}
			*/
			this.len = len;
		}
	};
	/**
	* We no longer maintain a DeleteStore. DeleteSet is a temporary object that is created when needed.
	* - When created in a transaction, it must only be accessed after sorting, and merging
	*   - This DeleteSet is send to other clients
	* - We do not create a DeleteSet when we send a sync message. The DeleteSet message is created directly from StructStore
	* - We read a DeleteSet as part of a sync/update message. In this case the DeleteSet is already sorted and merged.
	*/
	var DeleteSet = class {
		constructor() {
			/**
			* @type {Map<number,Array<DeleteItem>>}
			*/
			this.clients = /* @__PURE__ */ new Map();
		}
	};
	/**
	* Iterate over all structs that the DeleteSet gc's.
	*
	* @param {Transaction} transaction
	* @param {DeleteSet} ds
	* @param {function(GC|Item):void} f
	*
	* @function
	*/
	var iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
		const structs = transaction.doc.store.clients.get(clientid);
		if (structs != null) {
			const lastStruct = structs[structs.length - 1];
			const clockState = lastStruct.id.clock + lastStruct.length;
			for (let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i]) iterateStructs(transaction, structs, del.clock, del.len, f);
		}
	});
	/**
	* @param {Array<DeleteItem>} dis
	* @param {number} clock
	* @return {number|null}
	*
	* @private
	* @function
	*/
	var findIndexDS = (dis, clock) => {
		let left = 0;
		let right = dis.length - 1;
		while (left <= right) {
			const midindex = floor((left + right) / 2);
			const mid = dis[midindex];
			const midclock = mid.clock;
			if (midclock <= clock) {
				if (clock < midclock + mid.len) return midindex;
				left = midindex + 1;
			} else right = midindex - 1;
		}
		return null;
	};
	/**
	* @param {DeleteSet} ds
	* @param {ID} id
	* @return {boolean}
	*
	* @private
	* @function
	*/
	var isDeleted = (ds, id) => {
		const dis = ds.clients.get(id.client);
		return dis !== void 0 && findIndexDS(dis, id.clock) !== null;
	};
	/**
	* @param {DeleteSet} ds
	*
	* @private
	* @function
	*/
	var sortAndMergeDeleteSet = (ds) => {
		ds.clients.forEach((dels) => {
			dels.sort((a, b) => a.clock - b.clock);
			let i, j;
			for (i = 1, j = 1; i < dels.length; i++) {
				const left = dels[j - 1];
				const right = dels[i];
				if (left.clock + left.len >= right.clock) dels[j - 1] = new DeleteItem(left.clock, max(left.len, right.clock + right.len - left.clock));
				else {
					if (j < i) dels[j] = right;
					j++;
				}
			}
			dels.length = j;
		});
	};
	/**
	* @param {Array<DeleteSet>} dss
	* @return {DeleteSet} A fresh DeleteSet
	*/
	var mergeDeleteSets = (dss) => {
		const merged = new DeleteSet();
		for (let dssI = 0; dssI < dss.length; dssI++) dss[dssI].clients.forEach((delsLeft, client) => {
			if (!merged.clients.has(client)) {
				/**
				* @type {Array<DeleteItem>}
				*/
				const dels = delsLeft.slice();
				for (let i = dssI + 1; i < dss.length; i++) appendTo(dels, dss[i].clients.get(client) || []);
				merged.clients.set(client, dels);
			}
		});
		sortAndMergeDeleteSet(merged);
		return merged;
	};
	/**
	* @param {DeleteSet} ds
	* @param {number} client
	* @param {number} clock
	* @param {number} length
	*
	* @private
	* @function
	*/
	var addToDeleteSet = (ds, client, clock, length) => {
		setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length));
	};
	var createDeleteSet = () => new DeleteSet();
	/**
	* @param {DSEncoderV1 | DSEncoderV2} encoder
	* @param {DeleteSet} ds
	*
	* @private
	* @function
	*/
	var writeDeleteSet = (encoder, ds) => {
		writeVarUint(encoder.restEncoder, ds.clients.size);
		from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
			encoder.resetDsCurVal();
			writeVarUint(encoder.restEncoder, client);
			const len = dsitems.length;
			writeVarUint(encoder.restEncoder, len);
			for (let i = 0; i < len; i++) {
				const item = dsitems[i];
				encoder.writeDsClock(item.clock);
				encoder.writeDsLen(item.len);
			}
		});
	};
	/**
	* @param {DSDecoderV1 | DSDecoderV2} decoder
	* @return {DeleteSet}
	*
	* @private
	* @function
	*/
	var readDeleteSet = (decoder) => {
		const ds = new DeleteSet();
		const numClients = readVarUint(decoder.restDecoder);
		for (let i = 0; i < numClients; i++) {
			decoder.resetDsCurVal();
			const client = readVarUint(decoder.restDecoder);
			const numberOfDeletes = readVarUint(decoder.restDecoder);
			if (numberOfDeletes > 0) {
				const dsField = setIfUndefined(ds.clients, client, () => []);
				for (let i = 0; i < numberOfDeletes; i++) dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
			}
		}
		return ds;
	};
	/**
	* @todo YDecoder also contains references to String and other Decoders. Would make sense to exchange YDecoder.toUint8Array for YDecoder.DsToUint8Array()..
	*/
	/**
	* @param {DSDecoderV1 | DSDecoderV2} decoder
	* @param {Transaction} transaction
	* @param {StructStore} store
	* @return {Uint8Array|null} Returns a v2 update containing all deletes that couldn't be applied yet; or null if all deletes were applied successfully.
	*
	* @private
	* @function
	*/
	var readAndApplyDeleteSet = (decoder, transaction, store) => {
		const unappliedDS = new DeleteSet();
		const numClients = readVarUint(decoder.restDecoder);
		for (let i = 0; i < numClients; i++) {
			decoder.resetDsCurVal();
			const client = readVarUint(decoder.restDecoder);
			const numberOfDeletes = readVarUint(decoder.restDecoder);
			const structs = store.clients.get(client) || [];
			const state = getState(store, client);
			for (let i = 0; i < numberOfDeletes; i++) {
				const clock = decoder.readDsClock();
				const clockEnd = clock + decoder.readDsLen();
				if (clock < state) {
					if (state < clockEnd) addToDeleteSet(unappliedDS, client, state, clockEnd - state);
					let index = findIndexSS(structs, clock);
					/**
					* We can ignore the case of GC and Delete structs, because we are going to skip them
					* @type {Item}
					*/
					let struct = structs[index];
					if (!struct.deleted && struct.id.clock < clock) {
						structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
						index++;
					}
					while (index < structs.length) {
						struct = structs[index++];
						if (struct.id.clock < clockEnd) {
							if (!struct.deleted) {
								if (clockEnd < struct.id.clock + struct.length) structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
								struct.delete(transaction);
							}
						} else break;
					}
				} else addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
			}
		}
		if (unappliedDS.clients.size > 0) {
			const ds = new UpdateEncoderV2();
			writeVarUint(ds.restEncoder, 0);
			writeDeleteSet(ds, unappliedDS);
			return ds.toUint8Array();
		}
		return null;
	};
	/**
	* @module Y
	*/
	var generateNewClientId = uint32;
	/**
	* @typedef {Object} DocOpts
	* @property {boolean} [DocOpts.gc=true] Disable garbage collection (default: gc=true)
	* @property {function(Item):boolean} [DocOpts.gcFilter] Will be called before an Item is garbage collected. Return false to keep the Item.
	* @property {string} [DocOpts.guid] Define a globally unique identifier for this document
	* @property {string | null} [DocOpts.collectionid] Associate this document with a collection. This only plays a role if your provider has a concept of collection.
	* @property {any} [DocOpts.meta] Any kind of meta information you want to associate with this document. If this is a subdocument, remote peers will store the meta information as well.
	* @property {boolean} [DocOpts.autoLoad] If a subdocument, automatically load document. If this is a subdocument, remote peers will load the document as well automatically.
	* @property {boolean} [DocOpts.shouldLoad] Whether the document should be synced by the provider now. This is toggled to true when you call ydoc.load()
	*/
	/**
	* @typedef {Object} DocEvents
	* @property {function(Doc):void} DocEvents.destroy
	* @property {function(Doc):void} DocEvents.load
	* @property {function(boolean, Doc):void} DocEvents.sync
	* @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.update
	* @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.updateV2
	* @property {function(Doc):void} DocEvents.beforeAllTransactions
	* @property {function(Transaction, Doc):void} DocEvents.beforeTransaction
	* @property {function(Transaction, Doc):void} DocEvents.beforeObserverCalls
	* @property {function(Transaction, Doc):void} DocEvents.afterTransaction
	* @property {function(Transaction, Doc):void} DocEvents.afterTransactionCleanup
	* @property {function(Doc, Array<Transaction>):void} DocEvents.afterAllTransactions
	* @property {function({ loaded: Set<Doc>, added: Set<Doc>, removed: Set<Doc> }, Doc, Transaction):void} DocEvents.subdocs
	*/
	/**
	* A Yjs instance handles the state of shared data.
	* @extends ObservableV2<DocEvents>
	*/
	var Doc = class Doc extends ObservableV2 {
		/**
		* @param {DocOpts} opts configuration
		*/
		constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
			super();
			this.gc = gc;
			this.gcFilter = gcFilter;
			this.clientID = generateNewClientId();
			this.guid = guid;
			this.collectionid = collectionid;
			/**
			* @type {Map<string, AbstractType<YEvent<any>>>}
			*/
			this.share = /* @__PURE__ */ new Map();
			this.store = new StructStore();
			/**
			* @type {Transaction | null}
			*/
			this._transaction = null;
			/**
			* @type {Array<Transaction>}
			*/
			this._transactionCleanups = [];
			/**
			* @type {Set<Doc>}
			*/
			this.subdocs = /* @__PURE__ */ new Set();
			/**
			* If this document is a subdocument - a document integrated into another document - then _item is defined.
			* @type {Item?}
			*/
			this._item = null;
			this.shouldLoad = shouldLoad;
			this.autoLoad = autoLoad;
			this.meta = meta;
			/**
			* This is set to true when the persistence provider loaded the document from the database or when the `sync` event fires.
			* Note that not all providers implement this feature. Provider authors are encouraged to fire the `load` event when the doc content is loaded from the database.
			*
			* @type {boolean}
			*/
			this.isLoaded = false;
			/**
			* This is set to true when the connection provider has successfully synced with a backend.
			* Note that when using peer-to-peer providers this event may not provide very useful.
			* Also note that not all providers implement this feature. Provider authors are encouraged to fire
			* the `sync` event when the doc has been synced (with `true` as a parameter) or if connection is
			* lost (with false as a parameter).
			*/
			this.isSynced = false;
			this.isDestroyed = false;
			/**
			* Promise that resolves once the document has been loaded from a persistence provider.
			*/
			this.whenLoaded = create$2((resolve) => {
				this.on("load", () => {
					this.isLoaded = true;
					resolve(this);
				});
			});
			const provideSyncedPromise = () => create$2((resolve) => {
				/**
				* @param {boolean} isSynced
				*/
				const eventHandler = (isSynced) => {
					if (isSynced === void 0 || isSynced === true) {
						this.off("sync", eventHandler);
						resolve();
					}
				};
				this.on("sync", eventHandler);
			});
			this.on("sync", (isSynced) => {
				if (isSynced === false && this.isSynced) this.whenSynced = provideSyncedPromise();
				this.isSynced = isSynced === void 0 || isSynced === true;
				if (this.isSynced && !this.isLoaded) this.emit("load", [this]);
			});
			/**
			* Promise that resolves once the document has been synced with a backend.
			* This promise is recreated when the connection is lost.
			* Note the documentation about the `isSynced` property.
			*/
			this.whenSynced = provideSyncedPromise();
		}
		/**
		* Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
		*
		* `load()` might be used in the future to request any provider to load the most current data.
		*
		* It is safe to call `load()` multiple times.
		*/
		load() {
			const item = this._item;
			if (item !== null && !this.shouldLoad) transact(
				/** @type {any} */
				item.parent.doc,
				(transaction) => {
					transaction.subdocsLoaded.add(this);
				},
				null,
				true
			);
			this.shouldLoad = true;
		}
		getSubdocs() {
			return this.subdocs;
		}
		getSubdocGuids() {
			return new Set(from(this.subdocs).map((doc) => doc.guid));
		}
		/**
		* Changes that happen inside of a transaction are bundled. This means that
		* the observer fires _after_ the transaction is finished and that all changes
		* that happened inside of the transaction are sent as one message to the
		* other peers.
		*
		* @template T
		* @param {function(Transaction):T} f The function that should be executed as a transaction
		* @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
		* @return T
		*
		* @public
		*/
		transact(f, origin = null) {
			return transact(this, f, origin);
		}
		/**
		* Define a shared data type.
		*
		* Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
		* and do not overwrite each other. I.e.
		* `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
		*
		* After this method is called, the type is also available on `ydoc.share.get(name)`.
		*
		* *Best Practices:*
		* Define all types right after the Y.Doc instance is created and store them in a separate object.
		* Also use the typed methods `getText(name)`, `getArray(name)`, ..
		*
		* @template {typeof AbstractType<any>} Type
		* @example
		*   const ydoc = new Y.Doc(..)
		*   const appState = {
		*     document: ydoc.getText('document')
		*     comments: ydoc.getArray('comments')
		*   }
		*
		* @param {string} name
		* @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
		* @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
		*
		* @public
		*/
		get(name, TypeConstructor = AbstractType) {
			const type = setIfUndefined(this.share, name, () => {
				const t = new TypeConstructor();
				t._integrate(this, null);
				return t;
			});
			const Constr = type.constructor;
			if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
				if (Constr === AbstractType) {
					const t = new TypeConstructor();
					t._map = type._map;
					type._map.forEach(
						/** @param {Item?} n */
						(n) => {
							for (; n !== null; n = n.left) n.parent = t;
						}
					);
					t._start = type._start;
					for (let n = t._start; n !== null; n = n.right) n.parent = t;
					t._length = type._length;
					this.share.set(name, t);
					t._integrate(this, null);
					return t;
				} else throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
			}
			return type;
		}
		/**
		* @template T
		* @param {string} [name]
		* @return {YArray<T>}
		*
		* @public
		*/
		getArray(name = "") {
			return this.get(name, YArray);
		}
		/**
		* @param {string} [name]
		* @return {YText}
		*
		* @public
		*/
		getText(name = "") {
			return this.get(name, YText);
		}
		/**
		* @template T
		* @param {string} [name]
		* @return {YMap<T>}
		*
		* @public
		*/
		getMap(name = "") {
			return this.get(name, YMap);
		}
		/**
		* @param {string} [name]
		* @return {YXmlElement}
		*
		* @public
		*/
		getXmlElement(name = "") {
			return this.get(name, YXmlElement);
		}
		/**
		* @param {string} [name]
		* @return {YXmlFragment}
		*
		* @public
		*/
		getXmlFragment(name = "") {
			return this.get(name, YXmlFragment);
		}
		/**
		* Converts the entire document into a js object, recursively traversing each yjs type
		* Doesn't log types that have not been defined (using ydoc.getType(..)).
		*
		* @deprecated Do not use this method and rather call toJSON directly on the shared types.
		*
		* @return {Object<string, any>}
		*/
		toJSON() {
			/**
			* @type {Object<string, any>}
			*/
			const doc = {};
			this.share.forEach((value, key) => {
				doc[key] = value.toJSON();
			});
			return doc;
		}
		/**
		* Emit `destroy` event and unregister all event handlers.
		*/
		destroy() {
			this.isDestroyed = true;
			from(this.subdocs).forEach((subdoc) => subdoc.destroy());
			const item = this._item;
			if (item !== null) {
				this._item = null;
				const content = item.content;
				content.doc = new Doc({
					guid: this.guid,
					...content.opts,
					shouldLoad: false
				});
				content.doc._item = item;
				transact(
					/** @type {any} */
					item.parent.doc,
					(transaction) => {
						const doc = content.doc;
						if (!item.deleted) transaction.subdocsAdded.add(doc);
						transaction.subdocsRemoved.add(this);
					},
					null,
					true
				);
			}
			this.emit("destroyed", [true]);
			this.emit("destroy", [this]);
			super.destroy();
		}
	};
	var DSDecoderV2 = class {
		/**
		* @param {decoding.Decoder} decoder
		*/
		constructor(decoder) {
			/**
			* @private
			*/
			this.dsCurrVal = 0;
			this.restDecoder = decoder;
		}
		resetDsCurVal() {
			this.dsCurrVal = 0;
		}
		/**
		* @return {number}
		*/
		readDsClock() {
			this.dsCurrVal += readVarUint(this.restDecoder);
			return this.dsCurrVal;
		}
		/**
		* @return {number}
		*/
		readDsLen() {
			const diff = readVarUint(this.restDecoder) + 1;
			this.dsCurrVal += diff;
			return diff;
		}
	};
	var UpdateDecoderV2 = class extends DSDecoderV2 {
		/**
		* @param {decoding.Decoder} decoder
		*/
		constructor(decoder) {
			super(decoder);
			/**
			* List of cached keys. If the keys[id] does not exist, we read a new key
			* from stringEncoder and push it to keys.
			*
			* @type {Array<string>}
			*/
			this.keys = [];
			readVarUint(decoder);
			this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
			this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
			this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
			this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
			this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
			this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
			this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
			this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
			this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
		}
		/**
		* @return {ID}
		*/
		readLeftID() {
			return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
		}
		/**
		* @return {ID}
		*/
		readRightID() {
			return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
		}
		/**
		* Read the next client id.
		* Use this in favor of readID whenever possible to reduce the number of objects created.
		*/
		readClient() {
			return this.clientDecoder.read();
		}
		/**
		* @return {number} info An unsigned 8-bit integer
		*/
		readInfo() {
			return this.infoDecoder.read();
		}
		/**
		* @return {string}
		*/
		readString() {
			return this.stringDecoder.read();
		}
		/**
		* @return {boolean}
		*/
		readParentInfo() {
			return this.parentInfoDecoder.read() === 1;
		}
		/**
		* @return {number} An unsigned 8-bit integer
		*/
		readTypeRef() {
			return this.typeRefDecoder.read();
		}
		/**
		* Write len of a struct - well suited for Opt RLE encoder.
		*
		* @return {number}
		*/
		readLen() {
			return this.lenDecoder.read();
		}
		/**
		* @return {any}
		*/
		readAny() {
			return readAny(this.restDecoder);
		}
		/**
		* @return {Uint8Array}
		*/
		readBuf() {
			return readVarUint8Array(this.restDecoder);
		}
		/**
		* This is mainly here for legacy purposes.
		*
		* Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
		*
		* @return {any}
		*/
		readJSON() {
			return readAny(this.restDecoder);
		}
		/**
		* @return {string}
		*/
		readKey() {
			const keyClock = this.keyClockDecoder.read();
			if (keyClock < this.keys.length) return this.keys[keyClock];
			else {
				const key = this.stringDecoder.read();
				this.keys.push(key);
				return key;
			}
		}
	};
	var DSEncoderV1 = class {
		constructor() {
			this.restEncoder = createEncoder();
		}
		toUint8Array() {
			return toUint8Array(this.restEncoder);
		}
		resetDsCurVal() {}
		/**
		* @param {number} clock
		*/
		writeDsClock(clock) {
			writeVarUint(this.restEncoder, clock);
		}
		/**
		* @param {number} len
		*/
		writeDsLen(len) {
			writeVarUint(this.restEncoder, len);
		}
	};
	var UpdateEncoderV1 = class extends DSEncoderV1 {
		/**
		* @param {ID} id
		*/
		writeLeftID(id) {
			writeVarUint(this.restEncoder, id.client);
			writeVarUint(this.restEncoder, id.clock);
		}
		/**
		* @param {ID} id
		*/
		writeRightID(id) {
			writeVarUint(this.restEncoder, id.client);
			writeVarUint(this.restEncoder, id.clock);
		}
		/**
		* Use writeClient and writeClock instead of writeID if possible.
		* @param {number} client
		*/
		writeClient(client) {
			writeVarUint(this.restEncoder, client);
		}
		/**
		* @param {number} info An unsigned 8-bit integer
		*/
		writeInfo(info) {
			writeUint8(this.restEncoder, info);
		}
		/**
		* @param {string} s
		*/
		writeString(s) {
			writeVarString(this.restEncoder, s);
		}
		/**
		* @param {boolean} isYKey
		*/
		writeParentInfo(isYKey) {
			writeVarUint(this.restEncoder, isYKey ? 1 : 0);
		}
		/**
		* @param {number} info An unsigned 8-bit integer
		*/
		writeTypeRef(info) {
			writeVarUint(this.restEncoder, info);
		}
		/**
		* Write len of a struct - well suited for Opt RLE encoder.
		*
		* @param {number} len
		*/
		writeLen(len) {
			writeVarUint(this.restEncoder, len);
		}
		/**
		* @param {any} any
		*/
		writeAny(any) {
			writeAny(this.restEncoder, any);
		}
		/**
		* @param {Uint8Array} buf
		*/
		writeBuf(buf) {
			writeVarUint8Array(this.restEncoder, buf);
		}
		/**
		* @param {any} embed
		*/
		writeJSON(embed) {
			writeVarString(this.restEncoder, JSON.stringify(embed));
		}
		/**
		* @param {string} key
		*/
		writeKey(key) {
			writeVarString(this.restEncoder, key);
		}
	};
	var DSEncoderV2 = class {
		constructor() {
			this.restEncoder = createEncoder();
			this.dsCurrVal = 0;
		}
		toUint8Array() {
			return toUint8Array(this.restEncoder);
		}
		resetDsCurVal() {
			this.dsCurrVal = 0;
		}
		/**
		* @param {number} clock
		*/
		writeDsClock(clock) {
			const diff = clock - this.dsCurrVal;
			this.dsCurrVal = clock;
			writeVarUint(this.restEncoder, diff);
		}
		/**
		* @param {number} len
		*/
		writeDsLen(len) {
			if (len === 0) unexpectedCase();
			writeVarUint(this.restEncoder, len - 1);
			this.dsCurrVal += len;
		}
	};
	var UpdateEncoderV2 = class extends DSEncoderV2 {
		constructor() {
			super();
			/**
			* @type {Map<string,number>}
			*/
			this.keyMap = /* @__PURE__ */ new Map();
			/**
			* Refers to the next unique key-identifier to me used.
			* See writeKey method for more information.
			*
			* @type {number}
			*/
			this.keyClock = 0;
			this.keyClockEncoder = new IntDiffOptRleEncoder();
			this.clientEncoder = new UintOptRleEncoder();
			this.leftClockEncoder = new IntDiffOptRleEncoder();
			this.rightClockEncoder = new IntDiffOptRleEncoder();
			this.infoEncoder = new RleEncoder(writeUint8);
			this.stringEncoder = new StringEncoder();
			this.parentInfoEncoder = new RleEncoder(writeUint8);
			this.typeRefEncoder = new UintOptRleEncoder();
			this.lenEncoder = new UintOptRleEncoder();
		}
		toUint8Array() {
			const encoder = createEncoder();
			writeVarUint(encoder, 0);
			writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
			writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
			writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
			writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
			writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
			writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
			writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
			writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
			writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
			writeUint8Array(encoder, toUint8Array(this.restEncoder));
			return toUint8Array(encoder);
		}
		/**
		* @param {ID} id
		*/
		writeLeftID(id) {
			this.clientEncoder.write(id.client);
			this.leftClockEncoder.write(id.clock);
		}
		/**
		* @param {ID} id
		*/
		writeRightID(id) {
			this.clientEncoder.write(id.client);
			this.rightClockEncoder.write(id.clock);
		}
		/**
		* @param {number} client
		*/
		writeClient(client) {
			this.clientEncoder.write(client);
		}
		/**
		* @param {number} info An unsigned 8-bit integer
		*/
		writeInfo(info) {
			this.infoEncoder.write(info);
		}
		/**
		* @param {string} s
		*/
		writeString(s) {
			this.stringEncoder.write(s);
		}
		/**
		* @param {boolean} isYKey
		*/
		writeParentInfo(isYKey) {
			this.parentInfoEncoder.write(isYKey ? 1 : 0);
		}
		/**
		* @param {number} info An unsigned 8-bit integer
		*/
		writeTypeRef(info) {
			this.typeRefEncoder.write(info);
		}
		/**
		* Write len of a struct - well suited for Opt RLE encoder.
		*
		* @param {number} len
		*/
		writeLen(len) {
			this.lenEncoder.write(len);
		}
		/**
		* @param {any} any
		*/
		writeAny(any) {
			writeAny(this.restEncoder, any);
		}
		/**
		* @param {Uint8Array} buf
		*/
		writeBuf(buf) {
			writeVarUint8Array(this.restEncoder, buf);
		}
		/**
		* This is mainly here for legacy purposes.
		*
		* Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
		*
		* @param {any} embed
		*/
		writeJSON(embed) {
			writeAny(this.restEncoder, embed);
		}
		/**
		* Property keys are often reused. For example, in y-prosemirror the key `bold` might
		* occur very often. For a 3d application, the key `position` might occur very often.
		*
		* We cache these keys in a Map and refer to them via a unique number.
		*
		* @param {string} key
		*/
		writeKey(key) {
			const clock = this.keyMap.get(key);
			if (clock === void 0) {
				/**
				* @todo uncomment to introduce this feature finally
				*
				* Background. The ContentFormat object was always encoded using writeKey, but the decoder used to use readString.
				* Furthermore, I forgot to set the keyclock. So everything was working fine.
				*
				* However, this feature here is basically useless as it is not being used (it actually only consumes extra memory).
				*
				* I don't know yet how to reintroduce this feature..
				*
				* Older clients won't be able to read updates when we reintroduce this feature. So this should probably be done using a flag.
				*
				*/
				this.keyClockEncoder.write(this.keyClock++);
				this.stringEncoder.write(key);
			} else this.keyClockEncoder.write(clock);
		}
	};
	/**
	* @module encoding
	*/
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {Array<GC|Item>} structs All structs by `client`
	* @param {number} client
	* @param {number} clock write structs starting with `ID(client,clock)`
	*
	* @function
	*/
	var writeStructs = (encoder, structs, client, clock) => {
		clock = max(clock, structs[0].id.clock);
		const startNewStructs = findIndexSS(structs, clock);
		writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
		encoder.writeClient(client);
		writeVarUint(encoder.restEncoder, clock);
		const firstStruct = structs[startNewStructs];
		firstStruct.write(encoder, clock - firstStruct.id.clock);
		for (let i = startNewStructs + 1; i < structs.length; i++) structs[i].write(encoder, 0);
	};
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {StructStore} store
	* @param {Map<number,number>} _sm
	*
	* @private
	* @function
	*/
	var writeClientsStructs = (encoder, store, _sm) => {
		const sm = /* @__PURE__ */ new Map();
		_sm.forEach((clock, client) => {
			if (getState(store, client) > clock) sm.set(client, clock);
		});
		getStateVector(store).forEach((_clock, client) => {
			if (!_sm.has(client)) sm.set(client, 0);
		});
		writeVarUint(encoder.restEncoder, sm.size);
		from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
			writeStructs(encoder, store.clients.get(client), client, clock);
		});
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder The decoder object to read data from.
	* @param {Doc} doc
	* @return {Map<number, { i: number, refs: Array<Item | GC> }>}
	*
	* @private
	* @function
	*/
	var readClientsStructRefs = (decoder, doc) => {
		/**
		* @type {Map<number, { i: number, refs: Array<Item | GC> }>}
		*/
		const clientRefs = create$3();
		const numOfStateUpdates = readVarUint(decoder.restDecoder);
		for (let i = 0; i < numOfStateUpdates; i++) {
			const numberOfStructs = readVarUint(decoder.restDecoder);
			/**
			* @type {Array<GC|Item>}
			*/
			const refs = new Array(numberOfStructs);
			const client = decoder.readClient();
			let clock = readVarUint(decoder.restDecoder);
			clientRefs.set(client, {
				i: 0,
				refs
			});
			for (let i = 0; i < numberOfStructs; i++) {
				const info = decoder.readInfo();
				switch (31 & info) {
					case 0: {
						const len = decoder.readLen();
						refs[i] = new GC(createID(client, clock), len);
						clock += len;
						break;
					}
					case 10: {
						const len = readVarUint(decoder.restDecoder);
						refs[i] = new Skip(createID(client, clock), len);
						clock += len;
						break;
					}
					default: {
						/**
						* The optimized implementation doesn't use any variables because inlining variables is faster.
						* Below a non-optimized version is shown that implements the basic algorithm with
						* a few comments
						*/
						const cantCopyParentInfo = (info & 192) === 0;
						const struct = new Item(createID(client, clock), null, (info & 128) === 128 ? decoder.readLeftID() : null, null, (info & 64) === 64 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? doc.get(decoder.readString()) : decoder.readLeftID() : null, cantCopyParentInfo && (info & 32) === 32 ? decoder.readString() : null, readItemContent(decoder, info));
						refs[i] = struct;
						clock += struct.length;
					}
				}
			}
		}
		return clientRefs;
	};
	/**
	* Resume computing structs generated by struct readers.
	*
	* While there is something to do, we integrate structs in this order
	* 1. top element on stack, if stack is not empty
	* 2. next element from current struct reader (if empty, use next struct reader)
	*
	* If struct causally depends on another struct (ref.missing), we put next reader of
	* `ref.id.client` on top of stack.
	*
	* At some point we find a struct that has no causal dependencies,
	* then we start emptying the stack.
	*
	* It is not possible to have circles: i.e. struct1 (from client1) depends on struct2 (from client2)
	* depends on struct3 (from client1). Therefore the max stack size is equal to `structReaders.length`.
	*
	* This method is implemented in a way so that we can resume computation if this update
	* causally depends on another update.
	*
	* @param {Transaction} transaction
	* @param {StructStore} store
	* @param {Map<number, { i: number, refs: (GC | Item)[] }>} clientsStructRefs
	* @return { null | { update: Uint8Array, missing: Map<number,number> } }
	*
	* @private
	* @function
	*/
	var integrateStructs = (transaction, store, clientsStructRefs) => {
		/**
		* @type {Array<Item | GC>}
		*/
		const stack = [];
		let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
		if (clientsStructRefsIds.length === 0) return null;
		const getNextStructTarget = () => {
			if (clientsStructRefsIds.length === 0) return null;
			let nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
			while (nextStructsTarget.refs.length === nextStructsTarget.i) {
				clientsStructRefsIds.pop();
				if (clientsStructRefsIds.length > 0) nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
				else return null;
			}
			return nextStructsTarget;
		};
		let curStructsTarget = getNextStructTarget();
		if (curStructsTarget === null) return null;
		/**
		* @type {StructStore}
		*/
		const restStructs = new StructStore();
		const missingSV = /* @__PURE__ */ new Map();
		/**
		* @param {number} client
		* @param {number} clock
		*/
		const updateMissingSv = (client, clock) => {
			const mclock = missingSV.get(client);
			if (mclock == null || mclock > clock) missingSV.set(client, clock);
		};
		/**
		* @type {GC|Item}
		*/
		let stackHead = curStructsTarget.refs[curStructsTarget.i++];
		const state = /* @__PURE__ */ new Map();
		const addStackToRestSS = () => {
			for (const item of stack) {
				const client = item.id.client;
				const inapplicableItems = clientsStructRefs.get(client);
				if (inapplicableItems) {
					inapplicableItems.i--;
					restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
					clientsStructRefs.delete(client);
					inapplicableItems.i = 0;
					inapplicableItems.refs = [];
				} else restStructs.clients.set(client, [item]);
				clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
			}
			stack.length = 0;
		};
		while (true) {
			if (stackHead.constructor !== Skip) {
				const offset = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client)) - stackHead.id.clock;
				if (offset < 0) {
					stack.push(stackHead);
					updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
					addStackToRestSS();
				} else {
					const missing = stackHead.getMissing(transaction, store);
					if (missing !== null) {
						stack.push(stackHead);
						/**
						* @type {{ refs: Array<GC|Item>, i: number }}
						*/
						const structRefs = clientsStructRefs.get(missing) || {
							refs: [],
							i: 0
						};
						if (structRefs.refs.length === structRefs.i) {
							updateMissingSv(missing, getState(store, missing));
							addStackToRestSS();
						} else {
							stackHead = structRefs.refs[structRefs.i++];
							continue;
						}
					} else if (offset === 0 || offset < stackHead.length) {
						stackHead.integrate(transaction, offset);
						state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
					}
				}
			}
			if (stack.length > 0) stackHead = stack.pop();
			else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) stackHead = curStructsTarget.refs[curStructsTarget.i++];
			else {
				curStructsTarget = getNextStructTarget();
				if (curStructsTarget === null) break;
				else stackHead = curStructsTarget.refs[curStructsTarget.i++];
			}
		}
		if (restStructs.clients.size > 0) {
			const encoder = new UpdateEncoderV2();
			writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
			writeVarUint(encoder.restEncoder, 0);
			return {
				missing: missingSV,
				update: encoder.toUint8Array()
			};
		}
		return null;
	};
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {Transaction} transaction
	*
	* @private
	* @function
	*/
	var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
	/**
	* Read and apply a document update.
	*
	* This function has the same effect as `applyUpdate` but accepts a decoder.
	*
	* @param {decoding.Decoder} decoder
	* @param {Doc} ydoc
	* @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
	* @param {UpdateDecoderV1 | UpdateDecoderV2} [structDecoder]
	*
	* @function
	*/
	var readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
		transaction.local = false;
		let retry = false;
		const doc = transaction.doc;
		const store = doc.store;
		const restStructs = integrateStructs(transaction, store, readClientsStructRefs(structDecoder, doc));
		const pending = store.pendingStructs;
		if (pending) {
			for (const [client, clock] of pending.missing) if (clock < getState(store, client)) {
				retry = true;
				break;
			}
			if (restStructs) {
				for (const [client, clock] of restStructs.missing) {
					const mclock = pending.missing.get(client);
					if (mclock == null || mclock > clock) pending.missing.set(client, clock);
				}
				pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
			}
		} else store.pendingStructs = restStructs;
		const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
		if (store.pendingDs) {
			const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
			readVarUint(pendingDSUpdate.restDecoder);
			const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
			if (dsRest && dsRest2) store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
			else store.pendingDs = dsRest || dsRest2;
		} else store.pendingDs = dsRest;
		if (retry) {
			const update = store.pendingStructs.update;
			store.pendingStructs = null;
			applyUpdateV2(transaction.doc, update);
		}
	}, transactionOrigin, false);
	/**
	* Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
	*
	* This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
	*
	* @param {Doc} ydoc
	* @param {Uint8Array} update
	* @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
	* @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
	*
	* @function
	*/
	var applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
		const decoder = createDecoder(update);
		readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
	};
	/**
	* General event handler implementation.
	*
	* @template ARG0, ARG1
	*
	* @private
	*/
	var EventHandler = class {
		constructor() {
			/**
			* @type {Array<function(ARG0, ARG1):void>}
			*/
			this.l = [];
		}
	};
	/**
	* @template ARG0,ARG1
	* @returns {EventHandler<ARG0,ARG1>}
	*
	* @private
	* @function
	*/
	var createEventHandler = () => new EventHandler();
	/**
	* Adds an event listener that is called when
	* {@link EventHandler#callEventListeners} is called.
	*
	* @template ARG0,ARG1
	* @param {EventHandler<ARG0,ARG1>} eventHandler
	* @param {function(ARG0,ARG1):void} f The event handler.
	*
	* @private
	* @function
	*/
	var addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
	/**
	* Removes an event listener.
	*
	* @template ARG0,ARG1
	* @param {EventHandler<ARG0,ARG1>} eventHandler
	* @param {function(ARG0,ARG1):void} f The event handler that was added with
	*                     {@link EventHandler#addEventListener}
	*
	* @private
	* @function
	*/
	var removeEventHandlerListener = (eventHandler, f) => {
		const l = eventHandler.l;
		const len = l.length;
		eventHandler.l = l.filter((g) => f !== g);
		if (len === eventHandler.l.length) console.error("[yjs] Tried to remove event handler that doesn't exist.");
	};
	/**
	* Call all event listeners that were added via
	* {@link EventHandler#addEventListener}.
	*
	* @template ARG0,ARG1
	* @param {EventHandler<ARG0,ARG1>} eventHandler
	* @param {ARG0} arg0
	* @param {ARG1} arg1
	*
	* @private
	* @function
	*/
	var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
	var ID = class {
		/**
		* @param {number} client client id
		* @param {number} clock unique per client id, continuous number
		*/
		constructor(client, clock) {
			/**
			* Client id
			* @type {number}
			*/
			this.client = client;
			/**
			* unique per client id, continuous number
			* @type {number}
			*/
			this.clock = clock;
		}
	};
	/**
	* @param {ID | null} a
	* @param {ID | null} b
	* @return {boolean}
	*
	* @function
	*/
	var compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
	/**
	* @param {number} client
	* @param {number} clock
	*
	* @private
	* @function
	*/
	var createID = (client, clock) => new ID(client, clock);
	/**
	* The top types are mapped from y.share.get(keyname) => type.
	* `type` does not store any information about the `keyname`.
	* This function finds the correct `keyname` for `type` and throws otherwise.
	*
	* @param {AbstractType<any>} type
	* @return {string}
	*
	* @private
	* @function
	*/
	var findRootTypeKey = (type) => {
		for (const [key, value] of type.doc.share.entries()) if (value === type) return key;
		throw unexpectedCase();
	};
	var Snapshot = class {
		/**
		* @param {DeleteSet} ds
		* @param {Map<number,number>} sv state map
		*/
		constructor(ds, sv) {
			/**
			* @type {DeleteSet}
			*/
			this.ds = ds;
			/**
			* State Map
			* @type {Map<number,number>}
			*/
			this.sv = sv;
		}
	};
	/**
	* @param {DeleteSet} ds
	* @param {Map<number,number>} sm
	* @return {Snapshot}
	*/
	var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
	createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
	/**
	* @param {Item} item
	* @param {Snapshot|undefined} snapshot
	*
	* @protected
	* @function
	*/
	var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
	/**
	* @param {Transaction} transaction
	* @param {Snapshot} snapshot
	*/
	var splitSnapshotAffectedStructs = (transaction, snapshot) => {
		const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create$5);
		const store = transaction.doc.store;
		if (!meta.has(snapshot)) {
			snapshot.sv.forEach((clock, client) => {
				if (clock < getState(store, client)) getItemCleanStart(transaction, createID(client, clock));
			});
			iterateDeletedStructs(transaction, snapshot.ds, (_item) => {});
			meta.add(snapshot);
		}
	};
	var StructStore = class {
		constructor() {
			/**
			* @type {Map<number,Array<GC|Item>>}
			*/
			this.clients = /* @__PURE__ */ new Map();
			/**
			* @type {null | { missing: Map<number, number>, update: Uint8Array }}
			*/
			this.pendingStructs = null;
			/**
			* @type {null | Uint8Array}
			*/
			this.pendingDs = null;
		}
	};
	/**
	* Return the states as a Map<client,clock>.
	* Note that clock refers to the next expected clock id.
	*
	* @param {StructStore} store
	* @return {Map<number,number>}
	*
	* @public
	* @function
	*/
	var getStateVector = (store) => {
		const sm = /* @__PURE__ */ new Map();
		store.clients.forEach((structs, client) => {
			const struct = structs[structs.length - 1];
			sm.set(client, struct.id.clock + struct.length);
		});
		return sm;
	};
	/**
	* @param {StructStore} store
	* @param {number} client
	* @return {number}
	*
	* @public
	* @function
	*/
	var getState = (store, client) => {
		const structs = store.clients.get(client);
		if (structs === void 0) return 0;
		const lastStruct = structs[structs.length - 1];
		return lastStruct.id.clock + lastStruct.length;
	};
	/**
	* @param {StructStore} store
	* @param {GC|Item} struct
	*
	* @private
	* @function
	*/
	var addStruct = (store, struct) => {
		let structs = store.clients.get(struct.id.client);
		if (structs === void 0) {
			structs = [];
			store.clients.set(struct.id.client, structs);
		} else {
			const lastStruct = structs[structs.length - 1];
			if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) throw unexpectedCase();
		}
		structs.push(struct);
	};
	/**
	* Perform a binary search on a sorted array
	* @param {Array<Item|GC>} structs
	* @param {number} clock
	* @return {number}
	*
	* @private
	* @function
	*/
	var findIndexSS = (structs, clock) => {
		let left = 0;
		let right = structs.length - 1;
		let mid = structs[right];
		let midclock = mid.id.clock;
		if (midclock === clock) return right;
		let midindex = floor(clock / (midclock + mid.length - 1) * right);
		while (left <= right) {
			mid = structs[midindex];
			midclock = mid.id.clock;
			if (midclock <= clock) {
				if (clock < midclock + mid.length) return midindex;
				left = midindex + 1;
			} else right = midindex - 1;
			midindex = floor((left + right) / 2);
		}
		throw unexpectedCase();
	};
	/**
	* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
	*
	* @param {StructStore} store
	* @param {ID} id
	* @return {GC|Item}
	*
	* @private
	* @function
	*/
	var find = (store, id) => {
		/**
		* @type {Array<GC|Item>}
		*/
		const structs = store.clients.get(id.client);
		return structs[findIndexSS(structs, id.clock)];
	};
	/**
	* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
	* @private
	* @function
	*/
	var getItem = find;
	/**
	* @param {Transaction} transaction
	* @param {Array<Item|GC>} structs
	* @param {number} clock
	*/
	var findIndexCleanStart = (transaction, structs, clock) => {
		const index = findIndexSS(structs, clock);
		const struct = structs[index];
		if (struct.id.clock < clock && struct instanceof Item) {
			structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
			return index + 1;
		}
		return index;
	};
	/**
	* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
	*
	* @param {Transaction} transaction
	* @param {ID} id
	* @return {Item}
	*
	* @private
	* @function
	*/
	var getItemCleanStart = (transaction, id) => {
		const structs = transaction.doc.store.clients.get(id.client);
		return structs[findIndexCleanStart(transaction, structs, id.clock)];
	};
	/**
	* Expects that id is actually in store. This function throws or is an infinite loop otherwise.
	*
	* @param {Transaction} transaction
	* @param {StructStore} store
	* @param {ID} id
	* @return {Item}
	*
	* @private
	* @function
	*/
	var getItemCleanEnd = (transaction, store, id) => {
		/**
		* @type {Array<Item>}
		*/
		const structs = store.clients.get(id.client);
		const index = findIndexSS(structs, id.clock);
		const struct = structs[index];
		if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
		return struct;
	};
	/**
	* Replace `item` with `newitem` in store
	* @param {StructStore} store
	* @param {GC|Item} struct
	* @param {GC|Item} newStruct
	*
	* @private
	* @function
	*/
	var replaceStruct = (store, struct, newStruct) => {
		const structs = store.clients.get(struct.id.client);
		structs[findIndexSS(structs, struct.id.clock)] = newStruct;
	};
	/**
	* Iterate over a range of structs
	*
	* @param {Transaction} transaction
	* @param {Array<Item|GC>} structs
	* @param {number} clockStart Inclusive start
	* @param {number} len
	* @param {function(GC|Item):void} f
	*
	* @function
	*/
	var iterateStructs = (transaction, structs, clockStart, len, f) => {
		if (len === 0) return;
		const clockEnd = clockStart + len;
		let index = findIndexCleanStart(transaction, structs, clockStart);
		let struct;
		do {
			struct = structs[index++];
			if (clockEnd < struct.id.clock + struct.length) findIndexCleanStart(transaction, structs, clockEnd);
			f(struct);
		} while (index < structs.length && structs[index].id.clock < clockEnd);
	};
	/**
	* A transaction is created for every change on the Yjs model. It is possible
	* to bundle changes on the Yjs model in a single transaction to
	* minimize the number on messages sent and the number of observer calls.
	* If possible the user of this library should bundle as many changes as
	* possible. Here is an example to illustrate the advantages of bundling:
	*
	* @example
	* const ydoc = new Y.Doc()
	* const map = ydoc.getMap('map')
	* // Log content when change is triggered
	* map.observe(() => {
	*   console.log('change triggered')
	* })
	* // Each change on the map type triggers a log message:
	* map.set('a', 0) // => "change triggered"
	* map.set('b', 0) // => "change triggered"
	* // When put in a transaction, it will trigger the log after the transaction:
	* ydoc.transact(() => {
	*   map.set('a', 1)
	*   map.set('b', 1)
	* }) // => "change triggered"
	*
	* @public
	*/
	var Transaction = class {
		/**
		* @param {Doc} doc
		* @param {any} origin
		* @param {boolean} local
		*/
		constructor(doc, origin, local) {
			/**
			* The Yjs instance.
			* @type {Doc}
			*/
			this.doc = doc;
			/**
			* Describes the set of deleted items by ids
			* @type {DeleteSet}
			*/
			this.deleteSet = new DeleteSet();
			/**
			* Holds the state before the transaction started.
			* @type {Map<Number,Number>}
			*/
			this.beforeState = getStateVector(doc.store);
			/**
			* Holds the state after the transaction.
			* @type {Map<Number,Number>}
			*/
			this.afterState = /* @__PURE__ */ new Map();
			/**
			* All types that were directly modified (property added or child
			* inserted/deleted). New types are not included in this Set.
			* Maps from type to parentSubs (`item.parentSub = null` for YArray)
			* @type {Map<AbstractType<YEvent<any>>,Set<String|null>>}
			*/
			this.changed = /* @__PURE__ */ new Map();
			/**
			* Stores the events for the types that observe also child elements.
			* It is mainly used by `observeDeep`.
			* @type {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>}
			*/
			this.changedParentTypes = /* @__PURE__ */ new Map();
			/**
			* @type {Array<AbstractStruct>}
			*/
			this._mergeStructs = [];
			/**
			* @type {any}
			*/
			this.origin = origin;
			/**
			* Stores meta information on the transaction
			* @type {Map<any,any>}
			*/
			this.meta = /* @__PURE__ */ new Map();
			/**
			* Whether this change originates from this doc.
			* @type {boolean}
			*/
			this.local = local;
			/**
			* @type {Set<Doc>}
			*/
			this.subdocsAdded = /* @__PURE__ */ new Set();
			/**
			* @type {Set<Doc>}
			*/
			this.subdocsRemoved = /* @__PURE__ */ new Set();
			/**
			* @type {Set<Doc>}
			*/
			this.subdocsLoaded = /* @__PURE__ */ new Set();
			/**
			* @type {boolean}
			*/
			this._needFormattingCleanup = false;
		}
	};
	/**
	* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
	* @param {Transaction} transaction
	* @return {boolean} Whether data was written.
	*/
	var writeUpdateMessageFromTransaction = (encoder, transaction) => {
		if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) return false;
		sortAndMergeDeleteSet(transaction.deleteSet);
		writeStructsFromTransaction(encoder, transaction);
		writeDeleteSet(encoder, transaction.deleteSet);
		return true;
	};
	/**
	* If `type.parent` was added in current transaction, `type` technically
	* did not change, it was just added and we should not fire events for `type`.
	*
	* @param {Transaction} transaction
	* @param {AbstractType<YEvent<any>>} type
	* @param {string|null} parentSub
	*/
	var addChangedTypeToTransaction = (transaction, type, parentSub) => {
		const item = type._item;
		if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) setIfUndefined(transaction.changed, type, create$5).add(parentSub);
	};
	/**
	* @param {Array<AbstractStruct>} structs
	* @param {number} pos
	* @return {number} # of merged structs
	*/
	var tryToMergeWithLefts = (structs, pos) => {
		let right = structs[pos];
		let left = structs[pos - 1];
		let i = pos;
		for (; i > 0; right = left, left = structs[--i - 1]) {
			if (left.deleted === right.deleted && left.constructor === right.constructor) {
				if (left.mergeWith(right)) {
					if (right instanceof Item && right.parentSub !== null && right.parent._map.get(right.parentSub) === right)
 /** @type {AbstractType<any>} */ right.parent._map.set(right.parentSub, left);
					continue;
				}
			}
			break;
		}
		const merged = pos - i;
		if (merged) structs.splice(pos + 1 - merged, merged);
		return merged;
	};
	/**
	* @param {DeleteSet} ds
	* @param {StructStore} store
	* @param {function(Item):boolean} gcFilter
	*/
	var tryGcDeleteSet = (ds, store, gcFilter) => {
		for (const [client, deleteItems] of ds.clients.entries()) {
			const structs = store.clients.get(client);
			for (let di = deleteItems.length - 1; di >= 0; di--) {
				const deleteItem = deleteItems[di];
				const endDeleteItemClock = deleteItem.clock + deleteItem.len;
				for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
					const struct = structs[si];
					if (deleteItem.clock + deleteItem.len <= struct.id.clock) break;
					if (struct instanceof Item && struct.deleted && !struct.keep && gcFilter(struct)) struct.gc(store, false);
				}
			}
		}
	};
	/**
	* @param {DeleteSet} ds
	* @param {StructStore} store
	*/
	var tryMergeDeleteSet = (ds, store) => {
		ds.clients.forEach((deleteItems, client) => {
			const structs = store.clients.get(client);
			for (let di = deleteItems.length - 1; di >= 0; di--) {
				const deleteItem = deleteItems[di];
				const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
				for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) si -= 1 + tryToMergeWithLefts(structs, si);
			}
		});
	};
	/**
	* @param {Array<Transaction>} transactionCleanups
	* @param {number} i
	*/
	var cleanupTransactions = (transactionCleanups, i) => {
		if (i < transactionCleanups.length) {
			const transaction = transactionCleanups[i];
			const doc = transaction.doc;
			const store = doc.store;
			const ds = transaction.deleteSet;
			const mergeStructs = transaction._mergeStructs;
			try {
				sortAndMergeDeleteSet(ds);
				transaction.afterState = getStateVector(transaction.doc.store);
				doc.emit("beforeObserverCalls", [transaction, doc]);
				/**
				* An array of event callbacks.
				*
				* Each callback is called even if the other ones throw errors.
				*
				* @type {Array<function():void>}
				*/
				const fs = [];
				transaction.changed.forEach((subs, itemtype) => fs.push(() => {
					if (itemtype._item === null || !itemtype._item.deleted) itemtype._callObserver(transaction, subs);
				}));
				fs.push(() => {
					transaction.changedParentTypes.forEach((events, type) => {
						if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
							events = events.filter((event) => event.target._item === null || !event.target._item.deleted);
							events.forEach((event) => {
								event.currentTarget = type;
								event._path = null;
							});
							events.sort((event1, event2) => event1.path.length - event2.path.length);
							fs.push(() => {
								callEventHandlerListeners(type._dEH, events, transaction);
							});
						}
					});
					fs.push(() => doc.emit("afterTransaction", [transaction, doc]));
					fs.push(() => {
						if (transaction._needFormattingCleanup) cleanupYTextAfterTransaction(transaction);
					});
				});
				callAll(fs, []);
			} finally {
				if (doc.gc) tryGcDeleteSet(ds, store, doc.gcFilter);
				tryMergeDeleteSet(ds, store);
				transaction.afterState.forEach((clock, client) => {
					const beforeClock = transaction.beforeState.get(client) || 0;
					if (beforeClock !== clock) {
						const structs = store.clients.get(client);
						const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
						for (let i = structs.length - 1; i >= firstChangePos;) i -= 1 + tryToMergeWithLefts(structs, i);
					}
				});
				for (let i = mergeStructs.length - 1; i >= 0; i--) {
					const { client, clock } = mergeStructs[i].id;
					const structs = store.clients.get(client);
					const replacedStructPos = findIndexSS(structs, clock);
					if (replacedStructPos + 1 < structs.length) {
						if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) continue;
					}
					if (replacedStructPos > 0) tryToMergeWithLefts(structs, replacedStructPos);
				}
				if (!transaction.local && transaction.afterState.get(doc.clientID) !== transaction.beforeState.get(doc.clientID)) {
					print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
					doc.clientID = generateNewClientId();
				}
				doc.emit("afterTransactionCleanup", [transaction, doc]);
				if (doc._observers.has("update")) {
					const encoder = new UpdateEncoderV1();
					if (writeUpdateMessageFromTransaction(encoder, transaction)) doc.emit("update", [
						encoder.toUint8Array(),
						transaction.origin,
						doc,
						transaction
					]);
				}
				if (doc._observers.has("updateV2")) {
					const encoder = new UpdateEncoderV2();
					if (writeUpdateMessageFromTransaction(encoder, transaction)) doc.emit("updateV2", [
						encoder.toUint8Array(),
						transaction.origin,
						doc,
						transaction
					]);
				}
				const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
				if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
					subdocsAdded.forEach((subdoc) => {
						subdoc.clientID = doc.clientID;
						if (subdoc.collectionid == null) subdoc.collectionid = doc.collectionid;
						doc.subdocs.add(subdoc);
					});
					subdocsRemoved.forEach((subdoc) => doc.subdocs.delete(subdoc));
					doc.emit("subdocs", [
						{
							loaded: subdocsLoaded,
							added: subdocsAdded,
							removed: subdocsRemoved
						},
						doc,
						transaction
					]);
					subdocsRemoved.forEach((subdoc) => subdoc.destroy());
				}
				if (transactionCleanups.length <= i + 1) {
					doc._transactionCleanups = [];
					doc.emit("afterAllTransactions", [doc, transactionCleanups]);
				} else cleanupTransactions(transactionCleanups, i + 1);
			}
		}
	};
	/**
	* Implements the functionality of `y.transact(()=>{..})`
	*
	* @template T
	* @param {Doc} doc
	* @param {function(Transaction):T} f
	* @param {any} [origin=true]
	* @return {T}
	*
	* @function
	*/
	var transact = (doc, f, origin = null, local = true) => {
		const transactionCleanups = doc._transactionCleanups;
		let initialCall = false;
		/**
		* @type {any}
		*/
		let result = null;
		if (doc._transaction === null) {
			initialCall = true;
			doc._transaction = new Transaction(doc, origin, local);
			transactionCleanups.push(doc._transaction);
			if (transactionCleanups.length === 1) doc.emit("beforeAllTransactions", [doc]);
			doc.emit("beforeTransaction", [doc._transaction, doc]);
		}
		try {
			result = f(doc._transaction);
		} finally {
			if (initialCall) {
				const finishCleanup = doc._transaction === transactionCleanups[0];
				doc._transaction = null;
				if (finishCleanup) cleanupTransactions(transactionCleanups, 0);
			}
		}
		return result;
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	*/
	function* lazyStructReaderGenerator(decoder) {
		const numOfStateUpdates = readVarUint(decoder.restDecoder);
		for (let i = 0; i < numOfStateUpdates; i++) {
			const numberOfStructs = readVarUint(decoder.restDecoder);
			const client = decoder.readClient();
			let clock = readVarUint(decoder.restDecoder);
			for (let i = 0; i < numberOfStructs; i++) {
				const info = decoder.readInfo();
				if (info === 10) {
					const len = readVarUint(decoder.restDecoder);
					yield new Skip(createID(client, clock), len);
					clock += len;
				} else if ((31 & info) !== 0) {
					const cantCopyParentInfo = (info & 192) === 0;
					const struct = new Item(createID(client, clock), null, (info & 128) === 128 ? decoder.readLeftID() : null, null, (info & 64) === 64 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null, cantCopyParentInfo && (info & 32) === 32 ? decoder.readString() : null, readItemContent(decoder, info));
					yield struct;
					clock += struct.length;
				} else {
					const len = decoder.readLen();
					yield new GC(createID(client, clock), len);
					clock += len;
				}
			}
		}
	}
	var LazyStructReader = class {
		/**
		* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
		* @param {boolean} filterSkips
		*/
		constructor(decoder, filterSkips) {
			this.gen = lazyStructReaderGenerator(decoder);
			/**
			* @type {null | Item | Skip | GC}
			*/
			this.curr = null;
			this.done = false;
			this.filterSkips = filterSkips;
			this.next();
		}
		/**
		* @return {Item | GC | Skip |null}
		*/
		next() {
			do
				this.curr = this.gen.next().value || null;
			while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
			return this.curr;
		}
	};
	var LazyStructWriter = class {
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		*/
		constructor(encoder) {
			this.currClient = 0;
			this.startClock = 0;
			this.written = 0;
			this.encoder = encoder;
			/**
			* We want to write operations lazily, but also we need to know beforehand how many operations we want to write for each client.
			*
			* This kind of meta-information (#clients, #structs-per-client-written) is written to the restEncoder.
			*
			* We fragment the restEncoder and store a slice of it per-client until we know how many clients there are.
			* When we flush (toUint8Array) we write the restEncoder using the fragments and the meta-information.
			*
			* @type {Array<{ written: number, restEncoder: Uint8Array }>}
			*/
			this.clientStructs = [];
		}
	};
	/**
	* @param {Uint8Array} update
	* @param {typeof DSEncoderV1 | typeof DSEncoderV2} YEncoder
	* @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} YDecoder
	* @return {Uint8Array}
	*/
	var encodeStateVectorFromUpdateV2 = (update, YEncoder = DSEncoderV2, YDecoder = UpdateDecoderV2) => {
		const encoder = new YEncoder();
		const updateDecoder = new LazyStructReader(new YDecoder(createDecoder(update)), false);
		let curr = updateDecoder.curr;
		if (curr !== null) {
			let size = 0;
			let currClient = curr.id.client;
			let stopCounting = curr.id.clock !== 0;
			let currClock = stopCounting ? 0 : curr.id.clock + curr.length;
			for (; curr !== null; curr = updateDecoder.next()) {
				if (currClient !== curr.id.client) {
					if (currClock !== 0) {
						size++;
						writeVarUint(encoder.restEncoder, currClient);
						writeVarUint(encoder.restEncoder, currClock);
					}
					currClient = curr.id.client;
					currClock = 0;
					stopCounting = curr.id.clock !== 0;
				}
				if (curr.constructor === Skip) stopCounting = true;
				if (!stopCounting) currClock = curr.id.clock + curr.length;
			}
			if (currClock !== 0) {
				size++;
				writeVarUint(encoder.restEncoder, currClient);
				writeVarUint(encoder.restEncoder, currClock);
			}
			const enc = createEncoder();
			writeVarUint(enc, size);
			writeBinaryEncoder(enc, encoder.restEncoder);
			encoder.restEncoder = enc;
			return encoder.toUint8Array();
		} else {
			writeVarUint(encoder.restEncoder, 0);
			return encoder.toUint8Array();
		}
	};
	/**
	* This method is intended to slice any kind of struct and retrieve the right part.
	* It does not handle side-effects, so it should only be used by the lazy-encoder.
	*
	* @param {Item | GC | Skip} left
	* @param {number} diff
	* @return {Item | GC}
	*/
	var sliceStruct = (left, diff) => {
		if (left.constructor === GC) {
			const { client, clock } = left.id;
			return new GC(createID(client, clock + diff), left.length - diff);
		} else if (left.constructor === Skip) {
			const { client, clock } = left.id;
			return new Skip(createID(client, clock + diff), left.length - diff);
		} else {
			const leftItem = left;
			const { client, clock } = leftItem.id;
			return new Item(createID(client, clock + diff), null, createID(client, clock + diff - 1), null, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
		}
	};
	/**
	*
	* This function works similarly to `readUpdateV2`.
	*
	* @param {Array<Uint8Array>} updates
	* @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
	* @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
	* @return {Uint8Array}
	*/
	var mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
		if (updates.length === 1) return updates[0];
		const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
		let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
		/**
		* @todo we don't need offset because we always slice before
		* @type {null | { struct: Item | GC | Skip, offset: number }}
		*/
		let currWrite = null;
		const updateEncoder = new YEncoder();
		const lazyStructEncoder = new LazyStructWriter(updateEncoder);
		while (true) {
			lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
			lazyStructDecoders.sort(
				/** @type {function(any,any):number} */
				(dec1, dec2) => {
					if (dec1.curr.id.client === dec2.curr.id.client) {
						const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
						if (clockDiff === 0) return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
						else return clockDiff;
					} else return dec2.curr.id.client - dec1.curr.id.client;
				}
			);
			if (lazyStructDecoders.length === 0) break;
			const currDecoder = lazyStructDecoders[0];
			const firstClient = currDecoder.curr.id.client;
			if (currWrite !== null) {
				let curr = currDecoder.curr;
				let iterated = false;
				while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
					curr = currDecoder.next();
					iterated = true;
				}
				if (curr === null || curr.id.client !== firstClient || iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) continue;
				if (firstClient !== currWrite.struct.id.client) {
					writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
					currWrite = {
						struct: curr,
						offset: 0
					};
					currDecoder.next();
				} else if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
					if (currWrite.struct.constructor === Skip) currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
					else {
						writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
						const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
						currWrite = {
							struct: new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff),
							offset: 0
						};
					}
				} else {
					const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
					if (diff > 0) {
						if (currWrite.struct.constructor === Skip) currWrite.struct.length -= diff;
						else curr = sliceStruct(curr, diff);
					}
					if (!currWrite.struct.mergeWith(curr)) {
						writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
						currWrite = {
							struct: curr,
							offset: 0
						};
						currDecoder.next();
					}
				}
			} else {
				currWrite = {
					struct: currDecoder.curr,
					offset: 0
				};
				currDecoder.next();
			}
			for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
				writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
				currWrite = {
					struct: next,
					offset: 0
				};
			}
		}
		if (currWrite !== null) {
			writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
			currWrite = null;
		}
		finishLazyStructWriting(lazyStructEncoder);
		writeDeleteSet(updateEncoder, mergeDeleteSets(updateDecoders.map((decoder) => readDeleteSet(decoder))));
		return updateEncoder.toUint8Array();
	};
	/**
	* @param {LazyStructWriter} lazyWriter
	*/
	var flushLazyStructWriter = (lazyWriter) => {
		if (lazyWriter.written > 0) {
			lazyWriter.clientStructs.push({
				written: lazyWriter.written,
				restEncoder: toUint8Array(lazyWriter.encoder.restEncoder)
			});
			lazyWriter.encoder.restEncoder = createEncoder();
			lazyWriter.written = 0;
		}
	};
	/**
	* @param {LazyStructWriter} lazyWriter
	* @param {Item | GC} struct
	* @param {number} offset
	*/
	var writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
		if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) flushLazyStructWriter(lazyWriter);
		if (lazyWriter.written === 0) {
			lazyWriter.currClient = struct.id.client;
			lazyWriter.encoder.writeClient(struct.id.client);
			writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
		}
		struct.write(lazyWriter.encoder, offset);
		lazyWriter.written++;
	};
	/**
	* Call this function when we collected all parts and want to
	* put all the parts together. After calling this method,
	* you can continue using the UpdateEncoder.
	*
	* @param {LazyStructWriter} lazyWriter
	*/
	var finishLazyStructWriting = (lazyWriter) => {
		flushLazyStructWriter(lazyWriter);
		const restEncoder = lazyWriter.encoder.restEncoder;
		/**
		* Now we put all the fragments together.
		* This works similarly to `writeClientsStructs`
		*/
		writeVarUint(restEncoder, lazyWriter.clientStructs.length);
		for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
			const partStructs = lazyWriter.clientStructs[i];
			/**
			* Works similarly to `writeStructs`
			*/
			writeVarUint(restEncoder, partStructs.written);
			writeUint8Array(restEncoder, partStructs.restEncoder);
		}
	};
	var errorComputeChanges = "You must not compute changes after the event-handler fired.";
	/**
	* @template {AbstractType<any>} T
	* YEvent describes the changes on a YType.
	*/
	var YEvent = class {
		/**
		* @param {T} target The changed type.
		* @param {Transaction} transaction
		*/
		constructor(target, transaction) {
			/**
			* The type on which this event was created on.
			* @type {T}
			*/
			this.target = target;
			/**
			* The current target on which the observe callback is called.
			* @type {AbstractType<any>}
			*/
			this.currentTarget = target;
			/**
			* The transaction that triggered this event.
			* @type {Transaction}
			*/
			this.transaction = transaction;
			/**
			* @type {Object|null}
			*/
			this._changes = null;
			/**
			* @type {null | Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
			*/
			this._keys = null;
			/**
			* @type {null | Array<{ insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any> }>}
			*/
			this._delta = null;
			/**
			* @type {Array<string|number>|null}
			*/
			this._path = null;
		}
		/**
		* Computes the path from `y` to the changed type.
		*
		* @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
		*
		* The following property holds:
		* @example
		*   let type = y
		*   event.path.forEach(dir => {
		*     type = type.get(dir)
		*   })
		*   type === event.target // => true
		*/
		get path() {
			return this._path || (this._path = getPathTo(this.currentTarget, this.target));
		}
		/**
		* Check if a struct is deleted by this event.
		*
		* In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
		*
		* @param {AbstractStruct} struct
		* @return {boolean}
		*/
		deletes(struct) {
			return isDeleted(this.transaction.deleteSet, struct.id);
		}
		/**
		* @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
		*/
		get keys() {
			if (this._keys === null) {
				if (this.transaction.doc._transactionCleanups.length === 0) throw create$4(errorComputeChanges);
				const keys = /* @__PURE__ */ new Map();
				const target = this.target;
				this.transaction.changed.get(target).forEach((key) => {
					if (key !== null) {
						const item = target._map.get(key);
						/**
						* @type {'delete' | 'add' | 'update'}
						*/
						let action;
						let oldValue;
						if (this.adds(item)) {
							let prev = item.left;
							while (prev !== null && this.adds(prev)) prev = prev.left;
							if (this.deletes(item)) {
								if (prev !== null && this.deletes(prev)) {
									action = "delete";
									oldValue = last(prev.content.getContent());
								} else return;
							} else if (prev !== null && this.deletes(prev)) {
								action = "update";
								oldValue = last(prev.content.getContent());
							} else {
								action = "add";
								oldValue = void 0;
							}
						} else if (this.deletes(item)) {
							action = "delete";
							oldValue = last(
								/** @type {Item} */
								item.content.getContent()
							);
						} else return;
						keys.set(key, {
							action,
							oldValue
						});
					}
				});
				this._keys = keys;
			}
			return this._keys;
		}
		/**
		* This is a computed property. Note that this can only be safely computed during the
		* event call. Computing this property after other changes happened might result in
		* unexpected behavior (incorrect computation of deltas). A safe way to collect changes
		* is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
		*
		* @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
		*/
		get delta() {
			return this.changes.delta;
		}
		/**
		* Check if a struct is added by this event.
		*
		* In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
		*
		* @param {AbstractStruct} struct
		* @return {boolean}
		*/
		adds(struct) {
			return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
		}
		/**
		* This is a computed property. Note that this can only be safely computed during the
		* event call. Computing this property after other changes happened might result in
		* unexpected behavior (incorrect computation of deltas). A safe way to collect changes
		* is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
		*
		* @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
		*/
		get changes() {
			let changes = this._changes;
			if (changes === null) {
				if (this.transaction.doc._transactionCleanups.length === 0) throw create$4(errorComputeChanges);
				const target = this.target;
				const added = create$5();
				const deleted = create$5();
				/**
				* @type {Array<{insert:Array<any>}|{delete:number}|{retain:number}>}
				*/
				const delta = [];
				changes = {
					added,
					deleted,
					delta,
					keys: this.keys
				};
				if (this.transaction.changed.get(target).has(null)) {
					/**
					* @type {any}
					*/
					let lastOp = null;
					const packOp = () => {
						if (lastOp) delta.push(lastOp);
					};
					for (let item = target._start; item !== null; item = item.right) if (item.deleted) {
						if (this.deletes(item) && !this.adds(item)) {
							if (lastOp === null || lastOp.delete === void 0) {
								packOp();
								lastOp = { delete: 0 };
							}
							lastOp.delete += item.length;
							deleted.add(item);
						}
					} else if (this.adds(item)) {
						if (lastOp === null || lastOp.insert === void 0) {
							packOp();
							lastOp = { insert: [] };
						}
						lastOp.insert = lastOp.insert.concat(item.content.getContent());
						added.add(item);
					} else {
						if (lastOp === null || lastOp.retain === void 0) {
							packOp();
							lastOp = { retain: 0 };
						}
						lastOp.retain += item.length;
					}
					if (lastOp !== null && lastOp.retain === void 0) packOp();
				}
				this._changes = changes;
			}
			return changes;
		}
	};
	/**
	* Compute the path from this type to the specified target.
	*
	* @example
	*   // `child` should be accessible via `type.get(path[0]).get(path[1])..`
	*   const path = type.getPathTo(child)
	*   // assuming `type instanceof YArray`
	*   console.log(path) // might look like => [2, 'key1']
	*   child === type.get(path[0]).get(path[1])
	*
	* @param {AbstractType<any>} parent
	* @param {AbstractType<any>} child target
	* @return {Array<string|number>} Path to the target
	*
	* @private
	* @function
	*/
	var getPathTo = (parent, child) => {
		const path = [];
		while (child._item !== null && child !== parent) {
			if (child._item.parentSub !== null) path.unshift(child._item.parentSub);
			else {
				let i = 0;
				let c = child._item.parent._start;
				while (c !== child._item && c !== null) {
					if (!c.deleted && c.countable) i += c.length;
					c = c.right;
				}
				path.unshift(i);
			}
			child = child._item.parent;
		}
		return path;
	};
	/**
	* https://docs.yjs.dev/getting-started/working-with-shared-types#caveats
	*/
	var warnPrematureAccess = () => {
		warn("Invalid access: Add Yjs type to a document before reading data.");
	};
	var maxSearchMarker = 80;
	/**
	* A unique timestamp that identifies each marker.
	*
	* Time is relative,.. this is more like an ever-increasing clock.
	*
	* @type {number}
	*/
	var globalSearchMarkerTimestamp = 0;
	var ArraySearchMarker = class {
		/**
		* @param {Item} p
		* @param {number} index
		*/
		constructor(p, index) {
			p.marker = true;
			this.p = p;
			this.index = index;
			this.timestamp = globalSearchMarkerTimestamp++;
		}
	};
	/**
	* @param {ArraySearchMarker} marker
	*/
	var refreshMarkerTimestamp = (marker) => {
		marker.timestamp = globalSearchMarkerTimestamp++;
	};
	/**
	* This is rather complex so this function is the only thing that should overwrite a marker
	*
	* @param {ArraySearchMarker} marker
	* @param {Item} p
	* @param {number} index
	*/
	var overwriteMarker = (marker, p, index) => {
		marker.p.marker = false;
		marker.p = p;
		p.marker = true;
		marker.index = index;
		marker.timestamp = globalSearchMarkerTimestamp++;
	};
	/**
	* @param {Array<ArraySearchMarker>} searchMarker
	* @param {Item} p
	* @param {number} index
	*/
	var markPosition = (searchMarker, p, index) => {
		if (searchMarker.length >= maxSearchMarker) {
			const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
			overwriteMarker(marker, p, index);
			return marker;
		} else {
			const pm = new ArraySearchMarker(p, index);
			searchMarker.push(pm);
			return pm;
		}
	};
	/**
	* Search marker help us to find positions in the associative array faster.
	*
	* They speed up the process of finding a position without much bookkeeping.
	*
	* A maximum of `maxSearchMarker` objects are created.
	*
	* This function always returns a refreshed marker (updated timestamp)
	*
	* @param {AbstractType<any>} yarray
	* @param {number} index
	*/
	var findMarker = (yarray, index) => {
		if (yarray._start === null || index === 0 || yarray._searchMarker === null) return null;
		const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
		let p = yarray._start;
		let pindex = 0;
		if (marker !== null) {
			p = marker.p;
			pindex = marker.index;
			refreshMarkerTimestamp(marker);
		}
		while (p.right !== null && pindex < index) {
			if (!p.deleted && p.countable) {
				if (index < pindex + p.length) break;
				pindex += p.length;
			}
			p = p.right;
		}
		while (p.left !== null && pindex > index) {
			p = p.left;
			if (!p.deleted && p.countable) pindex -= p.length;
		}
		while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
			p = p.left;
			if (!p.deleted && p.countable) pindex -= p.length;
		}
		if (marker !== null && abs(marker.index - pindex) < p.parent.length / maxSearchMarker) {
			overwriteMarker(marker, p, pindex);
			return marker;
		} else return markPosition(yarray._searchMarker, p, pindex);
	};
	/**
	* Update markers when a change happened.
	*
	* This should be called before doing a deletion!
	*
	* @param {Array<ArraySearchMarker>} searchMarker
	* @param {number} index
	* @param {number} len If insertion, len is positive. If deletion, len is negative.
	*/
	var updateMarkerChanges = (searchMarker, index, len) => {
		for (let i = searchMarker.length - 1; i >= 0; i--) {
			const m = searchMarker[i];
			if (len > 0) {
				/**
				* @type {Item|null}
				*/
				let p = m.p;
				p.marker = false;
				while (p && (p.deleted || !p.countable)) {
					p = p.left;
					if (p && !p.deleted && p.countable) m.index -= p.length;
				}
				if (p === null || p.marker === true) {
					searchMarker.splice(i, 1);
					continue;
				}
				m.p = p;
				p.marker = true;
			}
			if (index < m.index || len > 0 && index === m.index) m.index = max(index, m.index + len);
		}
	};
	/**
	* Call event listeners with an event. This will also add an event to all
	* parents (for `.observeDeep` handlers).
	*
	* @template EventType
	* @param {AbstractType<EventType>} type
	* @param {Transaction} transaction
	* @param {EventType} event
	*/
	var callTypeObservers = (type, transaction, event) => {
		const changedType = type;
		const changedParentTypes = transaction.changedParentTypes;
		while (true) {
			setIfUndefined(changedParentTypes, type, () => []).push(event);
			if (type._item === null) break;
			type = type._item.parent;
		}
		callEventHandlerListeners(changedType._eH, event, transaction);
	};
	/**
	* @template EventType
	* Abstract Yjs Type class
	*/
	var AbstractType = class {
		constructor() {
			/**
			* @type {Item|null}
			*/
			this._item = null;
			/**
			* @type {Map<string,Item>}
			*/
			this._map = /* @__PURE__ */ new Map();
			/**
			* @type {Item|null}
			*/
			this._start = null;
			/**
			* @type {Doc|null}
			*/
			this.doc = null;
			this._length = 0;
			/**
			* Event handlers
			* @type {EventHandler<EventType,Transaction>}
			*/
			this._eH = createEventHandler();
			/**
			* Deep event handlers
			* @type {EventHandler<Array<YEvent<any>>,Transaction>}
			*/
			this._dEH = createEventHandler();
			/**
			* @type {null | Array<ArraySearchMarker>}
			*/
			this._searchMarker = null;
		}
		/**
		* @return {AbstractType<any>|null}
		*/
		get parent() {
			return this._item ? this._item.parent : null;
		}
		/**
		* Integrate this type into the Yjs instance.
		*
		* * Save this struct in the os
		* * This type is sent to other client
		* * Observer functions are fired
		*
		* @param {Doc} y The Yjs instance
		* @param {Item|null} item
		*/
		_integrate(y, item) {
			this.doc = y;
			this._item = item;
		}
		/**
		* @return {AbstractType<EventType>}
		*/
		_copy() {
			throw methodUnimplemented();
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {AbstractType<EventType>}
		*/
		clone() {
			throw methodUnimplemented();
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
		*/
		_write(_encoder) {}
		/**
		* The first non-deleted item
		*/
		get _first() {
			let n = this._start;
			while (n !== null && n.deleted) n = n.right;
			return n;
		}
		/**
		* Creates YEvent and calls all type observers.
		* Must be implemented by each type.
		*
		* @param {Transaction} transaction
		* @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
		*/
		_callObserver(transaction, _parentSubs) {
			if (!transaction.local && this._searchMarker) this._searchMarker.length = 0;
		}
		/**
		* Observe all events that are created on this type.
		*
		* @param {function(EventType, Transaction):void} f Observer function
		*/
		observe(f) {
			addEventHandlerListener(this._eH, f);
		}
		/**
		* Observe all events that are created by this type and its children.
		*
		* @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
		*/
		observeDeep(f) {
			addEventHandlerListener(this._dEH, f);
		}
		/**
		* Unregister an observer function.
		*
		* @param {function(EventType,Transaction):void} f Observer function
		*/
		unobserve(f) {
			removeEventHandlerListener(this._eH, f);
		}
		/**
		* Unregister an observer function.
		*
		* @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
		*/
		unobserveDeep(f) {
			removeEventHandlerListener(this._dEH, f);
		}
		/**
		* @abstract
		* @return {any}
		*/
		toJSON() {}
	};
	/**
	* @param {AbstractType<any>} type
	* @param {number} start
	* @param {number} end
	* @return {Array<any>}
	*
	* @private
	* @function
	*/
	var typeListSlice = (type, start, end) => {
		type.doc ?? warnPrematureAccess();
		if (start < 0) start = type._length + start;
		if (end < 0) end = type._length + end;
		let len = end - start;
		const cs = [];
		let n = type._start;
		while (n !== null && len > 0) {
			if (n.countable && !n.deleted) {
				const c = n.content.getContent();
				if (c.length <= start) start -= c.length;
				else {
					for (let i = start; i < c.length && len > 0; i++) {
						cs.push(c[i]);
						len--;
					}
					start = 0;
				}
			}
			n = n.right;
		}
		return cs;
	};
	/**
	* @param {AbstractType<any>} type
	* @return {Array<any>}
	*
	* @private
	* @function
	*/
	var typeListToArray = (type) => {
		type.doc ?? warnPrematureAccess();
		const cs = [];
		let n = type._start;
		while (n !== null) {
			if (n.countable && !n.deleted) {
				const c = n.content.getContent();
				for (let i = 0; i < c.length; i++) cs.push(c[i]);
			}
			n = n.right;
		}
		return cs;
	};
	/**
	* Executes a provided function on once on every element of this YArray.
	*
	* @param {AbstractType<any>} type
	* @param {function(any,number,any):void} f A function to execute on every element of this YArray.
	*
	* @private
	* @function
	*/
	var typeListForEach = (type, f) => {
		let index = 0;
		let n = type._start;
		type.doc ?? warnPrematureAccess();
		while (n !== null) {
			if (n.countable && !n.deleted) {
				const c = n.content.getContent();
				for (let i = 0; i < c.length; i++) f(c[i], index++, type);
			}
			n = n.right;
		}
	};
	/**
	* @template C,R
	* @param {AbstractType<any>} type
	* @param {function(C,number,AbstractType<any>):R} f
	* @return {Array<R>}
	*
	* @private
	* @function
	*/
	var typeListMap = (type, f) => {
		/**
		* @type {Array<any>}
		*/
		const result = [];
		typeListForEach(type, (c, i) => {
			result.push(f(c, i, type));
		});
		return result;
	};
	/**
	* @param {AbstractType<any>} type
	* @return {IterableIterator<any>}
	*
	* @private
	* @function
	*/
	var typeListCreateIterator = (type) => {
		let n = type._start;
		/**
		* @type {Array<any>|null}
		*/
		let currentContent = null;
		let currentContentIndex = 0;
		return {
			[Symbol.iterator]() {
				return this;
			},
			next: () => {
				if (currentContent === null) {
					while (n !== null && n.deleted) n = n.right;
					if (n === null) return {
						done: true,
						value: void 0
					};
					currentContent = n.content.getContent();
					currentContentIndex = 0;
					n = n.right;
				}
				const value = currentContent[currentContentIndex++];
				if (currentContent.length <= currentContentIndex) currentContent = null;
				return {
					done: false,
					value
				};
			}
		};
	};
	/**
	* @param {AbstractType<any>} type
	* @param {number} index
	* @return {any}
	*
	* @private
	* @function
	*/
	var typeListGet = (type, index) => {
		type.doc ?? warnPrematureAccess();
		const marker = findMarker(type, index);
		let n = type._start;
		if (marker !== null) {
			n = marker.p;
			index -= marker.index;
		}
		for (; n !== null; n = n.right) if (!n.deleted && n.countable) {
			if (index < n.length) return n.content.getContent()[index];
			index -= n.length;
		}
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {Item?} referenceItem
	* @param {Array<Object<string,any>|Array<any>|boolean|number|null|string|Uint8Array>} content
	*
	* @private
	* @function
	*/
	var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
		let left = referenceItem;
		const doc = transaction.doc;
		const ownClientId = doc.clientID;
		const store = doc.store;
		const right = referenceItem === null ? parent._start : referenceItem.right;
		/**
		* @type {Array<Object|Array<any>|number|null>}
		*/
		let jsonContent = [];
		const packJsonContent = () => {
			if (jsonContent.length > 0) {
				left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
				left.integrate(transaction, 0);
				jsonContent = [];
			}
		};
		content.forEach((c) => {
			if (c === null) jsonContent.push(c);
			else switch (c.constructor) {
				case Number:
				case Object:
				case Boolean:
				case Array:
				case String:
					jsonContent.push(c);
					break;
				default:
					packJsonContent();
					switch (c.constructor) {
						case Uint8Array:
						case ArrayBuffer:
							left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(c)));
							left.integrate(transaction, 0);
							break;
						case Doc:
							left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(c));
							left.integrate(transaction, 0);
							break;
						default: if (c instanceof AbstractType) {
							left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
							left.integrate(transaction, 0);
						} else throw new Error("Unexpected content type in insert operation");
					}
			}
		});
		packJsonContent();
	};
	var lengthExceeded = () => create$4("Length exceeded!");
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {number} index
	* @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
	*
	* @private
	* @function
	*/
	var typeListInsertGenerics = (transaction, parent, index, content) => {
		if (index > parent._length) throw lengthExceeded();
		if (index === 0) {
			if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, index, content.length);
			return typeListInsertGenericsAfter(transaction, parent, null, content);
		}
		const startIndex = index;
		const marker = findMarker(parent, index);
		let n = parent._start;
		if (marker !== null) {
			n = marker.p;
			index -= marker.index;
			if (index === 0) {
				n = n.prev;
				index += n && n.countable && !n.deleted ? n.length : 0;
			}
		}
		for (; n !== null; n = n.right) if (!n.deleted && n.countable) {
			if (index <= n.length) {
				if (index < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
				break;
			}
			index -= n.length;
		}
		if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, content.length);
		return typeListInsertGenericsAfter(transaction, parent, n, content);
	};
	/**
	* Pushing content is special as we generally want to push after the last item. So we don't have to update
	* the search marker.
	*
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
	*
	* @private
	* @function
	*/
	var typeListPushGenerics = (transaction, parent, content) => {
		let n = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, {
			index: 0,
			p: parent._start
		}).p;
		if (n) while (n.right) n = n.right;
		return typeListInsertGenericsAfter(transaction, parent, n, content);
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {number} index
	* @param {number} length
	*
	* @private
	* @function
	*/
	var typeListDelete = (transaction, parent, index, length) => {
		if (length === 0) return;
		const startIndex = index;
		const startLength = length;
		const marker = findMarker(parent, index);
		let n = parent._start;
		if (marker !== null) {
			n = marker.p;
			index -= marker.index;
		}
		for (; n !== null && index > 0; n = n.right) if (!n.deleted && n.countable) {
			if (index < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
			index -= n.length;
		}
		while (length > 0 && n !== null) {
			if (!n.deleted) {
				if (length < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length));
				n.delete(transaction);
				length -= n.length;
			}
			n = n.right;
		}
		if (length > 0) throw lengthExceeded();
		if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length);
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {string} key
	*
	* @private
	* @function
	*/
	var typeMapDelete = (transaction, parent, key) => {
		const c = parent._map.get(key);
		if (c !== void 0) c.delete(transaction);
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {string} key
	* @param {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} value
	*
	* @private
	* @function
	*/
	var typeMapSet = (transaction, parent, key, value) => {
		const left = parent._map.get(key) || null;
		const doc = transaction.doc;
		const ownClientId = doc.clientID;
		let content;
		if (value == null) content = new ContentAny([value]);
		else switch (value.constructor) {
			case Number:
			case Object:
			case Boolean:
			case Array:
			case String:
			case Date:
			case BigInt:
				content = new ContentAny([value]);
				break;
			case Uint8Array:
				content = new ContentBinary(value);
				break;
			case Doc:
				content = new ContentDoc(value);
				break;
			default: if (value instanceof AbstractType) content = new ContentType(value);
			else throw new Error("Unexpected content type");
		}
		new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
	};
	/**
	* @param {AbstractType<any>} parent
	* @param {string} key
	* @return {Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined}
	*
	* @private
	* @function
	*/
	var typeMapGet = (parent, key) => {
		parent.doc ?? warnPrematureAccess();
		const val = parent._map.get(key);
		return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
	};
	/**
	* @param {AbstractType<any>} parent
	* @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
	*
	* @private
	* @function
	*/
	var typeMapGetAll = (parent) => {
		/**
		* @type {Object<string,any>}
		*/
		const res = {};
		parent.doc ?? warnPrematureAccess();
		parent._map.forEach((value, key) => {
			if (!value.deleted) res[key] = value.content.getContent()[value.length - 1];
		});
		return res;
	};
	/**
	* @param {AbstractType<any>} parent
	* @param {string} key
	* @return {boolean}
	*
	* @private
	* @function
	*/
	var typeMapHas = (parent, key) => {
		parent.doc ?? warnPrematureAccess();
		const val = parent._map.get(key);
		return val !== void 0 && !val.deleted;
	};
	/**
	* @param {AbstractType<any>} parent
	* @param {Snapshot} snapshot
	* @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
	*
	* @private
	* @function
	*/
	var typeMapGetAllSnapshot = (parent, snapshot) => {
		/**
		* @type {Object<string,any>}
		*/
		const res = {};
		parent._map.forEach((value, key) => {
			/**
			* @type {Item|null}
			*/
			let v = value;
			while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) v = v.left;
			if (v !== null && isVisible(v, snapshot)) res[key] = v.content.getContent()[v.length - 1];
		});
		return res;
	};
	/**
	* @param {AbstractType<any> & { _map: Map<string, Item> }} type
	* @return {IterableIterator<Array<any>>}
	*
	* @private
	* @function
	*/
	var createMapIterator = (type) => {
		type.doc ?? warnPrematureAccess();
		return iteratorFilter(
			type._map.entries(),
			/** @param {any} entry */
			(entry) => !entry[1].deleted
		);
	};
	/**
	* @module YArray
	*/
	/**
	* Event that describes the changes on a YArray
	* @template T
	* @extends YEvent<YArray<T>>
	*/
	var YArrayEvent = class extends YEvent {};
	/**
	* A shared Array implementation.
	* @template T
	* @extends AbstractType<YArrayEvent<T>>
	* @implements {Iterable<T>}
	*/
	var YArray = class YArray extends AbstractType {
		constructor() {
			super();
			/**
			* @type {Array<any>?}
			* @private
			*/
			this._prelimContent = [];
			/**
			* @type {Array<ArraySearchMarker>}
			*/
			this._searchMarker = [];
		}
		/**
		* Construct a new YArray containing the specified items.
		* @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
		* @param {Array<T>} items
		* @return {YArray<T>}
		*/
		static from(items) {
			/**
			* @type {YArray<T>}
			*/
			const a = new YArray();
			a.push(items);
			return a;
		}
		/**
		* Integrate this type into the Yjs instance.
		*
		* * Save this struct in the os
		* * This type is sent to other client
		* * Observer functions are fired
		*
		* @param {Doc} y The Yjs instance
		* @param {Item} item
		*/
		_integrate(y, item) {
			super._integrate(y, item);
			this.insert(0, this._prelimContent);
			this._prelimContent = null;
		}
		/**
		* @return {YArray<T>}
		*/
		_copy() {
			return new YArray();
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YArray<T>}
		*/
		clone() {
			/**
			* @type {YArray<T>}
			*/
			const arr = new YArray();
			arr.insert(0, this.toArray().map((el) => el instanceof AbstractType ? el.clone() : el));
			return arr;
		}
		get length() {
			this.doc ?? warnPrematureAccess();
			return this._length;
		}
		/**
		* Creates YArrayEvent and calls observers.
		*
		* @param {Transaction} transaction
		* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
		*/
		_callObserver(transaction, parentSubs) {
			super._callObserver(transaction, parentSubs);
			callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
		}
		/**
		* Inserts new content at an index.
		*
		* Important: This function expects an array of content. Not just a content
		* object. The reason for this "weirdness" is that inserting several elements
		* is very efficient when it is done as a single operation.
		*
		* @example
		*  // Insert character 'a' at position 0
		*  yarray.insert(0, ['a'])
		*  // Insert numbers 1, 2 at position 1
		*  yarray.insert(1, [1, 2])
		*
		* @param {number} index The index to insert content at.
		* @param {Array<T>} content The array of content
		*/
		insert(index, content) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeListInsertGenerics(transaction, this, index, content);
			});
			else
 /** @type {Array<any>} */ this._prelimContent.splice(index, 0, ...content);
		}
		/**
		* Appends content to this YArray.
		*
		* @param {Array<T>} content Array of content to append.
		*
		* @todo Use the following implementation in all types.
		*/
		push(content) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeListPushGenerics(transaction, this, content);
			});
			else
 /** @type {Array<any>} */ this._prelimContent.push(...content);
		}
		/**
		* Prepends content to this YArray.
		*
		* @param {Array<T>} content Array of content to prepend.
		*/
		unshift(content) {
			this.insert(0, content);
		}
		/**
		* Deletes elements starting from an index.
		*
		* @param {number} index Index at which to start deleting elements
		* @param {number} length The number of elements to remove. Defaults to 1.
		*/
		delete(index, length = 1) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeListDelete(transaction, this, index, length);
			});
			else
 /** @type {Array<any>} */ this._prelimContent.splice(index, length);
		}
		/**
		* Returns the i-th element from a YArray.
		*
		* @param {number} index The index of the element to return from the YArray
		* @return {T}
		*/
		get(index) {
			return typeListGet(this, index);
		}
		/**
		* Transforms this YArray to a JavaScript Array.
		*
		* @return {Array<T>}
		*/
		toArray() {
			return typeListToArray(this);
		}
		/**
		* Returns a portion of this YArray into a JavaScript Array selected
		* from start to end (end not included).
		*
		* @param {number} [start]
		* @param {number} [end]
		* @return {Array<T>}
		*/
		slice(start = 0, end = this.length) {
			return typeListSlice(this, start, end);
		}
		/**
		* Transforms this Shared Type to a JSON object.
		*
		* @return {Array<any>}
		*/
		toJSON() {
			return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
		}
		/**
		* Returns an Array with the result of calling a provided function on every
		* element of this YArray.
		*
		* @template M
		* @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
		* @return {Array<M>} A new array with each element being the result of the
		*                 callback function
		*/
		map(f) {
			return typeListMap(this, f);
		}
		/**
		* Executes a provided function once on every element of this YArray.
		*
		* @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
		*/
		forEach(f) {
			typeListForEach(this, f);
		}
		/**
		* @return {IterableIterator<T>}
		*/
		[Symbol.iterator]() {
			return typeListCreateIterator(this);
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		*/
		_write(encoder) {
			encoder.writeTypeRef(YArrayRefID);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
	*
	* @private
	* @function
	*/
	var readYArray = (_decoder) => new YArray();
	/**
	* @module YMap
	*/
	/**
	* @template T
	* @extends YEvent<YMap<T>>
	* Event that describes the changes on a YMap.
	*/
	var YMapEvent = class extends YEvent {
		/**
		* @param {YMap<T>} ymap The YArray that changed.
		* @param {Transaction} transaction
		* @param {Set<any>} subs The keys that changed.
		*/
		constructor(ymap, transaction, subs) {
			super(ymap, transaction);
			this.keysChanged = subs;
		}
	};
	/**
	* @template MapType
	* A shared Map implementation.
	*
	* @extends AbstractType<YMapEvent<MapType>>
	* @implements {Iterable<[string, MapType]>}
	*/
	var YMap = class YMap extends AbstractType {
		/**
		*
		* @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
		*/
		constructor(entries) {
			super();
			/**
			* @type {Map<string,any>?}
			* @private
			*/
			this._prelimContent = null;
			if (entries === void 0) this._prelimContent = /* @__PURE__ */ new Map();
			else this._prelimContent = new Map(entries);
		}
		/**
		* Integrate this type into the Yjs instance.
		*
		* * Save this struct in the os
		* * This type is sent to other client
		* * Observer functions are fired
		*
		* @param {Doc} y The Yjs instance
		* @param {Item} item
		*/
		_integrate(y, item) {
			super._integrate(y, item);
			/** @type {Map<string, any>} */ this._prelimContent.forEach((value, key) => {
				this.set(key, value);
			});
			this._prelimContent = null;
		}
		/**
		* @return {YMap<MapType>}
		*/
		_copy() {
			return new YMap();
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YMap<MapType>}
		*/
		clone() {
			/**
			* @type {YMap<MapType>}
			*/
			const map = new YMap();
			this.forEach((value, key) => {
				map.set(key, value instanceof AbstractType ? value.clone() : value);
			});
			return map;
		}
		/**
		* Creates YMapEvent and calls observers.
		*
		* @param {Transaction} transaction
		* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
		*/
		_callObserver(transaction, parentSubs) {
			callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
		}
		/**
		* Transforms this Shared Type to a JSON object.
		*
		* @return {Object<string,any>}
		*/
		toJSON() {
			this.doc ?? warnPrematureAccess();
			/**
			* @type {Object<string,MapType>}
			*/
			const map = {};
			this._map.forEach((item, key) => {
				if (!item.deleted) {
					const v = item.content.getContent()[item.length - 1];
					map[key] = v instanceof AbstractType ? v.toJSON() : v;
				}
			});
			return map;
		}
		/**
		* Returns the size of the YMap (count of key/value pairs)
		*
		* @return {number}
		*/
		get size() {
			return [...createMapIterator(this)].length;
		}
		/**
		* Returns the keys for each element in the YMap Type.
		*
		* @return {IterableIterator<string>}
		*/
		keys() {
			return iteratorMap(
				createMapIterator(this),
				/** @param {any} v */
				(v) => v[0]
			);
		}
		/**
		* Returns the values for each element in the YMap Type.
		*
		* @return {IterableIterator<MapType>}
		*/
		values() {
			return iteratorMap(
				createMapIterator(this),
				/** @param {any} v */
				(v) => v[1].content.getContent()[v[1].length - 1]
			);
		}
		/**
		* Returns an Iterator of [key, value] pairs
		*
		* @return {IterableIterator<[string, MapType]>}
		*/
		entries() {
			return iteratorMap(
				createMapIterator(this),
				/** @param {any} v */
				(v) => [v[0], v[1].content.getContent()[v[1].length - 1]]
			);
		}
		/**
		* Executes a provided function on once on every key-value pair.
		*
		* @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
		*/
		forEach(f) {
			this.doc ?? warnPrematureAccess();
			this._map.forEach((item, key) => {
				if (!item.deleted) f(item.content.getContent()[item.length - 1], key, this);
			});
		}
		/**
		* Returns an Iterator of [key, value] pairs
		*
		* @return {IterableIterator<[string, MapType]>}
		*/
		[Symbol.iterator]() {
			return this.entries();
		}
		/**
		* Remove a specified element from this YMap.
		*
		* @param {string} key The key of the element to remove.
		*/
		delete(key) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeMapDelete(transaction, this, key);
			});
			else
 /** @type {Map<string, any>} */ this._prelimContent.delete(key);
		}
		/**
		* Adds or updates an element with a specified key and value.
		* @template {MapType} VAL
		*
		* @param {string} key The key of the element to add to this YMap
		* @param {VAL} value The value of the element to add
		* @return {VAL}
		*/
		set(key, value) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeMapSet(transaction, this, key, value);
			});
			else
 /** @type {Map<string, any>} */ this._prelimContent.set(key, value);
			return value;
		}
		/**
		* Returns a specified element from this YMap.
		*
		* @param {string} key
		* @return {MapType|undefined}
		*/
		get(key) {
			return typeMapGet(this, key);
		}
		/**
		* Returns a boolean indicating whether the specified key exists or not.
		*
		* @param {string} key The key to test.
		* @return {boolean}
		*/
		has(key) {
			return typeMapHas(this, key);
		}
		/**
		* Removes all elements from this YMap.
		*/
		clear() {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				this.forEach(function(_value, key, map) {
					typeMapDelete(transaction, map, key);
				});
			});
			else
 /** @type {Map<string, any>} */ this._prelimContent.clear();
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		*/
		_write(encoder) {
			encoder.writeTypeRef(YMapRefID);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
	*
	* @private
	* @function
	*/
	var readYMap = (_decoder) => new YMap();
	/**
	* @module YText
	*/
	/**
	* @param {any} a
	* @param {any} b
	* @return {boolean}
	*/
	var equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
	var ItemTextListPosition = class {
		/**
		* @param {Item|null} left
		* @param {Item|null} right
		* @param {number} index
		* @param {Map<string,any>} currentAttributes
		*/
		constructor(left, right, index, currentAttributes) {
			this.left = left;
			this.right = right;
			this.index = index;
			this.currentAttributes = currentAttributes;
		}
		/**
		* Only call this if you know that this.right is defined
		*/
		forward() {
			if (this.right === null) unexpectedCase();
			switch (this.right.content.constructor) {
				case ContentFormat:
					if (!this.right.deleted) updateCurrentAttributes(this.currentAttributes, this.right.content);
					break;
				default: if (!this.right.deleted) this.index += this.right.length;
			}
			this.left = this.right;
			this.right = this.right.right;
		}
	};
	/**
	* @param {Transaction} transaction
	* @param {ItemTextListPosition} pos
	* @param {number} count steps to move forward
	* @return {ItemTextListPosition}
	*
	* @private
	* @function
	*/
	var findNextPosition = (transaction, pos, count) => {
		while (pos.right !== null && count > 0) {
			switch (pos.right.content.constructor) {
				case ContentFormat:
					if (!pos.right.deleted) updateCurrentAttributes(pos.currentAttributes, pos.right.content);
					break;
				default: if (!pos.right.deleted) {
					if (count < pos.right.length) getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
					pos.index += pos.right.length;
					count -= pos.right.length;
				}
			}
			pos.left = pos.right;
			pos.right = pos.right.right;
		}
		return pos;
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {number} index
	* @param {boolean} useSearchMarker
	* @return {ItemTextListPosition}
	*
	* @private
	* @function
	*/
	var findPosition = (transaction, parent, index, useSearchMarker) => {
		const currentAttributes = /* @__PURE__ */ new Map();
		const marker = useSearchMarker ? findMarker(parent, index) : null;
		if (marker) return findNextPosition(transaction, new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes), index - marker.index);
		else return findNextPosition(transaction, new ItemTextListPosition(null, parent._start, 0, currentAttributes), index);
	};
	/**
	* Negate applied formats
	*
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {ItemTextListPosition} currPos
	* @param {Map<string,any>} negatedAttributes
	*
	* @private
	* @function
	*/
	var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
		while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
			negatedAttributes.get(
				/** @type {ContentFormat} */
				currPos.right.content.key
			),
			/** @type {ContentFormat} */
			currPos.right.content.value
		))) {
			if (!currPos.right.deleted) negatedAttributes.delete(
				/** @type {ContentFormat} */
				currPos.right.content.key
			);
			currPos.forward();
		}
		const doc = transaction.doc;
		const ownClientId = doc.clientID;
		negatedAttributes.forEach((val, key) => {
			const left = currPos.left;
			const right = currPos.right;
			const nextFormat = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
			nextFormat.integrate(transaction, 0);
			currPos.right = nextFormat;
			currPos.forward();
		});
	};
	/**
	* @param {Map<string,any>} currentAttributes
	* @param {ContentFormat} format
	*
	* @private
	* @function
	*/
	var updateCurrentAttributes = (currentAttributes, format) => {
		const { key, value } = format;
		if (value === null) currentAttributes.delete(key);
		else currentAttributes.set(key, value);
	};
	/**
	* @param {ItemTextListPosition} currPos
	* @param {Object<string,any>} attributes
	*
	* @private
	* @function
	*/
	var minimizeAttributeChanges = (currPos, attributes) => {
		while (true) {
			if (currPos.right === null) break;
			else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
				attributes[currPos.right.content.key] ?? null,
				/** @type {ContentFormat} */
				currPos.right.content.value
			));
			else break;
			currPos.forward();
		}
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {ItemTextListPosition} currPos
	* @param {Object<string,any>} attributes
	* @return {Map<string,any>}
	*
	* @private
	* @function
	**/
	var insertAttributes = (transaction, parent, currPos, attributes) => {
		const doc = transaction.doc;
		const ownClientId = doc.clientID;
		const negatedAttributes = /* @__PURE__ */ new Map();
		for (const key in attributes) {
			const val = attributes[key];
			const currentVal = currPos.currentAttributes.get(key) ?? null;
			if (!equalAttrs(currentVal, val)) {
				negatedAttributes.set(key, currentVal);
				const { left, right } = currPos;
				currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
				currPos.right.integrate(transaction, 0);
				currPos.forward();
			}
		}
		return negatedAttributes;
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {ItemTextListPosition} currPos
	* @param {string|object|AbstractType<any>} text
	* @param {Object<string,any>} attributes
	*
	* @private
	* @function
	**/
	var insertText = (transaction, parent, currPos, text, attributes) => {
		currPos.currentAttributes.forEach((_val, key) => {
			if (attributes[key] === void 0) attributes[key] = null;
		});
		const doc = transaction.doc;
		const ownClientId = doc.clientID;
		minimizeAttributeChanges(currPos, attributes);
		const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
		const content = text.constructor === String ? new ContentString(text) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
		let { left, right, index } = currPos;
		if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
		right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
		right.integrate(transaction, 0);
		currPos.right = right;
		currPos.index = index;
		currPos.forward();
		insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
	};
	/**
	* @param {Transaction} transaction
	* @param {AbstractType<any>} parent
	* @param {ItemTextListPosition} currPos
	* @param {number} length
	* @param {Object<string,any>} attributes
	*
	* @private
	* @function
	*/
	var formatText = (transaction, parent, currPos, length, attributes) => {
		const doc = transaction.doc;
		const ownClientId = doc.clientID;
		minimizeAttributeChanges(currPos, attributes);
		const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
		iterationLoop: while (currPos.right !== null && (length > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
			if (!currPos.right.deleted) switch (currPos.right.content.constructor) {
				case ContentFormat: {
					const { key, value } = currPos.right.content;
					const attr = attributes[key];
					if (attr !== void 0) {
						if (equalAttrs(attr, value)) negatedAttributes.delete(key);
						else {
							if (length === 0) break iterationLoop;
							negatedAttributes.set(key, value);
						}
						currPos.right.delete(transaction);
					} else currPos.currentAttributes.set(key, value);
					break;
				}
				default:
					if (length < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
					length -= currPos.right.length;
			}
			currPos.forward();
		}
		if (length > 0) {
			let newlines = "";
			for (; length > 0; length--) newlines += "\n";
			currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
			currPos.right.integrate(transaction, 0);
			currPos.forward();
		}
		insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
	};
	/**
	* Call this function after string content has been deleted in order to
	* clean up formatting Items.
	*
	* @param {Transaction} transaction
	* @param {Item} start
	* @param {Item|null} curr exclusive end, automatically iterates to the next Content Item
	* @param {Map<string,any>} startAttributes
	* @param {Map<string,any>} currAttributes
	* @return {number} The amount of formatting Items deleted.
	*
	* @function
	*/
	var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
		/**
		* @type {Item|null}
		*/
		let end = start;
		/**
		* @type {Map<string,ContentFormat>}
		*/
		const endFormats = create$3();
		while (end && (!end.countable || end.deleted)) {
			if (!end.deleted && end.content.constructor === ContentFormat) {
				const cf = end.content;
				endFormats.set(cf.key, cf);
			}
			end = end.right;
		}
		let cleanups = 0;
		let reachedCurr = false;
		while (start !== end) {
			if (curr === start) reachedCurr = true;
			if (!start.deleted) {
				const content = start.content;
				switch (content.constructor) {
					case ContentFormat: {
						const { key, value } = content;
						const startAttrValue = startAttributes.get(key) ?? null;
						if (endFormats.get(key) !== content || startAttrValue === value) {
							start.delete(transaction);
							cleanups++;
							if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
								if (startAttrValue === null) currAttributes.delete(key);
								else currAttributes.set(key, startAttrValue);
							}
						}
						if (!reachedCurr && !start.deleted) updateCurrentAttributes(currAttributes, content);
						break;
					}
				}
			}
			start = start.right;
		}
		return cleanups;
	};
	/**
	* @param {Transaction} transaction
	* @param {Item | null} item
	*/
	var cleanupContextlessFormattingGap = (transaction, item) => {
		while (item && item.right && (item.right.deleted || !item.right.countable)) item = item.right;
		const attrs = /* @__PURE__ */ new Set();
		while (item && (item.deleted || !item.countable)) {
			if (!item.deleted && item.content.constructor === ContentFormat) {
				const key = item.content.key;
				if (attrs.has(key)) item.delete(transaction);
				else attrs.add(key);
			}
			item = item.left;
		}
	};
	/**
	* This function is experimental and subject to change / be removed.
	*
	* Ideally, we don't need this function at all. Formatting attributes should be cleaned up
	* automatically after each change. This function iterates twice over the complete YText type
	* and removes unnecessary formatting attributes. This is also helpful for testing.
	*
	* This function won't be exported anymore as soon as there is confidence that the YText type works as intended.
	*
	* @param {YText} type
	* @return {number} How many formatting attributes have been cleaned up.
	*/
	var cleanupYTextFormatting = (type) => {
		let res = 0;
		transact(type.doc, (transaction) => {
			let start = type._start;
			let end = type._start;
			let startAttributes = create$3();
			const currentAttributes = copy(startAttributes);
			while (end) {
				if (end.deleted === false) switch (end.content.constructor) {
					case ContentFormat:
						updateCurrentAttributes(currentAttributes, end.content);
						break;
					default:
						res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
						startAttributes = copy(currentAttributes);
						start = end;
				}
				end = end.right;
			}
		});
		return res;
	};
	/**
	* This will be called by the transaction once the event handlers are called to potentially cleanup
	* formatting attributes.
	*
	* @param {Transaction} transaction
	*/
	var cleanupYTextAfterTransaction = (transaction) => {
		/**
		* @type {Set<YText>}
		*/
		const needFullCleanup = /* @__PURE__ */ new Set();
		const doc = transaction.doc;
		for (const [client, afterClock] of transaction.afterState.entries()) {
			const clock = transaction.beforeState.get(client) || 0;
			if (afterClock === clock) continue;
			iterateStructs(transaction, doc.store.clients.get(client), clock, afterClock, (item) => {
				if (!item.deleted && item.content.constructor === ContentFormat && item.constructor !== GC) needFullCleanup.add(
					/** @type {any} */
					item.parent
				);
			});
		}
		transact(doc, (t) => {
			iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
				if (item instanceof GC || !item.parent._hasFormatting || needFullCleanup.has(item.parent)) return;
				const parent = item.parent;
				if (item.content.constructor === ContentFormat) needFullCleanup.add(parent);
				else cleanupContextlessFormattingGap(t, item);
			});
			for (const yText of needFullCleanup) cleanupYTextFormatting(yText);
		});
	};
	/**
	* @param {Transaction} transaction
	* @param {ItemTextListPosition} currPos
	* @param {number} length
	* @return {ItemTextListPosition}
	*
	* @private
	* @function
	*/
	var deleteText = (transaction, currPos, length) => {
		const startLength = length;
		const startAttrs = copy(currPos.currentAttributes);
		const start = currPos.right;
		while (length > 0 && currPos.right !== null) {
			if (currPos.right.deleted === false) switch (currPos.right.content.constructor) {
				case ContentType:
				case ContentEmbed:
				case ContentString:
					if (length < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
					length -= currPos.right.length;
					currPos.right.delete(transaction);
			}
			currPos.forward();
		}
		if (start) cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
		const parent = (currPos.left || currPos.right).parent;
		if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length);
		return currPos;
	};
	/**
	* The Quill Delta format represents changes on a text document with
	* formatting information. For more information visit {@link https://quilljs.com/docs/delta/|Quill Delta}
	*
	* @example
	*   {
	*     ops: [
	*       { insert: 'Gandalf', attributes: { bold: true } },
	*       { insert: ' the ' },
	*       { insert: 'Grey', attributes: { color: '#cccccc' } }
	*     ]
	*   }
	*
	*/
	/**
	* Attributes that can be assigned to a selection of text.
	*
	* @example
	*   {
	*     bold: true,
	*     font-size: '40px'
	*   }
	*
	* @typedef {Object} TextAttributes
	*/
	/**
	* @extends YEvent<YText>
	* Event that describes the changes on a YText type.
	*/
	var YTextEvent = class extends YEvent {
		/**
		* @param {YText} ytext
		* @param {Transaction} transaction
		* @param {Set<any>} subs The keys that changed
		*/
		constructor(ytext, transaction, subs) {
			super(ytext, transaction);
			/**
			* Whether the children changed.
			* @type {Boolean}
			* @private
			*/
			this.childListChanged = false;
			/**
			* Set of all changed attributes.
			* @type {Set<string>}
			*/
			this.keysChanged = /* @__PURE__ */ new Set();
			subs.forEach((sub) => {
				if (sub === null) this.childListChanged = true;
				else this.keysChanged.add(sub);
			});
		}
		/**
		* @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
		*/
		get changes() {
			if (this._changes === null) {
				/**
				* @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string|AbstractType<any>|object, delete?:number, retain?:number}>}}
				*/
				const changes = {
					keys: this.keys,
					delta: this.delta,
					added: /* @__PURE__ */ new Set(),
					deleted: /* @__PURE__ */ new Set()
				};
				this._changes = changes;
			}
			return this._changes;
		}
		/**
		* Compute the changes in the delta format.
		* A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
		*
		* @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
		*
		* @public
		*/
		get delta() {
			if (this._delta === null) {
				const y = this.target.doc;
				/**
				* @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
				*/
				const delta = [];
				transact(y, (transaction) => {
					const currentAttributes = /* @__PURE__ */ new Map();
					const oldAttributes = /* @__PURE__ */ new Map();
					let item = this.target._start;
					/**
					* @type {string?}
					*/
					let action = null;
					/**
					* @type {Object<string,any>}
					*/
					const attributes = {};
					/**
					* @type {string|object}
					*/
					let insert = "";
					let retain = 0;
					let deleteLen = 0;
					const addOp = () => {
						if (action !== null) {
							/**
							* @type {any}
							*/
							let op = null;
							switch (action) {
								case "delete":
									if (deleteLen > 0) op = { delete: deleteLen };
									deleteLen = 0;
									break;
								case "insert":
									if (typeof insert === "object" || insert.length > 0) {
										op = { insert };
										if (currentAttributes.size > 0) {
											op.attributes = {};
											currentAttributes.forEach((value, key) => {
												if (value !== null) op.attributes[key] = value;
											});
										}
									}
									insert = "";
									break;
								case "retain":
									if (retain > 0) {
										op = { retain };
										if (!isEmpty(attributes)) op.attributes = assign({}, attributes);
									}
									retain = 0;
							}
							if (op) delta.push(op);
							action = null;
						}
					};
					while (item !== null) {
						switch (item.content.constructor) {
							case ContentType:
							case ContentEmbed:
								if (this.adds(item)) {
									if (!this.deletes(item)) {
										addOp();
										action = "insert";
										insert = item.content.getContent()[0];
										addOp();
									}
								} else if (this.deletes(item)) {
									if (action !== "delete") {
										addOp();
										action = "delete";
									}
									deleteLen += 1;
								} else if (!item.deleted) {
									if (action !== "retain") {
										addOp();
										action = "retain";
									}
									retain += 1;
								}
								break;
							case ContentString:
								if (this.adds(item)) {
									if (!this.deletes(item)) {
										if (action !== "insert") {
											addOp();
											action = "insert";
										}
										insert += item.content.str;
									}
								} else if (this.deletes(item)) {
									if (action !== "delete") {
										addOp();
										action = "delete";
									}
									deleteLen += item.length;
								} else if (!item.deleted) {
									if (action !== "retain") {
										addOp();
										action = "retain";
									}
									retain += item.length;
								}
								break;
							case ContentFormat: {
								const { key, value } = item.content;
								if (this.adds(item)) {
									if (!this.deletes(item)) {
										if (!equalAttrs(currentAttributes.get(key) ?? null, value)) {
											if (action === "retain") addOp();
											if (equalAttrs(value, oldAttributes.get(key) ?? null)) delete attributes[key];
											else attributes[key] = value;
										} else if (value !== null) item.delete(transaction);
									}
								} else if (this.deletes(item)) {
									oldAttributes.set(key, value);
									const curVal = currentAttributes.get(key) ?? null;
									if (!equalAttrs(curVal, value)) {
										if (action === "retain") addOp();
										attributes[key] = curVal;
									}
								} else if (!item.deleted) {
									oldAttributes.set(key, value);
									const attr = attributes[key];
									if (attr !== void 0) {
										if (!equalAttrs(attr, value)) {
											if (action === "retain") addOp();
											if (value === null) delete attributes[key];
											else attributes[key] = value;
										} else if (attr !== null) item.delete(transaction);
									}
								}
								if (!item.deleted) {
									if (action === "insert") addOp();
									updateCurrentAttributes(currentAttributes, item.content);
								}
								break;
							}
						}
						item = item.right;
					}
					addOp();
					while (delta.length > 0) {
						const lastOp = delta[delta.length - 1];
						if (lastOp.retain !== void 0 && lastOp.attributes === void 0) delta.pop();
						else break;
					}
				});
				this._delta = delta;
			}
			return this._delta;
		}
	};
	/**
	* Type that represents text with formatting information.
	*
	* This type replaces y-richtext as this implementation is able to handle
	* block formats (format information on a paragraph), embeds (complex elements
	* like pictures and videos), and text formats (**bold**, *italic*).
	*
	* @extends AbstractType<YTextEvent>
	*/
	var YText = class YText extends AbstractType {
		/**
		* @param {String} [string] The initial value of the YText.
		*/
		constructor(string) {
			super();
			/**
			* Array of pending operations on this type
			* @type {Array<function():void>?}
			*/
			this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
			/**
			* @type {Array<ArraySearchMarker>|null}
			*/
			this._searchMarker = [];
			/**
			* Whether this YText contains formatting attributes.
			* This flag is updated when a formatting item is integrated (see ContentFormat.integrate)
			*/
			this._hasFormatting = false;
		}
		/**
		* Number of characters of this text type.
		*
		* @type {number}
		*/
		get length() {
			this.doc ?? warnPrematureAccess();
			return this._length;
		}
		/**
		* @param {Doc} y
		* @param {Item} item
		*/
		_integrate(y, item) {
			super._integrate(y, item);
			try {
				/** @type {Array<function>} */ this._pending.forEach((f) => f());
			} catch (e) {
				console.error(e);
			}
			this._pending = null;
		}
		_copy() {
			return new YText();
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YText}
		*/
		clone() {
			const text = new YText();
			text.applyDelta(this.toDelta());
			return text;
		}
		/**
		* Creates YTextEvent and calls observers.
		*
		* @param {Transaction} transaction
		* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
		*/
		_callObserver(transaction, parentSubs) {
			super._callObserver(transaction, parentSubs);
			const event = new YTextEvent(this, transaction, parentSubs);
			callTypeObservers(this, transaction, event);
			if (!transaction.local && this._hasFormatting) transaction._needFormattingCleanup = true;
		}
		/**
		* Returns the unformatted string representation of this YText type.
		*
		* @public
		*/
		toString() {
			this.doc ?? warnPrematureAccess();
			let str = "";
			/**
			* @type {Item|null}
			*/
			let n = this._start;
			while (n !== null) {
				if (!n.deleted && n.countable && n.content.constructor === ContentString) str += n.content.str;
				n = n.right;
			}
			return str;
		}
		/**
		* Returns the unformatted string representation of this YText type.
		*
		* @return {string}
		* @public
		*/
		toJSON() {
			return this.toString();
		}
		/**
		* Apply a {@link Delta} on this shared YText type.
		*
		* @param {Array<any>} delta The changes to apply on this element.
		* @param {object}  opts
		* @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
		*
		*
		* @public
		*/
		applyDelta(delta, { sanitize = true } = {}) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
				for (let i = 0; i < delta.length; i++) {
					const op = delta[i];
					if (op.insert !== void 0) {
						const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
						if (typeof ins !== "string" || ins.length > 0) insertText(transaction, this, currPos, ins, op.attributes || {});
					} else if (op.retain !== void 0) formatText(transaction, this, currPos, op.retain, op.attributes || {});
					else if (op.delete !== void 0) deleteText(transaction, currPos, op.delete);
				}
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.applyDelta(delta));
		}
		/**
		* Returns the Delta representation of this YText type.
		*
		* @param {Snapshot} [snapshot]
		* @param {Snapshot} [prevSnapshot]
		* @param {function('removed' | 'added', ID):any} [computeYChange]
		* @return {any} The Delta representation of this type.
		*
		* @public
		*/
		toDelta(snapshot, prevSnapshot, computeYChange) {
			this.doc ?? warnPrematureAccess();
			/**
			* @type{Array<any>}
			*/
			const ops = [];
			const currentAttributes = /* @__PURE__ */ new Map();
			const doc = this.doc;
			let str = "";
			let n = this._start;
			function packStr() {
				if (str.length > 0) {
					/**
					* @type {Object<string,any>}
					*/
					const attributes = {};
					let addAttributes = false;
					currentAttributes.forEach((value, key) => {
						addAttributes = true;
						attributes[key] = value;
					});
					/**
					* @type {Object<string,any>}
					*/
					const op = { insert: str };
					if (addAttributes) op.attributes = attributes;
					ops.push(op);
					str = "";
				}
			}
			const computeDelta = () => {
				while (n !== null) {
					if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) switch (n.content.constructor) {
						case ContentString: {
							const cur = currentAttributes.get("ychange");
							if (snapshot !== void 0 && !isVisible(n, snapshot)) {
								if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
									packStr();
									currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
								}
							} else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
								if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
									packStr();
									currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
								}
							} else if (cur !== void 0) {
								packStr();
								currentAttributes.delete("ychange");
							}
							str += n.content.str;
							break;
						}
						case ContentType:
						case ContentEmbed: {
							packStr();
							/**
							* @type {Object<string,any>}
							*/
							const op = { insert: n.content.getContent()[0] };
							if (currentAttributes.size > 0) {
								const attrs = {};
								op.attributes = attrs;
								currentAttributes.forEach((value, key) => {
									attrs[key] = value;
								});
							}
							ops.push(op);
							break;
						}
						case ContentFormat: if (isVisible(n, snapshot)) {
							packStr();
							updateCurrentAttributes(currentAttributes, n.content);
						}
					}
					n = n.right;
				}
				packStr();
			};
			if (snapshot || prevSnapshot) transact(doc, (transaction) => {
				if (snapshot) splitSnapshotAffectedStructs(transaction, snapshot);
				if (prevSnapshot) splitSnapshotAffectedStructs(transaction, prevSnapshot);
				computeDelta();
			}, "cleanup");
			else computeDelta();
			return ops;
		}
		/**
		* Insert text at a given index.
		*
		* @param {number} index The index at which to start inserting.
		* @param {String} text The text to insert at the specified position.
		* @param {TextAttributes} [attributes] Optionally define some formatting
		*                                    information to apply on the inserted
		*                                    Text.
		* @public
		*/
		insert(index, text, attributes) {
			if (text.length <= 0) return;
			const y = this.doc;
			if (y !== null) transact(y, (transaction) => {
				const pos = findPosition(transaction, this, index, !attributes);
				if (!attributes) {
					attributes = {};
					pos.currentAttributes.forEach((v, k) => {
						attributes[k] = v;
					});
				}
				insertText(transaction, this, pos, text, attributes);
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.insert(index, text, attributes));
		}
		/**
		* Inserts an embed at a index.
		*
		* @param {number} index The index to insert the embed at.
		* @param {Object | AbstractType<any>} embed The Object that represents the embed.
		* @param {TextAttributes} [attributes] Attribute information to apply on the
		*                                    embed
		*
		* @public
		*/
		insertEmbed(index, embed, attributes) {
			const y = this.doc;
			if (y !== null) transact(y, (transaction) => {
				const pos = findPosition(transaction, this, index, !attributes);
				insertText(transaction, this, pos, embed, attributes || {});
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
		}
		/**
		* Deletes text starting from an index.
		*
		* @param {number} index Index at which to start deleting.
		* @param {number} length The number of characters to remove. Defaults to 1.
		*
		* @public
		*/
		delete(index, length) {
			if (length === 0) return;
			const y = this.doc;
			if (y !== null) transact(y, (transaction) => {
				deleteText(transaction, findPosition(transaction, this, index, true), length);
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.delete(index, length));
		}
		/**
		* Assigns properties to a range of text.
		*
		* @param {number} index The position where to start formatting.
		* @param {number} length The amount of characters to assign properties to.
		* @param {TextAttributes} attributes Attribute information to apply on the
		*                                    text.
		*
		* @public
		*/
		format(index, length, attributes) {
			if (length === 0) return;
			const y = this.doc;
			if (y !== null) transact(y, (transaction) => {
				const pos = findPosition(transaction, this, index, false);
				if (pos.right === null) return;
				formatText(transaction, this, pos, length, attributes);
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.format(index, length, attributes));
		}
		/**
		* Removes an attribute.
		*
		* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
		*
		* @param {String} attributeName The attribute name that is to be removed.
		*
		* @public
		*/
		removeAttribute(attributeName) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeMapDelete(transaction, this, attributeName);
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.removeAttribute(attributeName));
		}
		/**
		* Sets or updates an attribute.
		*
		* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
		*
		* @param {String} attributeName The attribute name that is to be set.
		* @param {any} attributeValue The attribute value that is to be set.
		*
		* @public
		*/
		setAttribute(attributeName, attributeValue) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeMapSet(transaction, this, attributeName, attributeValue);
			});
			else
 /** @type {Array<function>} */ this._pending.push(() => this.setAttribute(attributeName, attributeValue));
		}
		/**
		* Returns an attribute value that belongs to the attribute name.
		*
		* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
		*
		* @param {String} attributeName The attribute name that identifies the
		*                               queried value.
		* @return {any} The queried attribute value.
		*
		* @public
		*/
		getAttribute(attributeName) {
			return typeMapGet(this, attributeName);
		}
		/**
		* Returns all attribute name/value pairs in a JSON Object.
		*
		* @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
		*
		* @return {Object<string, any>} A JSON Object that describes the attributes.
		*
		* @public
		*/
		getAttributes() {
			return typeMapGetAll(this);
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		*/
		_write(encoder) {
			encoder.writeTypeRef(YTextRefID);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
	* @return {YText}
	*
	* @private
	* @function
	*/
	var readYText = (_decoder) => new YText();
	/**
	* @module YXml
	*/
	/**
	* Define the elements to which a set of CSS queries apply.
	* {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors|CSS_Selectors}
	*
	* @example
	*   query = '.classSelector'
	*   query = 'nodeSelector'
	*   query = '#idSelector'
	*
	* @typedef {string} CSS_Selector
	*/
	/**
	* Dom filter function.
	*
	* @callback domFilter
	* @param {string} nodeName The nodeName of the element
	* @param {Map} attributes The map of attributes.
	* @return {boolean} Whether to include the Dom node in the YXmlElement.
	*/
	/**
	* Represents a subset of the nodes of a YXmlElement / YXmlFragment and a
	* position within them.
	*
	* Can be created with {@link YXmlFragment#createTreeWalker}
	*
	* @public
	* @implements {Iterable<YXmlElement|YXmlText|YXmlElement|YXmlHook>}
	*/
	var YXmlTreeWalker = class {
		/**
		* @param {YXmlFragment | YXmlElement} root
		* @param {function(AbstractType<any>):boolean} [f]
		*/
		constructor(root, f = () => true) {
			this._filter = f;
			this._root = root;
			/**
			* @type {Item}
			*/
			this._currentNode = root._start;
			this._firstCall = true;
			root.doc ?? warnPrematureAccess();
		}
		[Symbol.iterator]() {
			return this;
		}
		/**
		* Get the next node.
		*
		* @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
		*
		* @public
		*/
		next() {
			/**
			* @type {Item|null}
			*/
			let n = this._currentNode;
			let type = n && n.content && n.content.type;
			if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) do {
				type = n.content.type;
				if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) n = type._start;
				else while (n !== null) {
					/**
					* @type {Item | null}
					*/
					const nxt = n.next;
					if (nxt !== null) {
						n = nxt;
						break;
					} else if (n.parent === this._root) n = null;
					else n = n.parent._item;
				}
			} while (n !== null && (n.deleted || !this._filter(
				/** @type {ContentType} */
				n.content.type
			)));
			this._firstCall = false;
			if (n === null) return {
				value: void 0,
				done: true
			};
			this._currentNode = n;
			return {
				value: /** @type {any} */ n.content.type,
				done: false
			};
		}
	};
	/**
	* Represents a list of {@link YXmlElement}.and {@link YXmlText} types.
	* A YxmlFragment is similar to a {@link YXmlElement}, but it does not have a
	* nodeName and it does not have attributes. Though it can be bound to a DOM
	* element - in this case the attributes and the nodeName are not shared.
	*
	* @public
	* @extends AbstractType<YXmlEvent>
	*/
	var YXmlFragment = class YXmlFragment extends AbstractType {
		constructor() {
			super();
			/**
			* @type {Array<any>|null}
			*/
			this._prelimContent = [];
		}
		/**
		* @type {YXmlElement|YXmlText|null}
		*/
		get firstChild() {
			const first = this._first;
			return first ? first.content.getContent()[0] : null;
		}
		/**
		* Integrate this type into the Yjs instance.
		*
		* * Save this struct in the os
		* * This type is sent to other client
		* * Observer functions are fired
		*
		* @param {Doc} y The Yjs instance
		* @param {Item} item
		*/
		_integrate(y, item) {
			super._integrate(y, item);
			this.insert(0, this._prelimContent);
			this._prelimContent = null;
		}
		_copy() {
			return new YXmlFragment();
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YXmlFragment}
		*/
		clone() {
			const el = new YXmlFragment();
			el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
			return el;
		}
		get length() {
			this.doc ?? warnPrematureAccess();
			return this._prelimContent === null ? this._length : this._prelimContent.length;
		}
		/**
		* Create a subtree of childNodes.
		*
		* @example
		* const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
		* for (let node in walker) {
		*   // `node` is a div node
		*   nop(node)
		* }
		*
		* @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
		*                          returns a Boolean indicating whether the child
		*                          is to be included in the subtree.
		* @return {YXmlTreeWalker} A subtree and a position within it.
		*
		* @public
		*/
		createTreeWalker(filter) {
			return new YXmlTreeWalker(this, filter);
		}
		/**
		* Returns the first YXmlElement that matches the query.
		* Similar to DOM's {@link querySelector}.
		*
		* Query support:
		*   - tagname
		* TODO:
		*   - id
		*   - attribute
		*
		* @param {CSS_Selector} query The query on the children.
		* @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
		*
		* @public
		*/
		querySelector(query) {
			query = query.toUpperCase();
			const next = new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query).next();
			if (next.done) return null;
			else return next.value;
		}
		/**
		* Returns all YXmlElements that match the query.
		* Similar to Dom's {@link querySelectorAll}.
		*
		* @todo Does not yet support all queries. Currently only query by tagName.
		*
		* @param {CSS_Selector} query The query on the children
		* @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
		*
		* @public
		*/
		querySelectorAll(query) {
			query = query.toUpperCase();
			return from(new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query));
		}
		/**
		* Creates YXmlEvent and calls observers.
		*
		* @param {Transaction} transaction
		* @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
		*/
		_callObserver(transaction, parentSubs) {
			callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
		}
		/**
		* Get the string representation of all the children of this YXmlFragment.
		*
		* @return {string} The string representation of all children.
		*/
		toString() {
			return typeListMap(this, (xml) => xml.toString()).join("");
		}
		/**
		* @return {string}
		*/
		toJSON() {
			return this.toString();
		}
		/**
		* Creates a Dom Element that mirrors this YXmlElement.
		*
		* @param {Document} [_document=document] The document object (you must define
		*                                        this when calling this method in
		*                                        nodejs)
		* @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
		*                                             are presented in the DOM
		* @param {any} [binding] You should not set this property. This is
		*                               used if DomBinding wants to create a
		*                               association to the created DOM type.
		* @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
		*
		* @public
		*/
		toDOM(_document = document, hooks = {}, binding) {
			const fragment = _document.createDocumentFragment();
			if (binding !== void 0) binding._createAssociation(fragment, this);
			typeListForEach(this, (xmlType) => {
				fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
			});
			return fragment;
		}
		/**
		* Inserts new content at an index.
		*
		* @example
		*  // Insert character 'a' at position 0
		*  xml.insert(0, [new Y.XmlText('text')])
		*
		* @param {number} index The index to insert content at
		* @param {Array<YXmlElement|YXmlText>} content The array of content
		*/
		insert(index, content) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeListInsertGenerics(transaction, this, index, content);
			});
			else this._prelimContent.splice(index, 0, ...content);
		}
		/**
		* Inserts new content at an index.
		*
		* @example
		*  // Insert character 'a' at position 0
		*  xml.insert(0, [new Y.XmlText('text')])
		*
		* @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
		* @param {Array<YXmlElement|YXmlText>} content The array of content
		*/
		insertAfter(ref, content) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
				typeListInsertGenericsAfter(transaction, this, refItem, content);
			});
			else {
				const pc = this._prelimContent;
				const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
				if (index === 0 && ref !== null) throw create$4("Reference item not found");
				pc.splice(index, 0, ...content);
			}
		}
		/**
		* Deletes elements starting from an index.
		*
		* @param {number} index Index at which to start deleting elements
		* @param {number} [length=1] The number of elements to remove. Defaults to 1.
		*/
		delete(index, length = 1) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeListDelete(transaction, this, index, length);
			});
			else this._prelimContent.splice(index, length);
		}
		/**
		* Transforms this YArray to a JavaScript Array.
		*
		* @return {Array<YXmlElement|YXmlText|YXmlHook>}
		*/
		toArray() {
			return typeListToArray(this);
		}
		/**
		* Appends content to this YArray.
		*
		* @param {Array<YXmlElement|YXmlText>} content Array of content to append.
		*/
		push(content) {
			this.insert(this.length, content);
		}
		/**
		* Prepends content to this YArray.
		*
		* @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
		*/
		unshift(content) {
			this.insert(0, content);
		}
		/**
		* Returns the i-th element from a YArray.
		*
		* @param {number} index The index of the element to return from the YArray
		* @return {YXmlElement|YXmlText}
		*/
		get(index) {
			return typeListGet(this, index);
		}
		/**
		* Returns a portion of this YXmlFragment into a JavaScript Array selected
		* from start to end (end not included).
		*
		* @param {number} [start]
		* @param {number} [end]
		* @return {Array<YXmlElement|YXmlText>}
		*/
		slice(start = 0, end = this.length) {
			return typeListSlice(this, start, end);
		}
		/**
		* Executes a provided function on once on every child element.
		*
		* @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
		*/
		forEach(f) {
			typeListForEach(this, f);
		}
		/**
		* Transform the properties of this type to binary and write it to an
		* BinaryEncoder.
		*
		* This is called when this Item is sent to a remote peer.
		*
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
		*/
		_write(encoder) {
			encoder.writeTypeRef(YXmlFragmentRefID);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
	* @return {YXmlFragment}
	*
	* @private
	* @function
	*/
	var readYXmlFragment = (_decoder) => new YXmlFragment();
	/**
	* @typedef {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} ValueTypes
	*/
	/**
	* An YXmlElement imitates the behavior of a
	* https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element
	*
	* * An YXmlElement has attributes (key value pairs)
	* * An YXmlElement has childElements that must inherit from YXmlElement
	*
	* @template {{ [key: string]: ValueTypes }} [KV={ [key: string]: string }]
	*/
	var YXmlElement = class YXmlElement extends YXmlFragment {
		constructor(nodeName = "UNDEFINED") {
			super();
			this.nodeName = nodeName;
			/**
			* @type {Map<string, any>|null}
			*/
			this._prelimAttrs = /* @__PURE__ */ new Map();
		}
		/**
		* @type {YXmlElement|YXmlText|null}
		*/
		get nextSibling() {
			const n = this._item ? this._item.next : null;
			return n ? n.content.type : null;
		}
		/**
		* @type {YXmlElement|YXmlText|null}
		*/
		get prevSibling() {
			const n = this._item ? this._item.prev : null;
			return n ? n.content.type : null;
		}
		/**
		* Integrate this type into the Yjs instance.
		*
		* * Save this struct in the os
		* * This type is sent to other client
		* * Observer functions are fired
		*
		* @param {Doc} y The Yjs instance
		* @param {Item} item
		*/
		_integrate(y, item) {
			super._integrate(y, item);
			this._prelimAttrs.forEach((value, key) => {
				this.setAttribute(key, value);
			});
			this._prelimAttrs = null;
		}
		/**
		* Creates an Item with the same effect as this Item (without position effect)
		*
		* @return {YXmlElement}
		*/
		_copy() {
			return new YXmlElement(this.nodeName);
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YXmlElement<KV>}
		*/
		clone() {
			/**
			* @type {YXmlElement<KV>}
			*/
			const el = new YXmlElement(this.nodeName);
			forEach(this.getAttributes(), (value, key) => {
				el.setAttribute(key, value);
			});
			el.insert(0, this.toArray().map((v) => v instanceof AbstractType ? v.clone() : v));
			return el;
		}
		/**
		* Returns the XML serialization of this YXmlElement.
		* The attributes are ordered by attribute-name, so you can easily use this
		* method to compare YXmlElements
		*
		* @return {string} The string representation of this type.
		*
		* @public
		*/
		toString() {
			const attrs = this.getAttributes();
			const stringBuilder = [];
			const keys = [];
			for (const key in attrs) keys.push(key);
			keys.sort();
			const keysLen = keys.length;
			for (let i = 0; i < keysLen; i++) {
				const key = keys[i];
				stringBuilder.push(key + "=\"" + attrs[key] + "\"");
			}
			const nodeName = this.nodeName.toLocaleLowerCase();
			return `<${nodeName}${stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : ""}>${super.toString()}</${nodeName}>`;
		}
		/**
		* Removes an attribute from this YXmlElement.
		*
		* @param {string} attributeName The attribute name that is to be removed.
		*
		* @public
		*/
		removeAttribute(attributeName) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeMapDelete(transaction, this, attributeName);
			});
			else
 /** @type {Map<string,any>} */ this._prelimAttrs.delete(attributeName);
		}
		/**
		* Sets or updates an attribute.
		*
		* @template {keyof KV & string} KEY
		*
		* @param {KEY} attributeName The attribute name that is to be set.
		* @param {KV[KEY]} attributeValue The attribute value that is to be set.
		*
		* @public
		*/
		setAttribute(attributeName, attributeValue) {
			if (this.doc !== null) transact(this.doc, (transaction) => {
				typeMapSet(transaction, this, attributeName, attributeValue);
			});
			else
 /** @type {Map<string, any>} */ this._prelimAttrs.set(attributeName, attributeValue);
		}
		/**
		* Returns an attribute value that belongs to the attribute name.
		*
		* @template {keyof KV & string} KEY
		*
		* @param {KEY} attributeName The attribute name that identifies the
		*                               queried value.
		* @return {KV[KEY]|undefined} The queried attribute value.
		*
		* @public
		*/
		getAttribute(attributeName) {
			return typeMapGet(this, attributeName);
		}
		/**
		* Returns whether an attribute exists
		*
		* @param {string} attributeName The attribute name to check for existence.
		* @return {boolean} whether the attribute exists.
		*
		* @public
		*/
		hasAttribute(attributeName) {
			return typeMapHas(this, attributeName);
		}
		/**
		* Returns all attribute name/value pairs in a JSON Object.
		*
		* @param {Snapshot} [snapshot]
		* @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
		*
		* @public
		*/
		getAttributes(snapshot) {
			return snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this);
		}
		/**
		* Creates a Dom Element that mirrors this YXmlElement.
		*
		* @param {Document} [_document=document] The document object (you must define
		*                                        this when calling this method in
		*                                        nodejs)
		* @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
		*                                             are presented in the DOM
		* @param {any} [binding] You should not set this property. This is
		*                               used if DomBinding wants to create a
		*                               association to the created DOM type.
		* @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
		*
		* @public
		*/
		toDOM(_document = document, hooks = {}, binding) {
			const dom = _document.createElement(this.nodeName);
			const attrs = this.getAttributes();
			for (const key in attrs) {
				const value = attrs[key];
				if (typeof value === "string") dom.setAttribute(key, value);
			}
			typeListForEach(this, (yxml) => {
				dom.appendChild(yxml.toDOM(_document, hooks, binding));
			});
			if (binding !== void 0) binding._createAssociation(dom, this);
			return dom;
		}
		/**
		* Transform the properties of this type to binary and write it to an
		* BinaryEncoder.
		*
		* This is called when this Item is sent to a remote peer.
		*
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
		*/
		_write(encoder) {
			encoder.writeTypeRef(YXmlElementRefID);
			encoder.writeKey(this.nodeName);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {YXmlElement}
	*
	* @function
	*/
	var readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
	/**
	* @extends YEvent<YXmlElement|YXmlText|YXmlFragment>
	* An Event that describes changes on a YXml Element or Yxml Fragment
	*/
	var YXmlEvent = class extends YEvent {
		/**
		* @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
		* @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
		*                   child list changed.
		* @param {Transaction} transaction The transaction instance with which the
		*                                  change was created.
		*/
		constructor(target, subs, transaction) {
			super(target, transaction);
			/**
			* Whether the children changed.
			* @type {Boolean}
			* @private
			*/
			this.childListChanged = false;
			/**
			* Set of all changed attributes.
			* @type {Set<string>}
			*/
			this.attributesChanged = /* @__PURE__ */ new Set();
			subs.forEach((sub) => {
				if (sub === null) this.childListChanged = true;
				else this.attributesChanged.add(sub);
			});
		}
	};
	/**
	* You can manage binding to a custom type with YXmlHook.
	*
	* @extends {YMap<any>}
	*/
	var YXmlHook = class YXmlHook extends YMap {
		/**
		* @param {string} hookName nodeName of the Dom Node.
		*/
		constructor(hookName) {
			super();
			/**
			* @type {string}
			*/
			this.hookName = hookName;
		}
		/**
		* Creates an Item with the same effect as this Item (without position effect)
		*/
		_copy() {
			return new YXmlHook(this.hookName);
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YXmlHook}
		*/
		clone() {
			const el = new YXmlHook(this.hookName);
			this.forEach((value, key) => {
				el.set(key, value);
			});
			return el;
		}
		/**
		* Creates a Dom Element that mirrors this YXmlElement.
		*
		* @param {Document} [_document=document] The document object (you must define
		*                                        this when calling this method in
		*                                        nodejs)
		* @param {Object.<string, any>} [hooks] Optional property to customize how hooks
		*                                             are presented in the DOM
		* @param {any} [binding] You should not set this property. This is
		*                               used if DomBinding wants to create a
		*                               association to the created DOM type
		* @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
		*
		* @public
		*/
		toDOM(_document = document, hooks = {}, binding) {
			const hook = hooks[this.hookName];
			let dom;
			if (hook !== void 0) dom = hook.createDom(this);
			else dom = document.createElement(this.hookName);
			dom.setAttribute("data-yjs-hook", this.hookName);
			if (binding !== void 0) binding._createAssociation(dom, this);
			return dom;
		}
		/**
		* Transform the properties of this type to binary and write it to an
		* BinaryEncoder.
		*
		* This is called when this Item is sent to a remote peer.
		*
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
		*/
		_write(encoder) {
			encoder.writeTypeRef(YXmlHookRefID);
			encoder.writeKey(this.hookName);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {YXmlHook}
	*
	* @private
	* @function
	*/
	var readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
	/**
	* Represents text in a Dom Element. In the future this type will also handle
	* simple formatting information like bold and italic.
	*/
	var YXmlText = class YXmlText extends YText {
		/**
		* @type {YXmlElement|YXmlText|null}
		*/
		get nextSibling() {
			const n = this._item ? this._item.next : null;
			return n ? n.content.type : null;
		}
		/**
		* @type {YXmlElement|YXmlText|null}
		*/
		get prevSibling() {
			const n = this._item ? this._item.prev : null;
			return n ? n.content.type : null;
		}
		_copy() {
			return new YXmlText();
		}
		/**
		* Makes a copy of this data type that can be included somewhere else.
		*
		* Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
		*
		* @return {YXmlText}
		*/
		clone() {
			const text = new YXmlText();
			text.applyDelta(this.toDelta());
			return text;
		}
		/**
		* Creates a Dom Element that mirrors this YXmlText.
		*
		* @param {Document} [_document=document] The document object (you must define
		*                                        this when calling this method in
		*                                        nodejs)
		* @param {Object<string, any>} [hooks] Optional property to customize how hooks
		*                                             are presented in the DOM
		* @param {any} [binding] You should not set this property. This is
		*                               used if DomBinding wants to create a
		*                               association to the created DOM type.
		* @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
		*
		* @public
		*/
		toDOM(_document = document, hooks, binding) {
			const dom = _document.createTextNode(this.toString());
			if (binding !== void 0) binding._createAssociation(dom, this);
			return dom;
		}
		toString() {
			return this.toDelta().map((delta) => {
				const nestedNodes = [];
				for (const nodeName in delta.attributes) {
					const attrs = [];
					for (const key in delta.attributes[nodeName]) attrs.push({
						key,
						value: delta.attributes[nodeName][key]
					});
					attrs.sort((a, b) => a.key < b.key ? -1 : 1);
					nestedNodes.push({
						nodeName,
						attrs
					});
				}
				nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
				let str = "";
				for (let i = 0; i < nestedNodes.length; i++) {
					const node = nestedNodes[i];
					str += `<${node.nodeName}`;
					for (let j = 0; j < node.attrs.length; j++) {
						const attr = node.attrs[j];
						str += ` ${attr.key}="${attr.value}"`;
					}
					str += ">";
				}
				str += delta.insert;
				for (let i = nestedNodes.length - 1; i >= 0; i--) str += `</${nestedNodes[i].nodeName}>`;
				return str;
			}).join("");
		}
		/**
		* @return {string}
		*/
		toJSON() {
			return this.toString();
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		*/
		_write(encoder) {
			encoder.writeTypeRef(YXmlTextRefID);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {YXmlText}
	*
	* @private
	* @function
	*/
	var readYXmlText = (decoder) => new YXmlText();
	var AbstractStruct = class {
		/**
		* @param {ID} id
		* @param {number} length
		*/
		constructor(id, length) {
			this.id = id;
			this.length = length;
		}
		/**
		* @type {boolean}
		*/
		get deleted() {
			throw methodUnimplemented();
		}
		/**
		* Merge this struct with the item to the right.
		* This method is already assuming that `this.id.clock + this.length === this.id.clock`.
		* Also this method does *not* remove right from StructStore!
		* @param {AbstractStruct} right
		* @return {boolean} whether this merged with right
		*/
		mergeWith(right) {
			return false;
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
		* @param {number} offset
		* @param {number} encodingRef
		*/
		write(encoder, offset, encodingRef) {
			throw methodUnimplemented();
		}
		/**
		* @param {Transaction} transaction
		* @param {number} offset
		*/
		integrate(transaction, offset) {
			throw methodUnimplemented();
		}
	};
	var structGCRefNumber = 0;
	/**
	* @private
	*/
	var GC = class extends AbstractStruct {
		get deleted() {
			return true;
		}
		delete() {}
		/**
		* @param {GC} right
		* @return {boolean}
		*/
		mergeWith(right) {
			if (this.constructor !== right.constructor) return false;
			this.length += right.length;
			return true;
		}
		/**
		* @param {Transaction} transaction
		* @param {number} offset
		*/
		integrate(transaction, offset) {
			if (offset > 0) {
				this.id.clock += offset;
				this.length -= offset;
			}
			addStruct(transaction.doc.store, this);
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeInfo(structGCRefNumber);
			encoder.writeLen(this.length - offset);
		}
		/**
		* @param {Transaction} transaction
		* @param {StructStore} store
		* @return {null | number}
		*/
		getMissing(transaction, store) {
			return null;
		}
	};
	var ContentBinary = class ContentBinary {
		/**
		* @param {Uint8Array} content
		*/
		constructor(content) {
			this.content = content;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return 1;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return [this.content];
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentBinary}
		*/
		copy() {
			return new ContentBinary(this.content);
		}
		/**
		* @param {number} offset
		* @return {ContentBinary}
		*/
		splice(offset) {
			throw methodUnimplemented();
		}
		/**
		* @param {ContentBinary} right
		* @return {boolean}
		*/
		mergeWith(right) {
			return false;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeBuf(this.content);
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 3;
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
	* @return {ContentBinary}
	*/
	var readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
	var ContentDeleted = class ContentDeleted {
		/**
		* @param {number} len
		*/
		constructor(len) {
			this.len = len;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return this.len;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return [];
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return false;
		}
		/**
		* @return {ContentDeleted}
		*/
		copy() {
			return new ContentDeleted(this.len);
		}
		/**
		* @param {number} offset
		* @return {ContentDeleted}
		*/
		splice(offset) {
			const right = new ContentDeleted(this.len - offset);
			this.len = offset;
			return right;
		}
		/**
		* @param {ContentDeleted} right
		* @return {boolean}
		*/
		mergeWith(right) {
			this.len += right.len;
			return true;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {
			addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
			item.markDeleted();
		}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeLen(this.len - offset);
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 1;
		}
	};
	/**
	* @private
	*
	* @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
	* @return {ContentDeleted}
	*/
	var readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
	/**
	* @param {string} guid
	* @param {Object<string, any>} opts
	*/
	var createDocFromOpts = (guid, opts) => new Doc({
		guid,
		...opts,
		shouldLoad: opts.shouldLoad || opts.autoLoad || false
	});
	/**
	* @private
	*/
	var ContentDoc = class ContentDoc {
		/**
		* @param {Doc} doc
		*/
		constructor(doc) {
			if (doc._item) console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
			/**
			* @type {Doc}
			*/
			this.doc = doc;
			/**
			* @type {any}
			*/
			const opts = {};
			this.opts = opts;
			if (!doc.gc) opts.gc = false;
			if (doc.autoLoad) opts.autoLoad = true;
			if (doc.meta !== null) opts.meta = doc.meta;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return 1;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return [this.doc];
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentDoc}
		*/
		copy() {
			return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
		}
		/**
		* @param {number} offset
		* @return {ContentDoc}
		*/
		splice(offset) {
			throw methodUnimplemented();
		}
		/**
		* @param {ContentDoc} right
		* @return {boolean}
		*/
		mergeWith(right) {
			return false;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {
			this.doc._item = item;
			transaction.subdocsAdded.add(this.doc);
			if (this.doc.shouldLoad) transaction.subdocsLoaded.add(this.doc);
		}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {
			if (transaction.subdocsAdded.has(this.doc)) transaction.subdocsAdded.delete(this.doc);
			else transaction.subdocsRemoved.add(this.doc);
		}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeString(this.doc.guid);
			encoder.writeAny(this.opts);
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 9;
		}
	};
	/**
	* @private
	*
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentDoc}
	*/
	var readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
	/**
	* @private
	*/
	var ContentEmbed = class ContentEmbed {
		/**
		* @param {Object} embed
		*/
		constructor(embed) {
			this.embed = embed;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return 1;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return [this.embed];
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentEmbed}
		*/
		copy() {
			return new ContentEmbed(this.embed);
		}
		/**
		* @param {number} offset
		* @return {ContentEmbed}
		*/
		splice(offset) {
			throw methodUnimplemented();
		}
		/**
		* @param {ContentEmbed} right
		* @return {boolean}
		*/
		mergeWith(right) {
			return false;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeJSON(this.embed);
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 5;
		}
	};
	/**
	* @private
	*
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentEmbed}
	*/
	var readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
	/**
	* @private
	*/
	var ContentFormat = class ContentFormat {
		/**
		* @param {string} key
		* @param {Object} value
		*/
		constructor(key, value) {
			this.key = key;
			this.value = value;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return 1;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return [];
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return false;
		}
		/**
		* @return {ContentFormat}
		*/
		copy() {
			return new ContentFormat(this.key, this.value);
		}
		/**
		* @param {number} _offset
		* @return {ContentFormat}
		*/
		splice(_offset) {
			throw methodUnimplemented();
		}
		/**
		* @param {ContentFormat} _right
		* @return {boolean}
		*/
		mergeWith(_right) {
			return false;
		}
		/**
		* @param {Transaction} _transaction
		* @param {Item} item
		*/
		integrate(_transaction, item) {
			const p = item.parent;
			p._searchMarker = null;
			p._hasFormatting = true;
		}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeKey(this.key);
			encoder.writeJSON(this.value);
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 6;
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentFormat}
	*/
	var readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
	/**
	* @private
	*/
	var ContentJSON = class ContentJSON {
		/**
		* @param {Array<any>} arr
		*/
		constructor(arr) {
			/**
			* @type {Array<any>}
			*/
			this.arr = arr;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return this.arr.length;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return this.arr;
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentJSON}
		*/
		copy() {
			return new ContentJSON(this.arr);
		}
		/**
		* @param {number} offset
		* @return {ContentJSON}
		*/
		splice(offset) {
			const right = new ContentJSON(this.arr.slice(offset));
			this.arr = this.arr.slice(0, offset);
			return right;
		}
		/**
		* @param {ContentJSON} right
		* @return {boolean}
		*/
		mergeWith(right) {
			this.arr = this.arr.concat(right.arr);
			return true;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			const len = this.arr.length;
			encoder.writeLen(len - offset);
			for (let i = offset; i < len; i++) {
				const c = this.arr[i];
				encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
			}
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 2;
		}
	};
	/**
	* @private
	*
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentJSON}
	*/
	var readContentJSON = (decoder) => {
		const len = decoder.readLen();
		const cs = [];
		for (let i = 0; i < len; i++) {
			const c = decoder.readString();
			if (c === "undefined") cs.push(void 0);
			else cs.push(JSON.parse(c));
		}
		return new ContentJSON(cs);
	};
	var isDevMode = getVariable("node_env") === "development";
	var ContentAny = class ContentAny {
		/**
		* @param {Array<any>} arr
		*/
		constructor(arr) {
			/**
			* @type {Array<any>}
			*/
			this.arr = arr;
			isDevMode && deepFreeze(arr);
		}
		/**
		* @return {number}
		*/
		getLength() {
			return this.arr.length;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return this.arr;
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentAny}
		*/
		copy() {
			return new ContentAny(this.arr);
		}
		/**
		* @param {number} offset
		* @return {ContentAny}
		*/
		splice(offset) {
			const right = new ContentAny(this.arr.slice(offset));
			this.arr = this.arr.slice(0, offset);
			return right;
		}
		/**
		* @param {ContentAny} right
		* @return {boolean}
		*/
		mergeWith(right) {
			this.arr = this.arr.concat(right.arr);
			return true;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			const len = this.arr.length;
			encoder.writeLen(len - offset);
			for (let i = offset; i < len; i++) {
				const c = this.arr[i];
				encoder.writeAny(c);
			}
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 8;
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentAny}
	*/
	var readContentAny = (decoder) => {
		const len = decoder.readLen();
		const cs = [];
		for (let i = 0; i < len; i++) cs.push(decoder.readAny());
		return new ContentAny(cs);
	};
	/**
	* @private
	*/
	var ContentString = class ContentString {
		/**
		* @param {string} str
		*/
		constructor(str) {
			/**
			* @type {string}
			*/
			this.str = str;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return this.str.length;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return this.str.split("");
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentString}
		*/
		copy() {
			return new ContentString(this.str);
		}
		/**
		* @param {number} offset
		* @return {ContentString}
		*/
		splice(offset) {
			const right = new ContentString(this.str.slice(offset));
			this.str = this.str.slice(0, offset);
			const firstCharCode = this.str.charCodeAt(offset - 1);
			if (firstCharCode >= 55296 && firstCharCode <= 56319) {
				this.str = this.str.slice(0, offset - 1) + "�";
				right.str = "�" + right.str.slice(1);
			}
			return right;
		}
		/**
		* @param {ContentString} right
		* @return {boolean}
		*/
		mergeWith(right) {
			this.str += right.str;
			return true;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {}
		/**
		* @param {StructStore} store
		*/
		gc(store) {}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 4;
		}
	};
	/**
	* @private
	*
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentString}
	*/
	var readContentString = (decoder) => new ContentString(decoder.readString());
	/**
	* @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractType<any>>}
	* @private
	*/
	var typeRefs = [
		readYArray,
		readYMap,
		readYText,
		readYXmlElement,
		readYXmlFragment,
		readYXmlHook,
		readYXmlText
	];
	var YArrayRefID = 0;
	var YMapRefID = 1;
	var YTextRefID = 2;
	var YXmlElementRefID = 3;
	var YXmlFragmentRefID = 4;
	var YXmlHookRefID = 5;
	var YXmlTextRefID = 6;
	/**
	* @private
	*/
	var ContentType = class ContentType {
		/**
		* @param {AbstractType<any>} type
		*/
		constructor(type) {
			/**
			* @type {AbstractType<any>}
			*/
			this.type = type;
		}
		/**
		* @return {number}
		*/
		getLength() {
			return 1;
		}
		/**
		* @return {Array<any>}
		*/
		getContent() {
			return [this.type];
		}
		/**
		* @return {boolean}
		*/
		isCountable() {
			return true;
		}
		/**
		* @return {ContentType}
		*/
		copy() {
			return new ContentType(this.type._copy());
		}
		/**
		* @param {number} offset
		* @return {ContentType}
		*/
		splice(offset) {
			throw methodUnimplemented();
		}
		/**
		* @param {ContentType} right
		* @return {boolean}
		*/
		mergeWith(right) {
			return false;
		}
		/**
		* @param {Transaction} transaction
		* @param {Item} item
		*/
		integrate(transaction, item) {
			this.type._integrate(transaction.doc, item);
		}
		/**
		* @param {Transaction} transaction
		*/
		delete(transaction) {
			let item = this.type._start;
			while (item !== null) {
				if (!item.deleted) item.delete(transaction);
				else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) transaction._mergeStructs.push(item);
				item = item.right;
			}
			this.type._map.forEach((item) => {
				if (!item.deleted) item.delete(transaction);
				else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) transaction._mergeStructs.push(item);
			});
			transaction.changed.delete(this.type);
		}
		/**
		* @param {StructStore} store
		*/
		gc(store) {
			let item = this.type._start;
			while (item !== null) {
				item.gc(store, true);
				item = item.right;
			}
			this.type._start = null;
			this.type._map.forEach(
				/** @param {Item | null} item */
				(item) => {
					while (item !== null) {
						item.gc(store, true);
						item = item.left;
					}
				}
			);
			this.type._map = /* @__PURE__ */ new Map();
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			this.type._write(encoder);
		}
		/**
		* @return {number}
		*/
		getRef() {
			return 7;
		}
	};
	/**
	* @private
	*
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @return {ContentType}
	*/
	var readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
	/**
	* Split leftItem into two items
	* @param {Transaction} transaction
	* @param {Item} leftItem
	* @param {number} diff
	* @return {Item}
	*
	* @function
	* @private
	*/
	var splitItem = (transaction, leftItem, diff) => {
		const { client, clock } = leftItem.id;
		const rightItem = new Item(createID(client, clock + diff), leftItem, createID(client, clock + diff - 1), leftItem.right, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
		if (leftItem.deleted) rightItem.markDeleted();
		if (leftItem.keep) rightItem.keep = true;
		if (leftItem.redone !== null) rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
		leftItem.right = rightItem;
		if (rightItem.right !== null) rightItem.right.left = rightItem;
		transaction._mergeStructs.push(rightItem);
		if (rightItem.parentSub !== null && rightItem.right === null)
 /** @type {AbstractType<any>} */ rightItem.parent._map.set(rightItem.parentSub, rightItem);
		leftItem.length = diff;
		return rightItem;
	};
	/**
	* Abstract class that represents any content.
	*/
	var Item = class Item extends AbstractStruct {
		/**
		* @param {ID} id
		* @param {Item | null} left
		* @param {ID | null} origin
		* @param {Item | null} right
		* @param {ID | null} rightOrigin
		* @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
		* @param {string | null} parentSub
		* @param {AbstractContent} content
		*/
		constructor(id, left, origin, right, rightOrigin, parent, parentSub, content) {
			super(id, content.getLength());
			/**
			* The item that was originally to the left of this item.
			* @type {ID | null}
			*/
			this.origin = origin;
			/**
			* The item that is currently to the left of this item.
			* @type {Item | null}
			*/
			this.left = left;
			/**
			* The item that is currently to the right of this item.
			* @type {Item | null}
			*/
			this.right = right;
			/**
			* The item that was originally to the right of this item.
			* @type {ID | null}
			*/
			this.rightOrigin = rightOrigin;
			/**
			* @type {AbstractType<any>|ID|null}
			*/
			this.parent = parent;
			/**
			* If the parent refers to this item with some kind of key (e.g. YMap, the
			* key is specified here. The key is then used to refer to the list in which
			* to insert this item. If `parentSub = null` type._start is the list in
			* which to insert to. Otherwise it is `parent._map`.
			* @type {String | null}
			*/
			this.parentSub = parentSub;
			/**
			* If this type's effect is redone this type refers to the type that undid
			* this operation.
			* @type {ID | null}
			*/
			this.redone = null;
			/**
			* @type {AbstractContent}
			*/
			this.content = content;
			/**
			* bit1: keep
			* bit2: countable
			* bit3: deleted
			* bit4: mark - mark node as fast-search-marker
			* @type {number} byte
			*/
			this.info = this.content.isCountable() ? 2 : 0;
		}
		/**
		* This is used to mark the item as an indexed fast-search marker
		*
		* @type {boolean}
		*/
		set marker(isMarked) {
			if ((this.info & 8) > 0 !== isMarked) this.info ^= 8;
		}
		get marker() {
			return (this.info & 8) > 0;
		}
		/**
		* If true, do not garbage collect this Item.
		*/
		get keep() {
			return (this.info & 1) > 0;
		}
		set keep(doKeep) {
			if (this.keep !== doKeep) this.info ^= 1;
		}
		get countable() {
			return (this.info & 2) > 0;
		}
		/**
		* Whether this item was deleted or not.
		* @type {Boolean}
		*/
		get deleted() {
			return (this.info & 4) > 0;
		}
		set deleted(doDelete) {
			if (this.deleted !== doDelete) this.info ^= 4;
		}
		markDeleted() {
			this.info |= 4;
		}
		/**
		* Return the creator clientID of the missing op or define missing items and return null.
		*
		* @param {Transaction} transaction
		* @param {StructStore} store
		* @return {null | number}
		*/
		getMissing(transaction, store) {
			if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) return this.origin.client;
			if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) return this.rightOrigin.client;
			if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) return this.parent.client;
			if (this.origin) {
				this.left = getItemCleanEnd(transaction, store, this.origin);
				this.origin = this.left.lastId;
			}
			if (this.rightOrigin) {
				this.right = getItemCleanStart(transaction, this.rightOrigin);
				this.rightOrigin = this.right.id;
			}
			if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) this.parent = null;
			else if (!this.parent) {
				if (this.left && this.left.constructor === Item) {
					this.parent = this.left.parent;
					this.parentSub = this.left.parentSub;
				} else if (this.right && this.right.constructor === Item) {
					this.parent = this.right.parent;
					this.parentSub = this.right.parentSub;
				}
			} else if (this.parent.constructor === ID) {
				const parentItem = getItem(store, this.parent);
				if (parentItem.constructor === GC) this.parent = null;
				else this.parent = parentItem.content.type;
			}
			return null;
		}
		/**
		* @param {Transaction} transaction
		* @param {number} offset
		*/
		integrate(transaction, offset) {
			if (offset > 0) {
				this.id.clock += offset;
				this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
				this.origin = this.left.lastId;
				this.content = this.content.splice(offset);
				this.length -= offset;
			}
			if (this.parent) {
				if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
					/**
					* @type {Item|null}
					*/
					let left = this.left;
					/**
					* @type {Item|null}
					*/
					let o;
					if (left !== null) o = left.right;
					else if (this.parentSub !== null) {
						o = this.parent._map.get(this.parentSub) || null;
						while (o !== null && o.left !== null) o = o.left;
					} else o = this.parent._start;
					/**
					* @type {Set<Item>}
					*/
					const conflictingItems = /* @__PURE__ */ new Set();
					/**
					* @type {Set<Item>}
					*/
					const itemsBeforeOrigin = /* @__PURE__ */ new Set();
					while (o !== null && o !== this.right) {
						itemsBeforeOrigin.add(o);
						conflictingItems.add(o);
						if (compareIDs(this.origin, o.origin)) {
							if (o.id.client < this.id.client) {
								left = o;
								conflictingItems.clear();
							} else if (compareIDs(this.rightOrigin, o.rightOrigin)) break;
						} else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
							if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
								left = o;
								conflictingItems.clear();
							}
						} else break;
						o = o.right;
					}
					this.left = left;
				}
				if (this.left !== null) {
					const right = this.left.right;
					this.right = right;
					this.left.right = this;
				} else {
					let r;
					if (this.parentSub !== null) {
						r = this.parent._map.get(this.parentSub) || null;
						while (r !== null && r.left !== null) r = r.left;
					} else {
						r = this.parent._start;
						/** @type {AbstractType<any>} */ this.parent._start = this;
					}
					this.right = r;
				}
				if (this.right !== null) this.right.left = this;
				else if (this.parentSub !== null) {
					/** @type {AbstractType<any>} */ this.parent._map.set(this.parentSub, this);
					if (this.left !== null) this.left.delete(transaction);
				}
				if (this.parentSub === null && this.countable && !this.deleted)
 /** @type {AbstractType<any>} */ this.parent._length += this.length;
				addStruct(transaction.doc.store, this);
				this.content.integrate(transaction, this);
				addChangedTypeToTransaction(transaction, this.parent, this.parentSub);
				if (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) this.delete(transaction);
			} else new GC(this.id, this.length).integrate(transaction, 0);
		}
		/**
		* Returns the next non-deleted item
		*/
		get next() {
			let n = this.right;
			while (n !== null && n.deleted) n = n.right;
			return n;
		}
		/**
		* Returns the previous non-deleted item
		*/
		get prev() {
			let n = this.left;
			while (n !== null && n.deleted) n = n.left;
			return n;
		}
		/**
		* Computes the last content address of this Item.
		*/
		get lastId() {
			return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
		}
		/**
		* Try to merge two items
		*
		* @param {Item} right
		* @return {boolean}
		*/
		mergeWith(right) {
			if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
				const searchMarker = this.parent._searchMarker;
				if (searchMarker) searchMarker.forEach((marker) => {
					if (marker.p === right) {
						marker.p = this;
						if (!this.deleted && this.countable) marker.index -= this.length;
					}
				});
				if (right.keep) this.keep = true;
				this.right = right.right;
				if (this.right !== null) this.right.left = this;
				this.length += right.length;
				return true;
			}
			return false;
		}
		/**
		* Mark this Item as deleted.
		*
		* @param {Transaction} transaction
		*/
		delete(transaction) {
			if (!this.deleted) {
				const parent = this.parent;
				if (this.countable && this.parentSub === null) parent._length -= this.length;
				this.markDeleted();
				addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
				addChangedTypeToTransaction(transaction, parent, this.parentSub);
				this.content.delete(transaction);
			}
		}
		/**
		* @param {StructStore} store
		* @param {boolean} parentGCd
		*/
		gc(store, parentGCd) {
			if (!this.deleted) throw unexpectedCase();
			this.content.gc(store);
			if (parentGCd) replaceStruct(store, this, new GC(this.id, this.length));
			else this.content = new ContentDeleted(this.length);
		}
		/**
		* Transform the properties of this type to binary and write it to an
		* BinaryEncoder.
		*
		* This is called when this Item is sent to a remote peer.
		*
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
		* @param {number} offset
		*/
		write(encoder, offset) {
			const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
			const rightOrigin = this.rightOrigin;
			const parentSub = this.parentSub;
			const info = this.content.getRef() & 31 | (origin === null ? 0 : 128) | (rightOrigin === null ? 0 : 64) | (parentSub === null ? 0 : 32);
			encoder.writeInfo(info);
			if (origin !== null) encoder.writeLeftID(origin);
			if (rightOrigin !== null) encoder.writeRightID(rightOrigin);
			if (origin === null && rightOrigin === null) {
				const parent = this.parent;
				if (parent._item !== void 0) {
					const parentItem = parent._item;
					if (parentItem === null) {
						const ykey = findRootTypeKey(parent);
						encoder.writeParentInfo(true);
						encoder.writeString(ykey);
					} else {
						encoder.writeParentInfo(false);
						encoder.writeLeftID(parentItem.id);
					}
				} else if (parent.constructor === String) {
					encoder.writeParentInfo(true);
					encoder.writeString(parent);
				} else if (parent.constructor === ID) {
					encoder.writeParentInfo(false);
					encoder.writeLeftID(parent);
				} else unexpectedCase();
				if (parentSub !== null) encoder.writeString(parentSub);
			}
			this.content.write(encoder, offset);
		}
	};
	/**
	* @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
	* @param {number} info
	*/
	var readItemContent = (decoder, info) => contentRefs[info & 31](decoder);
	/**
	* A lookup map for reading Item content.
	*
	* @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractContent>}
	*/
	var contentRefs = [
		() => {
			unexpectedCase();
		},
		readContentDeleted,
		readContentJSON,
		readContentBinary,
		readContentString,
		readContentEmbed,
		readContentFormat,
		readContentType,
		readContentAny,
		readContentDoc,
		() => {
			unexpectedCase();
		}
	];
	var structSkipRefNumber = 10;
	/**
	* @private
	*/
	var Skip = class extends AbstractStruct {
		get deleted() {
			return true;
		}
		delete() {}
		/**
		* @param {Skip} right
		* @return {boolean}
		*/
		mergeWith(right) {
			if (this.constructor !== right.constructor) return false;
			this.length += right.length;
			return true;
		}
		/**
		* @param {Transaction} transaction
		* @param {number} offset
		*/
		integrate(transaction, offset) {
			unexpectedCase();
		}
		/**
		* @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
		* @param {number} offset
		*/
		write(encoder, offset) {
			encoder.writeInfo(structSkipRefNumber);
			writeVarUint(encoder.restEncoder, this.length - offset);
		}
		/**
		* @param {Transaction} transaction
		* @param {StructStore} store
		* @return {null | number}
		*/
		getMissing(transaction, store) {
			return null;
		}
	};
	/** eslint-env browser */
	var glo = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
	var importIdentifier = "__ $YJS$ __";
	if (glo[importIdentifier] === true)
 /**
	* Dear reader of this message. Please take this seriously.
	*
	* If you see this message, make sure that you only import one version of Yjs. In many cases,
	* your package manager installs two versions of Yjs that are used by different packages within your project.
	* Another reason for this message is that some parts of your project use the commonjs version of Yjs
	* and others use the EcmaScript version of Yjs.
	*
	* This often leads to issues that are hard to debug. We often need to perform constructor checks,
	* e.g. `struct instanceof GC`. If you imported different versions of Yjs, it is impossible for us to
	* do the constructor checks anymore - which might break the CRDT algorithm.
	*
	* https://github.com/yjs/yjs/issues/438
	*/
	console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
	glo[importIdentifier] = true;
	({}).hasOwnProperty;
	var docRegistry = new FinalizationRegistry(({ cache, key }) => {
		delete cache[key];
	});
	function getDocCache(db) {
		var _a;
		var _b;
		return (_a = (_b = db._novip)["_docCache"]) !== null && _a !== void 0 ? _a : _b["_docCache"] = {
			cache: {},
			get size() {
				return Object.keys(this.cache).length;
			},
			find(table, primaryKey, ydocProp) {
				const cacheKey = getYDocCacheKey(table, primaryKey, ydocProp);
				const docRef = this.cache[cacheKey];
				return docRef ? docRef.deref() : void 0;
			},
			add(doc) {
				var _a;
				const { parentTable, parentId, parentProp } = doc.meta;
				if (!parentTable || !parentProp || parentId == null) throw new Error(`Missing Dexie-related metadata in Y.Doc`);
				const cacheKey = getYDocCacheKey(parentTable, parentId, parentProp);
				const existingDoc = (_a = this.cache[cacheKey]) === null || _a === void 0 ? void 0 : _a.deref();
				if (existingDoc) docRegistry.unregister(existingDoc);
				this.cache[cacheKey] = new WeakRef(doc);
				docRegistry.register(doc, {
					cache: this.cache,
					key: cacheKey
				}, doc);
			},
			delete(doc) {
				docRegistry.unregister(doc);
				const cacheKey = getYDocCacheKey(doc.meta.parentTable, doc.meta.parentId, doc.meta.parentProp);
				const cacheEntry = this.cache[cacheKey];
				if ((cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.deref()) === doc) delete this.cache[cacheKey];
			}
		};
	}
	var destroyedDocs = /* @__PURE__ */ new WeakSet();
	function throwIfDestroyed(doc) {
		if (destroyedDocs.has(doc)) throw new Error(`Y.Doc ${doc.meta.parentId} has been destroyed`);
	}
	function getYDocCacheKey(table, primaryKey, ydocProp) {
		return `${table}[${primaryKey}].${ydocProp}`;
	}
	function getOrCreateDocument(db, docCache, tableName, prop, updatesTable, id) {
		let doc = docCache.find(tableName, id, prop);
		if (doc) return doc;
		doc = new Doc({ meta: {
			db,
			updatesTable,
			parentProp: prop,
			parentTable: tableName,
			parentId: id
		} });
		docCache.add(doc);
		doc.on("destroy", () => {
			destroyedDocs.add(doc);
			docCache.delete(doc);
		});
		return doc;
	}
	var { getByKeyPath } = Dexie;
	var currentUpdateRow = null;
	function setCurrentUpdateRow(row) {
		currentUpdateRow = row;
	}
	function observeYDocUpdates(provider, doc, db, parentTableName, updatesTableName, parentId) {
		let lastUpdateId = 0;
		let initial = true;
		const subscription = liveQuery(() => {
			throwIfDestroyed(doc);
			const updatesTable = db.table(updatesTableName);
			return Promise.all([(lastUpdateId > 0 ? updatesTable.where("i").between(lastUpdateId, Infinity, false).toArray().then((updates) => updates.filter((update) => cmp(update.k, parentId) === 0)) : updatesTable.where({ k: parentId }).toArray()).then((updates) => {
				return updates;
			}), db.table(parentTableName).where(":id").equals(parentId).toArray()]);
		}).subscribe(([updates, parentRow]) => {
			if (updates.length > 0) lastUpdateId = updates[updates.length - 1].i;
			if (parentRow.length === 0) {
				doc.destroy();
				return;
			}
			throwIfDestroyed(doc);
			if (updates.length > 0) transact(doc, () => {
				updates.forEach((update) => {
					try {
						setCurrentUpdateRow(update);
						applyUpdateV2(doc, update.u);
					} finally {
						setCurrentUpdateRow(null);
					}
				});
			}, provider, false);
			if (initial) {
				initial = false;
				doc.emit("load", [doc]);
			}
		}, (error) => {
			provider.on("error").fire(error);
		});
		const onUpdate = (update, origin) => {
			if (origin === provider) return;
			db.table(updatesTableName).add({
				k: parentId,
				u: update,
				f: 1
			}).then((i) => {
				if (i === lastUpdateId - 1) ++lastUpdateId;
			}).catch((error) => {
				provider.on("error").fire(error);
			});
		};
		const stopObserving = () => {
			subscription.unsubscribe();
			doc.off("updateV2", onUpdate);
			doc.off("destroy", stopObserving);
		};
		doc.on("updateV2", onUpdate);
		doc.on("destroy", stopObserving);
		return stopObserving;
	}
	function nop() {}
	function promisableChain(f1, f2) {
		if (f1 === nop) return f2;
		return function() {
			var res = f1.apply(this, arguments);
			if (res && typeof res.then === "function") {
				var thiz = this, i = arguments.length, args = new Array(i);
				while (i--) args[i] = arguments[i];
				return res.then(function() {
					return f2.apply(thiz, args);
				});
			}
			return f2.apply(this, arguments);
		};
	}
	function nonStoppableEventChain(f1, f2) {
		if (f1 === nop) return f2;
		return function() {
			f1.apply(this, arguments);
			f2.apply(this, arguments);
		};
	}
	var wm = /* @__PURE__ */ new WeakMap();
	function createEvents() {
		return Dexie.Events(null, "load", "sync", "error");
	}
	var DexieYProvider = class DexieYProvider {
		static getOrCreateDocument(db, table, prop, id) {
			var _a, _b;
			const docCache = getDocCache(db);
			const updatesTable = (_b = (_a = db.table(table).schema.yProps) === null || _a === void 0 ? void 0 : _a.find((p) => p.prop === prop)) === null || _b === void 0 ? void 0 : _b.updatesTable;
			if (!updatesTable) throw new Error(`Updates table for ${table}.${prop} not found`);
			return getOrCreateDocument(db, docCache, table, prop, updatesTable, id);
		}
		static load(doc, options) {
			var _a;
			let p = wm.get(doc);
			if (p) {
				++p.refCount;
				if ((options === null || options === void 0 ? void 0 : options.gracePeriod) != null && p.graceTimeout < options.gracePeriod) p.graceTimeout = options.gracePeriod;
				if (p.graceTimer) {
					clearTimeout(p.graceTimer);
					p.graceTimer = null;
				}
			} else {
				p = new DexieYProvider(doc);
				p.graceTimeout = (_a = options === null || options === void 0 ? void 0 : options.gracePeriod) !== null && _a !== void 0 ? _a : -1;
				wm.set(doc, p);
			}
			return p;
		}
		static release(doc) {
			if (!doc || destroyedDocs.has(doc)) return;
			const p = wm.get(doc);
			if (p) {
				if (--p.refCount <= 0) {
					if (p.graceTimeout < 0) p._release();
					else if (!p.graceTimer) p.graceTimer = setTimeout(() => {
						p.graceTimer = null;
						if (p.refCount === 0) p._release();
					}, p.graceTimeout);
				}
			} else doc.destroy();
		}
		_release() {
			if (!this.doc) return;
			Promise.resolve(DexieYProvider.on("beforeunload").fire(this)).finally(() => {
				var _a;
				if (this.refCount === 0) (_a = this.doc) === null || _a === void 0 || _a.destroy();
			});
		}
		static for(doc) {
			return wm.get(doc);
		}
		static get currentUpdateRow() {
			return currentUpdateRow;
		}
		get whenLoaded() {
			if (!this._whenLoaded) this._whenLoaded = new Promise((resolve, reject) => {
				if (!this.doc) {
					reject(/* @__PURE__ */ new Error("No Y.Doc associated with this provider"));
					return;
				}
				if (this.doc.isLoaded) resolve();
				else if (this._error) reject(this._error);
				else if (destroyedDocs.has(this.doc)) reject(new Dexie.AbortError("Document was destroyed before loaded"));
				else {
					this.on("load", resolve);
					this.on("error", reject);
					this.doc.on("destroy", () => reject(new Dexie.AbortError("Document was destroyed before loaded")));
				}
			});
			return this._whenLoaded;
		}
		get whenSynced() {
			if (!this._whenSynced) this._whenSynced = new Promise((resolve, reject) => {
				if (!this.doc) {
					reject(/* @__PURE__ */ new Error("No Y.Doc associated with this provider"));
					return;
				}
				if (this.doc.isSynced) resolve();
				else if (this._error) reject(this._error);
				else if (destroyedDocs.has(this.doc)) reject(new Dexie.AbortError("Document was destroyed before synced"));
				else {
					this.on("sync", resolve);
					this.on("error", reject);
					this.doc.on("destroy", () => reject(new Dexie.AbortError("Document was destroyed before synced")));
				}
			});
			return this._whenSynced;
		}
		constructor(doc) {
			this.refCount = 1;
			this.cleanupHandlers = [];
			this.graceTimeout = -1;
			this.doc = null;
			this.destroyed = false;
			this.on = createEvents();
			this.doc = doc;
			this.off = (name, f) => {
				var _a;
				return (_a = this.on[name]) === null || _a === void 0 ? void 0 : _a.unsubscribe(f);
			};
			if ("dispose" in Symbol) this[Symbol.dispose] = () => DexieYProvider.release(doc);
			doc.on("load", () => this.on("load").fire());
			doc.on("sync", (sync) => sync !== false && this.on("sync").fire());
			doc.on("destroy", this.destroy.bind(this));
			this.on("error", (error) => {
				this._error = error;
			});
			const { db, parentTable, parentId, updatesTable } = doc.meta || {};
			if (!db || !parentTable || !updatesTable) throw new Error(`Missing Dexie-related metadata in Y.Doc. Documents need to be obtained through Y.Doc properties from dexie queries.`);
			if (!db.table(parentTable) || !db.table(updatesTable)) throw new Error(`Table ${parentTable} or ${updatesTable} not found in db`);
			throwIfDestroyed(doc);
			this.stopObserving = observeYDocUpdates(this, doc, db, parentTable, updatesTable, parentId);
			DexieYProvider.on("new").fire(this);
		}
		destroy() {
			var _a, _b, _c;
			console.debug(`Y.Doc ${(_b = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.parentId} was destroyed`);
			wm.delete(this.doc);
			this.doc = null;
			this.destroyed = true;
			this.refCount = 0;
			(_c = this.stopObserving) === null || _c === void 0 || _c.call(this);
			this.on = createEvents();
			this.cleanupHandlers.forEach((cleanup) => cleanup());
		}
		addCleanupHandler(cleanupHandler) {
			this.cleanupHandlers.push(typeof cleanupHandler === "function" ? cleanupHandler : () => cleanupHandler.unsubscribe());
		}
	};
	DexieYProvider.on = Dexie.Events(null, {
		new: [nonStoppableEventChain],
		beforeunload: [promisableChain]
	});
	DexieYProvider.getDocCache = getDocCache;
	if (Dexie["DexieYProvider"]) DexieYProvider = Dexie["DexieYProvider"] || DexieYProvider;
	else Dexie["DexieYProvider"] = DexieYProvider;
	//#endregion
	//#region node_modules/y-protocols/awareness.js
	/**
	* @module awareness-protocol
	*/
	var outdatedTimeout = 3e4;
	/**
	* @typedef {Object} MetaClientState
	* @property {number} MetaClientState.clock
	* @property {number} MetaClientState.lastUpdated unix timestamp
	*/
	/**
	* The Awareness class implements a simple shared state protocol that can be used for non-persistent data like awareness information
	* (cursor, username, status, ..). Each client can update its own local state and listen to state changes of
	* remote clients. Every client may set a state of a remote peer to `null` to mark the client as offline.
	*
	* Each client is identified by a unique client id (something we borrow from `doc.clientID`). A client can override
	* its own state by propagating a message with an increasing timestamp (`clock`). If such a message is received, it is
	* applied if the known state of that client is older than the new state (`clock < newClock`). If a client thinks that
	* a remote client is offline, it may propagate a message with
	* `{ clock: currentClientClock, state: null, client: remoteClient }`. If such a
	* message is received, and the known clock of that client equals the received clock, it will override the state with `null`.
	*
	* Before a client disconnects, it should propagate a `null` state with an updated clock.
	*
	* Awareness states must be updated every 30 seconds. Otherwise the Awareness instance will delete the client state.
	*
	* @extends {Observable<string>}
	*/
	var Awareness = class extends Observable {
		/**
		* @param {Y.Doc} doc
		*/
		constructor(doc) {
			super();
			this.doc = doc;
			/**
			* @type {number}
			*/
			this.clientID = doc.clientID;
			/**
			* Maps from client id to client state
			* @type {Map<number, Object<string, any>>}
			*/
			this.states = /* @__PURE__ */ new Map();
			/**
			* @type {Map<number, MetaClientState>}
			*/
			this.meta = /* @__PURE__ */ new Map();
			this._checkInterval = setInterval(() => {
				const now = getUnixTime();
				if (this.getLocalState() !== null && 15e3 <= now - this.meta.get(this.clientID).lastUpdated) this.setLocalState(this.getLocalState());
				/**
				* @type {Array<number>}
				*/
				const remove = [];
				this.meta.forEach((meta, clientid) => {
					if (clientid !== this.clientID && 3e4 <= now - meta.lastUpdated && this.states.has(clientid)) remove.push(clientid);
				});
				if (remove.length > 0) removeAwarenessStates(this, remove, "timeout");
			}, floor(outdatedTimeout / 10));
			doc.on("destroy", () => {
				this.destroy();
			});
			this.setLocalState({});
		}
		destroy() {
			this.emit("destroy", [this]);
			this.setLocalState(null);
			super.destroy();
			clearInterval(this._checkInterval);
		}
		/**
		* @return {Object<string,any>|null}
		*/
		getLocalState() {
			return this.states.get(this.clientID) || null;
		}
		/**
		* @param {Object<string,any>|null} state
		*/
		setLocalState(state) {
			const clientID = this.clientID;
			const currLocalMeta = this.meta.get(clientID);
			const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
			const prevState = this.states.get(clientID);
			if (state === null) this.states.delete(clientID);
			else this.states.set(clientID, state);
			this.meta.set(clientID, {
				clock,
				lastUpdated: getUnixTime()
			});
			const added = [];
			const updated = [];
			const filteredUpdated = [];
			const removed = [];
			if (state === null) removed.push(clientID);
			else if (prevState == null) {
				if (state != null) added.push(clientID);
			} else {
				updated.push(clientID);
				if (!equalityDeep(prevState, state)) filteredUpdated.push(clientID);
			}
			if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) this.emit("change", [{
				added,
				updated: filteredUpdated,
				removed
			}, "local"]);
			this.emit("update", [{
				added,
				updated,
				removed
			}, "local"]);
		}
		/**
		* @param {string} field
		* @param {any} value
		*/
		setLocalStateField(field, value) {
			const state = this.getLocalState();
			if (state !== null) this.setLocalState({
				...state,
				[field]: value
			});
		}
		/**
		* @return {Map<number,Object<string,any>>}
		*/
		getStates() {
			return this.states;
		}
	};
	/**
	* Mark (remote) clients as inactive and remove them from the list of active peers.
	* This change will be propagated to remote clients.
	*
	* @param {Awareness} awareness
	* @param {Array<number>} clients
	* @param {any} origin
	*/
	var removeAwarenessStates = (awareness, clients, origin) => {
		const removed = [];
		for (let i = 0; i < clients.length; i++) {
			const clientID = clients[i];
			if (awareness.states.has(clientID)) {
				awareness.states.delete(clientID);
				if (clientID === awareness.clientID) {
					const curMeta = awareness.meta.get(clientID);
					awareness.meta.set(clientID, {
						clock: curMeta.clock + 1,
						lastUpdated: getUnixTime()
					});
				}
				removed.push(clientID);
			}
		}
		if (removed.length > 0) {
			awareness.emit("change", [{
				added: [],
				updated: [],
				removed
			}, origin]);
			awareness.emit("update", [{
				added: [],
				updated: [],
				removed
			}, origin]);
		}
	};
	/**
	* @param {Awareness} awareness
	* @param {Array<number>} clients
	* @return {Uint8Array}
	*/
	var encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
		const len = clients.length;
		const encoder = createEncoder();
		writeVarUint(encoder, len);
		for (let i = 0; i < len; i++) {
			const clientID = clients[i];
			const state = states.get(clientID) || null;
			const clock = awareness.meta.get(clientID).clock;
			writeVarUint(encoder, clientID);
			writeVarUint(encoder, clock);
			writeVarString(encoder, JSON.stringify(state));
		}
		return toUint8Array(encoder);
	};
	/**
	* @param {Awareness} awareness
	* @param {Uint8Array} update
	* @param {any} origin This will be added to the emitted change event
	*/
	var applyAwarenessUpdate = (awareness, update, origin) => {
		const decoder = createDecoder(update);
		const timestamp = getUnixTime();
		const added = [];
		const updated = [];
		const filteredUpdated = [];
		const removed = [];
		const len = readVarUint(decoder);
		for (let i = 0; i < len; i++) {
			const clientID = readVarUint(decoder);
			let clock = readVarUint(decoder);
			const state = JSON.parse(readVarString(decoder));
			const clientMeta = awareness.meta.get(clientID);
			const prevState = awareness.states.get(clientID);
			const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
			if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
				if (state === null) {
					if (clientID === awareness.clientID && awareness.getLocalState() != null) clock++;
					else awareness.states.delete(clientID);
				} else awareness.states.set(clientID, state);
				awareness.meta.set(clientID, {
					clock,
					lastUpdated: timestamp
				});
				if (clientMeta === void 0 && state !== null) added.push(clientID);
				else if (clientMeta !== void 0 && state === null) removed.push(clientID);
				else if (state !== null) {
					if (!equalityDeep(state, prevState)) filteredUpdated.push(clientID);
					updated.push(clientID);
				}
			}
		}
		if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) awareness.emit("change", [{
			added,
			updated: filteredUpdated,
			removed
		}, origin]);
		if (added.length > 0 || updated.length > 0 || removed.length > 0) awareness.emit("update", [{
			added,
			updated,
			removed
		}, origin]);
	};
	//#endregion
	//#region node_modules/dexie-cloud-addon/dist/modern/service-worker.min.js
	function Z(e, t, n, r) {
		return new (n || (n = Promise))(function(o, i) {
			function s(e) {
				try {
					c(r.next(e));
				} catch (e) {
					i(e);
				}
			}
			function a(e) {
				try {
					c(r.throw(e));
				} catch (e) {
					i(e);
				}
			}
			function c(e) {
				var t;
				e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
					e(t);
				})).then(s, a);
			}
			c((r = r.apply(e, t || [])).next());
		});
	}
	function X(e) {
		var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
		if (n) return n.call(e);
		if (e && "number" == typeof e.length) return { next: function() {
			return e && r >= e.length && (e = void 0), {
				value: e && e[r++],
				done: !e
			};
		} };
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function ee(e) {
		return this instanceof ee ? (this.v = e, this) : new ee(e);
	}
	function te(e, t, n) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var r, o = n.apply(e, t || []), i = [];
		return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, l);
			};
		}), r[Symbol.asyncIterator] = function() {
			return this;
		}, r;
		function s(e, t) {
			o[e] && (r[e] = function(t) {
				return new Promise(function(n, r) {
					i.push([
						e,
						t,
						n,
						r
					]) > 1 || a(e, t);
				});
			}, t && (r[e] = t(r[e])));
		}
		function a(e, t) {
			try {
				(function(e) {
					e.value instanceof ee ? Promise.resolve(e.value.v).then(c, l) : u(i[0][2], e);
				})(o[e](t));
			} catch (e) {
				u(i[0][3], e);
			}
		}
		function c(e) {
			a("next", e);
		}
		function l(e) {
			a("throw", e);
		}
		function u(e, t) {
			e(t), i.shift(), i.length && a(i[0][0], i[0][1]);
		}
	}
	function ne(e) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var t, n = e[Symbol.asyncIterator];
		return n ? n.call(e) : (e = X(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function r(n) {
			t[n] = e[n] && function(t) {
				return new Promise(function(r, o) {
					(function(e, t, n, r) {
						Promise.resolve(r).then(function(t) {
							e({
								value: t,
								done: n
							});
						}, t);
					})(r, o, (t = e[n](t)).done, t.value);
				});
			};
		}
	}
	var re = {
		userId: "unauthorized",
		name: "Unauthorized",
		claims: { sub: "unauthorized" },
		lastLogin: /* @__PURE__ */ new Date(0)
	};
	try {
		Object.freeze(re), Object.freeze(re.claims);
	} catch (he) {}
	var oe = {};
	var ie = "undefined" != typeof self && self.document && "undefined" != typeof navigator && navigator.serviceWorker;
	ie && ie.ready.then((e) => oe.registration = e), "undefined" != typeof self && "clients" in self && !self.document && addEventListener("message", (e) => {
		var t, n;
		null !== (n = null === (t = e.data) || void 0 === t ? void 0 : t.type) && void 0 !== n && n.startsWith("sw-broadcast-") && [...self.clients.matchAll({ includeUncontrolled: !0 })].forEach((t) => {
			var n;
			return t.id !== (null === (n = e.source) || void 0 === n ? void 0 : n.id) && t.postMessage(e.data);
		});
	});
	var se = class {
		constructor(e) {
			this.name = e;
		}
		subscribe(e) {
			if (!ie) return () => {};
			const t = (t) => {
				var n;
				(null === (n = t.data) || void 0 === n ? void 0 : n.type) === `sw-broadcast-${this.name}` && e(t.data.message);
			};
			return ie.addEventListener("message", t), () => ie.removeEventListener("message", t);
		}
		postMessage(e) {
			var t;
			"object" == typeof self.clients ? [...self.clients.matchAll({ includeUncontrolled: !0 })].forEach((t) => t.postMessage({
				type: `sw-broadcast-${this.name}`,
				message: e
			})) : oe.registration && (null === (t = oe.registration.active) || void 0 === t || t.postMessage({
				type: `sw-broadcast-${this.name}`,
				message: e
			}));
		}
	};
	var ae = globalThis["lbc-events"] || (globalThis["lbc-events"] = /* @__PURE__ */ new Map());
	var ce = class extends Observable$1 {
		constructor(e) {
			const t = "undefined" == typeof BroadcastChannel ? new se(e) : new BroadcastChannel(e);
			super((n) => {
				function r(e) {
					n.next(e.detail);
				}
				function o(e) {
					n.next(e.data);
				}
				let i;
				(function(e, t) {
					ae.has(e) ? ae.get(e).push(t) : ae.set(e, [t]);
				})(`lbc-${e}`, r);
				try {
					t instanceof se ? i = t.subscribe((e) => n.next(e)) : t.addEventListener("message", o);
				} catch (e) {}
				return () => {
					(function(e, t) {
						const n = ae.get(e);
						if (n) {
							const e = n.indexOf(t);
							-1 !== e && n.splice(e, 1);
						}
					})(`lbc-${e}`, r), t instanceof se ? i() : t.removeEventListener("message", o);
				};
			}), this.name = e, this.bc = t;
		}
		next(e) {
			this.bc.postMessage(e);
			(function(e) {
				const t = ae.get(e.type);
				t && t.forEach((t) => {
					try {
						t(e);
					} catch (e) {}
				});
			})(new CustomEvent(`lbc-${this.name}`, { detail: e }));
		}
	};
	var le = !1;
	function ue(e, t) {
		return Z(this, void 0, void 0, function* () {
			try {
				const n = yield navigator.serviceWorker.ready;
				if ("push" === t && n.sync && (yield n.sync.register(`dexie-cloud:${e.name}`)), !n.active) throw new Error("Failed to trigger sync - there's no active service worker");
				n.active.postMessage({
					type: "dexie-cloud-sync",
					dbName: e.name,
					purpose: t
				});
				return;
			} catch (e) {
				le || (le = !0);
			}
		});
	}
	function de(e, t) {
		e.cloud.usingServiceWorker ? ue(e, t) : e.localSyncEvent.next({ purpose: t });
	}
	var { toString: fe } = {};
	var pe = { replace: function(e) {
		const t = Object.keys(e);
		let n = null;
		for (let e = 0, r = t.length; e < r; ++e) "$" === t[e][0] && (n = n || [], n.push(t[e]));
		if (!n) return e;
		const r = { ...e };
		for (const e of n) delete r[e];
		for (const t of n) r["$" + t] = e[t];
		return r;
	} };
	var ye = class {
		constructor(e, t) {
			this.buf = e, this.type = t;
		}
	};
	var he;
	var ve = Symbol.for("TSONRef");
	var me = class me {
		constructor(e, t, n, r) {
			this.type = e, this.ref = t, this.size = n, this.contentType = r, this[he] = !0, Object.freeze(this);
		}
		async resolve() {
			if (!me.resolver) throw new Error("TSONRef.resolver not configured. Set TSONRef.resolver to a function that fetches blobs.");
			const e = await me.resolver(this);
			return this.reconstruct(e);
		}
		reconstruct(e) {
			const t = (t, n) => {
				if (e.byteLength % t !== 0) throw new RangeError(`Buffer length ${e.byteLength} is not aligned to ${t} bytes for ${n}`);
			};
			switch (this.type) {
				case "ArrayBuffer":
				default: return e;
				case "Uint8Array": return new Uint8Array(e);
				case "Blob": return new Blob([e], { type: this.contentType });
				case "Int8Array": return new Int8Array(e);
				case "Uint8ClampedArray": return new Uint8ClampedArray(e);
				case "Int16Array": return t(2, "Int16Array"), new Int16Array(e);
				case "Uint16Array": return t(2, "Uint16Array"), new Uint16Array(e);
				case "Int32Array": return t(4, "Int32Array"), new Int32Array(e);
				case "Uint32Array": return t(4, "Uint32Array"), new Uint32Array(e);
				case "Float32Array": return t(4, "Float32Array"), new Float32Array(e);
				case "Float64Array": return t(8, "Float64Array"), new Float64Array(e);
				case "BigInt64Array": return t(8, "BigInt64Array"), new BigInt64Array(e);
				case "BigUint64Array": return t(8, "BigUint64Array"), new BigUint64Array(e);
			}
		}
		static isTSONRef(e) {
			return null !== e && "object" == typeof e && ve in e && !0 === e[ve];
		}
		static isTSONRefData(e) {
			return null !== e && "object" == typeof e && "$ref" in e && "$t" in e && "$size" in e;
		}
		static fromData(e) {
			return new me(e.$t, e.$ref, e.$size, e.$ct);
		}
		toJSON() {
			const e = {
				$t: this.type,
				$ref: this.ref,
				$size: this.size
			};
			return this.contentType && (e.$ct = this.contentType), e;
		}
	};
	function be(e) {
		const t = new XMLHttpRequest();
		t.overrideMimeType("text/plain; charset=x-user-defined");
		const n = URL.createObjectURL(e);
		try {
			if (t.open("GET", n, !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad Blob access: " + t.status);
			return t.responseText;
		} finally {
			URL.revokeObjectURL(n);
		}
	}
	he = ve, me.TYPE_SYMBOL = ve, me.resolver = null;
	var ge = { number: {
		replace: (e) => {
			switch (!0) {
				case isNaN(e): return {
					$t: "number",
					v: "NaN"
				};
				case e === 1 / 0: return {
					$t: "number",
					v: "Infinity"
				};
				case e === -1 / 0: return {
					$t: "number",
					v: "-Infinity"
				};
				default: return e;
			}
		},
		revive: ({ v: e }) => Number(e)
	} };
	var _e = { Date: {
		replace: (e) => ({
			$t: "Date",
			v: isNaN(e.getTime()) ? "NaN" : e.toISOString()
		}),
		revive: ({ v: e }) => new Date("NaN" === e ? NaN : Date.parse(e))
	} };
	var we = { Set: {
		replace: (e) => ({
			$t: "Set",
			v: Array.from(e)
		}),
		revive: ({ v: e }) => new Set(e)
	} };
	var ke = { Map: {
		replace: (e) => ({
			$t: "Map",
			v: Array.from(e.entries())
		}),
		revive: ({ v: e }) => new Map(e)
	} };
	var Se = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0;
	var xe = [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array",
		"DataView",
		"BigInt64Array",
		"BigUint64Array"
	].reduce((e, t) => ({
		...e,
		[t]: {
			replace: (e, n, r) => {
				const o = e.buffer, i = 0 === e.byteOffset && e.byteLength === o.byteLength ? o : o.slice(e.byteOffset, e.byteOffset + e.byteLength);
				return {
					$t: t,
					v: r.ArrayBuffer.replace(i, n, r).v
				};
			},
			revive: ({ v: e }, n, r) => {
				const o = Se[t];
				return o && new o(r.ArrayBuffer.revive({ v: e }, n, r));
			}
		}
	}), {});
	var Oe = "fromBase64" in Uint8Array;
	var Ie = "toBase64" in Uint8Array.prototype;
	var Ae = "undefined" != typeof Buffer ? (e) => Buffer.from(e, "base64") : Oe ? (e) => Uint8Array.fromBase64(e) : (e) => {
		const t = atob(e), n = t.length, r = new Uint8Array(n);
		for (var o = 0; o < n; o++) r[o] = t.charCodeAt(o);
		return r;
	};
	var je = "undefined" != typeof Buffer ? (e) => ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64") : Buffer.from(e).toString("base64") : Ie ? (e) => (ArrayBuffer.isView(e) ? e : new Uint8Array(e)).toBase64() : (e) => {
		const t = ArrayBuffer.isView(e) ? e : new Uint8Array(e), n = [];
		for (let e = 0, r = t.length; e < r; e += 4096) {
			const r = t.subarray(e, e + 4096);
			n.push(String.fromCharCode.apply(null, Array.from(r)));
		}
		return btoa(n.join(""));
	};
	function Ce(e) {
		return function(e) {
			for (var t = "", n = 0, r = e.length; n < r; n++) t += Pe[e[n]];
			return t;
		}(je(e));
	}
	function Ee(e) {
		return Ae(function(e) {
			if ("string" != typeof e) throw new Error("invalid decoder input: " + e);
			for (var t = "", n = 0, r = e.length; n < r; n++) t += Te[e[n]];
			return t;
		}(e));
	}
	var Te = {
		"-": "=",
		0: "A",
		1: "B",
		2: "C",
		3: "D",
		4: "E",
		5: "F",
		6: "G",
		7: "H",
		8: "I",
		9: "J",
		A: "K",
		B: "L",
		C: "M",
		D: "N",
		E: "O",
		F: "P",
		G: "Q",
		H: "R",
		I: "S",
		J: "T",
		K: "U",
		L: "V",
		M: "W",
		N: "X",
		O: "Y",
		P: "Z",
		Q: "a",
		R: "b",
		S: "c",
		T: "d",
		U: "e",
		V: "f",
		W: "g",
		X: "h",
		Y: "i",
		Z: "j",
		_: "k",
		a: "l",
		b: "m",
		c: "n",
		d: "o",
		e: "p",
		f: "q",
		g: "r",
		h: "s",
		i: "t",
		j: "u",
		k: "v",
		l: "w",
		m: "x",
		n: "y",
		o: "z",
		p: "0",
		q: "1",
		r: "2",
		s: "3",
		t: "4",
		u: "5",
		v: "6",
		w: "7",
		x: "8",
		y: "9",
		z: "+",
		"|": "/"
	};
	var Pe = {};
	for (const e of Object.keys(Te)) Pe[Te[e]] = e;
	var Ue = { ArrayBuffer: {
		replace: (e) => ({
			$t: "ArrayBuffer",
			v: Ce(e)
		}),
		revive: ({ v: e }) => {
			const t = Ee(e);
			return t.buffer.byteLength === t.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
		}
	} };
	function $e(e) {
		const t = new Uint8Array(e.length);
		for (let n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
		return t.buffer;
	}
	var Re = { Blob: {
		test: (e, t) => "Blob" === t || e instanceof ye,
		replace: (e) => ({
			$t: "Blob",
			v: je(e instanceof ye ? e.buf : $e(be(e))),
			type: e.type
		}),
		revive: ({ type: e, v: t }) => {
			const n = Ae(t), r = n.buffer.byteLength === n.byteLength ? n.buffer : n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength);
			return "undefined" != typeof Blob ? new Blob([new Uint8Array(r)], { type: e }) : new ye(r, e);
		}
	} };
	var Le = { File: {
		test: (e, t) => "File" === t,
		replace: (e) => ({
			$t: "File",
			v: je($e(be(e))),
			type: e.type,
			name: e.name,
			lastModified: new Date(e.lastModified).toISOString()
		}),
		revive: ({ type: e, v: t, name: n, lastModified: r }) => {
			const o = Ae(t), i = o.buffer.byteLength === o.byteLength ? o.buffer : o.buffer.slice(o.byteOffset, o.byteOffset + o.byteLength);
			return new File([new Uint8Array(i)], n, {
				type: e,
				lastModified: new Date(r).getTime()
			});
		}
	} };
	var Be = { undefined: {
		replace: () => ({ $t: "undefined" }),
		revive: () => {}
	} };
	var De = "undefined" != typeof crypto ? crypto.getRandomValues.bind(crypto) : (e) => {
		for (let t = 0; t < e.length; ++t) e[t] = Math.floor(256 * Math.random());
	};
	var Ne = 0;
	var Fe = {}.hasOwnProperty;
	function Me(e, t, n) {
		if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e))) if ("string" != typeof t && "length" in t) {
			(function(e) {
				if (!e) throw new Error("Assertion Failed");
			})("string" != typeof n && "length" in n);
			for (var r = 0, o = t.length; r < o; ++r) Me(e, t[r], n[r]);
		} else {
			var i = t.indexOf(".");
			if (-1 !== i) {
				var s = t.substr(0, i), a = t.substr(i + 1);
				if ("" === a) void 0 === n ? Array.isArray(e) ? isNaN(parseInt(s)) || e.splice(parseInt(s), 1) : delete e[s] : e[s] = n;
				else {
					var c = e[s];
					c && function(e, t) {
						return Fe.call(e, t);
					}(e, s) || (c = e[s] = {}), Me(c, a, n);
				}
			} else void 0 === n ? Array.isArray(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
		}
	}
	var We = "undefined" != typeof self && "undefined" != typeof crypto ? (e, t = crypto.getRandomValues.bind(crypto)) => {
		const n = new Uint8Array(e);
		return t(n), self.btoa(String.fromCharCode.apply(null, n));
	} : "undefined" != typeof Buffer ? (e, t = Ke) => {
		const n = Buffer.alloc(e);
		return t(n), n.toString("base64");
	} : () => {
		throw new Error("No implementation of randomString was found");
	};
	function Ke(e) {
		for (let t = 0; t < e.length; ++t) e[t] = Math.floor(256 * Math.random());
	}
	function ze(e) {
		return "string" == typeof e || !!(Array.isArray(e) && e.some((e) => ze(e)) && e.every(He));
	}
	function He(e) {
		return "string" == typeof e || "number" == typeof e || Array.isArray(e) && e.every(He);
	}
	function Ve(e, t, n) {
		const r = e[t] || (e[t] = {}), o = n.keys.map((e) => "string" == typeof e ? e : JSON.stringify(e));
		switch (n.type) {
			case "insert":
			case "upsert":
				o.forEach((e, t) => {
					r[e] = {
						type: "ups",
						val: n.values[t]
					};
				});
				break;
			case "update":
			case "modify":
				o.forEach((e, t) => {
					const o = "update" === n.type ? n.changeSpecs[t] : n.changeSpec, i = r[e];
					if (i) switch (i.type) {
						case "ups":
							for (const [e, t] of Object.entries(o)) Me(i.val, e, t);
							break;
						case "del": break;
						case "upd": Object.assign(i.mod, o);
					}
					else r[e] = {
						type: "upd",
						mod: o
					};
				});
				break;
			case "delete": o.forEach((e) => {
				r[e] = { type: "del" };
			});
		}
		return e;
	}
	function qe(e, t) {
		for (const { table: n, muts: r } of t) for (const t of r) Ve(e, n, t);
	}
	async function* Je(e) {
		let t = 0, n = /* @__PURE__ */ new Uint8Array(4), r = 0, o = [], i = 0;
		for await (const s of e) {
			const e = new DataView(s.buffer, s.byteOffset, s.byteLength);
			let a = 0;
			for (; a < s.byteLength;) switch (t) {
				case 0: if (a + 4 > s.byteLength) {
					for (const e of s.slice(a)) {
						if (4 === r) break;
						n[r++] = e, ++a;
					}
					if (r < 4) break;
				} else if (r > 0 && r < 4) for (const e of s.slice(a, a + 4 - r)) n[r++] = e, ++a;
				case 1: i = 4 === r ? new DataView(n.buffer, 0, 4).getUint32(0, !1) : e.getUint32(a, !1), r ? r = 0 : a += 4;
				case 2:
					if (a >= s.byteLength) {
						t = 2;
						break;
					}
					if (a + i > s.byteLength) o.push(s.slice(a)), i -= s.byteLength - a, t = 2, a = s.byteLength;
					else {
						if (o.length > 0) {
							const e = new Uint8Array(o.reduce((e, t) => e + t.byteLength, i));
							let t = 0;
							for (const n of o) e.set(n, t), t += n.byteLength;
							e.set(s.slice(a, a + i), t), o = [], yield e;
						} else yield s.slice(a, a + i);
						a += i, t = 0;
					}
			}
		}
	}
	function Ge(e) {
		return Z(this, arguments, void 0, function* ({ realms: e, inviteRealms: t }) {
			const n = JSON.stringify([...e.map((e) => ({
				realmId: e,
				accepted: !0
			})), ...t.map((e) => ({
				realmId: e,
				accepted: !1
			}))].sort((e, t) => e.realmId < t.realmId ? -1 : e.realmId > t.realmId ? 1 : 0)), r = new TextEncoder().encode(n);
			return je(yield crypto.subtle.digest("SHA-1", r));
		});
	}
	function Ye(e) {
		return Object.entries(e.cloud.schema || {}).filter(([, { markedForSync: e }]) => e).map(([t]) => e.tables.find(({ name: e }) => e === t)).filter((e) => !!e);
	}
	function Qe(e) {
		return `$${e}_mutations`;
	}
	function Ze(e) {
		var t;
		const n = null === (t = /^\$(.*)_mutations$/.exec(e)) || void 0 === t ? void 0 : t[1];
		if (!n) throw new Error(`Given mutationTable ${e} is not correct`);
		return n;
	}
	var Xe = [].concat;
	function et(e) {
		return Xe.apply([], e);
	}
	function tt(e, t) {
		return Z(this, arguments, void 0, function* (e, t, { since: n = {}, limit: r = 1 / 0 } = {}) {
			const i = et(yield Promise.all(e.map((e) => Z(this, void 0, void 0, function* () {
				const t = Ze(e.name), o = n[t];
				let i = o ? e.where("rev").above(o) : e;
				r < 1 / 0 && (i = i.limit(r));
				let s = yield i.toArray();
				s = function(e) {
					return e = e.map((e) => {
						if ("modify" === e.type && null === e.criteria.index) {
							const t = Object.assign(Object.assign({}, e), {
								criteria: void 0,
								changeSpec: void 0,
								type: "update",
								keys: e.keys,
								changeSpecs: [e.changeSpec]
							});
							return delete t.criteria, delete t.changeSpec, t;
						}
						return e;
					}), e;
				}(s), s = function(e) {
					const t = /* @__PURE__ */ new Map();
					for (const n of e) if ("update" === n.type) {
						if (1 !== n.keys.length || 1 !== n.changeSpecs.length) continue;
						const e = "" + n.keys[0], r = n.changeSpecs[0];
						if (Object.values(r).some((e) => "object" == typeof e && e && "@@propmod" in e)) continue;
						let o = t.get(e);
						o ? o.push({
							txid: n.txid,
							updateSpec: r
						}) : t.set(e, [{
							txid: n.txid,
							updateSpec: r
						}]);
					}
					return e = e.filter((e) => {
						if ("update" !== e.type) return !0;
						if (1 !== e.keys.length || 1 !== e.changeSpecs.length) return !0;
						const n = e.changeSpecs[0];
						if (Object.values(n).some((e) => "object" == typeof e && e && "@@propmod" in e)) return !0;
						const r = new Set(Object.keys(e.changeSpecs[0])), o = "" + e.keys[0], i = t.get(o);
						if (!i) return !0;
						for (let t = i.length - 1; t >= 0; --t) {
							const { txid: n, updateSpec: o } = i[t];
							if (n === e.txid) break;
							for (const e of Object.keys(o)) r.delete(e);
						}
						return 0 !== r.size;
					}), e;
				}(s);
				return s.map((e) => ({
					table: t,
					mut: e
				}));
			})))).sort((e, t) => e.mut.txid === t.mut.txid ? e.mut.opNo - t.mut.opNo : e.mut.ts - t.mut.ts), s = [];
			let a = null, c = null;
			for (const { table: e, mut: t } of i) a && a.table === e && c === t.txid ? a.muts.push(t) : (a = {
				table: e,
				muts: [t]
			}, c = t.txid, s.push(a));
			return s;
		});
	}
	function nt(e) {
		const t = new Uint8Array(e);
		if ("undefined" != typeof crypto) crypto.getRandomValues(t);
		else for (let n = 0; n < e; n++) t[n] = Math.floor(256 * Math.random());
		if ("undefined" != typeof Buffer && Buffer.from) return Buffer.from(t).toString("base64");
		if ("undefined" != typeof btoa) return btoa(String.fromCharCode.apply(null, t));
		throw new Error("No btoa or Buffer available");
	}
	var rt = class extends Error {
		constructor({ title: e, message: t, messageCode: n, messageParams: r }) {
			super(t), this.name = "TokenErrorResponseError", this.title = e, this.messageCode = n, this.messageParams = r;
		}
	};
	var ot = `data:image/svg+xml;base64,${btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#666666\" stroke-width=\"2\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"M22 6L12 13 2 6\"/></svg>")}`;
	function it(e) {
		return {
			name: "provider",
			value: e.name,
			displayName: `Continue with ${e.displayName}`,
			iconUrl: e.iconUrl,
			styleHint: e.type
		};
	}
	function st(t, n) {
		return new Promise((r, o) => {
			const i = Object.assign(Object.assign({
				submitLabel: "Submit",
				cancelLabel: "Cancel"
			}, n), {
				onSubmit: (e) => {
					t.next(void 0), r(e);
				},
				onCancel: () => {
					t.next(void 0), o(new Dexie.AbortError("User cancelled"));
				}
			});
			t.next(i);
		});
	}
	function at(e, t, ...n) {
		return st(e, {
			type: "message-alert",
			title: t,
			alerts: n,
			fields: {},
			submitLabel: "OK",
			cancelLabel: null
		});
	}
	function ct(e, t, n, r) {
		return Z(this, void 0, void 0, function* () {
			let o = n || "", i = !0;
			for (; !o || !/^[\w-+.]+@([\w-]+\.)+[\w-]{2,10}(\sas\s[\w-+.]+@([\w-]+\.)+[\w-]{2,10})?$/.test(o);) {
				const n = [];
				i && r && n.push(r), o && n.push({
					type: "error",
					messageCode: "INVALID_EMAIL",
					message: "Please enter a valid email address",
					messageParams: {}
				}), i = !1, o = (yield st(e, {
					type: "email",
					title: t,
					alerts: n,
					fields: { email: {
						type: "email",
						placeholder: "you@somedomain.com"
					} }
				})).email;
			}
			return o;
		});
	}
	function lt(e, t, n) {
		return Z(this, void 0, void 0, function* () {
			const r = [{
				type: "info",
				messageCode: "OTP_SENT",
				message: "A One-Time password has been sent to {email}",
				messageParams: { email: t }
			}];
			n && r.push(n);
			const { otp: o } = yield st(e, {
				type: "otp",
				title: "Enter OTP",
				alerts: r,
				fields: { otp: {
					type: "otp",
					label: "OTP",
					placeholder: "Paste OTP here"
				} }
			});
			return o;
		});
	}
	var ut = class extends Error {
		constructor(e) {
			super(`OAuth redirect initiated for provider: ${e}`), this.name = "OAuthRedirectError", this.provider = e;
		}
	};
	var dt = class extends Error {
		constructor(e) {
			super(e.message), this.code = e.code;
		}
		get name() {
			return "PolicyRejectionError";
		}
	};
	function ft(e) {
		return "object" == typeof e && null !== e && "string" == typeof e.code && "string" == typeof e.message;
	}
	var pt = 1e3;
	function yt(e) {
		return Z(this, void 0, void 0, function* () {
			var t, n, r;
			const o = yield e.getCurrentUser(), { accessToken: i, accessTokenExpiration: s, refreshToken: a, refreshTokenExpiration: c, claims: l } = o;
			if (!i) return null;
			if ((null !== (t = null == s ? void 0 : s.getTime()) && void 0 !== t ? t : 1 / 0) > Date.now() + 3e5 && "ok" === ((null === (n = o.license) || void 0 === n ? void 0 : n.status) || "ok")) return o;
			if (!a) throw new Error("Refresh token missing");
			if ((null !== (r = null == c ? void 0 : c.getTime()) && void 0 !== r ? r : 1 / 0) <= Date.now()) throw new Error("Refresh token has expired");
			const u = yield vt(e.cloud.options.databaseUrl, o);
			return yield e.table("$logins").update(l.sub, {
				accessToken: u.accessToken,
				accessTokenExpiration: u.accessTokenExpiration,
				claims: u.claims,
				license: u.license,
				data: u.data
			}), u;
		});
	}
	function ht(t, n, r, o, i) {
		return Z(this, void 0, void 0, function* () {
			return n.accessToken && n.accessTokenExpiration.getTime() > Date.now() ? n : n.refreshToken && (!n.refreshTokenExpiration || n.refreshTokenExpiration.getTime() > Date.now()) ? yield vt(t, n) : yield function(t, n, r, o) {
				return Z(this, void 0, void 0, function* () {
					if (!crypto.subtle) throw "undefined" != typeof location && "http:" === location.protocol ? /* @__PURE__ */ new Error("Dexie Cloud Addon needs to use WebCrypto, but your browser has disabled it due to being served from an insecure location. Please serve it from https or http://localhost:<port> (See https://stackoverflow.com/questions/46670556/how-to-enable-crypto-subtle-for-unsecure-origins-in-chrome/46671627#46671627)") : /* @__PURE__ */ new Error("This browser does not support WebCrypto.");
					const { privateKey: i, publicKey: s } = yield crypto.subtle.generateKey({
						name: "RSASSA-PKCS1-v1_5",
						modulusLength: 2048,
						publicExponent: new Uint8Array([
							1,
							0,
							1
						]),
						hash: { name: "SHA-256" }
					}, !1, ["sign", "verify"]);
					if (!i || !s) throw new Error("Could not generate RSA keypair");
					t.nonExportablePrivateKey = i;
					const a = function(e) {
						return function(e) {
							let t = "-----BEGIN PUBLIC KEY-----\n";
							for (; e.length > 0;) t += e.substring(0, 64) + "\n", e = e.substring(64);
							return t += "-----END PUBLIC KEY-----", t;
						}(je(e));
					}(yield crypto.subtle.exportKey("spki", s));
					t.publicKey = s;
					try {
						const e = yield n({
							public_key: a,
							hints: o
						});
						if ("error" === e.type) throw new rt(e);
						if ("tokens" !== e.type) throw new Error(`Unexpected response type from token endpoint: ${e.type}`);
						return t.accessToken = e.accessToken, t.accessTokenExpiration = new Date(e.accessTokenExpiration), t.refreshToken = e.refreshToken, e.refreshTokenExpiration && (t.refreshTokenExpiration = new Date(e.refreshTokenExpiration)), t.userId = e.claims.sub, t.email = e.claims.email, t.name = e.claims.name, t.claims = e.claims, t.license = {
							type: e.userType,
							status: e.claims.license || "ok"
						}, t.data = e.data, null != e.evalDaysLeft && (t.license.evalDaysLeft = e.evalDaysLeft), null != e.userValidUntil && (t.license.validUntil = new Date(e.userValidUntil)), e.alerts && e.alerts.length > 0 && (yield st(r, {
							type: "message-alert",
							title: "Authentication Alert",
							fields: {},
							alerts: e.alerts
						})), t;
					} catch (t) {
						if (t instanceof ut || "OAuthRedirectError" === (null == t ? void 0 : t.name)) throw t;
						if (t instanceof dt || "PolicyRejectionError" === (null == t ? void 0 : t.name)) throw t;
						if (t instanceof rt) throw yield at(r, t.title, {
							type: "error",
							messageCode: t.messageCode,
							message: t.message,
							messageParams: {}
						}), t;
						let n = "We're having a problem authenticating right now.";
						if (t instanceof TypeError) {
							if ("undefined" != typeof navigator && !navigator.onLine) n = "You seem to be offline. Please connect to the internet and try again.";
							else if ("undefined" == typeof location || !Dexie.debug && "localhost" !== location.hostname && "127.0.0.1" !== location.hostname) n = "Could not connect to server. Please verify the connection.", yield at(r, "Authentication Failed", {
								type: "error",
								messageCode: "GENERIC_ERROR",
								message: n,
								messageParams: {}
							}).catch(() => {});
							else {
								const e = `npx dexie-cloud whitelist ${location.origin}`;
								n = `Could not connect to server. Please verify that your origin '${location.origin}' is whitelisted using \`npx dexie-cloud whitelist\``, yield at(r, "Authentication Failed", {
									type: "error",
									messageCode: "GENERIC_ERROR",
									message: n,
									messageParams: {},
									copyText: e
								}).catch(() => {});
							}
						}
						throw t;
					}
				});
			}(n, r, o, i);
		});
	}
	function vt(e, t) {
		return Z(this, void 0, void 0, function* () {
			if (!t.refreshToken) throw new Error("Cannot refresh token - refresh token is missing.");
			if (!t.nonExportablePrivateKey) throw new Error("login.nonExportablePrivateKey is missing - cannot sign refresh token without a private key.");
			const n = Date.now(), r = "RSASSA-PKCS1-v1_5", o = new TextEncoder().encode(t.refreshToken + n), s = je(yield crypto.subtle.sign(r, t.nonExportablePrivateKey, o)), a = {
				grant_type: "refresh_token",
				refresh_token: t.refreshToken,
				scopes: ["ACCESS_DB"],
				signature: s,
				signing_algorithm: r,
				time_stamp: n
			}, c = yield fetch(`${e}/token`, {
				body: JSON.stringify(a),
				method: "post",
				headers: { "Content-Type": "application/json" },
				mode: "cors"
			});
			if (200 !== c.status) throw new Error(`RefreshToken: Status ${c.status} from ${e}/token`);
			const l = yield c.json();
			if ("error" === l.type) throw new rt(l);
			return t.accessToken = l.accessToken, t.accessTokenExpiration = l.accessTokenExpiration ? new Date(l.accessTokenExpiration) : void 0, t.claims = l.claims, t.license = {
				type: l.userType,
				status: l.claims.license || "ok"
			}, null != l.evalDaysLeft && (t.license.evalDaysLeft = l.evalDaysLeft), null != l.userValidUntil && (t.license.validUntil = new Date(l.userValidUntil)), l.data && (t.data = l.data), t;
		});
	}
	var mt = "function" == typeof BigInt && "bigint" == typeof BigInt(0);
	var bt = class {
		toString() {
			return this.v;
		}
		constructor(e) {
			this.v = e;
		}
	};
	var gt = mt ? {} : { bigint: {
		test: (e) => e instanceof bt,
		replace: (e) => Object.assign({ $t: "bigint" }, e),
		revive: ({ v: e }) => new bt(e)
	} };
	var wt = function(...e) {
		const t = e.reduce((e, t) => ({
			...e,
			...t
		}), e.reduce((e, t) => ({
			...t,
			...e
		}), {})), n = /* @__PURE__ */ new WeakMap();
		return {
			stringify(e, r, o) {
				return JSON.stringify(e, function(e) {
					const o = this[e], i = function(e) {
						const r = typeof e;
						switch (typeof e) {
							case "object":
							case "function": {
								if (null === e) return null;
								const r = Object.getPrototypeOf(e);
								if (!r) return pe;
								let i = n.get(r);
								if (void 0 !== i) return i;
								const s = (o = e, fe.call(o).slice(8, -1));
								return i = Object.entries(t).find(([t, n]) => n?.test?.(e, s) ?? t === s)?.[1], i || (i = Array.isArray(e) ? null : "function" == typeof e ? t.function || null : pe), n.set(r, i), i;
							}
							default: return t[r];
						}
						var o;
					}(o);
					return i ? i.replace(o, r, t) : o;
				}, o);
			},
			parse(e, n) {
				const r = [];
				return JSON.parse(e, function(e, o) {
					const i = o?.$t;
					if (i) {
						const e = t[i];
						o = e ? e.revive(o, n, t) : o;
					}
					let s = r[r.length - 1];
					if (s && s[0] === o) {
						o = { ...o };
						for (const e of s[1]) delete o[e];
						for (const [e, t] of Object.entries(s[2])) o[e] = t;
						r.pop();
					}
					if (void 0 === o || "$" === e[0] && "$t" !== e) {
						let t, n;
						s = r[r.length - 1], s && s[0] === this ? (t = s[1], n = s[2]) : r.push([
							this,
							t = [],
							n = {}
						]), "$" === e[0] && "$t" !== e ? (t.push(e), n[e.substr(1)] = o) : n[e] = void 0;
					}
					return o;
				});
			}
		};
	}(xe, Ue, Re, ge, _e, we, ke, Object.assign(Object.assign(Object.assign(Object.assign({}, Be), gt), Le), { PropModification: {
		test: (e) => e instanceof PropModification,
		replace: (e) => Object.assign({ $t: "PropModification" }, e["@@propmod"]),
		revive: (e) => {
			var { $t: n } = e;
			return new PropModification(function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
				}
				return n;
			}(e, ["$t"]));
		}
	} }));
	var kt = class extends Error {
		constructor(e, t) {
			super(t || `${e.status} ${e.statusText}`), this.httpStatus = e.status;
		}
		get name() {
			return "HttpError";
		}
	};
	function St(t, n, r) {
		const o = [];
		for (let i of r) {
			const { table: r, muts: s } = i, a = t.tables.find((e) => e.name === r);
			if (!a) throw new Error(`Internal error: table ${r} not found in DBCore schema`);
			const { primaryKey: c } = a;
			let l = i;
			s.forEach((t, r) => {
				const o = !c.outbound && ("upsert" === t.type || "insert" === t.type);
				t.keys.forEach((t, s) => {
					if (Array.isArray(t)) {
						l === i && (l = xt(i, o));
						const e = l.muts[r], n = JSON.stringify(t);
						e.keys[s] = n;
					} else if ("#" === t[0]) {
						l === i && (l = xt(i, o));
						const a = l.muts[r];
						if (!n.isLoggedIn) throw new Error("Internal error: Cannot sync private IDs before authenticated");
						const u = `${t}:${n.userId}`;
						a.keys[s] = u, o && Dexie.setByKeyPath(a.values[s], c.keyPath, u);
					}
				});
			}), o.push(l);
		}
		return o;
	}
	function xt(e, t) {
		return Object.assign(Object.assign({}, e), { muts: t ? e.muts.map((e) => "insert" !== e.type && "upsert" !== e.type || !e.values ? Object.assign(Object.assign({}, e), { keys: e.keys.slice() }) : Object.assign(Object.assign({}, e), {
			keys: e.keys.slice(),
			values: e.values.slice()
		})) : e.muts.map((e) => Object.assign(Object.assign({}, e), { keys: e.keys.slice() })) });
	}
	var Ot = /* @__PURE__ */ new WeakMap();
	function It(e) {
		return Z(this, void 0, void 0, function* () {
			var t, n;
			const r = (null !== (n = null === (t = Ot.get(e)) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0) - Date.now();
			r > 0 && (yield new Promise((e) => setTimeout(e, r)));
		});
	}
	function At(e, t, n, r, o, i, s, a, c) {
		return Z(this, void 0, void 0, function* () {
			const l = {
				Accept: "application/json",
				"Content-Type": "application/tson"
			}, u = yield yt(o), d = null == u ? void 0 : u.accessToken;
			d && (l.Authorization = `Bearer ${d}`);
			const f = {
				v: 3,
				dbID: null == n ? void 0 : n.remoteDbId,
				clientIdentity: a,
				schema: s || {},
				lastPull: n ? {
					serverRevision: n.serverRevision,
					yServerRevision: n.yServerRevision,
					realms: n.realms,
					inviteRealms: n.inviteRealms
				} : void 0,
				baseRevs: r,
				changes: St(o.dx.core.schema, c, e),
				y: t,
				dxcv: o.cloud.version
			};
			o.syncStateChangedEvent.next({ phase: "pushing" });
			const p = wt.stringify(f), y = yield fetch(`${i}/sync`, {
				method: "post",
				headers: l,
				credentials: "include",
				body: p
			});
			if (o.syncStateChangedEvent.next({ phase: "pulling" }), function(e, t) {
				const n = t.headers.get("Ratelimit-Limit"), r = t.headers.get("Ratelimit-Remaining"), o = t.headers.get("Ratelimit-Reset");
				if (n && r && o) {
					const t = Number(n), i = Math.max(0, Number(r)), s = Number(o);
					if (i < t / 2) {
						const t = Math.ceil(s / (i + 1));
						Ot.set(e, new Date(Date.now() + 1e3 * t));
					} else Ot.delete(e);
				}
			}(o, y), !y.ok) throw new kt(y);
			switch (y.headers.get("content-type")) {
				case "application/x-bison":
				case "application/x-bison-stream": throw new Error("BISON format no longer supported. Server should send application/json.");
				default: {
					const e = yield y.text();
					return wt.parse(e);
				}
			}
		});
	}
	function jt(t) {
		if (null == t ? void 0 : t.cancelled) throw new Dexie.AbortError("Operation was cancelled");
	}
	var Ct = !1;
	function Et(e, t, n, r) {
		return Z(this, void 0, void 0, function* () {
			yield e.$baseRevs.bulkPut(Object.keys(t).filter((e) => t[e].markedForSync).map((e) => ({
				tableName: e,
				clientRev: (n[e] || 0) + 1,
				serverRev: r
			}))), yield e.$baseRevs.where("tableName").noneOf(Object.keys(t).filter((e) => t[e].markedForSync)).delete();
		});
	}
	function Tt(e, t = {}) {
		for (const { table: n, muts: r } of e) t[n] = (r.length > 0 ? r[r.length - 1].rev : null) || t[n] || 0;
		return t;
	}
	function Pt(t, r, o) {
		return Z(this, void 0, void 0, function* () {
			const i = yield t.bulkGet(r), s = [], a = [];
			r.forEach((r, c) => {
				const l = i[c];
				if (l) {
					for (const [i, s] of Object.entries(o[c])) if (i === t.schema.primKey.keyPath) {
						if (0 !== cmp(s, r)) throw new Error("Cannot change primary key");
					} else Dexie.setByKeyPath(l, i, s);
					s.push(r), a.push(l);
				}
			}), yield null == t.schema.primKey.keyPath ? t.bulkPut(a, s) : t.bulkPut(a);
		});
	}
	function Ut(e) {
		if ("object" != typeof e || null === e) return !1;
		const t = e;
		return "string" == typeof t._bt && "string" == typeof t.ref && void 0 === t.v;
	}
	function $t(e, t = /* @__PURE__ */ new WeakSet()) {
		return null != e && (!!Ut(e) || "object" == typeof e && !t.has(e) && (t.add(e), !(e instanceof Date || e instanceof RegExp || e instanceof Blob) && !(e instanceof ArrayBuffer || ArrayBuffer.isView(e)) && (Array.isArray(e) ? e.some((e) => $t(e, t)) : e.constructor === Object && Object.values(e).some((e) => $t(e, t)))));
	}
	function Rt(e, t) {
		return Z(this, arguments, void 0, function* (e, t, n = [], r = "", o = /* @__PURE__ */ new WeakMap(), i) {
			if (null == e) return e;
			if (Ut(e)) {
				const o = function(e, t) {
					if ("string" === t._bt) return new TextDecoder().decode(e);
					const n = e.buffer.byteLength === e.byteLength ? e.buffer : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
					switch (t._bt) {
						case "Blob": return new Blob([new Uint8Array(n)], { type: t.ct || "" });
						case "ArrayBuffer": return n;
						case "Uint8Array":
						default: return e;
						case "Int8Array": return new Int8Array(n);
						case "Uint8ClampedArray": return new Uint8ClampedArray(n);
						case "Int16Array": return new Int16Array(n);
						case "Uint16Array": return new Uint16Array(n);
						case "Int32Array": return new Int32Array(n);
						case "Uint32Array": return new Uint32Array(n);
						case "Float32Array": return new Float32Array(n);
						case "Float64Array": return new Float64Array(n);
						case "BigInt64Array": return new BigInt64Array(n);
						case "BigUint64Array": return new BigUint64Array(n);
						case "DataView": return new DataView(n);
					}
				}(yield i.download(e, t), e);
				return n.push({
					keyPath: r,
					data: o,
					ref: e.ref
				}), o;
			}
			if (Array.isArray(e)) {
				if (o.has(e)) return o.get(e);
				const s = [];
				o.set(e, s);
				for (let a = 0; a < e.length; a++) {
					const c = r ? `${r}.${a}` : `${a}`;
					s.push(yield Rt(e[a], t, n, c, o, i));
				}
				return s;
			}
			if ("object" == typeof e && e.constructor === Object) {
				if (o.has(e)) return o.get(e);
				const s = {};
				o.set(e, s);
				for (const [a, c] of Object.entries(e)) {
					if ("_hasBlobRefs" === a) continue;
					s[a] = yield Rt(c, t, n, r ? `${r}.${a}` : a, o, i);
				}
				return s;
			}
			return e;
		});
	}
	function Lt(e) {
		return "object" == typeof e && null !== e && 1 === e._hasBlobRefs;
	}
	function Bt(e) {
		null !== e && "object" == typeof e && e.constructor === Object && $t(e) && (e._hasBlobRefs = 1);
	}
	function Dt(t, n) {
		return Z(this, void 0, void 0, function* () {
			for (const { table: r, muts: o } of t) {
				if (!n.dx._allTables[r]) continue;
				const t = n.table(r), { primaryKey: i } = t.core.schema, s = (e) => {
					switch (e[0]) {
						case "[":
							if (e.endsWith("]")) try {
								return JSON.parse(e);
							} catch (e) {}
							return e;
						case "#": return e.endsWith(":" + n.cloud.currentUserId) ? e.substr(0, e.length - n.cloud.currentUserId.length - 1) : e;
						default: return e;
					}
				};
				for (const n of o) {
					const r = n.keys.map(s);
					switch (n.type) {
						case "insert":
							n.values.forEach(Bt), i.outbound ? yield t.bulkAdd(n.values, r) : (r.forEach((t, r) => {
								Dexie.setByKeyPath(n.values[r], i.keyPath, t);
							}), yield t.bulkAdd(n.values));
							break;
						case "upsert":
							n.values.forEach(Bt), i.outbound ? yield t.bulkPut(n.values, r) : (r.forEach((t, r) => {
								Dexie.setByKeyPath(n.values[r], i.keyPath, t);
							}), yield t.bulkPut(n.values));
							break;
						case "modify":
							1 === r.length ? yield t.update(r[0], n.changeSpec) : yield t.where(":id").anyOf(r).modify(n.changeSpec);
							break;
						case "update":
							if (!i.outbound && i.keyPath && "string" == typeof i.keyPath) for (const e of n.changeSpecs) delete e[i.keyPath];
							yield Pt(t, r, n.changeSpecs);
							break;
						case "delete": yield t.bulkDelete(r);
					}
				}
			}
		});
	}
	"undefined" != typeof self && "undefined" != typeof navigator && (Ct = navigator.onLine, self.addEventListener("online", () => Ct = !0), self.addEventListener("offline", () => Ct = !1));
	var Nt = "dexie-cloud-syncer";
	function Ft(e, t) {
		return e.where("i").between(t, 1 / 0, !0).toArray();
	}
	function Mt(e, t, n) {
		var r, o, i;
		if (!e.dx._allTables[t]) return;
		const s = null === (i = null === (o = null === (r = e.table(t)) || void 0 === r ? void 0 : r.schema.yProps) || void 0 === o ? void 0 : o.find((e) => e.prop === n)) || void 0 === i ? void 0 : i.updatesTable;
		return s && e.dx._allTables[s] ? e.table(s) : void 0;
	}
	function Wt(e, t) {
		return Z(this, void 0, void 0, function* () {
			var r;
			const o = {};
			let i, s = !1;
			for (const a of e) try {
				switch (a.type) {
					case "u-s": {
						const e = Mt(t, a.table, a.prop);
						if (e) {
							const t = {
								k: a.k,
								u: a.u
							};
							a.r && (t.r = a.r, i = a.r), o[e.name] = yield e.add(t);
						}
						break;
					}
					case "u-ack": {
						const e = Mt(t, a.table, a.prop);
						e && (yield t.transaction("rw", e, (t) => Z(this, void 0, void 0, function* () {
							let n = yield t.table(e.name).get(Nt);
							yield t.table(e.name).put(Object.assign(Object.assign({}, n || { i: Nt }), { unsentFrom: Math.max((null == n ? void 0 : n.unsentFrom) || 1, a.i + 1) }));
						})));
						break;
					}
					case "u-reject": {
						const e = Mt(t, a.table, a.prop);
						if (!e) break;
						const o = null === (r = yield e.get(a.i)) || void 0 === r ? void 0 : r.k;
						if (null != o) {
							yield t.transaction("rw", e, (t) => (t.idbtrans._rejecting_y_ypdate = !0, e.where("i").aboveOrEqual(a.i).filter((e) => 0 === cmp(e.k, o) && !(1 & ~(e.f || 0))).delete()));
							const r = DexieYProvider.getDocCache(t.dx).find(a.table, o, a.prop);
							r && r.destroy();
						}
						break;
					}
					case "in-sync": {
						const e = DexieYProvider.getDocCache(t.dx).find(a.table, a.k, a.prop);
						e && !e.isSynced && e.emit("sync", [!0, e]);
						break;
					}
					case "y-complete-sync-done":
						i = a.yServerRev;
						break;
					case "outdated-server-rev": s = !0;
				}
			} catch (e) {}
			return {
				receivedUntils: o,
				resyncNeeded: s,
				yServerRevision: i
			};
		});
	}
	var Kt = /* @__PURE__ */ new Map();
	var zt = /* @__PURE__ */ new Set([
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array",
		"BigInt64Array",
		"BigUint64Array",
		"DataView"
	]);
	var Ht = /* @__PURE__ */ new Set([
		"Blob",
		"File",
		"ArrayBuffer",
		...zt
	]);
	function Vt(e) {
		return Object.prototype.toString.call(e).slice(8, -1);
	}
	function qt(e) {
		if ("object" !== typeof e || null === e) return !1;
		const t = Vt(e);
		return !!Ht.has(t) && ("Blob" === t || "File" === t || e.byteLength >= 4096);
	}
	function Jt(e, t, n) {
		return Z(this, void 0, void 0, function* () {
			const r = yield t();
			if (!r) throw new Error("Failed to load access token for blob upload");
			const i = `${e}/blob/${function() {
				const e = /* @__PURE__ */ new Uint8Array(18), t = new Uint8Array(e.buffer, 0, 6), n = Date.now();
				Ne >= n ? ++Ne : Ne = n, t[0] = Ne / 1099511627776, t[1] = Ne / 4294967296, t[2] = Ne / 16777216, t[3] = Ne / 65536, t[4] = Ne / 256, t[5] = Ne;
				return De(new Uint8Array(e.buffer, 6)), Ce(e);
			}()}`;
			let s, a, c;
			const l = function(e) {
				const t = Vt(e);
				return "Blob" === t || "File" === t ? "Blob" : "ArrayBuffer" === t ? "ArrayBuffer" : t;
			}(n), u = Vt(n);
			if ("Blob" === u || "File" === u) s = n, a = n.type || "application/octet-stream", c = n.size;
			else if ("ArrayBuffer" === u) s = n, a = "application/octet-stream", c = n.byteLength;
			else {
				if (!zt.has(u)) throw new Error(`Unsupported blob type: ${u}`);
				{
					const e = n, t = new ArrayBuffer(e.byteLength);
					new Uint8Array(t).set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), s = t, a = "application/octet-stream", c = e.byteLength;
				}
			}
			const d = `${i}?ct=${encodeURIComponent(a)}`, f = yield fetch(d, {
				method: "PUT",
				headers: {
					Authorization: `Bearer ${r}`,
					"Content-Type": a
				},
				body: s
			});
			if (!f.ok) {
				if (404 === f.status || 405 === f.status) return null;
				throw new Error(`Failed to upload blob: ${f.status} ${f.statusText}`);
			}
			const p = yield f.json();
			return Object.assign({
				_bt: l,
				ref: p.ref,
				size: c
			}, "Blob" === l ? { ct: a } : {});
		});
	}
	function Gt(e, t, n) {
		return Z(this, arguments, void 0, function* (e, t, n, r = 32768) {
			const o = { dirty: !1 }, i = yield Yt(e, t, n, r, o);
			return o.dirty && "object" == typeof i && null !== i && i.constructor === Object && (i._hasBlobRefs = 1), i;
		});
	}
	function Yt(e, t, n) {
		return Z(this, arguments, void 0, function* (e, t, n, r = 32768, o = { dirty: !1 }, i = /* @__PURE__ */ new WeakSet()) {
			if (null == e) return e;
			if ("string" == typeof e && e.length > r && r !== 1 / 0) {
				if (!1 === Kt.get(t)) return e;
				const i = yield Jt(t, n, new Blob([e], { type: "text/plain;charset=utf-8" }));
				return null === i ? (Kt.set(t, !1), e) : (Kt.set(t, !0), o.dirty = !0, Object.assign(Object.assign({}, i), { _bt: "string" }));
			}
			if (qt(e)) {
				if (!1 === Kt.get(t)) return e;
				const r = yield Jt(t, n, e);
				return null === r ? (Kt.set(t, !1), e) : (Kt.set(t, !0), o.dirty = !0, r);
			}
			if ("object" != typeof e) return e;
			if (i.has(e)) return e;
			if (i.add(e), Array.isArray(e)) {
				const s = [];
				for (const a of e) s.push(yield Yt(a, t, n, r, o, i));
				return s;
			}
			const s = Object.getPrototypeOf(e);
			if (s !== Object.prototype && null !== s) return e;
			const a = {};
			for (const [s, c] of Object.entries(e)) a[s] = yield Yt(c, t, n, r, o, i);
			return a;
		});
	}
	function Qt(e, t, n) {
		return Z(this, arguments, void 0, function* (e, t, n, r = 32768) {
			switch (e.type) {
				case "insert":
				case "upsert": {
					const o = yield Promise.all(e.values.map((e) => Gt(e, t, n, r)));
					return Object.assign(Object.assign({}, e), { values: o });
				}
				case "update": {
					const o = yield Promise.all(e.changeSpecs.map((e) => Gt(e, t, n, r)));
					return Object.assign(Object.assign({}, e), { changeSpecs: o });
				}
				case "modify": {
					const o = yield Gt(e.changeSpec, t, n, r);
					return Object.assign(Object.assign({}, e), { changeSpec: o });
				}
				default: return e;
			}
		});
	}
	function Zt(e, t) {
		switch (e.type) {
			case "insert":
			case "upsert": return e.values.some((e) => Xt(e, t));
			case "update": return e.changeSpecs.some((e) => Xt(e, t));
			case "modify": return Xt(e.changeSpec, t);
			default: return !1;
		}
	}
	function Xt(e, t, n = /* @__PURE__ */ new WeakSet()) {
		if (null == e) return !1;
		if ("string" == typeof e && e.length > t && t !== 1 / 0) return !0;
		if (qt(e)) return !0;
		if ("object" != typeof e) return !1;
		if (n.has(e)) return !1;
		if (n.add(e), Array.isArray(e)) return e.some((e) => Xt(e, t, n));
		const r = Object.getPrototypeOf(e);
		return (r === Object.prototype || null === r) && Object.values(e).some((e) => Xt(e, t, n));
	}
	function en(t, n, r) {
		return Z(this, arguments, void 0, function* (t, n, { yDownloadedRealms: r, realms: o }) {
			if (r && o && o.every((e) => "*" === r[e])) return;
			const i = yield yt(t), s = {
				"Content-Type": "application/json",
				Accept: "application/octet-stream"
			};
			i && (s.Authorization = `Bearer ${i.accessToken}`);
			const a = yield fetch(`${n}/y/download`, {
				body: wt.stringify({ downloadedRealms: r || {} }),
				method: "POST",
				headers: s,
				credentials: "include"
			});
			if (!a.ok) throw new Error(`Failed to download Yjs documents from server. Status: ${a.status}`);
			yield async function(e, ...t) {
				let n = e();
				for (let e = 0; e < t.length; e++) n = t[e](n);
				for await (const e of n);
			}(function(e) {
				return async function* () {
					if (!e.body) throw new Error("Response body is not readable");
					const t = e.body.getReader();
					try {
						for (;;) {
							const { done: e, value: n } = await t.read();
							if (e) return;
							yield n;
						}
					} finally {
						t.releaseLock();
					}
				};
			}(a), Je, function(r) {
				return te(this, arguments, function* () {
					var o, i, s, a;
					let c = null, l = null, u = null, d = [];
					function f(e) {
						return Z(this, void 0, void 0, function* () {
							const r = d[d.length - 1];
							if (d.length > 0) {
								if (!c || !l || !u) throw new Error(`Protocol error from ${n}/y/download`);
								const e = Mt(t, l, u);
								e && (yield e.bulkAdd(d)), d = [];
							}
							c && (l && u && r || e) && (yield t.$syncState.update("syncState", (t) => {
								const n = t.yDownloadedRealms || {};
								n[c] = e ? "*" : {
									tbl: l,
									prop: u,
									key: r.k
								}, t.yDownloadedRealms = n;
							}));
						});
					}
					try {
						try {
							for (var p, y = !0, h = ne(r); !(o = (p = yield ee(h.next())).done); y = !0) {
								a = p.value, y = !1;
								const e = new Decoder(a);
								for (; hasContent(e);) switch (readUint8(e)) {
									case 1:
										yield ee(f(!0)), c = readVarString(e);
										break;
									case 2:
										yield ee(f(!1)), l = readVarString(e), u = readVarString(e);
										break;
									case 3: {
										const t = readAny(e), n = readVarUint8Array(e);
										d.push({
											k: t,
											u: n
										});
										break;
									}
								}
								yield ee(f(!1));
							}
						} catch (e) {
							i = { error: e };
						} finally {
							try {
								y || o || !(s = h.return) || (yield ee(s.call(h)));
							} finally {
								if (i) throw i.error;
							}
						}
						yield ee(f(!0));
					} catch (t) {
						throw t instanceof Dexie.DexieError || (yield ee(f(!1))), t;
					}
				});
			});
		});
	}
	var tn = /* @__PURE__ */ new WeakMap();
	function nn(t) {
		var n, r, o, i;
		let s = tn.get(t);
		if (s && s.expiration > Date.now() + 3e5) return Promise.resolve(s.accessToken);
		const a = t.cloud.currentUser.value;
		return a && a.accessToken && (null !== (r = null === (n = a.accessTokenExpiration) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 1 / 0) > Date.now() + 3e5 ? (tn.set(t, {
			accessToken: a.accessToken,
			expiration: null !== (i = null === (o = a.accessTokenExpiration) || void 0 === o ? void 0 : o.getTime()) && void 0 !== i ? i : 1 / 0
		}), Promise.resolve(a.accessToken)) : (null == a ? void 0 : a.isLoggedIn) ? Dexie.ignoreTransaction(() => yt(t).then((e) => {
			var n, r;
			return null != e && e.accessToken && tn.set(t, {
				accessToken: e.accessToken,
				expiration: null !== (r = null === (n = e.accessTokenExpiration) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 1 / 0
			}), (null == e ? void 0 : e.accessToken) || null;
		})) : Promise.resolve(null);
	}
	var rn = "currentSyncWorker";
	function on(e, t, n, r) {
		return sn(e, t, n, r).then((t) => (null != r && r.justCheckIfNeeded || e.syncStateChangedEvent.next({ phase: "in-sync" }), t)).catch((o) => Z(this, void 0, void 0, function* () {
			return (null == r ? void 0 : r.justCheckIfNeeded) ? Promise.reject(o) : Ct && (null == r ? void 0 : r.retryImmediatelyOnFetchError) && "TypeError" === (null == o ? void 0 : o.name) && /fetch/.test(null == o ? void 0 : o.message) ? (e.syncStateChangedEvent.next({
				phase: "error",
				error: o
			}), yield new Promise((e) => setTimeout(e, 500)), yield on(e, t, n, Object.assign(Object.assign({}, r), { retryImmediatelyOnFetchError: !1 }))) : (yield e.$syncState.update("syncState", {
				timestamp: /* @__PURE__ */ new Date(),
				error: "" + o
			}), e.syncStateChangedEvent.next({
				phase: Ct ? "error" : "offline",
				error: new Error("" + (null == o ? void 0 : o.message) || o)
			}), Promise.reject(o));
		}));
	}
	function sn(e, t, n) {
		return Z(this, arguments, void 0, function* (e, t, n, { isInitialSync: r, cancelToken: o, justCheckIfNeeded: i, purpose: s } = { isInitialSync: !1 }) {
			var a, c, l, u, d;
			if (!(null === (a = e.cloud.options) || void 0 === a ? void 0 : a.databaseUrl)) throw new Error("Internal error: sync must not be called when no databaseUrl is configured");
			const { databaseUrl: f } = t, p = yield e.getCurrentUser(), y = p.isLoggedIn ? Ye(e) : [], h = y.map((t) => e.table(Qe(t.name))), v = yield e.getPersistedSyncState(), m = p.isLoggedIn, b = m ? function(e, t) {
				const n = (null == t ? void 0 : t.syncedTables) || [];
				return Ye(e).filter((e) => !n.includes(e.name));
			}(e, v) : [];
			jt(o);
			const g = b.length > 0;
			if (g) {
				if (i) return !0;
				yield e.transaction("rw", b, (e) => Z(this, void 0, void 0, function* () {
					e.idbtrans.disableChangeTracking = !0, e.idbtrans.disableAccessControl = !0, yield function(e, t, n) {
						return Z(this, void 0, void 0, function* () {
							const r = new Set(n || []);
							for (const n of e) "members" === n.name ? yield n.toCollection().modify((e) => {
								r.has(e.realmId) || e.userId && e.userId !== re.userId || (e.userId = t.userId);
							}) : "roles" === n.name || ("realms" === n.name ? yield n.toCollection().modify((e) => {
								r.has(e.realmId) || void 0 !== e.owner && e.owner !== re.userId || (e.owner = t.userId);
							}) : yield n.toCollection().modify((e) => {
								e.realmId && r.has(e.realmId) || (e.owner && e.owner !== re.userId || (e.owner = t.userId), e.realmId && e.realmId !== re.userId || (e.realmId = t.userId));
							}));
						});
					}(b, p, null == v ? void 0 : v.realms);
				})), jt(o);
			}
			const [_, w, k, { yMessages: S, lastUpdateIds: x }] = yield e.transaction("r", e.tables, () => Z(this, void 0, void 0, function* () {
				const t = yield e.getPersistedSyncState();
				let r = yield e.$baseRevs.toArray();
				r = r.filter((e) => y.some((t) => t.name === e.tableName));
				let i = yield tt(h, e);
				const s = yield function(e, t) {
					return Z(this, void 0, void 0, function* () {
						const n = [], r = {};
						for (const o of t) if (o.schema.yProps) for (const t of o.schema.yProps) {
							const i = e.table(t.updatesTable), s = yield i.get(Nt), a = (null == s ? void 0 : s.unsentFrom) || 1, c = (null == s ? void 0 : s.receivedUntil) || 0, u = yield Ft(i, Math.min(a, c + 1));
							u.length > 0 && (r[i.name] = u[u.length - 1].i);
							const d = {};
							for (const e of u) {
								const t = !(1 & ~(e.f || 0));
								if (t && e.i < a) continue;
								const n = JSON.stringify(e.k) + "/" + t;
								let r = d[n];
								r ? (r.u.push(e.u), r.i = Math.max(e.i, r.i)) : (d[n] = r = {
									i: e.i,
									k: e.k,
									isLocal: t,
									u: []
								}, r.u.push(e.u));
							}
							for (const { k: e, isLocal: r, u: i, i: s } of Object.values(d)) {
								const a = 1 === i.length ? i[0] : mergeUpdatesV2(i);
								if (r) n.push({
									type: "u-c",
									table: o.name,
									prop: t.prop,
									k: e,
									u: a,
									i: s
								});
								else {
									const r = encodeStateVectorFromUpdateV2(a);
									n.push({
										type: "sv",
										table: o.name,
										prop: t.prop,
										k: e,
										sv: r
									});
								}
							}
						}
						return {
							yMessages: n,
							lastUpdateIds: r
						};
					});
				}(e, y);
				if (jt(o), g) {
					const e = [...(null == v ? void 0 : v.realms) || [], ...(null == v ? void 0 : v.inviteRealms) || []], a = yield function(e, t, n, r) {
						return Z(this, void 0, void 0, function* () {
							const o = `upload-${nt(8)}`;
							if (t.isLoggedIn && e.length > 0) {
								const i = new Set(r || []);
								return (yield Promise.all(e.map((e) => Z(this, void 0, void 0, function* () {
									const { extractKey: r } = e.core.schema.primaryKey;
									if (!r) return {
										table: e.name,
										muts: []
									};
									const s = n[e.name], c = yield ((null == s ? void 0 : s.generatedGlobalId) ? e.filter((e) => {
										return r(e), !i.has(e.realmId || "") && (t = r(e), !(n = null == s ? void 0 : s.idPrefix) || "string" == typeof t && t.startsWith(n));
										var t, n;
									}) : e.filter((e) => {
										const t = r(e);
										return !i.has(e.realmId || "") && ze(t);
									})).toArray();
									if (c.length > 0) {
										const n = {
											type: "upsert",
											values: c,
											keys: c.map(r),
											userId: t.userId,
											txid: o
										};
										return {
											table: e.name,
											muts: [n]
										};
									}
									return {
										table: e.name,
										muts: []
									};
								})))).filter((e) => e.muts.length > 0);
							}
							return [];
						});
					}(b, p, n, e);
					return jt(o), i = i.concat(a), [
						i,
						t,
						r,
						s
					];
				}
				return [
					i,
					t,
					r,
					s
				];
			})), O = _.some((e) => e.muts.some((e) => e.keys.length > 0)) || S.some((e) => "u-c" === e.type);
			if (i) return O;
			if ("push" === s && !O) return !1;
			const I = Tt(_, null == w ? void 0 : w.latestRevisions), A = (null == w ? void 0 : w.clientIdentity) || We(16);
			let j = _;
			const C = null !== (d = null !== (l = null === (c = e.cloud.options) || void 0 === c ? void 0 : c.largeStringThreshold) && void 0 !== l ? l : null === (u = e.cloud.options) || void 0 === u ? void 0 : u.maxStringLength) && void 0 !== d ? d : 32768;
			(function(e, t = 32768) {
				for (const n of e) for (const e of n.muts) if (Zt(e, t)) return !0;
				return !1;
			})(_, C) && (j = yield function(e, t, n) {
				return Z(this, arguments, void 0, function* (e, t, n, r = 32768) {
					const o = [];
					for (const i of e) {
						const e = [];
						for (const o of i.muts) {
							const i = yield Qt(o, t, n, r);
							e.push(i);
						}
						o.push({
							table: i.table,
							muts: e
						});
					}
					return o;
				});
			}(_, f, () => nn(e), C)), jt(o);
			const T = yield At(j, S, w, k, e, f, n, A, p), { done: P, newSyncState: U } = yield e.transaction("rw", e.tables, (t) => Z(this, void 0, void 0, function* () {
				t.idbtrans.disableChangeTracking = !0, t.idbtrans.disableAccessControl = !0;
				for (const e of Object.keys(n)) T.schema[e] && (n[e] = T.schema[e]);
				yield e.$syncState.put(n, "schema");
				const r = yield tt(h, e, { since: I });
				for (const t of h) {
					const n = Ze(t.name);
					if (r.some((e) => e.table === n && e.muts.length > 0)) {
						if (I[n]) {
							const r = I[n] || 0;
							yield Promise.all([t.where("rev").belowOrEqual(r).delete(), e.$baseRevs.where(":id").between([n, -1 / 0], [n, r + 1], !0, !0).reverse().offset(1).delete()]);
						}
					} else yield Promise.all([t.clear(), e.$baseRevs.where({ tableName: n }).delete()]);
				}
				Tt(r, I), yield Et(e, n, I, T.serverRevision);
				const o = yield e.getPersistedSyncState();
				yield function(e, t, n) {
					return Z(this, void 0, void 0, function* () {
						const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), i = n ? n.realms : [], s = n ? n.inviteRealms : [], a = new Set(t.realms), c = new Set(t.realms.concat(t.inviteRealms));
						for (const e of i) a.has(e) || (o.add(e), c.has(e) || r.add(e));
						for (const e of s.concat(i)) c.has(e) || r.add(e);
						if (r.size > 0 || o.size > 0) {
							const t = Ye(e);
							for (const e of t) {
								let t = [
									"realms",
									"members",
									"roles"
								].includes(e.name) ? r : o;
								0 !== t.size && (e.schema.indexes.some((e) => "realmId" === e.keyPath || Array.isArray(e.keyPath) && "realmId" === e.keyPath[0]) ? yield e.where("realmId").anyOf([...t]).delete() : yield e.filter((e) => !!(null == e ? void 0 : e.realmId) && t.has(e.realmId)).delete());
							}
						}
						if (o.size > 0 && (null == n ? void 0 : n.yDownloadedRealms)) for (const e of o) delete n.yDownloadedRealms[e];
					});
				}(e, T, o);
				const i = o || {
					syncedTables: [],
					latestRevisions: {},
					realms: [],
					inviteRealms: [],
					clientIdentity: A
				};
				m && (i.syncedTables = y.map((e) => e.name).concat(b.map((e) => e.name))), i.latestRevisions = I, i.remoteDbId = T.dbId, i.initiallySynced = !0, i.realms = T.realms, i.inviteRealms = T.inviteRealms, i.serverRevision = T.serverRevision, i.yServerRevision = T.serverRevision, i.timestamp = /* @__PURE__ */ new Date(), delete i.error;
				if (yield Dt(an(T.changes, r), e), T.yMessages) {
					const { receivedUntils: t, resyncNeeded: n, yServerRevision: r } = yield Wt(T.yMessages, e);
					r && (i.yServerRevision = r), yield function(e, t, n) {
						return Z(this, void 0, void 0, function* () {
							var r, o, i, s, a;
							const c = {};
							for (const [t, n] of Object.entries(e)) null !== (r = c[t]) && void 0 !== r || (c[t] = {}), c[t].unsentFrom = n + 1;
							for (const [e, n] of Object.entries(t)) null !== (o = c[e]) && void 0 !== o || (c[e] = {}), c[e].receivedUntil = n;
							const l = Object.values(n.dx._dbSchema).filter((e) => e.yProps).map((e) => e.yProps.map((e) => e.updatesTable)).flat();
							for (const e of l) {
								const t = c[e], r = null !== (i = null == t ? void 0 : t.unsentFrom) && void 0 !== i ? i : 1, o = null !== (a = null !== (s = null == t ? void 0 : t.receivedUntil) && void 0 !== s ? s : (yield n.table(e).where("i").between(1, 1 / 0).reverse().limit(1).primaryKeys())[0]) && void 0 !== a ? a : 0;
								yield n.transaction("rw", e, () => Z(this, void 0, void 0, function* () {
									const t = yield n.table(e).get(Nt);
									t ? (t.unsentFrom = Math.max(r, t.unsentFrom || 1), t.receivedUntil = Math.max(o, t.receivedUntil || 0), yield n.table(e).put(t)) : yield n.table(e).add({
										i: Nt,
										unsentFrom: r,
										receivedUntil: o
									});
								}));
							}
						});
					}(x, t, e), n && (i.yDownloadedRealms = {});
				}
				return e.$syncState.put(i, "syncState"), {
					done: 0 === r.length,
					newSyncState: i
				};
			}));
			if (!P) return yield It(e), yield sn(e, t, n, {
				isInitialSync: r,
				cancelToken: o
			});
			const $ = Object.values(n).some((e) => {
				var t;
				return null === (t = e.yProps) || void 0 === t ? void 0 : t.length;
			}), R = !!T.yMessages;
			if ($ && R) try {
				yield en(e, f, U);
			} catch (e) {}
			return e.syncCompleteEvent.next(), !1;
		});
	}
	function an(e, t) {
		const n = {};
		qe(n, e);
		const r = {};
		return qe(r, t), function(e, t) {
			for (const [n, r] of Object.entries(t)) for (const [t, o] of Object.entries(r)) switch (o.type) {
				case "ups":
					{
						const r = e[n]?.[t];
						if (r) switch (r.type) {
							case "ups":
							case "upd": delete e[n][t];
						}
					}
					break;
				case "del":
					delete e[n]?.[t];
					break;
				case "upd": {
					const r = e[n]?.[t];
					if (r) switch (r.type) {
						case "ups":
							for (const [e, t] of Object.entries(o.mod)) Me(r.val, e, t);
							break;
						case "del": break;
						case "upd": for (const e of Object.keys(o.mod)) delete r.mod[e];
					}
					break;
				}
			}
		}(n, r), function(e, t) {
			const n = {};
			for (const [t, r] of Object.entries(e)) for (const [e, o] of Object.entries(r)) {
				const r = n[t] || (n[t] = {});
				(r[o.type] || (r[o.type] = [])).push({
					key: e,
					...o
				});
			}
			const r = [];
			for (const [e, o] of Object.entries(n)) {
				const n = {
					table: e,
					muts: []
				};
				for (const [e, r] of Object.entries(o)) switch (e) {
					case "ups": {
						const e = {
							type: "upsert",
							keys: r.map((e) => e.key),
							values: r.map((e) => e.val),
							txid: t
						};
						n.muts.push(e);
						break;
					}
					case "upd": {
						const e = {
							type: "update",
							keys: r.map((e) => e.key),
							changeSpecs: r.map((e) => e.mod),
							txid: t
						};
						n.muts.push(e);
						break;
					}
					case "del": {
						const e = {
							type: "delete",
							keys: r.map((e) => e.key),
							txid: t
						};
						n.muts.push(e);
						break;
					}
				}
				r.push(n);
			}
			return r;
		}(n);
	}
	function cn(t) {
		const n = [], r = new BehaviorSubject(!0), o = new BehaviorSubject(null);
		let i = !1, c = new Array(10).fill(0);
		return o.subscribe(() => Z(this, void 0, void 0, function* () {
			if (!i && n.length > 0) {
				i = !0, c.shift(), c.push(Date.now()), r.next(!1);
				try {
					yield function() {
						return Z(this, void 0, void 0, function* () {
							for (var r, o, i, s, c, l; n.length > 0;) {
								const u = n.shift();
								try {
									yield firstValueFrom(t.cloud.syncState.pipe(filter(({ phase: e }) => "in-sync" === e || "error" === e)));
									const n = t.cloud.persistedSyncState.value;
									if (!u) continue;
									switch (u.type) {
										case "token-expired":
											const a = t.cloud.currentUser.value, d = yield vt(t.cloud.options.databaseUrl, a);
											yield t.table("$logins").update(a.userId, {
												accessToken: d.accessToken,
												accessTokenExpiration: d.accessTokenExpiration,
												claims: d.claims,
												license: d.license,
												data: d.data
											});
											break;
										case "realm-added":
											null !== (r = null == n ? void 0 : n.realms) && void 0 !== r && r.includes(u.realm) || null !== (o = null == n ? void 0 : n.inviteRealms) && void 0 !== o && o.includes(u.realm) || (yield t.cloud.sync({
												purpose: "pull",
												wait: !0
											}));
											break;
										case "realm-accepted":
											null !== (i = null == n ? void 0 : n.realms) && void 0 !== i && i.includes(u.realm) || (yield t.cloud.sync({
												purpose: "pull",
												wait: !0
											}));
											break;
										case "realm-removed":
											(null !== (s = null == n ? void 0 : n.realms) && void 0 !== s && s.includes(u.realm) || null !== (c = null == n ? void 0 : n.inviteRealms) && void 0 !== c && c.includes(u.realm)) && (yield t.cloud.sync({
												purpose: "pull",
												wait: !0
											}));
											break;
										case "realms-changed":
											yield t.cloud.sync({
												purpose: "pull",
												wait: !0
											});
											break;
										case "changes":
											if ("error" === (null === (l = t.cloud.syncState.value) || void 0 === l ? void 0 : l.phase)) {
												de(t, "pull");
												break;
											}
											(yield t.transaction("rw", t.dx.tables, (n) => Z(this, void 0, void 0, function* () {
												n.idbtrans.disableChangeTracking = !0, n.idbtrans.disableAccessControl = !0;
												const [r, o, i] = yield Promise.all([
													t.getSchema(),
													t.getPersistedSyncState(),
													t.getCurrentUser()
												]);
												if (!o || !r || !i) return !1;
												if (u.baseRev !== o.serverRevision) return "string" != typeof u.baseRev || "bigint" != typeof o.serverRevision && "object" != typeof o.serverRevision || de(t, "pull"), !1;
												if ((yield Dexie.waitFor(Ge(o))) !== u.realmSetHash) return de(t, "pull"), !1;
												let s = [];
												if (i.isLoggedIn) s = yield tt(Ye(t).map((e) => t.table(Qe(e.name))), t);
												if (u.changes.length > 0) yield Dt(an(u.changes, s), t);
												return o.latestRevisions = Tt(s, o.latestRevisions), o.serverRevision = u.newRev, yield Et(t, r, o.latestRevisions, u.newRev), yield t.$syncState.put(o, "syncState"), !0;
											}))) && u.changes.length > 0 && t.syncCompleteEvent.next();
									}
								} catch (e) {}
							}
						});
					}();
				} finally {
					c[c.length - 1] - c[0] < 1e4 && (yield new Promise((e) => setTimeout(e, 1e3))), i = !1, r.next(!0);
				}
			}
		})), {
			enqueue: function(e) {
				n.push(e), o.next(null);
			},
			readyToServe: r
		};
	}
	var ln = class {
		constructor(e, t) {
			this.queue = [], this.isProcessing = !1, this.drainResolvers = [], this.db = e, this.onPersisted = t;
		}
		saveBlobs(e, t, n) {
			this.queue.push({
				tableName: e,
				primaryKey: t,
				resolvedBlobs: n
			}), this.startConsumer();
		}
		drain() {
			return this.isProcessing || 0 !== this.queue.length ? new Promise((e) => {
				this.drainResolvers.push(e);
			}) : Promise.resolve();
		}
		startConsumer() {
			this.isProcessing || (this.isProcessing = !0, setTimeout(() => {
				this.processQueue();
			}, 0));
		}
		processQueue() {
			const t = this.queue.shift();
			if (!t) {
				this.isProcessing = !1;
				const e = this.drainResolvers;
				if (e.length > 0) {
					this.drainResolvers = [];
					for (const t of e) t();
				}
				return;
			}
			this.db.transaction("rw", t.tableName, (n) => {
				const r = n.idbtrans;
				r.disableChangeTracking = !0, r.disableAccessControl = !0, r.disableBlobResolve = !0;
				const o = {};
				for (const e of t.resolvedBlobs) o[e.keyPath] = e.data;
				n.table(t.tableName).update(t.primaryKey, (n) => {
					for (const r of t.resolvedBlobs) {
						const t = Dexie.getByKeyPath(n, r.keyPath);
						if (void 0 !== t && Ut(t)) {
							if (t.ref !== r.ref) return;
							Dexie.setByKeyPath(n, r.keyPath, r.data);
						}
					}
					delete n._hasBlobRefs;
				});
			}).catch((e) => {}).finally(() => (this.onPersisted(t.resolvedBlobs.map((e) => e.ref)), this.processQueue()));
		}
	};
	var un = class {
		constructor(e) {
			this.inFlight = /* @__PURE__ */ new Map(), this.activeFetches = 0, this.waiting = [], this.db = e, this.savingQueue = new ln(e, (e) => {
				for (const t of e) this.inFlight.delete(t);
			});
		}
		download(e, t) {
			let n = this.inFlight.get(e.ref);
			return n || (n = this.acquireSlot().then(() => this.downloadBlob(e, t).finally(() => this.releaseSlot())).catch((t) => {
				throw this.inFlight.delete(e.ref), t;
			}), this.inFlight.set(e.ref, n)), n;
		}
		enqueueSave(e, t, n) {
			this.savingQueue.saveBlobs(e, t, n);
		}
		drainPendingSaves() {
			return this.savingQueue.drain();
		}
		releaseRefs(e) {
			for (const t of e) this.inFlight.delete(t);
		}
		acquireSlot() {
			return this.activeFetches < 10 ? (this.activeFetches++, Promise.resolve()) : new Promise((e) => {
				this.waiting.push(() => {
					this.activeFetches++, e();
				});
			});
		}
		releaseSlot() {
			this.activeFetches--;
			const e = this.waiting.shift();
			e && e();
		}
		downloadBlob(e, t) {
			return Z(this, void 0, void 0, function* () {
				const n = yield nn(this.db), r = `${t}/blob/${e.ref}`, o = {};
				n && (o.Authorization = `Bearer ${n}`);
				const i = yield fetch(r, {
					headers: o,
					cache: "no-store"
				});
				if (!i.ok) throw new Error(`Failed to download blob ${e.ref}: ${i.status} ${i.statusText}`);
				const s = yield i.arrayBuffer();
				return new Uint8Array(s);
			});
		}
	};
	var dn = /* @__PURE__ */ new WeakMap();
	var fn = {
		members: "@id, [userId+realmId], [email+realmId], realmId",
		roles: "[realmId+name]",
		realms: "@realmId",
		$jobs: "",
		$syncState: "",
		$baseRevs: "[tableName+clientRev]",
		$logins: "claims.sub, lastLogin"
	};
	var pn = 0;
	function yn(e) {
		"vip" in e && (e = e.vip);
		let t = dn.get(e);
		if (!t) {
			const n = new Subject();
			let r = new ce(`syncstatechanged-${e.name}`), o = new ce(`synccomplete-${e.name}`);
			n.id = ++pn;
			let i = !1;
			t = {
				get name() {
					return e.name;
				},
				close: () => e.close(),
				transaction: e.transaction.bind(e),
				table: e.table.bind(e),
				get tables() {
					return e.tables;
				},
				get cloud() {
					return e.cloud;
				},
				get $jobs() {
					return e.table("$jobs");
				},
				get $syncState() {
					return e.table("$syncState");
				},
				get $baseRevs() {
					return e.table("$baseRevs");
				},
				get $logins() {
					return e.table("$logins");
				},
				get realms() {
					return e.realms;
				},
				get members() {
					return e.members;
				},
				get roles() {
					return e.roles;
				},
				get initiallySynced() {
					return i;
				},
				localSyncEvent: n,
				get syncStateChangedEvent() {
					return r;
				},
				get syncCompleteEvent() {
					return o;
				},
				dx: e
			};
			Object.assign(t, {
				getCurrentUser: () => t.$logins.toArray().then((e) => e.find((e) => e.isLoggedIn) || re),
				getPersistedSyncState: () => t.$syncState.get("syncState"),
				getSchema: () => t.$syncState.get("schema").then((e) => {
					if (e) for (const n of t.tables) n.schema.primKey && n.schema.primKey.keyPath && e[n.name] && (e[n.name].primaryKey = hn(n.schema.primKey.keyPath));
					return e;
				}),
				getOptions: () => t.$syncState.get("options"),
				setInitiallySynced(e) {
					i = e;
				},
				reconfigure() {
					r = new ce(`syncstatechanged-${e.name}`), o = new ce(`synccomplete-${e.name}`);
				}
			}), t.messageConsumer = cn(t), t.messageProducer = new Subject(), t.blobDownloadTracker = new un(t), dn.set(e, t);
		}
		return t;
	}
	function hn(e) {
		return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
	}
	function vn(e, t) {
		e.value !== t && e.next(t);
	}
	function mn(e, t) {
		return combineLatest([from$1(liveQuery(() => Z(this, void 0, void 0, function* () {
			let t = 0, n = 0;
			const r = Ye(e);
			return yield e.dx.transaction("r", r, (e) => Z(this, void 0, void 0, function* () {
				e.idbtrans.disableBlobResolve = !0;
				for (const e of r) {
					if (!!!e.schema.idxByName._hasBlobRefs) continue;
					const r = yield e.where("_hasBlobRefs").equals(1).toArray();
					for (const e of r) {
						const r = bn(e);
						t += r.length, n += r.reduce((e, t) => e + (t.size || 0), 0);
					}
				}
			})), {
				blobsRemaining: t,
				bytesRemaining: n
			};
		}))), t]).pipe(map$1(([e, t]) => ({
			isDownloading: t && e.blobsRemaining > 0,
			blobsRemaining: e.blobsRemaining,
			bytesRemaining: e.bytesRemaining
		})), share({ resetOnRefCountZero: () => timer(2e3) }));
	}
	function bn(e) {
		const t = [];
		return function e(n) {
			if (null != n && "object" == typeof n) if (me.isTSONRef(n)) t.push({
				ref: n.ref,
				size: n.size
			});
			else {
				if (function(e) {
					if ("object" != typeof e || null === e) return !1;
					const t = e;
					return "string" == typeof t.type && "string" == typeof t.ref && "number" == typeof t.size && void 0 === t._bt;
				}(n)) {
					const e = n;
					t.push({
						ref: e.ref,
						size: e.size
					});
					return;
				}
				Ut(n) ? t.push({
					ref: n.ref,
					size: n.size || 0
				}) : Array.isArray(n) ? n.forEach(e) : n.constructor === Object && Object.values(n).forEach(e);
			}
		}(e), t;
	}
	var gn = /* @__PURE__ */ new WeakMap();
	var _n = class _n {
		constructor(e, t) {
			gn.set(this, e), Object.assign(this, t);
		}
		static load(e, t) {
			return e.table("$logins").get(t).then((n) => new _n(e, n || {
				userId: t,
				claims: { sub: t },
				lastLogin: /* @__PURE__ */ new Date(0)
			}));
		}
		save() {
			return Z(this, void 0, void 0, function* () {
				gn.get(this).table("$logins").put(this);
			});
		}
	};
	function wn(e, t) {
		return firstValueFrom(from$1(e).pipe(filter(t)));
	}
	function kn(e) {
		return Z(this, void 0, void 0, function* () {
			const t = yield Sn(e);
			if (t) {
				if (!(yield function(e, t, n) {
					return Z(this, void 0, void 0, function* () {
						return yield st(e, {
							type: "logout-confirmation",
							title: "Confirm Logout",
							alerts: [{
								type: "warning",
								messageCode: "LOGOUT_CONFIRMATION",
								message: "{numUnsyncedChanges} unsynced changes will get lost!\n                Logout anyway?",
								messageParams: {
									currentUserId: t,
									numUnsyncedChanges: n.toString()
								}
							}],
							fields: {},
							submitLabel: "Confirm logout",
							cancelLabel: "Cancel"
						}).then(() => !0).catch(() => !1);
					});
				}(e.cloud.userInteraction, e.cloud.currentUserId, t))) throw new Error("User cancelled logout due to unsynced changes");
				yield Sn(e, { deleteUnsyncedData: !0 });
			}
		});
	}
	function Sn(e) {
		return Z(this, arguments, void 0, function* (e, { deleteUnsyncedData: t = !1 } = {}) {
			const [n, r] = yield e.dx.transaction("rw", e.dx.tables, (n) => Z(this, void 0, void 0, function* () {
				const r = n.idbtrans;
				r.disableChangeTracking = !0, r.disableAccessControl = !0;
				const o = n.storeNames.filter((e) => e.endsWith("_mutations")), i = (yield Promise.all(o.map((e) => n.table(e).count()))).reduce((e, t) => e + t, 0);
				if (i > 0 && !t) return [i, !1];
				e.$syncState.delete("syncState");
				for (const t of e.dx.tables) "$jobs" !== t.name && "$syncState" !== t.name && t.clear();
				return [i, !0];
			}));
			return r && (yield wn(e.cloud.currentUser, (e) => e.userId === re.userId), yield e.cloud.sync({
				purpose: "pull",
				wait: !0
			})), n;
		});
	}
	var xn = {
		access_denied: "Access was denied by the authentication provider.",
		invalid_state: "The authentication response could not be verified. Please try again.",
		email_not_verified: "Your email address must be verified before you can log in.",
		expired_code: "The authentication code has expired. Please try again.",
		provider_error: "An error occurred with the authentication provider.",
		network_error: "A network error occurred during authentication. Please check your connection and try again."
	};
	var On = class extends Error {
		constructor(e, t, n) {
			super(n || xn[e]), this.name = "OAuthError", this.code = e, this.provider = t;
		}
		get userMessage() {
			return xn[this.code] || this.message;
		}
	};
	var In = {
		providers: [],
		otpEnabled: !0
	};
	function An(e) {
		return Z(this, arguments, void 0, function* (e, t = !0) {
			if (!t) return In;
			try {
				const t = yield fetch(`${e}/auth-providers`, {
					method: "GET",
					headers: { Accept: "application/json" },
					mode: "cors"
				});
				return 404 === t.status ? In : t.ok ? yield t.json() : In;
			} catch (e) {
				return In;
			}
		});
	}
	function jn(e) {
		if ("undefined" == typeof window) throw new Error("OAuth redirect requires a browser environment");
		const t = function(e) {
			const t = new URL(`${e.databaseUrl}/oauth/login/${e.provider}`), n = e.redirectUri || ("undefined" != typeof window ? window.location.href : "");
			return n && t.searchParams.set("redirect_uri", n), t.toString();
		}(e);
		window.location.href = t;
	}
	function Cn(t) {
		const { userInteraction: n } = t.cloud;
		function r(o, i) {
			return Z(this, arguments, void 0, function* ({ public_key: o, hints: i }, s) {
				var a, c;
				let l;
				const u = null === (a = t.cloud.options) || void 0 === a ? void 0 : a.databaseUrl;
				if (!u) throw new Error("No database URL given.");
				const d = null == i ? void 0 : i.intent;
				if ((null == i ? void 0 : i.oauthCode) && i.provider) try {
					return yield function(e) {
						return Z(this, void 0, void 0, function* () {
							const { databaseUrl: t, code: n, publicKey: r, scopes: o = ["ACCESS_DB"], intent: i } = e, s = Object.assign({
								grant_type: "authorization_code",
								code: n,
								public_key: r,
								scopes: o
							}, void 0 !== i ? { intent: i } : {});
							try {
								const e = yield fetch(`${t}/token`, {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify(s),
									mode: "cors"
								});
								if (!e.ok) {
									const t = yield e.text().catch(() => e.statusText);
									if (403 === e.status) try {
										const e = JSON.parse(t);
										if (ft(e)) throw new dt(e);
									} catch (e) {
										if (e instanceof dt) throw e;
									}
									if (400 === e.status || 401 === e.status) try {
										const e = JSON.parse(t);
										if ("error" === e.type) {
											if ("INVALID_OTP" === e.messageCode) throw new On("expired_code", void 0, e.message);
											throw new rt(e);
										}
									} catch (e) {
										if (e instanceof On || e instanceof rt) throw e;
									}
									throw new On("provider_error", void 0, `Token exchange failed: ${e.status} ${t}`);
								}
								const n = yield e.json();
								if ("error" === n.type) throw new rt(n);
								if ("tokens" !== n.type) throw new On("provider_error", void 0, `Unexpected response type: ${n.type}`);
								return n;
							} catch (e) {
								if (e instanceof On || e instanceof rt) throw e;
								if (e instanceof TypeError) throw new On("network_error");
								throw e;
							}
						});
					}({
						databaseUrl: u,
						code: i.oauthCode,
						publicKey: o,
						scopes: ["ACCESS_DB"],
						intent: d
					});
				} catch (e) {
					if (e instanceof dt) return yield r({
						public_key: o,
						hints: void 0
					}, Tn(e));
					throw e;
				}
				if (null == i ? void 0 : i.provider) {
					if (s) return yield r({
						public_key: o,
						hints: void 0
					}, s);
					let e;
					throw i.redirectPath && (/^https?:\/\//i.test(i.redirectPath) ? e = i.redirectPath : "undefined" != typeof window && window.location ? e = new URL(i.redirectPath, window.location.href).toString() : "undefined" != typeof location && location.href && (e = new URL(i.redirectPath, location.href).toString())), En(t, i.provider, e), new ut(i.provider);
				}
				if ("demo" === (null == i ? void 0 : i.grant_type)) l = {
					demo_user: yield ct(n, "Enter a demo user email", (null == i ? void 0 : i.email) || (null == i ? void 0 : i.userId), s),
					grant_type: "demo",
					scopes: ["ACCESS_DB"],
					public_key: o
				};
				else if ((null == i ? void 0 : i.otpId) && i.otp) {
					if (s) return yield at(n, "Access Denied", s), yield r({
						public_key: o,
						hints: void 0
					}, s);
					l = {
						grant_type: "otp",
						otp_id: i.otpId,
						otp: i.otp,
						scopes: ["ACCESS_DB"],
						public_key: o
					};
				} else if ("otp" === (null == i ? void 0 : i.grant_type) || (null == i ? void 0 : i.email)) {
					const e = (null == i ? void 0 : i.email) || (yield ct(n, "Enter email address", void 0, s));
					l = /@demo.local$/.test(e) ? {
						demo_user: e,
						grant_type: "demo",
						scopes: ["ACCESS_DB"],
						public_key: o
					} : Object.assign({
						email: e,
						grant_type: "otp",
						scopes: ["ACCESS_DB"]
					}, void 0 !== d ? { intent: d } : {});
				} else {
					const a = yield An(u, !1 !== (null === (c = t.cloud.options) || void 0 === c ? void 0 : c.socialAuth));
					if (a.providers.length > 0) {
						const r = s ? [s] : [], o = yield function(t, n, r) {
							return Z(this, arguments, void 0, function* (t, n, r, o = "Choose login method", i = []) {
								const s = [...n.map(it)];
								return r && s.push({
									name: "otp",
									value: "email",
									displayName: "Continue with email",
									iconUrl: ot,
									styleHint: "otp"
								}), new Promise((n, r) => {
									const a = {
										type: "generic",
										title: o,
										alerts: i,
										options: s,
										fields: {},
										submitLabel: "",
										cancelLabel: "Cancel",
										onSubmit: (e) => {
											t.next(void 0), n("otp" in e ? { type: "otp" } : "provider" in e ? {
												type: "provider",
												provider: e.provider
											} : { type: "otp" });
										},
										onCancel: () => {
											t.next(void 0), r(new Dexie.AbortError("User cancelled"));
										}
									};
									t.next(a);
								});
							});
						}(n, a.providers, a.otpEnabled, "Sign in", r);
						if ("provider" === o.type) throw En(t, o.provider), new ut(o.provider);
					}
					const f = yield ct(n, "Enter email address", null == i ? void 0 : i.email, 0 === a.providers.length ? s : void 0);
					l = /@demo.local$/.test(f) ? {
						demo_user: f,
						grant_type: "demo",
						scopes: ["ACCESS_DB"],
						public_key: o
					} : Object.assign({
						email: f,
						grant_type: "otp",
						scopes: ["ACCESS_DB"]
					}, void 0 !== d ? { intent: d } : {});
				}
				const f = yield fetch(`${u}/token`, {
					body: JSON.stringify(l),
					method: "post",
					headers: { "Content-Type": "application/json" },
					mode: "cors"
				});
				if (200 !== f.status) {
					const e = yield Pn(f);
					if (e) return yield r({
						public_key: o,
						hints: void 0
					}, e);
					const t = yield f.text();
					throw yield at(n, "Token request failed", {
						type: "error",
						messageCode: "GENERIC_ERROR",
						message: t,
						messageParams: {}
					}).catch(() => {}), new kt(f, t);
				}
				const p = yield f.json();
				if ("tokens" === p.type || "error" === p.type) return p;
				if ("otp" === l.grant_type && "email" in l) {
					if ("otp-sent" !== p.type) throw new Error(`Unexpected response from ${u}/token`);
					const e = yield lt(n, l.email), t = Object.assign(Object.assign({}, l), {
						otp: e || "",
						otp_id: p.otp_id,
						public_key: o
					});
					let i = yield fetch(`${u}/token`, {
						body: JSON.stringify(t),
						method: "post",
						headers: { "Content-Type": "application/json" },
						mode: "cors"
					});
					for (; 401 === i.status;) {
						const e = yield i.text();
						t.otp = yield lt(n, l.email, {
							type: "error",
							messageCode: "INVALID_OTP",
							message: e,
							messageParams: {}
						}), i = yield fetch(`${u}/token`, {
							body: JSON.stringify(t),
							method: "post",
							headers: { "Content-Type": "application/json" },
							mode: "cors"
						});
					}
					if (200 !== i.status) {
						const e = yield Pn(i);
						if (e) return yield r({
							public_key: o,
							hints: void 0
						}, e);
						const t = yield i.text();
						throw new kt(i, t);
					}
					return yield i.json();
				}
				throw new Error(`Unexpected response from ${u}/token`);
			});
		}
		return ({ public_key: e, hints: t }) => r({
			public_key: e,
			hints: t
		});
	}
	function En(e, t, n) {
		var r, o;
		const i = null === (r = e.cloud.options) || void 0 === r ? void 0 : r.databaseUrl;
		if (!i) throw new Error("No database URL given.");
		jn({
			databaseUrl: i,
			provider: t,
			redirectUri: n || (null === (o = e.cloud.options) || void 0 === o ? void 0 : o.oauthRedirectUri) || ("undefined" != typeof location ? location.href : void 0)
		});
	}
	function Tn(e) {
		return {
			type: "error",
			messageCode: e.code,
			message: e.message,
			messageParams: {}
		};
	}
	function Pn(e) {
		return Z(this, void 0, void 0, function* () {
			if (403 !== e.status) return null;
			try {
				const t = yield e.clone().json();
				if (ft(t)) return Tn(new dt(t));
			} catch (e) {}
			return null;
		});
	}
	function Un(e, ...t) {
		globalThis.console[e](...t);
	}
	function $n(e, t) {
		return Z(this, void 0, void 0, function* () {
			var n;
			const r = yield e.getCurrentUser(), o = r.userId;
			if (r.isLoggedIn && (!t || !t.email && !t.userId)) {
				if ("ok" === ((null === (n = r.license) || void 0 === n ? void 0 : n.status) || "ok") && r.accessToken && (!r.accessTokenExpiration || r.accessTokenExpiration.getTime() > Date.now())) return !1;
				if (r.refreshToken && (!r.refreshTokenExpiration || r.refreshTokenExpiration.getTime() > Date.now())) try {
					return yield yt(e), !1;
				} catch (e) {
					if ("OAuthRedirectError" === (null == e ? void 0 : e.name)) throw e;
				}
			}
			const i = new _n(e, {
				claims: {},
				lastLogin: /* @__PURE__ */ new Date(0)
			});
			try {
				yield ht(e.cloud.options.databaseUrl, i, e.cloud.options.fetchTokens || Cn(e), e.cloud.userInteraction, t);
			} catch (e) {
				if ("OAuthRedirectError" === e.name) return !1;
				throw e;
			}
			return o !== re.userId && i.userId !== o && (yield kn(e)), yield function(e, t) {
				return Z(this, void 0, void 0, function* () {
					const n = e.table("$logins");
					yield e.transaction("rw", n, (e) => Z(this, void 0, void 0, function* () {
						const e = yield n.toArray();
						yield Promise.all(e.filter((e) => e.userId !== t.userId && e.isLoggedIn).map((e) => (e.isLoggedIn = !1, n.put(e)))), t.isLoggedIn = !0, t.lastLogin = /* @__PURE__ */ new Date();
						try {
							yield t.save();
						} catch (e) {
							try {
								"DataCloneError" === e.name && (Un("debug", "Login context property names:", Object.keys(t)), Un("debug", "Login context property names:", Object.keys(t)), Un("debug", "Login context:", t), Un("debug", "Login context JSON:", JSON.stringify(t)));
							} catch (e) {}
							throw e;
						}
					})), yield wn(e.cloud.currentUser, (e) => e.userId === t.userId);
				});
			}(e, i), de(e, "pull"), i.userId !== o;
		});
	}
	var Rn = "undefined" != typeof InstallTrigger;
	var Ln = "undefined" != typeof navigator && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\/|Edge\//.test(navigator.userAgent);
	var Bn = Ln ? [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] : NaN;
	var Dn = Ln && Bn <= 605 || Rn;
	var Nn = "undefined" != typeof self && "clients" in self && !self.document;
	var { toString: Fn } = {};
	function Mn(e) {
		return Fn.call(e).slice(8, -1);
	}
	function Wn(e, t) {
		var n;
		return "delete" === t.type ? t.keys : (null === (n = t.keys) || void 0 === n ? void 0 : n.slice()) || t.values.map(e.extractKey);
	}
	function Kn(e, t) {
		return (1 & t ? e[0].toUpperCase() : e[0].toLowerCase()) + (2 & t ? e[1].toUpperCase() : e[1].toLowerCase()) + (4 & t ? e[2].toUpperCase() : e[2].toLowerCase());
	}
	var zn = /b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|y|z/i;
	function Hn(e) {
		return e >= "A" && e <= "Z";
	}
	var Vn = 0;
	function qn(e, t) {
		const n = /* @__PURE__ */ new Uint8Array(18), r = new Uint8Array(n.buffer, 0, 6), o = Date.now();
		Vn >= o ? ++Vn : Vn = o, r[0] = Vn / 1099511627776, r[1] = Vn / 4294967296, r[2] = Vn / 16777216, r[3] = Vn / 65536, r[4] = Vn / 256, r[5] = Vn;
		const i = new Uint8Array(n.buffer, 6);
		crypto.getRandomValues(i);
		return e + Ce(new Uint8Array(n.buffer)) + (t || "");
	}
	function Jn(t) {
		return {
			stack: "dbcore",
			name: "idGenerationMiddleware",
			level: 1,
			create: (n) => Object.assign(Object.assign({}, n), { table: (r) => {
				const o = n.table(r);
				return Object.assign(Object.assign({}, o), { mutate: (n) => {
					var i, s;
					const a = n.trans;
					if ("versionchange" === a.mode && (a.disableChangeTracking = !0, a.disableAccessControl = !0), a.disableChangeTracking) return o.mutate(n);
					if ("add" === n.type || "put" === n.type) {
						const a = null === (i = t.cloud.schema) || void 0 === i ? void 0 : i[r];
						if (null == a ? void 0 : a.generatedGlobalId) {
							if ((null === (s = t.cloud.options) || void 0 === s ? void 0 : s.databaseUrl) && !t.initiallySynced) {
								const e = Wn(o.schema.primaryKey, n);
								return o.getMany({
									keys: e,
									trans: n.trans,
									cache: "immutable"
								}).then((t) => {
									if (t.length < e.length) throw new Error("Unable to create new objects without an initial sync having been performed.");
									return o.mutate(n);
								});
							}
							return function(n, i) {
								let s = null;
								const a = Wn(o.schema.primaryKey, n);
								return a.forEach((c, l) => {
									if (void 0 === c) {
										const r = n.values[l].realmId || t.cloud.currentUserId, c = r.substr(r.length - 3);
										a[l] = qn(i, c), o.schema.primaryKey.outbound || (s || (s = n.values.slice()), s[l] = Dexie.deepClone(s[l]), Dexie.setByKeyPath(s[l], o.schema.primaryKey.keyPath, a[l]));
									} else if ("string" != typeof c || !c.startsWith(i) && !c.startsWith("#" + i)) throw new Dexie.ConstraintError(`The ID "${c}" is not valid for table "${r}". Primary '@' keys requires the key to be prefixed with "${i}" (or "#${i}).\nIf you want to generate IDs programmatically, remove '@' from the schema to get rid of this constraint. Dexie Cloud supports custom IDs as long as they are random and globally unique.`);
								}), o.mutate(Object.assign(Object.assign({}, n), {
									keys: a,
									values: s || n.values
								}));
							}(n, a.idPrefix);
						}
						if (null == a ? void 0 : a.markedForSync) Wn(o.schema.primaryKey, n).forEach((t, n) => {
							if (!ze(t)) {
								const n = Array.isArray(t) ? t.map(Mn).join(",") : Mn(t);
								throw new Dexie.ConstraintError(`Invalid primary key type ${n} for table ${r}. Tables marked for sync has primary keys of type string or Array of string (and optional numbers)`);
							}
						});
					}
					return o.mutate(n);
				} });
			} })
		};
	}
	var Gn = 0;
	function Yn(e, t) {
		return function(n) {
			const { readers: r, writers: o } = n.trans[t] || (n.trans[t] = {
				writers: [],
				readers: []
			}), i = o.length, s = (i > 0 ? o[i - 1].then(() => e(n), () => e(n)) : e(n)).finally(() => {
				r.splice(r.indexOf(s));
			});
			return r.push(s), s;
		};
	}
	function Qn(e, t) {
		return function(n) {
			const { readers: r, writers: o } = n.trans[t] || (n.trans[t] = {
				writers: [],
				readers: []
			});
			let i = (o.length > 0 ? o[o.length - 1].then(() => e(n), () => e(n)) : r.length > 0 ? (s = r, new Promise((e) => {
				0 === s.length && e([]);
				let t = s.length;
				const n = new Array(t);
				s.forEach((r, o) => Promise.resolve(r).then((e) => n[o] = {
					status: "fulfilled",
					value: e
				}, (e) => n[o] = {
					status: "rejected",
					reason: e
				}).then(() => --t || e(n)));
			})).then(() => e(n)) : e(n)).finally(() => {
				o.shift();
			});
			var s;
			return o.push(i), i;
		};
	}
	var Zn = new BehaviorSubject(/* @__PURE__ */ new Set());
	function Xn(e) {
		var t, n, r, o;
		return (null === (t = e.cloud.options) || void 0 === t ? void 0 : t.disableEagerSync) || "ok" !== (null === (r = null === (n = e.cloud.currentUser.value) || void 0 === n ? void 0 : n.license) || void 0 === r ? void 0 : r.status) || !(null === (o = e.cloud.options) || void 0 === o ? void 0 : o.databaseUrl);
	}
	function er({ currentUserObservable: e, db: t }) {
		return {
			stack: "dbcore",
			name: "MutationTrackingMiddleware",
			level: 1,
			create: (n) => {
				const r = new Set(n.schema.tables.map((e) => e.name)), i = n.schema.tables.filter((e) => !/^\$/.test(e.name)), s = /* @__PURE__ */ new Map();
				for (const e of i) {
					const t = `$${e.name}_mutations`;
					r.has(t) && s.set(e.name, n.table(t));
				}
				return Object.assign(Object.assign({}, n), {
					transaction: (r, o) => {
						let i;
						if ("readwrite" === o) {
							const e = r.filter((e) => {
								var n, r;
								return null === (r = null === (n = t.cloud.schema) || void 0 === n ? void 0 : n[e]) || void 0 === r ? void 0 : r.markedForSync;
							}).map((e) => Qe(e));
							i = n.transaction([...r, ...e], o);
						} else i = n.transaction(r, o);
						if ("readwrite" === o) {
							i.txid = nt(16), i.opCount = 0, i.currentUser = e.value, Zn.value.add(i), Zn.next(Zn.value);
							const n = () => {
								i.removeEventListener("complete", r), i.removeEventListener("error", n), i.removeEventListener("abort", n), Zn.value.delete(i), Zn.next(Zn.value);
							}, r = () => {
								i.mutationsAdded && !Xn(t) && de(t, "push"), n();
							};
							i.addEventListener("complete", r), i.addEventListener("error", n), i.addEventListener("abort", n);
						}
						return i;
					},
					table: (e) => {
						const r = n.table(e);
						if (/^\$/.test(e)) return e.endsWith("_mutations") ? Object.assign(Object.assign({}, r), { mutate: (e) => ("add" !== e.type && "put" !== e.type || (e.trans.mutationsAdded = !0), r.mutate(e)) }) : "$logins" === e ? Object.assign(Object.assign({}, r), { mutate: (e) => r.mutate(e).then((t) => (e.trans.mutationsAdded = !0, t)).catch((e) => Promise.reject(e)) }) : r;
						const { schema: i } = r, a = s.get(e);
						return a ? function(e) {
							const t = "$lock" + ++Gn;
							return Object.assign(Object.assign({}, e), {
								count: Yn(e.count, t),
								get: Yn(e.get, t),
								getMany: Yn(e.getMany, t),
								openCursor: Yn(e.openCursor, t),
								query: Yn(e.query, t),
								mutate: Qn(e.mutate, t)
							});
						}(Object.assign(Object.assign({}, r), { mutate: (n) => {
							var o, s, a;
							const l = n.trans;
							return l.txid ? l.disableChangeTracking ? r.mutate(n) : (null === (s = null === (o = t.cloud.schema) || void 0 === o ? void 0 : o[e]) || void 0 === s ? void 0 : s.markedForSync) && (null === (a = l.currentUser) || void 0 === a ? void 0 : a.isLoggedIn) ? "deleteRange" === n.type ? r.query({
								query: {
									range: n.range,
									index: i.primaryKey
								},
								trans: n.trans,
								values: !1
							}).then((e) => c({
								type: "delete",
								keys: e.result,
								trans: n.trans,
								criteria: {
									index: null,
									range: n.range
								}
							})) : c(n) : r.mutate(n) : r.mutate(n);
						} })) : r;
						function c(n) {
							var s, c;
							const l = n.trans, u = null === (c = null === (s = t.cloud.options) || void 0 === s ? void 0 : s.unsyncedProperties) || void 0 === c ? void 0 : c[e], { txid: d, currentUser: { userId: f } } = l, { type: p } = n, y = ++l.opCount;
							function h(e) {
								if (!u) return e;
								let t = e;
								for (const n of Object.keys(e)) u.some((e) => n === e || n.startsWith(e + ".")) && (t === e && (t = Object.assign({}, e)), delete t[n]);
								return t;
							}
							return r.mutate(n).then((e) => {
								var t;
								const { numFailures: r, failures: s } = e;
								let c = "delete" === p ? n.keys : e.results, v = "values" in n ? n.values : [], m = "changeSpec" in n ? n.changeSpec : void 0, b = "updates" in n ? n.updates : void 0, g = !(!b || !("upsert" in n)) && n.upsert;
								if (r && (c = c.filter((e, t) => !s[t]), v = v.filter((e, t) => !s[t])), u) {
									if (v = v.map((e) => {
										const t = Object.assign({}, e);
										for (const e of u) delete t[e];
										return t;
									}), m && (m = h(m), 0 === Object.keys(m).length)) return e;
									if (b) {
										let e = b.changeSpecs.map(h), t = {
											keys: [],
											changeSpecs: []
										};
										const n = new RangeSet();
										let r = !1;
										if (!g) {
											for (let o = 0, i = e.length; o < i; ++o) Object.keys(e[o]).length > 0 ? (t.keys.push(b.keys[o]), t.changeSpecs.push(e[o]), n.addKey(b.keys[o])) : r = !0;
											if (b = t, r) {
												let e = [], t = [];
												for (let r = 0, o = c.length; r < o; ++r) n.hasKey(c[r]) && (e.push(c[r]), t.push(v[r]));
												c = e, v = t;
											}
										}
									}
								}
								const _ = Date.now();
								let w = "criteria" in n && n.criteria ? Object.assign(Object.assign({}, n.criteria), { index: n.criteria.index === i.primaryKey.keyPath ? null : n.criteria.index }) : void 0;
								if (u && (null == w ? void 0 : w.index)) {
									const e = null === (t = i.indexes.find((e) => e.name === w.index)) || void 0 === t ? void 0 : t.keyPath;
									(e ? "string" == typeof e ? [e] : e : []).some((e) => null == u ? void 0 : u.includes(e)) && (w = void 0);
								}
								const k = "delete" === n.type ? {
									type: "delete",
									ts: _,
									opNo: y,
									keys: c,
									criteria: w,
									txid: d,
									userId: f
								} : "add" === n.type ? {
									type: "insert",
									ts: _,
									opNo: y,
									keys: c,
									txid: d,
									userId: f,
									values: v
								} : g && b ? {
									type: "upsert",
									ts: _,
									opNo: y,
									keys: c,
									values: v,
									changeSpecs: b.changeSpecs.filter((e, t) => !s[t]),
									txid: d,
									userId: f
								} : w && m ? {
									type: "modify",
									ts: _,
									opNo: y,
									keys: c,
									criteria: w,
									changeSpec: m,
									txid: d,
									userId: f
								} : m ? {
									type: "update",
									ts: _,
									opNo: y,
									keys: c,
									changeSpecs: c.map(() => m),
									txid: d,
									userId: f
								} : b ? {
									type: "update",
									ts: _,
									opNo: y,
									keys: b.keys,
									changeSpecs: b.changeSpecs,
									txid: d,
									userId: f
								} : {
									type: "upsert",
									ts: _,
									opNo: y,
									keys: c,
									values: v,
									txid: d,
									userId: f
								};
								return "isAdditionalChunk" in n && n.isAdditionalChunk && (k.isAdditionalChunk = !0), c.length > 0 || w ? a.mutate({
									type: "add",
									trans: l,
									values: [k]
								}).then(() => (l.mutationsAdded = !0, e)) : e;
							});
						}
					}
				});
			}
		};
	}
	function tr(t) {
		return {
			stack: "dbcore",
			name: "blobResolve",
			level: 2,
			create: (n) => Object.assign(Object.assign({}, n), { table(r) {
				var o;
				if (!t.cloud) return n.table(r);
				const i = null === (o = t.cloud.options) || void 0 === o ? void 0 : o.databaseUrl, s = n.table(r);
				return r.startsWith("$") ? s : Object.assign(Object.assign({}, s), {
					get(e) {
						var n;
						return (null === (n = e.trans) || void 0 === n ? void 0 : n.disableBlobResolve) ? s.get(e) : s.get(e).then((n) => n && Lt(n) ? nr(s, e.trans, e.key, n, t) : n);
					},
					getMany(n) {
						var r;
						return (null === (r = n.trans) || void 0 === r ? void 0 : r.disableBlobResolve) ? s.getMany(n) : s.getMany(n).then((r) => {
							return r.some((e) => e && Lt(e)) ? Dexie.Promise.all(r.map((e, r) => e && Lt(e) ? nr(s, n.trans, n.keys[r], e, t) : e)) : r;
						});
					},
					query(n) {
						var r;
						return (null === (r = n.trans) || void 0 === r ? void 0 : r.disableBlobResolve) ? s.query(n) : s.query(n).then((r) => {
							if (!r.result || !Array.isArray(r.result)) return r;
							return r.result.some((e) => e && Lt(e)) ? Dexie.Promise.all(r.result.map((e) => e && Lt(e) ? nr(s, n.trans, void 0, e, t) : e)).then((e) => Object.assign(Object.assign({}, r), { result: e })) : r;
						});
					},
					openCursor(e) {
						var n;
						return (null === (n = e.trans) || void 0 === n ? void 0 : n.disableBlobResolve) ? s.openCursor(e) : s.openCursor(e).then((n) => n && e.values && i ? function(e, t, n) {
							const r = Object.create(e, {
								key: {
									get: () => e.key,
									configurable: !0
								},
								primaryKey: {
									get: () => e.primaryKey,
									configurable: !0
								},
								value: {
									value: e.value,
									enumerable: !0,
									writable: !0
								},
								start: { value: (o) => e.start(() => {
									const i = e.value;
									if (!i || !Lt(i)) return r.value = i, void o();
									nr(t, e.trans, e.primaryKey, i, n, !0).then((e) => {
										r.value = e, o();
									}, (e) => {
										r.value = i, o();
									});
								}) }
							});
							return r;
						}(n, s, t) : n);
					}
				});
			} })
		};
	}
	function nr(t, n, r, o, i, s = !1) {
		var a;
		try {
			const n = Dexie.currentTransaction, c = "readonly" === (null == n ? void 0 : n.mode), l = !0 === (null == n ? void 0 : n.explicit), u = n && !(c && !l && !s), d = (null === (a = i.cloud.options) || void 0 === a ? void 0 : a.databaseUrl) || "", f = [], p = Rt(o, d, f, "", /* @__PURE__ */ new WeakMap(), i.blobDownloadTracker);
			return (u ? Dexie.waitFor(p) : Dexie.Promise.resolve(p)).then((n) => {
				const s = t.schema.primaryKey, a = void 0 !== r ? r : s.keyPath ? Dexie.getByKeyPath(o, s.keyPath) : void 0;
				return void 0 !== a ? i.blobDownloadTracker.enqueueSave(t.name, a, f) : f.length > 0 && i.blobDownloadTracker.releaseRefs(f.map((e) => e.ref)), n;
			}).catch((e) => o);
		} catch (t) {
			return Dexie.Promise.resolve(o);
		}
	}
	function rr(e, t) {
		return function(n, r) {
			var o;
			const i = Object.assign(Object.assign({}, fn), n);
			Object.keys(fn).forEach((e) => {
				const t = i[e];
				if (null == t) throw new Error(`Cannot delete table ${e} as it is needed for access control of Dexie Cloud`);
				if (!n[e]) return;
				const r = t.split(",").map((e) => e.trim()), o = fn[e].split(",").map((e) => e.trim()), s = new Set(r.map((e) => e.replace(/([&*]|\+\+)/g, "")));
				if (r[0] !== o[0]) throw new Error(`Cannot override primary key of table ${e}. Please declare it as {${e}: ${JSON.stringify(fn[e])}`);
				for (let t = 1; t < o.length; ++t) {
					const n = o[t];
					s.has(n.replace(/([&*]|\+\+)/g, "")) || (i[e] += `,${n}`);
				}
			});
			const s = t.cloud.schema || (t.cloud.schema = {}), a = /* @__PURE__ */ new Set();
			Object.keys(i).forEach((e) => {
				var t;
				const n = null === (t = i[e]) || void 0 === t ? void 0 : t.trim(), r = s[e] || (s[e] = {});
				null != n ? (/^\@/.test(n) && (i[e] = i[e].substr(1), r.generatedGlobalId = !0, r.idPrefix = function(e, t) {
					let n = e[0].toLocaleLowerCase();
					for (let t = 1, r = e.length; t < r && n.length < 3; ++t) (zn.test(e[t]) || Hn(e[t])) && (n += e[t].toLowerCase());
					for (; t.has(n);) {
						if (/\d/g.test(n)) {
							if (n = n.substr(0, n.length - 1) + (n[n.length - 1] + 1), !(n.length > 3)) continue;
							n = n.substr(0, 3);
						} else if (n.length < 3) {
							n += "2";
							continue;
						}
						let e = 1, r = n;
						for (; t.has(r) && e < 8;) r = Kn(n, e), ++e;
						if (e < 8) n = r;
						else {
							let e = n.charCodeAt(2) + 1 & 127;
							n = n.substr(0, 2) + String.fromCharCode(e);
						}
					}
					return n;
				}(e, a), a.add(r.idPrefix)), /^\$/.test(e) || (i[`$${e}_mutations`] = "++rev", r.markedForSync = !0, i[e].includes("_hasBlobRefs") || (i[e] += ",_hasBlobRefs")), r.deleted && (r.deleted = !1)) : (r.deleted = !0, r.markedForSync = !1, i[`$${e}_mutations`] = null);
			});
			const c = e.call(this, i, r);
			for (const [e, t] of Object.entries(r)) if (null === (o = t.yProps) || void 0 === o ? void 0 : o.length) {
				const n = s[e];
				n && (n.yProps = t.yProps.map((e) => e.prop));
			}
			return c;
		};
	}
	function or(e, t, n) {
		return "undefined" != typeof navigator && navigator.locks ? navigator.locks.request(e.name + "|" + t, n) : n();
	}
	var ir = new BehaviorSubject(!0);
	var sr = new BehaviorSubject(!0);
	ir.pipe(switchMap((e) => e ? of(!0) : of(!1).pipe(delay(2e4))), distinctUntilChanged()).subscribe(sr);
	var ar = "undefined" != typeof document ? fromEvent(document, "visibilitychange") : of({});
	var cr = ar.pipe(filter(() => "hidden" === document.visibilityState));
	var lr = ar.pipe(filter(() => "visible" === document.visibilityState));
	var ur = "undefined" != typeof window ? merge(lr, fromEvent(window, "mousedown"), fromEvent(window, "mousemove"), fromEvent(window, "keydown"), fromEvent(window, "wheel"), fromEvent(window, "touchmove")) : of({});
	"undefined" != typeof document && merge(of(!0), cr, ur).pipe(map$1(() => "visible" === document.visibilityState), tap((e) => {
		ir.value !== e && ir.next(e);
	}), switchMap((e) => e ? of(0).pipe(delay(16e4), tap(() => ir.next(!1))) : of(0))).subscribe(() => {});
	var dr = class extends Error {
		constructor() {
			super(...arguments), this.name = "TokenExpiredError";
		}
	};
	var fr = /* @__PURE__ */ new WeakMap();
	var pr = /* @__PURE__ */ new WeakMap();
	function yr(e) {
		let t = pr.get(e);
		return t || (t = new Subject(), pr.set(e, t)), t;
	}
	var hr = class extends Observable$1 {
		constructor(e, t, n, r, o, i, s, a) {
			super((c) => new mr(e, t, n, r, o, a, c, i, s));
		}
	};
	var vr = 0;
	var mr = class extends Subscription {
		constructor(e, t, n, r, o, i, s, a, c) {
			super(() => this.teardown()), this.id = ++vr, this.subscriptions = /* @__PURE__ */ new Set(), this.reconnecting = !1, this.db = e, this.databaseUrl = e.cloud.options.databaseUrl, this.rev = t, this.yrev = n, this.realmSetHash = r, this.clientIdentity = o, this.user = i, this.subscriber = s, this.lastUserActivity = /* @__PURE__ */ new Date(), this.messageProducer = a, this.webSocketStatus = c, this.connect();
		}
		teardown() {
			this.disconnect();
		}
		disconnect() {
			if (this.webSocketStatus.next("disconnected"), this.pinger && (clearInterval(this.pinger), this.pinger = null), this.ws) try {
				this.ws.close();
			} catch (e) {}
			this.ws = null;
			for (const e of this.subscriptions) e.unsubscribe();
			this.subscriptions.clear();
		}
		reconnect() {
			if (!this.reconnecting) {
				this.reconnecting = !0;
				try {
					this.disconnect();
				} catch (e) {}
				this.connect().catch(() => {}).then(() => this.reconnecting = !1);
			}
		}
		connect() {
			return Z(this, void 0, void 0, function* () {
				if (this.lastServerActivity = /* @__PURE__ */ new Date(), this.pauseUntil && this.pauseUntil > /* @__PURE__ */ new Date()) return;
				if (this.ws) throw new Error("Called connect() when a connection is already open");
				if (!this.databaseUrl) throw new Error("Cannot connect without a database URL");
				if (this.closed) return;
				const e = this.user.accessTokenExpiration;
				if (e && e < /* @__PURE__ */ new Date()) return void this.subscriber.error(new dr());
				this.webSocketStatus.next("connecting"), this.pinger = setInterval(() => Z(this, void 0, void 0, function* () {
					if (this.closed) this.teardown();
					else if (this.ws) try {
						this.ws.send(JSON.stringify({ type: "ping" })), setTimeout(() => {
							this.pinger && (this.closed ? this.teardown() : this.lastServerActivity < /* @__PURE__ */ new Date(Date.now() - 2e4) && this.reconnect());
						}, 2e4);
					} catch (e) {
						this.reconnect();
					}
					else this.reconnect();
				}), 3e4);
				const t = new URL(this.databaseUrl);
				t.protocol = "http:" === t.protocol ? "ws" : "wss";
				const n = new URLSearchParams();
				if (this.subscriber.closed) return;
				n.set("v", "3"), this.rev && n.set("rev", this.rev), this.yrev && n.set("yrev", this.yrev), n.set("realmsHash", this.realmSetHash), n.set("clientId", this.clientIdentity), n.set("dxcv", this.db.cloud.version), this.user.accessToken && n.set("token", this.user.accessToken);
				const o = this.ws = new WebSocket(`${t}/changes?${n}`);
				o.binaryType = "arraybuffer", o.onclose = (e) => {
					this.pinger && this.reconnect();
				}, o.onmessage = (e) => {
					if (this.pinger) {
						this.lastServerActivity = /* @__PURE__ */ new Date();
						try {
							const t = "string" == typeof e.data ? wt.parse(e.data) : function(e) {
								const t = new Decoder(e), n = readVarString(t);
								if ("outdated-server-rev" === n) return { type: n };
								if ("y-complete-sync-done" === n) return {
									type: n,
									yServerRev: readVarString(t)
								};
								const r = readVarString(t), o = readVarString(t);
								switch (n) {
									case "u-ack":
									case "u-reject": return {
										type: n,
										table: r,
										prop: o,
										i: Number(readBigUint64(t))
									};
									default: {
										const e = readAny(t);
										switch (n) {
											case "in-sync":
											case "doc-close": return {
												type: n,
												table: r,
												prop: o,
												k: e
											};
											case "aware": return {
												type: n,
												table: r,
												prop: o,
												k: e,
												u: readVarUint8Array(t)
											};
											case "doc-open": return {
												type: n,
												table: r,
												prop: o,
												k: e,
												serverRev: readAny(t),
												sv: readAny(t)
											};
											case "sv": return {
												type: n,
												table: r,
												prop: o,
												k: e,
												sv: readVarUint8Array(t)
											};
											case "u-c": return {
												type: n,
												table: r,
												prop: o,
												k: e,
												u: readVarUint8Array(t),
												i: Number(readBigUint64(t))
											};
											case "u-s": return {
												type: n,
												table: r,
												prop: o,
												k: e,
												u: readVarUint8Array(t),
												r: t.pos < t.arr.length && readVarString(t) || void 0
											};
											default: throw new TypeError(`Unknown message type: ${n}`);
										}
									}
								}
							}(new Uint8Array(e.data));
							if ("error" === t.type) throw new Error(`Error message from dexie-cloud: ${t.error}`);
							if ("aware" === t.type) {
								const e = DexieYProvider.getDocCache(this.db.dx).find(t.table, t.k, t.prop);
								if (e) {
									const n = ((e) => fr.get(e))(e);
									n && applyAwarenessUpdate(n, t.u, "server");
								}
							} else if ("pong" === t.type);
							else if ("doc-open" === t.type) {
								const e = DexieYProvider.getDocCache(this.db.dx).find(t.table, t.k, t.prop);
								e && yr(e).next();
							} else "u-ack" === t.type || "u-reject" === t.type || "u-s" === t.type || "in-sync" === t.type || "outdated-server-rev" === t.type || "y-complete-sync-done" === t.type ? Wt([t], this.db).then((e) => Z(this, [e], void 0, function* ({ resyncNeeded: e, yServerRevision: n, receivedUntils: r }) {
								if (n && (yield this.db.$syncState.update("syncState", { yServerRevision: n })), "u-s" === t.type && r) {
									const e = Mt(this.db, t.table, t.prop);
									if (e) {
										const t = r[e.name];
										t && (yield e.update(Nt, { receivedUntil: t }));
									}
								}
								e && (yield this.db.cloud.sync({
									purpose: "pull",
									wait: !0
								}));
							})) : this.subscriber.next(t);
						} catch (e) {
							this.subscriber.error(e);
						}
					}
				};
				try {
					let e = !1;
					yield new Promise((t, n) => {
						o.onopen = (n) => {
							e = !0, t(null);
						}, o.onerror = (t) => {
							if (e) this.reconnect();
							else {
								const e = t.error || /* @__PURE__ */ new Error("WebSocket Error");
								this.subscriber.error(e), this.webSocketStatus.next("error"), n(e);
							}
						};
					}), this.subscriptions.add(this.messageProducer.subscribe((e) => {
						var t, n;
						this.closed || ("ready" === e.type && "connected" !== this.webSocketStatus.value && this.webSocketStatus.next("connected"), "ready" === e.type ? (this.rev = e.rev, null === (t = this.ws) || void 0 === t || t.send(wt.stringify(e))) : null === (n = this.ws) || void 0 === n || n.send(function(e) {
							const t = new Encoder();
							switch (writeVarString(t, e.type), "table" in e && writeVarString(t, e.table), "prop" in e && writeVarString(t, e.prop), e.type) {
								case "u-ack":
								case "u-reject":
									writeBigUint64(t, BigInt(e.i));
									break;
								case "outdated-server-rev": break;
								case "y-complete-sync-done":
									writeVarString(t, e.yServerRev);
									break;
								default: switch (writeAny(t, e.k), e.type) {
									case "aware":
										writeVarUint8Array(t, e.u);
										break;
									case "doc-open":
										writeAny(t, e.serverRev), writeAny(t, e.sv);
										break;
									case "doc-close": break;
									case "sv":
										writeVarUint8Array(t, e.sv);
										break;
									case "u-c":
										writeVarUint8Array(t, e.u), writeBigUint64(t, BigInt(e.i));
										break;
									case "u-s": writeVarUint8Array(t, e.u), writeVarString(t, e.r || "");
								}
							}
							return toUint8Array(t);
						}(e)));
					})), this.user.isLoggedIn && !Xn(this.db) && this.subscriptions.add(function(e) {
						return merge(...et(e.tables.filter((t) => {
							var n, r;
							return (null === (r = null === (n = e.cloud.schema) || void 0 === n ? void 0 : n[t.name]) || void 0 === r ? void 0 : r.markedForSync) && t.schema.yProps;
						}).map((e) => e.schema.yProps.map((t) => ({
							table: e.name,
							ydocProp: t.prop,
							updatesTable: t.updatesTable
						})))).map(({ table: t, ydocProp: n, updatesTable: o }) => {
							const i = e.table(o);
							return from$1(i.get(Nt)).pipe(switchMap((e) => {
								let o = (null == e ? void 0 : e.unsentFrom) || 1;
								return from$1(liveQuery(() => Z(this, void 0, void 0, function* () {
									return (yield Ft(i, o)).filter((e) => e.f && 1 & e.f).map((e) => ({
										type: "u-c",
										table: t,
										prop: n,
										k: e.k,
										u: e.u,
										i: e.i
									}));
								}))).pipe(tap((e) => {
									e.length > 0 && (o = e.at(-1).i + 1);
								}));
							}));
						})).pipe(mergeMap((e) => e));
					}(this.db).subscribe(this.db.messageProducer));
				} catch (e) {
					this.pauseUntil = new Date(Date.now() + 6e4);
				}
			});
		}
	};
	var br = class extends Error {
		constructor(e) {
			super("expired" === e ? "License expired" : "deactivated" === e ? "User deactivated" : "Invalid license"), this.name = "InvalidLicenseError", e && (this.license = e);
		}
	};
	function gr(e) {
		return Z(this, void 0, void 0, function* () {
			var e;
			yield (e = 3e3, new Promise((t) => setTimeout(t, e))), yield firstValueFrom(ur);
		});
	}
	function _r(e) {
		return Z(this, void 0, void 0, function* () {
			var t;
			return !(!(null === (t = e.cloud.options) || void 0 === t ? void 0 : t.databaseUrl) || !e.cloud.schema) && (yield on(e, e.cloud.options, e.cloud.schema, { justCheckIfNeeded: !0 }));
		});
	}
	var wr = /* @__PURE__ */ new WeakMap();
	function kr(e, t, n, r) {
		const o = wr.get(e);
		if (o) {
			if (o.pull || "push" === (null == r ? void 0 : r.purpose)) return o.promise;
			{
				let i = !1;
				const s = e.cloud.syncState.subscribe((e) => {
					"pulling" === e.phase && (i = !0);
				});
				return o.promise.then(() => {
					s.unsubscribe();
				}).catch((e) => (s.unsubscribe(), Promise.reject(e))).then(() => {
					if (!i) return kr(e, t, n, r);
				});
			}
		}
		const i = function() {
			return Z(this, void 0, void 0, function* () {
				try {
					yield It(e), yield or(e, rn, () => on(e, t, n, r)), wr.delete(e);
				} catch (t) {
					throw wr.delete(e), t;
				}
			});
		}();
		return wr.set(e, {
			promise: i,
			pull: "push" !== (null == r ? void 0 : r.purpose)
		}), i;
	}
	function Sr(e, t, n) {
		let r = null, o = { cancelled: !1 };
		function a(r = 1) {
			setTimeout(() => {
				const d = c ? "pull" : "push";
				c = !1, l = !1, kr(e, t, n, {
					cancelToken: o,
					retryImmediatelyOnFetchError: !0,
					purpose: d
				}).then(() => {
					if (o.cancelled) f();
					else if (c || l) return a();
					u = !1;
				}).catch((e) => {
					if (o.cancelled) f(), u = !1;
					else if (r < 5) {
						const e = [
							0,
							20,
							40,
							300,
							900
						][r] * pt;
						Date.now() + e, setTimeout(() => a(r + 1), e);
					} else u = !1;
				});
			}, 0);
		}
		let c = !1, l = !1, u = !1;
		const d = (e) => {
			o.cancelled || ("pull" === e && (c = !0), "push" === e && (l = !0), u || (u = !0, a()));
		}, f = () => {
			o.cancelled = !0, r && r.unsubscribe();
		};
		return {
			start: () => {
				r = e.localSyncEvent.subscribe(({ purpose: e }) => {
					d(e || "pull");
				});
			},
			stop: f
		};
	}
	function xr(e, t) {
		if (e && t && t.unsyncedTables) for (const n of t.unsyncedTables) e[n] && (e[n].markedForSync = !1);
	}
	var Or;
	var Ir;
	var Ar;
	var jr;
	var Cr;
	var Er;
	var Tr;
	var Pr;
	var Ur;
	var $r;
	var Rr;
	var Lr = {};
	var Br = [];
	var Dr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
	var Nr = Array.isArray;
	function Fr(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function Mr(e) {
		e && e.parentNode && e.parentNode.removeChild(e);
	}
	function Wr(e, t, n) {
		var r, o, i, s = {};
		for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
		if (arguments.length > 2 && (s.children = arguments.length > 3 ? Or.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps) for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
		return Kr(e, s, r, o, null);
	}
	function Kr(e, t, n, r, o) {
		var i = {
			type: e,
			props: t,
			key: n,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: null == o ? ++Ar : o,
			__i: -1,
			__u: 0
		};
		return null == o && null != Ir.vnode && Ir.vnode(i), i;
	}
	function zr(e) {
		return e.children;
	}
	function Hr(e, t) {
		this.props = e, this.context = t;
	}
	function Vr(e, t) {
		if (null == t) return e.__ ? Vr(e.__, e.__i + 1) : null;
		for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
		return "function" == typeof e.type ? Vr(e) : null;
	}
	function qr(e) {
		var t, n;
		if (null != (e = e.__) && null != e.__c) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
				e.__e = e.__c.base = n.__e;
				break;
			}
			return qr(e);
		}
	}
	function Jr(e) {
		(!e.__d && (e.__d = !0) && jr.push(e) && !Gr.__r++ || Cr != Ir.debounceRendering) && ((Cr = Ir.debounceRendering) || Er)(Gr);
	}
	function Gr() {
		for (var e, t, n, r, o, i, s, a = 1; jr.length;) jr.length > a && jr.sort(Tr), e = jr.shift(), a = jr.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], s = [], t.__P && ((n = Fr({}, r)).__v = r.__v + 1, Ir.vnode && Ir.vnode(n), no(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, null == o ? Vr(r) : o, !!(32 & r.__u), s), n.__v = r.__v, n.__.__k[n.__i] = n, oo(i, n, s), r.__e = r.__ = null, n.__e != o && qr(n)));
		Gr.__r = 0;
	}
	function Yr(e, t, n, r, o, i, s, a, c, l, u) {
		var d, f, p, y, h, v, m, b = r && r.__k || Br, g = t.length;
		for (c = function(e, t, n, r, o) {
			var i, s, a, c, l, u = n.length, d = u, f = 0;
			for (e.__k = new Array(o), i = 0; i < o; i++) null != (s = t[i]) && "boolean" != typeof s && "function" != typeof s ? ("string" == typeof s || "number" == typeof s || "bigint" == typeof s || s.constructor == String ? s = e.__k[i] = Kr(null, s, null, null, null) : Nr(s) ? s = e.__k[i] = Kr(zr, { children: s }, null, null, null) : null == s.constructor && s.__b > 0 ? s = e.__k[i] = Kr(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[i] = s, c = i + f, s.__ = e, s.__b = e.__b + 1, -1 != (l = s.__i = Zr(s, n, c, d)) && (d--, (a = n[l]) && (a.__u |= 2)), null == a || null == a.__v ? (-1 == l && (o > u ? f-- : o < u && f++), "function" != typeof s.type && (s.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, s.__u |= 4))) : e.__k[i] = null;
			if (d) for (i = 0; i < u; i++) null != (a = n[i]) && !(2 & a.__u) && (a.__e == r && (r = Vr(a)), co(a, a));
			return r;
		}(n, t, b, c, g), d = 0; d < g; d++) null != (p = n.__k[d]) && (f = -1 == p.__i ? Lr : b[p.__i] || Lr, p.__i = d, v = no(e, p, f, o, i, s, a, c, l, u), y = p.__e, p.ref && f.ref != p.ref && (f.ref && ao(f.ref, null, p), u.push(p.ref, p.__c || y, p)), null == h && null != y && (h = y), (m = !!(4 & p.__u)) || f.__k === p.__k ? c = Qr(p, c, e, m) : "function" == typeof p.type && void 0 !== v ? c = v : y && (c = y.nextSibling), p.__u &= -7);
		return n.__e = h, c;
	}
	function Qr(e, t, n, r) {
		var o, i;
		if ("function" == typeof e.type) {
			for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = Qr(o[i], t, n, r));
			return t;
		}
		e.__e != t && (r && (t && e.type && !t.parentNode && (t = Vr(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
		do
			t = t && t.nextSibling;
		while (null != t && 8 == t.nodeType);
		return t;
	}
	function Zr(e, t, n, r) {
		var o, i, s, a = e.key, c = e.type, l = t[n], u = null != l && !(2 & l.__u);
		if (null === l && null == a || u && a == l.key && c == l.type) return n;
		if (r > (u ? 1 : 0)) {
			for (o = n - 1, i = n + 1; o >= 0 || i < t.length;) if (null != (l = t[s = o >= 0 ? o-- : i++]) && !(2 & l.__u) && a == l.key && c == l.type) return s;
		}
		return -1;
	}
	function Xr(e, t, n) {
		"-" == t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || Dr.test(t) ? n : n + "px";
	}
	function eo(e, t, n, r, o) {
		var i, s;
		e: if ("style" == t) if ("string" == typeof n) e.style.cssText = n;
		else {
			if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Xr(e.style, t, "");
			if (n) for (t in n) r && n[t] == r[t] || Xr(e.style, t, n[t]);
		}
		else if ("o" == t[0] && "n" == t[1]) i = t != (t = t.replace(Pr, "$1")), s = t.toLowerCase(), t = s in e || "onFocusOut" == t || "onFocusIn" == t ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Ur, e.addEventListener(t, i ? Rr : $r, i)) : e.removeEventListener(t, i ? Rr : $r, i);
		else {
			if ("http://www.w3.org/2000/svg" == o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
				e[t] = null == n ? "" : n;
				break e;
			} catch (e) {}
			"function" == typeof n || (null == n || !1 === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
		}
	}
	function to(e) {
		return function(t) {
			if (this.l) {
				var n = this.l[t.type + e];
				if (null == t.t) t.t = Ur++;
				else if (t.t < n.u) return;
				return n(Ir.event ? Ir.event(t) : t);
			}
		};
	}
	function no(e, t, n, r, o, i, s, a, c, l) {
		var u, d, f, p, y, h, v, m, b, g, _, w, k, S, x, O, I, A = t.type;
		if (null != t.constructor) return null;
		128 & n.__u && (c = !!(32 & n.__u), i = [a = t.__e = n.__e]), (u = Ir.__b) && u(t);
		e: if ("function" == typeof A) try {
			if (m = t.props, b = "prototype" in A && A.prototype.render, g = (u = A.contextType) && r[u.__c], _ = u ? g ? g.props.value : u.__ : r, n.__c ? v = (d = t.__c = n.__c).__ = d.__E : (b ? t.__c = d = new A(m, _) : (t.__c = d = new Hr(m, _), d.constructor = A, d.render = lo), g && g.sub(d), d.state || (d.state = {}), d.__n = r, f = d.__d = !0, d.__h = [], d._sb = []), b && null == d.__s && (d.__s = d.state), b && null != A.getDerivedStateFromProps && (d.__s == d.state && (d.__s = Fr({}, d.__s)), Fr(d.__s, A.getDerivedStateFromProps(m, d.__s))), p = d.props, y = d.state, d.__v = t, f) b && null == A.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), b && null != d.componentDidMount && d.__h.push(d.componentDidMount);
			else {
				if (b && null == A.getDerivedStateFromProps && m !== p && null != d.componentWillReceiveProps && d.componentWillReceiveProps(m, _), t.__v == n.__v || !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(m, d.__s, _)) {
					for (t.__v != n.__v && (d.props = m, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), w = 0; w < d._sb.length; w++) d.__h.push(d._sb[w]);
					d._sb = [], d.__h.length && s.push(d);
					break e;
				}
				null != d.componentWillUpdate && d.componentWillUpdate(m, d.__s, _), b && null != d.componentDidUpdate && d.__h.push(function() {
					d.componentDidUpdate(p, y, h);
				});
			}
			if (d.context = _, d.props = m, d.__P = e, d.__e = !1, k = Ir.__r, S = 0, b) {
				for (d.state = d.__s, d.__d = !1, k && k(t), u = d.render(d.props, d.state, d.context), x = 0; x < d._sb.length; x++) d.__h.push(d._sb[x]);
				d._sb = [];
			} else do
				d.__d = !1, k && k(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
			while (d.__d && ++S < 25);
			d.state = d.__s, null != d.getChildContext && (r = Fr(Fr({}, r), d.getChildContext())), b && !f && null != d.getSnapshotBeforeUpdate && (h = d.getSnapshotBeforeUpdate(p, y)), O = u, null != u && u.type === zr && null == u.key && (O = io(u.props.children)), a = Yr(e, Nr(O) ? O : [O], t, n, r, o, i, s, a, c, l), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), v && (d.__E = d.__ = null);
		} catch (e) {
			if (t.__v = null, c || null != i) if (e.then) {
				for (t.__u |= c ? 160 : 128; a && 8 == a.nodeType && a.nextSibling;) a = a.nextSibling;
				i[i.indexOf(a)] = null, t.__e = a;
			} else {
				for (I = i.length; I--;) Mr(i[I]);
				ro(t);
			}
			else t.__e = n.__e, t.__k = n.__k, e.then || ro(t);
			Ir.__e(e, t, n);
		}
		else null == i && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : a = t.__e = so(n.__e, t, n, r, o, i, s, c, l);
		return (u = Ir.diffed) && u(t), 128 & t.__u ? void 0 : a;
	}
	function ro(e) {
		e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(ro);
	}
	function oo(e, t, n) {
		for (var r = 0; r < n.length; r++) ao(n[r], n[++r], n[++r]);
		Ir.__c && Ir.__c(t, e), e.some(function(t) {
			try {
				e = t.__h, t.__h = [], e.some(function(e) {
					e.call(t);
				});
			} catch (e) {
				Ir.__e(e, t.__v);
			}
		});
	}
	function io(e) {
		return "object" != typeof e || null == e || e.__b && e.__b > 0 ? e : Nr(e) ? e.map(io) : Fr({}, e);
	}
	function so(e, t, n, r, o, i, s, a, c) {
		var l, u, d, f, p, y, h, v = n.props || Lr, m = t.props, b = t.type;
		if ("svg" == b ? o = "http://www.w3.org/2000/svg" : "math" == b ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != i) {
			for (l = 0; l < i.length; l++) if ((p = i[l]) && "setAttribute" in p == !!b && (b ? p.localName == b : 3 == p.nodeType)) {
				e = p, i[l] = null;
				break;
			}
		}
		if (null == e) {
			if (null == b) return document.createTextNode(m);
			e = document.createElementNS(o, b, m.is && m), a && (Ir.__m && Ir.__m(t, i), a = !1), i = null;
		}
		if (null == b) v === m || a && e.data == m || (e.data = m);
		else {
			if (i = i && Or.call(e.childNodes), !a && null != i) for (v = {}, l = 0; l < e.attributes.length; l++) v[(p = e.attributes[l]).name] = p.value;
			for (l in v) if (p = v[l], "children" == l);
			else if ("dangerouslySetInnerHTML" == l) d = p;
			else if (!(l in m)) {
				if ("value" == l && "defaultValue" in m || "checked" == l && "defaultChecked" in m) continue;
				eo(e, l, null, p, o);
			}
			for (l in m) p = m[l], "children" == l ? f = p : "dangerouslySetInnerHTML" == l ? u = p : "value" == l ? y = p : "checked" == l ? h = p : a && "function" != typeof p || v[l] === p || eo(e, l, p, v[l], o);
			if (u) a || d && (u.__html == d.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
			else if (d && (e.innerHTML = ""), Yr("template" == t.type ? e.content : e, Nr(f) ? f : [f], t, n, r, "foreignObject" == b ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && Vr(n, 0), a, c), null != i) for (l = i.length; l--;) Mr(i[l]);
			a || (l = "value", "progress" == b && null == y ? e.removeAttribute("value") : null != y && (y !== e[l] || "progress" == b && !y || "option" == b && y != v[l]) && eo(e, l, y, v[l], o), l = "checked", null != h && h != e[l] && eo(e, l, h, v[l], o));
		}
		return e;
	}
	function ao(e, t, n) {
		try {
			if ("function" == typeof e) {
				var r = "function" == typeof e.__u;
				r && e.__u(), r && null == t || (e.__u = e(t));
			} else e.current = t;
		} catch (e) {
			Ir.__e(e, n);
		}
	}
	function co(e, t, n) {
		var r, o;
		if (Ir.unmount && Ir.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || ao(r, null, t)), null != (r = e.__c)) {
			if (r.componentWillUnmount) try {
				r.componentWillUnmount();
			} catch (e) {
				Ir.__e(e, t);
			}
			r.base = r.__P = null;
		}
		if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && co(r[o], t, n || "function" != typeof e.type);
		n || Mr(e.__e), e.__c = e.__ = e.__e = void 0;
	}
	function lo(e, t, n) {
		return this.constructor(e, n);
	}
	function uo(e, t, n) {
		var r, o, i;
		t == document && (t = document.documentElement), Ir.__ && Ir.__(e, t), r = t.__k, o = [], i = [], no(t, e = t.__k = Wr(zr, null, [e]), r || Lr, Lr, t.namespaceURI, r ? null : t.firstChild ? Or.call(t.childNodes) : null, o, r ? r.__e : t.firstChild, false, i), oo(o, e, i);
	}
	Or = Br.slice, Ir = { __e: function(e, t, n, r) {
		for (var o, i, s; t = t.__;) if ((o = t.__c) && !o.__) try {
			if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
		} catch (t) {
			e = t;
		}
		throw e;
	} }, Ar = 0, Hr.prototype.setState = function(e, t) {
		var n = null != this.__s && this.__s != this.state ? this.__s : this.__s = Fr({}, this.state);
		"function" == typeof e && (e = e(Fr({}, n), this.props)), e && Fr(n, e), null != e && this.__v && (t && this._sb.push(t), Jr(this));
	}, Hr.prototype.forceUpdate = function(e) {
		this.__v && (this.__e = !0, e && this.__h.push(e), Jr(this));
	}, Hr.prototype.render = zr, jr = [], Er = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Tr = function(e, t) {
		return e.__v.__b - t.__v.__b;
	}, Gr.__r = 0, Pr = /(PointerCapture)$|Capture$/i, Ur = 0, $r = to(!1), Rr = to(!0);
	var fo = {
		Alert: {
			error: {
				color: "red",
				fontWeight: "bold"
			},
			warning: {
				color: "#f80",
				fontWeight: "bold"
			},
			info: { color: "black" }
		},
		Darken: {
			position: "fixed",
			top: 0,
			left: 0,
			opacity: .5,
			backgroundColor: "#000",
			width: "100vw",
			height: "100vh",
			zIndex: 150,
			webkitBackdropFilter: "blur(2px)",
			backdropFilter: "blur(2px)"
		},
		DialogOuter: {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			zIndex: 150,
			alignItems: "center",
			display: "flex",
			justifyContent: "center",
			padding: "16px",
			boxSizing: "border-box"
		},
		DialogInner: {
			position: "relative",
			color: "#222",
			backgroundColor: "#fff",
			padding: "24px",
			marginBottom: "2em",
			maxWidth: "400px",
			width: "100%",
			maxHeight: "90%",
			overflowY: "auto",
			border: "3px solid #3d3d5d",
			borderRadius: "8px",
			boxShadow: "0 0 80px 10px #666",
			fontFamily: "sans-serif",
			boxSizing: "border-box"
		},
		Input: {
			height: "35px",
			width: "100%",
			maxWidth: "100%",
			borderColor: "#ccf4",
			outline: "none",
			fontSize: "16px",
			padding: "8px",
			boxSizing: "border-box",
			backgroundColor: "#f9f9f9",
			borderRadius: "4px",
			border: "1px solid #ccc",
			marginTop: "6px",
			fontFamily: "inherit"
		},
		Button: {
			padding: "10px 20px",
			margin: "0 4px",
			border: "1px solid #d1d5db",
			borderRadius: "6px",
			backgroundColor: "#ffffff",
			cursor: "pointer",
			fontSize: "14px",
			fontWeight: "500",
			color: "#374151",
			transition: "all 0.2s ease"
		},
		PrimaryButton: {
			padding: "10px 20px",
			margin: "0 4px",
			border: "1px solid #3b82f6",
			borderRadius: "6px",
			backgroundColor: "#3b82f6",
			color: "white",
			cursor: "pointer",
			fontSize: "14px",
			fontWeight: "500",
			transition: "all 0.2s ease"
		},
		ButtonsDiv: {
			display: "flex",
			justifyContent: "flex-end",
			gap: "12px",
			marginTop: "24px",
			paddingTop: "20px"
		},
		Label: {
			display: "block",
			marginBottom: "12px",
			fontSize: "14px",
			fontWeight: "500",
			color: "#333"
		},
		WindowHeader: {
			margin: "0 0 20px 0",
			fontSize: "18px",
			fontWeight: "600",
			color: "#333",
			borderBottom: "1px solid #eee",
			paddingBottom: "10px"
		},
		ProviderButton: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			padding: "12px 16px",
			marginBottom: "10px",
			border: "1px solid #d1d5db",
			borderRadius: "6px",
			backgroundColor: "#ffffff",
			cursor: "pointer",
			fontSize: "14px",
			fontWeight: "500",
			color: "#374151",
			transition: "all 0.2s ease",
			gap: "12px"
		},
		ProviderButtonIcon: {
			width: "20px",
			height: "20px",
			flexShrink: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		ProviderButtonText: {
			flex: 1,
			textAlign: "left"
		},
		ProviderGoogle: {
			backgroundColor: "#ffffff",
			border: "1px solid #dadce0",
			color: "#3c4043"
		},
		ProviderGitHub: {
			backgroundColor: "#ffffff",
			border: "1px solid #dadce0",
			color: "#181717"
		},
		ProviderMicrosoft: {
			backgroundColor: "#ffffff",
			border: "1px solid #dadce0",
			color: "#5e5e5e"
		},
		ProviderApple: {
			backgroundColor: "#000000",
			border: "1px solid #000000",
			color: "#ffffff"
		},
		ProviderCustom: {
			backgroundColor: "#ffffff",
			border: "1px solid #dadce0",
			color: "#181717"
		},
		Divider: {
			display: "flex",
			alignItems: "center",
			margin: "20px 0",
			color: "#6b7280",
			fontSize: "13px"
		},
		DividerLine: {
			flex: 1,
			height: "1px",
			backgroundColor: "#e5e7eb"
		},
		DividerText: {
			padding: "0 12px",
			color: "#9ca3af"
		},
		OtpButton: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			padding: "12px 16px",
			border: "1px solid #d1d5db",
			borderRadius: "6px",
			backgroundColor: "#f9fafb",
			cursor: "pointer",
			fontSize: "14px",
			fontWeight: "500",
			color: "#374151",
			transition: "all 0.2s ease",
			gap: "12px"
		},
		CopyButton: {
			display: "inline-flex",
			alignItems: "center",
			gap: "4px",
			padding: "4px 10px",
			marginTop: "8px",
			border: "1px solid #d1d5db",
			borderRadius: "4px",
			backgroundColor: "#f9fafb",
			cursor: "pointer",
			fontSize: "12px",
			fontWeight: "500",
			color: "#374151",
			transition: "all 0.15s ease",
			fontFamily: "monospace"
		},
		CopyButtonCopied: {
			display: "inline-flex",
			alignItems: "center",
			gap: "4px",
			padding: "4px 10px",
			marginTop: "8px",
			border: "1px solid #22c55e",
			borderRadius: "4px",
			backgroundColor: "#f0fdf4",
			cursor: "default",
			fontSize: "12px",
			fontWeight: "500",
			color: "#16a34a",
			fontFamily: "monospace"
		}
	};
	function po({ children: e, className: t }) {
		return Wr("div", { className: `dexie-dialog ${t || ""}` }, Wr("div", { style: fo.Darken }), Wr("div", { style: fo.DialogOuter }, Wr("div", { style: fo.DialogInner }, e)));
	}
	var yo;
	var ho;
	var vo;
	var mo;
	var bo = 0;
	var go = [];
	var _o = Ir;
	var wo = _o.__b;
	var ko = _o.__r;
	var So = _o.diffed;
	var xo = _o.__c;
	var Oo = _o.unmount;
	var Io = _o.__;
	function Ao(e, t) {
		_o.__h && _o.__h(ho, e, bo || t), bo = 0;
		var n = ho.__H || (ho.__H = {
			__: [],
			__h: []
		});
		return e >= n.__.length && n.__.push({}), n.__[e];
	}
	function jo(e) {
		return bo = 1, function(e, t) {
			var n = Ao(yo++, 2);
			if (n.t = e, !n.__c && (n.__ = [Bo(void 0, t), function(e) {
				var t = n.__N ? n.__N[0] : n.__[0], r = n.t(t, e);
				t !== r && (n.__N = [r, n.__[1]], n.__c.setState({}));
			}], n.__c = ho, !ho.__f)) {
				var r = function(e, t, r) {
					if (!n.__c.__H) return !0;
					var i = n.__c.__H.__.filter(function(e) {
						return !!e.__c;
					});
					if (i.every(function(e) {
						return !e.__N;
					})) return !o || o.call(this, e, t, r);
					var s = n.__c.props !== e;
					return i.forEach(function(e) {
						if (e.__N) {
							var t = e.__[0];
							e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (s = !0);
						}
					}), o && o.call(this, e, t, r) || s;
				};
				ho.__f = !0;
				var o = ho.shouldComponentUpdate, i = ho.componentWillUpdate;
				ho.componentWillUpdate = function(e, t, n) {
					if (this.__e) {
						var s = o;
						o = void 0, r(e, t, n), o = s;
					}
					i && i.call(this, e, t, n);
				}, ho.shouldComponentUpdate = r;
			}
			return n.__N || n.__;
		}(Bo, e);
	}
	function Co(e, t) {
		var n = Ao(yo++, 4);
		!_o.__s && Lo(n.__H, t) && (n.__ = e, n.u = t, ho.__h.push(n));
	}
	function Eo(e) {
		return bo = 5, function(e, t) {
			var n = Ao(yo++, 7);
			return Lo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
		}(function() {
			return { current: e };
		}, []);
	}
	function To() {
		for (var e; e = go.shift();) if (e.__P && e.__H) try {
			e.__H.__h.forEach($o), e.__H.__h.forEach(Ro), e.__H.__h = [];
		} catch (t) {
			e.__H.__h = [], _o.__e(t, e.__v);
		}
	}
	_o.__b = function(e) {
		ho = null, wo && wo(e);
	}, _o.__ = function(e, t) {
		e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Io && Io(e, t);
	}, _o.__r = function(e) {
		ko && ko(e), yo = 0;
		var t = (ho = e.__c).__H;
		t && (vo === ho ? (t.__h = [], ho.__h = [], t.__.forEach(function(e) {
			e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
		})) : (t.__h.forEach($o), t.__h.forEach(Ro), t.__h = [], yo = 0)), vo = ho;
	}, _o.diffed = function(e) {
		So && So(e);
		var t = e.__c;
		t && t.__H && (t.__H.__h.length && (1 !== go.push(t) && mo === _o.requestAnimationFrame || ((mo = _o.requestAnimationFrame) || Uo)(To)), t.__H.__.forEach(function(e) {
			e.u && (e.__H = e.u), e.u = void 0;
		})), vo = ho = null;
	}, _o.__c = function(e, t) {
		t.some(function(e) {
			try {
				e.__h.forEach($o), e.__h = e.__h.filter(function(e) {
					return !e.__ || Ro(e);
				});
			} catch (n) {
				t.some(function(e) {
					e.__h && (e.__h = []);
				}), t = [], _o.__e(n, e.__v);
			}
		}), xo && xo(e, t);
	}, _o.unmount = function(e) {
		Oo && Oo(e);
		var t, n = e.__c;
		n && n.__H && (n.__H.__.forEach(function(e) {
			try {
				$o(e);
			} catch (e) {
				t = e;
			}
		}), n.__H = void 0, t && _o.__e(t, n.__v));
	};
	var Po = "function" == typeof requestAnimationFrame;
	function Uo(e) {
		var t, n = function() {
			clearTimeout(r), Po && cancelAnimationFrame(t), setTimeout(e);
		}, r = setTimeout(n, 35);
		Po && (t = requestAnimationFrame(n));
	}
	function $o(e) {
		var t = ho, n = e.__c;
		"function" == typeof n && (e.__c = void 0, n()), ho = t;
	}
	function Ro(e) {
		var t = ho;
		e.__c = e.__(), ho = t;
	}
	function Lo(e, t) {
		return !e || e.length !== t.length || t.some(function(t, n) {
			return t !== e[n];
		});
	}
	function Bo(e, t) {
		return "function" == typeof t ? t(e) : t;
	}
	function Do({ option: e, onClick: t }) {
		const { displayName: n, iconUrl: r, styleHint: o } = e;
		return Wr("button", {
			type: "button",
			style: function(e) {
				const t = Object.assign({}, fo.ProviderButton);
				if (!e) return t;
				switch (e) {
					case "google": return Object.assign(Object.assign({}, t), fo.ProviderGoogle);
					case "github": return Object.assign(Object.assign({}, t), fo.ProviderGitHub);
					case "microsoft": return Object.assign(Object.assign({}, t), fo.ProviderMicrosoft);
					case "apple": return Object.assign(Object.assign({}, t), fo.ProviderApple);
					case "otp": return Object.assign({}, fo.OtpButton);
					case "custom-oauth2": return Object.assign(Object.assign({}, t), fo.ProviderCustom);
					default: return t;
				}
			}(o),
			onClick: t,
			class: "dxc-option-btn" + (o ? ` dxc-option-${o}` : ""),
			"aria-label": n
		}, r && Wr("img", {
			src: r,
			alt: "",
			style: fo.ProviderButtonIcon,
			"aria-hidden": "true"
		}), Wr("span", { style: fo.ProviderButtonText }, n));
	}
	function No() {
		return Wr("div", { style: fo.Divider }, Wr("div", { style: fo.DividerLine }), Wr("span", { style: fo.DividerText }, "or"), Wr("div", { style: fo.DividerLine }));
	}
	function Fo({ title: e, alerts: t, fields: n, options: r, submitLabel: o, cancelLabel: i, onCancel: s, onSubmit: a }) {
		const [c, l] = jo({}), u = Eo(null);
		Co(() => {
			var e;
			return null === (e = u.current) || void 0 === e ? void 0 : e.focus();
		}, []);
		const d = Object.entries(n || {}), f = d.length > 0, p = r && r.length > 0, y = /* @__PURE__ */ new Map();
		if (r) for (const e of r) {
			const t = y.get(e.name) || [];
			t.push(e), y.set(e.name, t);
		}
		const h = y.size > 1, v = (e) => {
			a({ [e.name]: e.value });
		};
		return Wr(po, { className: "dxc-login-dlg" }, Wr(zr, null, Wr("h3", { style: fo.WindowHeader }, e), t.map((e, t) => Wr("div", { key: t }, Wr("p", { style: fo.Alert[e.type] }, function({ message: e, messageCode: t, messageParams: n }) {
			return e.replace(/\{\w+\}/gi, (e) => n[e.substring(1, e.length - 1)]);
		}(e)), e.copyText && Wr(Mo, { text: e.copyText }))), p && Wr("div", { class: "dxc-options" }, h ? Array.from(y.entries()).map(([e, t], n) => Wr(zr, { key: e }, n > 0 && Wr(No, null), t.map((e) => Wr(Do, {
			key: `${e.name}-${e.value}`,
			option: e,
			onClick: () => v(e)
		})))) : r.map((e) => Wr(Do, {
			key: `${e.name}-${e.value}`,
			option: e,
			onClick: () => v(e)
		}))), p && f && Wr(No, null), f && Wr("form", { onSubmit: (e) => {
			e.preventDefault(), a(c);
		} }, d.map(([e, { type: t, label: n, placeholder: r }], o) => Wr("label", {
			style: fo.Label,
			key: o
		}, n ? `${n}: ` : "", Wr("input", {
			ref: 0 === o ? u : void 0,
			type: t,
			name: e,
			autoComplete: "on",
			style: fo.Input,
			autoFocus: !0,
			placeholder: r,
			value: c[e] || "",
			onInput: (n) => {
				var r;
				const o = function(e, t) {
					switch (e) {
						case "email": return t.toLowerCase();
						case "otp": return t.toUpperCase();
						default: return t;
					}
				}(t, null === (r = n.target) || void 0 === r ? void 0 : r.value);
				let i = Object.assign(Object.assign({}, c), { [e]: o });
				l(i), "otp" === t && 8 === (null == o ? void 0 : o.trim().length) && a(i);
			}
		}))))), Wr("div", { style: fo.ButtonsDiv }, Wr(zr, null, o && (f || !p && !f) && Wr("button", {
			type: "submit",
			style: fo.PrimaryButton,
			onClick: () => a(c)
		}, o), i && Wr("button", {
			style: fo.Button,
			onClick: s
		}, i))));
	}
	function Mo({ text: e }) {
		const [t, n] = jo(!1), r = Eo(null);
		Co(() => () => {
			null !== r.current && clearTimeout(r.current);
		}, []);
		const o = () => {
			null !== r.current && clearTimeout(r.current), n(!0), r.current = setTimeout(() => {
				r.current = null, n(!1);
			}, 2e3);
		};
		return Wr("button", {
			type: "button",
			style: t ? fo.CopyButtonCopied : fo.CopyButton,
			onClick: () => {
				var t;
				"undefined" != typeof navigator && (null === (t = navigator.clipboard) || void 0 === t ? void 0 : t.writeText) ? navigator.clipboard.writeText(e).then(o).catch(() => {
					Wo(e, o);
				}) : Wo(e, o);
			},
			title: "Copy to clipboard"
		}, t ? "✓ Copied!" : `📋 ${e}`);
	}
	function Wo(e, t) {
		const n = document.createElement("textarea");
		n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select();
		const r = document.execCommand("copy");
		document.body.removeChild(n), r && t();
	}
	var Ko = class extends Hr {
		constructor(e) {
			super(e), this.observer = (e) => this.setState({ userInteraction: e }), this.state = { userInteraction: void 0 };
		}
		componentDidMount() {
			this.subscription = from$1(this.props.db.cloud.userInteraction).subscribe(this.observer);
		}
		componentWillUnmount() {
			this.subscription && (this.subscription.unsubscribe(), delete this.subscription);
		}
		render(e, { userInteraction: t }) {
			return t ? Wr(Fo, Object.assign({}, t)) : null;
		}
	};
	function zo(e) {
		const t = /* @__PURE__ */ new WeakMap();
		return (n) => {
			let r = t.get(n);
			return r || (r = e(n), t.set(n, r)), r;
		};
	}
	var Ho = zo((e) => new BehaviorSubject(Object.assign(Object.assign({}, re), { isLoading: !0 })));
	function Vo(e, t) {
		let n = t, r = from$1(e).pipe(map$1((e) => n = e), share({ resetOnRefCountZero: () => timer(1e3) }));
		const o = new Observable$1((e) => {
			let t = !1;
			const o = r.subscribe({
				next(n) {
					t = !0, e.next(n);
				},
				error(t) {
					e.error(t);
				},
				complete() {
					e.complete();
				}
			});
			return t || o.closed || e.next(n), o;
		});
		return o.getValue = () => n, o;
	}
	var qo = zo((e) => Vo(liveQuery(() => e.roles.where({ realmId: "rlm-public" }).toArray().then((e) => {
		const t = {};
		for (const n of e.slice().sort((e, t) => (e.sortOrder || 0) - (t.sortOrder || 0))) t[n.name] = n;
		return t;
	})), {}));
	var Jo = zo((e) => Vo(Ho(e._novip).pipe(switchMap((t) => liveQuery(() => e.transaction("r", "realms", "members", () => Promise.all([
		e.members.where({ userId: t.userId }).toArray(),
		e.realms.toArray(),
		t.userId
	]).then(([e, t, n]) => ({
		selfMembers: e,
		realms: t,
		userId: n
	})))))), {
		selfMembers: [],
		realms: [],
		get userId() {
			return e.cloud.currentUserId;
		}
	}));
	function Go(...e) {
		if (0 === e.length) return {};
		return e.reduce((e, t) => {
			const n = Object.assign({}, e);
			for (const [e, r] of Object.entries(t)) if (e in n && n[e]) {
				if ("*" === n[e]) continue;
				if ("*" === r) n[e] = "*";
				else if (Array.isArray(r) && Array.isArray(n[e])) {
					const t = n, o = t[e];
					t[e] = [.../* @__PURE__ */ new Set([...o, ...r])];
				} else if ("object" == typeof r && r && "object" == typeof n[e]) {
					const t = n[e];
					for (const [e, n] of Object.entries(r)) "*" !== t[e] && ("*" === n ? t[e] = "*" : Array.isArray(t[e]) && Array.isArray(n) && (t[e] = [.../* @__PURE__ */ new Set([...t[e], ...n])]));
				}
			} else n[e] = t[e];
			return n;
		});
	}
	var Yo = zo((e) => function(e, t) {
		let n;
		const r = e.pipe(map$1((e) => n = t(e)));
		return r.getValue = () => void 0 !== n ? n : n = t(e.getValue()), r;
	}(Vo(combineLatest([Jo(e._novip), qo(e._novip)]).pipe(map$1(([{ selfMembers: e, realms: t, userId: n }, r]) => ({
		selfMembers: e,
		realms: t,
		userId: n,
		globalRoles: r
	}))), {
		selfMembers: [],
		realms: [],
		userId: re.userId,
		globalRoles: {}
	}), ({ selfMembers: e, realms: t, userId: n, globalRoles: r }) => {
		return t.map((t) => {
			const o = e.filter((e) => e.realmId === t.realmId), i = o.map((e) => e.permissions).filter((e) => e), s = et(o.map((e) => e.roles).filter((e) => e)).map((e) => r[e]).filter((e) => e).map((e) => e.permissions);
			return Object.assign(Object.assign({}, t), { permissions: t.owner === n ? { manage: "*" } : Go(...i, ...s) });
		}).reduce((e, t) => Object.assign(Object.assign({}, e), { [t.realmId]: t }), { [n]: {
			realmId: n,
			owner: n,
			name: n,
			permissions: { manage: "*" }
		} });
	}));
	var Qo = class {
		constructor(e, t, n) {
			this.permissions = e || {}, this.tableName = t, this.isOwner = n;
		}
		add(...e) {
			var t;
			return "*" === this.permissions.manage || !!(null === (t = this.permissions.manage) || void 0 === t ? void 0 : t.includes(this.tableName)) || "*" === this.permissions.add || !!e.every((e) => {
				var t;
				return null === (t = this.permissions.add) || void 0 === t ? void 0 : t.includes(e);
			});
		}
		update(...e) {
			var t, n;
			if (this.isOwner || "*" === this.permissions.manage) return !0;
			if (null === (t = this.permissions.manage) || void 0 === t ? void 0 : t.includes(this.tableName)) return !0;
			if ("*" === this.permissions.update) return e.every((e) => "owner" !== e);
			const r = null === (n = this.permissions.update) || void 0 === n ? void 0 : n[this.tableName];
			return "*" === r ? e.every((e) => "owner" !== e) : e.every((e) => null == r ? void 0 : r.some((t) => t === e || "*" === t && "owner" !== e));
		}
		delete() {
			var e;
			return !(!this.isOwner && "*" !== this.permissions.manage) || !!(null === (e = this.permissions.manage) || void 0 === e ? void 0 : e.includes(this.tableName));
		}
	};
	var Zo = zo((e) => {
		const t = Ho(e._novip).pipe(switchMap((t) => liveQuery(() => e.members.where({ email: t.email || "" }).toArray()))), n = Yo(e._novip);
		return Vo(combineLatest([
			t,
			Jo(e._novip),
			n
		]).pipe(map$1(([t, n, r]) => {
			const o = (e, t) => Object.assign(Object.assign({}, e), { [t.id]: Object.assign(Object.assign({}, t), { realm: r[t.realmId] }) }), i = t.reduce(o, {}), s = n.selfMembers.reduce(o, i);
			return Object.values(s).filter((e) => !e.accepted).map((t) => Object.assign(Object.assign({}, t), {
				accept() {
					return Z(this, void 0, void 0, function* () {
						yield e.members.update(t.id, { accepted: /* @__PURE__ */ new Date() });
					});
				},
				reject() {
					return Z(this, void 0, void 0, function* () {
						yield e.members.update(t.id, { rejected: /* @__PURE__ */ new Date() });
					});
				}
			}));
		})), []);
	});
	function Xo(e) {
		return (t) => {
			var r;
			const o = t.doc;
			if (!o) throw new Error("Internal error: DexieYProvider.createYHandler called without a doc. This is unexpected.");
			const { parentTable: i } = o.meta || {};
			if (!(null === (r = e.cloud.schema) || void 0 === r ? void 0 : r[i].markedForSync)) return;
			let s;
			if (Object.getOwnPropertyDescriptor(t, "awareness")) {
				const e = t.awareness;
				e && (e.destroy(), fr.delete(o));
			}
			Object.defineProperty(t, "awareness", {
				configurable: !0,
				get: () => s || (s = function(e, t, r) {
					const { parentTable: o, parentId: i, parentProp: s, updatesTable: a } = t.meta, c = new Awareness(t), l = yr(t);
					return c.on("update", ({ added: n, updated: i, removed: a }, l) => {
						const u = n.concat(i).concat(a), d = e.cloud.currentUser.value;
						if ("server" !== l && d.isLoggedIn && !Xn(e)) {
							const n = encodeAwarenessUpdate(c, u);
							e.messageProducer.next({
								type: "aware",
								table: o,
								prop: s,
								k: t.meta.parentId,
								u: n
							}), r.destroyed && e.messageProducer.next({
								type: "doc-close",
								table: o,
								prop: s,
								k: t.meta.parentId
							});
						}
					}), c.on("destroy", () => {
						removeAwarenessStates(c, [t.clientID], "provider destroyed");
					}), (() => {
						Z(this, void 0, void 0, function* () {
							if (r.destroyed) return;
							let t = !1, c = 1;
							const d = combineLatest([e.cloud.webSocketStatus, l.pipe(startWith(null))]).subscribe(([n]) => {
								if (r.destroyed) return;
								t = "connected" === n;
								const o = e.cloud.currentUser.value;
								"connected" === n && o.isLoggedIn && !Xn(e) && (++c, f().catch((e) => {}));
							});
							function f() {
								return Z(this, void 0, void 0, function* () {
									const l = c, u = e.table(a), d = e.$syncState, [f, p] = yield e.transaction("r", d, u, () => Z(this, void 0, void 0, function* () {
										const e = yield u.get(Nt), t = yield d.get("syncState");
										return [(null == e ? void 0 : e.receivedUntil) || 0, (null == t ? void 0 : t.yServerRevision) || (null == t ? void 0 : t.serverRevision)];
									}));
									if (r.destroyed || c !== l || !t) return;
									const y = {
										type: "doc-open",
										table: o,
										prop: s,
										k: i,
										serverRev: p
									}, h = yield u.where("i").between(f, 1 / 0, !1).filter((e) => 0 === cmp(e.k, i) && !(1 & (e.f || 0))).toArray();
									if (!r.destroyed && c === l && t) {
										if (h.length > 0) y.sv = encodeStateVectorFromUpdateV2(mergeUpdatesV2(h.map((e) => e.u)));
										e.messageProducer.next(y);
									}
								});
							}
							r.addCleanupHandler(d);
						});
					})(), c;
				}(e, o, t), fr.set(o, s), s)
			});
		};
	}
	function ei(e) {
		const t = "undefined" != typeof window ? window.location.href : "";
		if (!t) return null;
		const n = new URL(t).searchParams.get("dxc-auth");
		if (!n) return null;
		let r;
		try {
			const e = function(e) {
				const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/");
				return atob(t);
			}(n);
			r = JSON.parse(e);
		} catch (e) {
			return null;
		}
		const { code: o, provider: i, state: s, error: a } = r;
		if (a) {
			if (a.toLowerCase().includes("access_denied") || a.toLowerCase().includes("access denied")) throw new On("access_denied", i, a);
			if (a.toLowerCase().includes("email") && a.toLowerCase().includes("verif")) throw new On("email_not_verified", i, a);
			throw new On("provider_error", i, a);
		}
		return o && i && s ? {
			code: o,
			provider: i,
			state: s
		} : null;
	}
	function ti() {
		var e;
		if ("undefined" == typeof window || !(null === (e = window.history) || void 0 === e ? void 0 : e.replaceState)) return;
		const t = new URL(window.location.href);
		if (!t.searchParams.has("dxc-auth")) return;
		t.searchParams.delete("dxc-auth");
		const n = t.pathname + (t.searchParams.toString() ? `?${t.searchParams.toString()}` : "") + t.hash;
		window.history.replaceState(null, "", n);
	}
	var ni = { nameSuffix: !0 };
	function ri(t) {
		const n = t.name, o = Ho(t), i = [];
		let d = !1, f = null, v = null, m = null;
		t.on("ready", (t) => Z(this, void 0, void 0, function* () {
			try {
				yield function(t) {
					return Z(this, void 0, void 0, function* () {
						var n, c, S, I, j, E, L, B, D;
						b = !1;
						const N = yn(t);
						"undefined" != typeof window && "undefined" != typeof document && (null !== (n = N.cloud.options) && void 0 !== n && n.customLoginGui || i.push(function(e) {
							let t = !1;
							const n = document.createElement("div");
							return document.body ? (document.body.appendChild(n), uo(Wr(Ko, { db: e.vip }), n)) : addEventListener("DOMContentLoaded", () => {
								t || (document.body.appendChild(n), uo(Wr(Ko, { db: e.vip }), n));
							}), {
								unsubscribe() {
									try {
										n.remove();
									} catch (e) {}
									t = !0;
								},
								get closed() {
									return t;
								}
							};
						}(t))), N.cloud.isServiceWorkerDB || i.push(function(e) {
							let t = e.cloud.webSocketStatus.value;
							return combineLatest([
								e.cloud.webSocketStatus.pipe(switchMap((e) => {
									const n = t;
									t = e;
									const r = of(e);
									switch (e) {
										case "disconnected": return ir.value ? r.pipe(debounceTime(500)) : r;
										case "connecting": return "not-started" === n || "error" === n ? r : r.pipe(debounceTime(4e3));
										default: return r;
									}
								})),
								e.syncStateChangedEvent.pipe(startWith({ phase: "initial" })),
								Ho(e.dx._novip),
								sr
							]).pipe(map$1(([t, n, r, o]) => {
								var i;
								if ((null === (i = r.license) || void 0 === i ? void 0 : i.status) && "ok" !== r.license.status) return {
									phase: "offline",
									status: "offline",
									license: r.license.status
								};
								let { phase: s, error: a, progress: c } = n, l = t;
								return "error" === s && (l = "error"), "not-started" === t && ("pushing" !== s && "pulling" !== s || (l = "connecting")), "error" !== e.cloud.syncState.value.phase || "pushing" !== n.phase && "pulling" !== n.phase || (l = "connecting"), o || (l = "disconnected"), {
									phase: s,
									error: a,
									progress: c,
									status: Ct ? l : "offline",
									license: "ok"
								};
							}));
						}(N).subscribe(t.cloud.syncState)), i.push(N.syncCompleteEvent.subscribe(w));
						if ("eager" === (null !== (S = null === (c = N.cloud.options) || void 0 === c ? void 0 : c.blobMode) && void 0 !== S ? S : "eager")) {
							let t = null;
							const n = () => {
								t || (t = Dexie.ignoreTransaction(() => function(e, t, n) {
									return Z(this, void 0, void 0, function* () {
										const o = Ye(e).filter((e) => e.schema.indexes.some((e) => "_hasBlobRefs" === e.name));
										let i = !1, s = 0;
										try {
											for (const e of o) {
												let o;
												n?.aborted;
												try {
													o = yield e.where("_hasBlobRefs").equals(1).primaryKeys();
												} catch (e) {
													continue;
												}
												if (0 !== o.length) {
													i || (vn(t, !0), i = !0), e.name, o.length;
													for (let t = 0; t < o.length; t += 9) {
														n?.aborted;
														const i = o.slice(t, t + 9);
														try {
															yield e.bulkGet(i);
														} catch (e) {
															continue;
														}
														s += i.length, e.name, Math.min(t + 9, o.length), o.length;
													}
												}
											}
											i && (yield e.blobDownloadTracker.drainPendingSaves());
										} finally {
											i && vn(t, !1);
										}
									});
								}(N, k)).catch((e) => {}).finally(() => {
									t = null;
								}));
							};
							setTimeout(n, 0), i.push(N.syncCompleteEvent.subscribe(n));
						}
						N.tables.every((e) => e.core) || function() {
							throw new Dexie.SchemaError("Version increment needed to allow dexie-cloud change tracking");
						}();
						const F = "serviceWorker" in navigator ? yield navigator.serviceWorker.getRegistrations() : [], [M, W] = yield N.transaction("rw", N.$syncState, () => Z(this, void 0, void 0, function* () {
							var e, t;
							const { options: n, schema: r } = N.cloud, [o, i, s] = yield Promise.all([
								N.getOptions(),
								N.getSchema(),
								N.getPersistedSyncState()
							]);
							if (d) {
								if (!o || JSON.stringify(o) !== JSON.stringify(n)) {
									if (!n) throw new Error("Internal error");
									const e = Object.assign({}, n);
									delete e.fetchTokens, delete e.awarenessProtocol, yield N.$syncState.put(e, "options");
								}
							} else N.cloud.options = o || null;
							if ((null === (e = N.cloud.options) || void 0 === e ? void 0 : e.tryUseServiceWorker) && "serviceWorker" in navigator && F.length > 0 && !Dn ? N.cloud.usingServiceWorker = !0 : (null !== (t = N.cloud.options) && void 0 !== t && t.tryUseServiceWorker && N.cloud.isServiceWorkerDB, N.cloud.usingServiceWorker = !1), xr(r, N.cloud.options), xr(i, N.cloud.options), r) {
								if (!i || JSON.stringify(i) !== JSON.stringify(r)) {
									const e = i || {};
									for (const [t, n] of Object.entries(r)) {
										const r = e[t];
										r ? (r.markedForSync = n.markedForSync, n.deleted = r.deleted, r.generatedGlobalId = n.generatedGlobalId) : e[t] = Object.assign({}, n);
									}
									yield N.$syncState.put(e, "schema"), Object.assign(r, e);
								}
							} else N.cloud.schema = i || null;
							return [null == s ? void 0 : s.initiallySynced, null == s ? void 0 : s.realms];
						}));
						if (M && N.setInitiallySynced(!0), function(t) {
							var n, r;
							for (const o of t.tables) if (null === (r = null === (n = t.cloud.schema) || void 0 === n ? void 0 : n[o.name]) || void 0 === r ? void 0 : r.markedForSync) {
								if (o.schema.primKey.auto) throw new Dexie.SchemaError(`Table ${o.name} is both autoIncremented and synced. Use db.cloud.configure({unsyncedTables: [${JSON.stringify(o.name)}]}) to blacklist it from sync`);
								if (!o.schema.primKey.keyPath) throw new Dexie.SchemaError(`Table ${o.name} cannot be both synced and outbound. Use db.cloud.configure({unsyncedTables: [${JSON.stringify(o.name)}]}) to blacklist it from sync`);
							}
						}(N), g(), !N.cloud.isServiceWorkerDB) {
							i.push(liveQuery(() => N.getCurrentUser().then((e) => !e.isLoggedIn && "undefined" != typeof location && /dxc-auth\=/.test(location.search) ? Object.assign(Object.assign({}, e), { isLoading: !0 }) : e)).subscribe(o)), i.push(liveQuery(() => N.getPersistedSyncState()).subscribe(N.cloud.persistedSyncState)), yield firstValueFrom(combineLatest([o.pipe(skip(1), take(1)), N.cloud.persistedSyncState.pipe(skip(1), take(1))]));
							const e = Xo(N);
							DexieYProvider.on.new.subscribe(e), N.dx.once("close", () => {
								DexieYProvider.on.new.unsubscribe(e);
							});
						}
						let K = !1, z = yield N.getCurrentUser();
						if (v && !N.cloud.isServiceWorkerDB) {
							const e = v;
							v = null;
							try {
								yield at(N.cloud.userInteraction, "Authentication Error", {
									type: "error",
									messageCode: "GENERIC_ERROR",
									message: e.message,
									messageParams: { provider: e.provider || "unknown" }
								}), ti();
							} catch (e) {}
						}
						if (f && !N.cloud.isServiceWorkerDB) {
							const { code: e, provider: t } = f;
							f = null;
							try {
								K = yield $n(N, {
									oauthCode: e,
									provider: t
								}), z = yield N.getCurrentUser(), ti();
							} catch (e) {}
						}
						const H = null === (I = N.cloud.options) || void 0 === I ? void 0 : I.requireAuth;
						H && (N.cloud.isServiceWorkerDB ? yield firstValueFrom(o.pipe(filter((e) => !!e.isLoggedIn), take(1))) : "object" == typeof H ? (!z.isLoggedIn || H.userId && z.userId !== H.userId || H.email && z.email !== H.email) && (K = yield $n(N, H)) : z.isLoggedIn || (K = yield $n(N))), !z.isLoggedIn || W && W.includes(z.userId) || (K = !0), m && m.stop(), m = null, g();
						const V = (null === (j = N.cloud.options) || void 0 === j ? void 0 : j.databaseUrl) && (!M || K);
						V && (yield function(e, t, n) {
							return Z(this, void 0, void 0, function* () {
								yield or(e, rn, () => on(e, t, n, { isInitialSync: !0 }));
							});
						}(N, N.cloud.options, N.cloud.schema), N.setInitiallySynced(!0)), g(), N.cloud.usingServiceWorker && (null === (E = N.cloud.options) || void 0 === E ? void 0 : E.databaseUrl) ? (V || ue(N, "push").catch(() => {}), function(e) {
							return Z(this, void 0, void 0, function* () {
								var t;
								try {
									const { periodicSync: n } = yield navigator.serviceWorker.ready;
									if (n) try {
										yield n.register(`dexie-cloud:${e.name}`, null === (t = e.cloud.options) || void 0 === t ? void 0 : t.periodicSync);
									} catch (e) {}
								} catch (e) {}
							});
						}(N).catch(() => {})) : null !== (L = N.cloud.options) && void 0 !== L && L.databaseUrl && N.cloud.schema && !N.cloud.isServiceWorkerDB && (m = Sr(N, N.cloud.options, N.cloud.schema), m.start(), V || de(N, "push")), g(), N.cloud.isServiceWorkerDB || i.push(fromEvent(self, "online").subscribe(() => {
							N.syncStateChangedEvent.next({ phase: "not-in-sync" }), Xn(N) || de(N, "push");
						}), fromEvent(self, "offline").subscribe(() => {
							N.syncStateChangedEvent.next({ phase: "offline" });
						})), !(null !== (B = N.cloud.options) && void 0 !== B && B.databaseUrl) || null !== (D = N.cloud.options) && void 0 !== D && D.disableWebSocket || Nn || i.push(function(e) {
							var t;
							if (!(null === (t = e.cloud.options) || void 0 === t ? void 0 : t.databaseUrl)) throw new Error("No database URL to connect WebSocket to");
							const r = merge(e.messageConsumer.readyToServe.pipe(filter((e) => e), switchMap(() => e.getPersistedSyncState()), filter((e) => !(!e || !e.serverRevision)), switchMap((e) => Z(this, void 0, void 0, function* () {
								return {
									type: "ready",
									rev: e.serverRevision,
									realmSetHash: yield Ge(e)
								};
							}))), e.messageProducer);
							return function t() {
								return e.cloud.persistedSyncState.pipe(filter((e) => null == e ? void 0 : e.serverRevision), take(1), switchMap((t) => e.cloud.currentUser.pipe(map$1((e) => [e, t]))), switchMap(([e, t]) => sr.pipe(map$1((n) => [n ? e : null, t]))), switchMap(([t, n]) => (null == t ? void 0 : t.isLoggedIn) && !(null == n ? void 0 : n.realms.includes(t.userId)) ? e.cloud.persistedSyncState.pipe(filter((e) => (null == e ? void 0 : e.realms.includes(t.userId)) || !1), take(1), map$1((e) => [t, e])) : new BehaviorSubject([t, n])), switchMap((e) => Z(this, [e], void 0, function* ([e, t]) {
									return [e, yield Ge(t)];
								})), distinctUntilChanged(([e, t], [n, r]) => e === n && t === r), switchMap(([n, o]) => {
									var i;
									return (null === (i = e.cloud.persistedSyncState) || void 0 === i ? void 0 : i.value) ? n ? new hr(e, e.cloud.persistedSyncState.value.serverRevision, e.cloud.persistedSyncState.value.yServerRevision, o, e.cloud.persistedSyncState.value.clientIdentity, r, e.cloud.webSocketStatus, n) : from$1([]) : t();
								}), catchError((n) => "TokenExpiredError" === (null == n ? void 0 : n.name) ? of(!0).pipe(switchMap(() => Z(this, void 0, void 0, function* () {
									const t = yield e.getCurrentUser(), n = yield vt(e.cloud.options.databaseUrl, t);
									yield e.table("$logins").update(t.userId, {
										accessToken: n.accessToken,
										accessTokenExpiration: n.accessTokenExpiration,
										claims: n.claims,
										license: n.license,
										data: n.data
									});
								})), switchMap(() => t())) : throwError(() => n)), catchError((n) => (e.cloud.webSocketStatus.next("error"), n instanceof br ? throwError(() => n) : from$1(gr()).pipe(switchMap(() => t())))));
							}().subscribe({
								next: (t) => {
									t && e.messageConsumer.enqueue(t);
								},
								error: (e) => {},
								complete: () => {}
							});
						}(N));
					});
				}(t);
			} catch (e) {}
		}), !0);
		let b = !1;
		function g() {
			if (b) throw new Dexie.DatabaseClosedError();
		}
		t.once("close", () => {
			i.forEach((e) => e.unsubscribe()), i.splice(0, i.length), b = !0, m && m.stop(), m = null, o.next(re);
		});
		const w = new Subject(), k = new BehaviorSubject(!1);
		var S;
		t.cloud = {
			version: "4.4.14",
			options: Object.assign({}, ni),
			schema: null,
			get currentUserId() {
				return o.value.userId || re.userId;
			},
			currentUser: o,
			syncState: new BehaviorSubject({
				phase: "initial",
				status: "not-started"
			}),
			events: { syncComplete: w },
			persistedSyncState: new BehaviorSubject(void 0),
			blobProgress: mn(yn(t), k),
			userInteraction: new BehaviorSubject(void 0),
			webSocketStatus: new BehaviorSubject("not-started"),
			login(e) {
				return Z(this, void 0, void 0, function* () {
					const n = yn(t);
					yield n.cloud.sync(), yield $n(n, e);
				});
			},
			invites: Zo(t),
			roles: qo(t),
			configure(e) {
				void 0 !== e.maxStringLength && void 0 === e.largeStringThreshold && (e = Object.assign(Object.assign({}, e), { largeStringThreshold: e.maxStringLength }));
				const r = e.largeStringThreshold;
				if (void 0 !== r && r !== 1 / 0 && (!Number.isFinite(r) || r < 100 || r > 32768)) throw new Error(`largeStringThreshold must be Infinity or a finite number in [100, 32768]. Got: ${r}`);
				if (e = t.cloud.options = Object.assign(Object.assign({}, t.cloud.options), e), d = !0, e.databaseUrl && e.nameSuffix && (t.name = `${n}-${function(e) {
					const t = new URL(e);
					return "/" === t.pathname ? t.hostname.split(".")[0] : t.pathname.split("/")[1];
				}(e.databaseUrl)}`, yn(t).reconfigure()), xr(t.cloud.schema, t.cloud.options), "undefined" != typeof window && window.location) try {
					const e = ei();
					e && (f = {
						code: e.code,
						provider: e.provider
					});
				} catch (e) {
					e instanceof On && (v = e);
				}
			},
			logout() {
				return Z(this, arguments, void 0, function* ({ force: e } = {}) {
					e ? yield Sn(yn(t), { deleteUnsyncedData: !0 }) : yield kn(yn(t));
				});
			},
			getAuthProviders() {
				return Z(this, void 0, void 0, function* () {
					const e = t.cloud.options;
					if (!(null == e ? void 0 : e.databaseUrl)) throw new Error("Dexie Cloud not configured. Call db.cloud.configure() first.");
					const n = !1 !== e.socialAuth;
					return An(e.databaseUrl, n);
				});
			},
			sync() {
				return Z(this, arguments, void 0, function* ({ wait: e, purpose: n } = {
					wait: !0,
					purpose: "push"
				}) {
					var o;
					void 0 === e && (e = !0);
					const i = yn(t);
					if ("ok" !== ((null === (o = i.cloud.currentUser.value.license) || void 0 === o ? void 0 : o.status) || "ok") && (yield yt(i)), "pull" === n) {
						const t = i.cloud.persistedSyncState.value;
						if (de(i, n), e) {
							const e = yield firstValueFrom(i.cloud.persistedSyncState.pipe(filter((e) => null != (null == e ? void 0 : e.timestamp) && (!t || e.timestamp > t.timestamp))));
							if (null == e ? void 0 : e.error) throw new Error("Sync error: " + e.error);
						}
					} else if (yield _r(i)) {
						const t = i.cloud.persistedSyncState.value;
						de(i, n), e && (yield firstValueFrom(from$1(liveQuery(() => Z(this, void 0, void 0, function* () {
							const e = yield _r(i), n = yield i.getPersistedSyncState();
							if ((null == n ? void 0 : n.timestamp) !== (null == t ? void 0 : t.timestamp) && (null == n ? void 0 : n.error)) throw new Error("Sync error: " + n.error);
							return e;
						}))).pipe(filter((e) => !e))));
					}
				});
			},
			permissions: (e, n) => function(e, t, n) {
				if (!t) throw new TypeError("Cannot check permissions of undefined or null. A Dexie Cloud object with realmId and owner expected.");
				const { owner: r, realmId: o } = t;
				if (!n) {
					if ("function" != typeof t.table) throw new TypeError("Missing 'table' argument to permissions and table could not be extracted from entity");
					n = t.table();
				}
				const i = Yo(e), s = (t) => {
					const i = t[o || e.cloud.currentUserId];
					return i ? new Qo(i.permissions, n, void 0 === o || o === e.cloud.currentUserId || r === e.cloud.currentUserId) : new Qo({}, n, !r || r === e.cloud.currentUserId);
				}, a = i.pipe(map$1(s));
				return a.getValue = () => s(i.getValue()), a;
			}(t._novip, e, n)
		}, t.Version.prototype._parseStoresSpec = Dexie.override(t.Version.prototype._parseStoresSpec, (e) => rr(e, t)), t.Table.prototype.newId = function({ colocateWith: e } = {}) {
			const n = e && e.substr(e.length - 3);
			return qn(t.cloud.schema[this.name].idPrefix || "", n);
		}, t.Table.prototype.idPrefix = function() {
			var e, t;
			return (null === (t = null === (e = this.db.cloud.schema) || void 0 === e ? void 0 : e[this.name]) || void 0 === t ? void 0 : t.idPrefix) || "";
		}, t.use(tr(yn(t))), t.use(er({
			currentUserObservable: t.cloud.currentUser,
			db: yn(t)
		})), t.use((S = yn(t), {
			stack: "dbcore",
			name: "implicitPropSetterMiddleware",
			level: 1,
			create: (e) => Object.assign(Object.assign({}, e), { table: (t) => {
				const n = e.table(t);
				return Object.assign(Object.assign({}, n), { mutate: (e) => {
					var r, o, i, s, a, c;
					const l = e.trans;
					if (l.disableChangeTracking) return n.mutate(e);
					const u = null !== (o = null === (r = l.currentUser) || void 0 === r ? void 0 : r.userId) && void 0 !== o ? o : re.userId;
					if ((null === (s = null === (i = S.cloud.schema) || void 0 === i ? void 0 : i[t]) || void 0 === s ? void 0 : s.markedForSync) && ("add" === e.type || "put" === e.type)) {
						if ("members" === t) for (const t of e.values) "string" == typeof t.email && (t.email = t.email.trim().toLowerCase());
						for (const t of e.values) {
							t.owner || (t.owner = u), t.realmId || (t.realmId = u);
							const r = null === (c = (a = n.schema.primaryKey).extractKey) || void 0 === c ? void 0 : c.call(a, t);
							"string" == typeof r && "#" === r[0] && "put" === e.type && (delete e.criteria, delete e.changeSpec, e.upsert || delete e.updates, t.$ts = Date.now());
						}
					}
					return n.mutate(e);
				} });
			} })
		})), t.use(Jn(yn(t)));
	}
	ri.version = "4.4.14", Dexie.Cloud = ri;
	var oi = /* @__PURE__ */ new Map();
	function ii(e) {
		return e.startsWith("dexie-cloud:") && e.split(":")[1];
	}
	var si = /* @__PURE__ */ new Map();
	function ai(t, n) {
		let r = si.get(t + "/" + n);
		return r || (r = function t(n, r) {
			return Z(this, void 0, void 0, function* () {
				var o;
				let i = oi.get(n);
				if (!i) {
					const o = new Dexie(n, { addons: [ri] });
					if (i = yn(o), i.cloud.isServiceWorkerDB = !0, o.on("versionchange", s), yield i.dx.open(), oi.get(n)) return i.close(), yield t(n, r);
					oi.set(n, i);
				}
				if ((null === (o = i.cloud.options) || void 0 === o ? void 0 : o.databaseUrl) && i.cloud.schema) try {
					yield kr(i, i.cloud.options, i.cloud.schema, {
						retryImmediatelyOnFetchError: !0,
						purpose: r
					});
				} catch (t) {
					if (s(), t.name !== Dexie.errnames.NoSuchDatabase) throw t;
				}
				function s() {
					return i.dx.on.versionchange.unsubscribe(s), oi.get(i.name) === i && oi.delete(i.name), i.dx.close(), !1;
				}
			});
		}(t, n).then(() => {
			si.delete(t + "/" + n);
		}).catch((e) => (si.delete(t + "/" + n), Promise.reject(e))), si.set(t + "/" + n, r)), r;
	}
	Dn || (self.addEventListener("sync", (e) => {
		const t = ii(e.tag);
		t && e.waitUntil(ai(t, "push"));
	}), self.addEventListener("periodicsync", (e) => {
		const t = ii(e.tag);
		t && e.waitUntil(ai(t, "pull"));
	}), self.addEventListener("message", (e) => {
		if ("dexie-cloud-sync" === e.data.type) {
			const { dbName: t } = e.data, n = (r = 1) => ai(t, e.data.purpose || "pull").catch((e) => Z(void 0, void 0, void 0, function* () {
				if (3 === r) throw e;
				var t;
				yield (t = 6e4, new Promise((e) => setTimeout(e, t))), n(r + 1);
			}));
			"waitUntil" in e ? e.waitUntil(n().catch((e) => {})) : n().catch((e) => {});
		}
	}));
	//#endregion
	//#region src/sw.js
	var CACHE_NAME = "jet-schoolhouse-shell-v2";
	var APP_ROOT = "/jetschoolhouse-dexie-test/";
	var APP_SHELL = [
		APP_ROOT,
		APP_ROOT + "index.html",
		APP_ROOT + "manifest.webmanifest"
	];
	self.addEventListener("install", (event) => {
		event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(APP_SHELL);
		}));
	});
	self.addEventListener("activate", (event) => {
		event.waitUntil(caches.keys().then((names) => {
			return Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)));
		}));
	});
	self.addEventListener("fetch", (event) => {
		const request = event.request;
		const url = new URL(request.url);
		if (request.method !== "GET" || url.origin !== self.location.origin || !url.pathname.startsWith(APP_ROOT)) return;
		event.respondWith(caches.match(request).then((cached) => {
			if (cached) return cached;
			return fetch(request).then((response) => {
				if (!response || response.status !== 200) return response;
				const copy = response.clone();
				caches.open(CACHE_NAME).then((cache) => {
					cache.put(request, copy);
				});
				return response;
			});
		}));
	});
	//#endregion
})();
