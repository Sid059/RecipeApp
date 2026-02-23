# Recipe Book App

A modern recipe discovery application built with React that lets users search, filter, and save their favorite recipes.

![HomePage](https://github.com/user-attachments/assets/3d21d867-2dc0-4841-b9e2-e13dd982496a) ![RecipesPage](https://github.com/user-attachments/assets/b1774433-65cd-42f2-bf9f-438cc5484404) ![RecipeDetailsPage](https://github.com/user-attachments/assets/3e04119e-6d62-4b82-b66f-4dcb03b05c9a) ![FavoritesPage](https://github.com/user-attachments/assets/6ca1b430-752c-4768-b5fd-58f8a860e9b4)

## Live Demo

[View Live Website](https://delicious-recipe-book-app.netlify.app/)

## Purpose

This project was built to practice and demonstrate proficiency in:

- **React Router v6** - Client-side routing with nested routes, dynamic routes, and query strings
- **React Hooks** - useState, useEffect, useRef, useContext, useSearchParams, useParams, useNavigate, useCallback, useMemo
- **Custom Hooks** - Building reusable logic
- **Data Fetching** - API integration with proper error handling and abort controllers
- **Event Handling** - Event propagation and prevention
- **Performance Optimization** - Debouncing, memoization

## Features Checklist

### Core Features
- Browse recipes from TheMealDB API
- Search recipes by name with debounced input
- Filter recipes by category (Beef, Chicken, Dessert, etc.)
- Filter recipes by cuisine (Italian, Chinese, Indian, etc.)
- View detailed recipe information with ingredients & instructions
- Save favorite recipes using localStorage
- Responsive design for mobile, tablet, and desktop

### Pages & Routing
- Home page with hero section and cuisine categories
- Recipes page with search and filter functionality
- Recipe details page with complete recipe information
- Favorites page to view saved recipes
- 404/Empty states with navigation options

### Technical Implementation
- React Router v6 for navigation
- URL query parameters for search/filter state
- Custom hooks for reusable logic
- Context API for global state (favorites)
- CSS Modules for scoped styling
- Loading and error states
- Mobile-responsive layouts

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI library |
| React Router v6 | Navigation |
| CSS Modules | Scoped styling |
| TheMealDB API | Recipe data |
| localStorage | Favorites persistence |
| Netlify | Hosting |

## Hooks Used

### React Built-in Hooks

| Hook | Purpose |
|------|---------|
| `useState` | Local component state |
| `useEffect` | Side effects and data fetching |
| `useContext` | Access favorites global state |
| `useRef` | Track mounted state for abort controller |
| `useCallback` | Memoize functions to prevent re-renders |
| `useMemo` | Memoize computed values |
| `useParams` | Access dynamic route parameters |
| `useSearchParams` | Read and update URL query strings |
| `useNavigate` | Programmatic navigation |

### Custom Hooks

#### `useFetch.js`
A robust data fetching hook that handles:
- Loading, error, and data states
- AbortController to cancel pending requests on unmount
- Prevents memory leaks and race conditions
- Type-safe error handling

```jsx
const { data, loading, error } = useFetch('https://api.example.com/recipes');
```

#### `useLocalStorage.js`
Syncs state with localStorage:
- Reads initial value from localStorage
- Updates localStorage when state changes
- Handles JSON serialization/deserialization
- Error handling for corrupted data

```jsx
const [favorites, setFavorites] = useLocalStorage('favorites', []);
```

#### `useDebounce.js`
Delays state updates for performance:
- Prevents excessive API calls during search
- Configurable delay (default 500ms)
- Returns debounced value

```jsx
const debouncedSearch = useDebounce(searchTerm, 500);
```

## Key Learnings

### 1. Safe Data Fetching with AbortController

```jsx
useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
        try {
            const response = await fetch(url, { 
                signal: abortController.signal 
            });
            // Handle response
        } catch (error) {
            if (error.name === 'AbortError') {
                // Silently exit - component unmounted
                return;
            }
            // Handle real errors
        }
    };
    
    fetchData();
    
    return () => abortController.abort();
}, [url]);
```

**Why?** Prevents state updates on unmounted components and cancels unnecessary requests.

### 2. Event Propagation and Prevention

```jsx
const handleHeartClick = (e) => {
    e.stopPropagation(); // Prevents card click from firing
    toggleFavorite(recipe.idMeal);
};
```

**Why?** Allows nested clickable elements without triggering parent handlers.

### 3. Debounced Search

```jsx
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
    if (debouncedSearch) {
        // API call only runs after user stops typing
        fetchRecipes(debouncedSearch);
    }
}, [debouncedSearch]);
```

**Why?** Prevents API call on every keystroke, reducing server load.

### 4. Container/Presentational Pattern

```jsx
// Container (smart) - handles logic
function RecipesContainer() {
    const [recipes, setRecipes] = useState([]);
    // data fetching logic
    return <RecipesPage recipes={recipes} />;
}

// Presentational (dumb) - handles UI
function RecipesPage({ recipes }) {
    return <RecipeGrid recipes={recipes} />;
}
```

**Why?** Separates concerns, makes components reusable and testable.

## Features Deep Dive

### Search & Filters
- Real-time search with debounce (500ms delay)
- Filter by meal category (Beef, Chicken, Dessert, etc.)
- Filter by cuisine type (Italian, Chinese, Indian, etc.)
- URL sync - share filtered results
- Clear all filters button

### Favorites
- Toggle favorites with heart icon
- Persists between sessions using localStorage
- Accessible from any page via Context API
- Dedicated favorites page

### Recipe Details
- Complete ingredient list with measurements
- Step-by-step cooking instructions
- High-quality recipe images
- Back button for easy navigation

### Responsive Design
- **Mobile**: 2-column recipe grid, horizontal scroll for categories
- **Tablet**: 3-column recipe grid
- **Desktop**: 4-column recipe grid
- Consistent spacing and typography across devices

## Project Structure

```
src/
├── components/
│   ├── containers/           # Logic components (smart)
│   │   ├── HomeContainer.jsx
│   │   ├── RecipesContainer.jsx
│   │   ├── RecipeDetailContainer.jsx
│   │   ├── FavoritesContainer.jsx
│   │   └── AddRecipeContainer.jsx
│   │
│   └── presentational/       # UI components (dumb)
│       ├── Layout.jsx
│       ├── Header.jsx
│       ├── SearchBar.jsx
│       ├── FilterBar.jsx
│       ├── RecipeGrid.jsx
│       ├── RecipeCard.jsx
│       ├── RecipeHeader.jsx
│       ├── IngredientList.jsx
│       ├── Instructions.jsx
│       ├── RecipeForm.jsx
│       ├── FavoriteButton.jsx
│       ├── CategoryCards.jsx
│       ├── LoadingSpinner.jsx
│       ├── ErrorMessage.jsx
│       ├── Button.jsx
│       └── ThemeToggle.jsx
│
├── context/                  # React Context
│   ├── FavoritesContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/                    # Custom hooks
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   └── useDebounce.js
│
├── routes/                   # Routing configuration
│   └── AppRoutes.jsx
│
├── utils/                    # Helper functions
│   └── api.js
│
├── data/                     # Static data
│   └── cuisines.js
│
└── assets/                   # Images and fonts
    └── fonts/
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd recipe-book-app

# Install dependencies
npm install

# Install React Router
npm install react-router-dom

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder is ready to be deployed
```

## API Integration

This app uses [TheMealDB API](https://www.themealdb.com/api.php) for recipe data.

**Endpoints used:**
- Search by name: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- Filter by category: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- Filter by area: `https://www.themealdb.com/api/json/v1/1/filter.php?a={area}`
- Get by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) { /* 1-2 columns */ }

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) { /* 3 columns */ }

/* Desktop */
@media (min-width: 1025px) { /* 4 columns */ }
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/)
3. Or connect your GitHub repo for automatic deployments

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Future Enhancements

- [ ] User authentication
- [ ] Create and share custom recipes
- [ ] Meal planning calendar
- [ ] Shopping list generator
- [ ] Nutrition information
- [ ] Recipe ratings and reviews
- [ ] Print recipe functionality
- [ ] Social media sharing
- [ ] Dark mode toggle
