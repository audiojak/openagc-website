# kaluta-website

The website for [Kaluta](https://github.com/audiojak/openagc), served at
**https://kaluta.org** on Vercel.

Next.js (App Router) + Tailwind CSS. Every page is static.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm build
```

- `src/app/page.tsx` — landing page
- `src/app/privacy/page.tsx` — privacy policy (linked from Google's OAuth
  consent screen; keep it in step with the app's actual behaviour)
- `public/img/` — app icon and screenshots, copied from the Kaluta repo
  (`macos/Kaluta/Resources/Assets.xcassets`, `docs/screenshots`)

Deploys: pushes to `main` deploy to production once the repo is connected to
a Vercel project; other branches get preview URLs.
