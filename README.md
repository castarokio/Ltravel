# Land Travel Agency

Next.js site for an education, tourism, and Omra travel agency.

## Project Structure

- `app/` - App Router pages, layout, and global CSS.
- `components/` - Shared UI components.
- `components/home/` - Homepage-only sections and animation helpers.
- `lib/site-data.ts` - Navigation, services, destinations, testimonials, and stats data.
- `public/assets/` - Runtime assets served by Next.js.
- `assets/source/` - Raw/source media kept out of the app root.
- `public/fonts/` - Local font files used by `app/globals.css`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Notes

- The app is static and currently uses placeholder pages for deeper routes.
- Keep visual assets referenced by the app in `public/assets/`.
- Keep raw or unused media in `assets/source/` so the project root stays clean.
