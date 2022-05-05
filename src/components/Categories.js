import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" className="status-btn" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h1 className="check-status-text">{categories}</h1>
    </div>
  );
}

export default Categories;
