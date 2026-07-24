const header = document.querySelector("[data-header]");
const progress = document.querySelector(".progress-bar span");
const year = document.querySelector("[data-year]");
const reveals = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const mobileCall = document.querySelector(".mobile-call");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateScrollState = () => {
  const current = window.scrollY;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = available > 0 ? (current / available) * 100 : 0;

  header?.classList.toggle("is-scrolled", current > 18);
  mobileCall?.classList.toggle("is-visible", current > 240);
  if (progress) {
    progress.style.width = `${percentage}%`;
  }
};

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
);

reveals.forEach((element) => revealObserver.observe(element));
window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

contactForm?.addEventListener("submit", (event) => {
  if (contactForm.getAttribute("action") === "#") {
    event.preventDefault();
  }

  if (formStatus) {
    formStatus.textContent = "For the fastest response, call Glen at 567.686.3162 or email Glen@taylorroofingsiding.com.";
  }
});
