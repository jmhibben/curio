import { ParserRule } from '../../interfaces'

export const HeadingRule: ParserRule = {
  name: 'headings',
  regexp: /^#{1,6}(\s)+.+/,
  isolateContent: true
}