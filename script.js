// Data
const projects = [
    {
        id: 1,
        title: "Progress Sitefinity CMS Upgrade",
        excerpt: "Major Version Migration & Security Hardening",
        date: "Year of 2023",
        info: "Migration & Version upgrade",
        tags: ["Migration", "Versioning Upgrade" , "Security"],
        image : "🏗️",
        image_color: "#6366f1",
        content: `       
                Led the end-to-end migration of the corporate Progress Sitefinity CMS from version 13.3 to 14.4, overseeing the transition from legacy .NET Framework–based implementations to ASP.NET MVC 5 architecture.

                ### Transforming the CMS architecture

                Refactored and modernized custom widgets to improve code maintainability, readability, and alignment with Sitefinity's recommended MVC patterns.

                ### Security Hardening

                Addressed all findings from Vulnerability Assessment and Penetration Testing (VAPT), systematically eliminating security issues such as insecure direct object references, XSS vectors, and misconfigurations to meet enterprise security standards.

                ### Requirements Gathering and UX Improvements

                Collaborated with business stakeholders and product owners to gather requirements for service requests, design new feature widgets, and implement UX improvements that enhanced content authoring workflows and end-user navigation.`
    },
    {
        id: 2,
        title: "Sitefinity → Directus CMS with TypeScript + Next.js",
        excerpt: "Architecture Refresh",
        date: "Year of 2025",
        info: "Tech refresh",
        tags: ["Architecture", "TypeScript", "Tech Trends"],
        image : "🔁",
        image_color: "#8b5cf6",
        content: `
                Spearheaded a strategic technology refresh by migrating the content platform from Progress Sitefinity to Directus as a headless CMS, coupled with a modern front-end built on TypeScript and Next.js.

                <li>Designed and implemented a custom integration layer between Directus and the internal Optical CMS, enabling seamless data interoperability and unified content operations.</li>

                <li>Established robust workflows for data model evolution, including schema versioning, automated data synchronization pipelines, and controlled publishing processes for backend content management.</li>

                <li>Configured and enforced granular user permissions and role-based access control (RBAC) for page modules, ensuring least-privilege access and auditability across content teams.</li>

                <li>Explored and prototyped custom Directus extensions to augment out-of-the-box capabilities, tailoring the CMS to complex business requirements around content modeling, validation, and workflow automation.</li>
                `
    },
    {
        id: 3,
        title: " .NET 8 Microservices Platform on AWS",
        excerpt: "Microservices",
        date: "Year of 2024",
        info: "Cloud technology",
        tags: [" .NET", "Microservices", "AWS"],
        image : "☁️",
        image_color: "#ec4899",
        content: `
                Architected and developed a cloud-native microservices solution on .NET 8, fully integrated with AWS infrastructure to deliver scalable, resilient, and secure backend services.

                Leveraged AWS services including EC2 for compute, RDS for managed relational databases, private VPC for network isolation, S3 for object storage, Lambda for serverless functions, API Gateway for API management, CloudFront for global content delivery, and Secrets Manager for secure credential handling.

                Implemented a lightweight search capability that ingests CSV uploads, transforms and validates data, and persists structured records into the database with strong consistency guarantees.

                Designed queuing mechanisms and background processing pipelines to handle large-scale data ingestion, transformation, and database updates while preserving data integrity and system responsiveness under load.
                `
    },
    {
        id: 4,
        title: "Governance Platform",
        excerpt: "Fullstack Development .NET 10",
        date: "Year of 2025",
        info: "Fullstack",
        tags: ["Node.js", "Backend", "Performance"],
        image : "🏛️",
        image_color: "#10b981",
        content: `Governance Platform -> .NET 10 + Vue 3
                Owned the design and development of a strategic governance platform built on the latest .NET 10 runtime with a Vue 3 front-end, targeting high performance, extensibility, and long-term maintainability.

                Optimized database access patterns, query performance, and data-fetching strategies to improve system readiness, reduce latency, and support high-concurrency usage scenarios.

                Maintained a clean, modular, and scalable codebase with clear separation of concerns, enabling rapid feature extension and easy onboarding for new team members.

                Embedded extensibility hooks and plugin-style architecture to support future modules, integrations, and domain-specific governance workflows without significant rework.
                `
    },
    {
        id: 5,
        title: "Database Design Best Practices",
        excerpt: "Learn essential database design principles that will save you from future headaches and technical debt.",
        date: "Year of 2025",
        info: "9 min read",
        tags: ["Database", "SQL", "Architecture"],
        image : "🗄️",
        image_color: "#f59e0b",
        content: `# Database Design Best Practices

                Good database design is the foundation of any successful application.

                ## Normalization

                Understand when to normalize and when denormalization makes sense.

                ## Indexing Strategy

                Proper indexing can dramatically improve query performance.

                ## Schema Evolution

                Plan for change. Your schema will evolve over time.`
    },
    {
        id: 6,
        title: "Modern Authentication Strategies",
        excerpt: "Secure your applications with modern authentication methods including OAuth, JWT, and passwordless authentication.",
        date: "Year of 2025",
        info: "8 min read",
        tags: ["Security", "Authentication", "Backend"],
        image : "🔐",
        image_color: "#ef4444",
        content: `# Modern Authentication Strategies

                Authentication is evolving beyond traditional username/password.

                ## JWT Tokens

                JSON Web Tokens provide stateless authentication for modern applications.

                ## OAuth 2.0

                Learn how OAuth enables secure third-party authentication.

                ## Passwordless Authentication

                The future might be passwordless. Explore biometric and magic link authentication.`
    }
];

const skills = [
    { name: "C# .NET", icon: "🔷" },
    { name: "JavaScript/TypeScript", icon: "⚡" },
    { name: "React/Next.js", icon: "⚛️" },
    { name: "Node.js", icon: "⬢ " },
    { name: "Python", icon: "🐍" },
    { name: "Database Design", icon: "🗄️" },
    { name: "Cloud Architecture", icon: "☁️" },
    { name: "UI/UX Design", icon: "🎨" }
];

// State management
let currentTheme = 'light';
let currentProject = null;
let filteredprojects = [...projects];

// Initialize
function init() {
    renderProjects();
    renderSkills();
    setupScrollEffects();
    setupTheme();
}

// Theme toggle
function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    });
}

// Render projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = filteredprojects.map(project => `
                <div class="project-card" onclick="openProject(${project.id})">
                    <div class="project-image" style="background: ${project.image_color}">
                        <div class="project-image-icon">${project.image}</div>
                    </div>
                    <div class="project-content">
                        <div class="project-meta">
                            <span>${project.date}</span>
                            <span>•</span>
                            <span>${project.info}</span>
                        </div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-excerpt">${project.excerpt}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
}

// Render skills
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map(skill => `
                <div class="skill-card">
                    <div class="skill-icon">${skill.icon}</div>
                    <div class="skill-name">${skill.name}</div>
                </div>
            `).join('');
}

// Open project
function openProject(id) {
    currentProject = projects.find(a => a.id === id);
    if (!currentProject) return;

    const projectHeader = document.getElementById('projectHeader');
    const projectBody = document.getElementById('projectBody');

    projectHeader.innerHTML = `
                <div class="project-meta">
                    <span>${currentProject.date}</span>
                    <span>•</span>
                    <span>${currentProject.info}</span>
                </div>
                <h1 class="project-title" style="font-size: var(--font-size-4xl); margin-top: var(--space-12);">${currentProject.title}</h1>
                <div class="project-tags" style="margin-top: var(--space-16);">
                    ${currentProject.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;

    // Simple markdown-like rendering
    const html = currentProject.content
        .replace(/### (.*?)\n/g, '<h3>$1</h3>')
        .replace(/## (.*?)\n/g, '<h2>$1</h2>')
        .replace(/# (.*?)\n/g, '<h1>$1</h1>')
        .replace(/```css([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/\n- (.*?)\n/g, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.)/g, '<p>$1')
        .replace(/(.)$/g, '$1</p>');

    projectBody.innerHTML = html;

    showSection('project');
    window.scrollTo(0, 0);
}

// Filter projects
function filterprojects() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    if (!searchTerm) {
        filteredprojects = [...projects];
    } else {
        filteredprojects = projects.filter(project => {
            const titleMatch = project.title.toLowerCase().includes(searchTerm);
            const tagsMatch = project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return titleMatch || tagsMatch;
        });
    }

    renderProjects();
}

// Show section
function showSection(section) {
    const heroSection = document.getElementById('heroSection');
    const searchSection = document.getElementById('searchSection');
    const projectsSection = document.getElementById('projectsSection');
    const projectView = document.getElementById('projectView');
    const aboutSection = document.getElementById('aboutSection');

    // Hide all
    searchSection.classList.add('hidden');
    projectsSection.classList.add('hidden');
    projectView.classList.remove('active');
    aboutSection.classList.add('hidden');

    // Show selected
    switch (section) {
        case 'home':
            heroSection.style.display = 'flex';
            searchSection.classList.remove('hidden');
            projectsSection.classList.remove('hidden');
            break;
        case 'projects':
            heroSection.style.display = 'flex';
            searchSection.classList.remove('hidden');
            projectsSection.classList.remove('hidden');
            break;
        case 'project':
            heroSection.style.display = 'none';
            projectView.classList.add('active');
            break;
        case 'about':
            heroSection.style.display = 'none';
            aboutSection.classList.remove('hidden');
            window.scrollTo(0, 0);
            break;
    }
}

// Scroll effects
function setupScrollEffects() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Reading progress
        if (document.getElementById('projectView').classList.contains('active')) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('readingProgress').style.width = scrolled + '%';
        }
    });
}

// Smooth scroll to projects section
function smoothScrollToProjects(event) {
    event.preventDefault();
    const projectsSection = document.getElementById('projectsSection');
    projectsSection.scrollIntoView({
        behavior: 'smooth'
    });
    showSection('projects');
}

// Handle form submit
function handleSubmit(event) {
    event.preventDefault();

    const button = event.target.querySelector('.form-button');
    const successMessage = document.getElementById('successMessage');

    button.disabled = true;
    button.textContent = 'Sending...';

    // Simulate API call
    setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Send Message';
        successMessage.classList.add('show');
        event.target.reset();

        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }, 1500);
}

// Initialize app
init();