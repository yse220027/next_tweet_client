"use client"

import Image from "next/image";
import imageMe from '@/public/images/me.png'

const ProfilePage = () => {
    return (
        <div className="mx-auto w-1/2">
            <h1 className="text-2xl text-center font-bold">Profile</h1>
            <div className="flex justify-center p-3">
                <Image
                    src={imageMe}
                    className="rounded-full h-36 w-36"
                    alt=""
                />
            </div>
            <div className="flex justify-center p-3">
                Test
            </div>
        </div>
    );
}

export default ProfilePage;