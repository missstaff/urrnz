import loadingActions from "./loading-slice";

export const setLoading = (isLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loadingActions.setLoading(isLoading));
        } catch (error) {
            console.log(`Failed to set loading state!\n${error.message}\n${error.stack}`);
        }
    };
};