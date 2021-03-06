export const fetchData = async (pageInfo) => {
    const { pageNum, endCursor, pageSize } = pageInfo;
    const pageNumner = pageNum || Math.ceil(endCursor / pageSize);
    const response = await fetch(
        // `https://skyforceapi.azurewebsites.net/api/cargoflightdetails?currentPage=${pageNumber}&pageSize=${pageSize}`
        `https://sxgfhbcma2.execute-api.us-east-2.amazonaws.com/default/cargoFlightList?currentPage=${pageNumner}&pageSize=${pageSize}`
    )
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (res) {
            return res;
        })
        .catch((error) => {
            console.log(`Error in fatch data :  ${error}`);
        });

    if (response !== undefined && response.data && response.data.result) {
        const { result } = response.data;
        if (result) {
            return result;
        }
    }
    return [];
};
