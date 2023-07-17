import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import useMediaQuery from '@/hooks/useMediaQuery'

import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = (setSelectedPage: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)')

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Images and Main Header */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} //只触发1次，看见多少div就触发
            transition={{ duration: 0.5 }} //动画时长
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/*      父元素为相对的 */}
            <div className="relative">
              {/*    图片为Absolute */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">To your dream body goals,World class studios to get the body shape that you dream of...You just need to work harder,want it more</p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              {/*  */}
              Join Now
            </ActionButton>

            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Images */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
