import React,{ useEffect, Component, useState } from 'react';
import './index1.js';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function NewForm(props){
    const [location, setLocation] = useState("")
    const [locationList, setLocationList] = useState([])
    const [country, setCountry] = useState("")
    const [countryList, setCountryList] = useState([])
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [symptomList1, setSymptomList1] = useState([])
    const [symptomList2, setSymptomList2] = useState([])
    const [symptomList3, setSymptomList3] = useState([])
    const [hospVis, setHospVis] = useState("")
    const [symOn, setSymOn] = useState("")
    const [prediction, setPrediction] = useState(false)
    const [pvalue, setPvalue] = useState("")

    useEffect(()=>{
        console.log("Getting Symptom List")
        fetch('/symptom1')
        .then(res => { 
            console.log(res)
            return res.json()
        }).then( arr => {
            console.log(arr)
            setSymptomList1(arr)
        }).then( res =>{
            console.log(res)
            return fetch('/symptom2')
        }).then(res => {
            console.log(res)
            return res.json()
        }).then( arr => {
            console.log(arr)
            setSymptomList2(arr)
        }).then( res =>{
            console.log(res)
            return fetch('/symptom3')
        }).then(res => {
            console.log(res)
            return res.json()
        }).then( arr => {
            console.log(arr)
            setSymptomList3(arr)
        }).then( res =>{
            console.log(res)
            return fetch('/location')
        }).then(res => {
            console.log(res)
            return res.json()
        }).then( arr => {
            console.log(arr)
            setLocationList(arr)
        }).then( res =>{
            console.log(res)
            return fetch('/country')
        }).then(res => {
            console.log(res)
            return res.json()
        }).then( arr => {
            console.log(arr)
            setCountryList(arr)
        })
    },[])

    const handleSymptom1Change = (event) =>{
        fetch('/symptom1' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symptom1:event.target.value })
        }).then(res=>{
            console.log(res)
        })
    }

    const handleSymptom2Change = (event) =>{
        fetch('/symptom2' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symptom2:event.target.value })
        }).then(res=>{
            console.log(res)
        })
    }

    const handleSymptom3Change = (event) =>{
        fetch('/symptom3' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symptom3:event.target.value })
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

    const handleSubmit = (event) =>{
        setPvalue(2)
        fetch('/predict')
        .then(res => {
            console.log("Prediction ongoing")
            console.log(res)
            return res.json()
        }).then( val => {
            console.log(val)
            console.log(typeof(val))
            setPvalue(val)
            setPrediction(true)
            console.log(pvalue)
        })
    }
    const options1 = symptomList1.map( symptom1 => {return (<option value={symptom1} key={symptom1}> {symptom1} </option>)})
    const options2 = symptomList2.map( symptom2 => {return (<option value={symptom2} key={symptom2}> {symptom2} </option>)})
    const options3 = symptomList3.map( symptom3 => {return (<option value={symptom3} key={symptom3}> {symptom3} </option>)})
    const Loptions = locationList.map( location => {return (<option value={location} key={location}> {location} </option>)})
    const Coptions = countryList.map( country => {return (<option value={country} key={country}> {country} </option>)})
    return(   
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Covid-19 Severity Prediction</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        <link rel="stylesheet" href="index.css" />
        <div id="loading">
        <div id="spinner" />
        </div>
        <div id="magnify">
        <h1 onclick="closemagnify()"><i className="fas fa-times" /></h1>
        <div id="img_here" />
        </div>
        <header id="header" className="animated slideInDown" style={{animationDelay: '1.8s'}}>
        <table>
            <tbody><tr>
                <td id="logo">#StopTheSpread</td>
                <td id="navigation">
                <a href="#bio">About</a>
                <a href="#form">Form</a>
                <a href="#contact">Contact</a>
                </td>
            </tr>
            </tbody></table>
        </header>

        <table id="top_part">
        <tbody><tr>
            <td id="about" className="animated slideInLeft" style={{animationDelay: '2s'}}>
                <h1>Covid-19 Severity Prediction</h1>
                <h3 style={{color:'#008080'}}>Help slow the outbreak.<br/>Identify those at risk sooner.</h3> 
                <button className="btn_one"><a href="#form" style={{textDecoration:'none', color:'black'}}>Predict</a></button>
            </td>
            <td id="rightImage" className="animated jackInTheBox" style={{animationDelay: '2.2s'}} />
            </tr>
        </tbody></table>
        
        <div id="bio">
        <h1>About</h1>
        <p>
        The novel coronavirus (COVID-19) has caused a significant damage to the human society globally. The number of positive cases is growing every day in many countries especially in India. People around the world are putting their best efforts in understanding the pattern of the outbreak and finding the cure.
        </p>
        <p>
        Our application aims to fill the void of the traditional healthcare system, using machine learning algorithms to simultaneously process healthcare and travel data along with other parameters of COVID-19 positive patients,
        to predict the most likely outcome of a patient, based on their symptoms, travel history, and the delay in reporting the case by identifying patterns from previous patient data. 
        
        </p>
        </div>
        
        <div id="form">
        <h1>Form</h1>
            <div id="inner_div">
                <table id="inner_table">
                <tbody><tr>
                    <td>
                        <div>
                        <label htmlFor='name' style={{fontSize:'1.17em', marginRight:'10px'}}>Name</label>
                        <input type="text" placeholder="Enter Name" />
                        <br></br>
                        <label htmlFor='email' style={{fontSize:'1.17em', marginRight:'15px'}}>Email</label>
                        <input type="email" placeholder="Enter Email" />
                        <br></br>
                        <label htmlFor='Age' style={{fontSize:'1.17em', marginRight:'27px'}}>Age</label>
                        <input type="text" placeholder='Enter Age' onChange = {handleAgeChange}/>
                        
                        <h3><label htmlFor='gender'>Gender</label></h3>
                        <select class="dropdown" id="Select Instances" onChange={handleGenderChange}>
                            <option value="">Select</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                
                        <h3>Select Location:</h3>
                        { locationList.length === 0 ? <h4>Not available</h4> : 
                        <select class="dropdown" id="Select Instances" onChange={handleLocationChange}>
                            <option value="">Select</option>
                            {Loptions}
                        </select>
                        }
                        
                        <h3>Select Country:</h3>
                        { countryList.length === 0 ? <h4>Not available</h4> : 
                        <select class="dropdown" id="Select Instances" onChange={handleCountryChange}>
                            <option value="">Select</option>
                            {Coptions}
                        </select>
                        } 
                        
                        <h3>Select First Symptom:</h3>
                        { symptomList1.length === 0 ? <h4>Not available</h4> : 
                        <select class="dropdown" id="Select Instances" onChange={handleSymptom1Change}>
                            <option value="">Select</option>
                            {options1}
                        </select>
                        }

                        <h3>Select Second Symptom:</h3>
                        { symptomList2.length === 0 ? <h4>Not available</h4> : 
                        <select class="dropdown" id="Select Instances" onChange={handleSymptom2Change}>
                            <option value="">Select</option>
                            {options2}
                        </select>
                        }

                        <h3>Select Third Symptom:</h3>
                        { symptomList3.length === 0 ? <h4>Not available</h4> : 
                        <select class="dropdown" id="Select Instances" onChange={handleSymptom3Change}>
                            <option value="">Select</option>
                            {options3}
                        </select>
                        }
                        <br></br>
                        <br></br>
                        <button className="btn_one" onClick={handleSubmit}>Check Prediction</button>
                            <div>{pvalue === 2 ? <div><Loader type="ThreeDots" color="#008080" height={60} width={50}/></div> : <p></p>}</div>
                            <div>{
                            prediction === true ? 
                            <div>{
                                pvalue === 1 ? <h3 id="positive">You have high risk of mortality for Covid-19</h3>
                                : <h3 id="negative">You have a mild infection of Covid-19</h3>
                                }</div> : <div></div>
                        }</div>
                        </div>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>      
        </div>
        <div id="contact">
        <h1>Contact</h1>
        <table>
            <tbody><tr>
                <td>
                <div id="inner_div">
                    <table id="inner_table">
                    <tbody><tr>
                        <td>
                        <i className="fas fa-phone" /> &nbsp; +91 80 28611880/1</td>
                        </tr>
                        <tr>
                        <td><i className="fas fa-at" /> &nbsp; ashwinik.01rn17cs022@gmail.com</td>
                        <td><i className="fas fa-at" /> &nbsp; hima.1rn17cs034@gmail.com</td>
                        </tr>
                        <tr>
                        <td><i className="fas fa-at" /> &nbsp; himadri.1rn17cs035@gmail.com</td>
                        <td><i className="fas fa-at" /> &nbsp; impana.1rn17cs037@gmail.com</td>
                        </tr>
                        <tr>
                        <td><i className="fas fa-map-marker-alt" />
                            <div id="address">
                            RNSIT<br />
                            Channasandra,<br />
                            Banglore, India
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <a className="social" href="https://www.covid19india.org" target="_blank"><i class="fas fa-chart-line"></i></a>
                            <a className="social" href="https://twitter.com/explore/tabs/covid-19" target="_blank"><i className="fab fa-twitter" /></a>
                            <a className="social" href="https://www.instagram.com/rnsit_covid_helpdesk/" target="_blank"><i className="fab fa-instagram" /></a>
                            <a className="social" href="https://www.rnsit.ac.in/" target="_blank"><i class="fas fa-university"></i></a>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </td>
                </tr>
            </tbody>
        </table>
        </div>
        {/* <div id="footer">
        made on earth by a human <br /> <a href="https://imfunniee.github.io">imfunniee</a>
        </div> */}
    </div>
    )       
}

export default NewForm;