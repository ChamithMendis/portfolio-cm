import {
  GitBranch,
  Package,
  Server,
  Cloud,
  FileCode,
  Activity,
  Code,
  Layout,
  Database,
  Settings,
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    { title: 'Backend', skills: skills.backend, icon: <Code className="w-6 h-6" /> },
    { title: 'Frontend', skills: skills.frontend, icon: <Layout className="w-6 h-6" /> },
    { title: 'Databases', skills: skills.databases, icon: <Database className="w-6 h-6" /> },
    { title: 'CI/CD', skills: skills.cicd, icon: <GitBranch className="w-6 h-6" /> },
    {
      title: 'Containerization',
      skills: skills.containerization,
      icon: <Package className="w-6 h-6" />,
    },
    // { title: 'Orchestration', skills: skills.orchestration, icon: <Server className="w-6 h-6" /> },
    { title: 'Cloud Platforms', skills: skills.cloud, icon: <Cloud className="w-6 h-6" /> },
    // {
    //   title: 'Infrastructure as Code',
    //   skills: skills.iac,
    //   icon: <FileCode className="w-6 h-6" />,
    // },
    // { title: 'Monitoring', skills: skills.monitoring, icon: <Activity className="w-6 h-6" /> },
    { title: 'Other Tools', skills: skills.other, icon: <Settings className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Skills"
          subtitle="A comprehensive toolkit for building modern cloud-native applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
