import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { location:'',country:'',gender:'',age:'',vis_wuhan:'',
    from_wuhan:'',symptom1:'',symptom2:'',symptom3:'',symptom4:'',symptom5:'',
    symptom6:'',hosp_vis:'',sym_on:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const {location,country,gender,age,vis_wuhan,
    from_wuhan,symptom1,symptom2,symptom3,symptom4,symptom5,
    symptom6,hosp_vis,sym_on} = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Location : ${location}
	Country : ${country}
	Gender : ${gender}
	Age : ${age}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='location'>Location</label>
		<input
			name='location'
			placeholder='Location'
			value = {this.state.location}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='country'>Country</label>
		<input
			name='country'
			placeholder='Country'
			value={this.state.country}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='gender'>Gender</label>
		<input
			name='gender'
			placeholder='Gender'
			value={this.state.gender}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Check Prediction</button>
		</div>
	</form>
	)
}
}

export default Form;

