import React from 'react';
import { setFilter } from '../redux/actions';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import './styles.css';
import classNames from 'classnames';

const VisibilityFilters = ({ setFilter, activeFilter }) => {
  return <div>
    {
      Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        var btnFilter = classNames({
          filter: true,
          btnSelected: currentFilter === activeFilter
        })
        return (
          <span
            className={btnFilter}
            key={`visibility-filter-${currentFilter}`}
            onClick={() => setFilter(currentFilter)}>
            {currentFilter}
          </span>
        )
      })
    }
  </div>
}

const mapStateToProps = state => ({
  activeFilter: state.visibilityFilter
})
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);