export const statusTypes = {
    loading : 'loading',
    errored : 'errored',
    loaded : 'loaded'
}

export default function ProductList({
    status, ...otherProps
}) {
    if(status === statusTypes.loading) {
        return <Loading />;
    }

    if(status === statusTypes.errored) {
        return <Error message="Failed to load data"/>;
    }

    return // ...
}

// problema, non deve verificarsi il caso in cui isLoading e hasError siano entrambi true