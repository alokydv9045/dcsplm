import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export const metadata = {
    title: 'MERN Stack Development | DCS PLM',
    description: 'Master full-stack web development with MongoDB, Express.js, React, and Node.js. Build modern, scalable web applications with industry best practices.',
}

export default function MernStackPage() {
    return (
        <ServicePageTemplate
            title="MERN Stack Development"
            subtitle="Master Modern Full-Stack Web Development"
            heroImage="/uploads/2025/10/Digital-Manufacturing.webp"
            overview={[
                "Become a proficient full-stack developer with our comprehensive MERN Stack program. Learn to build powerful, scalable web applications using MongoDB, Express.js, React, and Node.js.",
                "Our hands-on curriculum covers everything from frontend development with React to backend APIs with Node.js and Express, database design with MongoDB, and deployment to production.",
                "Build real-world projects, work with industry-standard tools, and gain the skills needed to succeed as a full-stack developer in today&apos;s competitive job market."
            ]}
            keyServices={[
                "MongoDB Database - NoSQL database design, queries, aggregation, and data modeling",
                "Express.js Backend - RESTful API development and server-side applications",
                "React Frontend - Dynamic, responsive UI with React, Redux, and modern hooks",
                "Node.js Runtime - Scalable server-side applications and npm ecosystem",
                "Full-Stack Projects - Complete web applications from database to deployment",
                "DevOps & Deployment - Git, Docker, CI/CD, and cloud deployment (AWS, Heroku, Vercel)",
                "Authentication & Security - JWT, OAuth, and security best practices",
                "API Development - RESTful and GraphQL API design",
                "Real-Time Applications - WebSockets and Socket.io",
                "Testing & Quality Assurance - Jest, React Testing Library, and TDD"
            ]}
            benefits={[
                "Complete full-stack development skills in one program",
                "Hands-on projects building real web applications",
                "Industry-standard tools and best practices",
                "Expert mentorship from experienced developers",
                "100% placement assistance",
                "Portfolio-ready projects for job interviews",
                "Collaborative learning environment",
                "Lifetime access to course materials"
            ]}
            ctaTitle="Start Your Full-Stack Journey"
            ctaDescription="Enroll in our MERN Stack program and become a job-ready full-stack developer"
        />
    )
}
