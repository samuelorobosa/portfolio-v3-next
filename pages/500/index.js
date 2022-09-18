import Link from "next/link";

function Custom500 () {
    return (
        <div className="text-center mt-12 py-9">
            <h1 className="text-8xl font-extrabold mb-9">Oops!</h1>
            <p className="font-mono">
                {`Something's`} went wrong with this page.
            </p>
            <p className="font-mono mb-9">
               Have a cup of coffee and it will be fixed in a bit.
            </p>

            <Link href="/">
                <button className="bg-blue-600 transition duration-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Go Home
                </button>
            </Link>
        </div>
    )
}

export default Custom404;