---
layout: page
title: Certificates
permalink: /certificates/
description:
---

<div id="certificates">
  <div id="accordion">
    {%- assign certificates = site.certificates | sort: 'order' -%}
    {%- for certificate in certificates -%}
    <div class="card">
      <div class="card-header" id="{{forloop.index}}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapse{{forloop.index}}"
            aria-expanded="true" aria-controls="collapse{{forloop.index}}">
            {{certificate.title}}
          </button>
        </h5>
      </div>

      {% assign classname = "collapse" %}
      {% if forloop.index == 1 %}
      {% assign classname = "collapse show" %}
      {% endif %}
      <div id="collapse{{forloop.index}}" class="{{classname}}" aria-labelledby="{{forloop.index}}"
        data-parent="#accordion">
        <div class="card-body">
          {{certificate.content}}
        </div>
      </div>
    </div>
    {%- endfor -%}
  </div>
</div>
