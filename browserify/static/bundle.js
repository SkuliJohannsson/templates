(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var uniq = require('uniq');
var nums = [ 1411, 1, 3, 2, 5, 4, 2, 0, 1 ];
document.write(uniq(nums));
},{"uniq":2}],2:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1VzZXJzL3Nram8yMC9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibWFpbi5qcyIsIm5vZGVfbW9kdWxlcy91bmlxL3VuaXEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHVuaXEgPSByZXF1aXJlKCd1bmlxJyk7XHJcbnZhciBudW1zID0gWyAxNDExLCAxLCAzLCAyLCA1LCA0LCAyLCAwLCAxIF07XHJcbmRvY3VtZW50LndyaXRlKHVuaXEobnVtcykpOyIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIHVuaXF1ZV9wcmVkKGxpc3QsIGNvbXBhcmUpIHtcbiAgdmFyIHB0ciA9IDFcbiAgICAsIGxlbiA9IGxpc3QubGVuZ3RoXG4gICAgLCBhPWxpc3RbMF0sIGI9bGlzdFswXVxuICBmb3IodmFyIGk9MTsgaTxsZW47ICsraSkge1xuICAgIGIgPSBhXG4gICAgYSA9IGxpc3RbaV1cbiAgICBpZihjb21wYXJlKGEsIGIpKSB7XG4gICAgICBpZihpID09PSBwdHIpIHtcbiAgICAgICAgcHRyKytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxpc3RbcHRyKytdID0gYVxuICAgIH1cbiAgfVxuICBsaXN0Lmxlbmd0aCA9IHB0clxuICByZXR1cm4gbGlzdFxufVxuXG5mdW5jdGlvbiB1bmlxdWVfZXEobGlzdCkge1xuICB2YXIgcHRyID0gMVxuICAgICwgbGVuID0gbGlzdC5sZW5ndGhcbiAgICAsIGE9bGlzdFswXSwgYiA9IGxpc3RbMF1cbiAgZm9yKHZhciBpPTE7IGk8bGVuOyArK2ksIGI9YSkge1xuICAgIGIgPSBhXG4gICAgYSA9IGxpc3RbaV1cbiAgICBpZihhICE9PSBiKSB7XG4gICAgICBpZihpID09PSBwdHIpIHtcbiAgICAgICAgcHRyKytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxpc3RbcHRyKytdID0gYVxuICAgIH1cbiAgfVxuICBsaXN0Lmxlbmd0aCA9IHB0clxuICByZXR1cm4gbGlzdFxufVxuXG5mdW5jdGlvbiB1bmlxdWUobGlzdCwgY29tcGFyZSwgc29ydGVkKSB7XG4gIGlmKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICBpZihjb21wYXJlKSB7XG4gICAgaWYoIXNvcnRlZCkge1xuICAgICAgbGlzdC5zb3J0KGNvbXBhcmUpXG4gICAgfVxuICAgIHJldHVybiB1bmlxdWVfcHJlZChsaXN0LCBjb21wYXJlKVxuICB9XG4gIGlmKCFzb3J0ZWQpIHtcbiAgICBsaXN0LnNvcnQoKVxuICB9XG4gIHJldHVybiB1bmlxdWVfZXEobGlzdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxdWVcbiJdfQ==
