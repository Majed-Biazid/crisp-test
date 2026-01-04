import createCache from '@emotion/cache';

/**
 * Custom Emotion cache with speedy: false
 *
 * CRITICAL for Crisp MagicBrowse compatibility!
 *
 * Why speedy: false?
 * - Default Emotion uses style.sheet.insertRule() for performance
 * - This method doesn't render in Crisp MagicBrowse iframe
 * - Setting speedy: false forces CSS to be injected as text nodes
 * - This makes styles visible in MagicBrowse
 *
 * Trade-off: Slightly slower initial render, but necessary for Crisp
 */
export const createEmotionCache = () => {
  return createCache({
    key: 'css',
    speedy: false, // CRITICAL: Disable speedy mode for Crisp compatibility
    prepend: true, // Optional: Insert styles at the beginning of <head>
  });
};
