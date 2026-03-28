import NextDynamic from 'next/dynamic'
import HomeHero from '@/components/home/HomeHero'
import WhatWeDo from '@/components/home/WhatWeDo'

const CoreServices = NextDynamic(() => import('@/components/home/CoreServices'))
const CmVisitSection = NextDynamic(() => import('@/components/home/CmVisitSection'))
const FeaturesSection = NextDynamic(() => import('@/components/home/FeaturesSection'))
const IndustryInsideInstitute = NextDynamic(() => import('@/components/home/IndustryInsideInstitute'))
const TrainingFacilities = NextDynamic(() => import('@/components/home/TrainingFacilities'))
const MissionVision = NextDynamic(() => import('@/components/home/MissionVision'))
const AchievementsCounter = NextDynamic(() => import('@/components/home/AchievementsCounter'))

const PartnersSection = NextDynamic(() => import('@/components/home/PartnersSection'))

export default async function Home() {

    return (
        <>
            {/* Hero Section */}
            <HomeHero />

            {/* About Section - What We Do */}
            <WhatWeDo />

            {/* Core Services Section */}
            <CoreServices />

            {/* Chief Minister Visit Section */}
            <CmVisitSection />

            {/* Industry Inside Institute Section */}
            <IndustryInsideInstitute />

            {/* Features Section */}
            <FeaturesSection />

            {/* Mission & Vision Section (Counter Section) */}
            <AchievementsCounter />

            {/* Training Facilities Section */}
            <TrainingFacilities />

            {/* Mission & Vision */}
            <MissionVision />

            {/* Partners Section */}
            <PartnersSection />
        </>
    )
}
