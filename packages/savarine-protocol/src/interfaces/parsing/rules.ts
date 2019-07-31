import { ParserRule } from '.'

export interface ParserRulesObject {
  headings: ParserRule
  links?: ParserRule
  [name: string]?: ParserRule
}