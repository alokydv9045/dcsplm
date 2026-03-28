import {
    Rocket, Lightbulb, Cpu, Zap, Globe, Users, Award,
    BrainCircuit, CircuitBoard, Wifi, Factory, BookOpen,
    HeartHandshake, Target, BarChart3, Puzzle, Wrench, Eye,
    PenTool, FlaskConical, Monitor, Boxes, Sparkles, Code2,
    Layers, Bot
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ───────── Type Definitions ───────── */

export interface StatItem {
    value: string
    label: string
    icon: LucideIcon
}

export interface ProcessStep {
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

export interface TechArea {
    title: string
    desc: string
    icon: LucideIcon
    gradient: string
}

export interface BenefitItem {
    text: string
    icon: LucideIcon
}

export interface FaqItem {
    q: string
    a: string
}

/* ───────── Stats ───────── */

export const stats: StatItem[] = [
    { value: '50+', label: 'Active Projects', icon: Rocket },
    { value: '120+', label: 'Innovations Delivered', icon: Lightbulb },
    { value: '30+', label: 'Industry Partners', icon: HeartHandshake },
    { value: '15+', label: 'Patents Filed', icon: Award },
]

/* ───────── Overview ───────── */

export const overviewParagraphs: string[] = [
    'Our Innovation Lab is a <strong>state-of-the-art facility</strong> designed to foster creativity, experimentation, and breakthrough thinking. We combine cutting-edge technology with collaborative spaces to accelerate innovation across industries.',
    'From <strong>proof-of-concept development to prototype testing</strong>, our lab provides the resources and expertise needed to transform innovative ideas into market-ready solutions in AI, IoT, digital health, and advanced manufacturing.',
    'We partner with <strong>startups, enterprises, and research institutions</strong> to develop next-generation solutions. Our multidisciplinary team of engineers, designers, and strategists work alongside your team to bring bold ideas to life.',
]

export const overviewImage = '/uploads/2025/10/Digital-Manufacturing.webp'

/* ───────── Innovation Process ───────── */

export const process: ProcessStep[] = [
    {
        stage: 'Ideation',
        desc: 'Structured design-thinking workshops to identify problem statements, brainstorm solutions, and prioritize ideas with maximum impact.',
        icon: Lightbulb,
        color: 'from-amber-500 to-orange-600',
    },
    {
        stage: 'Feasibility',
        desc: 'Technical and commercial feasibility analysis using data-driven assessment frameworks and market validation.',
        icon: Target,
        color: 'from-blue-500 to-indigo-600',
    },
    {
        stage: 'Prototyping',
        desc: 'Rapid prototyping with 3D printing, PCB fabrication, and agile software development to bring concepts to life.',
        icon: Wrench,
        color: 'from-purple-500 to-violet-600',
    },
    {
        stage: 'Testing',
        desc: 'Rigorous stress testing, user validation, performance benchmarking, and iterative optimization.',
        icon: FlaskConical,
        color: 'from-emerald-500 to-teal-600',
    },
    {
        stage: 'Launch',
        desc: 'Go-to-market strategy, investor pitch preparation, IP filing, and scaling support from lab to market.',
        icon: Rocket,
        color: 'from-red-500 to-rose-600',
    },
]

/* ───────── Services ───────── */

export const services: ServiceItem[] = [
    {
        title: 'Proof of Concept Development',
        desc: 'Validate your ideas with functional prototypes built using cutting-edge tools, frameworks, and hardware platforms.',
        icon: Puzzle,
    },
    {
        title: 'Rapid Prototyping',
        desc: '3D printing, CNC machining, and software MVPs delivered in accelerated timelines for faster market validation.',
        icon: Boxes,
    },
    {
        title: 'Technology Assessment',
        desc: 'Comprehensive evaluation of emerging technologies to identify the right stack for your product.',
        icon: Eye,
    },
    {
        title: 'Innovation Workshops',
        desc: 'Facilitated ideation and problem-solving sessions using design thinking, lean startup, and agile methodologies.',
        icon: Sparkles,
    },
    {
        title: 'Design Thinking Sessions',
        desc: 'Human-centered design processes to uncover user needs, map journeys, and create solutions that truly resonate.',
        icon: PenTool,
    },
    {
        title: 'AI & Machine Learning Solutions',
        desc: 'Custom ML models, NLP systems, computer vision pipelines, and generative AI applications for your business.',
        icon: BrainCircuit,
    },
    {
        title: 'IoT Device Development',
        desc: 'End-to-end IoT product development — from sensor selection and embedded firmware to cloud dashboards.',
        icon: Wifi,
    },
    {
        title: 'Digital Transformation Projects',
        desc: 'Modernize legacy systems with cloud-native architectures, automation, and data-driven platforms.',
        icon: Monitor,
    },
    {
        title: 'Startup Incubation Support',
        desc: 'Mentorship, technical resources, workspace, and investor connections to accelerate your startup journey.',
        icon: Rocket,
    },
]

/* ───────── Technology Focus Areas ───────── */

export const techAreas: TechArea[] = [
    {
        title: 'Artificial Intelligence',
        desc: 'Deep learning, NLP, computer vision, and generative AI powering next-generation intelligent applications.',
        icon: BrainCircuit,
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        title: 'Internet of Things',
        desc: 'Smart devices, industrial IoT, edge computing, and connected ecosystems for real-time monitoring.',
        icon: CircuitBoard,
        gradient: 'from-cyan-500 to-blue-600',
    },
    {
        title: 'Digital Health',
        desc: 'Wearable tech, telemedicine platforms, electronic health records, and AI-powered diagnostics.',
        icon: HeartHandshake,
        gradient: 'from-rose-500 to-red-600',
    },
    {
        title: 'Advanced Manufacturing',
        desc: 'Industry 4.0, digital twins, robotic process automation, and smart factory solutions.',
        icon: Factory,
        gradient: 'from-emerald-500 to-green-600',
    },
]

/* ───────── Benefits ───────── */

export const benefits: BenefitItem[] = [
    { text: 'Access to cutting-edge technology and lab equipment', icon: Cpu },
    { text: 'Expert mentorship from industry leaders and tech veterans', icon: Users },
    { text: 'Collaborative workspace for cross-functional teams', icon: Layers },
    { text: 'Rapid iteration and testing capabilities with quick turnaround', icon: Zap },
    { text: 'Connection to top-tier investor networks and VCs', icon: BarChart3 },
    { text: 'Industry partnership opportunities with Fortune 500 companies', icon: Globe },
    { text: 'Hands-on technical support from domain specialists', icon: Wrench },
    { text: 'Go-to-market strategy and commercialization assistance', icon: Rocket },
    { text: 'IP protection guidance and patent filing support', icon: Award },
    { text: 'Access to cloud credits, APIs, and development tools', icon: Code2 },
]

/* ───────── FAQs ───────── */

export const faqs: FaqItem[] = [
    {
        q: 'Who can use the Innovation Lab?',
        a: 'Our Innovation Lab is open to startups, enterprises, research institutions, and individual innovators. Whether you have a nascent idea or a developed concept needing prototyping and testing, we welcome all stages of innovation.',
    },
    {
        q: 'What kind of projects does the lab support?',
        a: 'We support projects across AI/ML, IoT, digital health, advanced manufacturing, fintech, edtech, and more. From software-only solutions to hardware + software integrated products, our lab handles diverse project types.',
    },
    {
        q: 'How does the incubation program work?',
        a: 'Our incubation program provides 6-12 months of structured support including workspace, technical mentorship, business coaching, access to our partner network, and help with investor pitches.',
    },
    {
        q: 'What equipment and technology is available?',
        a: 'The lab features 3D printers, CNC machines, PCB fabrication stations, IoT sensor kits, GPU clusters for AI/ML, AR/VR development kits, and a full software development environment.',
    },
    {
        q: 'Do you help with funding and investor connections?',
        a: 'Yes! We have an active investor network including angel investors, venture capitalists, and corporate innovation funds. We help prepare pitch decks, conduct demo days, and facilitate introductions.',
    },
    {
        q: 'Can enterprises use the lab for internal innovation?',
        a: 'Absolutely. We offer dedicated enterprise innovation programs including hackathons, innovation sprints, technology scouting, and R&D partnership models for rapid prototyping.',
    },
]
