import React, {useState, KeyboardEvent} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (value: string) => void, addUserCallback: (value: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!');
    } else {
        addUserCallback(name);

        setName('');
    }
}

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!');
    }
}

export const pureOnEnter = (evt: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (evt.key !== 'Enter') return;
    addUser();
}

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
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    }

    const onBlur = (name: string) => {
        pureOnBlur(name, setError);
    }

    const onEnter = (evt: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(evt, addUser);
    }

    const totalUsers: number = users.length;
    const lastUserName: string = users.length ? users[users.length - 1].name : '';

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
