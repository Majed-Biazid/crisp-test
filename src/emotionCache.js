import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

/**
 * Custom Emotion cache with RTL support and speedy: false
 *
 * CRITICAL for Crisp MagicBrowse compatibility!
 *
 * Why speedy: false?
 * - Default Emotion uses style.sheet.insertRule() for performance
 * - This method doesn't render in Crisp MagicBrowse iframe
 * - Setting speedy: false forces CSS to be injected as text nodes
 * - This makes styles visible in MagicBrowse
 *
 * RTL Support:
 * - Uses stylis-plugin-rtl to automatically flip CSS for RTL languages
 * - Testing if this plugin breaks MagicBrowse on navigation
 *
 * Trade-off: Slightly slower initial render, but necessary for Crisp
 */
export const createEmotionCache = () => {
  return createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
    speedy: false, // CRITICAL: Disable speedy mode for Crisp compatibility
  });
};
