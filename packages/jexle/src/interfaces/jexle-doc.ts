import { JexleTitle } from '.'

export interface JexleDoc {
  title: JexleTitle
  content?: string
  subsections?: JexleDoc[]
  meta?: {
    start: number,
    end?: number
  }
}