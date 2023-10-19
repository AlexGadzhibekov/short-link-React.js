import Button from "../Button/Button"
import Input from "../Input/Input"
import Title from "../Title/Title"
import ShortLink from "../ShortLink/ShortLink"
import './Form.css'
import { useState } from "react"
export default function Form(){
    const [inputValue, setInputValue] = useState("");
    const [isShortUrl, setIsShortUrl] = useState(false);
    const [text, setText] = useState("");
    const fetchCutLink = async () =>{
        return await fetch(`https://clck.ru/--?url=${inputValue}`)
        .then((data)=> data.text())
        .then((result)=> result)
    }
    const cutLink = async (e) =>{
        e.preventDefault();
        const response = await fetchCutLink();
        setText(response);
        setIsShortUrl(true);
    }
    return(
        <div className="container">
        <Title>Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придется видеть длинные url-адресса, занимающие много места</Title>
        <div className="wrap">
             <Input setInputValue={setInputValue}/>
             <Button  value="Сократить"
                      disabled={inputValue === "" ? true : false}
                      onClick={cutLink}/>
            <ShortLink isShortUrl={isShortUrl} text={text} inputValue={inputValue}/>
        </div>
        </div>
       
    )
}