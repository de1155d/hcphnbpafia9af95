// ==UserScript==
// @name         filter none
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fc2cm.com/*
// @match https://fc2contents.h-walker.net/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

     GM_addStyle('img { filter: none !important; }');
    // Your code here...
})();
