// animationScript
// ...
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  // Preloader animation
  const preloader = document.querySelector(".preloader");
  gsap.to(".loading-dots span", {
    scale: 1.2,
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
  });
  // Hide preloader and start content animations after window load
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("fade-out");
      document.body.style.overflow = "";
      // Start content animations after preloader fades out
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1500);
  });
  // Prevent scroll during preload
  document.body.style.overflow = "hidden";
  // Split text utility function
  function splitText(element) {
    const text = element.textContent;
    element.textContent = "";
    return [...text].map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      element.appendChild(span);
      return span;
    });
  }
  // Hero section animations
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");
  const heroButtons = document.querySelectorAll(".hero-btn");
  const splitElements = document.querySelectorAll(".split-text");
  // Split text for animation
  splitElements.forEach((element) => {
    const chars = splitText(element);
    gsap.from(chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: heroContent,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
  });
  // Hero content animation
  gsap.to(heroContent, {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: heroContent,
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
  // Hero buttons animation
  gsap.from(heroButtons, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: heroContent,
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
  // Services section animations
  const servicesHeader = document.querySelector(".services-header");
  const serviceCards = document.querySelectorAll(".service-card");
  gsap.to(servicesHeader, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: servicesHeader,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(serviceCards, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  // Navigation scroll effect
  // const navbar = document.getElementById("navbar");
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY > 1) {
  //     navbar.classList.add("nav-scrolled");
  //   } else {
  //     navbar.classList.remove("nav-scrolled");
  //   }
  // });

  // portfolioFilterScript
  const filterButtons = document.querySelectorAll(".portfolio-filter");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  // Initialize GSAP animations
  gsap.from(portfolioItems, {
    opacity: 0,
    y: 60,
    scale: 0.9,
    stagger: {
      each: 0.1,
      from: "random",
    },
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".portfolio-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add(
          "bg-white",
          "border",
          "border-gray-300",
          "text-gray-700",
        );
      });
      // Add active class to clicked button
      this.classList.remove(
        "bg-white",
        "border",
        "border-gray-300",
        "text-gray-700",
      );
      this.classList.add("active", "bg-primary", "text-white");
      // Animate items on filter change
      portfolioItems.forEach((item) => {
        gsap.to(item, {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(item, {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });
      });
    });
  });
  // Add hover animations to portfolio items
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item.querySelector("img"), {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item.querySelector("img"), {
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });
  });

  // portfolioModalScript
  const portfolioModal = document.getElementById("portfolioModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  // Project data (would typically come from a database)
  const projectData = {
    nexus: {
      title: "Nexus Technologies",
      client: "Nexus Technologies Inc.",
      industry: "Technology",
      scope:
        "Complete office rebrand with environmental graphics and digital displays",
      challenge:
        "Nexus Technologies needed to transform their outdated office space into a modern environment that reflected their innovative technology solutions and attracted top talent.",
      solution:
        "We developed a comprehensive branding strategy that incorporated dynamic environmental graphics, interactive digital displays, and a cohesive wayfinding system throughout their three-floor headquarters.",
      images: [
        "https://readdy.ai/api/search-image?query=modern%20tech%20company%20office%20with%20sleek%20branding%20elements%2C%20minimalist%20design%20with%20blue%20accent%20colors%2C%20open%20workspace%20with%20branded%20wall%20graphics%2C%20professional%20corporate%20environment%2C%20high-quality%20interior%20photography&width=800&height=500&seq=nexus1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=tech%20company%20meeting%20room%20with%20digital%20displays%2C%20branded%20conference%20space%20with%20blue%20accent%20lighting%2C%20professional%20workspace%20with%20minimalist%20design%2C%20high-quality%20interior%20photography&width=800&height=500&seq=nexus2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=tech%20company%20reception%20area%20with%20branded%20wall%2C%20modern%20lobby%20with%20digital%20signage%2C%20minimalist%20design%20with%20blue%20accent%20colors%2C%20professional%20corporate%20environment%2C%20high-quality%20interior%20photography&width=800&height=500&seq=nexus3&orientation=landscape",
      ],
      testimonial: {
        text: "Mantaprabha transformed our office into a space that truly represents our brand identity. The environmental graphics and digital displays have not only impressed our clients but have also boosted employee morale and productivity.",
        author: "Sarah Mitchell",
        position: "CEO, Nexus Technologies",
      },
      results: [
        { metric: "Employee Satisfaction", value: "+42%" },
        { metric: "Client Impressions", value: "+68%" },
        { metric: "Talent Acquisition", value: "+35%" },
      ],
    },
    verdant: {
      title: "Verdant Spaces",
      client: "Verdant Spaces LLC",
      industry: "Sustainable Architecture",
      scope: "Sustainable office branding with biophilic design elements",
      challenge:
        "Verdant Spaces wanted their office to embody their commitment to sustainable design and biophilic principles while maintaining a professional atmosphere.",
      solution:
        "We created an integrated branding system that incorporated natural materials, living walls, and sustainable signage solutions that showcased their environmental values.",
      images: [
        "https://readdy.ai/api/search-image?query=eco-friendly%20office%20space%20with%20natural%20elements%2C%20sustainable%20design%20with%20green%20branding%2C%20wooden%20accents%20and%20plant%20walls%2C%20biophilic%20office%20design%20with%20branded%20elements%2C%20professional%20interior%20photography&width=800&height=500&seq=verdant1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=sustainable%20office%20meeting%20space%20with%20living%20wall%2C%20eco-friendly%20conference%20room%20with%20wooden%20elements%2C%20green%20office%20design%20with%20natural%20materials%2C%20professional%20interior%20photography&width=800&height=500&seq=verdant2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=eco-friendly%20office%20reception%20with%20sustainable%20branding%2C%20green%20lobby%20design%20with%20plant%20elements%2C%20natural%20materials%20with%20subtle%20branded%20elements%2C%20professional%20interior%20photography&width=800&height=500&seq=verdant3&orientation=landscape",
      ],
      testimonial: {
        text: "Our office now perfectly reflects our commitment to sustainability. Mantaprabha understood our vision and created a space that not only looks beautiful but also embodies our core values.",
        author: "Daniel Green",
        position: "Founder, Verdant Spaces",
      },
      results: [
        { metric: "Sustainability Rating", value: "+58%" },
        { metric: "Workspace Satisfaction", value: "+72%" },
        { metric: "Brand Alignment", value: "+64%" },
      ],
    },
    // Additional projects would be defined here
  };
  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      const projectId = this.getAttribute("data-portfolio");
      const project = projectData[projectId];
      if (project) {
        modalTitle.textContent = project.title;
        // Build modal content
        let content = `
      <div class="mb-8">
      <div class="relative">
      <img src="${project.images[0]}" alt="${project.title}" class="w-full h-80 object-cover object-top rounded-lg">
      <div class="absolute bottom-4 left-4 flex space-x-2">
      ${project.images
        .map(
          (img, index) => `
      <button class="w-3 h-3 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}" aria-label="View image ${index + 1}"></button>
      `,
        )
        .join("")}
      </div>
      </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
      <h4 class="font-bold text-gray-900 mb-2">Client</h4>
      <p class="text-gray-600">${project.client}</p>
      </div>
      <div>
      <h4 class="font-bold text-gray-900 mb-2">Industry</h4>
      <p class="text-gray-600">${project.industry}</p>
      </div>
      <div>
      <h4 class="font-bold text-gray-900 mb-2">Scope</h4>
      <p class="text-gray-600">${project.scope}</p>
      </div>
      </div>
      <div class="mb-8">
      <h4 class="font-bold text-gray-900 mb-2">Challenge</h4>
      <p class="text-gray-600">${project.challenge}</p>
      </div>
      <div class="mb-8">
      <h4 class="font-bold text-gray-900 mb-2">Solution</h4>
      <p class="text-gray-600">${project.solution}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      ${project.images
        .slice(1)
        .map(
          (img) => `
      <img src="${img}" alt="${project.title}" class="w-full h-48 object-cover object-top rounded-lg">
      `,
        )
        .join("")}
      </div>
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <div class="flex items-start">
      <i class="ri-double-quotes-l text-4xl text-gray-200 mr-4"></i>
      <div>
      <p class="text-gray-700 italic mb-4">${project.testimonial.text}</p>
      <div class="flex items-center">
      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
      <i class="ri-user-line text-primary"></i>
      </div>
      <div>
      <p class="font-bold text-gray-900">${project.testimonial.author}</p>
      <p class="text-gray-600 text-sm">${project.testimonial.position}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div>
      <h4 class="font-bold text-gray-900 mb-4">Results</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      ${project.results
        .map(
          (result) => `
      <div class="bg-white border border-gray-200 p-4 rounded-lg">
      <p class="text-gray-600 text-sm mb-1">${result.metric}</p>
      <p class="text-2xl font-bold text-primary">${result.value}</p>
      </div>
      `,
        )
        .join("")}
      </div>
      </div>
      `;
        modalContent.innerHTML = content;
        portfolioModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });
  closeModal.addEventListener("click", function () {
    portfolioModal.classList.remove("active");
    document.body.style.overflow = "";
  });
  // Close modal when clicking outside
  portfolioModal.addEventListener("click", function (e) {
    if (e.target === portfolioModal) {
      portfolioModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}); 