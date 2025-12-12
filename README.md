# Iran Plate Insurance — React + TypeScript (sample)

## How to run

1. `npm install` or `pnpm install`
2. `npm run dev` — open the Vite local host
3. `npm test` — run tests (vitest)

## Key assumptions

- The mock API returns manufacture date in Jalali year + Persian month name; converting Gregorian→Jalali isn't implemented here.
- We simplified plate validation/masking: the input auto-converts Farsi digits and removes invalid chars, and we format to a simple `left-right` dash form.
- For demonstration we keep all data in memory + `localStorage` for history.

## What I'd improve for production

- Use a real backend API with robust validation and rate limiting.
- Add server-side authentication and authorization for sensitive owner data.
- Use a proper Jalali date library (e.g. `jalaali-js`) to present accurate manufacture dates and compute age.
- Improve plate mask (use a tested input-mask library that supports Iranian plate shapes and letter sets).
- Add end-to-end tests, accessibility checks and i18n handling for RTL Persian typography.
