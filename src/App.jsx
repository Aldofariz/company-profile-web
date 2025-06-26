import './App.css'
import CompanyLogo from './components/CompanyLogo'
import FeatureSection from './components/FeatureSection'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import PricingSection from './components/PricingSection'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-green-600/20 to-blue-500/20 rounded-full blur-[80px] -z-10'></div>
      
      <div className='overflow-hidden'>
      
      
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <PurposeSection/>
      <FeatureSection/>
      <ScheduleSection/>
      <MonitorSection/>
      <PricingSection/>
      <ServicesSection/>
      <TestimonialSection/>
      <NewsletterSection/>
    
      </div>
    </main>
      
  )
}

export default App
