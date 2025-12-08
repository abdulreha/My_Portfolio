# Portfolio Website Documentation

## Overview
This is a minimalistic portfolio website for Mohammed Numaan built with HTML, CSS, and JavaScript. The website features a black background with white text theme, creating a professional and modern look.

---

## File Structure

```
resume/
├── index.html          # Home page
├── about.html          # About page with skills and achievements
├── projects.html       # Projects showcase
├── contact.html        # Contact information
├── biodata.html        # Personal bio data
├── styles.css          # All styling
├── script.js           # Interactive features
└── photo.jpg           # Profile photo (to be added)
```

---

## HTML Tags Used

### Document Structure Tags

#### `<!DOCTYPE html>`
- Declares the document type as HTML5
- Ensures browser renders in standards mode

#### `<html lang="en">`
- Root element of the HTML document
- `lang="en"` specifies English language for accessibility

#### `<head>`
- Contains metadata about the document
- Includes title, character set, viewport settings, and CSS links

#### `<meta charset="UTF-8">`
- Specifies character encoding as UTF-8
- Supports all international characters

#### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Makes website responsive on mobile devices
- Sets viewport width to device width
- Initial scale of 1.0 means no zoom

#### `<title>`
- Sets the page title shown in browser tab
- Important for SEO and bookmarks

#### `<link rel="stylesheet" href="styles.css">`
- Links external CSS file to HTML
- `rel="stylesheet"` defines relationship as stylesheet

#### `<body>`
- Contains all visible content of the webpage
- Everything users see is inside body tag

---

### Navigation Tags

#### `<nav class="navbar">`
- Semantic HTML5 tag for navigation section
- Helps screen readers identify navigation area
- `class="navbar"` applies specific styling

#### `<ul class="nav-menu">`
- Unordered list for navigation items
- Semantic way to group navigation links

#### `<li>`
- List item within unordered list
- Each contains one navigation link

#### `<a href="index.html">`
- Anchor tag creates clickable links
- `href` attribute specifies destination URL
- Can link to other pages or sections

---

### Content Structure Tags

#### `<main>`
- Semantic tag for main content area
- Should contain primary content of page
- Only one main tag per page

#### `<section>`
- Groups related content together
- Semantic way to divide page into sections
- Each section typically has a heading

#### `<div>`
- Generic container for grouping elements
- Used when no semantic tag fits
- Styled with CSS classes

---

### Heading Tags

#### `<h1>` to `<h6>`
- Heading tags from most important (h1) to least (h6)
- `<h1>`: Page title (only one per page)
- `<h2>`: Major section headings
- `<h3>`: Subsection headings
- Creates document hierarchy for SEO and accessibility

---

### Text Content Tags

#### `<p>`
- Paragraph tag for text blocks
- Automatically adds spacing before and after
- Main tag for body text

#### `<span>`
- Inline container for text
- Doesn't break line flow
- Used for styling specific text portions

#### `<ul>` and `<li>`
- Unordered list (bullet points)
- `<ul>` wraps the list
- `<li>` for each list item

---

### Image Tag

#### `<img src="photo.jpg" alt="Mohammed Numaan" id="profilePhoto">`
- Displays images on webpage
- `src`: Path to image file
- `alt`: Alternative text for accessibility and if image fails to load
- `id`: Unique identifier for JavaScript/CSS targeting
- Self-closing tag (no closing tag needed)

---

### Script Tag

#### `<script src="script.js"></script>`
- Links external JavaScript file
- Placed at end of body for better performance
- Allows page to load before scripts execute

---

## CSS Styling Explained

### Universal Selector

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- `*` selects all elements
- Removes default browser margins and padding
- `box-sizing: border-box` includes padding/border in element width

---

### Body Styling

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #000000;
    color: #ffffff;
    line-height: 1.6;
    min-height: 100vh;
}
```
- **font-family**: Sets default font with fallbacks
- **background-color**: Black background (#000000)
- **color**: White text (#ffffff)
- **line-height**: 1.6 improves readability (60% more than font size)
- **min-height: 100vh**: Ensures body is at least full viewport height

---

### Navbar Styling

```css
.navbar {
    background-color: #0a0a0a;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #333;
}
```
- **background-color**: Slightly lighter than pure black for contrast
- **padding**: 1rem (16px) top and bottom spacing
- **position: sticky**: Navbar stays at top when scrolling
- **top: 0**: Sticks to top of viewport
- **z-index: 1000**: Ensures navbar appears above other content
- **border-bottom**: Subtle separator line

---

### Flexbox Layout

```css
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
- **display: flex**: Enables flexbox layout
- **justify-content: space-between**: Spreads items with space between
- **align-items: center**: Vertically centers items

```css
.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}
```
- **list-style: none**: Removes bullet points
- **gap: 2rem**: Spacing between navigation items

---

### Grid Layout

```css
.quick-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```
- **display: grid**: Enables CSS Grid layout
- **grid-template-columns**: Creates responsive columns
  - `repeat()`: Repeats column definition
  - `auto-fit`: Automatically fits columns to container
  - `minmax(250px, 1fr)`: Columns minimum 250px, maximum equal fractions
- **gap**: Spacing between grid items

```css
.biodata-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}
```
- Creates 2 equal columns
- `1fr` means one fraction of available space

---

### Transitions and Hover Effects

```css
.nav-menu a {
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: #888;
    background-color: #1a1a1a;
}
```
- **transition**: Smooth animation over 0.3 seconds
- **ease**: Easing function for natural motion
- **:hover**: Pseudo-class triggers when mouse hovers over element
- Changes color and background on hover

```css
.project-card {
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: #666;
}
```
- **transform: translateY(-5px)**: Moves card up 5 pixels
- Creates lift effect on hover
- Multiple properties can transition simultaneously

---

### Positioning

```css
.achievement-category li {
    position: relative;
    padding-left: 1.5rem;
}

.achievement-category li:before {
    content: "▹";
    position: absolute;
    left: 0;
}
```
- **position: relative**: Creates positioning context for child elements
- **position: absolute**: Positions element relative to nearest positioned ancestor
- **:before**: Pseudo-element adds content before element
- **content**: Specifies what to insert

---

### Color System

```css
/* Primary Colors */
#000000  /* Pure black - main background */
#0a0a0a  /* Very dark gray - card backgrounds */
#1a1a1a  /* Dark gray - hover states */

/* Border Colors */
#333     /* Medium gray - borders */
#666     /* Light gray - hover borders */

/* Text Colors */
#ffffff  /* Pure white - main text */
#ccc     /* Light gray - secondary text */
#888     /* Medium gray - muted text */
```
- Hex color codes define colors
- Creates visual hierarchy through contrast
- Maintains minimalistic black/white theme

---

### Spacing Units

```css
/* rem units */
padding: 1rem;      /* 16px (relative to root font size) */
margin: 2rem;       /* 32px */
gap: 1.5rem;        /* 24px */
```
- **rem**: Relative to root element font size (usually 16px)
- Scales proportionally if user changes font size
- Better for accessibility than fixed pixels

---

### Border Radius

```css
border-radius: 8px;
border-radius: 4px;
```
- Creates rounded corners
- Higher values = more rounded
- 8px for cards, 4px for buttons/tags

---

### Responsive Design

```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .biodata-container {
        grid-template-columns: 1fr;
    }
}
```
- **@media**: Media query for responsive design
- **max-width: 768px**: Applies styles when screen is 768px or smaller
- Changes layout for tablets and phones
- Switches from multi-column to single column

```css
@media (max-width: 480px) {
    .nav-menu {
        font-size: 0.8rem;
    }
}
```
- Additional breakpoint for small phones
- Further reduces font sizes and spacing

---

### Text Styling

```css
.hero-title {
    font-size: 3.5rem;
    letter-spacing: 3px;
}
```
- **font-size**: Size of text (rem units scale with root)
- **letter-spacing**: Space between characters
- Creates elegant, spaced-out titles

```css
.hero-description {
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
}
```
- **line-height**: Vertical spacing between lines
- **max-width**: Limits text width for readability
- **margin: 0 auto**: Centers element horizontally

---

### Button Styling

```css
.btn {
    padding: 1rem 2rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    border: 2px solid #ffffff;
}

.btn-primary {
    background-color: #ffffff;
    color: #000000;
}

.btn-primary:hover {
    background-color: transparent;
    color: #ffffff;
}
```
- **padding**: 1rem vertical, 2rem horizontal
- **border**: 2px solid white border
- **transition: all**: Animates all property changes
- Inverts colors on hover for visual feedback

---

### Card Styling

```css
.info-card {
    background-color: #0a0a0a;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #333;
    text-align: center;
}
```
- Dark background slightly lighter than page
- Generous padding for breathing room
- Rounded corners for modern look
- Subtle border for definition
- Centered text alignment

---

### Table Layout

```css
.table-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #333;
}
```
- Uses CSS Grid for table-like layout
- 4 equal columns
- Border between rows
- More flexible than HTML tables

---

## JavaScript Features Explained

### DOM Content Loaded

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Code runs after HTML is fully loaded
});
```
- Waits for HTML to load before running scripts
- Prevents errors from accessing elements that don't exist yet

---

### Smooth Scrolling

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Smooth scroll code
    });
});
```
- **querySelectorAll**: Selects all matching elements
- **forEach**: Loops through each element
- **addEventListener**: Attaches event handler
- **preventDefault**: Stops default link behavior
- Creates smooth scrolling to page sections

---

### Intersection Observer

```javascript
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
```
- **IntersectionObserver**: Detects when elements enter viewport
- **isIntersecting**: True when element is visible
- Triggers fade-in animations when scrolling
- More efficient than scroll event listeners

---

### Typing Effect

```javascript
function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
```
- **charAt(i)**: Gets character at position i
- **setTimeout**: Delays function execution
- Creates typewriter effect by adding one character at a time
- 100ms delay between characters

---

### Error Handling

```javascript
profilePhoto.addEventListener('error', function() {
    this.src = 'data:image/svg+xml,...';
});
```
- **error event**: Fires when image fails to load
- Replaces broken image with SVG placeholder
- Improves user experience when photo is missing

---

### Event Listeners

```javascript
card.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.1)';
});

card.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
});
```
- **mouseenter**: Fires when mouse enters element
- **mouseleave**: Fires when mouse leaves element
- **this**: Refers to the element that triggered event
- Adds shadow on hover for depth effect

---

## Key CSS Concepts

### Box Model
Every element is a box with:
1. **Content**: The actual content (text, images)
2. **Padding**: Space inside border
3. **Border**: Line around padding
4. **Margin**: Space outside border

### Flexbox
- One-dimensional layout (row or column)
- Great for navigation bars, button groups
- Properties: justify-content, align-items, gap

### Grid
- Two-dimensional layout (rows and columns)
- Great for card layouts, tables
- Properties: grid-template-columns, gap

### Pseudo-classes
- **:hover**: When mouse hovers
- **:active**: When element is clicked
- **:before/:after**: Insert content before/after element

### Pseudo-elements
- **::before**: Insert content before element
- **::after**: Insert content after element
- Used for decorative elements

---

## Accessibility Features

1. **Semantic HTML**: Uses proper tags (nav, main, section)
2. **Alt text**: Images have descriptive alt attributes
3. **Color contrast**: White on black meets WCAG standards
4. **Keyboard navigation**: All links are keyboard accessible
5. **Responsive design**: Works on all device sizes
6. **rem units**: Text scales with user preferences

---

## Performance Optimizations

1. **CSS at top**: Loads styles before content
2. **JavaScript at bottom**: Doesn't block page rendering
3. **Minimal dependencies**: No heavy frameworks
4. **Efficient selectors**: Uses classes instead of complex selectors
5. **Intersection Observer**: Efficient scroll animations

---

## Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard HTML5, CSS3, and ES6 JavaScript
- Graceful degradation for older browsers
- Mobile-friendly responsive design

---

## Customization Guide

### Changing Colors
Edit these variables in `styles.css`:
- Background: `#000000`
- Card background: `#0a0a0a`
- Text: `#ffffff`
- Borders: `#333`

### Changing Fonts
Edit `font-family` in body selector:
```css
font-family: 'Your Font', sans-serif;
```

### Adding New Pages
1. Copy existing HTML file
2. Update navigation links
3. Add content in main container
4. Update active class in navigation

### Modifying Layout
- Adjust `max-width` in containers for wider/narrower content
- Change `grid-template-columns` for different column counts
- Modify `gap` values for more/less spacing

---

## Common CSS Properties Reference

| Property | Purpose | Example |
|----------|---------|---------|
| display | Layout type | flex, grid, block |
| position | Positioning method | relative, absolute, sticky |
| margin | Outside spacing | 1rem, 0 auto |
| padding | Inside spacing | 2rem 1rem |
| color | Text color | #ffffff |
| background-color | Background color | #000000 |
| font-size | Text size | 1.5rem |
| border | Border styling | 1px solid #333 |
| border-radius | Rounded corners | 8px |
| transition | Animation | all 0.3s ease |
| transform | Move/rotate/scale | translateY(-5px) |

---

## Tips for Beginners

1. **Start with HTML structure** before styling
2. **Use browser DevTools** to inspect and test changes
3. **Mobile-first approach**: Design for mobile, then desktop
4. **Keep it simple**: Don't over-complicate layouts
5. **Test on multiple devices** and browsers
6. **Comment your code** for future reference
7. **Use consistent naming** for classes and IDs
8. **Validate HTML/CSS** using W3C validators

---

## Resources for Learning

- **HTML**: MDN Web Docs (developer.mozilla.org)
- **CSS**: CSS-Tricks (css-tricks.com)
- **JavaScript**: JavaScript.info
- **Flexbox**: Flexbox Froggy (flexboxfroggy.com)
- **Grid**: Grid Garden (cssgridgarden.com)

---

## Future Enhancements

Possible additions to the website:
1. Dark/light theme toggle
2. Animated background effects
3. Contact form with validation
4. Blog section
5. Project filtering by technology
6. Downloadable resume PDF
7. Testimonials section
8. Skills progress bars with animations

---

## Troubleshooting

### Photo not displaying
- Ensure `photo.jpg` is in root directory
- Check file name matches exactly (case-sensitive)
- Verify image format is supported (jpg, png, gif, webp)

### Styling not applied
- Check CSS file path in HTML
- Clear browser cache
- Verify CSS syntax (missing semicolons, brackets)

### JavaScript not working
- Check browser console for errors (F12)
- Ensure script.js is in root directory
- Verify script tag is at end of body

### Layout broken on mobile
- Test responsive breakpoints
- Check viewport meta tag is present
- Verify media queries are correct

---

## Contact

For questions about this website:
- Email: monu23cs@cmrit.ac.in
- GitHub: https://github.com/MdNumaan42/

---

**Last Updated**: December 2024
**Version**: 1.0
**Author**: Mohammed Numaan
