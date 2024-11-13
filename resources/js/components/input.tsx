export default function Input({ ...props }) {
    const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        input.classList.add('!border-red-400', '!focus:border-red-400', 'focus:ring-red-400');
        const feedback = e.currentTarget.nextElementSibling as HTMLElement;
        feedback.textContent = input.validationMessage;
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        input.classList.remove('!border-red-400', '!focus:border-red-400', 'focus:ring-red-400');
        const feedback = e.currentTarget.nextElementSibling as HTMLElement;
        feedback.textContent = '';
    };

    return (
        <>
            <input
                {...props}
                className="block w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-gray-500 dark:disabled:border-gray-600 dark:disabled:bg-gray-700 dark:disabled:text-gray-400 dark:disabled:shadow-none"
                onInvalid={handleInvalid}
                onChange={handleChange}
            />
            <div className="invalid-feedback mt-2 text-sm text-red-400"></div>
        </>
    );
}
