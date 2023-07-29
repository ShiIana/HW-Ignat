import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        let timer = setInterval(() => {
            setDate(new Date(restoreState('hw9-date', Date.now())));
        }, 1000);

        setTimerId(Number(timer));
    }

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    }

    const onMouseEnter = () => setShow(true);
    const onMouseLeave = () => setShow(false);

    const formatTime = new Intl.DateTimeFormat('ru-RU', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })

    let formatDate = new Intl.DateTimeFormat('ru-RU', {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    })

    const stringTime = formatTime.format(date);
    const stringDate = formatDate.format(date);

    const stringDay = date.toLocaleDateString('en-US', {weekday: 'long'});
    const stringMonth = date.toLocaleDateString('en-US', {month: 'long'});

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-date'}>{stringDate}</span>,{' '}
                            <span id={'hw9-month'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
