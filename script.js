/**
 * SAGAR — Full Stack Developer & Digital Studio Portfolio
 * Vanilla JavaScript (Zero External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // Data: Case Studies
  // ==========================================
  const projectsData = {
    'lume-spa': {
      title: 'LUMÉ SPA',
      tagline: 'Sanctuary of Botanical Wellness & Holistic Healing',
      industry: 'Luxury Spa & Wellness',
      image: './images/lume-spa.jpg',
      badge: 'Selected Concept',
      description: 'A premium wellness website designed to showcase treatments, create trust and drive appointment enquiries.',
      challenge: 'High-end wellness clinics and day spas lose up to 45% of potential clients when their digital presence looks clunky or relies solely on phone calls. Discerning clients expect a tranquil, upscale aesthetic that reflects the in-person treatment environment.',
      solution: 'Built a fast-loading single-page experience with categorized treatment tabs, package breakdowns, high-contrast appointment triggers, and a 1-tap WhatsApp consultation modal that prefills requested services.',
      outcomes: [
        { label: 'Inbound Booking Enquiries', val: '+65%' },
        { label: 'Page Load Speed', val: '0.8s' },
        { label: 'Mobile Drop-Off Reduction', val: '-40%' }
      ],
      features: [
        'Interactive Treatment Selector with pricing',
        'Direct 1-tap WhatsApp booking flow',
        'Visual sanctuary photo gallery',
        'Staff credentials & therapist bios',
        'Automated booking consultation form'
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    'forge-industries': {
      title: 'FORGE INDUSTRIES',
      tagline: 'Precision Engineered Metal Components & CNC Fabrication',
      industry: 'Industrial & Manufacturing',
      image: './images/forge-industrial.jpg',
      badge: 'Selected Concept',
      description: 'A professional corporate website designed to communicate manufacturing capabilities, products and company credibility.',
      challenge: 'B2B industrial buyers, procurement managers, and international OEM partners vet suppliers online before requesting quotes. Outdated legacy websites fail to convey precision, scale, or technological capability.',
      solution: 'Developed a responsive product catalogue filterable by material tolerance and application, backed by a multi-step RFQ form that captures drawing uploads and tolerance specs directly to sales reps.',
      outcomes: [
        { label: 'Procurement RFQ Conversion', val: '+85%' },
        { label: 'Spec Views Per Session', val: '4.2x' },
        { label: 'Lighthouse Performance Score', val: '98/100' }
      ],
      features: [
        'Filterable Part & Machine Specification Matrix',
        'Interactive Request for Quote (RFQ) Form',
        'ISO 9001 & Quality Certifications showcase',
        'CAD / Technical Drawing Download Portal',
        'Plant facility tour & logistics map'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    'mono-cafe': {
      title: 'MONO CAFÉ',
      tagline: 'Artisanal Roastery, Nordic Bakes & Evening Table Reservations',
      industry: 'Restaurant & Café',
      image: './images/mono-cafe.jpg',
      badge: 'Selected Concept',
      description: 'A modern restaurant website focused on visual storytelling, menu discovery and reservations.',
      challenge: 'Cafés and restaurants often rely only on third-party food delivery apps with 30% commission cuts or blurry PDF menus hosted on social media, resulting in lost walk-ins and table reservations.',
      solution: 'Engineered an instant-filter menu that updates dynamically without page reloads, accompanied by direct WhatsApp reservation buttons and Google Maps direction links that load in under 1 second.',
      outcomes: [
        { label: 'Direct Table Bookings', val: '+52%' },
        { label: 'Elimination of PDF Drop-off', val: '100%' },
        { label: 'Mobile Local Search Clicks', val: '+78%' }
      ],
      features: [
        'Interactive Seasonal Food & Beverage Menu',
        'Dietary & Allergy Filter Tags (Gluten-free, Vegan)',
        '1-Tap Table Reservation System',
        'Google Maps & transit directions card',
        'Atmospheric photo gallery'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS']
    }
  };

  // ==========================================
  // Data: Industries
  // ==========================================
  const industriesData = {
    'spa': {
      name: 'Spa & Wellness',
      tagline: 'Calming, premium digital experiences that turn visitors into booked appointments.',
      features: [
        'Categorized Treatment & Package Menu',
        'Direct WhatsApp 1-Tap Booking CTA',
        'Ambience & Treatment Room Gallery',
        'Therapist Bios & Hygiene Certifications',
        'Client Reviews & Verified Testimonials',
        'Automated Consultation Inquiry Form'
      ]
    },
    'salon': {
      name: 'Salon & Beauty',
      tagline: 'Vibrant lookbooks and effortless stylist appointment scheduling.',
      features: [
        'Visual Transformation Lookbook',
        'Stylist Profiles & Specialities',
        'Service Pricing Calculator',
        'Client Review Testimonials',
        'Instagram Story Integration',
        'Quick Re-booking Reminders'
      ]
    },
    'restaurants': {
      name: 'Restaurants & Cafés',
      tagline: 'Visual storytelling, interactive menus, and friction-free table reservations.',
      features: [
        'Interactive Dietary-Filtered Menu',
        'High-Impact Food Photography',
        '1-Tap Table Reservation System',
        'Live Operating Hours & Google Maps',
        'Catering & Private Event Enquiries',
        'Direct Takeaway Ordering Integration'
      ]
    },
    'hotels': {
      name: 'Hotels & Hospitality',
      tagline: 'Showcase suites, amenities, and local experiences that secure direct guest bookings.',
      features: [
        'Room & Suite Virtual Walkthroughs',
        'Amenity & Experience Showcases',
        'Seasonal Rate Card Display',
        'Wedding & Banquet Hall Inquiries',
        'Location & Local Attraction Guides',
        'Guest Concierge WhatsApp Connect'
      ]
    },
    'clinics': {
      name: 'Clinics & Healthcare',
      tagline: 'Clean, trust-centered portals that reassure patients and streamline consultations.',
      features: [
        'Doctor & Specialist Credentials',
        'Condition & Treatment Guides',
        'Patient Safety & Hygiene Standards',
        'Secure Consultation Request Form',
        'Clinic Directions & Parking Info',
        'WhatsApp Patient Support Line'
      ]
    },
    'industrial': {
      name: 'Industrial & Manufacturing',
      tagline: 'Present your products, capabilities, and certifications with engineering authority.',
      features: [
        'Filterable Product & Part Catalogue',
        'Machine & Plant Capacity Specs',
        'ISO & Industry Quality Certifications',
        'Industries Served Case Studies',
        'CAD / Spec Sheet Download Center',
        'Structured Request for Quote (RFQ) Form'
      ]
    },
    'realestate': {
      name: 'Real Estate & Properties',
      tagline: 'Architectural showcases and lead capture funnels for premium properties.',
      features: [
        'Interactive Property Galleries',
        'Floor Plan & Specification Viewers',
        'Neighborhood & Amenity Proximity Maps',
        'Virtual Site Tour Booking',
        'Brochure & Price Sheet Gating',
        'Agent WhatsApp Fast-Connect'
      ]
    },
    'professionalservices': {
      name: 'Professional Services',
      tagline: 'Position your consultancy, law practice, or agency as the clear market authority.',
      features: [
        'Partner Profiles & Track Record',
        'Practice Area Breakdown',
        'Insightful Client Case Studies',
        'Client Onboarding Briefing Form',
        'Direct Calendar Scheduling Link',
        'Confidential Inquiry Portal'
      ]
    }
  };

  // ==========================================
  // Helper: Toast Notifications
  // ==========================================
  const toastEl = document.getElementById('toastNotice');
  function showToast(message) {
    if (!toastEl) return;
    toastEl.querySelector('.toast-text').textContent = message;
    toastEl.classList.add('is-visible');
    setTimeout(() => {
      toastEl.classList.remove('is-visible');
    }, 4000);
  }

  // ==========================================
  // Mobile Navigation
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('is-open');
    });
    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
      });
    });
  }

  // ==========================================
  // Smooth Scroll with Header Offset
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // Case Study Modal
  // ==========================================
  const caseStudyModal = document.getElementById('caseStudyModal');
  const caseStudyClose = document.getElementById('caseStudyClose');
  const caseStudyBody = document.getElementById('caseStudyBody');

  window.openCaseStudy = function(projectId) {
    const data = projectsData[projectId];
    if (!data || !caseStudyBody) return;

    let outcomesHtml = data.outcomes.map(o => `
      <div style="background-color: var(--color-surface-subtle); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
        <span style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--color-accent); display: block;">${o.val}</span>
        <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--color-text-muted);">${o.label}</span>
      </div>
    `).join('');

    let featuresHtml = data.features.map(f => `
      <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; margin-bottom: 0.5rem;">
        <span style="color: var(--color-emerald); font-weight: bold;">✓</span> ${f}
      </li>
    `).join('');

    let techHtml = data.tech.map(t => `
      <span class="badge badge-neutral">${t}</span>
    `).join('');

    caseStudyBody.innerHTML = `
      <div style="aspect-ratio: 16/9; overflow: hidden; border-radius: var(--radius-xl) var(--radius-xl) 0 0;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="padding: 2.25rem;">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="badge badge-accent">${data.industry}</span>
          <span class="badge badge-dark">${data.badge}</span>
        </div>
        <h2 style="font-size: 2.25rem; margin-bottom: 0.35rem;">${data.title}</h2>
        <p style="font-size: 1.05rem; color: var(--color-text-muted); margin-bottom: 1.75rem;">${data.tagline}</p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
          ${outcomesHtml}
        </div>

        <div style="margin-bottom: 1.75rem;">
          <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Business Challenge</h4>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">${data.challenge}</p>
        </div>

        <div style="margin-bottom: 1.75rem;">
          <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Engineering & Design Solution</h4>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">${data.solution}</p>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="font-size: 1.15rem; margin-bottom: 0.75rem;">Key Capabilities Built</h4>
          <ul style="list-style: none;">
            ${featuresHtml}
          </ul>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
          ${techHtml}
        </div>

        <div style="display: flex; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border);">
          <button class="btn btn-primary" onclick="startProjectFromCaseStudy('${data.title}')" style="flex: 1;">
            Start a Project Like This →
          </button>
          <button class="btn btn-outline" onclick="closeCaseStudyModal()">
            Close
          </button>
        </div>
      </div>
    `;

    caseStudyModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCaseStudyModal = function() {
    if (caseStudyModal) {
      caseStudyModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (caseStudyClose) {
    caseStudyClose.addEventListener('click', closeCaseStudyModal);
  }

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeCaseStudyModal();
    });
  }

  window.startProjectFromCaseStudy = function(projectName) {
    closeCaseStudyModal();
    const messageInput = document.getElementById('contactMessage');
    if (messageInput) {
      messageInput.value = `I reviewed the case study for ${projectName} and would love to build something with similar quality and outcomes for my company.`;
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      window.scrollTo({
        top: contactSec.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    showToast(`Prefilled inquiry for ${projectName}!`);
  };

  // ==========================================
  // Industry Tabs
  // ==========================================
  const industryNavBtns = document.querySelectorAll('.industry-btn');
  const industryDetailCard = document.getElementById('industryDetail');

  industryNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      industryNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const indKey = btn.getAttribute('data-industry');
      const data = industriesData[indKey];
      if (!data || !industryDetailCard) return;

      const featureListHtml = data.features.map(f => `
        <div class="industry-feature-item">
          <span style="color: var(--color-emerald); font-weight: bold;">✓</span>
          <span>${f}</span>
        </div>
      `).join('');

      industryDetailCard.innerHTML = `
        <div>
          <span class="badge badge-accent" style="margin-bottom: 0.75rem;">Tailored Industry Suite</span>
          <h3 style="margin-top: 0.5rem; margin-bottom: 0.5rem;">${data.name}</h3>
          <p style="font-size: 1.1rem; color: var(--color-text-muted);">${data.tagline}</p>
        </div>

        <div>
          <h4 style="font-size: 0.85rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--color-text-subtle); margin-bottom: 1rem; letter-spacing: 0.05em;">
            Standard Capabilities Included
          </h4>
          <div class="industry-feature-list">
            ${featureListHtml}
          </div>
        </div>

        <div style="padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <button class="btn btn-primary" onclick="selectIndustryInquiry('${data.name}', '${data.features.slice(0, 3).join(', ')}')">
            Discuss a ${data.name} Website →
          </button>
          <span style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--color-text-muted);">
            ⚡ 2–3 Week Fast Turnaround
          </span>
        </div>
      `;
    });
  });

  window.selectIndustryInquiry = function(industryName, featuresSummary) {
    const messageInput = document.getElementById('contactMessage');
    const businessSelect = document.getElementById('businessTypeSelect');
    if (messageInput) {
      messageInput.value = `Interested in discussing a website for our ${industryName} business with capabilities like: ${featuresSummary}.`;
    }
    if (businessSelect) {
      // Find matching option
      for (let i = 0; i < businessSelect.options.length; i++) {
        if (businessSelect.options[i].text.toLowerCase().includes(industryName.toLowerCase())) {
          businessSelect.selectedIndex = i;
          break;
        }
      }
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      window.scrollTo({
        top: contactSec.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    showToast(`Configured for ${industryName}!`);
  };

  // ==========================================
  // Cost & Scope Estimator Modal
  // ==========================================
  const estimatorModal = document.getElementById('estimatorModal');
  const estimatorClose = document.getElementById('estimatorClose');
  const openEstimatorBtns = document.querySelectorAll('.open-estimator-trigger');

  window.openEstimatorModal = function() {
    if (estimatorModal) {
      estimatorModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      calculateEstimate();
    }
  };

  window.closeEstimatorModal = function() {
    if (estimatorModal) {
      estimatorModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  openEstimatorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openEstimatorModal();
    });
  });

  if (estimatorClose) {
    estimatorClose.addEventListener('click', closeEstimatorModal);
  }

  if (estimatorModal) {
    estimatorModal.addEventListener('click', (e) => {
      if (e.target === estimatorModal) closeEstimatorModal();
    });
  }

  // Interactive Calculation logic
  function calculateEstimate() {
    const projectType = document.querySelector('input[name="estProjectType"]:checked')?.value || 'new-website';
    const businessType = document.getElementById('estBusinessType')?.value || 'spa';
    const checkboxes = document.querySelectorAll('input[name="estFeature"]:checked');

    let basePrice = 28000;
    let baseTime = '2–3 Weeks';

    if (projectType === 'redesign') {
      basePrice = 24000;
      baseTime = '2 Weeks';
    } else if (projectType === 'webapp') {
      basePrice = 65000;
      baseTime = '4–5 Weeks';
    } else if (projectType === 'maintenance') {
      basePrice = 12000;
      baseTime = 'Ongoing';
    }

    let addOnPrice = 0;
    let selectedAddOns = [];
    checkboxes.forEach(cb => {
      addOnPrice += parseInt(cb.getAttribute('data-cost') || '0', 10);
      selectedAddOns.push(cb.value);
    });

    const totalMin = Math.round((basePrice + addOnPrice) * 0.95);
    const totalMax = Math.round((basePrice + addOnPrice) * 1.15);

    const priceEl = document.getElementById('estimatorPrice');
    const timelineEl = document.getElementById('estimatorTimeline');
    if (priceEl) priceEl.textContent = `₹${totalMin.toLocaleString('en-IN')} – ₹${totalMax.toLocaleString('en-IN')}`;
    if (timelineEl) timelineEl.textContent = baseTime;
  }

  const estimatorInputs = document.querySelectorAll('#estimatorModal input, #estimatorModal select');
  estimatorInputs.forEach(input => {
    input.addEventListener('change', calculateEstimate);
  });

  window.applyEstimateToForm = function() {
    const projectTypeInput = document.querySelector('input[name="estProjectType"]:checked');
    const businessSelect = document.getElementById('estBusinessType');
    const checkboxes = document.querySelectorAll('input[name="estFeature"]:checked');
    const priceText = document.getElementById('estimatorPrice')?.textContent || '';
    const timelineText = document.getElementById('estimatorTimeline')?.textContent || '';

    let featuresList = [];
    checkboxes.forEach(cb => featuresList.push(cb.value));

    const pType = projectTypeInput ? projectTypeInput.nextElementSibling.textContent.trim() : 'New Website';
    const bType = businessSelect ? businessSelect.options[businessSelect.selectedIndex].text : 'Spa & Wellness';

    const summary = `Project Scope Estimate:\n- Business Type: ${bType}\n- Project Type: ${pType}\n- Desired Features: ${featuresList.length > 0 ? featuresList.join(', ') : 'Standard Features'}\n- Estimated Budget: ${priceText} (${timelineText})`;

    const messageInput = document.getElementById('contactMessage');
    if (messageInput) messageInput.value = summary;

    closeEstimatorModal();
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      window.scrollTo({
        top: contactSec.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    showToast('Scope estimate applied to inquiry message!');
  };

  // ==========================================
  // FAQ Accordion
  // ==========================================
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) {
        item.classList.toggle('is-open');
      }
    });
  });

  // ==========================================
  // Contact Form Submission & WhatsApp Prefill
  // ==========================================
  const contactForm = document.getElementById('leadContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Client';
      const email = document.getElementById('contactEmail')?.value || '';
      const phone = document.getElementById('contactPhone')?.value || '';
      const businessType = document.getElementById('businessTypeSelect')?.value || 'Business';
      const message = document.getElementById('contactMessage')?.value || '';

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '✓ Inquiry Sent Successfully!';
        submitBtn.style.backgroundColor = '#10B981';
      }

      showToast(`Thank you, ${name}! Opening WhatsApp with your brief...`);

      // WhatsApp deep-link
      const formattedWaMessage = encodeURIComponent(
        `Hi Sagar,\n\nI am contacting you regarding a website project for our ${businessType}.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject Details:\n${message}`
      );
      const waUrl = `https://wa.me/919876543210?text=${formattedWaMessage}`;

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1200);
    });
  }

  // Pill option selectors
  document.querySelectorAll('.pill-option').forEach(pill => {
    pill.addEventListener('click', function() {
      const group = this.closest('.pills-group');
      if (group) {
        group.querySelectorAll('.pill-option').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const hiddenInput = group.querySelector('input[type="hidden"]');
        if (hiddenInput) {
          hiddenInput.value = this.getAttribute('data-value');
        }
      }
    });
  });

});
