import { JexleDoc, JexleTitle } from './interfaces'

class JexleSection {
  protected _doc: JexleDoc
  protected _title: JexleTitle
  protected _content: string
  protected _subsections: JexleSection[]

  constructor (_doc: JexleDoc) {
    this._doc = _doc
    this._title = this._doc.title
    this._content = this._doc.content
    this._subsections = []
    if (this._doc.subsections != null) {
      for (let section of this._doc.subsections) {
        let subsection = new JexleSection(section)
        this._subsections.push(subsection)
      }
    }
  }

  get title (): JexleTitle {
    return this._title
  }

  get content (): string {
    return this._content
  }

  get subsections (): JexleSection[] {
    return this._subsections
  }
}

export { JexleSection }
