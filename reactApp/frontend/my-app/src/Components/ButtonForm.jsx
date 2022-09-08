export default function ButtonForm({ children, onClick }) {
    return (
        <div className="flex items-center justify-end mt-4">
            <button type="button" onClick={onClick}
                className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 false ml-4">
                {children}
            </button>
        </div>
    )
}