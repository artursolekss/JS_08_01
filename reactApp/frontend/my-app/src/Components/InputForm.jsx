export default function InputForm(props) {

    // { type, value, onChange, id, autocomplete, randomAttribute }) {

    return (
        <div className="flex flex-col items-start">
            <input type={props.type} id={props.id} className="border-gray-300 focus:border-indigo-300 focus:ring 
        focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
                autoComplete={props.autocomplete}
                value={props.value} onChange={props.onChange} />
        </div >
    )
}