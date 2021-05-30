import React,{ useEffect, Component, useState } from 'react'

function NewForm(props){
    const [location, setLocation] = useState("")
    const [country, setCountry] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [symptomList, setSymptomList] = useState([])
    const [hospVis, setHospVis] = useState("")
    const [symOn, setSymOn] = useState("")
    useEffect(()=>{
        console.log("Getting Symptom List")
        fetch('/symptom-list')
        .then(res => { 
            console.log(res)
            return res.json()
        } ).then( arr => {
            console.log(arr)
            setSymptomList(arr)
        } )
    },[])

    const handleChange = (event) =>{
        fetch('/symptom-list' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symptom:event.target.value })
        }).then(res=>{
            console.log(res)
        })
    }


    const handleLocationChange = (event) => {
        fetch('/location' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location:event.target.value })
        }).then(res=>{
            setLocation(event.target.value)
            console.log(res)
            console.log(location)
        })
    }

    const handleCountryChange = (event) => {
        fetch('/country' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country:event.target.value })
        }).then(res=>{
            setCountry(event.target.value)
            console.log(res)
            console.log(country)
        })
    }

    const handleGenderChange = (event) => {
        fetch('/gender' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gender:event.target.value })
        }).then(res=>{
            setGender(event.target.value)
            console.log(res)
            console.log(gender)
        })
    }

    const handleAgeChange = (event) => {
        fetch('/age' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ age:event.target.value })
        }).then(res=>{
            setAge(event.target.value)
            console.log(res)
            console.log(age)
        })
    }

    const handleClick = (event) =>{
        fetch('/predict').then(
            res=>{
                console.log(res)
            }
        )
    }
    const options = symptomList.map( symptom => {return (<option value={symptom} key={symptom}> {symptom} </option>)})
    return(
        <div>
            <label htmlFor='location'>Location</label>
            <input
                name='location'
                placeholder='Location'
                value = {location}
                onChange={handleLocationChange}
            />
            <h5>Select a Symptom:</h5>
            { symptomList.length === 0 ? <h4>Not available</h4> : 
            <select id="Select Instances" onChange={handleChange}>
                <option value="">Select</option>
                {options}
            </select>
            }
            <label htmlFor='country'>Country</label>
            <input
                name='country'
                placeholder='Country'
                value = {country}
                onChange={handleCountryChange}
            />
            <label htmlFor='gender'>Gender</label>
            <select id="Select Instances" onChange={handleGenderChange}>
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
            <input
                name='age'
                placeholder='Age'
                value = {age}
                onChange={handleAgeChange}
            />
            <button onClick={handleClick}>Check Prediction</button>
        </div>
        
    )
}

export default NewForm;