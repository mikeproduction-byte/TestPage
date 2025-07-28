function handleLegalLink(event, section) {
    event.preventDefault();

    const titles = {
      terms: "Términos y Condiciones",
      privacy: "Políticas de Privacidad",
      cookies: "Política de Cookies"
    };

    const content = {
      terms: "Aquí van los términos y condiciones legales...",
      privacy: "Aquí va la política de privacidad completa...",
      cookies: "Aquí se explica cómo usamos cookies..."
    };

    document.getElementById("modalTitle").innerText = titles[section] || "Documento Legal";
    document.getElementById("modalDate").innerText = "Última actualización: Julio 2025";
    document.getElementById("modalContent").innerHTML = "<p>" + (content[section] || "Contenido no disponible.") + "</p>";
    document.getElementById("legalModal").classList.remove("hidden");
    document.getElementById("legalModal").classList.add("flex");
  }

  function closeLegalModal() {
    document.getElementById("legalModal").classList.remove("flex");
    document.getElementById("legalModal").classList.add("hidden");
  }