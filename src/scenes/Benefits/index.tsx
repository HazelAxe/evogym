import Htext from '@/shared/Htext'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

// 遍历benefits
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'Over 100 Diverse Classes',
    description: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert & Pro Traineds',
    description: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
  },
]

// 父级定义容器
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, //子集延迟delay 0.2
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto  min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div
          className=" md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className=" my-5 text-sm">We are more than a gym; we are a community driven by empowerment and growth. Unleash your potential through our diverse range of fitness classes, personalized training sessions, and innovative equipment.</p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div className=" md:flex items-center justify-between gap-8 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
          {/* 三部分  */}
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              //
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic&& Description */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Bienvenue dans le monde de l'exercice ! Vous êtes sur le point de commencer un voyage qui vous transformera, tant physiquement que mentalement. N'oubliez jamais que la clé de la réussite réside dans votre motivation et votre détermination. Alors, levez-vous et bougez ! Souvenez-vous
                que chaque pas que vous faites vous rapproche de vos objectifs. Alors, fixez-vous des objectifs réalisables, mettez-vous au défi et repoussez vos limites.
              </p>
              <p className="mb-5">Peu importe à quel point cela peut sembler difficile parfois, n'oubliez jamais que vous êtes plus fort que vous ne le pensez. Alors, continuez à vous pousser et vous serez étonné de ce que vous pouvez accomplir.</p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
