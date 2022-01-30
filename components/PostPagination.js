import Link from "next/link"

const PostPagination = ({ totalPages, currentPage, directoryUrl, homeUrl }) => {

    const prevDisabled = currentPage !== '1' ? false : true ;
    const nextDisabled = totalPages ? parseInt(currentPage, 10) === totalPages : false;

    const prevPageUrl = !prevDisabled ? `/${directoryUrl}/${parseInt(currentPage, 10) -1}` : homeUrl;
    const nextPageUrl = !nextDisabled ? `/${directoryUrl}/${parseInt(currentPage, 10) + 1}` : `/${directoryUrl}/${parseInt(currentPage, 10)}`;


    return (
        <ol className="flex flex-row m-4 p-2">
            <li className="mx-5">
            <Link href={prevPageUrl}>
                <a className="font-bold text-blue-700">Previous</a>
            </Link>
            </li>
            <li className="mx-5 text-gray-500">
                Page {currentPage} of {totalPages}
            </li>
            <li className="mx-5">
                {nextDisabled && <span className="font-thin text-blue-200">Next</span>}
                {!nextDisabled && (
                <Link href={nextPageUrl}>
                    <a className="font-bold text-blue-700">Next</a>
                </Link>
                )}
            </li>
        </ol>
    )
}

export default PostPagination;