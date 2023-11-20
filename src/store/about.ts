import { Store } from '../core/dahye'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/149958294?u=b5f471e4b595dee5b36fa9378f3c387f5b6e248c&v=4',
  name: 'KimDaHye',
  email: 'rlaekgp3305@naver.com',
  blog: 'https://blog.naver.com/rlaaa_dh_',
  github: 'https://github.com/rlaaadh',
  repository: 'https://github.com/rlaaadh/vanillajs-movie-app',
})