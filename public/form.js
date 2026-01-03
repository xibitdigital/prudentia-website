document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMobileMenu = document.getElementById("closeMobileMenu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });

    closeMobileMenu.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "auto";
      });
    });
  }

  const buttons = document.querySelectorAll("button");
  const links = document.querySelectorAll('a[href^="#"]');

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission handling
  const form = document.querySelector('form[action*="web3forms.com"]');
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = document.getElementById("submitBtn");
      const btnText = document.getElementById("btnText");
      const btnLoading = document.getElementById("btnLoading");
      const formMessage = document.getElementById("formMessage");
      const successMessage = document.getElementById("successMessage");
      const errorMessage = document.getElementById("errorMessage");

      // Show loading state
      submitBtn.disabled = true;
      btnText.classList.add("hidden");
      btnLoading.classList.remove("hidden");

      try {
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch(form.action, {
          method: "POST",
          body: json,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const data = await response.json();

        // Reset button state
        submitBtn.disabled = false;
        btnText.classList.remove("hidden");
        btnLoading.classList.add("hidden");

        if (response.ok && data.success) {
          // Track Google Ads conversion
          if (typeof gtag === "function") {
            gtag("event", "conversion", { send_to: "AW-17850232654/NZbcCITggdwbEM7e079C" });
          }

          // Show success message
          formMessage.classList.remove("hidden");
          successMessage.classList.remove("hidden");
          errorMessage.classList.add("hidden");

          // Reset form
          form.reset();

          // Scroll to message
          formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

          // Hide message after 5 seconds
          setTimeout(() => {
            formMessage.classList.add("hidden");
            successMessage.classList.add("hidden");
          }, 5000);
        } else {
          // Show error message
          formMessage.classList.remove("hidden");
          errorMessage.classList.remove("hidden");
          successMessage.classList.add("hidden");
          formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
          setTimeout(() => {
            formMessage.classList.add("hidden");
            errorMessage.classList.add("hidden");
          }, 5000);
        }
      } catch (error) {
        // Reset button state
        submitBtn.disabled = false;
        btnText.classList.remove("hidden");
        btnLoading.classList.add("hidden");

        // Show error message
        formMessage.classList.remove("hidden");
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");

        // Scroll to message
        formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.classList.add("hidden");
          errorMessage.classList.add("hidden");
        }, 5000);
      }
    });
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".grid > div, .space-y-8 > div");
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});
