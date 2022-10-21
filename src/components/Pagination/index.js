import React from "react";
import './Pagination.css';
import Button from "../Button";

const Pagination = (props) => {
    const {page, totalPage, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <Button className='pagination-btn' onClick={onLeftClick}> ◀️ </Button>
            <div>{page} de {totalPage}</div>
            <Button className='pagination-btn' onClick={onRightClick}> ▶️ </Button>
        </div>
    )
}

export default Pagination;