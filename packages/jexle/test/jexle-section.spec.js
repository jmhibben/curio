import test from 'ava'
import { JexleSection } from '../src/jexle-section'
import { testDoc } from './helpers/static/testJexleDoc'

test.before(t => {
  t.context = new JexleSection(testDoc)
})

test('extracts the correct title for the parent section', t => {
  t.is(t.context.title, testDoc.title)
})

test('extracts the content under the first section', t => {
  t.is(t.context.content, testDoc.content)
})

test('has two subsections at the top level', t => {
  t.is(t.context.subsections.length, 2)
})

test('shows one subsection under the first subsection', t => {
  const subsections = t.context.subsections
  const first = subsections[0]
  t.is(first.subsections.length, 1)
})

test('shows no subsections under the first level-3 heading', t => {
  const subsections = t.context.subsections[0].subsections
  const h3 = subsections[0]
  t.is(h3.title.level, 3)
  t.is(h3.subsections.length, 0)
})

test('shows one subsection under the second level-2 heading', t => {
  const h2 = t.context.subsections[1]
  t.is(h2.title.level, 2)
  t.is(h2.subsections.length, 1)
})

test('shows one subsection under the second level-3 heading', t => {
  const h3 = t.context.subsections[1].subsections[0]
  t.is(h3.title.level, 3)
  t.is(h3.subsections.length, 1)
})

test('shows one subsection under the first level-4 heading', t => {
  const h4 = t.context.subsections[1].subsections[0].subsections[0]
  t.is(h4.title.level, 4)
  t.is(h4.subsections.length, 1)
})

test('shows one subsection under the first level-5 heading', t => {
  const h5 = t.context.subsections[1].subsections[0].subsections[0].subsections[0]
  t.is(h5.title.level, 5)
  t.is(h5.subsections.length, 1)
})

test('shows no subsections under the first level-6 heading', t => {
  const h6 = t.context.subsections[1].subsections[0].subsections[0].subsections[0].subsections[0]
  t.is(h6.title.level, 6)
  t.is(h6.subsections.length, 0)
})