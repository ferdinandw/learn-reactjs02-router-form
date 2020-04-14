import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Item from './item';
import Axios from 'axios';

class index extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        Axios.get('http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination ')
        .then (response =>{
            this.setState({data: response.data})
        })
        //axios
        //setelah data dapat
        //data akan di simpan ke state
    }

    render() {
        let tampilkanWisata = [];

        tampilkanWisata = this.state.data.map((item, index) =>{
            return <Item key={index} data={item}>{index}</Item>
        })



        return (
            <div>
               <h1>Data Wonderlink</h1>
               <Row>
                {tampilkanWisata}
               </Row>
            </div>
        )
    }
}

export default index