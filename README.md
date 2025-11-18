# CalSoft AI-Accelerated Engineering Website

A modern, responsive static website showcasing CalSoft's AI-powered product engineering capabilities.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design matching CalSoft brand identity
- **Interactive Elements**: 
  - ROI Calculator
  - Smooth scroll navigation
  - Animated statistics
  - Mobile-friendly menu
- **Performance Optimized**: Fast loading times, lazy loading, and optimized assets
- **GitHub Pages Ready**: Deploy directly to GitHub Pages with zero configuration

## 📋 Website Sections

1. **Hero Section**: Eye-catching introduction with key metrics
2. **Overview**: Traditional vs AI-Accelerated development comparison
3. **Capabilities**: Four core AI engineering capabilities
4. **Case Studies**: Real-world success stories with measurable results
5. **ROI Calculator**: Interactive calculator for cost/time savings
6. **Industries**: Domain-specific solutions
7. **Engagement Models**: Flexible partnership options
8. **Contact Form**: Easy way for prospects to reach out

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with CSS Variables, Flexbox, Grid
- **Vanilla JavaScript**: No dependencies, pure JS
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📦 File Structure

```
calsoft-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles in one file
├── js/
│   └── script.js       # Interactive features
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Desktop (Easiest)

1. **Create a New Repository on GitHub**
   - Go to github.com
   - Click "New Repository"
   - Name it: `calsoft-ai-engineering` (or any name you prefer)
   - Make it Public
   - Don't initialize with README (we already have one)

2. **Upload Files**
   - Download all files from `/mnt/user-data/outputs/calsoft-website/`
   - Use GitHub Desktop to upload, or use the web interface

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/calsoft-ai-engineering/`

### Option 2: Using Git Command Line

```bash
# Navigate to the website directory
cd calsoft-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: CalSoft AI Engineering website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/calsoft-ai-engineering.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

### Option 3: Direct Upload via GitHub Web Interface

1. Create a new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all files/folders
4. Commit the changes
5. Enable GitHub Pages in Settings → Pages

## 🔧 Customization Guide

### Updating Content

1. **Hero Section**: Edit lines 33-67 in `index.html`
2. **Statistics**: Update the `.stat` divs (lines 51-62)
3. **Case Studies**: Modify `.case-study-card` sections (lines 200-290)
4. **Contact Information**: Update contact details (lines 450-470)

### Styling Customization

All colors and design tokens are defined as CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #00a86b;    /* Accent color */
    --accent-color: #ff6b35;       /* Highlight color */
    /* ...more variables */
}
```

To change the color scheme:
1. Open `css/style.css`
2. Find the `:root` section (lines 1-50)
3. Update the color variables

### Adding New Sections

1. Add HTML in `index.html` following the existing pattern:
```html
<section id="your-section" class="section">
    <div class="container">
        <div class="section-header text-center">
            <span class="section-label">Your Label</span>
            <h2 class="section-title">Your Title</h2>
        </div>
        <!-- Your content -->
    </div>
</section>
```

2. Add corresponding styles in `css/style.css`

## 📧 Contact Form Integration

The contact form is currently configured to show an alert. To integrate with your backend:

1. Open `js/script.js`
2. Find the contact form handler (around line 80)
3. Replace the alert with your API endpoint:

```javascript
fetch('YOUR_BACKEND_API_ENDPOINT', {
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
    console.error('Error:', error);
});
```

### Recommended Form Services (No Backend Required)

- **Formspree**: https://formspree.io/
- **Netlify Forms**: If hosting on Netlify
- **Google Forms**: Embed a Google Form
- **EmailJS**: https://www.emailjs.com/

## 🎨 Design System

### Colors
- **Primary Blue**: #0066cc (CalSoft brand)
- **Success Green**: #00a86b
- **Accent Orange**: #ff6b35
- **Text Dark**: #1a1a1a
- **Background**: #f8f9fa

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)
- 3XL: 6rem (96px)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔍 SEO Optimization

The website includes:
- Semantic HTML5 tags
- Meta descriptions
- Proper heading hierarchy
- Alt text placeholders (add your images)
- Fast loading times
- Mobile-friendly design

### Recommended Additions

1. **Add Favicon**: Create and link a favicon.ico
2. **Add OG Tags**: For social media sharing
3. **Add Analytics**: Google Analytics or similar
4. **Add Schema Markup**: For rich snippets

## 🐛 Troubleshooting

### CSS Not Loading
- Check file paths are correct
- Ensure files are in the right folders

### Form Not Submitting
- Check browser console for errors
- Verify JavaScript is enabled
- Check network tab for failed requests

### Mobile Menu Not Working
- Clear browser cache
- Check JavaScript console for errors

## 📄 License

© 2025 CalSoft Pvt Ltd. All rights reserved.

## 🤝 Support

For questions or issues:
- **Email**: ai-solutions@calsoftinc.com
- **Website**: https://www.calsoftinc.com

## 🔄 Updates

### Version 1.0.0 (Current)
- Initial release
- Full responsive design
- All core sections implemented
- Interactive ROI calculator
- Contact form ready

---

**Built with ❤️ for CalSoft by Vinod**
