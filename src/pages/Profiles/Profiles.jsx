import './Profiles.sass'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/actions/user.actions';
import { useState } from "react";
export default function Profile(){
    const token = useSelector((state) => state.auth.token);
    const firstname = useSelector((state) => state.user.firstname);
    const lastname = useSelector((state) => state.user.lastname); // Utilisez 'lastname' avec une minuscule ici
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfile(token));
      }, []);
    return(<> {token != null ? <p>Connecté avec l'utilisateur : {firstname} {lastname}</p> : null}</>)

}