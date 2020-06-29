class HistoryRoute {
  constructor() {
    this.current = null
  }
}

class vueRouter {
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.history = new HistoryRoute
    this.init()
  }
  init() {
    if (this.mode == 'hash') {
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(router) {
    return router.reduce(() => {

    })
  }
}
vueRouter.install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this
        this._router = this.$options.router
        Vue.util.defineReactive(this, 'current', this._router.history)
      } else {
        this._root = this.$parent._root
      }
    }
  })
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current

    }
    // 如何根据当前的current，获取到对应的组件

  })
}
export default vueRouter;
