import { useEffect, useState } from "react";

type updateParentSectionFunction = (key: string, value: any) => void;

interface InputProps {
    updateParentSection: updateParentSectionFunction;
    type: string;
    keyName: string;
    labelName: string;
    placeholder?: string;
    maxLength?: number;
}

const Input: React.FC<InputProps> = ({
    type,
    keyName,
    labelName,
    updateParentSection,
    placeholder,
    maxLength,
}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        updateParentSection(keyName, inputValue);
    }, [inputValue]);

    const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (maxLength === undefined || newValue.length <= maxLength) {
            setInputValue(newValue);
        }
    };

    return (
        <label>
            <h3>{labelName}</h3>
            <input
                type={type}
                value={inputValue}
                onChange={updateValue}
                placeholder={placeholder}
            />
        </label>
    );
};

export default Input;
