# Accessibility Testing Guide

This guide provides step-by-step instructions for testing the accessibility features implemented in this project.

## Quick Testing Checklist

- [ ] Skip navigation link appears on Tab
- [ ] All interactive elements have visible focus indicators
- [ ] Keyboard navigation works for all components
- [ ] Modal focus trap works and returns focus
- [ ] Carousel keyboard navigation (arrow keys)
- [ ] Form validation announcements work
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Screen reader announces content correctly
- [ ] Reduced motion preference is respected

## 1. Automated Testing

### Using axe DevTools (Recommended)

1. Install [axe DevTools Browser Extension](https://www.deque.com/axe/devtools/)
2. Open the application in your browser
3. Open DevTools (F12) → axe DevTools tab
4. Click "Scan ALL of my page"
5. **Expected Result**: 0 critical or serious issues

### Using Lighthouse

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Accessibility" category
4. Click "Analyze page load"
5. **Expected Result**: Score 95-100

### Using WAVE

1. Install [WAVE Browser Extension](https://wave.webaim.org/extension/)
2. Open the application
3. Click the WAVE icon
4. Review errors, alerts, and contrast issues
5. **Expected Result**: 0 errors, minimal alerts

## 2. Keyboard Navigation Testing

### Skip Navigation

1. Refresh the page
2. Press `Tab` once
3. **Expected**: "Skip to main content" link appears at top
4. Press `Enter`
5. **Expected**: Focus moves to main content area

### General Navigation

1. Press `Tab` repeatedly
2. **Expected**: Focus moves through all interactive elements in logical order
3. **Expected**: Visible focus indicator (3px blue outline) on each element
4. Press `Shift + Tab`
5. **Expected**: Focus moves backward through elements

### Navigation Menu

1. Tab to navigation items in sidebar
2. **Expected**: Current page/section is indicated visually and with ARIA
3. Press `Enter` on a navigation item
4. **Expected**: Page scrolls to corresponding section

### Theme Toggle

1. Tab to theme toggle button
2. **Expected**: Visible focus indicator
3. Press `Enter` or `Space`
4. **Expected**: Theme switches between light and dark
5. **Expected**: Button label changes ("Light" ↔ "Dark")

### Project Carousel

1. Navigate to the Projects section
2. Focus on the carousel (should auto-focus when tabbing to it)
3. **Test arrow key navigation**:
   - Press `Arrow Right` → Next project
   - Press `Arrow Left` → Previous project
4. **Expected**: Slide changes announced to screen readers
5. Tab to carousel indicators
6. Press `Enter` on an indicator
7. **Expected**: Jump to that project

### Project Cards

1. Tab to a project card
2. **Expected**: Visible focus indicator
3. Press `Enter` or `Space`
4. **Expected**: Modal opens with project details
5. **Expected**: Focus moves to close button in modal

### Modal (Project Details)

1. Open a project modal (as above)
2. **Test focus trap**:
   - Press `Tab` repeatedly
   - **Expected**: Focus cycles through modal elements only
   - Press `Shift + Tab`
   - **Expected**: Focus cycles backward within modal
3. **Test close methods**:
   - Press `Escape` → **Expected**: Modal closes
   - Tab to close button, press `Enter` → **Expected**: Modal closes
   - Tab to a link, press `Enter` → **Expected**: Link opens in new tab
4. **Expected**: After closing, focus returns to the element that opened the modal

### Contact Form

1. Tab to the contact form
2. Focus on "Name" field
3. **Test validation**:
   - Type one character, then Tab away
   - **Expected**: Error message appears below field
   - **Expected**: Error is announced to screen readers
4. Fill in all fields correctly
5. Press `Enter` or Tab to "Send Message" button
6. Press `Enter` or `Space`
7. **Expected**: Button shows "Sending..." state
8. **Expected**: Success/error message appears and is announced

## 3. Screen Reader Testing

### Windows (NVDA - Free)

1. Download [NVDA](https://www.nvaccess.org/download/)
2. Install and start NVDA (Ctrl + Alt + N)
3. Use these commands:
   - `Ctrl` - Stop reading
   - `Insert + Down Arrow` - Read all
   - `Tab` - Next interactive element
   - `Insert + F7` - List of headings
   - `D` - Next landmark region

### macOS (VoiceOver - Built-in)

1. Enable VoiceOver: `Cmd + F5`
2. Use these commands:
   - `Control` - Stop reading
   - `VO + A` - Read all (VO = Control + Option)
   - `Tab` - Next interactive element
   - `VO + U` - Rotor menu (navigate by headings/landmarks)
   - `VO + →` - Next item

### Testing Scenarios

#### Skip Navigation

1. Start screen reader
2. Navigate to the page
3. **Expected**: "Skip to main content" link is announced
4. Activate the link
5. **Expected**: "Main content" region is announced

#### Hero Section

1. Navigate to hero section
2. **Expected**: Profile image alt text is read
3. **Expected**: Heading "V Chaitanya Chowdari" is announced
4. **Expected**: CTA buttons are announced with clear labels

#### Navigation

1. Navigate to sidebar
2. **Expected**: "Navigation and theme" region is announced
3. **Expected**: "Resume sections" navigation is announced
4. Focus on active nav item
5. **Expected**: "Current page: [section name]" or similar

#### Projects Carousel

1. Navigate to carousel
2. **Expected**: "Featured projects carousel" region is announced
3. Navigate to carousel content
4. **Expected**: Current project title and description are read
5. Activate next button
6. **Expected**: "Showing project 2 of X: [title]" is announced

#### Project Modal

1. Open a project modal
2. **Expected**: "Dialog" role is announced
3. **Expected**: Project title is read
4. **Expected**: Close button is announced
5. Navigate through modal content
6. **Expected**: All links and buttons have clear labels

#### Skills Section

1. Navigate to skills section
2. Focus on a skill bar
3. **Expected**: "Python skill level" or similar is announced
4. **Expected**: Percentage proficiency is read (e.g., "90 percent proficiency")

#### Contact Form

1. Navigate to form
2. Focus on "Name" field
3. **Expected**: "Name, required, edit text" is announced
4. Create a validation error
5. **Expected**: Error message is announced immediately
6. Submit the form
7. **Expected**: Success/error message is announced

#### Experience Timeline

1. Navigate to experience section
2. Focus on a timeline item
3. **Expected**: Job title is announced
4. **Expected**: Company and dates are read
5. Navigate to responsibilities list
6. **Expected**: "Key responsibilities:" is announced
7. **Expected**: Each list item is read

## 4. Visual Contrast Testing

### Using Browser DevTools

1. Open DevTools (F12)
2. Right-click on text element → Inspect
3. In Styles panel, find the color values
4. Use the color picker to check contrast ratio
5. **Expected**: Text shows ✓ for AA compliance

### Color Combinations to Check

#### Light Theme

- Primary text on white background (`#1e293b` on `#ffffff`)
- Secondary text on white (`#475569` on `#ffffff`)
- Links/buttons on white (`#2563eb` on `#ffffff`)
- Error text on white (`#ef4444` on `#ffffff`)
- Focus ring on white (`#2563eb` outline)

#### Dark Theme

- Primary text on dark background (`#f1f5f9` on `#0f172a`)
- Secondary text on dark (`#cbd5e1` on `#0f172a`)
- Links/buttons on dark (`#3b82f6` on `#0f172a`)
- Error text on dark (`#f87171` on `#0f172a`)
- Focus ring on dark (`#3b82f6` outline)

### Expected Contrast Ratios

- Normal text (< 18pt): **4.5:1 minimum** ✓
- Large text (18pt+): **3:1 minimum** ✓
- UI components: **3:1 minimum** ✓
- Focus indicators: **3:1 minimum** ✓

## 5. Reduced Motion Testing

### Enable Reduced Motion

#### Windows

1. Settings → Ease of Access → Display
2. Enable "Show animations in Windows"

#### macOS

1. System Preferences → Accessibility → Display
2. Check "Reduce motion"

#### Browser Testing

1. Open DevTools (F12)
2. Command Palette (Ctrl/Cmd + Shift + P)
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "prefers-reduced-motion: reduce"

### Test Scenarios

1. Enable reduced motion preference
2. Refresh the page
3. **Expected**: Animations are minimal or disabled
4. **Expected**: Transitions use minimal duration (0.01ms)
5. Navigate through carousel
6. **Expected**: Slides change instantly without motion
7. Open a modal
8. **Expected**: Modal appears with fade only (no scaling)
9. Scroll through page
10. **Expected**: Sections appear without slide-in effects

## 6. Touch Target Testing (Mobile)

### Using Chrome DevTools Device Mode

1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl/Cmd + Shift + M)
3. Select a mobile device (e.g., iPhone 12 Pro)
4. Inspect interactive elements
5. **Expected**: All buttons/links are at least 44x44 CSS pixels

### Elements to Check

- [ ] Navigation links
- [ ] Theme toggle button
- [ ] Carousel navigation buttons
- [ ] Carousel indicators
- [ ] Project cards
- [ ] Modal close button
- [ ] Form submit button
- [ ] Social media icons

## 7. Form Accessibility Testing

### Test Validation States

1. Focus on Name field
2. Leave it empty and Tab away
3. **Expected**: Error appears with icon and message
4. **Expected**: Field has red outline
5. **Expected**: `aria-invalid="true"` in HTML
6. Focus back on the field
7. **Expected**: Error is announced by screen reader

### Test Required Fields

1. Check that all required fields have asterisk (\*)
2. Hover over or focus on asterisk
3. **Expected**: "required" label is announced to screen reader
4. Try to submit form with empty required field
5. **Expected**: Validation prevents submission
6. **Expected**: Error message appears

### Test Submit States

1. Fill form correctly
2. Click "Send Message"
3. **Expected**: Button shows "Sending..." with spinner
4. **Expected**: Button is disabled during submission
5. **Expected**: `aria-busy="true"` on button
6. Wait for response
7. **Expected**: Success/error message appears
8. **Expected**: Message has appropriate role (status/alert)

## 8. Known Issues and Workarounds

### Issue: Focus Not Visible in High Contrast Mode

**Status**: Should work in most browsers
**Test**: Enable Windows High Contrast Mode
**Expected**: Focus indicators remain visible

### Issue: Screen Reader Announces Decorative Content

**Status**: Fixed - decorative icons have `aria-hidden="true"`
**Test**: Use screen reader to navigate
**Expected**: Only meaningful content is announced

## 9. Testing Report Template

After testing, document your findings:

```markdown
## Accessibility Test Report

**Date**: [Date]
**Tester**: [Your Name]
**Browser**: [Chrome/Firefox/Safari] [Version]
**Screen Reader**: [NVDA/VoiceOver/JAWS] (if applicable)

### Results

#### Automated Testing

- [ ] axe DevTools: X issues found
- [ ] Lighthouse: Score X/100
- [ ] WAVE: X errors, X alerts

#### Keyboard Navigation

- [ ] Skip navigation: Pass/Fail
- [ ] All elements focusable: Pass/Fail
- [ ] Focus indicators visible: Pass/Fail
- [ ] Modal focus trap: Pass/Fail
- [ ] Carousel keyboard navigation: Pass/Fail

#### Screen Reader

- [ ] Content announced correctly: Pass/Fail
- [ ] ARIA labels clear: Pass/Fail
- [ ] Form validation announced: Pass/Fail

#### Visual

- [ ] Color contrast: Pass/Fail
- [ ] Focus indicators visible: Pass/Fail

#### Motion

- [ ] Reduced motion respected: Pass/Fail

### Issues Found

1. [Description of issue]
   - Severity: Critical/Major/Minor
   - Steps to reproduce:
   - Expected behavior:
   - Actual behavior:

### Recommendations

[Any suggestions for improvement]
```

## 10. Continuous Testing

- Run automated tests before each deployment
- Test with keyboard regularly during development
- Conduct screen reader testing monthly
- Verify contrast ratios when changing colors
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Deque University](https://dequeuniversity.com/)

---

**Note**: This is a living document. Update it as new features are added or testing procedures change.
