# React Unsplash App

A single-page React application that utilizes the Unsplash JavaScript SDK to display and search for images from the Unsplash API.

## Demo Project Link

You can access the deployed version of this project [link](https://unsplash-ruddy.vercel.app/).

## Installation

1. Clone the repository: `git clone` [https://github.com/dev-devendra21/react-unsplash-app.git](https://github.com/dev-devendra21/unsplash.git)

2. Install dependencies: `npm install`

## Configuration

Before running the app, you need to obtain an API key from Unsplash.

1. Sign up or log in to your Unsplash account: [Unsplash Developer](https://unsplash.com/developers)
2. Create a new application to generate an API key.
3. Copy your API key and paste it in the `.env` file: REACT_APP_UNSPLASH_ACCESS_KEY=your-access-key

## Usage

To start the development server and run the app: `npm start`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Features

- Search for images using keywords.
- Display search results in a Flex layout.
- Hover on an image to view description in tooltip.
- Download the image.
- Pagination.

## Downloading Images

To download an image, follow these steps:

1. Click on the image you want to download.
2. Click on the Download Icon to download your image in jpg format .

## Credits

- [Unsplash](https://unsplash.com) for providing the API and SDK.
- [React](https://reactjs.org/) for the JavaScript library.
- [react lazy load image component](https://www.albertjuhe.com/react-lazy-load-image-component/) for lazy load the image.
- [react loader spinner](https://mhnpd.github.io/react-loader-spinner/docs/intro/) for add a loader during data fetching.
- [react icons](https://react-icons.github.io/react-icons/) for add icons in project.
