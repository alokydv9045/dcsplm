import {
    TrendingUp, GraduationCap, Briefcase, Building2,
    BookOpen, Stethoscope, ClipboardList, Rocket,
    FlaskConical, Award, ShieldCheck, UserCheck, BarChart3,
    Users, Lightbulb, BadgeCheck, Globe, HeartPulse,
    Activity, FileCheck, Microscope, Database, Search
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ───────── Type Definitions ───────── */

export interface StatItem {
    value: string
    label: string
    icon: LucideIcon
}

export interface PathStep {
    stage: string
    desc: string
    icon: LucideIcon
    color: string
    duration: string
}

export interface ProgramItem {
    title: string
    desc: string
    icon: LucideIcon
    duration: string
    highlight: boolean
}

export interface WhyUsItem {
    title: string
    desc: string
    icon: LucideIcon
}

export interface CareerPath {
    role: string
    salary: string
}

export interface BenefitItem {
    text: string
}

export interface FaqItem {
    q: string
    a: string
}

/* ───────── Stats ───────── */

export const stats: StatItem[] = [
    { value: '$150B', label: 'Market by 2033', icon: TrendingUp },
    { value: '10K+', label: 'Students Trained', icon: GraduationCap },
    { value: '95%', label: 'Placement Rate', icon: Briefcase },
    { value: '200+', label: 'Industry Partners', icon: Building2 },
]

/* ───────── Overview ───────── */

export const overviewParagraphs: string[] = [
    'Clinical research is the backbone of <strong>modern healthcare innovation</strong>. Our education programs are designed to equip aspiring professionals with the skills, knowledge, and hands-on experience needed to thrive in one of the world\'s fastest-growing industries.',
    'From <strong>protocol design and regulatory compliance to data management and pharmacovigilance</strong>, we cover every critical aspect of clinical research. Our industry-aligned curriculum ensures you are job-ready from day one.',
    'At DCS PLM, we bridge the gap between <strong>academic knowledge and industry expectations</strong>, empowering graduates from life sciences, pharmacy, and medical backgrounds to launch rewarding careers in clinical research.',
]

/* ───────── Learning Path ───────── */

export const learningPath: PathStep[] = [
    {
        stage: 'Foundation',
        desc: 'Build strong fundamentals in clinical research methodology, GCP/ICH guidelines, and regulatory frameworks.',
        icon: BookOpen,
        color: 'from-blue-500 to-indigo-600',
        duration: 'Months 1-3',
    },
    {
        stage: 'Core Training',
        desc: 'Deep-dive into clinical trial design, protocol development, IRB/IEC submissions, and safety monitoring.',
        icon: Stethoscope,
        color: 'from-red-500 to-rose-600',
        duration: 'Months 4-6',
    },
    {
        stage: 'Hands-on Practice',
        desc: 'Work on live projects covering ICSR processing, CRF design, site monitoring, and data management.',
        icon: ClipboardList,
        color: 'from-purple-500 to-violet-600',
        duration: 'Months 7-9',
    },
    {
        stage: 'Industry Exposure',
        desc: 'Gain real-world experience through internships, industry visits, and mentorship from CRO/pharma professionals.',
        icon: Building2,
        color: 'from-emerald-500 to-teal-600',
        duration: 'Months 10-11',
    },
    {
        stage: 'Career Launch',
        desc: 'Interview preparation, resume building, placement drives, and dedicated career support for your first role.',
        icon: Rocket,
        color: 'from-amber-500 to-orange-600',
        duration: 'Month 12',
    },
]

/* ───────── Programs ───────── */

export const programs: ProgramItem[] = [
    {
        title: 'PG Diploma in Clinical Research Management',
        desc: 'Comprehensive 1-year program covering all aspects of clinical research from protocol design to regulatory submissions. Includes live project work and industry internships.',
        icon: GraduationCap,
        duration: '1 Year',
        highlight: true,
    },
    {
        title: 'Certificate in Clinical Research',
        desc: 'Focused certification program ideal for life science graduates looking to enter the clinical research industry with practical skills.',
        icon: Award,
        duration: '6 Months',
        highlight: false,
    },
    {
        title: 'Hands-on Training with Live Projects',
        desc: 'Practical, immersive training modules with real-world clinical trial data, CRF design, and monitoring simulations.',
        icon: FlaskConical,
        duration: 'Project-Based',
        highlight: false,
    },
    {
        title: 'Clinical Trial Design & Management',
        desc: 'Master study design, endpoint selection, randomization, blinding, and protocol development for Phase I–IV trials.',
        icon: ClipboardList,
        duration: 'Module',
        highlight: false,
    },
    {
        title: 'Regulatory Compliance Training',
        desc: 'In-depth training on FDA 21 CFR, ICH-GCP, EMA regulations, CDSCO guidelines, and HIPAA compliance.',
        icon: ShieldCheck,
        duration: 'Module',
        highlight: false,
    },
    {
        title: 'Patient Recruitment & Monitoring',
        desc: 'Learn patient screening, enrollment strategies, site monitoring visits (IMV, SIV, COV), and source data verification.',
        icon: UserCheck,
        duration: 'Module',
        highlight: false,
    },
    {
        title: 'Data Analysis & Reporting',
        desc: 'Statistical analysis fundamentals, clinical study reporting, CSR preparation, and regulatory submission documentation.',
        icon: BarChart3,
        duration: 'Module',
        highlight: false,
    },
    {
        title: 'Industry Expert Faculty',
        desc: 'Learn from seasoned professionals with 15+ years of experience in CROs, pharmaceutical companies, and regulatory agencies.',
        icon: Users,
        duration: 'Ongoing',
        highlight: false,
    },
    {
        title: 'Placement Assistance',
        desc: 'Dedicated placement cell with strong ties to leading CROs, pharma companies, and clinical research organizations worldwide.',
        icon: Briefcase,
        duration: 'Lifetime',
        highlight: false,
    },
]

/* ───────── Why Choose Us ───────── */

export const whyChooseUs: WhyUsItem[] = [
    {
        title: 'Industry-Aligned Curriculum',
        desc: 'Curriculum designed with input from leading CROs and pharmaceutical companies to ensure job-readiness from day one.',
        icon: Lightbulb,
    },
    {
        title: 'Expert Faculty',
        desc: 'Learn from professionals with 15+ years of industry experience across global pharma, biotech, and CRO organizations.',
        icon: Users,
    },
    {
        title: '95% Placement Rate',
        desc: 'Comprehensive placement support including mock interviews, resume building, and direct recruiter connections.',
        icon: BadgeCheck,
    },
    {
        title: 'Global Recognition',
        desc: 'Programs recognized by leading pharmaceutical organizations globally, opening doors to international careers.',
        icon: Globe,
    },
]

/* ───────── Career Paths ───────── */

export const careerPaths: CareerPath[] = [
    { role: 'Clinical Research Associate (CRA)', salary: '₹4-8 LPA' },
    { role: 'Clinical Data Manager', salary: '₹5-10 LPA' },
    { role: 'Pharmacovigilance Associate', salary: '₹4-7 LPA' },
    { role: 'Regulatory Affairs Specialist', salary: '₹5-9 LPA' },
    { role: 'Clinical Project Manager', salary: '₹10-20 LPA' },
    { role: 'Medical Writer', salary: '₹5-12 LPA' },
]

/* ───────── Benefits ───────── */

export const benefits: BenefitItem[] = [
    { text: 'High-demand career with excellent growth opportunities' },
    { text: 'Directly impact patient health and safety globally' },
    { text: 'Open to life sciences, pharmacy, and medical graduates' },
    { text: 'Competitive salaries starting ₹4-8 LPA for freshers' },
    { text: 'Opportunities for global careers in pharma and biotech' },
    { text: 'Develop analytical and problem-solving research skills' },
    { text: 'Hands-on experience through industry collaborations' },
    { text: 'Be part of innovative clinical trials worldwide' },
    { text: 'Recession-proof industry with consistent demand' },
    { text: 'Clear career progression from CRA to project manager' },
]

/* ───────── FAQs ───────── */

export const faqs: FaqItem[] = [
    {
        q: 'Who is eligible for the clinical research programs?',
        a: 'Our programs are open to graduates and postgraduates from life sciences, pharmacy (B.Pharm, M.Pharm), MBBS, BDS, BAMS, BHMS, biotechnology, microbiology, biochemistry, and related fields. Final-year students can also apply.',
    },
    {
        q: 'What is the scope of clinical research in India?',
        a: 'India is one of the fastest-growing clinical research markets globally. The industry is expected to reach $150B by 2033, driven by increasing clinical trials, CRO expansion, and regulatory harmonization.',
    },
    {
        q: 'Do you provide placement support?',
        a: 'Yes! We offer comprehensive placement support — resume building, mock interviews, soft skills training, and direct placement drives with 200+ CRO and pharmaceutical partners. 95% placement rate within 3 months.',
    },
    {
        q: 'What career roles can I pursue after completing the program?',
        a: 'Graduates can pursue CRA, Clinical Data Manager, Pharmacovigilance Associate, Regulatory Affairs Specialist, Medical Writer, Clinical Project Coordinator, and Quality Assurance Specialist roles.',
    },
    {
        q: 'Is the program available online?',
        a: 'Yes — classroom, hybrid, and fully online options are available. All modes include the same curriculum, live projects, and placement support.',
    },
    {
        q: 'What makes DCS PLM different?',
        a: 'DCS PLM offers industry-designed curriculum, 25+ years of experience, faculty from leading CROs, live project training, a dedicated placement cell with 200+ partners, and globally recognized certifications.',
    },
]
