import React from "react";
import todos from "@/app/lib/placeholder-data";
import Form from "@/app/ui/Todos/create-form";


export default function Page() {
    return (
        <main>
            <h1 className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
                Dashboard
            </h1>
            <div className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
                <Form todos={todos}/>
            </div>
            <div
                className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            </div>

        </main>
    )
}

