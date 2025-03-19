import { BasicStreamableCollection } from "./basicstreamablecollection.js"

interface Content {
  name: string
  year: number
}

export class SeriesCollection extends BasicStreamableCollection<Content> {
  yearSearch(year: number): Content[] {
    return this.items.filter(serie => {
      return serie.year === year
    })
  }

  nameSearch(name: string): Content[] {
    return this.items.filter(serie => {
      return serie.name === name
    })
  }
}