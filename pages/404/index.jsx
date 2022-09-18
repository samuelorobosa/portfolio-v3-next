import Link from "next/link";

function Custom404 () {
    return (
        <div className="text-center mt-12 py-9">
            <h1 className="text-8xl font-extrabold mb-9">Oops!</h1>
            <p className="font-mono">
                {`Something's`} missing.
            </p>
            <p className="font-mono mb-9">
                The page {`you're`} looking for does not exist or might have been removed but allow me to guide you.
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