import React from 'react';
import { useState } from 'react';

const Accordion = ({ content, title }) => {
	const [show, setShow] = useState(false);

	const showFAQ = () => {
		setShow(!show);
	};

	return (
		<>
			<div
				onClick={() => showFAQ()}
				className={
					show
						? 'flex items-center pb-2 justify-between pt-2 rounded-md p-2 bg-gray-100'
						: 'flex items-center pb-2 justify-between pt-2 hover:bg-gray-100 rounded-md p-2'
				}
			>
				<h4 className='text-xl container'>{title}</h4>
				{show ? (
					<svg
						className='w-5 h-5 items-center'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5 15l7-7 7 7'
						/>
					</svg>
				) : (
					<svg
						className='w-5 h-5 items-center'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 9l-7 7-7-7'
						/>
					</svg>
				)}
			</div>

			{show && <p>{content}</p>}
		</>
	);
};

export default Accordion;
