import { formatRouterTree } from '../lib/utils'
import { getUserRouters } from '../services'
export default {
  async setUserRouters ({ commit, state }) {
    const userRouters = await getUserRouters(state.uid)
    const payload = await formatRouterTree(userRouters)
    commit('setUserRouters', payload)
  },
  setAuth ({ commit, state }) {
    commit('setAuth', true)
  }
}
