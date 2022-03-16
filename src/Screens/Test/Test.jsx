import React, { useState } from 'react'


const user = {
    name: "zahid",
    class: "11",
    occupation: "developer"
}

let key;

for (key in user) {
    console.log(user[key]);
}

const arr = [8, 8, 6, 6, 55, 6, 5, 65, 6, 56, 5, 6, 5, 65, 6, 5]
// for (val of arr) { console.log(val) }

const Test = () => {

    const [enterData, setEnterData] = useState({
        salutation: "mr",
        ocupation: ""
    })




    return (
        <>
            <div className="main">
                {/* <label for="salutation">Choose a salutation:</label>
                <select className="first__name" name="salutation" onChange={SelectEvent} value={enterData.salutation}>
                    <option value="mr">Mr.
                    </option>
                    <option value="ms">
                        Ms.</option>
                    <option value="mrs">Mrs.</option>
                </select>
                <h3>you select "{enterData.salutation}"</h3>
                <hr />
                <label for="ocupation">Choose your occupation</label>

                <select className="first__name" name="ocupation" onChange={SelectEvent} value={enterData.ocupation}>
                    <option value="web">WEB DEVELOPER
                    </option>
                    <option value="app">
                        APP DEVELOPER</option>
                    <option value="auto">AUMATION ENGINEER</option>
                </select>
                <h3>you select "{enterData.ocupation}"</h3>
                <hr /> */}


            </div>
        </>
    )
}

export default Test