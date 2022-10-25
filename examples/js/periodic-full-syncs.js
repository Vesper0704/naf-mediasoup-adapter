const SYNC_DURATION_MS = 5000;

AFRAME.registerComponent("periodic-full-syncs", {
  init() {
    this.lastSync = 0;
  },

  tick() {
    const now = performance.now();

    if (now - this.lastSync >= SYNC_DURATION_MS && this.el.components && this.el.components.networked) {
      this.lastSync = now;

      // Sends an undirected first sync message.
      this.el.components.networked.syncAll(null, true);
    }
  }
});