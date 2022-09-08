export default function LoginForm({ children }) {
    return (
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <form>
                {children}
            </form>
        </div>
    )
}