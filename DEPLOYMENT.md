# Quick Deployment Guide for CalSoft AI Engineering Website

## 🎯 5-Minute Deployment to GitHub Pages

### Step 1: Download All Files
Download the entire `calsoft-website` folder containing:
- index.html
- css/style.css
- js/script.js
- README.md
- .gitignore
- _config.yml

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `calsoft-ai-engineering`
3. Description: "AI-Accelerated Product Engineering Showcase"
4. Make it **Public**
5. **DO NOT** initialize with README (we have one)
6. Click "Create repository"

### Step 3: Upload Files

**Option A: Web Interface (Easiest)**
1. On your new repository page, click "uploading an existing file"
2. Drag all files/folders into the upload area
3. Commit message: "Initial commit: CalSoft AI website"
4. Click "Commit changes"

**Option B: GitHub Desktop**
1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose the calsoft-website folder
4. Click "Publish repository"
5. Ensure "Keep this code private" is UNCHECKED
6. Click "Publish Repository"

**Option C: Command Line**
```bash
cd /path/to/calsoft-website
git init
git add .
git commit -m "Initial commit: CalSoft AI website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/calsoft-ai-engineering.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Wait 2-3 Minutes

GitHub Pages will build and deploy your site. You'll see a message:
"Your site is live at https://YOUR-USERNAME.github.io/calsoft-ai-engineering/"

### Step 6: Visit Your Live Site!

Your website is now live at:
```
https://YOUR-USERNAME.github.io/calsoft-ai-engineering/
```

---

## 🎨 Quick Customizations

### Change Colors
Edit `css/style.css` lines 1-50:
```css
:root {
    --primary-color: #0066cc;   /* Your brand color */
    --secondary-color: #00a86b; /* Your accent color */
}
```

### Update Contact Info
Edit `index.html` around line 450:
```html
<a href="mailto:your-email@calsoftinc.com">your-email@calsoftinc.com</a>
<a href="tel:+14088340000">+1 (408) 834-0000</a>
```

### Add Google Analytics
Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔧 Connect Contact Form

### Using Formspree (Free, No Backend Needed)

1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Get your form endpoint
5. Edit `js/script.js` line 80, replace with:

```javascript
fetch('https://formspree.io/f/YOUR-FORM-ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Thank you! We will contact you within 24 hours.');
    contactForm.reset();
})
.catch(error => {
    alert('Error submitting form. Please email us directly.');
});
```

---

## 📱 Add Custom Domain (Optional)

If you have a custom domain like `ai-engineering.calsoft.com`:

1. In your repository, go to Settings → Pages
2. Under "Custom domain", enter: `ai-engineering.calsoft.com`
3. Click Save
4. In your DNS provider, add a CNAME record:
   - Type: CNAME
   - Name: ai-engineering
   - Value: YOUR-USERNAME.github.io

Wait 24-48 hours for DNS propagation.

---

## 🐛 Common Issues

### "404 Page Not Found"
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root folder
- Verify Settings → Pages shows the green checkmark

### CSS Not Loading
- Check that files are in correct folders:
  - css/style.css
  - js/script.js
- Clear browser cache (Ctrl+Shift+R)

### Mobile Menu Not Working
- Check browser console for errors (F12)
- Ensure js/script.js is loading

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly on desktop
- [ ] Site loads correctly on mobile
- [ ] All navigation links work
- [ ] Contact form displays correctly
- [ ] ROI calculator works
- [ ] All images load (if you added any)
- [ ] No console errors (press F12 to check)

---

## 📊 Optional Enhancements

### Add Favicon
1. Create a 32x32 PNG image
2. Name it `favicon.ico`
3. Upload to root folder
4. Add to `<head>` in index.html:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Add Social Media Preview
Add to `<head>` in index.html:
```html
<meta property="og:title" content="CalSoft AI-Accelerated Engineering">
<meta property="og:description" content="3x faster time-to-market with AI-powered development">
<meta property="og:image" content="URL_TO_YOUR_IMAGE">
<meta property="og:url" content="https://YOUR-USERNAME.github.io/calsoft-ai-engineering/">
<meta name="twitter:card" content="summary_large_image">
```

### Add Live Chat (Optional)
Services like:
- Intercom
- Drift
- Tawk.to (free)

Just add their script before `</body>` in index.html.

---

## 🚀 You're Done!

Your CalSoft AI Engineering website is now live and ready to showcase your AI-accelerated development capabilities!

**Need help?** Contact vinod@example.com (or your email)

---

**Pro Tip**: Star the repository and share the link with your team! ⭐
