import React, {useState, useEffect} from 'react'
import './TestComponent.css'

function TestComponent (props: {name: string}) {
    const [age, setAge] = useState(23)
    useEffect(() => {
        console.log('component was created');
    }, [])

  useEffect(()=>{
    console.log('age has been updated to: ' + age);
    
  }, [age])
    

    return <div className="TestComponent">
    Olá, {props.name}, {age}
    <button onClick={()=> {
        setAge(age +1)
   //     state.age ++
    }}>
        +
    </button>
</div>
}

export default TestComponent