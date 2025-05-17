import { BriefcaseIcon, Cog6ToothIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-2 sm:px-4 text-center bg-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-blue-700">Streamline Your Success: Smart IT Solutions for Nairobi's SMEs</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">Anexahub Ltd empowers your small or medium-sized business in Kenya with reliable ETR systems, process automation, POS software, and custom IT solutions designed for growth and efficiency.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/services" className="bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Explore Our Services</Link>
          <Link href="/contact" className="bg-white border border-blue-700 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Get a Free Consultation</Link>
        </div>
      </section>

      {/* About Company */}
      <section className="py-8 sm:py-16 px-2 sm:px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Your Trusted Nairobi-Based IT Partner</h2>
        <p className="text-gray-700 text-base sm:text-lg">Anexahub Ltd is your trusted Nairobi-based IT partner, dedicated to providing practical and effective technology solutions for small and medium-sized enterprises (SMEs) across Kenya. We understand the unique challenges SMEs face, and we're here to help you navigate the complexities of IT, from ensuring ETR compliance and automating routine tasks to implementing efficient POS systems and developing basic custom software. Our goal is to equip your business with the tools it needs to thrive.</p>
      </section>

      {/* Services Overview */}
      <section className="py-8 sm:py-16 px-2 sm:px-4 bg-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <BriefcaseIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">ETR Solutions</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">Seamless sales, maintenance, and support for your Electronic Tax Registers. Stay compliant effortlessly.</p>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <Cog6ToothIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">Business Process Automation</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">Save time and reduce errors by automating your essential daily tasks.</p>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <DevicePhoneMobileIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">POS & Business Software</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">Get the right Point of Sale systems and software to manage your operations smoothly.</p>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <CodeBracketIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">Custom SME Software</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">Need a simple, custom solution? We build basic software tailored to your unique needs.</p>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <WrenchScrewdriverIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h3 className="font-semibold text-base sm:text-lg mb-2">Reliable IT Support</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">Your go-to experts for everyday IT challenges and strategic advice.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-8 sm:py-16 px-2 sm:px-4 max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">See How We're Helping Kenyan Businesses</h2>
        <p className="text-gray-700 text-center mb-6 sm:mb-8 text-base sm:text-lg">We're proud to support SMEs across various sectors with tailored IT solutions.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-2">ETR & POS setup for a growing retail store in Nairobi.</h3>
            <p className="text-gray-600 text-sm sm:text-base">Implemented a full ETR and POS solution for a local retailer, ensuring compliance and efficient sales tracking.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-2">Basic inventory automation for a local service provider.</h3>
            <p className="text-gray-600 text-sm sm:text-base">Automated inventory management for a service business, reducing manual work and improving accuracy.</p>
          </div>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8">
          <Link href="/portfolio" className="bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-800 transition">View Our Work</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 sm:py-16 px-2 sm:px-4 bg-blue-700 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Boost Your Business Efficiency?</h2>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg">Let's discuss how Anexahub's IT solutions can help your SME succeed.</p>
        <Link href="/contact" className="bg-white text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Contact Us Today</Link>
      </section>
    </div>
  );
}
