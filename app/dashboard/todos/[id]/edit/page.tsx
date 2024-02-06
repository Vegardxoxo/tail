import {notFound} from 'next/navigation';

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        //TODO
    ]);

    if (!invoice) {
        notFound();
    }


    return (
        <main>
            <Form invoice={invoice} customers={customers}/>
        </main>
    );
}