# 20minCoach Design System Documentation

## Overview
The 20minCoach design system is built for a professional coaching platform that emphasizes trust, efficiency, and accessibility. It supports both light and dark modes with automatic system preference detection.

## CSS Architecture Strategy

### 1. CSS Management Approach
- **CSS Custom Properties**: All design tokens are defined using CSS custom properties for maximum flexibility
- **Tailwind CSS**: Utility-first framework for rapid development and consistency
- **Component Variants**: Pre-built component variants using `class-variance-authority`
- **Semantic Tokens**: All colors, spacing, and typography use semantic naming

### 2. Color System

#### Brand Colors (HSL)
```css
/* Primary - Professional Blue */
--primary: 210 100% 45%;
--primary-light: 210 100% 55%;
--primary-dark: 210 100% 35%;

/* Accent - Warm Coral */
--accent: 16 85% 60%;
--accent-light: 16 85% 70%;
--accent-dark: 16 85% 50%;

/* Success - Growth Green */
--success: 142 76% 36%;
--success-light: 142 76% 46%;
```

#### Surface Colors
```css
/* Light Mode */
--background: 0 0% 100%;
--card: 0 0% 100%;
--secondary: 210 17% 95%;

/* Dark Mode */
--background: 222 20% 8%;
--card: 222 20% 12%;
--secondary: 222 20% 15%;
```

## Responsive Design Rules

### 1. Breakpoint Strategy
Following mobile-first approach with Tailwind's default breakpoints:

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 2. Component Responsive Patterns

#### Typography Scale
```css
.text-hero: text-4xl md:text-5xl lg:text-6xl
.text-feature: text-xl md:text-2xl
```

#### Layout Utilities
```css
.section-padding: px-4 sm:px-6 lg:px-8
.section-spacing: py-16 md:py-24 lg:py-32
```

#### Grid Patterns
```tsx
// Feature cards
grid md:grid-cols-2 lg:grid-cols-3

// Content sections
grid lg:grid-cols-2

// Pricing cards
grid lg:grid-cols-3
```

### 3. Testing Responsive Design

#### Tools and Methods
1. **Browser DevTools**: Test all major breakpoints (375px, 768px, 1024px, 1440px)
2. **Real Device Testing**: iOS Safari, Android Chrome
3. **Accessibility**: Ensure touch targets are minimum 44px
4. **Performance**: Monitor layout shifts on different screen sizes

#### Testing Checklist
- [ ] Navigation collapses properly on mobile
- [ ] Cards stack appropriately
- [ ] Text remains readable at all sizes
- [ ] Images scale correctly
- [ ] Forms are usable on mobile
- [ ] No horizontal scrolling

## Dark/Light Mode Strategy

### 1. Implementation Approach
- **System Preference Detection**: Automatic detection with manual override
- **CSS Custom Properties**: Single source of truth for all colors
- **Theme Provider**: React context for theme management
- **Persistent Storage**: User preference saved in localStorage

### 2. Theme Switching Code
```tsx
// Theme Provider Setup
<ThemeProvider defaultTheme="system" storageKey="20mincoach-theme">
  {/* App content */}
</ThemeProvider>

// Automatic System Detection
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    @apply dark;
  }
}
```

### 3. Dark Mode Testing Strategy

#### Testing Scenarios
1. **System Preference**: 
   - User has dark mode enabled in OS
   - User has light mode enabled in OS
   - User changes system preference while app is open

2. **Manual Override**:
   - User manually selects dark mode
   - User manually selects light mode
   - User switches between themes

3. **Persistence**:
   - Theme preference survives page reload
   - Theme preference works across browser tabs

#### Testing Checklist
- [ ] All colors have dark mode variants
- [ ] Contrast ratios meet WCAG AA standards
- [ ] Images/icons work in both modes
- [ ] Shadow depths are appropriate
- [ ] Brand colors maintain recognition

### 4. Color Contrast Guidelines
- **Text on Background**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **UI Elements**: Minimum 3:1 ratio
- **Brand Colors**: Maintain brand recognition in both modes

## Component Variants System

### Button Variants
```tsx
// Primary actions
<Button variant="hero" size="xl">Connect Expert</Button>

// Secondary actions  
<Button variant="warm" size="lg">Learn More</Button>

// Success states
<Button variant="success">Available Now</Button>
```

### Card Variants
```tsx
// Elevated cards with hover effects
<Card className="card-elevated">
```

### Animation Classes
```css
.animate-fade-in: fadeIn 0.6s ease-out
.animate-slide-up: slideUp 0.8s ease-out
```

## Developer Instructions

### 1. Setting Up the Design System

```bash
# Install dependencies
npm install tailwindcss-animate class-variance-authority

# Import base styles
@import "./index.css";
```

### 2. Using Design Tokens

#### ✅ DO - Use Semantic Tokens
```tsx
<div className="bg-primary text-primary-foreground">
<div className="bg-card text-card-foreground">
```

#### ❌ DON'T - Use Direct Colors
```tsx
<div className="bg-blue-500 text-white">
<div className="bg-gray-100 text-black">
```

### 3. Creating New Components

#### Follow the Pattern
```tsx
// 1. Define variants using cva
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        primary: "primary-classes"
      }
    }
  }
)

// 2. Use semantic tokens only
className="bg-primary text-primary-foreground"

// 3. Add responsive utilities
className="text-lg md:text-xl lg:text-2xl"
```

### 4. Testing Guidelines

#### Before Committing
1. Test in both light and dark modes
2. Verify responsive behavior at key breakpoints
3. Check accessibility with screen reader
4. Validate color contrast ratios
5. Test with slow network conditions

#### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

### 5. Performance Considerations

#### CSS Optimization
- Use Tailwind's purge/content configuration
- Minimize custom CSS outside the design system
- Leverage CSS custom properties for theme switching
- Use `prefers-reduced-motion` for animations

#### Best Practices
```css
/* Use transition-smooth for consistent timing */
transition: var(--transition-smooth);

/* Use shadow utilities for depth */
box-shadow: var(--shadow-lg);

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Maintenance

### Regular Reviews
- Monthly color contrast audits
- Quarterly responsive breakpoint validation
- Semi-annual component variant cleanup
- Annual accessibility compliance review

### Version Control
- Document all design token changes
- Test theme changes across all components
- Maintain backwards compatibility for component APIs
- Update this documentation with any architectural changes

This design system ensures 20minCoach maintains a professional, accessible, and consistent user experience across all devices and user preferences.