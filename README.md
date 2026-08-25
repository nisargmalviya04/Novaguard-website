# Nova Guard - Advanced Polymer Solutions

A stunning, modern website for Nova Guard polymer company featuring vibrant colors, smooth animations, and next-level scroll effects.

## 🎨 Features

- **Vibrant Design**: Beautiful gradient backgrounds and glass morphism effects
- **Advanced Animations**: Smooth scroll animations, parallax effects, and floating elements
- **Responsive**: Fully responsive design that works on all devices
- **Modern UI**: Clean, professional interface with stunning visual effects
- **Custom Cursor**: Interactive custom cursor with hover effects
- **Scroll Progress**: Beautiful scroll progress indicator
- **Glass Morphism**: Modern glass-like effects throughout the site

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 📸 Adding Your Images

### Hero Section Image
1. Place your hero image in the `public/images/` folder
2. Update the Hero component (`src/components/Hero.tsx`):
   ```tsx
   // Replace the placeholder with your image
   <img 
     src="/images/your-hero-image.jpg" 
     alt="Nova Guard Polymer Products" 
     className="hero-image image-hover"
   />
   ```

### Product Images
1. Add product images to `public/images/`
2. Update the Products component (`src/components/Products.tsx`):
   ```tsx
   <img 
     src="/images/your-product-image.jpg" 
     alt="Product Name" 
     className="product-image image-hover"
   />
   ```

### About Section Images
1. Add company/team images to `public/images/`
2. Update the About component (`src/components/About.tsx`):
   ```tsx
   <img 
     src="/images/your-about-image.jpg" 
     alt="About Nova Guard" 
     className="about-image image-hover"
   />
   ```

## 🎯 Recommended Image Specifications

- **Hero Image**: 800x600px or larger, JPG/PNG format
- **Product Images**: 600x400px, JPG/PNG format
- **About Images**: 500x400px, JPG/PNG format
- **Logo**: 200x80px, PNG format with transparent background

## 🎨 Customization

### Colors
The site uses CSS custom properties for easy color customization. Edit `src/index.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* Add more custom colors here */
}
```

### Animations
All animations are defined in `src/index.css` and can be customized by modifying the keyframes and animation properties.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🛠️ Built With

- React 18
- TypeScript
- CSS3 with advanced animations
- Font Awesome icons
- Google Fonts (Inter)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support or questions about customizing the website, please contact the development team.

---

**Nova Guard** - Revolutionizing the polymer industry with cutting-edge solutions and innovative materials. 