import Button from '@/components/button';
import Main from '@/layouts/main';
import { Link } from '@inertiajs/react';

export default function Index() {
    return (
        <Main>
            <div className="container mx-auto px-8 py-4">
                <div className="text-xl font-bold text-black dark:text-white">Users</div>
                <div className="text-end">
                    <Link href="/users/create">
                        <Button variant="primary">Create</Button>
                    </Link>
                </div>
            </div>
        </Main>
    );
}
