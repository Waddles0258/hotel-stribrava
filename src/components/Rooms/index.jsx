import { Room } from "../Room"

export const Rooms = () =>{
    return(
        <>
              <section class="dark">
                <div class="container">
                <h2>Naše pokoje</h2>
                <p>
                    Vyberte si, který z našich pokojů je pro vás ten pravý.
                </p>
                <div class="cards-row">
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                </div>
                </div>
            </section>

        </>
    )
}