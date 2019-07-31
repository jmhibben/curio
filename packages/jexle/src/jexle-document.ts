import { JexleSection } from './jexle-section'
import { JexleDoc } from './interfaces'

class JexleDocument {
  /**
   * @property {JexleDoc|JexleDoc[]} doc Raw document structure
   */
  private doc: JexleDoc | JexleDoc[]
  /**
   * @property {JexleSection[]} sections Compiled sections of the JexleDocument
   */
  private sections: JexleSection[]
  /**
   * @property {number} current The index of the currently-selected section (default `0`)
   */
  private _current: number = 0

  /**
   * Converts a JexleDoc into a JexleDocument
   * @param {JexleDoc[]} _doc Parsed JexleDoc object(s) in an array
   */
  static create (_doc: JexleDoc[]): JexleDocument {
    let doc = new JexleDocument(_doc)
    return doc
  }

  /**
   * Convenience function for `JexleDocument.parse` and `JexleDocument.create`.
   * Good if you don't want (or need) to do any extra parsing on the document beforehand.
   * @param {string} _raw Raw document text to convert into a JexleDocument
   * @returns A fully-constructed `JexleDocument`
   */
  static createFromRaw (_raw: string): JexleDocument {
    let doc: JexleDoc[] = JexleDocument.parse(_raw)
    let document: JexleDocument = JexleDocument.create(doc)
    return document
  }

  private constructor (_doc: JexleDoc[]) {
    this.doc = _doc
    for (let section of this.doc) {
      let jexleSection: JexleSection = new JexleSection(section)
      this.sections.push(jexleSection)
    }
  }

  /**
   * Gets the current section of the document.
   */
  get current (): JexleSection {
    return this.sections[this._current]
  }

  /**
   * If there is more than one section, this returns the next section in sequence, wrapping if necessary;
   *  otherwise, it returns the current section.
   */
  get next (): JexleSection {
    let section: JexleSection 
    if (this.sections.length > 1 && ++this._current >= this.sections.length) {
      this._current = 0
    }
    return this.current
  }

  // keeping this private until they're ready
  // parses the document structure into a linear array of objects for parsing into HTML elements
  private view () {}

  // parses the document structure into a linear array of objects for parsing into an HTML form,
  //  then saves changes back to the document structure
  private edit () {}
}
  
export { JexleDocument }
