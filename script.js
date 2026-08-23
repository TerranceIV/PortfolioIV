// Data
const projects = [
    {
        id: 1,
        title: "Governance Platform",
        excerpt: "A scalable, high-performance governance platform built with .NET 10 and Vue 3.",
        date: "Year of 2026",
        info: "Full-Stack Development",
        tags: ["Full Stack", ".NET 10", "Vue 3", "Performance"],
        image: "🏛️",
        image_color: "#10b981",
        content: `
            <h2>Governance Platform: .NET 10 + Vue 3</h2>

            <p>
                Designed and developed a strategic governance platform using .NET 10 for the backend
                and Vue 3 for the front end. The solution was built with a strong focus on performance,
                scalability, extensibility, and long-term maintainability.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li>Optimised database access patterns, query performance, and data-fetching strategies to reduce latency and improve system responsiveness.</li>
                <li>Designed the application to support data-intensive workflows and high-concurrency usage scenarios.</li>
                <li>Maintained a clean, modular, and scalable codebase with clear separation of concerns.</li>
                <li>Implemented extensibility hooks and plugin-style architecture to support future modules, integrations, and governance workflows.</li>
                <li>Improved maintainability and enabled faster feature delivery and easier onboarding for development team members.</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Sitefinity to Directus CMS Migration",
        excerpt: "Modernised a legacy CMS platform using Directus, TypeScript, and Next.js.",
        date: "Year of 2025",
        info: "Technology Refresh",
        tags: ["Directus", "TypeScript", "Next.js", "Headless CMS"],
        image: "🔁",
        image_color: "#8b5cf6",
        content: `
            <h2>Sitefinity to Directus CMS Technology Refresh</h2>

            <p>
                Led the strategic migration from Progress Sitefinity to Directus Headless CMS,
                supported by a modern front end developed with TypeScript and Next.js. The initiative
                improved platform flexibility, enabled modern content workflows, and strengthened
                integration with internal systems.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li>Designed and implemented a custom integration layer between Directus and the internal Optical CMS.</li>
                <li>Enabled reliable data interoperability and streamlined content-management operations across platforms.</li>
                <li>Established workflows for data-model updates, schema changes, automated data synchronisation, and controlled publishing.</li>
                <li>Configured granular user permissions and role-based access control for page modules and content-management functions.</li>
                <li>Explored and prototyped custom Directus extensions to enhance validation, workflow automation, and business-specific functionality.</li>
                <li>Developed the front-end solution using TypeScript and Next.js to support a modern, maintainable, and scalable digital experience.</li>
            </ul>
        `
    },
    {
        id: 3,
        title: ".NET 8 Microservices Platform on AWS",
        excerpt: "A cloud-native .NET 8 platform for scalable, secure, and reliable data processing.",
        date: "Year of 2024",
        info: "Cloud-Native Development",
        tags: [".NET 8", "Microservices", "AWS", "Data Processing"],
        image: "☁️",
        image_color: "#ec4899",
        content: `
            <h2>.NET 8 Microservices Platform on AWS</h2>

            <p>
                Architected and developed a cloud-native microservices platform using .NET 8 and AWS
                services. The solution was designed to deliver secure, scalable, and resilient backend
                services for business data ingestion, processing, and search.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li>Designed backend services using a microservices architecture with clear service boundaries and scalable processing capabilities.</li>
                <li>Integrated AWS EC2, RDS, private VPC, S3, Lambda, API Gateway, CloudFront, and Secrets Manager.</li>
                <li>Implemented CSV upload, validation, transformation, and structured database persistence workflows.</li>
                <li>Developed a lightweight search capability for processed and structured business data.</li>
                <li>Designed asynchronous queuing and background-processing pipelines for high-volume data ingestion and database updates.</li>
                <li>Applied validation, retry mechanisms, and data-integrity controls to ensure reliable processing and maintain system responsiveness.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Progress Sitefinity CMS Upgrade",
        excerpt: "Upgraded Sitefinity CMS, modernised custom widgets, and strengthened platform security.",
        date: "Year of 2023",
        info: "Migration & Security Hardening",
        tags: ["Sitefinity", "ASP.NET MVC 5", "Migration", "Security"],
        image: "🏗️",
        image_color: "#6366f1",
        content: `
            <h2>Progress Sitefinity CMS Upgrade: Version 13.3 to 14.4</h2>

            <p>
                Led the end-to-end upgrade of the corporate Progress Sitefinity CMS from version 13.3
                to 14.4. The project focused on modernising legacy .NET Framework components,
                improving custom-widget maintainability, strengthening application security, and
                delivering business-requested enhancements.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li>Managed the migration from Sitefinity CMS version 13.3 to version 14.4.</li>
                <li>Transitioned legacy implementation patterns to an ASP.NET MVC 5 architecture.</li>
                <li>Refactored and modernised custom widgets to improve code readability, maintainability, and alignment with MVC patterns.</li>
                <li>Remediated Vulnerability Assessment and Penetration Testing (VAPT) findings, including security misconfigurations and common web vulnerabilities.</li>
                <li>Collaborated with business stakeholders and product owners to gather and evaluate service-request requirements.</li>
                <li>Designed and delivered new widgets, functional enhancements, and UX improvements for content editors and website users.</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "Hospital Learning Management System",
        excerpt: "A high-performance learning management system designed to manage large-scale trainee records, course requirements, learning progress, and complex data-processing workflows.",
        date: "Year of 2025",
        info: "10 min read",
        tags: ["C#", ".NET", "SQL Server", "Database Optimization", "Excel Processing"],
        image: "🏥",
        image_color: "#ef4444",
        content: `
            <h2>Hospital Learning Management System</h2>
            <p>
                Developed a large-scale Learning Management System (LMS) for the healthcare domain,
                supporting millions of data records related to trainees, learning courses, client procedures,
                mandatory training requirements, personal tasks, and learning-progress tracking.
            </p>

            <h3>Key Responsibilities</h3>
            <ul>
                <li>Designed and developed backend services to manage high-volume learning and trainee data.</li>
                <li>Implemented course assignment, mandatory training tracking, task management, and trainee progress monitoring.</li>
                <li>Built Excel import and export processes to support large-scale data extraction, validation, transformation, and reporting.</li>
                <li>Optimised database queries and processing logic to improve response time and support concurrent business operations.</li>
                <li>Developed and enhanced Microsoft SQL Server stored procedures for complex reporting and bulk data-processing requirements.</li>
                <li>Applied efficient data-fetching strategies to minimise unnecessary database calls and improve application performance.</li>
            </ul>

            <h3>Technical Focus</h3>
            <p>
                The solution prioritised database performance, efficient bulk processing, and reliable handling
                of large datasets. SQL Server stored procedures and optimised query patterns were used to reduce
                processing overhead while maintaining data accuracy and integrity.
            </p>
        `
    },
    {
        id: 6,
        title: "Membership Rewards Analytics System",
        excerpt: "A membership rewards and sales analytics platform that evaluates product performance, calculates reward tiers, and generates quarterly and annual reports.",
        date: "Year of 2025",
        info: "8 min read",
        tags: ["Analytics", "Rewards System", "Reporting", "Dashboard", "Data Visualization"],
        image: "🎁",
        image_color: "#8b5cf6",
        content: `
            <h2>Membership Rewards Analytics System</h2>
            <p>
                Developed a membership rewards system that enables the business to analyse sales performance,
                monitor product SKU results, calculate member reward tiers, and generate periodic performance reports.
            </p>

            <h3>Key Responsibilities</h3>
            <ul>
                <li>Developed features to analyse sales performance across products, members, and reporting periods.</li>
                <li>Implemented SKU-level analysis to help stakeholders identify product performance trends and sales opportunities.</li>
                <li>Built quarterly and annual reporting functions to provide structured insights into sales results and reward eligibility.</li>
                <li>Developed reward-tier calculation logic based on defined sales performance and membership criteria.</li>
                <li>Created dashboard views with statistical charts and visualisations to present key performance indicators clearly.</li>
                <li>Ensured reporting data was accurate, consistent, and suitable for business decision-making.</li>
            </ul>

            <h3>Business Value</h3>
            <p>
                The platform provides stakeholders with a centralised view of sales performance and membership
                reward outcomes. It improves visibility into product-level results, supports transparent reward
                calculations, and enables data-driven planning through quarterly and annual analytics.
            </p>
        `
    },
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
    grid.innerHTML = [...filteredprojects]
        .sort((firstProject, secondProject) => firstProject.id - secondProject.id)
        .map(project => `
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
    projectBody.innerHTML = currentProject.content;

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