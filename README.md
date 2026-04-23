# Hot Girl Macros

A deployable Next.js website for Paige Rosenberg's fitness and macro coaching business.

## Stack
- Next.js 14
- React 18
- Tailwind CSS
- Lucide React icons

## Local setup
1. Install Node.js 18 or newer.
2. In this folder, run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Deploy to Vercel
1. Create a GitHub repo and upload these files.
2. Create a free Vercel account.
3. Import the GitHub repo into Vercel.
4. Deploy.

## Optional environment variables
Create a `.env.local` file from `.env.example` and fill in any values you want:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - form endpoint from Formspree or similar service
- `NEXT_PUBLIC_BOOKING_URL` - Calendly or other booking link
- `NEXT_PUBLIC_INSTAGRAM_HANDLE` - display handle
- `NEXT_PUBLIC_INSTAGRAM_URL` - Instagram profile URL

## Suggested next edits
- Replace placeholder coaching plan prices.
- Add Paige's real competition accomplishments.
- Swap in client results and photos.
- Add real cookbook content.
- Replace the photo placeholder with real brand photography.
- Connect chat with Crisp or Tidio in Vercel after launch.
