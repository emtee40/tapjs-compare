/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/match.js TAP arrays matched against object sets > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP ctors and other fun things > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Buffer <61 73 64 66 66>
+Buffer <61 73 64 66>

`

exports[`test/match.js TAP ctors and other fun things > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP ctors and other fun things > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP ctors and other fun things > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "inf": Function Number(),
+  "inf": null,
 }

`

exports[`test/match.js TAP ctors and other fun things > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "neginf": Function Number(),
+  "neginf": null,
 }

`

exports[`test/match.js TAP ctors and other fun things > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "nan": Function Number(),
+  "nan": null,
 }

`

exports[`test/match.js TAP different arrays don't match > must match snapshot 1`] = `
--- expected
+++ actual
@@ -2,5 +2,4 @@
   1,
   2,
   3,
-  4,
 ]

`

exports[`test/match.js TAP different arrays don't match > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,5 +1,5 @@
 Array [
   1,
   2,
-  4,
+  3,
 ]

`

exports[`test/match.js TAP different numbers don't match > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-1
+0

`

exports[`test/match.js TAP different numbers don't match > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
--1
+1

`

exports[`test/match.js TAP different numbers don't match > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-2.72
+3.14

`

exports[`test/match.js TAP diffs of errors with \\n in the message > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,6 +1,6 @@
 Error: foo
 bar {
-  "foo": "two",
+  "foo": "bar",
   "name": "Error",
   "message": String(
     foo

`

exports[`test/match.js TAP diffs of errors with \\n in the message > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,7 +1,7 @@
 Object {
   "er": Error: foo
 bar {
-    "foo": "two",
+    "foo": "bar",
     "name": "Error",
     "message": String(
       foo

`

exports[`test/match.js TAP empty arrays match > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP empty arrays match > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP errors can only be satisfied by errors > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP errors can only be satisfied by errors > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,6 @@
 Object {
-  "er": TypeError: asdf,
+  "er": Object {
+    "name": "TypeError",
+    "message": "asdf",
+  },
 }

`

exports[`test/match.js TAP errors can only be satisfied by errors > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP errors can only be satisfied by errors > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP errors can only be satisfied by errors > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "er": Error: fdsa,
+  "er": TypeError: asdf,
 }

`

exports[`test/match.js TAP errors can only be satisfied by errors > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,5 +1,3 @@
 Object {
-  "er": Object {
-    "message": "yolo",
-  },
+  "er": TypeError: asdf,
 }

`

exports[`test/match.js TAP extra keys in object are ok > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP iterables match one another > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP iterables match one another > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP iterables match one another > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP js WAT! array/string stuff > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,3 @@
-1
+Array [
+  1,
+]

`

exports[`test/match.js TAP js WAT! array/string stuff > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,1 @@
-Array [
-  1,
-]
+1

`

exports[`test/match.js TAP js WAT! array/string stuff > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP js WAT! array/string stuff > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP js WAT! array/string stuff > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP match shouldn't blow up on circular data structures > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP match shouldn't blow up on circular data structures > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP match shouldn't blow up on circular data structures > must match snapshot 3`] = `
--- expected
+++ actual
@@ -3,5 +3,11 @@
   "y": Object {
     "x": <*ref_1>,
   },
-  "other": <*ref_1>,
+  "other": &ref_2 Object {
+    "z": 4,
+    "y": Object {
+      "x": <*ref_2>,
+    },
+    "other": <*ref_2>,
+  },
 }

`

exports[`test/match.js TAP null is as shallow as you'd expect > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP null is as shallow as you'd expect > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP null is as shallow as you'd expect > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP partial strings match on indexOf > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP partial strings match on indexOf > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "one": "String",
+  "one": "rin",
 }

`

exports[`test/match.js TAP regexps match strings > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP regexps match strings > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP regexps match strings > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP regexps match strings > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Array [
-  /.ring$/,
+  "Ring",
 ]

`

exports[`test/match.js TAP same arrays match > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP set vs non-set, map vs non-map > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
 Object {
-  "set": Map {},
+  "set": Set {},
   "map": Map {},
 }

`

exports[`test/match.js TAP set vs non-set, map vs non-map > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
 Object {
   "set": Set {},
-  "map": Set {},
+  "map": Map {},
 }

`

exports[`test/match.js TAP set vs non-set, map vs non-map > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
 Object {
-  "set": Array [],
-  "map": Function Array(),
+  "set": Set {},
+  "map": Map {},
 }

`

exports[`test/match.js TAP shallower shouldn't care about key order recursively and types > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-/[a]/
+/[b]/

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-/[a]/g
+/[a]/i

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,1 +1,5 @@
-/asdf/
+Array [
+  1,
+  2,
+  3,
+]

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 6`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 7`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 8`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle RegExps > must match snapshot 9`] = `
--- expected
+++ actual
@@ -1,1 +1,3 @@
-/^FooBar$/
+Object {
+  "toString": Function toString(),
+}

`

exports[`test/match.js TAP should handle arguments > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle arguments > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle arguments > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle bigints > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-null
+1n

`

exports[`test/match.js TAP should handle bigints > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-undefined
+1n

`

exports[`test/match.js TAP should handle bigints > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle bigints > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle bigints > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle bigints > must match snapshot 6`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle dates > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-null
+1972-08-01T00:00:00.000Z

`

exports[`test/match.js TAP should handle dates > must match snapshot 2`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-undefined
+1972-08-01T00:00:00.000Z

`

exports[`test/match.js TAP should handle dates > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle dates > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle functions > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle functions > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle functions > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,1 +1,1 @@
-Function fnB(a)
+Function fnA(a)

`

exports[`test/match.js TAP should handle functions > must match snapshot 4`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should handle functions > must match snapshot 5`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should notice objects with different keys > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,3 @@
 Object {
   "a": 1,
-  "c": 2,
 }

`

exports[`test/match.js TAP should notice objects with different shapes > must match snapshot 1`] = `
--- expected
+++ actual
@@ -1,4 +1,4 @@
 Object {
   "a": 1,
-  "b": undefined,
+  "b": "a thing",
 }

`

exports[`test/match.js TAP should notice objects with different shapes > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP should notice objects with different shapes > must match snapshot 3`] = `
--- expected
+++ actual
@@ -1,5 +1,3 @@
 Object {
-  "at": Object {
-    "line": Function Number(),
-  },
+  "at": null,
 }

`

exports[`test/match.js TAP shouldn't care about key order and types > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP symbology > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP symbology > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP symbology > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP symbology > must match snapshot 4`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": "Symbol(a)",
+  "a": Symbol(a),
 }

`

exports[`test/match.js TAP symbology > must match snapshot 5`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }

`

exports[`test/match.js TAP symbology > must match snapshot 6`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Symbol(a),
+  "a": "Symbol(a)",
 }

`

exports[`test/match.js TAP symbology > must match snapshot 7`] = `
--- expected
+++ actual
@@ -1,3 +1,3 @@
 Object {
-  "a": Function Symbol(),
+  "a": "Symbol(a)",
 }

`

exports[`test/match.js TAP the same number matches > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP the same number matches > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP the same number matches > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP tmatch shouldn't care about key order (but still might) and types > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP undefined and null are Close Enough > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP undefined and null are Close Enough > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP undefined and null are Close Enough > must match snapshot 3`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP undefined is the same as itself > must match snapshot 1`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP undefined is the same as itself > must match snapshot 2`] = `
--- expected
+++ actual

`

exports[`test/match.js TAP undefined is the same as itself > must match snapshot 3`] = `
--- expected
+++ actual

`
