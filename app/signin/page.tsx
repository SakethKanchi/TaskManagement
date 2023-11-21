"use client";
import React from 'react'
import { SignIn } from '@clerk/nextjs';

function page() {
    return <div className='flex item-center justify-center h-full'>
        <SignIn />
    </div>
}

export default page