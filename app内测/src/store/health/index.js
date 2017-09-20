import { fetch } from '@/config/fetch.js'
export default {
  namespaced: true,
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    // 获取文章列表数据
    async get_articleList_data({ rootState }, { type, page }) {
      let params = {
        'userid': rootState.userid
      }
      params.type = type
      params.page = page
      let res = await fetch('GET', 'list', params)
      return res
    },
    // 获取文章数据
    async get_article_data({ rootState }, id) {
      let params = {
        'userid': rootState.userid,
        'id': id,
        'type': 'edit'
      }
      let res = await fetch('GET', 'list', params)
      return res
    },
    // 提交文章数据
    async post_article_data({ rootState }, params) {
      params.userid = rootState.userid
      let res = await fetch('POST', 'edit', params)
      return res
    }
  }
}
