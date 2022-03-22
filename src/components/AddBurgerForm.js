import React from 'react';

class AddBurgerForm extends React.Component {

    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()


    createBurger = e =>{
        e.preventDefault()
        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || 0),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        
        this.props.addBurger(burger)
        e.currentTarget.reset()
    }

    render(){
        return(
            <form className='burger-edit' onSubmit={this.createBurger}>
                <input ref={this.nameRef} name='name' placeholder='Name' type='text' autoComplete='off' />
                <input ref={this.priceRef} name='price' placeholder='Price' type='text' autoComplete='off' />
                <select ref={this.statusRef} name='status' className='status'> 
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Убрать Бургер</option>
                </select>
                <textarea ref={this.descRef} name='desc' placeholder='Desc'/>
                <input ref={this.imageRef} name='image' placeholder='Image' type='text' autoComplete='off' />
                <button type='submit'>+ Добавить в Меню</button>
            </form>
            
        )
    }

}

export default AddBurgerForm