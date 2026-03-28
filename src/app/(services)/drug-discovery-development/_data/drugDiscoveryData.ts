import {
    Award, Rocket, TrendingUp, Users, Target, Microscope,
    FlaskConical, TestTubes, FileCheck, Atom, Brain, HeartPulse,
    Clock, Beaker, Activity, Pill, ShieldCheck, ClipboardList,
    Layers, Lightbulb, BadgeCheck, BookOpen
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ───────── Type Definitions ───────── */

export interface StatItem {
    value: string
    label: string
    icon: LucideIcon
}

export interface PipelineStep {
    stage: string
    desc: string
    icon: LucideIcon
    color: string
}

export interface ServiceItem {
    title: string
    desc: string
    icon: LucideIcon
}

export interface WhyUsItem {
    title: string
    desc: string
    icon: LucideIcon
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
    { value: '25+', label: 'Years of Expertise', icon: Award },
    { value: '500+', label: 'Projects Delivered', icon: Rocket },
    { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
    { value: '150+', label: 'Global Partners', icon: Users },
]

/* ───────── Overview ───────── */

export const overviewParagraphs: string[] = [
    'Drug discovery and development is a <strong>complex, multi-stage process</strong> that transforms scientific insights into life-saving therapeutics. At DCS PLM, we partner with biotech and pharma organizations to accelerate every phase — from target identification to IND submission.',
    'Our integrated platform combines <strong>AI-driven computational biology, advanced medicinal chemistry,</strong> and GLP-compliant preclinical services to deliver faster, smarter drug development. We reduce time-to-clinic by up to 40% through parallel workflows and proprietary decision frameworks.',
    'With <strong>200+ PhD-level scientists</strong> and former FDA/EMA reviewers on staff, we bring deep therapeutic area expertise across oncology, CNS, immunology, metabolic disorders, and rare diseases.',
]

/* ───────── Pipeline ───────── */

export const pipeline: PipelineStep[] = [
    {
        stage: 'Target Discovery',
        desc: 'Identify and validate biological targets using AI-driven genomics, proteomics, and bioinformatics platforms.',
        icon: Target,
        color: 'from-red-500 to-rose-600',
    },
    {
        stage: 'Hit Identification',
        desc: 'High-throughput screening and virtual screening to discover initial hit compounds with desired activity.',
        icon: Microscope,
        color: 'from-blue-500 to-indigo-600',
    },
    {
        stage: 'Lead Optimization',
        desc: 'Medicinal chemistry-driven optimization of potency, selectivity, and drug-like properties for clinical readiness.',
        icon: FlaskConical,
        color: 'from-purple-500 to-violet-600',
    },
    {
        stage: 'Preclinical Studies',
        desc: 'Comprehensive ADME, toxicology, and pharmacokinetic profiling in validated in-vitro and in-vivo models.',
        icon: TestTubes,
        color: 'from-emerald-500 to-teal-600',
    },
    {
        stage: 'IND Submission',
        desc: 'End-to-end regulatory dossier preparation, CMC documentation, and FDA/EMA submission support.',
        icon: FileCheck,
        color: 'from-amber-500 to-orange-600',
    },
]

/* ───────── Services ───────── */

export const services: ServiceItem[] = [
    {
        title: 'Target Identification & Validation',
        desc: 'Leverage multi-omics data and CRISPR-based functional screens to identify high-confidence druggable targets.',
        icon: Target,
    },
    {
        title: 'Hit Discovery & Lead Optimization',
        desc: 'Utilize AI-powered virtual screening, HTS, and SBDD to discover and optimize lead molecules efficiently.',
        icon: Atom,
    },
    {
        title: 'Preclinical Development',
        desc: 'IND-enabling studies including efficacy, PK/PD modeling, toxicology, and formulation development.',
        icon: Beaker,
    },
    {
        title: 'ADME & Toxicology Studies',
        desc: 'GLP-compliant absorption, distribution, metabolism, excretion, and safety profiling across species.',
        icon: Activity,
    },
    {
        title: 'Formulation Development',
        desc: 'Optimized drug delivery systems, bioavailability enhancement, and stability studies for diverse dosage forms.',
        icon: Pill,
    },
    {
        title: 'Regulatory Strategy & Support',
        desc: 'Expert regulatory pathway guidance for FDA, EMA, and global submissions with risk-mitigated strategies.',
        icon: ShieldCheck,
    },
    {
        title: 'Clinical Trial Design',
        desc: 'Protocol development, endpoint selection, biomarker strategy, and adaptive trial design for Phase I-III.',
        icon: ClipboardList,
    },
    {
        title: 'IND Submission Support',
        desc: 'Complete IND package preparation including CMC, nonclinical summaries, and clinical investigator brochure.',
        icon: FileCheck,
    },
    {
        title: 'CMC Development',
        desc: 'Chemistry, manufacturing, and controls development from process optimization to tech transfer and scale-up.',
        icon: Layers,
    },
]

/* ───────── Why Choose Us ───────── */

export const whyChooseUs: WhyUsItem[] = [
    {
        title: 'Cutting-Edge Technology',
        desc: 'AI/ML-driven drug discovery platforms, advanced computational chemistry, and state-of-the-art analytical facilities.',
        icon: Lightbulb,
    },
    {
        title: 'Scientific Excellence',
        desc: 'A team of 200+ PhD-level scientists with deep expertise across therapeutic areas and modalities.',
        icon: Brain,
    },
    {
        title: 'Regulatory Expertise',
        desc: 'Former FDA/EMA reviewers on staff ensuring compliance and reducing regulatory risk at every milestone.',
        icon: BadgeCheck,
    },
    {
        title: 'Accelerated Timelines',
        desc: 'Integrated platforms and parallel workflows that compress development timelines by up to 40%.',
        icon: Clock,
    },
]

/* ───────── Benefits ───────── */

export const benefits: BenefitItem[] = [
    { text: 'Accelerated timelines with optimized development pathways' },
    { text: 'Cost-effective solutions through strategic planning' },
    { text: 'Regulatory compliance ensured at every stage' },
    { text: 'Access to state-of-the-art facilities and technologies' },
    { text: 'Experienced multidisciplinary team of 200+ scientists' },
    { text: 'Risk mitigation through proven methodologies' },
    { text: 'Flexible engagement models — FTE, FFS, and milestone-based' },
    { text: 'End-to-end project management with dedicated program leads' },
    { text: 'Therapeutic area expertise across oncology, CNS, immunology & more' },
    { text: 'Seamless technology transfer and scale-up support' },
]

/* ───────── FAQs ───────── */

export const faqs: FaqItem[] = [
    {
        q: 'What therapeutic areas do you cover?',
        a: 'We have deep expertise across oncology, CNS, immunology & inflammation, metabolic disorders, infectious diseases, and rare diseases. Our teams are structured by therapeutic area for domain-specific insight.',
    },
    {
        q: 'How do you accelerate drug development timelines?',
        a: 'We leverage AI-powered target discovery, parallel workstreams, integrated data platforms, and proprietary decision frameworks to compress timelines by up to 40% — without compromising quality or regulatory readiness.',
    },
    {
        q: 'What engagement models do you offer?',
        a: 'We offer Full-Time Equivalent (FTE) staffing, Fee-For-Service (FFS) project-based engagements, milestone-based risk-sharing partnerships, and fully integrated drug development programs.',
    },
    {
        q: 'Do you support regulatory submissions globally?',
        a: 'Yes. We support submissions to FDA (US), EMA (EU), PMDA (Japan), NMPA (China), and other regulatory bodies. We provide comprehensive IND, CTA, NDA/BLA, and MAA support.',
    },
    {
        q: 'Can you work with both small molecules and biologics?',
        a: 'Absolutely. Our capabilities span small molecules, peptides, antibodies, ADCs, oligonucleotides, gene therapies, and cell-based therapies with modality-specific platforms.',
    },
    {
        q: 'What does a typical project engagement look like?',
        a: 'Engagements begin with a discovery workshop and feasibility assessment, followed by a project plan with clear milestones, decision gates, and deliverables. A dedicated program manager ensures seamless communication.',
    },
]
