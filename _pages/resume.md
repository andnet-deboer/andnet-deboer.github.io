---
layout: page
title: Resume
permalink: /resume/
---

<style>
  /* Hide page header */
  .page-header {
    display: none;
  }
  
  /* Make page container full-width */
  .page-container {
    max-width: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
  /* Make page content full-width */
  .page-content {
    margin: 0;
    padding-top: 0.5rem;
  }
  
  /* Resume container */
  .resume-container {
    width: 60vw; /* Desktop: centered at 60% width */
    height: calc(100vh - 80px);
    margin-left: auto;
    margin-right: auto;
  }
  
  .pdf-embed {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    display: block;
  }
  
  /* Tablet - wider */
  @media (max-width: 1024px) {
    .resume-container {
      width: 90vw;
    }
  }
  
  /* Mobile - FULL WIDTH */
  @media (max-width: 768px) {
    .resume-container {
      width: 100vw;
      height: calc(100vh - 60px);
      margin-left: calc(-50vw + 50%); /* Break out of any container */
      padding: 0;
    }
    
    .pdf-embed {
      border: none;
    }
  }
</style>

<div class="resume-container">
  <embed 
    src="{{ '/assets/resume/resume.pdf' | relative_url }}"
    type="application/pdf"
    class="pdf-embed"
    title="Resume"
  />
  
  <noscript>
    <p style="padding: 2rem; text-align: center;">
      Your browser does not support embedded PDFs. 
      <a href="{{ '/assets/resume/resume.pdf' | relative_url }}" download>Download the resume</a> instead.
    </p>
  </noscript>
</div>