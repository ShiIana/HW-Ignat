import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (evt: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onBlur: () => void // need to fix any
    onEnter: (evt: KeyboardEvent<HTMLInputElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
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
    const inputClass = error ? s.errorInput : s.input// need to fix with (?:)

    const onBlurHandler = () => {
        onBlur();
    }

    const onEnterHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
        onEnter(evt);
    }

    const setNameCallbackHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(evt);
    }

    const addUserHandler = () => {
        addUser();
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
                        onChange={setNameCallbackHandler}
                        className={inputClass}
                        onKeyDown={onEnterHandler}
                        onBlur={onBlurHandler}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUserHandler}
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
