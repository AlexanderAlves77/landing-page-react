import { mapMenu } from './map-menu'
import { mapSections } from './map-sections'

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    } = data
  })
}