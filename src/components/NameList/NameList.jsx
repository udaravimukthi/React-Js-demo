import React from  'react';
import NameListItem from './NameListItem';

function NameList(){
  const nameList = [ 
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
];

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

return (
     <React.Fragment>
         <h1>Name List</h1>
         <hr />
         <ul>{nameListComponent()}</ul>
     </React.Fragment>

    );
}

export default NameList;