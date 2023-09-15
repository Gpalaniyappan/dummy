import createApp from '@shopify/app-bridge';

const config = {
    // The client ID provided for your application in the Partner Dashboard.
    apiKey: "api_key",
    // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
    host: new URLSearchParams(location.search).get("host"),
    forceRedirect: true
};

const app = createApp(config);
