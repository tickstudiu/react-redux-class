import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from '../../redux/actions';

import { Button } from 'reactstrap';
import ContainerMiddlePage from '../../layouts/ContainerMiddlePage';

class Calculator extends Component {

    handleAdd = () => {
        this.props.addValue();
    }

    handleSub = () => {
        this.props.subValue();
    }

    render() {
        const { handleAdd, handleSub } = this;
        const { value, type } = this.props.cal;

        return (
            <ContainerMiddlePage>
                <Button color="primary" size="sm" outline onClick={handleAdd}>ADD</Button>
                <p className="mx-4 lead" >{type}: {value}</p>
                <Button color="danger" size="sm" outline onClick={handleSub}>SUB</Button>
            </ContainerMiddlePage>
        );
    }
}

const mapStateToProps = ({ lang, cal }) => {
    return {
        lang,
        cal
    }
};

export default connect(mapStateToProps, action)(Calculator);
