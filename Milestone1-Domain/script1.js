function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
document.querySelector(".login").addEventListener("click", () => {
  openModal("loginModal");
});
document.querySelector(".signup").addEventListener("click", () => {
  openModal("signupModal");
});

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function switchModal(hideId, showId) {
  closeModal(hideId);
  openModal(showId);
}
window.addEventListener("click", function(e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

const subscribeBtn = document.getElementById("subscribeBtn");
const newsletterForm = document.querySelector(".newsletter");

newsletterForm?.addEventListener("submit", function(e) {
  e.preventDefault();
  const emailInput = this.querySelector("input").value;
  
  if (emailInput === "" || !emailInput.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    subscribeBtn.textContent = "Subscribed ✅";
    subscribeBtn.disabled = true; 
    this.querySelector("input").value = "";
  }
});

document.querySelector(".contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon 🐶🐱");
  this.reset();
});

const darkToggle = document.getElementById("darkModeToggle");
darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    darkToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkToggle.textContent = "🌙";
  }
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  darkToggle.textContent = "☀️";
}
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function addToCart(name, price, img) {
    let existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
  }

  function updateCartCount() {
    document.getElementById("cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  }

  updateCartCount();