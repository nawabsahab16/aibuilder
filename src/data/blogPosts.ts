export interface CodeExample {
  language: string;
  filename: string;
  code: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  code?: Record<string, CodeExample>; // Added the code property as optional
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with AI-powered Web Development',
    slug: 'getting-started-with-ai-powered-web-development', // Added slug
    excerpt: 'Learn how artificial intelligence is transforming the way websites are built from scratch.',
    content: `
# Getting Started with AI-powered Web Development

Artificial intelligence is revolutionizing the way we build websites. In this post, we'll explore how AI tools can help you create better websites faster.

## What is AI-powered Web Development?

AI-powered web development uses machine learning algorithms to automate or assist with the creation of websites. This can include:

- Generating code from natural language descriptions
- Creating design elements and layouts
- Optimizing for performance and accessibility
- Testing and debugging

## Benefits of Using AI for Web Development

### 1. Increased Productivity

AI tools can significantly reduce the time it takes to build a website. What would normally take days can be accomplished in hours or even minutes.

### 2. Accessibility

AI can help ensure your website is accessible to all users by identifying and suggesting fixes for accessibility issues.

### 3. Design Assistance

Even if you're not a designer, AI can help you create visually appealing websites by generating design elements and suggesting layouts.

## Getting Started

To start using AI for your web development projects:

1. Choose an AI-powered web development platform
2. Describe your website requirements
3. Review and refine the generated code
4. Deploy your website

## Conclusion

AI is changing the landscape of web development, making it more accessible to everyone. By leveraging these powerful tools, you can build better websites faster than ever before.
    `,
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
    },
    date: '2023-04-15',
    readTime: '5 min read', // Changed from readingTime to readTime
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['AI', 'Web Development', 'Technology']
  },
  {
    id: '2',
    title: 'The Future of Responsive Web Design',
    slug: 'the-future-of-responsive-web-design', // Added slug
    excerpt: 'Explore how responsive design is evolving with new CSS features and device capabilities.',
    content: `
# The Future of Responsive Web Design

Responsive web design has come a long way since the term was first coined by Ethan Marcotte. In this post, we'll look at the future of responsive design.

## Container Queries

Container queries allow you to apply styles based on the size of a containing element rather than the viewport. This is a game-changer for component-based design systems.

\`\`\`css
@container sidebar (min-width: 400px) {
  .sidebar-component {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## Expanded Media Query Features

Media queries are becoming more powerful with features like:

- Preference-based queries (dark mode, reduced motion)
- Display quality queries
- Hover and pointer capabilities

## Fluid Typography and Spacing

Creating truly responsive typography and spacing is becoming easier with viewport units and the \`clamp()\` function:

\`\`\`css
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
\`\`\`

## New Layout Techniques

CSS Grid and Flexbox continue to evolve, making complex layouts simpler to implement:

\`\`\`css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
\`\`\`

## Responsive Images

The \`<picture>\` element and \`srcset\` attribute provide powerful tools for serving the right image for each device:

\`\`\`html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(max-width: 1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Description">
</picture>
\`\`\`

## Conclusion

The future of responsive web design is exciting, with new features that make it easier to create websites that adapt to any device or user preference. Stay ahead of the curve by exploring these emerging techniques.
    `,
    author: {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
    },
    date: '2023-04-10',
    readTime: '7 min read', // Changed from readingTime to readTime
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    tags: ['CSS', 'Responsive Design', 'Web Development']
  },
  {
    id: '3',
    title: 'Maximizing Website Performance',
    slug: 'maximizing-website-performance', // Added slug
    excerpt: 'Discover techniques to improve your website\'s speed and performance for better user experience.',
    content: `
# Maximizing Website Performance

Website performance is crucial for user experience and SEO. Here are strategies to boost your site's speed.

## Why Performance Matters

Users expect fast-loading websites:
- 47% of users expect websites to load in under 2 seconds
- 40% will abandon a site that takes more than 3 seconds to load
- 1 second delay in page response can result in a 7% reduction in conversions

## Measuring Performance

Before optimizing, establish baseline metrics using tools like:
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- Chrome DevTools Performance panel

## Optimization Strategies

### 1. Image Optimization

Images often account for most of a webpage's size:

\`\`\`html
<img 
  src="image.jpg" 
  width="800" 
  height="600" 
  loading="lazy" 
  alt="Description"
/>
\`\`\`

- Use modern formats like WebP or AVIF
- Implement lazy loading
- Specify dimensions to prevent layout shifts
- Use responsive images with srcset

### 2. Code Minification

Minify your CSS, JavaScript, and HTML:

\`\`\`javascript
// Before minification
function calculateTotal(price, quantity) {
  return price * quantity;
}

// After minification
function calculateTotal(a,b){return a*b}
\`\`\`

### 3. Critical CSS

Inline critical styles to render above-the-fold content quickly:

\`\`\`html
<head>
  <style>
    /* Critical styles here */
    header, hero { /* styles */ }
  </style>
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>
\`\`\`

### 4. Cache Management

Implement effective caching strategies:

\`\`\`
Cache-Control: public, max-age=31536000, immutable
\`\`\`

### 5. CDN Usage

Use Content Delivery Networks to serve assets from locations closer to users.

## Conclusion

Performance optimization is an ongoing process. Regular testing and refinement will ensure your website provides the best possible user experience.
    `,
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
    },
    date: '2023-04-05',
    readTime: '8 min read', // Changed from readingTime to readTime
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80',
    tags: ['Performance', 'Optimization', 'Web Development']
  },
  {
    id: '4',
    title: 'Understanding Web Accessibility',
    slug: 'understanding-web-accessibility', // Added slug
    excerpt: 'Learn why accessibility is essential and how to make your websites accessible to all users.',
    content: `
# Understanding Web Accessibility

Web accessibility ensures that websites are usable by people with disabilities. This guide will help you understand the importance of accessibility and how to implement it.

## Why Accessibility Matters

- **Inclusivity**: Approximately 15% of the world's population has some form of disability.
- **Legal Compliance**: Many countries have laws requiring web accessibility.
- **Better User Experience**: Accessible websites often provide better experiences for all users.
- **SEO Benefits**: Many accessibility practices also improve search engine optimization.

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide standards for web accessibility:

### 1. Perceivable

Information must be presentable to users in ways they can perceive:

\`\`\`html
<!-- Adding alt text to images -->
<img src="chart.png" alt="Bar chart showing sales growth of 25% in Q1 2023">

<!-- Using captions for videos -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
</video>
\`\`\`

### 2. Operable

User interface components must be operable by all users:

\`\`\`html
<!-- Ensuring keyboard accessibility -->
<button type="button" onclick="submitForm()" onkeypress="if(event.key==='Enter') submitForm()">
  Submit
</button>

<!-- Providing skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
\`\`\`

### 3. Understandable

Information and operation must be understandable:

\`\`\`html
<!-- Labeling form fields -->
<label for="username">Username:</label>
<input type="text" id="username" aria-describedby="username-help">
<p id="username-help">Choose a username with at least 6 characters</p>
\`\`\`

### 4. Robust

Content must be robust enough to be interpreted by a wide variety of user agents:

\`\`\`html
<!-- Using semantic HTML -->
<article>
  <h2>Article Title</h2>
  <p>Article content...</p>
  <footer>
    <p>Posted by: Author</p>
  </footer>
</article>
\`\`\`

## Testing Accessibility

Regular testing is essential:

1. **Automated Testing**: Tools like Lighthouse, WAVE, and axe
2. **Manual Testing**: Keyboard navigation, screen reader testing
3. **User Testing**: Feedback from users with disabilities

## Conclusion

Accessibility should be considered from the beginning of the development process. By following WCAG guidelines and testing regularly, you can create websites that are accessible to all users.
    `,
    author: {
      name: 'Elena Park',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
    },
    date: '2023-03-28',
    readTime: '10 min read', // Changed from readingTime to readTime
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design']
  }
];
