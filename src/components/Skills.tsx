import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'C', level: 75 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Pandas & NumPy', level: 80 },
  { name: 'Blockchain', level: 70 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
