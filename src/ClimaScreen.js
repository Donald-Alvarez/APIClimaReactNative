import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';


const ClimaScreen = () => {
    const [climaData, setClimaData] = useState(null);
    // Lista de países que deseo mostrar
    const countries = ['Nicaragua', 'Honduras', 'Costa Rica', 'El Salvador', 'Panama',];
  
}