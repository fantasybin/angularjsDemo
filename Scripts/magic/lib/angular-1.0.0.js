/*
         AngularJS v1.0.0rc1
         (c) 2010-2012 AngularJS http://angularjs.org
         License: MIT
        */
        'use strict'; (function (i) {
            function d(c, a, e) { return c[a] || (c[a] = e()) } return d(d(i, "angular", Object), "module", function () {
                var c = {}; return function (a, e, f) {
                    e && c.hasOwnProperty(a) && (c[a] = null); return d(c, a, function () {
                        function b(a, b, d) { return function () { c[d || "push"]([a, b, arguments]); return g } } if (!e) throw Error("No module: " + a); var c = [], d = [], h = b("$injector", "invoke"), g = {
                            _invokeQueue: c, _runBlocks: d, requires: e, name: a, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"),
                            value: b("$provide", "value"), constant: b("$provide", "constant", "unshift"), filter: b("$filterProvider", "register"), directive: b("$compileProvider", "directive"), config: h, run: function (a) { d.push(a); return this }
                        }; f && h(f); return g
                    })
                }
            })
        })(window);