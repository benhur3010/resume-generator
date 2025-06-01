function formatDate(dateString) {
  if (!dateString) return "";

  const [year, month] = dateString.split("-");
  const date = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, 1));

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[date.getUTCMonth()]} de ${date.getUTCFullYear()}`;
}

function generatePreview() {
  const preview = document.getElementById("resumePreview");
  const scrollPosition = preview.scrollTop;
  const formData = new FormData(document.getElementById("resumeForm"));

  const fullName = formData.get("fullName") || "";
  const title = formData.get("title") || "";
  const email = formData.get("email") || "";
  const phone = formData.get("phone") || "";
  const location = formData.get("location") || "";
  const linkedin = formData.get("linkedin") || "";
  const summary = formData.get("summary") || "";
  const age = formData.get("age") || "";

  const companies = formData.getAll("company[]");
  const positions = formData.getAll("position[]");
  const workStartDates = formData.getAll("workStartDate[]");
  const workEndDates = formData.getAll("workEndDate[]");
  const descriptions = formData.getAll("description[]");

  const educations = formData.getAll("education[]");
  const courses = formData.getAll("course[]");
  const startDates = formData.getAll("startDate[]");
  const endDates = formData.getAll("endDate[]");
  const educationDescriptions = formData.getAll("educationDescription[]");

  const technicalSkills = formData.get("technicalSkills") || "";
  const softSkills = formData.get("softSkills") || "";
  const languages = formData.get("languages") || "";
  const certifications = formData.get("certifications") || "";

  const projectNames = formData.getAll("projectName[]");
  const projectDescriptions = formData.getAll("projectDescription[]");
  const projectUrls = formData.getAll("projectUrl[]");

  const hasProjects = projectNames.some((name, index) => {
    return name && (projectDescriptions[index] || projectUrls[index]);
  });

  let html = `
    <div class="resume">
      <header class="resume-header">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">${fullName}</h1>
        <h2 class="text-xl text-gray-600 mb-4">${title}</h2>
        <div class="contact-info">
          ${
            email
              ? `
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>${email}</span>
            </div>
          `
              : ""
          }
          ${
            phone
              ? `
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>${phone}</span>
            </div>
          `
              : ""
          }
          ${
            location
              ? `
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>${location}</span>
            </div>
          `
              : ""
          }
          ${
            age
              ? `
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>${age}</span>
            </div>
          `
              : ""
          }
          ${
            linkedin
              ? `
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              <a href="${linkedin}" target="_blank" class="text-blue-600 hover:underline">${linkedin}</a>
            </div>
          `
              : ""
          }
        </div>
      </header>

      ${
        summary
          ? `
        <section class="resume-section">
          <h3>Resumo Profissional</h3>
          <p>${summary}</p>
        </section>
      `
          : ""
      }

      ${
        companies.length > 0
          ? `
        <section class="resume-section">
          <h3>Experiência Profissional</h3>
          ${companies
            .map(
              (company, index) => `
            <div class="resume-entry">
              <h4>${positions[index] || ""}</h4>
              <h5>${company}</h5>
              <p class="date">
                ${formatDate(workStartDates[index])} - ${
                workEndDates[index] ? formatDate(workEndDates[index]) : "Atual"
              }
              </p>
              <p>${descriptions[index] || ""}</p>
            </div>
          `
            )
            .join("")}
        </section>
      `
          : ""
      }

      ${
        educations.length > 0
          ? `
        <section class="resume-section">
          <h3>Educação</h3>
          ${educations
            .map(
              (education, index) => `
            <div class="resume-entry">
              <h4>${courses[index] || ""}</h4>
              <h5>${education}</h5>
              <p class="date">
                ${formatDate(startDates[index])} - ${
                endDates[index] ? formatDate(endDates[index]) : "Atual"
              }
              </p>
              <p>${educationDescriptions[index] || ""}</p>
            </div>
          `
            )
            .join("")}
        </section>
      `
          : ""
      }

      ${
        technicalSkills || softSkills || languages || certifications
          ? `
        <section class="resume-section">
          <h3>Habilidades</h3>
          ${
            technicalSkills
              ? `
            <div class="skills-group technical">
              <h4>Habilidades Técnicas</h4>
              <div class="skills-container">
                ${technicalSkills
                  .split(",")
                  .map(
                    (skill) => `
                  <span class="skill-chip technical">${skill.trim()}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
          ${
            softSkills
              ? `
            <div class="skills-group soft">
              <h4>Habilidades Interpessoais</h4>
              <div class="skills-container">
                ${softSkills
                  .split(",")
                  .map(
                    (skill) => `
                  <span class="skill-chip soft">${skill.trim()}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
          ${
            languages
              ? `
            <div class="skills-group language">
              <h4>Idiomas</h4>
              <div class="skills-container">
                ${languages
                  .split(",")
                  .map(
                    (skill) => `
                  <span class="skill-chip language">${skill.trim()}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
          ${
            certifications
              ? `
            <div class="skills-group certification">
              <h4>Certificações</h4>
              <div class="skills-container">
                ${certifications
                  .split(",")
                  .map(
                    (skill) => `
                  <span class="skill-chip certification">${skill.trim()}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
        </section>
      `
          : ""
      }

      ${
        hasProjects
          ? `
        <section class="resume-section">
          <h3>Projetos Relevantes</h3>
          ${projectNames
            .map((name, index) => {
              if (name && (projectDescriptions[index] || projectUrls[index])) {
                return `
                <div class="project-entry">
                  <h4>${name}</h4>
                  ${
                    projectDescriptions[index]
                      ? `<p>${projectDescriptions[index]}</p>`
                      : ""
                  }
                  ${
                    projectUrls[index]
                      ? `
                    <a href="${projectUrls[index]}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                      ${projectUrls[index]}
                    </a>
                  `
                      : ""
                  }
                </div>
              `;
              }
              return "";
            })
            .join("")}
        </section>
      `
          : ""
      }
    </div>
  `;

  const observer = new MutationObserver(() => {
    preview.scrollTop = scrollPosition;
    observer.disconnect();
  });

  observer.observe(preview, { childList: true, subtree: true });
  preview.innerHTML = html;
}

async function generatePDF() {
  const element = document.getElementById("resumePreview");
  if (!element) {
    console.error("Elemento de preview não encontrado");
    return;
  }

  try {
    const exportPDFBtn = document.getElementById("exportPDF");
    if (exportPDFBtn) {
      exportPDFBtn.innerHTML = '<span class="loading">Gerando PDF...</span>';
      exportPDFBtn.disabled = true;
    }

    generatePreview();

    await new Promise((resolve) => setTimeout(resolve, 500));

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Currículo</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          :root {
            --primary-color: #2563eb;
            --secondary-color: #1e40af;
            --text-color: #1f2937;
            --light-text: #6b7280;
            --border-color: #e5e7eb;
            --success-color: #10b981;
            --error-color: #ef4444;
            --warning-color: #f59e0b;
            --technical-color: #3b82f6;
            --soft-color: #8b5cf6;
            --language-color: #ec4899;
            --certification-color: #f59e0b;
          }

          @media print {
            body {
              margin: 0;
              padding: 20px;
              width: 100%;
              background: white;
            }
            .resume {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background: white;
            }
            .resume-header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 1.5rem;
              border-bottom: 2px solid var(--border-color);
            }
            .resume-header h1 {
              font-size: 2rem;
              font-weight: 700;
              color: var(--primary-color);
              margin-bottom: 0.5rem;
            }
            .resume-header h2 {
              font-size: 1.25rem;
              color: var(--light-text);
              margin-bottom: 2rem;
            }
            .resume-section {
              margin-bottom: 20px;
              page-break-inside: avoid;
            }
            .resume-section h3 {
              color: var(--primary-color);
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1rem;
              padding-bottom: 0.5rem;
              border-bottom: 1px solid var(--border-color);
            }
            .resume-entry {
              margin-bottom: 15px;
              page-break-inside: avoid;
            }
            .resume-entry h4 {
              font-size: 1.125rem;
              font-weight: 600;
              color: var(--text-color);
              margin-bottom: 0.25rem;
            }
            .resume-entry h5 {
              font-size: 1rem;
              color: var(--light-text);
              margin-bottom: 0.25rem;
            }
            .resume-entry .date {
              color: var(--light-text);
              font-size: 0.875rem;
              margin-bottom: 0.5rem;
            }
            .contact-info {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 15px;
            }
            .contact-info p {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              color: var(--light-text);
            }
            .skills-container {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              justify-content: center;
            }
            .skill-chip {
              margin: 2px;
              padding: 4px 12px;
              font-size: 12px;
              border-radius: 9999px;
            }
            .skill-chip.technical {
              background-color: rgba(59, 130, 246, 0.1);
              color: var(--technical-color);
              border: 1px solid rgba(59, 130, 246, 0.2);
            }
            .skill-chip.soft {
              background-color: rgba(139, 92, 246, 0.1);
              color: var(--soft-color);
              border: 1px solid rgba(139, 92, 246, 0.2);
            }
            .skill-chip.language {
              background-color: rgba(236, 72, 153, 0.1);
              color: var(--language-color);
              border: 1px solid rgba(236, 72, 153, 0.2);
            }
            .skill-chip.certification {
              background-color: rgba(245, 158, 11, 0.1);
              color: var(--certification-color);
              border: 1px solid rgba(245, 158, 11, 0.2);
            }
            .project-entry {
              background: #f8fafc;
              border-radius: 0.5rem;
              padding: 1.5rem;
              margin-bottom: 1.5rem;
              border: 1px solid var(--border-color);
            }
            .project-entry h4 {
              color: var(--primary-color);
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 0.75rem;
            }
            .project-entry p {
              color: var(--text-color);
              margin-bottom: 1rem;
              line-height: 1.6;
            }
            .project-entry a {
              color: var(--primary-color);
              text-decoration: none;
            }
            @page {
              size: A4;
              margin: 20mm;
            }
          }
        </style>
      </head>
      <body class="bg-white">
        ${element.innerHTML}
      </body>
      </html>
    `);

    printWindow.document.close();
    await new Promise((resolve) => setTimeout(resolve, 500));

    printWindow.onload = function () {
      if (exportPDFBtn) {
        exportPDFBtn.innerHTML = "Exportar PDF";
        exportPDFBtn.disabled = false;
      }
    };

    printWindow.print();

    printWindow.onafterprint = function () {
      printWindow.close();
    };
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");

    const exportPDFBtn = document.getElementById("exportPDF");
    if (exportPDFBtn) {
      exportPDFBtn.innerHTML = "Exportar PDF";
      exportPDFBtn.disabled = false;
    }
  }
}

function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = "";

  if (fieldName === "workEndDate[]") {
    const parentGroup = field.closest(".end-date-group");
    if (parentGroup && parentGroup.style.display === "none") {
      field.classList.remove("border-red-500", "border-green-500");
      return true;
    }
  }
  field.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "border-green-500"
  );

  const existingError = field.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  switch (fieldName) {
    case "fullName":
      if (value.length < 3) {
        isValid = false;
        errorMessage = "Nome deve ter pelo menos 3 caracteres";
      }
      break;
    case "title":
      if (value.length < 3) {
        isValid = false;
        errorMessage = "Título deve ter pelo menos 3 caracteres";
      }
      break;
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Email inválido";
      }
      break;
    case "phone":
      const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = "Telefone deve estar no formato (00) 00000-0000";
      }
      break;
    case "summary":
      if (value.length < 10) {
        isValid = false;
        errorMessage = "Resumo deve ter pelo menos 10 caracteres";
      }
      break;
    default:
      if (fieldName.includes("[]")) {
        if (value.length < 3) {
          isValid = false;
          errorMessage = "Campo deve ter pelo menos 3 caracteres";
        }
      }
  }

  if (!isValid) {
    field.classList.add("border-red-500");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message text-red-500 text-sm mt-1";
    errorDiv.textContent = errorMessage;
    field.parentElement.appendChild(errorDiv);
  } else {
    field.classList.add("border-green-500");
  }

  return isValid;
}

function addEntry(type) {
  const container = document.getElementById(`${type}Container`);
  const newEntry = document.createElement("div");
  newEntry.className = `${type}-entry entry-container`;

  const template = {
    education: `
      <button type="button" class="remove-entry btn btn-danger">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        Remover
      </button>
      <div class="form-group">
        <label for="education" class="block text-sm font-medium text-gray-700 mb-1">Instituição</label>
        <input type="text" name="education[]" class="form-input" placeholder="Nome da instituição">
      </div>
      <div class="form-group">
        <label for="course" class="block text-sm font-medium text-gray-700 mb-1">Curso</label>
        <input type="text" name="course[]" class="form-input" placeholder="Nome do curso">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label for="startDate" class="block text-sm font-medium text-gray-700 mb-1">Data de Início</label>
          <input type="month" name="startDate[]" class="form-input">
        </div>
        <div class="form-group">
          <label for="endDate" class="block text-sm font-medium text-gray-700 mb-1">Data de Término</label>
          <input type="month" name="endDate[]" class="form-input">
        </div>
      </div>
      <div class="form-group">
        <label for="educationDescription" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea name="educationDescription[]" class="form-input" rows="2" placeholder="Principais disciplinas, projetos ou conquistas"></textarea>
      </div>
    `,
    experience: `
    <button type="button" class="remove-entry btn btn-danger">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
      Remover
    </button>

    <div class="form-group">
      <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
      <input type="text" name="company[]" class="form-input" placeholder="Nome da empresa">
    </div>
    <div class="form-group">
      <label for="position" class="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
      <input type="text" name="position[]" class="form-input" placeholder="Seu cargo">
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="form-group">
        <label for="workStartDate" class="block text-sm font-medium text-gray-700 mb-1">Data de Início</label>
        <input type="month" name="workStartDate[]" class="form-input">
      </div>
       <div class="form-group end-date-group">
        <label class="block text-sm font-medium text-gray-700 mb-1">Data de Término</label>
        <input type="month" name="workEndDate[]" class="form-input">
        </div>
    </div>   
    <div class="form-group flex items-center gap-2 mt-2">
      <input
        type="checkbox"
        name="currentJob[]"
        class="current-job-checkbox h-4 w-4"
        id="currentJobCheckbox"
      />
      <label for="currentJobCheckbox" class="text-sm font-medium text-gray-700">
        Atualmente trabalho aqui
      </label>
    </div>

    <div class="form-group">
      <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
      <textarea name="description[]" class="form-input" rows="3" placeholder="Descreva suas responsabilidades e conquistas"></textarea>
    </div>
  `,
    project: `
      <button type="button" class="remove-entry btn btn-danger">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        Remover
      </button>
      <div class="form-group">
        <label for="projectName" class="block text-sm font-medium text-gray-700 mb-1">Nome do Projeto</label>
        <input type="text" name="projectName[]" class="form-input" placeholder="Nome do projeto">
      </div>
      <div class="form-group">
        <label for="projectDescription" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea name="projectDescription[]" class="form-input" rows="3" placeholder="Descreva o projeto, suas responsabilidades e resultados"></textarea>
      </div>
      <div class="form-group">
        <label for="projectUrl" class="block text-sm font-medium text-gray-700 mb-1">URL do Projeto</label>
        <input type="url" name="projectUrl[]" class="form-input" placeholder="https://github.com/seu-usuario/projeto">
      </div>
    `,
  };

  newEntry.innerHTML = template[type];
  container.appendChild(newEntry);
  newEntry.style.opacity = "0";
  setTimeout(() => {
    newEntry.style.opacity = "1";
  }, 10);

  newEntry.querySelectorAll(".form-input").forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);
      generatePreview();
    });

    field.addEventListener("blur", () => {
      validateField(field);
    });
  });

  if (type === "experience") {
    const checkbox = newEntry.querySelector(".current-job-checkbox");
    const endDateInput = newEntry.querySelector("input[name='workEndDate[]']");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        endDateInput.value = "";
        endDateInput.disabled = true;
      } else {
        endDateInput.disabled = false;
      }
      generatePreview();
    });
  }

  if (type === "experience") {
    const checkbox = newEntry.querySelector(".current-job-checkbox");
    const endDateGroup = newEntry.querySelector(".end-date-group");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        endDateGroup.style.display = "none";
      } else {
        endDateGroup.style.display = "block";
      }
      generatePreview();
    });

    newEntry.querySelector(".remove-entry").addEventListener("click", () => {
      const allEntries = container.querySelectorAll(".experience-entry");
      if (allEntries.length > 1) {
        newEntry.style.opacity = "0";
        setTimeout(() => {
          newEntry.remove();
          generatePreview();
        }, 300);
      } else {
        newEntry.querySelectorAll("input, textarea").forEach((field) => {
          field.value = "";
        });
        generatePreview();
      }
    });
  }
}

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

document.addEventListener("DOMContentLoaded", function () {
  const addEducationBtn = document.getElementById("addEducation");
  const addExperienceBtn = document.getElementById("addExperience");
  const addProjectBtn = document.getElementById("addProject");
  const exportPDFBtn = document.getElementById("exportPDF");
  const resumeForm = document.getElementById("resumeForm");
  const birthDateInput = document.getElementById("birthDate");

  if (resumeForm) {
    resumeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      generatePDF();
    });
  }

  addEducationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addEntry("education");
  });

  addExperienceBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addEntry("experience");
  });

  addProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addEntry("project");
  });

  if (exportPDFBtn) {
    exportPDFBtn.addEventListener("click", function (e) {
      e.preventDefault();
      generatePDF();
    });
  }

  if (birthDateInput) {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 10,
      today.getMonth(),
      today.getDate()
    );
    birthDateInput.max = maxDate.toISOString().split("T")[0];

    birthDateInput.addEventListener("change", function () {
      const birthDate = this.value;
      if (birthDate) {
        const age = calculateAge(birthDate);
        if (age < 10) {
          alert("A idade mínima permitida é 10 anos.");
          this.value = "";
          document.getElementById("age").value = "";
          generatePreview();
          return;
        }
        document.getElementById("age").value = age + " anos";
      } else {
        document.getElementById("age").value = "";
      }
      generatePreview();
    });
  }

  document.querySelectorAll(".experience-entry").forEach((entry) => {
    const checkbox = entry.querySelector(".current-job-checkbox");
    const endDateGroup = entry.querySelector(".end-date-group");
    if (checkbox && endDateGroup) {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          endDateGroup.style.display = "none";
        } else {
          endDateGroup.style.display = "block";
        }
        generatePreview();
      });
    }
  });

  document.querySelectorAll(".form-input").forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);
      generatePreview();
    });

    field.addEventListener("blur", () => {
      validateField(field);
    });
  });

  generatePreview();
});
