
import Image from 'next/image'
import { Linkedin, Twitter } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const leaders = [
    { name: 'Neha Sharma', title: 'Director - Clinical Services', image: '/images/neha-sharma.png' },
    { name: 'Anuj Sharma', title: 'Director - Engineering Services', image: '/images/anuj-sharma.png' },
    { name: 'Ganesh Parvekar', title: 'Principal Advisor', image: '/images/dfsdfpm.jpeg' },
    { name: 'Dr Dewakar Goel', title: 'Global Advisor', image: '/images/dr-dewakar-goel.png' },
    { name: 'Yash Dakale', title: 'Technical Advisor - CR & PV Specialist', image: '/images/dcdcdec.jpeg' },
    { name: 'Gaurav Sharma', title: 'Senior Advisor - Data Science', image: '/images/gaurav-sharma.png' },
]

const Leadership = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeading centered>
                    Leadership
                </SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center relative overflow-hidden group hover:-translate-y-1 duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        width={128}
                                        height={128}
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100 group-hover:border-primary-300 transition-colors shadow-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                                <p className="text-base text-gray-600 mb-4">{leader.title}</p>
                                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    <a href="#" className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-200 transition-colors">
                                        <Linkedin className="w-4 h-4 text-primary-600" />
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-200 transition-colors">
                                        <Twitter className="w-4 h-4 text-primary-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leadership
