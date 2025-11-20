document.addEventListener("DOMContentLoaded", () => {

  /* MENU MOBILE */
  document.querySelectorAll(".menu-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".main-nav").classList.toggle("show");
    });
  });

  /* FAQ */
  document.querySelectorAll(".acc-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  /* FORM CONTATO */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("c-name").value.trim();
      const email = document.getElementById("c-email").value.trim();
      const msg = document.getElementById("c-message").value.trim();
      const feed = document.getElementById("form-feedback");

      if (!name || !email || !msg) {
        feed.textContent = "Preencha todos os campos obrigatórios.";
        feed.style.color = "red";
        return;
      }

      feed.textContent = "Mensagem enviada com sucesso!";
      feed.style.color = "green";
      contactForm.reset();
    });
  }

  /* PROTÓTIPO */
  const demoForm = document.getElementById("demo-form");
  let registros = [];

  if (demoForm) {
    demoForm.addEventListener("submit", e => {
      e.preventDefault();

      const id = document.getElementById("demo-id").value || "E01";
      const humor = document.querySelector("input[name='humor']:checked").value;
      const est = document.getElementById("demo-estresse").value;
      const note = document.getElementById("demo-note").value.trim();

      registros.push({
        id,
        humor,
        est,
        note,
        time: new Date().toLocaleString()
      });

      alert("Registro adicionado!");
      demoForm.reset();
    });

    /* MODAL */
    const modal = document.getElementById("records-modal");

    document.getElementById("open-modal").onclick = () => {
      modal.setAttribute("aria-hidden", "false");

      const list = document.getElementById("records-list");
      list.innerHTML = "";

      if (registros.length === 0) {
        list.innerHTML = "<p>Nenhum registro ainda.</p>";
      } else {
        registros.forEach(r => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
            <strong>${r.id}</strong><br>
            Humor: ${r.humor} | Estresse: ${r.est} <br>
            Anotação: ${r.note || "(nenhuma)"}<br>
            <em>${r.time}</em>
          `;
          list.appendChild(div);
        });
      }
    };

    document.getElementById("close-modal").onclick = () => {
      modal.setAttribute("aria-hidden", "true");
    };
  }
});
