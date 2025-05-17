import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-2 sm:px-4 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-blue-700 text-center">About Anexahub Ltd</h1>
      {/* Company Story */}
      <section className="mb-6 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700 mb-4 text-base sm:text-lg">Anexahub Ltd was founded with a clear mission: to make essential technology accessible and effective for small and medium-sized businesses in Nairobi and throughout Kenya. We saw a need for an IT partner that not only understands technology but also appreciates the specific operational realities and growth aspirations of SMEs. We're not just service providers; we're problem-solvers committed to your business's efficiency and compliance.</p>
      </section>
      {/* Mission & Vision */}
      <section className="mb-6 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4 text-base sm:text-lg">To empower Kenyan SMEs by delivering reliable, user-friendly, and affordable IT solutions, including ETR services, process automation, POS systems, and custom software, fostering their growth and operational excellence.</p>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700 text-base sm:text-lg">To be the leading and most trusted IT partner for small and medium-sized enterprises in Kenya, recognized for our practical innovations, unwavering support, and dedication to client success.</p>
      </section>
      {/* Values */}
      <section className="mb-6 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base sm:text-lg">
          <li><span className="font-semibold text-blue-700">Client-Centricity:</span> Your business needs are at the heart of everything we do.</li>
          <li><span className="font-semibold text-blue-700">Reliability:</span> We provide dependable solutions and support you can count on.</li>
          <li><span className="font-semibold text-blue-700">Practical Innovation:</span> We focus on smart, effective solutions that deliver real-world results for SMEs.</li>
          <li><span className="font-semibold text-blue-700">Integrity:</span> We operate with transparency and honesty in all our engagements.</li>
          <li><span className="font-semibold text-blue-700">Local Understanding:</span> We are a Kenyan company that understands the local business landscape.</li>
        </ul>
      </section>
      {/* Team */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Meet the Team</h2>
        <p className="text-gray-700 text-base sm:text-lg">Anexahub Ltd is powered by a team of dedicated IT professionals passionate about helping businesses like yours succeed. We combine technical expertise with a friendly approach to ensure you get the best possible service.</p>
      </section>
    </div>
  );
} 