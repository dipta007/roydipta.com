---
layout: page
title: Awards
permalink: /awards/
description:
---

<div id="awards">
  <div id="accordion">
    {%- assign awards = site.awards | sort: 'order' -%}
    {%- for award in awards -%}
    <div class="card">
      <div class="card-header" id="{{forloop.index}}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapse{{forloop.index}}"
            aria-expanded="true" aria-controls="collapse{{forloop.index}}">
            {{award.title}}
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
          {{award.content}}
        </div>
      </div>
    </div>
    {%- endfor -%}
  </div>
</div>
