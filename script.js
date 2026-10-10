const products = [
  { name: 'Cumin Seeds / Jeera', category: 'whole', form: 'Whole seed', image: 'images/products/cumin-seeds.jpg', description: 'A warm, earthy whole spice for seasoning, blends and food manufacturing.' },
  { name: 'Cumin Powder', category: 'ground', form: 'Ground spice', image: 'images/products/cumin-powder.jpg', description: 'Ground cumin for seasoning blends, food preparation and ingredient applications.' },
  { name: 'Red Chilli Powder', category: 'ground', form: 'Ground spice', image: 'images/products/red-chilli-powder.jpg', description: 'Red chilli in powder form. Discuss heat profile, colour preference and specification for your market.' },
  { name: 'Whole Dry Red Chilli', category: 'whole', form: 'Whole dried', image: 'images/products/whole-dry-red-chilli.jpg', description: 'Dried whole chillies for further processing, retail packs or foodservice use.' },
  { name: 'Turmeric Powder', category: 'ground', form: 'Ground spice', image: 'images/products/turmeric-powder.jpg', description: 'A golden turmeric powder for food production, seasoning and pantry ranges.' },
  { name: 'Turmeric Fingers', category: 'whole', form: 'Dried whole rhizome', image: 'images/products/turmeric-fingers.jpg', description: 'Whole dried turmeric fingers for grinding or further processing.' },
  { name: 'Coriander Powder', category: 'ground', form: 'Ground spice', image: 'images/products/coriander-powder.jpg', description: 'Milled coriander seed, suited to seasoning, culinary and ingredient use.' },
  { name: 'Coriander Seeds', category: 'whole', form: 'Whole seed', image: 'images/products/coriander-seeds.jpg', description: 'A citrus-scented whole seed used in spice blends, pickling and food preparation.' },
  { name: 'Black Pepper', category: 'whole', form: 'Whole peppercorn', image: 'images/products/black-pepper.jpg', description: 'Whole black peppercorns for grinding, blending and culinary applications.' },
  { name: 'Green Cardamom', category: 'whole', form: 'Whole pod', image: 'images/products/green-cardamom.jpg', description: 'Aromatic green cardamom pods for sweet, savoury and beverage applications.' },
  { name: 'Fennel Seeds', category: 'whole', form: 'Whole seed', image: 'images/products/fennel-seeds.jpg', description: 'Sweet, aromatic fennel seeds used in seasonings, blends and culinary products.' },
  { name: 'Fenugreek Seeds', category: 'whole', form: 'Whole seed', image: 'images/products/fenugreek-seeds.jpg', description: 'Whole fenugreek seed for traditional seasoning, spice blends and food use.' },
  { name: 'Ginger Powder', category: 'ground', form: 'Ground spice', image: 'images/products/ginger-powder.jpg', description: 'Dried ginger in powder form for spice mixes, beverages and food manufacturing.' },
  { name: 'Garam Masala', category: 'blends', form: 'Blended masala', image: 'images/products/garam-masala.jpg', description: 'Aromatic mixed spice blend. Blend composition and profile can be discussed to specification.' },
  { name: 'Biryani Masala', category: 'blends', form: 'Blended masala', image: 'images/products/biryani-masala.jpg', description: 'A spice blend for biryani and rice dishes. Talk to us about your preferred profile.' },
  { name: 'Meat / Chicken Masala', category: 'blends', form: 'Blended masala', image: 'images/products/meat-chicken-masala.jpg', description: 'A savoury blend for meat and poultry recipes. Final ingredients and labelling are confirmed per order.' },
  { name: 'Chilli Flakes', category: 'ground', form: 'Crushed dried spice', image: 'images/products/chilli-flakes.jpg', description: 'Crushed dried red chilli for seasoning mixes, foodservice and packaged foods.' },
  { name: 'Black Mustard Seeds', category: 'whole', form: 'Whole seed', image: 'images/products/black-mustard-seeds.jpg', description: 'Pungent whole mustard seeds used in tempering, pickling and spice preparations.' },
  { name: 'White Pepper', category: 'whole', form: 'Whole peppercorn', image: 'images/products/white-pepper.jpg', description: 'Whole white pepper for milder, lighter-coloured seasoning applications.' },
  { name: 'Cardamom Powder', category: 'ground', form: 'Ground spice', image: 'images/products/cardamom-powder.jpg', description: 'Ground cardamom for bakery, beverage, confectionery and spice applications.' },
  { name: 'Cloves', category: 'whole', form: 'Whole bud', image: 'images/products/cloves.jpg', description: 'Whole aromatic cloves for seasoning, blends and food processing.' },
  { name: 'Cinnamon / Cassia', category: 'whole', form: 'Bark or powder', image: 'images/products/cinnamon-cassia.jpg', description: 'Cinnamon-family spice formats can be discussed by cut, form and intended use.' },
  { name: 'Star Anise', category: 'whole', form: 'Whole pod', image: 'images/products/star-anise.jpg', description: 'Distinctive whole pods for spice blends, extracts and culinary applications.' },
  { name: 'Carom Seeds / Ajwain', category: 'whole', form: 'Whole seed', image: 'images/products/carom-seeds-ajwain.jpg', description: 'An aromatic Indian seed spice for bakery, savoury foods and traditional blends.' },
  { name: 'Chaat Masala', category: 'blends', form: 'Blended masala', image: 'images/products/chaat-masala.jpg', description: 'A tangy seasoning blend for snack, fruit-style and street-food inspired products. Blend details are confirmed per enquiry.' },
  { name: 'Tandoori Masala', category: 'blends', form: 'Blended masala', image: 'images/products/tandoori-masala.jpg', description: 'A spice blend for marinades and savoury dishes. Discuss heat, colour and ingredients for your market.' },
  { name: 'Basmati Rice', category: 'staples', form: 'Long-grain rice', image: 'images/products/basmati-rice.jpg', description: 'Shelf-stable long-grain rice. Variety, milling, crop and packing details are confirmed per enquiry.' },
  { name: 'Red Lentils / Masoor Dal', category: 'staples', form: 'Dry pulse', image: 'images/products/red-lentils-masoor-dal.jpg', description: 'Shelf-stable red lentils for wholesale, foodservice and food manufacturing.' },
  { name: 'Chickpeas / Chana', category: 'staples', form: 'Dry pulse', image: 'images/products/chickpeas-chana.jpg', description: 'Dry chickpeas for retail, foodservice and ingredient use.' },
  { name: 'Kidney Beans / Rajma', category: 'staples', form: 'Dry pulse', image: 'images/products/kidney-beans-rajma.jpg', description: 'Shelf-stable kidney beans for global pantry ranges and food manufacturing.' },
  { name: 'Green Gram / Moong', category: 'staples', form: 'Dry pulse', image: 'images/products/green-gram-moong.jpg', description: 'Dry green gram in whole or processed formats, subject to supply confirmation.' },
  { name: 'Black Gram / Urad Dal', category: 'staples', form: 'Dry pulse', image: 'images/products/black-gram-urad-dal.jpg', description: 'Shelf-stable black gram and urad formats for culinary and wholesale use.' },
  { name: 'Cashews', category: 'staples', form: 'Dry fruit / nut', image: 'images/products/cashews.jpg', description: 'Shelf-stable cashews for snack, ingredient and food manufacturing applications.' },
  { name: 'Almonds', category: 'staples', form: 'Dry fruit / nut', image: 'images/products/almonds.jpg', description: 'Almond supply options can be discussed by grade, format and destination.' },
  { name: 'Raisins', category: 'staples', form: 'Dried fruit', image: 'images/products/raisins.jpg', description: 'Dried raisins for bakery, snack mixes and pantry products.' },
  { name: 'Sesame Oil', category: 'staples', form: 'Edible oil', image: 'images/products/sesame-oil.jpg', description: 'Shelf-stable edible oil option. Processing, origin, pack and regulatory details are confirmed for each order.' },
  { name: 'Mustard Oil', category: 'staples', form: 'Edible oil', image: 'images/products/mustard-oil.jpg', description: 'Shelf-stable pantry oil option for markets where product and labelling rules permit.' },
  { name: 'Jaggery', category: 'staples', form: 'Shelf-stable sweetener', image: 'images/products/jaggery.jpg', description: 'Traditional cane sweetener in export-suitable formats, subject to destination requirements.' },
  { name: 'Roasted & Savoury Snacks', category: 'staples', form: 'Packaged pantry food', image: 'images/products/roasted-savoury-snacks.jpg', description: 'Shelf-stable snack possibilities for a buyer brief. Product, ingredients, packaging and market compliance must be confirmed.' },
  { name: 'Packaged Pantry Foods', category: 'staples', form: 'Shelf-stable food', image: 'images/products/packaged-pantry-foods.jpg', description: 'Selected packaged foods can be explored where shelf life, labelling and export requirements align.' }
];

const categoryLabels = { whole: 'Whole spices', ground: 'Ground & dried', blends: 'Blended masalas', staples: 'Pantry staples' };
const grid = document.querySelector('#product-grid');
const resultCount = document.querySelector('#result-count');
const searchInput = document.querySelector('#product-search');
const emptyState = document.querySelector('#empty-state');
let activeCategory = 'all';
let selectedProduct = null;

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesQuery = !query || `${product.name} ${categoryLabels[product.category]} ${product.form}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
  resultCount.textContent = String(visible.length);
  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
  grid.innerHTML = visible.map((product, index) => {
    const itemNumber = String(products.indexOf(product) + 1).padStart(2, '0');
    return `<article class="product-card" data-cat="${product.category}" style="animation-delay:${Math.min(index * 22, 260)}ms">
      <div class="product-card-top">
        <span class="product-type">${categoryLabels[product.category]}</span>
        <span class="product-index">${itemNumber}</span>
      </div>
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <h3>${product.name}</h3>
      <div class="product-card-foot">
        <span class="product-form-label">${product.form}</span>
        <button class="product-view" type="button" data-product="${product.name}">View details <span aria-hidden="true">↗</span></button>
      </div>
    </article>`;
  }).join('');
}

renderProducts();
searchInput.addEventListener('input', renderProducts);
document.querySelectorAll('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderProducts();
  });
});
document.querySelector('.reset-filter').addEventListener('click', () => {
  searchInput.value = '';
  activeCategory = 'all';
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    const active = chip.dataset.filter === 'all';
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  renderProducts();
  searchInput.focus();
});

const dialog = document.querySelector('#product-dialog');
const closeDialog = () => {
  dialog.close();
  document.body.classList.remove('dialog-open');
};
grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  selectedProduct = products.find((product) => product.name === button.dataset.product);
  if (!selectedProduct) return;
  document.querySelector('#dialog-title').textContent = selectedProduct.name;
  document.querySelector('#dialog-category').textContent = categoryLabels[selectedProduct.category].toUpperCase();
  document.querySelector('#dialog-description').textContent = selectedProduct.description;
  const dialogImg = document.querySelector('#dialog-image');
  if (dialogImg) {
    dialogImg.src = selectedProduct.image;
    dialogImg.alt = selectedProduct.name;
  }
  document.body.classList.add('dialog-open');
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
document.querySelector('.dialog-request').addEventListener('click', () => {
  if (selectedProduct) {
    const select = document.querySelector('#interest-select');
    const categoryValue = {
      whole: 'Whole spices',
      ground: 'Ground & dried spices',
      blends: 'Blended masalas',
      staples: 'Rice, pulses & pantry staples'
    }[selectedProduct.category];
    const option = Array.from(select.options).find((item) => item.textContent === categoryValue);
    if (option) select.value = option.value;
    document.querySelector('#rfq-form [name="requirements"]').value = `Product of interest: ${selectedProduct.name}. `;
    showToast(`Added ${selectedProduct.name} to brief`);
  }
  closeDialog();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  window.setTimeout(() => document.querySelector('#rfq-form [name="name"]').focus({ preventScroll: true }), 450);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }
});
document.querySelector('#current-year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

const form = document.querySelector('#rfq-form');
const errorMessage = document.querySelector('#form-error');
const formSuccess = document.querySelector('#form-success');
const enquiryPreview = document.querySelector('#enquiry-preview');
const copyStatus = document.querySelector('#copy-status');
let preparedEnquiry = '';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const country = String(data.get('country') || '').trim();
  const product = String(data.get('product') || '').trim();
  const requirements = String(data.get('requirements') || '').trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let issue = '';
  if (name.length < 2) issue = 'Please enter your name so the buyer brief is useful.';
  else if (!emailPattern.test(email)) issue = 'Please enter a valid work email address.';
  else if (!country) issue = 'Please tell us the destination country.';
  else if (!product) issue = 'Please select a product or category.';
  else if (requirements.length < 12) issue = 'Add a little more detail about what you need (at least 12 characters).';
  if (issue) {
    errorMessage.textContent = issue;
    errorMessage.hidden = false;
    document.querySelector('#rfq-form input:invalid, #rfq-form select:invalid, #rfq-form textarea:invalid')?.focus();
    return;
  }
  errorMessage.hidden = true;
  const lines = [
    'WONDERXASIA — BUYER ENQUIRY',
    '',
    `Name: ${name}`,
    `Business: ${String(data.get('business') || '').trim() || 'Not provided'}`,
    `Work email: ${email}`,
    `Destination country: ${country}`,
    `Products of interest: ${product}`,
    `Approx. quantity: ${String(data.get('quantity') || '').trim() || 'To be discussed'}`,
    `Preferred packaging: ${String(data.get('packaging') || '').trim() || 'To be discussed'}`,
    '',
    'Requirements:',
    requirements,
    '',
    'Prepared using the Wonderxasia frontend enquiry builder. This is not an order or a message transmitted by the website.'
  ];
  preparedEnquiry = lines.join('\n');
  enquiryPreview.textContent = preparedEnquiry;
  form.hidden = true;
  formSuccess.hidden = false;
  copyStatus.textContent = '';
  showToast('Brief created! Ready to copy & share.');
});
document.querySelector('#copy-enquiry').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preparedEnquiry);
    copyStatus.textContent = 'Copied. You can now paste it into your chosen contact channel.';
    showToast('Enquiry copied to clipboard!');
  } catch {
    const temporary = document.createElement('textarea');
    temporary.value = preparedEnquiry;
    temporary.setAttribute('readonly', '');
    temporary.style.position = 'fixed';
    temporary.style.opacity = '0';
    document.body.append(temporary);
    temporary.select();
    const copied = document.execCommand('copy');
    temporary.remove();
    copyStatus.textContent = copied ? 'Copied. You can now paste it into your chosen contact channel.' : 'Select the enquiry text above and copy it manually.';
    if (copied) showToast('Enquiry copied to clipboard!');
  }
});
document.querySelector('#edit-brief').addEventListener('click', () => {
  formSuccess.hidden = true;
  form.hidden = false;
  copyStatus.textContent = '';
  document.querySelector('#rfq-form [name="name"]').focus();
});

// --- TOAST NOTIFICATIONS & SCROLL INTERACTIONS ---
const toastEl = document.querySelector('#toast-notice');
let toastTimer = null;
function showToast(message) {
  if (!toastEl) return;
  const msgSpan = toastEl.querySelector('.toast-msg');
  if (msgSpan) msgSpan.textContent = message;
  toastEl.classList.add('is-active');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('is-active');
  }, 2800);
}

const progressBar = document.querySelector('#scroll-progress');
const header = document.querySelector('.site-header');
const fab = document.querySelector('#floating-fab');
const fabTopBtn = document.querySelector('#fab-top');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;
  
  if (progressBar) {
    progressBar.style.transform = `scaleX(${progress})`;
  }
  if (header) {
    header.classList.toggle('is-scrolled', scrollTop > 60);
  }
  if (fab) {
    fab.classList.toggle('is-visible', scrollTop > 380);
  }
}, { passive: true });

if (fabTopBtn) {
  fabTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- STEP ACCORDION INTERACTIONS ---
const stepDropdowns = document.querySelectorAll('.step-dropdown');
stepDropdowns.forEach((dropdown) => {
  dropdown.addEventListener('toggle', () => {
    if (dropdown.open) {
      stepDropdowns.forEach((other) => {
        if (other !== dropdown && other.open) {
          other.open = false;
        }
      });
    }
  });
});

