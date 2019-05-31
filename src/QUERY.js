const QUERY = {
    parse(query) {
        const searchParams = new URLSearchParams(query);

        const paramsObj = {};

        searchParams.forEach((value, key) => {
            paramsObj[key] = value;
        });

        return paramsObj;
    },

    stringify(queryProps) {
        const searchParams = new URLSearchParams();

        Object.keys(queryProps).forEach(key => {
            searchParams.set(key, queryProps[key]);
        });
        
        return searchParams.toString();
    }
};

export default QUERY;