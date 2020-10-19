---
layout: page
title: About
permalink: /about/
weight: 3

# Project Partial Data
projects:
    title: "Projects"
    remote_projects:
    - MerdivanMobile
    - PHPFuzzy
---

# **About Me**

<div class="col-lg">
    <p class="row text-justify">
    Software Engineer with 6 years of experience, interested in trending technologies and developer-friendly solutions. Collaborated with world-wide projects and embraced the remote working principles. Mainly a JavaScript enthusiast. Huge fan of open-source community and DIY.
    </p>
</div>

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html title="Job Experiences" source=site.data.job-experiences %}
</div>

<div class="row">
{% include about/projects.html %}
</div>

<a id="downloadCV" class="m-1 btn btn-outline-primary btn-md btn-block" onclick="downloadCV();">
  Download PDF
</a>