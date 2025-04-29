import { useState } from "react";

const TextBox = () => {
    const [bgColor, setBgColor] = useState('indigo')

 return <div>
    <article
        title="párrafo principal"
        style={{ backgroundColor: bgColor }}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum expedita aperiam repellendus neque dolorem mollitia quibusdam eveniet reprehenderit quae, quisquam consequuntur debitis tenetur sit velit quos dicta accusantium ipsum.
    </article>
    <button
        onClick={() => setBgColor(bgColor === 'indigo' ? 'tomato' : 'indigo')}
    >
        Pulsa para modificar
    </button>
 </div>
}

export default TextBox;