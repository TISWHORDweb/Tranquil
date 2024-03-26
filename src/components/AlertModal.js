import React from 'react'

function AlertModal(props) {
    return (
        <div>
            <div className=''>
                <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body AlertModal p-3">
                                <center>
                                    <img src={props.img } alt="" />
                                    <p>{props.text}</p>

                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="" data-bs-toggle="modal" data-bs-target={"#"+props.id} ref={props.ref} style={{ display: 'none' }}>
                </button>
            </div>
        </div>
    )
}

export default AlertModal