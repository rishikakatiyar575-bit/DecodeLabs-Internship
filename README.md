# DecodeLabs-Internship

## PROJECT -1 
WanderCulture 🌿
A travel landing page I built for a frontend internship project. The idea behind it was to design something that actually feels like a real travel brand — not just a homework assignment. I went with a cultural travel theme because I wanted the content and design to tell a story together, not just showcase code.

## What it looks like
A full landing page with a sticky header, a two-column hero section, destination cards, a "why us" section, and a footer with contact info. The whole thing is built without any frameworks — just HTML and CSS.

Project files
wanderculture/
├── index.html     
├── style.css      


## How to run it
Open the folder in VS Code, 
right-click index.html,
and hit Open with Live Server. 
That's all.
No installs, no build step.
If you don't have Live Server, 
just double-click index.html — it opens straight in the browser.

## Pages and sections
Header — Sticky navbar that stays at the top as you scroll. Has a slight blur and transparency effect using backdrop-filter.
Hero — Two-column layout with a headline, subtitle, and two CTA buttons on the left. On the right, two overlapping images stacked using position: absolute to give it a layered, editorial feel.
Destinations — Three destination cards in a CSS Grid layout. Each card has an image, a location tag, trip details, and a learn more button. Cards lift on hover.
Why Us — Three reason blocks on a warm sand background. Kept it simple — icon, heading, short paragraph.
Footer — Dark green background, three-column grid with brand info, contact details, and quick links.


I used CSS custom properties (variables) for the entire color system and fonts so everything stays consistent and easy to change.
css--green-dark:   #2d5016;
--green-mid:    #4a7c2f;
--green-light:  #7fb069;
--sand:         #f5f0e8;
Typography is a mix of Playfair Display (serif, for headings) and Inter (sans-serif, for body text). That combination was intentional — it gives the page a travel magazine feel without being too heavy.
Layout is almost entirely CSS Grid and Flexbox. No floats, no hacks.

## What I'd improve next

->Add a hamburger menu for mobile (the nav breaks on small screens right now)
->Build out individual destination pages
->Add a working contact/booking form
->Animate the hero section on page load


## Tech used
HTML5 and CSS3. No JavaScript, no frameworks, no libraries except Google Fonts.


## PROJECT -2

## TechLearn 
A responsive web development learning platform landing page built with plain HTML and CSS for a frontend internship project. The whole thing is a single file — no frameworks, no build tools, nothing extra. Just open it and it works.

What it looks like
A full landing page for a fictional web dev course platform. It has a sticky navbar with a hamburger menu for mobile, a hero section, a stats bar, course cards, a tips section, a CTA banner, and a footer. Everything resizes cleanly across desktop, tablet, and mobile.

Project files
techlearn/
├── responsive-layout.html     

All HTML, CSS, and JavaScript live in one file. Kept it that way intentionally to show how a complete responsive page can be built without any external dependencies.

How to run it
Open the folder in VS Code, 
right-click responsive-layout.html, 
and hit Open with Live Server.
Or just double-click the file — it opens directly in any browser.
No installs. No npm. Nothing to configure.

## Sections breakdown
Navbar — Sticky header with logo and nav links. On screens under 640px, the links hide and a hamburger button appears. Clicking it toggles a dropdown menu using a tiny bit of JavaScript.
Hero — Centered layout with a headline using clamp() for fluid font sizing, a short description, and two CTA buttons that stack vertically on mobile.
Stats bar — Four numbers in a responsive grid using repeat(auto-fit, minmax(160px, 1fr)). Columns collapse naturally without any media queries.
Course cards — Three cards for HTML, CSS, and JavaScript. Grid layout with auto-fit so they wrap to one column on small screens. Each card has a colored icon area, badge, description, and a footer with lesson count.
Tips section — Four tip cards on a light background. Same auto-fit grid pattern. Content is genuinely useful beginner advice, not just filler.
CTA banner — Full-width blue section with a white button. Simple and direct.
Footer — Dark background, three columns with brand info and link groups. Wraps to a single column on mobile using flex-wrap.

## CSS things worth noting
I used clamp() throughout for font sizes and padding so things scale smoothly without a bunch of breakpoints:
cssfont-size: clamp(1.8rem, 5vw, 3.2rem);
padding: clamp(3rem, 8vw, 6rem) 1.25rem;
The grid layouts use auto-fit with minmax() so columns collapse on their own:
cssgrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
There's only one media query in the whole file — at 640px — just to handle the hamburger menu swap and a couple of flex direction changes.
All colors are CSS variables defined in :root so the palette stays consistent everywhere.

## The JavaScript
There's exactly one small script at the bottom — it handles the mobile menu toggle:
jsconst btn = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', function() {
  const isOpen = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
That's it. The rest is pure CSS.

## What I'd improve next

Smooth animation when the mobile menu opens and closes
Active state on nav links based on scroll position
A dark mode toggle
Real course content pages linked from the cards



## Tech used
HTML5, CSS3, and a few lines of vanilla JavaScript. Single file, zero dependencies.



## PROJECT -3 
## Movie Watchlist

I built this as part of my frontend internship (Task 3 — Interactive Web Elements). The idea was simple: I wanted a clean way to track movies I want to watch and ones I've already seen. No frameworks, just plain HTML, CSS, and JavaScript.

## What it does
You can add movies to your list with a title, year, and genre. Once you've watched something, mark it as done and leave a star rating. If you don't want it anymore, just delete it. There's also a filter so you can switch between your full list, what's left to watch, and what you've finished. The counts at the top update automatically as you make changes.

## Project files
movie-watchlist/
├── index.html     
├── style.css      
├── app.js         

I kept it split into three files to stay organized — structure, styles, and logic all separate.

Running it locally
You'll need VS Code and the Live Server extension 
Once that's installed:

Open the project folder in VS Code
Right-click index.html
Hit Open with Live Server

It'll open at http://127.0.0.1:5500. No npm, no setup, nothing extra.

## What I learned building this
Most of the app comes down to one render() function that redraws the movie list whenever something changes. Every time you add, delete, or update a movie, it updates the array and calls render again. Keeping it this way made things a lot easier to debug.
A few things I used a lot:

createElement and appendChild to build cards dynamically
addEventListener for all the button interactions
Array.filter and Array.find to manage the movie data
Class toggling to handle the watched state and active filters


## What I'd add next

Save the list to localStorage so it doesn't reset on refresh
A search bar to find movies quickly
Pull real movie info from an API like TMDB
Maybe a dark mode


## Tech used
HTML, CSS, and vanilla JavaScript. That's it
