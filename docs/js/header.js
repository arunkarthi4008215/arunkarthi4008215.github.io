const header = `
<div class="top-nav">
<div class="logo-section">
    <img src="./assets/logo/brand-logo.png" width="100%" alt="">
</div>

<span class="nav-bar-mobile" onclick="openNav()">&#9776;</span>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./home.html">
                        <span class="home-icon mb-1 me-1"></span>&nbsp;Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./service.html">
                        <span class="service-icon mb-1 me-1"></span>&nbsp;Services
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <span class="product-icon mb-1 me-1"></span>&nbsp;Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <span class="about-us-icon mb-1 me-1"></span>&nbsp;About Us
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contact-us.html">
                        <span class="contact-us-icon mb-1 me-1"></span>&nbsp;Contact Us
                    </a>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
`;

const sideNav = `
<div>
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<a href="./home.html" class="side-nav-link">Home</a>
<a href="./service.html" class="side-nav-link">Services</a>
<a class="side-nav-link">Products</a>
<a class="side-nav-link">About Us</a>
<a href="./contact-us.html" class="side-nav-link">Contact Us</a>
</div>
`;

$(".top-nav-bar-container").html(header);
$("#mySidenav").html(sideNav);

// active class
const path = window.location.pathname;

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const sideNavLinks = document.querySelectorAll(".side-nav-link");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (path === "/") {
    navLinks[0].classList.add("active");
  }

  if ("." + path === href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

sideNavLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (path === "/") {
    sideNavLinks[0].classList.add("active");
  }

  if ("." + path === href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
