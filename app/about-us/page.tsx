import React from 'react';
import { Target, Eye, Shield, Users, Factory, Award } from 'lucide-react';
import Banner from '../ui/Banner';
import Image from 'next/image';
import { leaders } from '../lib/data';
import ProfileCard from '../ui/ProfileCard';
import Link from 'next/link';

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="group bg-zinc-800 rounded-2xl p-8 hover:bg-tall-poppy-600 transition-all duration-300 border border-zinc-700 hover:border-tall-poppy-500">
      <div className="w-16 h-16 bg-tall-poppy-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all">
        <div className="text-white group-hover:text-tall-poppy-500">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-zinc-300 leading-relaxed group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Banner/>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Trusted Leaders in UAE Construction
            </h2>
            <div className="space-y-4 text-zinc-700 leading-relaxed">
              <p>
                For more than two decades, Roofers Group of Companies has built a strong reputation as a trusted name in the UAE construction industry. With over 24 years of experience, we have grown into a multi-disciplinary enterprise, bringing expertise, reliability, and quality to every project we undertake.
              </p>
              <p>
                Our core strengths lie in Roof Tiles, as well as Steel, Aluminium, and Stainless-Steel Fabrication and Erection, supported by a wide range of Civil Contracting services. Backed by fully equipped workshops and skilled teams in Dubai, Abu Dhabi, and Ajman, we deliver complete structural and finishing solutions for commercial, industrial, and high-end residential projects.
              </p>
              <p>
                Beyond contracting, Roofers Group also connects the UAE market with the world. Through our partner factories in Italy, Spain, China, Brazil, and the USA, we manufacture and supply premium-quality products, ensuring our clients benefit from international standards at competitive value.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-zinc-900/20 rounded-3xl blur-2xl"></div>
            <Image
              src="/about_us-hero.jpg"
              width={800}
              height={800}
              alt="roofers site"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Target className="w-8 h-8" />}
              title="&quot;Our Mission&quot;"
              description="&quot;Building with precision and passion — delivering durable, high-quality roofing and metal solutions on time.&quot;"
            />
            
            <ValueCard 
              icon={<Eye className="w-8 h-8" />}
              title="&quot;Our Vision&quot;"
              description="&quot;To shape skylines with innovation, craftsmanship, and lasting value for generations to come.&quot;"
            />
            
            <ValueCard 
              icon={<Shield className="w-8 h-8" />}
              title="&quot;Core Values&quot;"
              description="&quot;Guided by integrity, driven by innovation, committed to quality, safety, and on-time delivery.&quot;"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-zinc-600">
            Comprehensive solutions from concept to completion
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
            <Factory className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">Manufacturing Excellence</h3>
            <p className="text-zinc-600 leading-relaxed">
              State-of-the-art workshops in Dubai, Abu Dhabi, and Ajman equipped for steel, aluminium, and stainless-steel fabrication with precision and quality control.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
            <Award className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">Global Partnerships</h3>
            <p className="text-zinc-600 leading-relaxed">
              Strategic partnerships with factories in Italy, Spain, China, Brazil, and USA ensuring premium materials and international quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-zinc-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-zinc-600">
              Experienced professionals driving our success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <ProfileCard key={leader.name} {...leader}/>
            ))}
          </div>
        </div>
      </section>

     <section className="relative bg-white py-20 mb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-red-700 text-shadow-lg  mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss how we can bring excellence to your next project
          </p>
          <Link className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl"
          href={'/contact'}>
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;