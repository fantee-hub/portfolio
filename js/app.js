const PageState = function () {
  let currentState = new homePage(this);

  this.init = function () {
    this.change(new homePage());
  };
  this.change = function (state) {
    currentState = state;
  };
};

const homePage = function () {
  document.querySelector(".container").innerHTML = `
  <div class="home-container">
    <div class="home-content">
      <h3 class="hero">Hi &#128075;</h3>
      <h1 class="hero">I'm Tobi <span>Faniran</span></h1>
      <p class="hero">Front End Web Developer</p>
    </div>
    <ul class="home-links">
    <li><a href="https://github.com/fantee-hub"><i class="fab fa-github"></i></a>
    <li><a href="https://www.linkedin.com/in/faniran-tobi-80a621127"><i class="fab fa-linkedin-in"></i></a>
    <li><a href="https://twitter.com/king_kunmi?s=08"><i class="fab fa-twitter"></i></a>

  </ul>
  </div>
  `;
};

const aboutPage = function () {
  document.querySelector(".container").innerHTML = `
  <div class="about-container">
    <div class="about-content">
      <div class="about-header">
        <h1> <span> A <br/> B <br/> O <br/> U <br/> T <span>
      </div>
      <div class="about-text">
        <p class="text">Hello! I'm Tobi, <span>a passionate front-end developer</span>
        with a background in Mechanical Engineering.  I thrive at the intersection of creativity and technology, 
        where I transform ideas into captivating user experiences. <span>Front-end development is where i truly shine.</span>
        I'm well-versed in a range of front-end technologies, including HTML5, CSS3, JavaScript, and popular frameworks like React.js.
        I have a knack for translating designs into pixel-perfect, responsive web applications that engage users and 
        deliver a seamless experience.
        </p>
        <p class="text">
        What fuels my passion for front-end development is the opportunity to create visually stunning 
        and intuitive user interfaces. I obsess over the finer details, ensuring that every button, animation, and 
        layout contributes to a flawless user journey.
        </p>
        <p class="text">
        As I look ahead, I'm eager to contribute my front-end development expertise to innovative projects and collaborate with 
        talented professionals. I'm excited about the limitless potential of web development and the opportunity to create solutions 
        that leave a lasting impact.
        </p>
        <p class="text">If you share my passion for front-end development or are interested in collaborating on web projects, I'd love to connect. Feel free to reach out, and 
        let's explore the endless possibilities of web development together.<br/> You can reach out to me here <span><a href="mailto:tobifaniran@gmail.com"><i class="far fa-envelope"></i> tobifaniran@gmail.com </a><span></p>
      </div>
      
    </div>
  </div>

  `;
};
const workPage = function () {
  document.querySelector(".container").innerHTML = `
  <div class="work-container">
    <div class="work-content">
      <div class="work-head">
          <h1> <span> P <br/> R <br/> O <br/> J <br/> E <br/> C <br/> T <br/> S <span>
      </div>
      <div class="works">
        <div class="work-cont">
          <img src="/images/votar.png" alt="">
          <div class="work-text">
            <h4>Votar</h4>
            <p>Nextjs + Tailwind css + Typescript</p>
          </div>
          <div class="main-content">
            <p>e-Voting Platform <span class="text-italic">(In progress)<span></p>
            <span><a href="https://www.votar.ng/" class="live" target="_blank"><i class="fas fa-eye"></i> Live</a></span>
          </div>
       </div>


        <div class="work-cont">
          <img src="/images/getLinked.png" alt="">
          <div class="work-text">
            <h4>getLinked</h4>
            <p>Nextjs + Tailwind css + Typescript</p>
          </div>
          <div class="main-content">
            <p>getLinked Landing Page</p>
            <span><a href="https://get-linked-plum.vercel.app/" class="live" target="_blank"><i class="fas fa-eye"></i> Live</a></span>
            <span><a href="https://github.com/fantee-hub/getLinked" target="_blank"><i class="fas fa-code-branch" ></i> Code</a></span>
          </div>
        </div>

        <div class="work-cont">
          <img src="/images/funfem.png" alt="">
            <div class="work-text">
              <h4>Funfem Autos</h4>
              <p>Nextjs + Typescript + Sanity</p>
            </div>
            <div class="main-content">
              <p>E-commerce website for car sales and retail</p>
              <span><a href="https://funfemautos.com/" class="live" target="_blank"><i class="fas fa-eye"></i> Live</a></span>
            </div>
        </div>

        <div class="work-cont">
            <img src="/images/countries.png" alt="">
            <div class="work-text">
              <h4>Where in the world?</h4>
              <p>Nextjs + Styled Components</p>
            </div>
            <div class="main-content">
              <p>Search for countries anywhere in the world</p>
              <span><a href="https://country-searches.vercel.app/" class="live" target="_blank"><i class="fas fa-eye"></i> Live</a></span>
              <span><a href="https://github.com/fantee-hub/rest-countries-api" target="_blank"><i class="fas fa-code-branch"></i> Code</a></span>
            </div>
        </div>

        <div class="work-cont">
            <img src="/images/fmovies.png" alt="fmovies net">
            <div class="work-text">
              <h4>Movie App</h4>
              <p>React + Redux + Styled Components</p>
            </div>
            <div class="main-content">
              <p>Movie App</p>
              <span><a href="https://fmoviesnet.vercel.app/" class="live"><i class="fas fa-eye"></i> Live</a></span>
              <span><a href="https://github.com/fantee-hub/movie-app"><i class="fas fa-code-branch"></i> Code</a></span>
            </div>
        </div>

        <div class="work-cont">
          <img src="/images/gp.png" alt="">
            <div class="work-text">
              <h4>Gp Calculator</h4>
              <p>Html + Css + Javascript</p>
            </div>
            <div class="main-content">
              <p>Grade Calculator</p>
              <span><a href="https://fantee-hub.github.io/gp-calculator/" class="live"><i class="fas fa-eye"></i> Live</a></span>
              <span><a href="https://github.com/fantee-hub/gp-calculator"><i class="fas fa-code-branch"></i> Code</a></span>
            </div>
        </div>

      </div>
  </div>
  `;
};
const contactPage = function () {
  document.querySelector(".container").innerHTML = `
  <div class="contact-container">
    <div class="contact-content">
      <div class="contact-head">
        <h1> <span> C <br/> O <br/> N <br/> T <br/> A <br/> C <br/> T <span>
      </div>
      <form id="contact-form">
        <div class="name-text">
          <input type="hidden" name="contact_number">
          <label for="name">Name* </label><br/>
          <input type="text" name="user_name" id="name" placeholder="Enter your name" /required>
          
        </div>
        <div class="name-text">
          <label for="name">Email* </label><br>
          <input type="email" name="user_email" id="email" placeholder="Enter your email "/required>
        </div>
        <div class="name-text">
          <label for="name">Message*</label><br>
          <textarea name="message" rows="10" cols="5" id="message"></textarea>
        </div>
        <div class="submit-form">
          <button type="submit" id="send-btn">Send</button>
        </div>
      </form>
    </div>
  </div>
  `;
};

const page = new PageState();

page.init();

//homepage
document.getElementById("home").addEventListener("click", function (e) {
  page.change(new homePage());
  closeNav();
  tl.from(".hero", {
    opacity: 0,
    y: 100,
    stagger: 0.4,
    duration: 1,
    ease: "back",
  })
    .from(".nav-toggler", {
      opacity: 0,
      xPercent: 100,
      ease: "bounce",
      delay: 0.5,
    })
    .from(".logo", {
      ease: "back",
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 0.5,
    })
    .from(".home-links li", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.4,
      duration: 0.8,
      ease: "back",
      delay: 0.3,
    });
  e.preventDefault();
});

// about page
document.getElementById("about").addEventListener("click", function (e) {
  page.change(new aboutPage());
  closeNav();
  tl.from(".about-header", {
    opacity: 0,
    ease: "back",
    scale: 0,
    duration: 1,
  }).from(".about-text p", {
    opacity: 0,
    y: 100,
    stagger: 0.4,
    duration: 1,
    ease: "back",
    delay: 0.5,
  });
  e.preventDefault();
});

//work page
document.getElementById("work").addEventListener("click", function (e) {
  page.change(new workPage());
  closeNav();
  tl.from(".work-head", {
    opacity: 0,
    ease: "back",
    scale: 0,
    duration: 1,
  }).from(".works .work-cont", {
    opacity: 0,
    scale: 0,
    stagger: 0.4,
    duration: 1,
    ease: "back",
    delay: 0.5,
  });
  e.preventDefault();
});
document.getElementById("contact").addEventListener("click", function (e) {
  page.change(new contactPage());
  closeNav();
  tl.from(".contact-head", { opacity: 0, ease: "back", scale: 0, duration: 1 });
  e.preventDefault();
});

function closeNav() {
  if (
    navLinks.classList.contains("show") &&
    navToggle.classList.contains("toggle")
  ) {
    navLinks.classList.remove("show");
    navToggle.classList.remove("toggle");
  }
}

//toggle navbar
const navToggle = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  navToggle.classList.toggle("toggle");
  tl.fromTo(
    ".link-item",
    { opacity: 0, x: "-100%" },
    { x: "0%", opacity: 1, duration: 1, stagger: 0.4, ease: "back" }
  );
});

//add color to the active link
const linkCont = document.querySelector(".links");
const activeLink = document.querySelectorAll(".live-link");

linkCont.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    activeLink.forEach((link) => {
      link.classList.remove("active");
    });
  }
  const active = document.getElementById(id);
  active.classList.add("active");
});

// gsap
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to("#logo path", {
  strokeDashoffset: 0,
  stagger: 0.3,
  duration: 2,
})
  .fromTo(
    "#logo",
    {
      fill: "none",
    },
    {
      fill: "#ffffff",
    }
  )
  .fromTo(
    ".preload-text",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: "0%", duration: 1 }
  )
  .to(".preload", { y: "-100%", duration: 1.2 })
  .from(".hero", {
    opacity: 0,
    y: 100,
    stagger: 0.4,
    duration: 0.8,
    ease: "back",
  })
  .from(".nav-toggler", {
    opacity: 0,
    xPercent: 100,
    ease: "bounce",
    delay: 0.5,
  })
  .from(".logo", {
    ease: "back",
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.5,
  })
  .from(".home-links li", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.4,
    duration: 0.8,
    ease: "back",
    delay: 0.3,
  });
