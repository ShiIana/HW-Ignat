import React, {useState, KeyboardEvent} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!');
    } else {
        addUserCallback(name);
        setError('');
    }
}

export const pureOnBlur = (name: string, setError: any) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!');
    }
}

export const pureOnEnter = (evt: KeyboardEvent<HTMLInputElement>, addUser: any) => {
    if (evt.code === 'Enter') {
        addUser(evt.currentTarget.value);
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (name: string) => {
        setName(name);
        error && setError('');
    }
    const addUser = (name: string) => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = (name: string) => {
        pureOnBlur(name, setError)
    }

    const onEnter = (evt: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(evt, addUser)
    }

    const totalUsers: number = users.length;
    const lastUserName: string = users[users.length - 1].name;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
