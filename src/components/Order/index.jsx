import dayjs from 'dayjs';
import { useState } from 'react';
export const Order = ({choosenRoom}) =>{

    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [countPeople, setCountPeople] = useState()
    const [food, setFood] = useState()
    const [pet, setPet] = useState()
    const [child, setChild] = useState()
    const [wheelchair, setWheelchair] = useState()
    const [email, setEmail] = useState()
    const [telephone, setTelephone] = useState()
    const [atAll, setAtAll] = useState(0)

    const changeFrom = () =>{
        setFromDate(event.target.value)
    }

    const changeTo = () =>{
        setToDate(event.target.value)
    }

    const changeCount = () =>{
        setCountPeople(event.target.value)
    }

    const changeFood = () =>{
        setFood(event.target.value)
    }

    const changePet = () =>{
        setPet(event.target.value)
    }

    const changeChild = () =>{
        setChild(event.target.value)
    }

    const changeWheelchair = () =>{
        setWheelchair(event.target.value)
    }

    const changeEmail = () =>{
        setEmail(event.target.value)
    }

    const changeTelephone = () =>{
        setTelephone(event.target.value)
    }

    const handleClick = () =>{
        event.preventDefault()
        console.log(fromDate + " " + toDate + " " + countPeople + " " + food + " " + pet + " " + child + " " + wheelchair + " " + email + " " + telephone)
        const date1 = dayjs(fromDate)
        const date2 = dayjs(toDate)
        const diffInDays = Math.abs(date1.diff(date2, 'day'));
        const roomCost = choosenRoom.cost * diffInDays * countPeople
        let foodPrice = 0
        if (food === 'Žadné') foodPrice = 0
        else if (food === 'Snídaně') foodPrice = 100
        else if (food === 'Polopenze') foodPrice = 200
        else foodPrice = 300
        const foodCost = foodPrice * countPeople * diffInDays
        const childCost = roomCost/2
        const petCost = roomCost/4
        setAtAll(roomCost + foodCost + childCost + petCost)
    }

    const sendInfo = () =>{
        event.preventDefault()
        fetch('http://localhost:4000/api/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fromDate: fromDate,
              toDate: toDate,
              countPeople: countPeople,
              food: food,
              pet: pet,
              child: child,
              wheelchair: wheelchair,
              email: email,
              telephone: telephone,
              atAll: atAll
            }),
          });
    }

    return(
        <>
            <section class="light">
                <div class="container">
                <h2>{choosenRoom.type}, {choosenRoom.cost} kč na osobu</h2>
                <div class="columns-2">
                    <div class="column">
                    <img src={`http://localhost:4000${choosenRoom.img}`} />
                    <p>
                        {choosenRoom.text}
                    </p>
                    </div>
                    <form onSubmit={handleClick}>
                    <div class="form-fields">
                        <label htmlFor="field1" class="field-label">Od:</label>
                        <input onChange={changeFrom} id="field1" class="field-input" type="date" />

                        <label htmlFor="field2" class="field-label">Do:</label>
                        <input onChange={changeTo} id="field1" class="field-input" type="date" />

                        <label htmlFor="field3" class="field-label">Počet osob:</label>
                        <input onChange={changeCount} id="field1" class="field-input" type="number" />
                        
                        <label htmlFor="select" class="field-label">Stravování:</label>
                        <select onChange={changeFood} id="select" class="field-input">
                        <option>Žadné</option>
                        <option>Snídaně</option>
                        <option>Polopenze</option>
                        <option>Plná penze</option>
                        </select>

                        <label htmlFor="check1" class="field-label"> Domácí mazlíček:</label>
                        <input onChange={changePet} id="check1" class="field-input" type="checkbox" />

                        <label htmlFor="check2" class="field-label">Přistýlka pro dítě:</label>
                        <input onChange={changeChild} id="check2" class="field-input" type="checkbox" />

                        <label htmlFor="check3" class="field-label">Bezbariérový přístup:</label>
                        <input onChange={changeWheelchair} id="check3" class="field-input" type="checkbox" />

                        <label htmlFor="check4" class="field-label">E-mail:</label>
                        <input onChange={changeEmail} id="check4" class="field-input" type="email" />

                        <label htmlFor="check5" class="field-label">Telefon:</label>
                        <input onChange={changeTelephone} id="check5" class="field-input" type="tel" />
                    </div>
                    <p class="cost">Celková cena za pobyt: {atAll} Kč</p>
                    <button type='submit' class="wide">Podívat se na cenu</button>
                    <button onClick={sendInfo} class="wide">Odeslat poptavku</button>
                    </form>
                </div>
                </div>
            </section>
        </>
    )
}