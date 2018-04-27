import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contacts: [],
    isLoading: true
  }

  fetchData() {
    fetch('https://randomuser.me/api?results=100')
    .then(response => response.json())
    // results is the array with the data
    .then(data => data.results.map(user => (
      // returning objects
      {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        location: `${user.location.city}`,
        picture: `${user.picture.medium}`,
        gender: `${user.gender}`
      }
    )))
    .then(contacts => this.setState({
      contacts,
      isLoading: false
    }))
    .catch(error => console.log('unexpected error' ,error));
  }

  componentDidMount() {
    this.fetchData();
  }

 
  render() {

    const { contacts } = this.state;
    const styleSpanMale = {
      color: 'blue',
      fontWeight: '700'
    }
    const styleSpanFemale = {
      color: 'pink',
      fontWeight: '700'
    }


    // const contactcs = this.state.contacts;
    
    return (
      <div className="App">
        {
          // contacts.map(contact => {
          //   return (
          //     <Person 
          //       key={contact.username}
          //       name={contact.name} 
          //       picture={contact.picture}  
          //       location={contact.location}
          //     />
          //   )
          // })

          contacts.length > 0 ? contacts.map(contact => {
            return (
              <div className='person' key={contact.username}>
                <h1 style={ 
                  contact.gender === 'male' ? 
                    styleSpanMale 
                    : 
                    styleSpanFemale}>{contact.name}</h1>
                <p>{contact.location}</p>

                <p style={ 
                  contact.gender === 'male' ? 
                    styleSpanMale 
                    : 
                    styleSpanFemale} >
                  {contact.gender}
                </p>


                <img src={contact.picture} alt="someone fun"/>
              </div>
            )
          }) : null

        }
      </div>
    );
  }
}


// const Person = props => {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.location}</p>
//       <img src={props.picture} alt="someone cool"/>
//     </div>
//   );
// }


export default App;
