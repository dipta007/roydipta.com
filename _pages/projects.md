---
layout: page
title: Projects
hide_title: true
permalink: /projects/
description:
nav: true
nav_order: 2
display_categories: [Machine-Learning, Data-Science]
---

<!-- pages/projects.md -->
<div class="projects">
  {%- if site.enable_project_categories and page.display_categories %}
    <div class="button-group filter-button-group text-center" style="margin-bottom: 40px">
      {%- for category in page.display_categories %}
        <a class="btn btn-sm btn-primary" data-filter=".{{category | downcase}}">{{category | replace: "-", " "}}</a>
      {%- endfor %}
      <a class="btn btn-sm btn-primary active" data-filter="*">All</a>
    </div>
  {%- endif -%}

  <!-- Display categorized projects -->
  <!-- {%- assign sorted_projects = site.projects | sort: "importance" %} -->
  <!-- Generate cards for each project -->
  <div class="portfolio-grid">
    <div class="grid-sizer"></div>
    {%- for project in site.projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
</div>
