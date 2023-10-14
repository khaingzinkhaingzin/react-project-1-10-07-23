const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}

const LearnProps = () => {
  return (
    <div>
      <Person 
        name={'John'} 
        lastName={'Doe'} 
        age={25} 
      />
      <Person 
        name={'Mary'} 
        lastName={'Doe'} 
        age={24} 
      />
    </div>
  );
}

export default LearnProps;
