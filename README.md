# kalekaalekahi website

Plain HTML and CSS. No build step. Netlify publishes the main folder as is, and every push to `main` goes live in about a minute.

## Pages
- `index.html` Home, with sections for ceremonies, speaking, coaching and group experiences
- `about.html` About
- `wedding-script.html` Sample wedding ceremony script
- `give.html` Donations for For the Sacred and Makoa Quest
- `contact.html` Contact and booking
- `styles.css` Shared styles

## Search and AI discovery
- Every page has a canonical address, social share tags, and structured data (schema.org) describing Kale and his services. Maui is listed as the area served; no home address appears anywhere.
- `robots.txt` lets search engines and AI assistants read the site and points them to the sitemap.
- `sitemap.xml` lists every page for Google and Bing. Add new pages here.
- `llms.txt` is a plain summary AI assistants can read and quote.
- `_redirects` sends old Wix page addresses to the matching new pages so search rankings carry over.

## Booking and payments
Booking buttons go to Calendly. No payment or bank details live on this site.
