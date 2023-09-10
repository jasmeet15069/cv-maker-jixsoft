const TrimURL = (url: string) => {
    if (url.startsWith("http://")) {
        url = url.slice(7);
    } else if (url.startsWith("https://")) {
        url = url.slice(8);
    }

    if (url.startsWith("www.")) {
        url = url.slice(4);
    }

    return url;
};

export default TrimURL;
