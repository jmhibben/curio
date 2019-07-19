import test from 'ava'
import { getHeadings } from '../../src/helpers'
import { testLines } from './static/lines'

test.before(t => {
  t.context = getHeadings(testLines)
})

test('Correctly shows one first-level header from `lines` on line 0', t => {
  const h1 = t.context.h1
  t.is(h1.length, 1)
  t.is(h1[0].line, 0)
})

test('Correctly shows two second-level headers on lines 2 & 4', t => {
  const h2 = t.context.h2
  const expected = [2, 4]
  t.is(h2.length, 2)
  for (let i = 0; i < h2.length; ++i) {
    t.is(h2[i].line, expected[i])
  }
})

test('Correctly shows two third-level headers on lines 3 & 5', t => {
  const h3 = t.context.h3
  const expected = [3, 5]
  t.is(h3.length, 2)
  for (let i = 0; i < h3.length; ++i) {
    t.is(h3[i].line, expected[i])
  }
})

test('Correctly shows one fourth-level header on line 6', t => {
  const h4 = t.context.h4
  t.is(h4.length, 1)
  t.is(h4[0].line, 6)
})

test('Correctly shows one fifth-level header on line 7', t => {
  const h5 = t.context.h5
  t.is(h5.length, 1)
  t.is(h5[0].line, 7)
})

test('Correctly shows one sixth-level header on line 8', t => {
  const h6 = t.context.h6
  t.is(h6.length, 1)
  t.is(h6[0].line, 8)
})