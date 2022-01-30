import Link from "next/link";

export default function Pagination({ totalPages, currentPage, baseUrl }) {

    const prevDisabled = currentPage !== '1' ? true : false ;
    const nextDisabled = totalPages ? parseInt(currentPage, 10) === totalPages : false;

  
    let prevPageUrl = "/";
    let nextPageUrl = "/";

    if (baseUrl) {
      console.log(baseUrl)
      if (baseUrl === 'parking') {
        console.log('here')
        prevPageUrl = 
        currentPage === '2'
        ? `/`
        : `/${baseUrl}/page/${parseInt(currentPage, 10) - 1}`;

      } else {
        prevPageUrl = 
        currentPage === '2'
        ? `/${baseUrl}`
        : `/${baseUrl}/page/${parseInt(currentPage, 10) - 1}`;
      }
      nextPageUrl = `/${baseUrl}/page/${parseInt(currentPage, 10) + 1}`;  
    } else {
      prevPageUrl = 
      currentPage === '2'
      ? '/' 
      : `/page/${parseInt(currentPage, 10) - 1}`;

      nextPageUrl = `/page/${parseInt(currentPage, 10) + 1}`;

    }

  return (
    <ol className="flex flex-row m-4 p-2">
      <li className="mx-5">
        {!prevDisabled && <span className="font-thin text-blue-200">Previous page</span>}
        {prevDisabled && (
          <Link href={prevPageUrl}>
            <a className="font-bold text-blue-700">Previous page</a>
          </Link>
        )}
      </li>
      <li className="mx-5 text-gray-500">
        Page {currentPage} of {totalPages}
      </li>
      <li className="mx-5">
        {nextDisabled && <span className="font-thin text-blue-200">Next page</span>}
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a className="font-bold text-blue-700">Next page</a>
          </Link>
        )}
      </li>
    </ol>
  );
}