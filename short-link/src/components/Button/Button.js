import './Button.css'
export default function Button({value, disabled, onClick}){
    return <button disabled={disabled} onClick={onClick}>{value}</button>
}