import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// typescript需要
type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: string) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage //让typescript知道这是自己的
  // page为navbar页面
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

export default Link
