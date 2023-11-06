import './Profiles.sass'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Profile(){
    const token = useSelector((state) => state.auth.token);
    console.log(token);
    return(<> {token != null ? <p>Connecté</p> : null}</>)
}