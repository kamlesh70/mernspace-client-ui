
import { redirect } from 'next/navigation';
import CustomerForm from './components/customerForm';
import { getSession } from '@/lib/session';

export default async function Checkout({
    searchParams,
}: {
    searchParams: { restaurantId: string };
}) {
    const session = await getSession();

    const sParams = new URLSearchParams(searchParams);
    const existingQueryString = sParams.toString();

    sParams.append('return-to', `/checkout?${existingQueryString}`);

    if (!session) {
        redirect(`/login?${sParams}`);
    }

    return <CustomerForm />;
}
