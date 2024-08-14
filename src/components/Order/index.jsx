import dayjs from 'dayjs';
import { useState } from 'react';
export const Order = ({choosenRoom}) =>{

    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)
    const [countPeople, setCountPeople] = useState(0)
    const [food, setFood] = useState('Žadné')
    const [pet, setPet] = useState()
    const [child, setChild] = useState()
    const [wheelchair, setWheelchair] = useState()
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [atAll, setAtAll] = useState(0)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [buttonClass, setButtonClass] = useState('wide wide--grey');
    const [inputDateClass, setInputDateClass] = useState('field-input');
    const [inputCountClass, setInputCountClass] = useState('field-input');
    const [inputInfoClass, setInputInfoClass] = useState('field-input');

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
        const date1 = dayjs(fromDate)
        const date2 = dayjs(toDate)
        const diffInDays = date2.diff(date1, 'day');
        if(fromDate === null || toDate === null){
            document.querySelector('.mistake').textContent = "Zadejte datum příjezdu a odjezdu."
            setInputDateClass('field-input border--red')
        }else if(diffInDays <=0){
            document.querySelector('.mistake').textContent = "Datum odjezdu nemůže být dříve než datum příjezdu."
            console.log(diffInDays)
            setInputDateClass('field-input border--red')
        }else if(countPeople <= 0){
            document.querySelector('.mistake').textContent = "Zadejte správný počet lidí."
            setInputDateClass('field-input')
            setInputCountClass('field-input border--red')
        }else if(telephone === '' || email === ''){
            document.querySelector('.mistake').textContent = "Zadejte osobní údaje."
            setInputDateClass('field-input')
            setInputCountClass('field-input')
            setInputInfoClass('field-input border--red')
        }else{
            const roomCost = choosenRoom.cost * diffInDays * countPeople
            let foodPrice = 0
            if (food === 'Plná penze') foodPrice = 300
            else if (food === 'Snídaně') foodPrice = 100
            else if (food === 'Polopenze') foodPrice = 200
            else foodPrice = 0
            const foodCost = foodPrice * countPeople * diffInDays
            const childCost = roomCost/2
            const petCost = roomCost/4
            setAtAll(roomCost + foodCost + childCost + petCost)
            setIsButtonDisabled(false);
            setButtonClass('wide')
            setInputDateClass('field-input')
            setInputCountClass('field-input')
            setInputInfoClass('field-input')
            document.querySelector('.mistake').textContent = ""
        }
    }

    const sendInfo = () =>{
        event.preventDefault()
        fetch('http://localhost:4000/api/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              room: choosenRoom.type,
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
        document.querySelector('.light').classList.add('hidden')
        document.querySelector('.second').classList.remove('hidden')
    }
    const restart = () =>{
        location.reload()
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
                        <input onChange={changeFrom} id="field1" class={inputDateClass} type="date" />

                        <label htmlFor="field2" class="field-label">Do:</label>
                        <input onChange={changeTo} id="field2" class={inputDateClass} type="date" />

                        <label htmlFor="field3" class="field-label">Počet osob:</label>
                        <input onChange={changeCount} id="field3" class={inputCountClass} type="number" />
                        
                        <label htmlFor="select" class="field-label">Stravování:</label>
                        <select onChange={changeFood} id="select" class="field-input">
                        <option selected>Žadné</option>
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
                        <input onChange={changeEmail} id="check4" class={inputInfoClass} type="email" />

                        <label htmlFor="check5" class="field-label">Telefon:</label>
                        <input onChange={changeTelephone} id="check5" class={inputInfoClass} type="tel" />
                    </div>
                    <p class="cost">Celková cena za pobyt: {atAll} Kč</p>
                    <p className="mistake"></p>
                    <button type='submit' class="wide">Podívat se na cenu</button>
                    <button onClick={sendInfo} class={buttonClass} disabled={isButtonDisabled}>Odeslat poptavku</button>
                    </form>
                </div>
                </div>
            </section>
            <section className="light second hidden">
            <div className="result">
                <h2>Vaše objednávka:</h2>
                <p><span>Typ pokoje:</span>  {choosenRoom.type}<br></br>
                <span>Od:</span> {fromDate}<br></br>
                <span>Do:</span> {toDate}<br></br>
                <span>Počet osob:</span> {countPeople}<br></br>
                <span>Stravování:</span> {food}<br></br>
                <span>Celková cena za pobyt:</span> {atAll} Kč<br></br>
                   Děkujeme, že jste si rezervovali pokoj v našem hotelu. Brzy vás bude kontaktovat manažer.
                </p>
                <button onClick={restart} class="wide">Vrátit se na rezervační formulář</button>
            </div>
            </section>
        </>
    )
}