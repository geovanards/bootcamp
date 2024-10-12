import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="h-16 w-full absolute top-0 z-50 bg-opacity-50 sm:h-16">
            <nav className="h-full flex justify-center items-center">
                <Link
                    href="/"
                    className="bg-eclipse_logo_black bg-center bg-contain bg-no-repeat w-20 h-20 absolute -mt-2 ml-0 sm:h-14 md:w-14 md:ml-10 lg:ml-20 min-[350px]:right-0 min-[350px]:left-0 min-[350px]:mx-auto min-[200px]:ml-5"
                ></Link>

                <ul className="w-fit flex items-center space-x-1 gap-6">
                    <li className="group">
                        <div className="h-19 w-full flex items-center justify-center">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-white group-hover:text-primary-orange group-hover:duration-200"
                            >
                                Home
                            </Link>
                        </div>
                        <div className="w-0 h-1 bg-white mx-auto rounded-t-lg group-hover:bg-primary-orange group-hover:w-full group-hover:duration-200 group-hover:transition-all"></div>
                    </li>

                    <li className="group">
                        <div className="h-19 w-full flex items-center justify-center">
                            <Link
                                href="#games"
                                scroll={true}
                                className="text-2xl font-bold text-white group-hover:text-primary-orange group-hover:duration-200"
                            >
                                Tickets
                            </Link>
                        </div>
                        <div className="w-0 h-1 bg-white mx-auto rounded-t-lg group-hover:bg-primary-orange group-hover:w-full group-hover:duration-200 group-hover:transition-all"></div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
