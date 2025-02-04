import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-500 text-white">
            <h1 className="text-xl font-bold cursor-pointer hover:bg-slate-100 hover:text-black px-2 p-1 rounded-md transition-colors duration-300 ease-in">
                <Link to="/">Human Growth centre</Link>
            </h1>

            <div className='flex space-x-10'>
                <ul className="flex justify-center items-center space-x-4">
                    <li className='cursor-pointer transition-colors duration-300 ease-in hover:bg-gray-100 px-2 p-1 rounded-md hover:text-black'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='cursor-pointer transition-colors duration-300 ease-in hover:bg-gray-100 px-2 p-1 rounded-md hover:text-black'>
                        <Link to="/exercise">Excercise</Link>
                    </li>
                    <li className='cursor-pointer transition-colors duration-300 ease-in hover:bg-gray-100 px-2 p-1 rounded-md hover:text-black'>
                        <Link to="/yoga">Yoga</Link>
                    </li>
                </ul>

                <div>
                    {/* Show Sign-In Button if Not Signed In */}
                    <SignedOut>
                        <SignInButton className="text-white bg-green-500 px-2 p-1 rounded-md cursor-pointer" />
                    </SignedOut>

                    {/* Show User Profile Button if Signed In */}
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" className="cursor-pointer" />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
