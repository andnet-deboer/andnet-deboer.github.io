<div class="container-fluid p-0">
    <div class="row g-0">
        {% for project in site.projects limit:6 %}
            <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box" href="{{ project.url }}" title="{{ project.title }}">
                    <img class="img-fluid" src="{{ site.baseurl }}/assets/img/portfolio/{{ project.image }}" alt="{{ project.title }} preview" />
                    <div class="portfolio-box-caption">
                        <!-- In the final custom CSS, this text will be positioned clearly below the image -->
                        <div class="project-category text-white-50">{{ project.tags | join: ' | ' }}</div>
                        <div class="project-name">{{ project.title }}</div>
                    </div>
                </a>
                <!-- NOTE: To exactly match the sample, you'll need custom CSS to display the category/title text *below* the image tile, not just on hover. -->
                <div class="p-3">
                    <div class="project-category fw-bold">{{ project.tags | join: ' | ' }}</div>
                    <div class="project-name text-dark fw-normal">{{ project.title }}</div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>
