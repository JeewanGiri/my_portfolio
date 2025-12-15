# Portfolio Customization Guide

This guide will help you customize the portfolio to match your personal brand and preferences.

## 🎨 Changing Colors

### Primary Color Scheme
Edit `src/index.css` and modify the CSS variables:

```css
:root {
  --color-primary: #6366f1;        /* Main brand color */
  --color-primary-light: #818cf8;  /* Lighter variant */
  --color-primary-dark: #4f46e5;   /* Darker variant */
  --color-secondary: #8b5cf6;      /* Secondary color */
  --color-accent: #06b6d4;         /* Accent color */
}
```

### Gradients
Modify gradient variables for different effects:

```css
--gradient-purple-blue: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
```

## 📝 Updating Content

### Personal Information

**Hero Section** (`src/components/Hero.tsx`):
- Change name and title
- Update subtitle and description
- Modify CTA button text and links

**About Section** (`src/components/About.tsx`):
- Update professional summary
- Modify statistics (years, projects, etc.)
- Change company names and project details

**Contact Section** (`src/components/Contact.tsx`):
- Update email address
- Change GitHub and LinkedIn URLs
- Modify contact form submission logic

### Skills

Edit `src/components/Skills.tsx`:
- Add/remove skill categories
- Update skill names and icons
- Change skill colors

```typescript
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Your Skill', icon: YourIcon, color: '#yourcolor' },
    ],
  },
];
```

### Experience

Edit `src/components/Experience.tsx`:
- Add new job experiences
- Update company names and positions
- Modify highlights and achievements
- Change technology stacks

### Projects

Edit `src/components/Projects.tsx`:
- Add/remove project cards
- Update project descriptions
- Change project images
- Modify technology stacks
- Add GitHub and demo links

```typescript
{
  title: 'Your Project',
  category: 'Project Type',
  description: 'Your description',
  technologies: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  gradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
}
```

## 🖼️ Adding Images

### Project Screenshots

1. Add images to `public/images/` folder
2. Update project objects with image paths:

```typescript
{
  title: 'Your Project',
  image: '/images/your-project.png',
  // ... other properties
}
```

3. Update the project card to display images:

```tsx
<img src={project.image} alt={project.title} />
```

### Profile Photo

Add a profile photo in the About section:

```tsx
<div className="profile-image">
  <img src="/images/profile.jpg" alt="Jeewan Giri" />
</div>
```

## 🎭 Customizing Animations

### Animation Speed

Modify transition durations in components:

```typescript
transition={{
  duration: 0.5,  // Change this value (in seconds)
  ease: 'easeInOut',
}}
```

### Floating Effects

Adjust floating animation in `src/components/BackgroundEffects.tsx`:

```typescript
animate={{
  y: [0, -20, 0],  // Change vertical movement
  scale: [1, 1.2, 1],  // Change scale
}}
transition={{
  duration: 20,  // Change animation duration
}}
```

## 📱 Responsive Design

### Breakpoints

Modify breakpoints in `src/index.css`:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 1024px) {
  /* Tablet styles */
}
```

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`:

```tsx
import YourSection from './components/YourSection';

function App() {
  return (
    <div className="app">
      {/* ... other sections */}
      <YourSection />
    </div>
  );
}
```

### Custom Fonts

Add Google Fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

:root {
  --font-primary: 'YourFont', sans-serif;
}
```

### Background Effects

Modify `src/components/BackgroundEffects.tsx`:
- Change orb colors and sizes
- Adjust particle count
- Modify animation patterns

## 📦 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 💡 Tips

1. **Test Responsiveness**: Always test on different screen sizes
2. **Performance**: Keep animations smooth by using GPU-accelerated properties
3. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
4. **SEO**: Update meta tags in `index.html` with your information
5. **Browser Testing**: Test in Chrome, Firefox, Safari, and Edge

## 🐛 Common Issues

### Animations Not Working
- Check if Framer Motion is properly installed
- Verify import statements
- Ensure variants are correctly defined

### Styling Issues
- Clear browser cache
- Check CSS variable names
- Verify class names match

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors
- Verify all imports are correct

---

Need help? Check the [README.md](./README.md) or create an issue on GitHub.
