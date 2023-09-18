module.exports = {
  requireChannel: "zetaphor.tablet.zDebugger.require",
  tablet: Tablet.getTablet("com.highfidelity.interface.tablet.system"),
  entities: null,
  rootId: null,
  displayName: null,
  initialized: false,

  init(rootId, displayName = null) {
    this.rootId = rootId
    this.displayName = displayName
    this.initialized = true
  },

  sendLogEvent(type, args) {
    if (!this.initialized) {
      console.error('Trying to use the entity zebug script before init!')
      return
    }
    const properties = this.entities.getEntityProperties(this.rootId, ["position", "name"])
    const eventData = {
      channel: this.requireChannel,
      type: type,
      source: {
        id: this.rootId,
        name: properties.name,
        position: properties.position
      },
      args: args
    }
    this.tablet.emitScriptEvent(JSON.stringify(eventData))
  },

  info: function (...args) {
    this.sendLogEvent('info', args)
  },

  warn: function (...args) {
    this.sendLogEvent('warn', args)
  },

  log: function (...args) {
    this.sendLogEvent('log', args)
  },

  error: function (...args) {
    this.sendLogEvent('error', args)
  }
}