import StoryblokClient from 'storyblok-js-client'

const baseURL = 'https://api.storyblok.com/v2'

const Storyblok = new StoryblokClient({
  accessToken: 'HxGlGwljRhvYhiZJpXIXSgtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
  endpoint: baseURL,
})

export default Storyblok
