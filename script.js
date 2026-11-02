document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
    });
  }
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
  const form = document.querySelector("#contact-form");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = "YOUR-EMAIL@example.com"; // Replace with the academy's real email.
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nQuestion: ${data.get("subject")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent("KING VJ Soccer Academy enquiry")}&body=${encodeURIComponent(body)}`;
  });
});