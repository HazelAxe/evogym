// import React from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  // 黄色按钮
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  // 下面是响应式布局 最小宽度为1060px
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
  // 判断是否是在页面最上方
  const navBarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <nav>
      <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* 左边 */}
            <img src={Logo} alt="logo" />

            {/* 右边 become a member */}
            {isAboveMediumScreens ? (
              // 三元
              <div className={`${flexBetween} w-full`}>
                {/* sign in */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>BECOME A MEMBER!</ActionButton>
                </div>
              </div>
            ) : (
              //                                                                          点击就打开 打开就关上
              <button className="rounded-full  bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!IsMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button> //移动端
            )}
          </div>
        </div>
      </div>
      {/* 移动端菜单modal  belowmediumscreen小于中等大小时，且菜单被收起时 */}
      {!isAboveMediumScreens && IsMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* 关闭按钮 */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!IsMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* Menu菜单栏 */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
