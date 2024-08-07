export const Order = ({choosenRoom}) =>{
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
                    <form>
                    <div class="form-fields">
                        <label htmlFor="field1" class="field-label">Od:</label>
                        <input id="field1" class="field-input" type="date" />

                        <label htmlFor="field1" class="field-label">Do:</label>
                        <input id="field1" class="field-input" type="date" />

                        <label htmlFor="field1" class="field-label">Počet osob:</label>
                        <input id="field1" class="field-input" type="number" />
                        
                        <label htmlFor="select" class="field-label">Stravování:</label>
                        <select id="select" class="field-input">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        </select>

                        <label htmlFor="check1" class="field-label"> Domácí mazlíček:</label>
                        <input id="check1" class="field-input" type="checkbox" />

                        <label htmlFor="check1" class="field-label">Přistýlka pro dítě:</label>
                        <input id="check1" class="field-input" type="checkbox" />

                        <label htmlFor="check1" class="field-label">Bezbariérový přístup:</label>
                        <input id="check1" class="field-input" type="checkbox" />

                        <label htmlFor="check1" class="field-label">E-mail:</label>
                        <input id="check1" class="field-input" type="email" />

                        <label htmlFor="check1" class="field-label">Telefon:</label>
                        <input id="check1" class="field-input" type="tel" />
                    </div>
                    <p class="cost">Celková cena za pobyt: 1000 Kč</p>
                    <button class="wide">Odeslat poptávku</button>
                    </form>
                </div>
                </div>
            </section>
        </>
    )
}