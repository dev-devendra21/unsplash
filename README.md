# PixLibre — React Unsplash Image Explorer

PixLibre is a single-page React application that uses the **Unsplash JavaScript SDK** to search, explore, and download images from the Unsplash API.

The application provides a simple and responsive image discovery experience with search, pagination, lazy loading, and image download functionality.

## Demo

**Live Application:**
https://pixlibre.vercel.app/

**GitHub Repository:**
https://github.com/dev-devendra21/unsplash

## Features

* **Image Search** — Search for images using keywords through the Unsplash SDK.
* **Image Gallery** — Display search results in a responsive Flexbox-based layout.
* **Image Details** — Hover over an image to view its description through a tooltip.
* **Image Download** — Download selected images in JPG format.
* **Pagination** — Navigate through multiple pages of search results.
* **Lazy Loading** — Images are loaded progressively to improve the browsing experience.
* **Loading State** — Displays a loader while image data is being fetched.
* **Responsive UI** — Designed to work across different screen sizes.

## Tech Stack

* React.js
* JavaScript
* Unsplash JavaScript SDK
* HTML5
* CSS3
* React Icons
* React Lazy Load Image Component
* React Loader Spinner
* Git & GitHub
* Vercel

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/dev-devendra21/unsplash.git
```

### 2. Navigate to the project

```bash
cd unsplash
```

### 3. Install dependencies

```bash
npm install
```

## Configuration

The application requires an Unsplash API access key.

### 1. Create an Unsplash Developer Account

Visit:

https://unsplash.com/developers

### 2. Create an Application

Create an application from the Unsplash Developer dashboard to obtain an API access key.

### 3. Configure the Environment Variable

Create a `.env` file in the project root:

```env
REACT_APP_UNSPLASH_ACCESS_KEY=your-access-key
```

Replace `your-access-key` with your Unsplash access key.

> **Important:** Do not commit your `.env` file or expose your API credentials in the Git repository.

## Usage

Start the development server:

```bash
npm start
```

Open the application in your browser:

```text
http://localhost:3000
```

## Downloading Images

To download an image:

1. Search for an image using a keyword.
2. Select the image you want to download.
3. Use the **Download** icon.
4. The image will be downloaded in JPG format.

## Project Highlights

This project demonstrates practical React development concepts including:

* Component-based React development
* Third-party SDK integration
* API-driven data fetching
* Search functionality
* Pagination
* Lazy loading
* Loading states
* Responsive layouts
* Image downloading
* Environment variable configuration
* Asynchronous API handling

## Credits

* **Unsplash** — API and JavaScript SDK
  https://unsplash.com/

* **React** — Frontend library
  https://react.dev/

* **React Lazy Load Image Component** — Lazy loading images
  https://www.albertjuhe.com/react-lazy-load-image-component/

* **React Loader Spinner** — Loading indicator
  https://mhnpd.github.io/react-loader-spinner/

* **React Icons** — Icon library
  https://react-icons.github.io/react-icons/

## Author

**Devendra Chandana**

GitHub:
https://github.com/dev-devendra21/unsplash
