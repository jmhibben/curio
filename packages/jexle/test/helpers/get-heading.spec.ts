import test from 'ava'
import { getHeading } from '../../src/helpers'
import { testLines } from './static/lines'

test('throws an error when `_level` is too high', t => {
  t.throws(() => {
    getHeading(7, testLines)
  })
})

test('throws an error when `_level` is too low', t => {
  t.throws(() => {
    getHeading(0, testLines)
  })
})

test('returns exactly one first-level heading from `lines`', t => {
  let headings = getHeading(1, testLines)
  let expected = {
    text: testLines[0],
    line: 0,
    level: 1
  }
  t.is(headings.length, 1)
  t.is(headings[0].text, expected.text)
  t.is(headings[0].line, expected.line)
  t.is(headings[0].level, expected.level)
})

test('returns exactly two second-level headings from `lines`', t => {
  let headings = getHeading(2, testLines)
  const expected = [
    {
      text: testLines[2],
      line: 2,
      level: 2
    },
    {
      text: testLines[4],
      line: 4,
      level: 2
    }
  ]
  t.is(headings.length, 2)
  for (let i = 0; i < headings.length; ++i) {
    t.is(headings[i].text, expected[i].text)
    t.is(headings[i].line, expected[i].line)
    t.is(headings[i].level, expected[i].level)
  }
})

test('returns exactly two third-level headings from `lines`', t => {
  let headings = getHeading(3, testLines)
  const expected = [
    {
      text: testLines[3],
      line: 3,
      level: 3
    },
    {
      text: testLines[5],
      line: 5,
      level: 3
    }
  ]
  t.is(headings.length, 2)
  for (let i = 0; i < headings.length; ++i) {
    t.is(headings[i].text, expected[i].text)
    t.is(headings[i].line, expected[i].line)
    t.is(headings[i].level, expected[i].level)
  }
})

test('returns exactly one fourth-level heading from `lines`', t => {
  let headings = getHeading(4, testLines)
  const expected = {
    text: testLines[6],
    line: 6,
    level: 4
  }
  t.is(headings.length, 1)
  t.is(headings[0].text, expected.text)
  t.is(headings[0].line, expected.line)
  t.is(headings[0].level, expected.level)
})

test('returns exactly one fifth-level heading from `lines`', t => {
  let headings = getHeading(5, testLines)
  const expected = {
    text: testLines[7],
    line: 7,
    level: 5
  }
  t.is(headings.length, 1)
  t.is(headings[0].text, expected.text)
  t.is(headings[0].line, expected.line)
  t.is(headings[0].level, expected.level)
})

test('returns exactly one sixth-level heading from `lines`', t => {
  let headings = getHeading(6, testLines)
  const expected = {
    text: testLines[8],
    line: 8,
    level: 6
  }
  t.is(headings.length, 1)
  t.is(headings[0].text, expected.text)
  t.is(headings[0].line, expected.line)
  t.is(headings[0].level, expected.level)
})