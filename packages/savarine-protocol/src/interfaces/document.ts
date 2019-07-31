import { Title } from '.'

export interface Document {
  title: Title
  content?: string
  subsections?: Document[]
  meta?: {
    start: number,
    end?: number
  }
  parent?: Document
}