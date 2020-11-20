import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class TapRoomControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage = 'kegList',
      masterKegList = [],
      selectedKeg = null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.currentPage != 'kegList') {
      this.setState({
        currentPage: 'kegList',
      });
    } else {
      this.setState({
        currentPage: 'newKeg',
      });
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'kegList'
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(x => x.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.currentPage === 'newKeg') {
      currentlyVisibleState =
        <NewKegForm
          onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
          {currentlyVisibleState}
          <button type="button" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TapRoomControl;
