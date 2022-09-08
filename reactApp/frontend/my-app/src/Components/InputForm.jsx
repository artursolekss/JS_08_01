export default function InputForm({ type, value, onChange, id, autocomplete }) {
    return (
        <div class="flex flex-col items-start">
            <input type={type} id={id} className="border-gray-300 focus:border-indigo-300 focus:ring 
        focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full" autocomplete={autocomplete}
                value={value} onChange={onChange} />
        </div >
    )
}