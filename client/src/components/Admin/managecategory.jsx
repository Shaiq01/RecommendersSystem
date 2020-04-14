import React from 'react'
import { getList, addItem, deleteItem, updateItem } from '../API/CategoryAPI'
import AdminPanel from './sidebar'

export default class ManageCategory extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            categoryname: '',
            editDisabled: false,
            categories: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll()
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
                    categoryname: '',
                    categories: [...data]
                },
                () => {
                    console.log(this.state.categories)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addItem({categoryname : this.state.categoryname}).then(() => {
            this.getAll()
        })
        this.setState({
            categoryname: ''
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.categoryname, this.state.id).then(() => {
            this.getAll()
        })
        this.setState({
            categoryname:'',
            editDisabled: ''
        })
    }

    onEdit = (categoryid, e) => {
        e.preventDefault()

        var data = [...this.state.categories]
        data.forEach((categories, index) => {
            if (categories.catid === categoryid) {
                this.setState({
                    id: categories.catid,
                    categoryname: categories.categoryname,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.categories]
        data.filter(function (categories, index) {
            if (categories.catid === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ categories: [...data] })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 150 }}>
            <AdminPanel/>
            <div className="col-md-12">
                <form>
                    <div className="form-group">
                        <label htmlFor="categoryname">Category name</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="categoryname"
                                    name="categoryname"
                                    placeholder="Category Name"
                                    value={this.state.categoryname || ''}
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
                <table className="table">
                        <thead>
                            <tr>
                                <th className="text-small">Category ID</th>
                                <th className="text-small">Category Name</th>
                            </tr>
                        </thead>
                    <tbody>
                        {this.state.categories.map((categories, index) => (
                            <tr key={index}>
                                <td className="text-left">{categories.catid}</td>
                                <td className="text-left">{categories.categoryname}</td>
                                <td className="text-right">
                                    <button
                                        href=""
                                        className="btn btn-info mr-1"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(
                                            this,
                                            categories.catid
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
                                            categories.catid
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
        )
    }
}
