"use client"

import ClickButton from "@/app/components/ClickButton";
import Input from "@/app/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const router = useRouter();

    const auth = async () => {
        const url = "http://localhost:8000/api/auth";
        console.log(email, password)

        const response = await fetch(url,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
        if (response.ok) {
            const result = await response.json();
            console.log(result.access_token);
            if (result.access_token) {
                // redirect top page
                router.push('/');
            }
        }
    }

    const isDisable = () => !(email && password);

    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex text-2xl justify-center font-bold">
                <FaUser className="mt-1 me-3" />
                Sign in
            </h1>

            <div>
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <Input type="password" placeholder="Password" onChange={setPassword} />
            </div>

            <div>
            <ClickButton
                    label="Sign up"
                    onClick={auth}
                    disabled={isDisable()}
                />


                <Link
                    href="/auth/regist"
                    className="
                    flex justify-center
                    w-full bg-gray-200
                    text-gray-600 
                    hover:bg-gray-300
                    py-2 px-4 my-3
                    rounded-lg
                    ">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;