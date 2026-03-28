// Static data for Jobs, Settings, and Inquiries
export const jobPostings = [
    {
        id: '1',
        title: 'Clinical Research Associate',
        department: 'Operations',
        location: 'Remote / Bangalore',
        type: 'Full-time',
        description: 'We are looking for an experienced CRA to monitor clinical trials and ensure protocol adherence.',
        requirements: 'Bachelor\'s degree in Life Sciences, 2+ years of experience in clinical monitoring.',
        salary: 'Competitive',
        isActive: true,
        createdAt: new Date('2025-10-01').toISOString(),
    },
    {
        id: '2',
        title: 'Drug Safety Specialist',
        department: 'Pharmacovigilance',
        location: 'Hyderabad',
        type: 'Full-time',
        description: 'Responsible for processing and evaluating adverse event reports.',
        requirements: 'PharmD or B.Pharm, knowledge of ICH-GCP guidelines.',
        salary: 'Competitive',
        isActive: true,
        createdAt: new Date('2025-10-05').toISOString(),
    },
    {
        id: '3',
        title: 'LMS Content Developer',
        department: 'Education',
        location: 'Pune',
        type: 'Contract',
        description: 'Create engaging course materials for our pharmaceutical LMS.',
        requirements: 'Experience in instructional design and medical writing.',
        salary: 'Negotiable',
        isActive: true,
        createdAt: new Date('2025-10-10').toISOString(),
    }
];

export const systemSettings = {
    siteName: 'DCS PLM',
    contactEmail: 'info@dcsplm.com',
    contactPhone: '+91 800 123 4567',
    address: '123 Tech Park, Bangalore, India',
    facebookUrl: 'https://facebook.com/dcsplm',
    twitterUrl: 'https://twitter.com/dcsplm',
    linkedinUrl: 'https://linkedin.com/company/dcsplm',
    instagramUrl: 'https://instagram.com/dcsplm',
};

// Mock inquiries (for display in admin if needed)
export const initialInquiries = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        subject: 'Course Query',
        message: 'I want to know more about the Clinical Research course.',
        status: 'NEW',
        createdAt: new Date().toISOString(),
    }
];
