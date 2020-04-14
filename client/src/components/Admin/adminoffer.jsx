import React from 'react'
import Pane from './sidebar';
import { getList, addItem, deleteItem, updateItem } from '../API/OfferAPI'
//import { adminprofile } from '../API/UserAPI'
import { Redirect } from 'react-router-dom'


export default class AdminOffer extends React.Component{
  constructor() {
    super()
    this.state = {
      offertitle: '',
      offerdescription: '',
      editDisabled: false,
      offers: [],
      redirect: false,
      offerid:''

    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.getAll()
/*    if (sessionStorage.getItem('user')) {
      adminprofile().then(res => {
        this.setState({
          adminid: res.user.adminid
        })
      })

    }
    else {
      this.setState({ redirect: true });
    }*/
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          
          offertitle:'',
          offerdescription:'',
          offers: [...data]
        },
        () => {
          console.log(this.state.offers)
        }
      )
    })
  }

  onSubmit = e => {
    e.preventDefault()

    addItem({offertitle: this.state.offertitle, offerdescription: this.state.offerdescription}).then(() => {
      this.getAll()
    })
    this.setState({
      offertitle: '',
      offerdescription:'',
    })
  }

  onUpdate = e => {
    e.preventDefault()
    updateItem({ offertitle: this.state.offertitle, offerdescription: this.state.offerdescription, offerid: this.state.offerid }).then(() => {
      this.getAll()
    })
    this.setState({
      offertitle: '',
      offerdescription: '',
      editDisabled: ''
      
    })
    this.getAll()
  }

  onEdit = (offerid, e) => {
    e.preventDefault()

    var data = [...this.state.offers]
    data.forEach((offers,index) => {
      if (offers.offerid === offerid) {
        this.setState({
          offerid: offers.offerid,
          offertitle: offers.offertitle,
          offerdescription: offers.offerdescription,
          editDisabled: true
        })
      }
    })
  }

  onDelete = (val, e) => {
    e.preventDefault()
    deleteItem(val)

    var data = [...this.state.offers]
    data.filter(function (offers, index) {
      if (offers.offerid === val) {
        data.splice(index, 1)
      }
      return true
    })
    this.setState({ offers: [...data] })
  }

 


  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/stsignin" />
      )
    }
    return (
      <div>
        <Pane />
        <div className="container" style={{ marginTop : 150}}>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-md-12">
                <label>OFFER TITLE</label>
                <input
                  type="text"
                  className="form-control"
                  id="offertitle"
                  name="offertitle"
                  value={this.state.offertitle || ''}
                  onChange={this.onChange.bind(this)}
                />

                  <label>OFFER DESCRIPTION</label>
                  <input
                    type="text"
                    className="form-control"
                    id="offerdescription"
                    name="offerdescription"
                    value={this.state.offerdescription || ''}
                    onChange={this.onChange.bind(this)}
                  />
                 
              </div>
            </div>
          </div>
          {!this.state.editDisabled ? (
            <button
              type="submit"
              onClick={this.onSubmit.bind(this)}
              className="btn btn-success btn-block"
            >
              Submit
                        </button>
          ) : (
              ''
            )}
          {this.state.editDisabled ? (
            <button
              type="submit"
              onClick={this.onUpdate.bind(this)}
              className="btn btn-primary btn-block"
            >
              Update
                        </button>
          ) : (
              ''
            )}
        </form>
        <div className="table-responsive"> 
        <table className="table">
            <thead>
              <tr>
                  <th className="text-small">Offer ID</th>
                <th className="text-small">Offer Title</th>
                <th className="text-small">Offer Description</th>
                  <th className="text-small">Vendor ID</th>
              </tr>
            </thead>
          <tbody>
            {this.state.offers.map((offers,index) => (

              <tr key={index}>
                <td className="text-left">{offers.offerid}</td>
                <td className="text-left">{offers.offertitle}</td>
                <td className="text-left">{offers.offerdescription}</td>
                <td className="text-left">{offers.vid}</td>
                <td className="text-right">
                  <button
                    href=""
                    className="btn btn-info mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(
                      this,
                      offers.offerid
                    )}
                  >
                    Edit
                                    </button>
                  <button
                    href=""
                    className="btn btn-danger"
                    disabled={this.state.editDisabled}
                    onClick={this.onDelete.bind(
                      this,
                      offers.offerid
                    )}
                  >
                    Delete
                                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </div>
    )
  }

}
