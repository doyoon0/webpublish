export function TextInput({ item, value, handleChange }) {
    const { type, name, msg } = item;
    return (
        <>
            <input type={type}
                name={name}
                value={value}
                placeholder={msg}
                onChange={(e) => { handleChange(e)}} //발생한 이벤트 받아서 부모에게 그대로 전달
            />

        </>
    );
}