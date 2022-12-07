import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Box from './Box';
import Input from './Input'
function App() {
  const inputRefa = useRef(null);
  const inputRefb = useRef(null);
  const inputRefc = useRef(null);
  const [Resulta, setResulta] = useState("");
  const [Resultb, setResultb] = useState("");
  const [Resultc, setResultc] = useState("");
  const [users, setUsers] = useState(null);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [string, setString] = useState([]);

  const createPatch = async () => {
    setString({
      name: inputRefa.current.value,
      deskripsi: inputRefb.current.value
    })
    if (inputRefa.current.value != "" || inputRefb.current.value != "") {
      try {

        const response = await axios.patch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            ...string,
          }
        );
        console.log(response);
        setResultc("berhasil menginput data");
        setString([]);


      }
      catch (errror) {
        console.log(errror);
        setResultc("error");
      }
    }
    else {
      setResultc("isi inputan terlebih dahulu");
    }
  };
  const createPut = async () => {
    setString({
      name: inputRefa.current.value,
      deskripsi: inputRefb.current.value
    })
    if (inputRefa.current.value != "" || inputRefb.current.value != "") {
      try {

        const response = await axios.put(
          'https://jsonplaceholder.typicode.com/posts/1',
          {
            ...string,
          }
        );
        console.log(response);
        setResultb("berhasil menginput data");
        setString([]);

      }
      catch (errror) {
        console.log(errror);
        setResultb("error");

      }
    }
    else {
      setResultb("isi inputan terlebih dahulu");
    }
  };
  const createPost = async () => {
    setString({
      name: inputRefa.current.value,
      deskripsi: inputRefb.current.value
    })
    if (inputRefa.current.value != "" || inputRefb.current.value != "") {
      try {

        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          {
            ...string,
          }
        );
        console.log(response);
        setResulta("berhasil menginput data");
        setString([]);


      }
      catch (errror) {
        console.log(errror);
        setResulta("error");
      }
    }
    else {
      setResulta("isi inputan terlebih dahulu");
    }
  };
  const getUsers = async () => {
    try {
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users'
      );
      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const Delete = async () => {

    try {

      const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      console.log(response);
      alert(" berhasil menghapus ");
      setString([]);


    }
    catch (errror) {
      console.log(errror);
    alert("error");
    }
  }

useEffect(() => { getUsers(); }, []);
return (
  <div className="wall">
    <div className="boxtemp">

      {users?.map((user) => (
        <Box name={user.name} key={user.id} email={user.email} address={user.address.city} number={user.zipcode} />
      ))}
    </div>
    <div className="input3">
      <Input fungsi1={setName} fungsi2={setDescription} refa={inputRefa} refb={inputRefb} fungsi3={createPost} result={Resulta}></Input>
      <Input fungsi1={setName} fungsi2={setDescription} refa={inputRefa} refb={inputRefb} fungsi3={createPut} result={Resultb}></Input>
      <Input fungsi1={setName} fungsi2={setDescription} refa={inputRefa} refb={inputRefb} fungsi3={createPatch} result={Resultc}></Input>
      <button onClick={Delete}> Delete</button>
    </div>
    
  </div>
)
}
export default App;