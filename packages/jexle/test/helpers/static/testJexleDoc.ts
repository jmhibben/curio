import { JexleDoc } from '../../../src/interfaces'

export const testDoc: JexleDoc = {
  title: {
    text: 'A happy little file',
    level: 1
  },
  content: `I only have a few lines, but that's okay. I enjoy having sparse contents.`,
  subsections: [
    {
      title: {
        text: 'I have a few headings, though',
        level: 2
      },
      subsections: [
        {
          title: {
            text: 'Headings are fun, you see',
            level: 3
          }
        }
      ]
    },
    {
      title: {
        text: 'But they\'re easy to abuse, too',
        level: 2
      },
      subsections: [
        {
          title: {
            text: 'Because sometimes',
            level: 3
        },
          subsections: [
            {
              title: {
                text: 'Just sometimes',
                level: 4
              },
              subsections: [
                {
                  title: {
                    text: 'You might go',
                    level: 5
                  },
                  subsections: [
                    {
                      title: {
                        text: 'A little too deep',
                        level: 6
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}