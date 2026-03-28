'use client'

import Image from 'next/image'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const TrainingFacilities = () => {
    return (
        <SectionWrapper background="white" padding="large">
            <StandardHeading
                centered
                badge="Infrastructure"
                title="Our Training Facilities"
                subtitle="State-of-the-art infrastructure and hands-on training environments"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-600/90 via-primary-600/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                            src="/images/classroom.jpg"
                            alt="Computer Lab Training"
                            width={500}
                            height={400}
                            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold text-xl mb-2">Computer Lab</h3>
                            <p className="text-white/90 text-sm">Hands-on training with latest technology</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-700/90 via-gray-700/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                            src="/images/vlced-img-6.webp"
                            alt="CNC Machine Training"
                            width={500}
                            height={400}
                            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold text-xl mb-2">CNC Machine</h3>
                            <p className="text-white/90 text-sm">Precision manufacturing training</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 via-indigo-600/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                            src="/images/images.jpg"
                            alt="Robotic Arms Training"
                            width={500}
                            height={400}
                            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold text-xl mb-2">Robotic Arms</h3>
                            <p className="text-white/90 text-sm">Advanced automation training</p>
                        </div>
                    </div>
                </div>
        </SectionWrapper>
    )
}

export default TrainingFacilities
