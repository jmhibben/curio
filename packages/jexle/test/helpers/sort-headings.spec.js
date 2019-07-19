import test from 'ava'
import { sortHeadings, getHeadings } from '../../src/helpers'
import { testLines } from './static/lines'

const isArray = Array.isArray

test.before(t => {
  const headings = getHeadings(testLines)
  t.context = sortHeadings(headings)
})

test('sorts headings into a flat array', t => {
  for (let h of t.context) {
    t.false(isArray(h))
  }
})

test('sorts all headings by line number', t => {
  let prev = null
  for (let h of t.context) {
    if (prev === null) {
      prev = h
      continue
    }
    t.assert(h.line > prev.line)
    prev = h
  }
})