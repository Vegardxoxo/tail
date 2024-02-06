import {Todo} from '@/app/lib/definitions';
import Link from 'next/link';
import {Button} from "@mui/base";

export default function Form({todos}: { todos: Todo[] }) {
    return (
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Enter a task
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="amount"
                                name="amount"
                                type="text"
                                placeholder="What do you have to do?"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Add task</Button>
            </div>
        </form>
    );
}
