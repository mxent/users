import Input from '@/components/input';
import Select from '@/components/select';
import Main from '@/layouts/main';

export default function Create() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (e.currentTarget.checkValidity() === false) {
            return;
        }

        const data = new FormData(e.currentTarget);
        fetch('/api/users', {
            method: 'POST',
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Main>
            <div className="container mx-auto px-8 py-4">
                <div className="mb-3 text-xl font-bold text-black dark:text-white">Create</div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-3">
                            <label htmlFor="first_name" className="mb-2 block">
                                First Name
                            </label>
                            <Input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="last_name" className="mb-2 block">
                                Last Name
                            </label>
                            <Input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="mb-2 block">
                            Status
                        </label>
                        <Select name="status" id="status" required>
                            <option value="">Select</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Select>
                    </div>
                    <div className="mb-3 pt-3 text-end">
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </Main>
    );
}
