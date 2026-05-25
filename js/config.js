/**
 * ══════════════════════════════════════════
 *  HOOKAH RESTAURANT — CONFIGURATION FILE
 *  Edit this file to connect your menu data
 * ══════════════════════════════════════════
 *
 *  OPTION 1 — NOTION (Recommended, easiest for clients)
 *  ─────────────────────────────────────────────────────
 *  1. Create a free account at notion.so
 *  2. Create a new Database (table view)
 *  3. Add columns: category_ar, category_en, name_ar, name_en,
 *     description_ar, description_en, price, image_url, available
 *  4. Share the page publicly: Share → Publish to web
 *  5. Use the Notion API or a free service like notion2csv.samueli.app
 *     to get a CSV URL, then paste it below as SHEET_CSV_URL
 *
 *  OPTION 2 — GOOGLE SHEETS (Also easy)
 *  ──────────────────────────────────────
 *  1. Create a Google Sheet with the same column headers above
 *  2. File → Share → Publish to web → Choose sheet → CSV format
 *  3. Copy the published URL and paste it below
 *
 *  OPTION 3 — AIRTABLE (Best for images)
 *  ──────────────────────────────────────
 *  1. Create a free Airtable base at airtable.com
 *  2. Add same columns — Airtable supports image attachment columns natively
 *  3. Use Airtable's API to export as JSON or use a public share link
 *
 *  ── COLUMN REFERENCE ──
 *  category_ar    Arabic category name    (e.g. الأراكيل الألمانية)
 *  category_en    English category name   (e.g. German Hookahs)
 *  name_ar        Arabic item name
 *  name_en        English item name
 *  description_ar Arabic description      (optional)
 *  description_en English description     (optional)
 *  price          Number only             (e.g. 15000)
 *  image_url      Direct image URL        (optional)
 *  available      TRUE or FALSE
 *
 *  ── IMAGE TIPS ──
 *  • Google Drive: upload → share (anyone with link) → use:
 *    https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
 *  • Imgur: upload at imgur.com, right-click image → copy image address
 *  • Cloudinary: free image hosting with auto-resize
 */

const CONFIG = {

  // Paste your Google Sheets / Notion CSV URL here:
  SHEET_CSV_URL: '',
  // Example: 'https://docs.google.com/spreadsheets/d/e/ABC.../pub?output=csv'

  USE_FALLBACK_DATA: true,     // Uses built-in menu when URL is empty
  AUTO_REFRESH_MINUTES: 5,     // How often to reload from sheet (0 = off)
  DEFAULT_LANG: 'ar',          // 'ar' or 'en'
  CURRENCY_AR: 'د.ع',
  CURRENCY_EN: 'IQD',
  RESTAURANT_NAME_AR: 'هوكا',
  RESTAURANT_NAME_EN: 'HOOKAH',
};
