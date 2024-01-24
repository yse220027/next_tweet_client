"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";
import Link from "next/link";
import { useState } from "react";
import { registUser } from "@/app/services/UserService";
import { useRouter } from "next/navigation";
import ClickButton from "@/app/components/ClickButton";

const RegistPage = () => {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const regist = async () => {
        console.log(name, email, password)
        // APIにデータ送信（ユーザ登録）
        const result = await registUser({ name, email, password });
        if (result.error) {
            console.log(result.error)
            // エラー表示
        } else {
            // トップページにリダイレクト
            router.replace('/')
        }
    }

    const isDisable = () => !(name && email && password);

    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex text-2xl justify-center font-bold">
                <FaUser className="mt-1 me-3" />
                Register
            </h1>

            <div>
                <Input type="name" placeholder="Your Name" onChange={setName} />
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <Input type="password" placeholder="Password" onChange={setPassword} />
            </div>

            <div>
                <ClickButton
                    label="Sign up"
                    onClick={regist}
                    disabled={isDisable()}
                />

                <Link
                    href="/auth/login"
                    className="
                flex justify-center
                w-full bg-gray-200
                text-gray-600 
                hover:bg-gray-300
                py-2 px-4 my-3
                rounded-lg
                ">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default RegistPage;