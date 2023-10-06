import React from 'react'

import * as Styles from './ProductMainStyle'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function ProductMain() {
    return (
        <>
            <Styles.Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#!" className='bread-item'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#!">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni repellat illo, veniam dolorum quia facilis labore nulla eius assumenda tempore saepe eligendi voluptatum soluta cupiditate nisi sunt quidem mollitia!
                </h3>
            </Styles.Container>
        </>
    )
}
