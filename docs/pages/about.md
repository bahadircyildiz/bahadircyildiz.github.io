---
layout: page
title: About
permalink: /about/
weight: 3

# Project Partial Data
projects:
    title: "Projects"
---

## Personal Information

**Address**     : 77 sok. No:7 Daire:3 Göztepe Mahallesi, Konak/IZMIR – TR

**GSM**         : +90 505 801 7933

**E-Mail**      : [bahadircanyildiz@gmail.com](mailto:bahadircanyildiz@gmail.com)

## About Me

Software Engineer with 6 years of experience, interested in trending technologies and developer-friendly solutions. Collaborated with world-wide projects and embraced the remote working principles. Mainly a JavaScript enthusiast. Huge fan of open-source community and DIY.

<div class="row">
    {% include about/timeline.html title="Educational Information" source=site.data.education %}
</div>

<div class="row">
    <div class="col-8">
        {% include about/c_skills.html title="Programming Skills" source=site.data.programming-skills %}
    </div>
    <div class="col-4">
        {% include about/skills.html title="Other" source=site.data.other-skills %}
    </div>
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