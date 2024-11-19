import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="heading">Skills & Expertise</h2>
          <p className="subheading">
            Comprehensive technical skills in cloud and web development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-lg bg-gray-50 p-6 ring-1 ring-gray-900/5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <ul className="mt-4 space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="flex items-center gap-x-2 text-sm text-gray-600"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const skillCategories = [
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS Services',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Infrastructure as Code',
      'Microservices Architecture',
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      'React.js',
      'TypeScript',
      'HTML5/CSS3',
      'Tailwind CSS',
      'Redux',
      'Next.js',
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      'Node.js',
      'Python',
      'RESTful APIs',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
    ],
  },
  {
    name: 'Healthcare Tech',
    skills: [
      'HIPAA Compliance',
      'HL7 Integration',
      'FHIR Standards',
      'Healthcare APIs',
      'Medical Data Processing',
    ],
  },
  {
    name: 'Tools & Methods',
    skills: [
      'Git',
      'JIRA',
      'Agile/Scrum',
      'Test-Driven Development',
      'System Design',
      'Technical Documentation',
    ],
  },
  {
    name: 'Security & Compliance',
    skills: [
      'OAuth 2.0',
      'JWT',
      'SSL/TLS',
      'Data Encryption',
      'Security Best Practices',
      'Compliance Frameworks',
    ],
  },
]
