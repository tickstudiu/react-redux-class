import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import {CalText} from './calcalator.text';
import ContainerMiddlePage from '../../layouts/ContainerMiddlePage';

class Calculator extends Component {

    handleAdd = () => {
        this.props.addValue();
    }

    handleSub = () => {
        this.props.subValue()   ;
    }

    render() {
        const { handleAdd, handleSub } = this;
        const { value } = this.props.cal;
        const staticText = tools.checkLanguage(CalText);

        return (
            <ContainerMiddlePage>
                <p>{staticText.test}</p>
                <button onClick={handleAdd}>ADD</button>
                <p>{value}</p>
                <button onClick={handleSub}>SUB</button>
            </ContainerMiddlePage>
        );
    }
}

const mapStateToProps = ({lang, cal}) => {
    return {
        lang,
        cal
    }
};

export default connect(mapStateToProps, action)(Calculator);
