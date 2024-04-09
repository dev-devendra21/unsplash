import { createApi } from 'unsplash-js';

const ACCESS_TOKEN = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

const unsplash = createApi({
    accessKey: ACCESS_TOKEN,
});


export default unsplash
