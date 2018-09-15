import React from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import styled from 'styled-components';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faLock, faTimesCircle);

const IconInput = styled.span`
    position: absolute;
    margin-left: 23px;
    height: 52px;
    display: flex;
    align-items: center;
`;


export default class FormLogin extends React.Component {
    render() {
        const {submit, create, email ,password} = this.props.staticText;
        const {handleChange, handleSubmit, handleRouteToRegister} = this.props;

        return (
            <div className="position-relative"
                 style={{
                     width: '500px'
                 }}>
                <Form className="shadow p-5 rounded bg-white">
                    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.0-9/29511536_1762161747178929_6797966305692918382_n.jpg?_nc_cat=0&oh=648a60a957e62b1ffb4d2262b3774aad&oe=5C2B9108"
                         alt="profile img"
                         className="rounded-circle position-absolute"
                         style={{
                             width: '168px',
                             height: '168px',
                             border: '5px solid #007bff',
                             top: '-84px',
                             right: '166px',
                         }}
                    />
                    <FormGroup style={{
                        marginTop: '6rem',
                        marginBottom: '3rem'
                    }}>
                        <IconInput>
                            <FontAwesomeIcon icon="envelope"/>
                        </IconInput>
                        <Input type="email"
                               name="email"
                               placeholder={email}
                               className="py-4  pl-5 pr-4 mb-3"
                               onChange={handleChange}
                               style={{
                                   borderRadius: '30px',
                                   background: '#eaeaea'
                               }}/>
                        <IconInput>
                            <FontAwesomeIcon icon="lock"/>
                        </IconInput>
                        <Input type="password"
                               name="password"
                               placeholder={password}
                               className="py-4  pl-5 pr-4 mb-3"
                               onChange={handleChange}
                               style={{
                                   borderRadius: '30px',
                                   background: '#eaeaea'
                               }}/>
                    </FormGroup>
                    <Button outline
                            size="lg"
                            color="primary"
                            className="mb-2"
                            onClick={handleSubmit}
                            block
                            style={{
                                borderRadius: '30px',
                            }}>
                        {submit}
                    </Button>
                </Form>

                <footer className="mt-4">
                    <p className="text-center"><a href="" onClick={handleRouteToRegister}>{create}</a></p>
                </footer>
            </div>
        );
    }
}