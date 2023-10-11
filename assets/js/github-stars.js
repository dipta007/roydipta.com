/*

  github-stars.js - v1
  JavaScript library for counting stars on a repo or user/org
  githubStars("stretchr/arg.js")

  by Ryan Quinn
  Copyright (c) 2013 Stretchr, Inc.

  Please consider promoting this project if you find it useful.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
  to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies
  or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
  FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.

*/
!function(t){t.githubStars=function(t,e){function n(t){t instanceof Array||(t=[t]);var e=0;for(var n in t)e+=parseInt(t[n].stargazers_count);return e}var s=t.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);t=`${s[1]}/${s[2]}`;var o=new XMLHttpRequest,r=["https://api.github.com"],a="function"==typeof e;if(1===(t=t.split("/")).length?r.push("users",t[0],"repos"):r.push("repos",t[0],t[1]),a&&(o.onreadystatechange=function(){4==o.readyState&&200==o.status&&e(n(JSON.parse(o.responseText)))}),o.open("GET",r.join("/"),a),o.setRequestHeader("Accept","application/vnd.github.v3+json"),o.setRequestHeader("Authorization","token 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"),o.send(),!a)return n(JSON.parse(o.responseText))}}("undefined"!=typeof exports?exports:window);