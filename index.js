// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

// STICKY SHADOW ON SCROLL
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
});

// DARK / LIGHT MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});


const plans = {
    basic: { rate: 0.10, days: 7 },
    standard: { rate: 0.20, days: 14 },
    gold: { rate: 0.30, days: 30 },
    premium: { rate: 0.45, days: 45 },
    vip: { rate: 0.60, days: 60 }
};

document.getElementById("calculateBtn").addEventListener("click", () => {
    const plan = document.getElementById("plan").value;
    const amount = Number(document.getElementById("amount").value);

    if (!plan || amount <= 0) {
        alert("Please select a plan and enter a valid amount.");
        return;
    }

    const { rate, days } = plans[plan];
    const profit = amount * rate;
    const charges = profit * 0.05;
    const total = amount + profit - charges;

    document.getElementById("deposit").innerText = amount.toFixed(2);
    document.getElementById("duration").innerText = days + " days";
    document.getElementById("profit").innerText = profit.toFixed(2);
    document.getElementById("charges").innerText = charges.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
});