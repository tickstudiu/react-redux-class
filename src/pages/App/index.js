import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import {AppText} from './app.text';
import ContainerMiddlePage from '../../layouts/ContainerMiddlePage';
import MsgBox from '../../layouts/MsgBox';

class App extends Component {
    render() {
        const staticText = tools.checkLanguage(AppText);

        return (
            <ContainerMiddlePage>
                <MsgBox ProfileImg="https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.0-9/29511536_1762161747178929_6797966305692918382_n.jpg?_nc_cat=0&oh=648a60a957e62b1ffb4d2262b3774aad&oe=5C2B9108" ProfileAlt="profile image">
                    <h1 className="display-4">{staticText.helloW}</h1>
                </MsgBox>
            </ContainerMiddlePage>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(App);
