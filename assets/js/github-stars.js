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
!function(e){e.githubStars=function(e,t){function n(e){e instanceof Array||(e=[e]);var t=0;for(var n in e)t+=parseInt(e[n].stargazers_count);return t}var s=e.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);e=`${s[1]}/${s[2]}`;var r=new XMLHttpRequest,o=["https://api.github.com"],a="function"==typeof t;if(1===(e=e.split("/")).length?o.push("users",e[0],"repos"):o.push("repos",e[0],e[1]),a&&(r.onreadystatechange=function(){4==r.readyState&&200==r.status&&t(n(JSON.parse(r.responseText)))}),r.open("GET",o.join("/"),a),r.setRequestHeader("Accept","application/vnd.github.v3+json"),r.setRequestHeader("Authorization","token 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"),r.send(),!a)return n(JSON.parse(r.responseText))}}("undefined"!=typeof exports?exports:window);