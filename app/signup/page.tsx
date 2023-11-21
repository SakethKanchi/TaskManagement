"use client";
import React from 'react'
import { SignUp } from '@clerk/nextjs';
function page() {
    return <div className='flex item-center justify-center h-full w-full'>
        <SignUp />
    </div>
}

export default page