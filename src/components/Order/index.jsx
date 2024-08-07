export const Order = () =>{
    return(
        <>
            <section class="light">
                <div class="container">
                <h2>Pokoj Úkryt, 450 kč na osobu</h2>
                <div class="columns-2">
                    <div class="column">
                    <img src="/img/pokoj01.jpg" />
                    <p>
                        Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.
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