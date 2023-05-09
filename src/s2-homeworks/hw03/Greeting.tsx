import React, {ChangeEvent, KeyboardEvent, MouseEvent, FocusEvent, useState} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void // need to fix any
    addUser: any // need to fix any
    onBlur: any // need to fix any
    onEnter: any // need to fix any
    error: string // need to fix any
    totalUsers: any // need to fix any
    lastUserName?: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input;

    const [inputValue, setInputValue] = useState<string>('');

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(evt.currentTarget.value);
        setInputValue(evt.currentTarget.value);
    }

    const onAddHandler = (evt: MouseEvent<HTMLButtonElement>) => {
        addUser(inputValue);
    }

    const onPressHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
        onEnter(evt);
    }

    const onBlurHandler = (evt: FocusEvent<HTMLInputElement>) => {
        onBlur(evt.currentTarget.value);
    }

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={onChangeHandler}
                        className={inputClass}
                        onKeyDown={onPressHandler}
                        onBlur={onBlurHandler}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={onAddHandler}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
