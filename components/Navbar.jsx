import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<nav className='flex justify-between items-center shadow-md p-5 bg-red-600'>
				<div className='p-2 hover:bg-red-400 rounded-sm cursor-pointer'>
					<svg
						className='w-6 h-6 text-white'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</div>
				<div className='p-2 hover:bg-red-400 rounded-sm cursor-pointer'>
					<Link href='/'>
						<svg
							className='w-6 h-6 text-white'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
					</Link>
				</div>
				<div className='p-2 hover:bg-red-400 rounded-sm cursor-pointer'>
					<svg
						className='w-6 h-6 text-white'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
