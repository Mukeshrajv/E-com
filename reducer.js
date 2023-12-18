const intitalState = {
    post: [],
};

    function reducer(post = intitalState, action) {
        switch (action.type) {
            case 'post':
                return {
                    ...post,
                    post: action.payload,
                };
            default:
                return post;
        }
    }
export default reducer;