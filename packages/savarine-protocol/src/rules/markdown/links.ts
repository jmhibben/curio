import { ParserRule } from '../../interfaces'

export const LinkRule: ParserRule = {
  name: 'links',
  regexp: /\[.+\](\(.+\)|\[.+\])/,
  isolateContent: false
}