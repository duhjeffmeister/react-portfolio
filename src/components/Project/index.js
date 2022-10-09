import React from 'react'

function Project() {
  return (
    <div className="my-2">
      <p>Portfolio Page</p>
      <section id="work">
        <div class="portfolio-sections">
          <div class="projects">
            <a
              href="https://duhjeffmeister.github.io/project1/"
              class=" project first"
            >
              <div>
                <p class="project-name">
                  Trov: A Space Site
                </p>
              </div>
            </a>
            <a
              href="https://movie-central-retro.herokuapp.com/"
              class=" project second"
            >
              <div>
                <p>
                  Movie Central
                </p>
              </div>
            </a>
            <a
              href="https://duhjeffmeister.github.io/run-buddy"
              class=" project third"
            >
              <div>
                <p>
                  Run Buddy
                </p>
              </div>
            </a>
            <a
              href="https://duhjeffmeister.github.io/weather-dashboard/"
              class=" project fourth"
            >
              <div>
                <p>
                  Weather Dashboard
                </p>
              </div>
            </a>
            <a
              href="https://hobby-central.herokuapp.com/"
              class=" project fifth"
            >
              <div>
                <p>
                  Hobby Central
                </p>
              </div>
            </a>
            <a
              href="https://duhjeffmeister.github.io/password-generator/"
              class=" project sixth"
            >
              <div>
                <p>
                  Password Generator
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
