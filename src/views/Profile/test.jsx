import React from 'react';
import axios from 'axios';

function test() {

  const [Test, setTest] = useState([]);

  const getInfo = () => {
    axios.get('https://test.test/api/test').then((res) => {
      setTest(res.Test)
    })
  }

  return (
    <div>
      <div className='card'>
        <div className='card-header'>Personal Info</div>
        <div className="class-body">
          {
            Test.map((info) => (

            ));
          }
        </div>
      </div>
    </div>
  )
}

export default test
