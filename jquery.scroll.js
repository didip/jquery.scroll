/*
 * jQuery Scroll
 * Copyright (c) 2010 Didip Kerabat
 * GPL2 and LGPL licensed.
 *
 * See: http://www.jr.pl/www.quirksmode.org/viewport/compatibility.html
 * for more details
 *
 * Does not work in Opera
 */
jQuery.fn.extend({
  scrollMaxX: function() {
   if (this[0] === window) {
     if (window.scrollMaxX == undefined) {
       return document.documentElement.scrollWidth - document.documentElement.clientWidth;
     }
     else { return window.scrollMaxX; }
   }
   return this;
  },

  scrollMaxY: function() {
   if (this[0] === window) {
     if (window.scrollMaxY == undefined) {
       return document.documentElement.scrollHeight - document.documentElement.clientHeight;
     }
     else { return window.scrollMaxY; }
   }
   return this;
  },

  pageXOffset: function() {
   if (this[0] === window) {
     if (window.pageXOffset == undefined) {
       return document.documentElement.scrollLeft;
     }
     else { return window.pageXOffset; }
   }
   return this;
  },

  pageYOffset: function() {
   if (this[0] === window) {
     if (window.pageYOffset == undefined) {
       return document.documentElement.scrollTop;
     }
     else { return window.pageYOffset; }
   }
   return this;
  },

  scrollX: function() {
    if (this[0] === window) { return $(window).pageXOffset(); }
    return this;
  },

  scrollY: function() {
    if (this[0] === window) { return $(window).pageYOffset(); }
    return this;
  }
});
