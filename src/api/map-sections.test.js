import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections'

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections()
    expect(data).toEqual([])
  })

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections)
    expect(data[0].component).toBe('section.section-two-columns')
  })

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      { __component: 'section.section-grid' },
    ])
    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ])
    expect(WithNoComponent).toEqual([{}]);
  })

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      { __component: 'section.section-grid', image_grid: [{}] },
      { __component: 'section.section-grid', text_grid: [{}] },
    ])
    expect(withNoTextOrImageGrid.length).toBe(2);
  })

  it('should map section two columns if data is empty', () => {
    const data = mapSectionTwoColumns()
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.srcImg).toBe('')
    expect(data.text).toBe('')
    expect(data.title).toBe('')
  })

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',      
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,        
        section_id: 'contact',        
      },      
      image: {        
        url: 'a.svg',        
      }  
    })
    expect(data.background).toBe(true)
    expect(data.component).toBe('section.section-two-columns')
  })

  it('should map section content with no data', () => {
    const data = mapSectionContent()
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.title).toBe('')
    expect(data.html).toBe('')
  })

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',      
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,        
        section_id: 'pricing',        
      },      
    })
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
  })

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',      
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        { title: 'Teste 1', description: 'Coisa' },
        { title: 'Teste 2', description: 'abc' },
      ],
      image_grid: [],
      metadata: { background: true, section_id: 'grid-one' },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
  })

  it('should map grid text without data', () => {
    const data = mapTextGrid(undefined)
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-text')
    expect(data.sectionId).toBe('')
    expect(data.title).toBe('')
    expect(data.description).toBe('')
  })

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',      
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {          
          image: {            
            alternativeText: 'abc',            
            url: 'a.svg'            
          },
        },
      ],
      metadata: {
        background: false,        
        name: 'gallery',
        section_id: 'gallery',        
      }      
    })
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-image')
  })
})