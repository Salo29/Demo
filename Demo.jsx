import * as React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';
import TableComp from '../TableComp';

const Demo = () => {
  const [name, setName] = React.useState('');
  console.log('🚀 ~ Demo ~ name:', name);
  const [password, setPassword] = React.useState('');
  console.log('🚀 ~ Demo ~ password:', password);
  const [tableData, setTableData] = React.useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const temp = await axios.get(url);
      console.log(temp.data, 'temppppppp');
      setTableData(temp.data);
    } catch {
      console.log('error');
    }
  };

  return (
    <>
      <form>
        <div>
          <FormLabel>Username</FormLabel>
          <TextField onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <FormLabel>Password</FormLabel>
          <TextField onChange={(e) => handlePasswordChange(e)} />
        </div>
      </form>
      <Button onClick={handleSubmit}>SUBMIT</Button>
      <TableComp tableData={tableData} />
    </>
  );
};

export default Demo;
