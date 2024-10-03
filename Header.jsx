import React from 'react';

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4 bg-blue-25 text-blue-600'>
            <a href="/" className='flex items-center gap-2'>
                <h1 className='text-2xl'><span className='font-bold text-gray-600'>Scribe</span> <span className='font-bold text-blue-600'>AI</span></h1>
            </a>
            <div className='gap-4 flex items-center '>
                <a href="/" className='flex items-center gap-2 py-2 px-4 rounded-lg bg-white text-blue-400 border border-blue-400 hover:bg-blue-200 transition duration-300 ease-in-out shadow-sm'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}