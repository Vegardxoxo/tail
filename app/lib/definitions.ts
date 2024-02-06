export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
}

export type Todo = {
    id: string,
    title: string,
    description: string,
    status: string,
    user_id: string,
    created_at: string,
    updated_at: string,
}