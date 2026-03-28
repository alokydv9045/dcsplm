import {
    Factory, TrendingUp, Gauge, Wifi, Award, Cog, BarChart3,
    Lightbulb, ShieldCheck, Zap, Box, Cpu, BrainCircuit, Bot,
    CircuitBoard, Eye, Layers, Wrench, Rocket, Target,
    ClipboardList, Activity, Settings, Database, Globe
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
    phase: string
}

export interface ServiceItem {
    title: string
    desc: string
    icon: LucideIcon
}

export interface TechArea {
    title: string
    desc: string
    icon: LucideIcon
    gradient: string
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
    { value: '30%', label: 'Downtime Reduction', icon: TrendingUp },
    { value: '500+', label: 'Sensors Deployed', icon: Wifi },
    { value: '25%', label: 'OEE Improvement', icon: Gauge },
    { value: '50+', label: 'Factories Transformed', icon: Factory },
]

/* ───────── Overview ───────── */

export const overviewParagraphs: string[] = [
    'Smart Manufacturing solutions from DCS PLM help industries embrace the <strong>Fourth Industrial Revolution</strong>. We implement intelligent systems that optimize production, reduce costs, and improve quality across the entire manufacturing value chain.',
    'Our expertise spans <strong>predictive maintenance, digital twins, automated quality control, and connected factory solutions</strong> that transform traditional manufacturing into intelligent, data-driven operations.',
    'Partner with us to modernize your manufacturing operations with <strong>IoT sensors, real-time analytics, and AI-powered decision-making systems</strong> that drive operational excellence and sustainable growth.',
]

export const overviewImage = '/uploads/2025/10/Digital-Manufacturing.webp'
export const overviewAccentStat = { value: '25%', label: 'OEE Improvement' }

/* ───────── Implementation Roadmap ───────── */

export const pipeline: PipelineStep[] = [
    {
        stage: 'Assessment',
        desc: 'Comprehensive audit of current manufacturing processes, identifying digitization opportunities and ROI potential.',
        icon: ClipboardList,
        color: 'from-amber-500 to-orange-600',
        phase: 'WEEK 1-2',
    },
    {
        stage: 'Architecture',
        desc: 'Design the IIoT architecture, select sensor suites, define data flows, and plan system integration points.',
        icon: Layers,
        color: 'from-blue-500 to-indigo-600',
        phase: 'WEEK 3-5',
    },
    {
        stage: 'Deployment',
        desc: 'Install IoT sensors, deploy edge gateways, configure MES/SCADA systems, and establish secure connectivity.',
        icon: Wrench,
        color: 'from-purple-500 to-violet-600',
        phase: 'WEEK 6-10',
    },
    {
        stage: 'Integration',
        desc: 'Connect factory floor data with ERP/PLM systems, build real-time dashboards, and enable cross-system analytics.',
        icon: Settings,
        color: 'from-emerald-500 to-teal-600',
        phase: 'WEEK 11-14',
    },
    {
        stage: 'Optimization',
        desc: 'Deploy AI/ML models for predictive maintenance, quality prediction, and continuous process optimization.',
        icon: Rocket,
        color: 'from-red-500 to-rose-600',
        phase: 'ONGOING',
    },
]

/* ───────── Services ───────── */

export const services: ServiceItem[] = [
    {
        title: 'Digital Twin Implementation',
        desc: 'Create virtual replicas of physical assets, processes, and systems for simulation, monitoring, and predictive analysis.',
        icon: Box,
    },
    {
        title: 'Predictive Maintenance Systems',
        desc: 'AI-driven condition monitoring and failure prediction to eliminate unplanned downtime and extend equipment life.',
        icon: Activity,
    },
    {
        title: 'Industrial IoT Solutions',
        desc: 'End-to-end IIoT deployments — from sensor selection and edge computing to cloud analytics and real-time alerting.',
        icon: Wifi,
    },
    {
        title: 'Automated Quality Control',
        desc: 'Computer vision and ML-powered inspection systems for real-time defect detection and statistical process control.',
        icon: Eye,
    },
    {
        title: 'Manufacturing Execution Systems',
        desc: 'MES implementation for real-time production tracking, scheduling, work-order management, and shop-floor digitization.',
        icon: Cpu,
    },
    {
        title: 'Supply Chain Optimization',
        desc: 'Data-driven demand forecasting, inventory optimization, and logistics planning for agile, resilient supply chains.',
        icon: Globe,
    },
    {
        title: 'Energy Management Systems',
        desc: 'Smart energy monitoring, consumption analytics, and optimization to reduce costs and meet sustainability goals.',
        icon: Zap,
    },
    {
        title: 'Connected Factory Solutions',
        desc: 'Unified factory connectivity integrating OT and IT systems for seamless data flow from shop floor to enterprise.',
        icon: CircuitBoard,
    },
    {
        title: 'Production Analytics & Dashboards',
        desc: 'Real-time KPI dashboards, OEE tracking, and advanced analytics for data-driven manufacturing intelligence.',
        icon: BarChart3,
    },
]

/* ───────── Technology Highlights ───────── */

export const techAreas: TechArea[] = [
    {
        title: 'AI & Machine Learning',
        desc: 'Predictive analytics, anomaly detection, quality prediction, and autonomous optimization for smarter manufacturing.',
        icon: BrainCircuit,
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        title: 'Industrial IoT',
        desc: 'Sensor networks, edge computing, MQTT/OPC-UA protocols, and real-time data acquisition from the factory floor.',
        icon: CircuitBoard,
        gradient: 'from-cyan-500 to-blue-600',
    },
    {
        title: 'Digital Twins',
        desc: 'Physics-based simulation models, real-time synchronization, and what-if scenario analysis for process optimization.',
        icon: Box,
        gradient: 'from-rose-500 to-red-600',
    },
    {
        title: 'Robotics & Automation',
        desc: 'Collaborative robots, AGVs, robotic process automation, and intelligent automation for higher throughput and safety.',
        icon: Bot,
        gradient: 'from-emerald-500 to-green-600',
    },
]

/* ───────── Benefits ───────── */

export const benefits: BenefitItem[] = [
    { text: '20-30% reduction in unplanned downtime through predictive maintenance' },
    { text: '15-25% improvement in overall equipment effectiveness (OEE)' },
    { text: 'Real-time visibility across all production lines and facilities' },
    { text: 'Data-driven decision making at every level of operations' },
    { text: 'Reduced operational costs and minimized material waste' },
    { text: 'Improved product quality and manufacturing consistency' },
    { text: 'Enhanced worker safety through automation and smart alerts' },
    { text: 'Scalable solutions that grow with your business needs' },
    { text: 'Faster time-to-market with agile manufacturing processes' },
    { text: 'Sustainability improvements through energy optimization' },
]

/* ───────── FAQs ───────── */

export const faqs: FaqItem[] = [
    {
        q: 'What is Smart Manufacturing and Industry 4.0?',
        a: 'Smart Manufacturing leverages IoT, AI, cloud computing, and advanced analytics to create connected, intelligent factory environments. Industry 4.0 refers to the fourth industrial revolution — the integration of cyber-physical systems, the Internet of Things, and cloud computing into manufacturing processes.',
    },
    {
        q: 'How long does a typical smart factory implementation take?',
        a: 'A pilot implementation typically takes 8-14 weeks, covering assessment, IIoT deployment, system integration, and initial optimization. Full-scale rollouts across multiple production lines can take 6-12 months depending on complexity and scope.',
    },
    {
        q: 'What industries do you serve?',
        a: 'We serve automotive, aerospace, pharmaceuticals, FMCG, electronics, chemicals, and discrete manufacturing industries. Our solutions are adaptable to any manufacturing environment, from high-volume continuous production to low-volume high-mix operations.',
    },
    {
        q: 'Do we need to replace existing equipment to go smart?',
        a: 'No. Our solutions are designed to retrofit existing equipment with IoT sensors and edge devices. We integrate with your current SCADA, PLC, and MES systems rather than replacing them, maximizing your existing investment while adding intelligence layers.',
    },
    {
        q: 'What ROI can we expect from smart manufacturing?',
        a: 'Typical clients see 20-30% reduction in downtime, 15-25% OEE improvement, 10-20% energy savings, and 30-50% reduction in quality defects within the first year. Most implementations achieve positive ROI within 12-18 months.',
    },
    {
        q: 'How do you ensure data security in connected factories?',
        a: 'We implement defense-in-depth security strategies including network segmentation, encrypted communications (TLS/DTLS), role-based access control, OT-specific firewalls, and compliance with IEC 62443 industrial cybersecurity standards.',
    },
]
