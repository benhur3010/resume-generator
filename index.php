<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Currículo</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body class="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
    <header
        id="mainMenu"
        class="sticky top-0 bg-white shadow p-2 z-20 print:hidden">
        <nav class="container mx-auto px-4 py-2 flex gap-6">
            <a
                href="#personalInfo"
                class="text-gray-700 hover:text-blue-600">Informações</a>
            <a
                href="#educationSection"
                class="text-gray-700 hover:text-blue-600">Educação</a>
            <a
                href="#experienceSection"
                class="text-gray-700 hover:text-blue-600">Experiência</a>
            <a
                href="#skillsSection"
                class="text-gray-700 hover:text-blue-600">Habilidades</a>
            <a
                href="#projectsSection"
                class="text-gray-700 hover:text-blue-600">Projetos</a>
        </nav>
    </header>
    <div class="container mx-auto px-4 py-8 max-w-7xl">
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Gerador de Currículo</h1>
            <p class="text-gray-600">Crie seu currículo profissional em minutos</p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-6">
                    <form id="resumeForm" class="space-y-8" method="POST">
                        <!-- Informações pessoais -->
                        <div class="form-section" id="personalInfo">
                            <h2 class="section-title">Informações Pessoais</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="form-group">
                                    <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                    <input type="text" name="fullName" class="form-input" placeholder="Seu nome completo">
                                </div>
                                <div class="form-group">
                                    <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Título Profissional</label>
                                    <input type="text" name="title" class="form-input" placeholder="Ex: Desenvolvedor Full Stack">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" name="email" class="form-input" placeholder="seu@email.com">
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                    <input type="tel" name="phone" class="form-input" placeholder="(00) 00000-0000">
                                </div>
                                <div class="form-group">
                                    <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Localização</label>
                                    <input type="text" name="location" class="form-input" placeholder="Cidade, Estado">
                                </div>
                                <div class="form-group">
                                    <label for="birthDate" class="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
                                    <input type="date" name="birthDate" id="birthDate" class="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" min="1900-01-01">
                                </div>
                                <div class="form-group">
                                    <label for="age" class="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                                    <input type="text" name="age" id="age" class="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="linkedin" class="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                                    <input type="url" name="linkedin" class="form-input" placeholder="linkedin.com/in/seu-perfil">
                                </div>
                                <div class="form-group md:col-span-2">
                                    <label for="summary" class="block text-sm font-medium text-gray-700 mb-1">Resumo Profissional</label>
                                    <textarea name="summary" class="form-input" rows="3" placeholder="Breve descrição sobre você e seus objetivos profissionais"></textarea>
                                </div>
                            </div>
                        </div>

                        <!-- Educação -->
                        <div class="form-section" id="educationSection">
                            <h3 class="section-title">Educação</h3>
                            <div id="educationContainer" class="scrollable-section">
                                <div class="education-entry entry-container">
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
                                </div>
                            </div>
                            <div class="add-button-container">
                                <a href="#" id="addEducation" class="btn btn-primary">Adicionar Educação</a>
                            </div>
                        </div>

                        <!-- Experiência -->
                        <div class="form-section" id="experienceSection">
                            <h3 class="section-title">Experiência Profissional</h3>
                            <div id="experienceContainer" class="scrollable-section">
                                <div class="experience-entry entry-container">
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
                                            id="currentJobCheckbox" />
                                        <label for="currentJobCheckbox" class="text-sm font-medium text-gray-700">
                                            Atualmente trabalho aqui
                                        </label>
                                    </div>

                                    <div class="form-group">
                                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                                        <textarea name="description[]" class="form-input" rows="3" placeholder="Descreva suas responsabilidades e conquistas"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="add-button-container">
                                <a href="#" id="addExperience" class="btn btn-primary">Adicionar Experiência</a>
                            </div>
                        </div>

                        <!-- Habilidades -->
                        <div class="form-section" id="skillsSection">
                            <h3 class="section-title">Habilidades</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="form-group">
                                    <label for="technicalSkills" class="block text-sm font-medium text-gray-700 mb-1">Habilidades Técnicas</label>
                                    <input type="text" name="technicalSkills" class="form-input" placeholder="Ex: JavaScript, PHP, HTML, CSS">
                                </div>
                                <div class="form-group">
                                    <label for="softSkills" class="block text-sm font-medium text-gray-700 mb-1">Habilidades Interpessoais</label>
                                    <input type="text" name="softSkills" class="form-input" placeholder="Ex: Liderança, Comunicação, Trabalho em Equipe">
                                </div>
                                <div class="form-group">
                                    <label for="languages" class="block text-sm font-medium text-gray-700 mb-1">Idiomas</label>
                                    <input type="text" name="languages" class="form-input" placeholder="Ex: Português (Nativo), Inglês (Fluente)">
                                </div>
                                <div class="form-group">
                                    <label for="certifications" class="block text-sm font-medium text-gray-700 mb-1">Certificações</label>
                                    <input type="text" name="certifications" class="form-input" placeholder="Ex: AWS Certified Developer, Scrum Master">
                                </div>
                            </div>
                        </div>

                        <!-- Projetos -->
                        <div class="form-section" id="projectsSection">
                            <h3 class="section-title">Projetos Relevantes</h3>
                            <div id="projectContainer" class="scrollable-section">
                                <div class="project-entry entry-container">
                                    <div class="form-group">
                                        <label for="projectName" class="block text-sm font-medium text-gray-700 mb-1">Nome do Projeto</label>
                                        <input type="text" name="projectName[]" class="form-input" placeholder="Nome do projeto">
                                    </div>
                                    <div class="form-group">
                                        <label for="projectDescription" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                                        <textarea name="projectDescription[]" class="form-input" rows="2" placeholder="Descreva o projeto, suas responsabilidades e resultados"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="projectUrl" class="block text-sm font-medium text-gray-700 mb-1">URL do Projeto</label>
                                        <input type="url" name="projectUrl[]" class="form-input" placeholder="https://github.com/seu-usuario/projeto">
                                    </div>
                                </div>
                            </div>
                            <div class="add-button-container">
                                <a href="#" id="addProject" class="btn btn-primary">Adicionar Projeto</a>
                            </div>
                        </div>

                        <a href="#" type="submit" class="btn btn-success w-full text-lg py-3" id="exportPDF">
                            Exportar PDF
                        </a>
                    </form>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden h-fit sticky top-0">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="section-title mb-0">Preview do Currículo</h2>
                        <a href="#" id="exportPDF" class="btn btn-purple" onclick="generatePDF()">
                            Exportar PDF
                        </a>
                    </div>
                    <div id="resumePreview" class="preview-container">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/resume.js"></script>
</body>

</html>