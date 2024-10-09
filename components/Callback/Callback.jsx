import axios from 'axios'
import { useState } from 'react'
import classes  from './Callback.module.sass'

function Callback() {

    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [message, setMessage] = useState()

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleValueChange(event) {
        setValue(event.target.value);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        var data = {
            name: name,
            value: value,
            message: message,
        }

        axios.post(process.env.API_URL + '/api/callback', data).then(response => {
            alert(response.data.text)

            setName('')
            setValue('')
            setMessage('')
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className={'container'}>
            <div className={classes.block}>
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <h2 className={classes.title}>Связаться с нами</h2>
                        <form onSubmit={ event => handleSubmit(event) } className="row">
                            <div className="col-md-6">
                                <input type="text" value={name} className={classes.input} placeholder={'Введите имя'} required onChange={ event => handleNameChange(event)} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" value={value} name={'value'} className={classes.input} placeholder={'Как с вами связаться?'} required onChange={ event => handleValueChange(event)} />
                            </div>
                            <div className="col-md-12">
                                <textarea name="message" value={message} id="message" className={classes.textarea} placeholder={'Введите сообщение'} required onChange={ event => handleMessageChange(event)}></textarea>
                            </div>
                            <div className="col-md-12">
                                <button type={'submit'} className={classes.btn}>Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Callback