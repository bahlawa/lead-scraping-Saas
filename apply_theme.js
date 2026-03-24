const fs = require('fs');
const path = require('path');
const cssPath = path.join('src', 'index.css');
let content = fs.readFileSync(cssPath, 'utf8');

const themeStyles = `
/* Descriptive Typography Theme - Palatino Linotype */
body, .navbar-logo, h1, h2, h3, .price, .feature-card h3, .pricing-card h3 {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif !important;
}

h1, h2 {
  font-style: italic !important;
  font-weight: 700 !important;
}

body {
  line-height: 1.8 !important;
  letter-spacing: 0.2px !important;
}

.hero-content p, .section-header p {
  font-size: 18px !important;
  opacity: 0.9;
}
`;

fs.writeFileSync(cssPath, content + themeStyles);
console.log('Descriptive Theme Applied Successfully');
