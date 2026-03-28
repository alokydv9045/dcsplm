'use client'

import { Factory, Wifi, Database, PenTool, Plane, Stethoscope, ShieldCheck, FileText, Scale, Code, BookOpen } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

interface SkillDevelopmentProgramProps {
    categories: any[]
}

const iconMap: Record<string, any> = {
    'Clinical Research': Stethoscope,
    'Pharmacovigilance': ShieldCheck,
    'Data Management': FileText,
    'Regulatory': Scale,
    'Medical Writing': PenTool,
    'Industry Inside Institute': Factory,
    'IoT Services': Wifi,
    'Data Science': Database,
    'Aerospace Engineering': Plane,
    'Smart Manufacturing': Factory,
    'MERN Stack': Code,
}

const SkillDevelopmentProgram = ({ categories }: SkillDevelopmentProgramProps) => {
    // If no categories from DB, use placeholders
    const displayCategories = categories.length > 0
        ? categories.map(cat => ({
            name: cat.name,
            icon: iconMap[cat.name] || BookOpen,
            count: cat._count?.courses || 0
        }))
        : [
            { name: 'Clinical Research', icon: Stethoscope, count: 0 },
            { name: 'Pharmacovigilance', icon: ShieldCheck, count: 0 },
            { name: 'Data Management', icon: FileText, count: 0 },
            { name: 'Regulatory', icon: Scale, count: 0 },
            { name: 'Medical Writing', icon: PenTool, count: 0 },
        ]

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
            <div className="container-custom">
                <SectionHeading
                    subtitle="Our Specialized Training Categories"
                    centered
                >
                    Industry Inside Institute
                </SectionHeading>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-12">
                    {displayCategories.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                            <div key={index} className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center relative overflow-hidden group cursor-pointer hover:-translate-y-1 duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-50 to-blue-100' : 'from-indigo-50 to-blue-50'
                                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <div className="flex justify-center mb-3 sm:mb-4">
                                        <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-white/80 transition-colors shadow-sm">
                                            <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                                        </div>
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">{skill.name}</div>
                                    <p className="text-[10px] text-slate-400 mt-1">{skill.count} Courses</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillDevelopmentProgram
