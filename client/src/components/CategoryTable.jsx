import React from 'react'
import '../App.scss';

export default function CategoryList({state}) {

  return (
    <div className="row justify-content-center container w-50">
        <div className="form-group col md-1">
            <table className="table">
                <thead>
                    <tr>
                        <th>Your categories</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((category)=>{
                        return(
                                <tr >
                                    <td>{category.name}</td>
                                </tr>
                        )
                    })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}
