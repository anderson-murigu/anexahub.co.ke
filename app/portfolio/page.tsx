import React from "react";

const projects = [
  {
    title: "ETR System Implementation for Nairobi Retailer",
    client: "Small Retail Business",
    image: "/portfolio/etr-system.jpg",
    details: [
      { label: "Challenge", text: "Needed a reliable, KRA-compliant ETR system to handle increasing sales volume and ensure accurate tax reporting." },
      { label: "Solution", text: "Supplied and configured a new ETR device, integrated it with their existing sales process, and provided staff training." },
      { label: "Outcome", text: "Achieved full KRA compliance, streamlined sales data recording, and reduced manual errors in tax reporting." },
    ],
  },
  {
    title: "Basic Automation of Invoicing for Service Company",
    client: "Medium-Sized Service Provider",
    image: "/portfolio/invoicing-automation.jpg",
    details: [
      { label: "Challenge", text: "Spending excessive manual hours creating and sending monthly client invoices." },
      { label: "Solution", text: "Developed a simple script/tool to automate the generation and email dispatch of standard invoices based on service logs." },
      { label: "Outcome", text: "Reduced administrative time by X hours per month, improved invoicing accuracy, and faster payment cycles." },
    ],
  },
  // Add more projects as needed
];

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">Our Solutions in Action: Helping Kenyan SMEs Thrive</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">Here are a few examples of how Anexahub Ltd has provided effective IT solutions for small and medium-sized businesses. We focus on practical outcomes that enhance efficiency, ensure compliance, and support growth.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
              <img src={project.image} alt={project.title} className="object-cover h-full w-full" />
            </div>
            <h2 className="font-semibold text-lg mb-1">{project.title}</h2>
            <p className="text-sm text-gray-500 mb-2">Client Type: {project.client}</p>
            <ul className="text-gray-700 text-sm mb-2 list-disc pl-5">
              {project.details.map((detail, i) => (
                <li key={i}><span className="font-semibold">{detail.label}:</span> {detail.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-semibold mb-4">Let's add your success story here! Contact us to discuss your IT project.</p>
        <a href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Contact Us</a>
      </div>
    </div>
  );
} 