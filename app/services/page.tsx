import React from "react";
import { BriefcaseIcon, Cog6ToothIcon, DevicePhoneMobileIcon, CodeBracketIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">Our Services</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">At Anexahub Ltd, we offer a focused range of IT services designed to meet the core needs of Small and Medium-sized Enterprises in Kenya. Our solutions are practical, reliable, and geared towards enhancing your efficiency and compliance.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ETR Sales, Maintenance & Support */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <BriefcaseIcon className="h-10 w-10 text-blue-700 mb-4" />
          <h2 className="font-semibold text-lg mb-2">ETR Sales, Maintenance & Support</h2>
          <p className="text-gray-600 text-center">Stay ahead with your tax obligations. We provide comprehensive services for Electronic Tax Registers (ETRs), including sales of new KRA-approved devices, professional setup, ongoing maintenance to prevent downtime, and prompt troubleshooting for any ETR-related issues. Ensure your business remains compliant and operates smoothly.</p>
        </div>
        {/* Business Process Automation */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <Cog6ToothIcon className="h-10 w-10 text-blue-700 mb-4" />
          <h2 className="font-semibold text-lg mb-2">Business Process Automation</h2>
          <p className="text-gray-600 text-center">Free up valuable time and resources by automating your routine, manual tasks. We analyze your basic workflows and implement simple automation solutions for processes like data entry, report generation, or basic client communication, allowing you to focus on core business activities.</p>
        </div>
        {/* POS Systems & Business Software Sales */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <DevicePhoneMobileIcon className="h-10 w-10 text-blue-700 mb-4" />
          <h2 className="font-semibold text-lg mb-2">POS Systems & Business Software Sales</h2>
          <p className="text-gray-600 text-center">Equip your business with the right tools for efficient operations. We offer sales and setup of user-friendly Point of Sale (POS) systems tailored to retail and service SMEs. We also assist in sourcing and implementing other essential business software to manage inventory, sales, and customer data.</p>
        </div>
        {/* Custom Software for Basic Needs */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <CodeBracketIcon className="h-10 w-10 text-blue-700 mb-4" />
          <h2 className="font-semibold text-lg mb-2">Custom Software for Basic Needs</h2>
          <p className="text-gray-600 text-center">Sometimes, an off-the-shelf solution doesn't quite fit. For SMEs with unique but straightforward operational needs, we develop basic custom software applications. Whether it's a simple tracking tool, a basic management utility, or a specific data organization aid, we build solutions that are practical and easy to use.</p>
        </div>
        {/* General IT Support & Consultancy for SMEs */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <WrenchScrewdriverIcon className="h-10 w-10 text-blue-700 mb-4" />
          <h2 className="font-semibold text-lg mb-2">General IT Support & Consultancy for SMEs</h2>
          <p className="text-gray-600 text-center">Consider us your on-call IT department. We provide reliable IT support for the everyday tech challenges faced by small businesses, from troubleshooting hardware and software issues to advising on the best IT practices and infrastructure improvements to support your business goals.</p>
        </div>
      </div>
    </div>
  );
} 