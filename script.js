// Data
const articles = [
    {
        id: 1,
        title: "Building Scalable Web Applications in 2025",
        excerpt: "Explore modern architecture patterns and best practices for building high-performance web applications that scale.",
        date: "2025-11-10",
        reading_time: "8 min read",
        tags: ["Web Development", "Architecture", "Performance"],
        image : "🏗️",
        image_color: "#6366f1",
        content: `# Building Scalable Web Applications in 2025
      
                Modern web applications need to handle increasing loads while maintaining performance. In this article, we'll explore key principles.

                ## Architecture Patterns

                Microservices, serverless, and edge computing are reshaping how we build applications. Each pattern has its strengths.

                ### Microservices
                Breaking down applications into smaller, independent services allows for better scalability and maintainability.

                ### Serverless
                Focus on code, not infrastructure. Serverless computing abstracts away server management.

                ## Performance Optimization

                Speed matters. Users expect sub-second load times. Here are key strategies:

                - Code splitting and lazy loading
                - CDN distribution
                - Image optimization
                - Caching strategies

                ## Conclusion

                Building scalable applications requires careful planning and the right architecture choices.`
    },
    {
        id: 2,
        title: "The Future of Frontend Development",
        excerpt: "Dive into emerging trends in frontend development, from new frameworks to revolutionary rendering techniques.",
        date: "2025-11-05",
        reading_time: "6 min read",
        tags: ["Frontend", "JavaScript", "Trends"],
        image : "🖥️",
        image_color: "#8b5cf6",
        content: `# The Future of Frontend Development

                The frontend landscape continues to evolve rapidly. Let's explore what's next.

                ## New Rendering Paradigms

                From SSR to ISR to PPR (Partial Prerendering), rendering strategies are becoming more sophisticated.

                ## Framework Evolution

                Frameworks are focusing on performance and developer experience. React Server Components, Svelte 5, and Solid.js are pushing boundaries.

                ## Key Takeaways

                Stay curious and keep learning. The future is exciting!`
                    },
    {
        id: 3,
        title: "Mastering CSS Grid and Flexbox",
        excerpt: "A comprehensive guide to modern CSS layout techniques that every developer should know.",
        date: "2025-10-28",
        reading_time: "10 min read",
        tags: ["CSS", "Layout", "Design"],
        image : "📐",
        image_color: "#ec4899",
        content: `# Mastering CSS Grid and Flexbox

                CSS Grid and Flexbox are powerful tools for creating responsive layouts.

                ## When to Use Grid vs Flexbox

                Grid excels at two-dimensional layouts, while Flexbox is perfect for one-dimensional arrangements.

                ## Practical Examples

                Let's build a responsive dashboard layout using CSS Grid.

                \`\`\`css
                .container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                }
                \`\`\`

                ## Conclusion

                Master these techniques to build beautiful, responsive layouts efficiently.`
    },
    {
        id: 4,
        title: "Node.js Performance Tips",
        excerpt: "Optimize your Node.js applications with these proven performance techniques and best practices.",
        date: "2025-10-20",
        reading_time: "7 min read",
        tags: ["Node.js", "Backend", "Performance"],
        image : "⚙️",
        image_color: "#10b981",
        content: `# Node.js Performance Tips

                Performance is critical for backend applications. Here's how to optimize Node.js.

                ## Event Loop Understanding

                Understanding the event loop is key to writing performant Node.js code.

                ## Optimization Strategies

                - Use clustering
                - Implement caching
                - Optimize database queries
                - Use streams for large data

                ## Monitoring

                Always monitor your application in production to catch performance issues early.`
    },
    {
        id: 5,
        title: "Database Design Best Practices",
        excerpt: "Learn essential database design principles that will save you from future headaches and technical debt.",
        date: "2025-10-15",
        reading_time: "9 min read",
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
        date: "2025-10-08",
        reading_time: "8 min read",
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
let currentArticle = null;
let filteredArticles = [...articles];

// Initialize
function init() {
    renderArticles();
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

// Render articles
function renderArticles() {
    const grid = document.getElementById('articlesGrid');
    grid.innerHTML = filteredArticles.map(article => `
                <div class="article-card" onclick="openArticle(${article.id})">
                    <div class="article-image" style="background: ${article.image_color}">
                        <div class="article-image-icon">${article.image}</div>
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span>${article.date}</span>
                            <span>•</span>
                            <span>${article.reading_time}</span>
                        </div>
                        <h3 class="article-title">${article.title}</h3>
                        <p class="article-excerpt">${article.excerpt}</p>
                        <div class="article-tags">
                            ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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

// Open article
function openArticle(id) {
    currentArticle = articles.find(a => a.id === id);
    if (!currentArticle) return;

    const articleHeader = document.getElementById('articleHeader');
    const articleBody = document.getElementById('articleBody');

    articleHeader.innerHTML = `
                <div class="article-meta">
                    <span>${currentArticle.date}</span>
                    <span>•</span>
                    <span>${currentArticle.reading_time}</span>
                </div>
                <h1 class="article-title" style="font-size: var(--font-size-4xl); margin-top: var(--space-12);">${currentArticle.title}</h1>
                <div class="article-tags" style="margin-top: var(--space-16);">
                    ${currentArticle.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;

    // Simple markdown-like rendering
    const html = currentArticle.content
        .replace(/### (.*?)\n/g, '<h3>$1</h3>')
        .replace(/## (.*?)\n/g, '<h2>$1</h2>')
        .replace(/# (.*?)\n/g, '<h1>$1</h1>')
        .replace(/```css([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/\n- (.*?)\n/g, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.)/g, '<p>$1')
        .replace(/(.)$/g, '$1</p>');

    articleBody.innerHTML = html;

    showSection('article');
    window.scrollTo(0, 0);
}

// Filter articles
function filterArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    if (!searchTerm) {
        filteredArticles = [...articles];
    } else {
        filteredArticles = articles.filter(article => {
            const titleMatch = article.title.toLowerCase().includes(searchTerm);
            const tagsMatch = article.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return titleMatch || tagsMatch;
        });
    }

    renderArticles();
}

// Show section
function showSection(section) {
    const heroSection = document.getElementById('heroSection');
    const searchSection = document.getElementById('searchSection');
    const articlesSection = document.getElementById('articlesSection');
    const articleView = document.getElementById('articleView');
    const aboutSection = document.getElementById('aboutSection');

    // Hide all
    heroSection.style.display = 'none';
    searchSection.classList.add('hidden');
    articlesSection.classList.add('hidden');
    articleView.classList.remove('active');
    aboutSection.classList.add('hidden');

    // Show selected
    switch (section) {
        case 'home':
            heroSection.style.display = 'flex';
            searchSection.classList.remove('hidden');
            articlesSection.classList.remove('hidden');
            break;
        case 'articles':
            searchSection.classList.remove('hidden');
            articlesSection.classList.remove('hidden');
            window.scrollTo(0, 0);
            break;
        case 'article':
            articleView.classList.add('active');
            break;
        case 'about':
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
        if (document.getElementById('articleView').classList.contains('active')) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('readingProgress').style.width = scrolled + '%';
        }
    });
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