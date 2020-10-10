import React, {useState , useEffect} from  'react';
import NameListItem from './NameListItem';

function NameList(){

  const [nameList, setNameList] = useState( [ 
    {
      id:1,
      name: { title: 'mr',first: 'brad',last: 'gibson'},
      location: {city: 'kilcoole'},
      email: 'brad.gibson@example.com',
      dob: { date: '1993-07-20T09:44:18.674Z',age: 26 },
      picture: { medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'},
    },
    {
      id:2,
      name: { title: 'mr',first: 'bbb',last: 'nnn'},
      location: {city: 'eee'},
      email: 'ample.com',
      dob: { date: '1993-01-20T09:44:18.674Z',age: 27 },
      picture: { medium: 'https://randomuser.me/api/portraits/med/men/60.jpg'},
  
    },
    {
      id: 3,
      name: { title: 'mrs',first: 'www',last: 'errr'},
      location: {city: 'vvffr'},
      email: 'mple.com',
      dob: { date: '1999-05-20T09:44:18.674Z',age: 26 },
      picture: { medium: 'https://randomuser.me/api/portraits/med/women/7.jpg'},

    },
  ]);

useEffect(()  => {
  fetch('https://randomuser.me/api').then((response) => {
    return response.json();

  }).then(responseData => {
       console.log(responseData);
  });
});
  

const nameListComponent = () => {
    return nameList.map((aName) => {
     return(
        
            <NameListItem 
               key= {aName.id}
               name= {aName.name.first + ` ` + aName.name.last}
               city = {aName.location.city} 
               email= {aName.email}
               birthday={aName.dob.date}
               avatar={aName.picture.medium}
            />
     );
    });
};

const addUserHandler =() => {
  const newUser = {
    id: new Date(),
      name: { title: 'mrs',first: 'www',last: 'errr'},
      location: {city: 'vvffr'},
      email: 'mple.com',
      dob: { date: '1999-05-20T09:44:18.674Z',age: 26 },
      picture: { medium: 'https://randomuser.me/api/portraits/med/women/7.jpg'},
  };

  setNameList((nameList)=> [...nameList, newUser]);
};
   

return (
     <React.Fragment>
       <div className= "container mt-4">
         <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
         <ul className="list-group">{nameListComponent()}</ul>
         </div>
     </React.Fragment>

    );
}

export default NameList;