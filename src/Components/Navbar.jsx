import React from 'react';

export default function Navbar() {
    return (
        <>
            <div className='bg-black text-center h-16 text-white font-bold flex justify-between items-center px-4 gap-4 flex-nowrap flex-row-reverse md:flex-row'>
                <div className='flex flex-nowrap justify-center items-center gap-2'>

                    {/*For off canvas view*/}
                    <div>
                        <button className='bg-cyan-500 px-4 py-2 rounded-lg'></button>
                    </div>
                    {/*For off canvas view*/}

                    <div>Youtube</div>
                </div>
                <div className='flex flex-nowrap justify-center items-center gap-2'>
                    <div>Search</div>
                    <div>Mic</div>
                </div>
                <div className='flex flex-nowrap justify-center items-center gap-2'>
                    <div>Post</div>
                    <div>Notification</div>
                    <div>User</div>
                </div>

               </div>
        </>
    )
}