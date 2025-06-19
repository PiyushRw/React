import Card from "./Card";
import Button from "./button";
import Student from "./students";
import Nav from "./Nav";
function App() {
  return (<>
  <Nav/>
  <Student name="john snow" age={30} isStudent={true}/>
   <Card/>
   <Card/>
   <Button/>
   
  </>
 
  );
}

export default App;
