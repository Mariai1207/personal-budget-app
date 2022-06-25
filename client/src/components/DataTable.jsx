import React from 'react'
import DataList from './DataList'


export default function DataTable({state}) {
  
  return (
    <div className="row justify-content-center container">
        <div className="form-group col md-6">
            <table className="table">
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <DataList response={state}/>
            </table>

        </div>
    </div>

  )
}
