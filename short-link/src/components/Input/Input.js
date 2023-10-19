import './Input.css'
export default function Input({setInputValue, placeholder}){
    const onChange = (e) => {
        setInputValue(e.currentTarget.value);
      };
    return <input placeholder={placeholder} onChange={onChange}/>
}