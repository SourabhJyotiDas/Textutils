import React from 'react'

function Alert(props) {
    const upCase = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{height: '50px'}}>
            {props.alertTxt &&
                <div >
                    <div className={` alert alert-${props.alertTxt.types} alert-dismissible fade show`} role="alert">
                        <strong> {upCase(props.alertTxt.types)}  </strong> {props.alertTxt.msg}
                    </div>
                </div>}
        </div>
    )
}

export default Alert