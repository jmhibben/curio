import {
  flatten,
  sortBy
} from 'lodash'
import {
  Document,
  HeadingData,
  Title,
  ParserRule,
  ParserRulesObject,
  HeadingsObject
} from './interfaces'
import {
  getHeadings,
  sortHeadings
} from './helpers'

export class Parser {
  private _rules: ParserRulesObject

  constructor(_rules: ParserRule[]) {
    for (let rule of _rules) {
      this._rules[rule.name] = rule
    }
  }

  parse(_raw: string | Buffer): Document {
    const raw = Buffer.isBuffer(_raw) ? _raw.toString() : _raw
    const lines = raw.split('\n')
    // get list of headings from document
    let headings: HeadingData[] = this.getOrderedHeadings(lines)
    // convert list to base document structure
    // fill document's contents
    let doc: Document = {}

    return doc
  }

  /**
   * Reformat an array of strings as plain-text with newlines.
   * @param {string[]} _lines File contents, split by newlines
   * @param {number} _s Starting index
   * @param {number?} _e Ending index
   * @returns File contents from `_s` to `_e`
   */
  getContents(_lines: string[], _s: number, _e?: number): string {
    const contentLines: string[] = _e != null ? _lines.slice(_s, _e) : _lines.slice(_s)
    const contents: string = contentLines.join('\n')
    return contents
  }

  /**
   * Retrieves the heading from the given line.
   * @param {string} _line The text containing the heading
   * @param {number} _lineNo Starting line number of the text
   * @returns {HeadingData} from the given line
   */
  getHeading(_line: string, _lineNo: number): HeadingData {
    const words: string[] = _line.split(' ')
    const level: number = words[0].length
    const text: string = words.slice(1).join(' ')
    const heading: HeadingData = {
      level,
      text,
      line: _lineNo
    }

    return heading
  }

  /**
   * Finds all headings in a file and organizes them by heading level.
   * @param {string[]} _lines File contents, already split by line breaks
   * @returns Object containing HTML-style heading tags as keys, and all corresponding headings as arrays.
   */
  getAllHeadings(_lines: string[]): HeadingsObject {
    const rule: ParserRule = this._rules.headings
    const regexp: RegExp = RegExp(rule.regexp)
    let headings: HeadingsObject
    for (let i = 0; i < _lines.length; ++i) {
      const line = _lines[i]
      let arr = regexp.exec(line)
      if (arr != null) {
        let heading = this.getHeading(line, i)
        const h = `h${heading.level}`
        if (Array.isArray(headings[h])) {
          headings[h].push(heading)
        } else {
          headings[h] = [heading]
        }
      }
    }
    return headings
  }

  /**
   * Convenience function for retrieving and sorting headings by relative position in the source file.
   * @param {string[]} _lines File contents, already split by line breaks
   * @returns Sorted array of `HeadingData`
   */
  getOrderedHeadings(_lines: string[]): HeadingData[] {
    const headings: HeadingsObject = this.getAllHeadings(_lines)
    let flatHeadings: HeadingData[] = []
    const keys: string[] = Object.keys(headings)
    for (let key of keys) {
      flatHeadings.concat(headings[key])
    }
    const orderedHeadings: HeadingData[] = this.sortTypeByProperty<HeadingData>(flatHeadings, 'line')
    return orderedHeadings
  }

  /**
   * Generic sort function that takes an array of type `T` and returns a new array. Assumes that type `T` is an object with `_property`.
   * @param {T[]} _arr The array of objects to sort
   * @param {string} _property The property to sort by
   * @returns Sorted array of type `T`
   */
  sortTypeByProperty<T>(_arr: Array<T>, _property: string): T[] {
    let ordered: T[] = sortBy(_arr, o => o[_property])
    return ordered
  }
}