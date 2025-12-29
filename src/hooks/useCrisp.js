import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Crisp } from 'crisp-sdk-web';

const CRISP_WEBSITE_ID = '48034eeb-2b78-4db1-a9c0-233e36521f8a'; // Same as main app

/**
 * Crisp Hook - Simple test implementation
 *
 * Tests route tracking in React SPA:
 * 1. Configure Crisp once
 * 2. Load Crisp
 * 3. Update page info on route changes
 */
function useCrisp() {
  const location = useLocation();
  const crispLoaded = useRef(false);

  // Step 1: Configure and load Crisp (once)
  useEffect(() => {
    if (crispLoaded.current) return;

    try {
      console.log('[Crisp Test] Configuring Crisp...');

      // Configure with autoload: false
      Crisp.configure(CRISP_WEBSITE_ID, {
        autoload: false
      });

      console.log('[Crisp Test] ✓ Configured');

      // Load Crisp
      Crisp.load();
      crispLoaded.current = true;

      console.log('[Crisp Test] ✓ Loaded and ready');

      // Show the chat
      Crisp.chat.show();

    } catch (error) {
      console.error('[Crisp Test] ✗ Setup failed:', error);
    }
  }, []);

  // Step 2: Update page info on route changes
  useEffect(() => {
    if (!crispLoaded.current) return;

    const url = window.location.href;
    const path = location.pathname;
    const title = document.title;

    console.log('[Crisp Test] Route changed:', path);

    try {
      // METHOD 1: Update session data
      Crisp.session.setData({
        page_url: url,
        page_title: title,
        page_path: path,
        last_update: new Date().toISOString(),
      });

      console.log('[Crisp Test] ✓ Session data updated');

      // METHOD 2: Push page_view event
      Crisp.session.pushEvent('page_view', {
        path: path,
        url: url,
        title: title,
        timestamp: new Date().toISOString(),
      }, 'blue');

      console.log('[Crisp Test] ✓ Page view event pushed');

    } catch (error) {
      console.error('[Crisp Test] ✗ Route update failed:', error);
    }
  }, [location.pathname]);
}

export default useCrisp;
