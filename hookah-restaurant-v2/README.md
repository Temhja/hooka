# 🍽️ Hookah Restaurant — Website

A fully responsive, bilingual (Arabic/English) restaurant menu website.

---

## 📁 Project Structure

```
hookah-restaurant/
│
├── index.html              ← Main website file (open this in browser)
│
├── css/
│   └── style.css           ← All styles (dark gold luxury theme)
│
├── js/
│   ├── config.js           ← ⚙️  YOUR SETTINGS (Google Sheet URL, etc.)
│   ├── menu.js             ← Menu data + Google Sheets loader
│   └── app.js              ← Website logic (rendering, modal, language)
│
└── assets/
    ├── images/             ← (optional) Store local images here
    ├── fonts/              ← (optional) Local fonts
    └── video/              ← (optional) Intro video file
```

---

## 🚀 Quick Start

1. Open `index.html` in any web browser — it works immediately with built-in menu data
2. To connect your Google Sheet, follow the steps below

---

## 📊 Google Sheets Integration (Live Menu Updates)

### Step 1: Create Your Google Sheet

Make a sheet with these **exact column headers** in Row 1:

| category_ar | category_en | name_ar | name_en | description_ar | description_en | price | image_url | available |
|---|---|---|---|---|---|---|---|---|
| الأراكيل | Hookahs | نعناع | Mint | وصف | Description | 12000 | https://... | TRUE |

**Column descriptions:**
- `category_ar` — Category name in Arabic (e.g. `الأراكيل الألمانية`)
- `category_en` — Category name in English (e.g. `German Hookahs`)
- `name_ar` — Item name in Arabic
- `name_en` — Item name in English
- `description_ar` — Description in Arabic (can be empty)
- `description_en` — Description in English (can be empty)
- `price` — Number only, no commas (e.g. `15000`)
- `image_url` — Full image URL (see image tips below)
- `available` — `TRUE` to show, `FALSE` to hide

### Step 2: Publish Your Sheet as CSV

1. Go to **File → Share → Publish to web**
2. In the first dropdown, select your **sheet name** (not "Entire Document")
3. In the second dropdown, select **"Comma-separated values (.csv)"**
4. Click **Publish**
5. Copy the URL that appears

### Step 3: Paste URL into config.js

Open `js/config.js` and paste the URL:

```javascript
SHEET_CSV_URL: 'https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=csv',
```

Save the file. The website will now load menu data from your sheet automatically!

---

## 🖼️ Adding Images via Google Drive

1. Upload your image to **Google Drive**
2. Right-click the image → **Share** → **Anyone with the link → Viewer**
3. Click "Copy link" — you'll get something like:
   `https://drive.google.com/file/d/1aBcDeFgHiJkLmN/view?usp=sharing`
4. Extract the **File ID** (`1aBcDeFgHiJkLmN`)
5. Use this URL in your sheet's `image_url` column:
   `https://drive.google.com/uc?export=view&id=1aBcDeFgHiJkLmN`

---

## ⚙️ Configuration Options (js/config.js)

| Setting | Description | Default |
|---|---|---|
| `SHEET_CSV_URL` | Your Google Sheet CSV URL | `''` (uses built-in data) |
| `AUTO_REFRESH_MINUTES` | How often to reload menu data | `5` |
| `DEFAULT_LANG` | Starting language (`'ar'` or `'en'`) | `'ar'` |
| `CURRENCY_AR` | Currency label in Arabic | `'د.ع'` |
| `CURRENCY_EN` | Currency label in English | `'IQD'` |

---

## 🌐 Deploying Online

### Free Option: GitHub Pages
1. Create a free GitHub account at github.com
2. Create a new repository
3. Upload all project files
4. Go to Settings → Pages → Source: main branch
5. Your site will be live at `https://yourusername.github.io/hookah-restaurant`

### Free Option: Netlify
1. Go to netlify.com
2. Drag and drop your project folder
3. Site is live instantly with a free URL

---

## ✏️ Customizing

- **Colors**: Edit CSS variables at the top of `css/style.css`
- **Restaurant name**: Edit `RESTAURANT_NAME_AR` and `RESTAURANT_NAME_EN` in `js/config.js`
- **Add categories**: Just add rows with new category names in your Google Sheet
- **Category icons**: Edit the `CATEGORY_ICONS` object in `js/menu.js`

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Arabic (RTL) and English (LTR) toggle
- ✅ Animated intro screen
- ✅ Live search
- ✅ Category filter navigation
- ✅ Click-to-expand item modal with image & description
- ✅ Google Sheets live sync
- ✅ Auto-refresh every 5 minutes
- ✅ Works without internet (uses built-in data as fallback)
