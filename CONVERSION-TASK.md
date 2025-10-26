# Quintessential Wellness - Next.js 15 Conversion Task

## Source Material
Location: /home/ultron/Desktop/LAURENS-SITE

Key files to review:
1. /home/ultron/Desktop/LAURENS-SITE/CLAUDE.md - Project overview
2. /home/ultron/Desktop/LAURENS-SITE/Laurens site knowledge.md - Complete design system
3. /home/ultron/Desktop/LAURENS-SITE/react-app/src/ - Existing React components for reference
4. /home/ultron/Desktop/LAURENS-SITE/css/ - Original stylesheets
5. /home/ultron/Desktop/LAURENS-SITE/images/ - All images
6. /home/ultron/Desktop/LAURENS-SITE/fonts/ - Web fonts

## Target: /home/ultron/Desktop/quintessential-wellness-nextjs

## Complete Implementation Checklist

### Phase 1: Setup & Configuration
- [ ] Install additional dependencies (framer-motion, react-hook-form, swiper for carousels)
- [ ] Configure Tailwind with brand colors from design system
- [ ] Set up Google Fonts (Lustria, Alex Brush, Roboto)
- [ ] Copy all images from LAURENS-SITE to public/images/
- [ ] Copy all fonts to public/fonts/
- [ ] Create TypeScript interfaces for all data types

### Phase 2: Design System Implementation
- [ ] Configure tailwind.config.ts with:
  - Primary colors: coral (#efa697), rosy brown (#b7948e), dusty rose (#d8c2be)
  - Enhanced colors: deep rose (#8B5A5A), warm gold (#D4A574), sage green (#6B8E73)
  - Typography: Lustria (serif headings), Alex Brush (cursive), Roboto (body)
  - Spacing scale, border radius values
- [ ] Create global CSS with font imports and base styles

### Phase 3: Component Development
Build ALL components:

**Layout Components:**
- [ ] Header with navigation (desktop & mobile hamburger menu)
- [ ] Footer with newsletter, contact info, social links
- [ ] Layout wrapper

**Page Sections:**
- [ ] Hero section with background image and booking form
- [ ] About section with service benefits
- [ ] Services section with massage therapy cards
- [ ] Pricing section with hours and pricing table
- [ ] Team section with staff profiles and social links
- [ ] Testimonials section with carousel
- [ ] Contact section with Google Maps integration

**UI Components:**
- [ ] Button (multiple variants)
- [ ] ServiceCard
- [ ] PricingTable
- [ ] TeamMember card
- [ ] TestimonialCard with carousel
- [ ] Form components (booking form, contact form)

### Phase 4: Pages
- [ ] Home page (main landing with all sections)
- [ ] Services page(s)
- [ ] About page
- [ ] Contact page
- [ ] Booking page

### Phase 5: Functionality
- [ ] Implement smooth scroll navigation
- [ ] Add Framer Motion animations (scroll reveals, hover effects)
- [ ] Implement testimonial carousel (Swiper or custom)
- [ ] Create working forms with React Hook Form
- [ ] Mobile responsive navigation with hamburger menu
- [ ] Google Maps embed in contact section

### Phase 6: Content Migration
Copy ALL content from original site:
- [ ] All text content (headlines, descriptions, etc.)
- [ ] Pricing information ($60-$250 range)
- [ ] Operating hours (Mon-Fri 9AM-7PM, Sat 10AM-6PM, Sun Closed)
- [ ] Contact information (2287 King Street, (905) 932-8236, email)
- [ ] Team member bios (Lauren Quinn, Dr. Hailey Traut)
- [ ] All testimonials with star ratings
- [ ] Service descriptions

### Phase 7: Quality Assurance
- [ ] Test all responsive breakpoints (mobile, tablet, desktop)
- [ ] Verify all images load correctly
- [ ] Test all forms
- [ ] Check navigation on all pages
- [ ] Verify color consistency with original
- [ ] Test carousel functionality
- [ ] Check Google Maps integration
- [ ] Verify all hover effects and animations
- [ ] Run npm run build successfully
- [ ] Fix any build errors

### Phase 8: GitHub Deployment
- [ ] Initialize git if not already done
- [ ] Create comprehensive README.md
- [ ] Add .gitignore for Node.js/Next.js
- [ ] Create GitHub repository: jtgsystems/quintessential-wellness-nextjs
- [ ] Push all code to GitHub
- [ ] Verify repository is public and accessible

## Key Design Requirements

**Colors:**
```css
--primary: #efa697 (coral pink)
--secondary: #b7948e (rosy brown)  
--tertiary: #d8c2be (light pink)
--primary-enhanced: #8B5A5A (deep rose)
--secondary-enhanced: #D4A574 (warm gold)
--accent-enhanced: #6B8E73 (sage green)
```

**Typography:**
- Headers: Lustria serif
- Decorative: Alex Brush cursive
- Body: Roboto sans-serif

**Sections Must Include:**
1. Hero with shellfish.jpg background + booking form
2. About with service benefits
3. Services with 4+ massage type cards
4. Pricing table with 7 duration options
5. Team with 2 staff profiles + social icons
6. Testimonials carousel with 5+ reviews
7. Contact with map + contact details

## Success Criteria
✅ Build completes without errors
✅ All sections render correctly
✅ Fully responsive (mobile, tablet, desktop)
✅ All images display properly
✅ Forms are functional
✅ Navigation works smoothly
✅ Design matches original aesthetic
✅ Code pushed to GitHub successfully

## DO NOT REPORT BACK - JUST COMPLETE THE ENTIRE IMPLEMENTATION
