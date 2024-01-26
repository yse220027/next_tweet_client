"use client"

import ClickButton from "@/app/components/ClickButton";
import FormError from "@/app/components/FormError";
import Input from "@/app/components/Input";
import LinkButton from "@/app/components/LinkButton";
import NavbarLink from "@/app/components/NavbarLink";
import { SignIn } from "@/app/services/UserService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";


interface ErrorProps {
    auth: string;
}

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<ErrorProps>({ auth: "" });
    const router = useRouter();

    const auth = async () => {
        const result = await SignIn({ email, password });
        (result?.error) && setError(result.error)
        if (result.access_token) {
            // redirect top page
            router.push('/');
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

                <FormError message={error?.auth} />
            </div>

            <div>
                <ClickButton
                    label="Sign in"
                    onClick={auth}
                    disabled={isDisable()}
                />

                <LinkButton href="/auth/regist" label="Register" />
            </div>
        </div>
    );
}

export default LoginPage;