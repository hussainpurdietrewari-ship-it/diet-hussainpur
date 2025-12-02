# DIET Hussainpur Website

Static multi-page site for District Institute of Education & Training (DIET) Hussainpur, Rewari. Built with vanilla HTML, CSS, and a sprinkle of JavaScript to showcase programs, resources, gallery, staff, and contact information for the institute.

## Project Structure

```
├── LICENSE
├── README.md
├── assets
│   ├── css/style.css        # Global styles
│   ├── images/              # Gallery, staff, emblem assets
│   └── js/main.js           # Minor UI behaviour (scrolling, year, gallery lightbox)
├── about.html               # Institute overview & leadership message
├── contact.html             # Reach us, visit info, enquiry form mockup
├── gallery.html             # Campus imagery + zoomable lightbox
├── index.html               # Landing page
├── programs.html            # Academic offerings & training calendar
├── resources.html           # Circulars, downloads, quick links
└── staff.html               # Leadership & faculty listing
```

## Getting Started

1. Clone or download this repository.
2. Serve the root folder with any static server (recommended for correct relative paths), e.g.:

	```sh
	npx serve .
	# or
	python -m http.server 8000
	```

3. Open `http://localhost:8000/index.html` (adjust port as needed).

All assets are relative, so you can also open the HTML files directly in a browser, though some features (like smooth scrolling and the gallery lightbox) work best via a local server.

## Customisation

- Update institute-specific data inside each HTML page (search for “DIET Hussainpur”).
- Replace gallery/staff photos in `assets/images/` while preserving file names or updating references in markup.
- Adjust theming in `assets/css/style.css` by editing the CSS variables declared at the top of the file.
- `resources/` holds PDFs/Docs surfaced on the Resources page—drop new files there and add links to `resources.html`.

## Deployment Tips

- Host on any static-friendly platform (GitHub Pages, Netlify, Azure Static Web Apps, etc.).
- Ensure the site root serves `index.html` and all other HTML files remain accessible—this is not a SPA, so routes map to actual files.
- Set appropriate cache headers for static assets if using a CDN.

## License

See `LICENSE` in the repository.

