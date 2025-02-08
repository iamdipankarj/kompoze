import { publish } from 'gh-pages'

publish('storybook-static', { history: false }, err => {
  if (err) console.err(err)
  console.log('🚀 Successfully published to https://iamdipankarj.github.io/kompoze')
})
