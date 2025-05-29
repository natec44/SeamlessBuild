// Simulate a local queue (in IndexedDB or localStorage for real app)
let offlineQueue = [];

export const addToQueue = (endpoint, data, method = 'POST') => {
  offlineQueue.push({ endpoint, data, method });
  console.log('[SyncService] Task added to queue:', endpoint);
};

export const syncQueue = async () => {
  if (!navigator.onLine || offlineQueue.length === 0) return;

  console.log('[SyncService] Syncing offline queue...');
  const queueCopy = [...offlineQueue];
  offlineQueue = [];

  for (const task of queueCopy) {
    try {
      await fetch(task.endpoint, {
        method: task.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task.data)
      });
      console.log('[SyncService] Synced:', task.endpoint);
    } catch (err) {
      console.error('[SyncService] Failed to sync:', task.endpoint, err);
      offlineQueue.push(task); // Re-add to queue if sync fails
    }
  }
};

// Sync when back online
window.addEventListener('online', syncQueue);
