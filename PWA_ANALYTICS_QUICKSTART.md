# PWA & Analytics Quick Start Guide

This is a quick reference guide for enabling and testing PWA and Analytics features. For comprehensive documentation, see [PWA_ANALYTICS_DOCUMENTATION.md](./PWA_ANALYTICS_DOCUMENTATION.md).

## Quick Setup

### 1. Enable Google Analytics 4

Create a `.env` file in the project root:

```bash
# Copy from example
cp .env.example .env

# Edit and add your GA4 Measurement ID
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Get your GA4 Measurement ID:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Admin → Data Streams → Web → Measurement ID

### 2. Build & Deploy

```bash
# Build for production
npm run build

# Preview locally
npm run preview
```

### 3. Deploy Requirements

⚠️ **HTTPS is required** for PWA features to work in production.

Use hosting platforms with built-in SSL:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages (with custom domain)

## Testing

### Test PWA Installation (Chrome)

1. Build and preview: `npm run build && npm run preview`
2. Open `http://localhost:4173` in Chrome
3. Look for install icon in address bar
4. Click to install

### Test Offline Support

1. Open Chrome DevTools → Application tab
2. Service Workers → Check "Offline"
3. Refresh page - should still work

### Test Analytics

**Development:**
- Open browser console
- Look for `[Analytics] GA4 initialized with ID: G-...`
- Trigger events (download resume, toggle theme, submit form)
- Check console for event logs

**Production:**
1. Go to Google Analytics → Realtime
2. Trigger events on your site
3. Events appear within 1-2 minutes

### Test Update Notifications

1. Deploy version 1
2. Make a change and deploy version 2
3. Revisit the site
4. Update prompt should appear

## Tracked Events

| Event | Trigger | Purpose |
|-------|---------|---------|
| `resume_download` | Click "Download Resume" | Track resume interest |
| `form_submission_success` | Contact form sent | Track leads |
| `form_submission_error` | Form submission failed | Monitor issues |
| `theme_toggle` | Switch light/dark mode | User preferences |
| `project_view` | Open project modal | Project interest |
| `social_click` | Click social link | Engagement tracking |

## Privacy Features

✅ **Do Not Track Respect**: Analytics disabled if DNT enabled
✅ **IP Anonymization**: Enabled by default
✅ **Environment-Based**: Only loads with measurement ID
✅ **No Tracking by Default**: Must provide GA4 ID

## Troubleshooting

### PWA Not Installing
- Ensure HTTPS (or localhost)
- Run Lighthouse PWA audit
- Check manifest is accessible
- Verify service worker registered

### Analytics Not Working
- Check `.env` file exists with correct ID
- Verify format: `G-XXXXXXXXXX`
- Check browser console for errors
- Disable DNT if enabled

### Events Not Appearing
- Use Realtime reports (not standard reports)
- Wait 24-48 hours for standard reports
- Check Network tab for analytics requests
- Verify GA4 measurement ID is correct

## Disable Features

### Disable Analytics
Simply don't provide `VITE_GA4_MEASUREMENT_ID` in `.env`

### Disable Service Worker
Comment out `VitePWA` plugin in `vite.config.ts`

## Build Output

After building, you should see:

```
✓ built in X.XXs
PWA v1.1.0
mode      generateSW
precache  43 entries (2292.37 KiB)
files generated
  dist/sw.js
  dist/workbox-XXXXXXXX.js
```

## Lighthouse PWA Audit

Expected scores:
- ✅ Installable
- ✅ PWA optimized
- ✅ Works offline
- ✅ Fast and reliable

Run audit:
1. Open Chrome DevTools → Lighthouse
2. Select "Progressive Web App"
3. Click "Generate report"

## Support

For detailed documentation, see:
- [PWA_ANALYTICS_DOCUMENTATION.md](./PWA_ANALYTICS_DOCUMENTATION.md) - Complete guide
- [README.md](./README.md) - Project overview
