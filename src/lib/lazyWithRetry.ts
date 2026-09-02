import { lazy, ComponentType } from 'react';

const RELOAD_FLAG = 'chunk-reload-attempted';

/**
 * Lazy-loads a route component and recovers from stale chunk hashes
 * (happens right after a new deploy: the old index references chunk files
 * that no longer exist). On failure we reload the page once to fetch the
 * fresh asset manifest.
 */
export function lazyWithRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const module = await factory();
      window.sessionStorage.removeItem(RELOAD_FLAG);
      return module;
    } catch (error) {
      const alreadyTried = window.sessionStorage.getItem(RELOAD_FLAG);
      if (!alreadyTried) {
        window.sessionStorage.setItem(RELOAD_FLAG, 'true');
        window.location.reload();
        // Never resolves; the page is reloading.
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}
