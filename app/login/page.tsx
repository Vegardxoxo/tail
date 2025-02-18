import LoginForm from "@/app/ui/components/LoginForm";

export default function Login() {
    return (
        <main className={"flex items-center md:h-screen"}>
            <div className={"relative mx-auto flex w-full max-w-[400px] flex-col space-y 2.5 p-4 md:-mt-32 "}>
                <LoginForm/>
            </div>

        </main>

    )
}