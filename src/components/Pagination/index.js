import React from "react";
import './Pagination.css';
import Button from "../Button";

const Pagination = (props) => {
    const {page, totalPage, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <Button onClick={onLeftClick}><div>◀️</div></Button>
            <div>{page} de {totalPage}</div>
            <Button onClick={onRightClick}><div>▶️</div></Button>
        </div>
    )
}

export default Pagination;