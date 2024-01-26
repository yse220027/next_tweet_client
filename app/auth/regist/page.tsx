"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";
import Link from "next/link";
import { useState } from "react";
import { registUser } from "@/app/services/UserService";
import { useRouter } from "next/navigation";
import ClickButton from "@/app/components/ClickButton";
import FormError from "@/app/components/FormError";
import LinkButton from "@/app/components/LinkButton";

const RegistPage = () => {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState({name: "", email: "", password: ""});

    const regist = async () => {
        console.log(name, email, password)
        // APIにデータ送信（ユーザ登録）
        const result = await registUser({ name, email, password });
        if (result.error) { 
            // エラー表示
            setError(result.error);
            console.log(result.error)
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
                <FormError message={error?.name} />
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <FormError message={error?.email} />
                <Input type="password" placeholder="Password" onChange={setPassword} />
                <FormError message={error?.password} />
            </div>

            <div>
                <ClickButton
                    label="Sign up"
                    onClick={regist}
                    disabled={isDisable()}
                />

                <LinkButton href="/auth/login" label="Sign in" />
            </div>
        </div>
    );
}

export default RegistPage;