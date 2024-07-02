class EventBus {
  constructor() {
    this.events = new Map()
  }
  on(key, callback) {
    if (this.events.has(key)) {
      this.events.get(key).push(callback)
    } else {
      this.events.set(key, [callback])
    }
  }
  off(key, callback) {
    if (!this.events.has(key)) {
      return
    }
    if (!callback) {
      this.events.clear(key)
    } else {
      const newCallbacks = this.events.get(key).filter(cb => cb !== callback)
      this.events.set(key, newCallbacks)
    }
  }
  emit(key, ...args) {
    if (!this.events.has(key)) {
      return
    } else {
      this.events.get(key).map(callback => callback(args))
    }
  }
  once(key, callback) {
    const cb = (args) => {
      callback(args)
      this.events.off(key, cb)
    }
    if (this.events.has(key)) {
      this.events.get(key).push(cb)
    } else {
      this.events.set(key, [cb])
    }
  }
}

