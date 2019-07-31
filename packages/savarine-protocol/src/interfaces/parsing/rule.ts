export interface ParserRule {
  name: string
  regexp: string | RegExp
  isolateContent: boolean
}