import React, {Component} from 'react';
import './modalEdit.css'
class ModEdit extends Component {
    constructor(props) {
        super(props);
        const {chosenUser: {id, name, username, phone, email, website}} = this.props;
        this.state = {id, name, username, phone, email, website};
    }

    checkName = (e) => this.setState({name: e.target.value});
    checkUserName = (e) => this.setState({checkUserName: e.target.value});
    checkPhone = (e) => this.setState({phone: e.target.value});
    checkEmail = (e) => this.setState({email: e.target.value});
    checkWebsite = (e) => this.setState({website: e.target.value});

    render() {
        const {modalSaveClose} = this.props;
        const {name, username, phone, email, website} = this.state;
        return (
            <div className={'modal-wrapper'}>
                <div className={'modal-form'}>
                    <h2>Edit {name} CARD </h2>
                    <div className={'modal-inp-wrapper'}><span className={'fz-25'}>Name:</span><input
                        onInput={this.checkName} className={'modal-inp'} defaultValue={name} type="text"/></div>
                    <div className={'modal-inp-wrapper'}><span className={'fz-25'}>Username:</span><input
                        onInput={this.checkUserName} className={'modal-inp'} defaultValue={username} type="text"/></div>
                    <div className={'modal-inp-wrapper'}><span className={'fz-25'}>Phone:</span><input
                        onInput={this.checkPhone} className={'modal-inp'} defaultValue={phone} type="phone"/></div>
                    <div className={'modal-inp-wrapper'}><span className={'fz-25'}>@mail:</span><input
                        onInput={this.checkEmail} className={'modal-inp'} defaultValue={email} type="email"/></div>
                    <div className={'modal-inp-wrapper'}><span className={'fz-25'}>Website:</span><input
                        onInput={this.checkWebsite} className={'modal-inp'} defaultValue={website} type="text"/></div>
                    <div className={'modal-btn-wrapper'}>
                        <button onClick={() => modalSaveClose('save', this.state)}
                                className={'btn-edit-user-card'}>save</button>
                        <button onClick={() => modalSaveClose()} className={'btn-close-user-card'}>close</button>
                </div>
                </div>
            </div>
        );
    }
}

export default ModEdit;