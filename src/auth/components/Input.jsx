import '../styles/Input.scss'

export const Input = ({ name, tipo} ) => {
    return (
        <div className="form__group">
            <input 
                type="text" 
                className="form__input" 
                id="name" 
                placeholder={name} required=""
                type={tipo} 
            />
            <label htmlFor="name" className="form__label">{name}</label>
        </div>
    )
}
