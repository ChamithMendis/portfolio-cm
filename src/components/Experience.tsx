import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { experiences } from '../data/portfolioData';
import { otherExperiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey in software engineering"
        />

        <div className="relative">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div> */}

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center 
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:text-right" style={{ flex: index % 2 === 0 ? '1' : '0' }}>
                  {index % 2 === 0 && (
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-500 mb-4">{exp.period}</p>
                      <ul className="space-y-2 text-gray-700 text-left">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-bold mt-4 text-left">
                        <span className="text-black-800 mr-3">Technologies:</span>
                        <span className="text-blue-600">{exp.technologies}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 md:text-right" style={{ flex: index % 2 === 1 ? '1' : '0' }}>
                  {index % 2 === 1 && (
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-500 mb-4">{exp.period}</p>
                      <ul className="space-y-2 text-gray-700 text-left">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-bold mt-4 text-left">
                        <span className="text-black-800 mr-3">Technologies:</span>
                        <span className="text-blue-600">{exp.technologies}</span>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <SectionTitle
          title="Other Experience"
          subtitle="My other experience (Part time work) in software engineering"
        />
        <div className="relative">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div> */}

          <div className="space-y-12">
            {otherExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center 
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:text-right" style={{ flex: index % 2 === 0 ? '1' : '0' }}>
                  {index % 2 === 0 && (
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-500 mb-4">{exp.period}</p>
                      <ul className="space-y-2 text-gray-700 text-left">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-bold mt-4 text-left">
                        <span className="text-black-800 mr-3">Technologies:</span>
                        <span className="text-blue-600">{exp.technologies}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 md:text-right" style={{ flex: index % 2 === 1 ? '1' : '0' }}>
                  {index % 2 === 1 && (
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-500 mb-4">{exp.period}</p>
                      <ul className="space-y-2 text-gray-700 text-left">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-bold mt-4 text-left">
                        <span className="text-black-800 mr-3">Technologies:</span>
                        <span className="text-blue-600">{exp.technologies}</span>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
