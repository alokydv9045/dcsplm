'use client'

import { Target, Award } from 'lucide-react'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'
import { SparklesCore } from '@/components/ui/SparklesCore'

const MissionVision = () => {
    return (
        <SectionWrapper background="gradient-light" padding="large" className="relative overflow-hidden">
            <SparklesCore className="opacity-30 pointer-events-none absolute inset-0 max-h-full" particleCount={40} particleColor="#3B82F6" />

            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px]"></div>
                <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px]"></div>
            </div>
            
            <div className="relative z-10">
                <StandardHeading 
                    centered 
                    badge="Our Core"
                    title="Mission & Vision"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                <span className="border-b-2 border-secondary/20 pb-1">Our Mission</span>
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                To deliver single window solution by seamlessly integrating knowledge, creativity and intelligence, to foster long term relationship with our stakeholder.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                <span className="border-b-2 border-secondary/20 pb-1">Our Vision</span>
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                To be the preferred Technology, Advisory and Skilling partner, consistently adding value through innovation and commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default MissionVision
